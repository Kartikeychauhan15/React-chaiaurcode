import React, { useState , useEffect} from 'react'
import {useDispatch} from "react-redux";
import {login, logout} from "./store/authSlice"
import authService from "./appwrite/auth"
import { Footer, Header } from './components';

const App = () => {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();

   useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .catch((error)=>{
      console.error("Error fetching user data:", error);
    })
    .finally(()=> setLoading(false))
   },[])



  // console.log(process.env.REACT_APP_APPWRITE_URL); // yeh nahi chalega
  // console.log(import.meta.env.VITE_APPWRITE_URL)

  return !loading ? <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className="w-full block">
      <Header />
      <main>
         TODO: {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
  </div> : (null)
}

export default App