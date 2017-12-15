import React from 'react'

export default function ProgressBar({votes}) {
  const voteArray = [];
  let totalVotes = 0
  const colors = ['success', 'warning', 'info', 'danger', 'primary']
  for (let key in votes) {
    if (votes[key] > 0) voteArray.push({label: key, voteCount: votes[key]})
    totalVotes += votes[key]
  }
  return (
    <div className="progress">
      {voteArray.map((element, index) => {
        const percentage = (element.voteCount * 100) / totalVotes
        const {label} = element
        const color = colors[index % 5]
        return (
          <div
            key={label}
            className={`progress-bar bg-${color}`}
            style={{width: `${percentage}%`}}
          >
            {label} ({Math.floor(percentage)}%)
          </div>
        )
      })}
    </div>
  )
}