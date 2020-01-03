import React from 'react'

const target = [].filter(x => x.classList.contains('active'))[0]

class Component extends React.Component {
  render() {
    return (
      <div>
        React
      </div>
    )
  }
}

export default Component
