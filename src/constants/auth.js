export default function auth() {
  const token = localStorage.getItem('token');
  if (!token) return false
  return {
    headers: {
      authorization: token
    }
  }
}
