import axios from "axios";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux"
import { logoutUser } from "../store/auth/thunks";


export const Dashboard = () => {
  const { email } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  console.log(email);
  

  const onLogout = () => {
   
    dispatch( logoutUser());

  }


  return (
    <div className="font-bold text-green-500">Dashboard
    
      <button onClick={onLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
    </div>
  )
}
