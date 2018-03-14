import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout/index.jsx'

class App extends React.Component {
  render() {
    return (
      <Layout />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))