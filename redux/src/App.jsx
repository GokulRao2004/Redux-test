import './App.css';
import { Component } from './Components/Component';
import store from './Store/store';

function App() {

  const unsub = store.subscribe(()=>{
    console.log("hello :" , store.getState());
  })

  store.dispatch({
    type: "bugAdded",
    payload:{
      description: "BUG100"
    }
  }) 
  
  unsub();
  store.dispatch({
    type: "bugRemoved",
    payload:{
      id : 1
    }

  })
  console.log(store.getState())

  return (
    <Component />
  )
}

export default App
