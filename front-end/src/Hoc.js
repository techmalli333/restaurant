import React from 'react'
import Login from './Login'

const Hoc = (Component) => {
  return (
    class extends React.Component{
      state={
        auth: true
      }
      render(){
        return(
          <div>
            {this.state.auth ? <Component /> : <Login /> } 
          </div>
        )
      }
    }
  )
}

export default Hoc
