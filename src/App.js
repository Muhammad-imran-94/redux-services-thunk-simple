import { useEffect } from "react";
import {useSelector , useDispatch } from "react-redux";
import {GetData} from './actions'
import './App.css';

function App() {
  const users= useSelector(state => state.users.users);
  console.log('this is users', users);
  const dispatch = useDispatch();
  useEffect(()=>{
    GetData(dispatch)
  },[]) 

  return (
    <div className="App">
       {/* user: {users} */}
       
      {users && users.length > 0 && users.map((item,index)=>
      <div key={index} className="user-counter">
      <div>{item.name}</div>
      <div>{item.username}</div>
      </div>
      )}
    </div>
  );
}

export default App;