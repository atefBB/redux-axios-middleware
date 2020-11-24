import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider, connect } from 'react-redux';
import { testRequest } from './actions'

const mapDispatchToProps = (dispatch) => {

  return {

    sendRequest:()=>dispatch(testRequest())

  }

}
 
const Button = (props) => {

  var onClick = (res) => {

    props.sendRequest().then((r)=>{
      console.log(r,'But why callbacks defined in action creator doesnt fire?')
    })

  }

  return (

    <button onClick={onClick}>send request</button>

  )

}

const ConnectedButton = connect(null,mapDispatchToProps)(Button)

render(
  <Provider store={store}>
    
    <ConnectedButton />

  </Provider>,
  document.getElementById('root')
)
