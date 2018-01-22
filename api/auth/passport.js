const passport = require('passport');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const passwordHash = require('password-hash');
const { poolQuery } = require('../helpers');
const localOptions = {};

const query = `
  SELECT id, username, password FROM users WHERE
`;

const localLogin = new LocalStrategy(
  localOptions,
  async (username, password, done) => {
    const usernameLowered = username.toLowerCase();
    try {
      const [result = null] = await poolQuery(
        query + 'username = ?',
        usernameLowered
      );
      if (!result) return done(null, false);
      const hashedPass = result.password;
      if (passwordHash.verify(password, hashedPass)) {
        let user = {};
        for (let key in result) {
          if (key !== 'password') user[key] = result[key];
        }
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.jwtSecret
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const [result = null] = await poolQuery(query + 'id = ?', payload.sub)
    if (!result) return done(null, false)
    let user = {};
    for (let key in result) {
      if (key !== 'password') user[key] = result[key];
    }
    done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(jwtLogin);
passport.use(localLogin);
