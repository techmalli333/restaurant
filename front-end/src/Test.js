import React from "react";

class Test extends React.Component{
  render(){
    return(
      <div>
        <center>
          <h1>Name: {this.props.name}</h1>
          <h1>Age: {this.props.age}</h1>
        </center>
      </div>
    )
  }
}

export default Test;

