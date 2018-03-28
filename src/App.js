import React from 'react'
// import { connect } from './woniu-react-redux'
// import { addGun, removeGun, addGunAsync,addTwice } from './index.redux'

// 装饰器模式
// @connect(
//   state=>({ num: state}),
//   {addGun, removeGun, addGunAsync,addTwice}
// )
class App extends React.Component{
  render(){
    const store = this.props.store
    const num = store.getState()
    const addGun= this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync

  // console.log(this.props)
    // num addGun，removeGun，addGunAsync都是connect给的，不需要手动dispatch
    return (
      <div>
        <h2>现在有机枪{num}把</h2>
        <button onClick={()=>store.dispatch(addGun())}>申请武器</button>
        <button onClick={()=>store.dispatch(removeGun())}>上交武器</button>
        <button onClick={()=>store.dispatch(addGunAsync())}>拖两天再给</button>

      </div>
    )
  }
}
// App =
// connect(
//   state=>({ num: state}),
//   {addGun, removeGun, addGunAsync}
// )
// (App)
export default App;
