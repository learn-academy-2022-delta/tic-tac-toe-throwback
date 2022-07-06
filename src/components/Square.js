import React, { Component } from 'react'

class Square extends Component {

handleClick = ()=> {
  alert(this.props.index)
}


  render() {
    return(
      <>
        <div className='square' onClick={this.handleClick}></div>
      </>
    )
  }
}
export default Square