import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_PRODUCT_PENDING } from "./redux-saga/admin/action";


function App() {
  let dispatch = useDispatch()
  useEffect=(()=>{
    dispatch({type: GET_PRODUCT_PENDING})
  },[])
}

export default App;
