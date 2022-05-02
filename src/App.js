import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {ADD, LOGIN} from "./modules/calendar";

function App() {
  const dispatch = useDispatch();
  const user_list = useSelector((state) => { return state.user_list})
  const isLoggedIn = useSelector((state) => { return state.isLoggedIn})

  function add() {
    dispatch({
      type: ADD,
      foo: {
        username: 'user3',
        password: 'pass1'
      }
    })
  }

  function find() {
    dispatch({
      type: LOGIN,
      creds: {
        username: 'user3',
        password: 'pass1'
      }
    })
  }

  return <>
    <button onClick={add}>add</button>
    <button onClick={find}>find</button>
    {/*{user_list.map(u => <h1>{u.username}</h1>)}*/}
    <h1>is logged in: {isLoggedIn ? 'true' : 'false'}</h1>
  </>
}

export default App;
