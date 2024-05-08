import './App.css'
import './Registerr/Register.jsx'
import Register from './Registerr/Register.jsx'
import './Pages/login.jsx'
import Login from './Pages/login.jsx'
import './Pages/Adduser.jsx'
import Adduser from './Pages/Adduser.jsx'
import './Pages/ReadProducts.jsx'
import ReadProducts from './Pages/ReadProducts.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './Registerr/Register.jsx'
import Regist from './Registerr/regist.jsx'
import'./shoaib.jsx'
import Shoaib from './shoaib.jsx'
import './Pages/morehome.jsx'
import More from './Pages/morehome.jsx'
import './Pages/footer.jsx'
import Myfooter from './Pages/footer.jsx'

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './firebase.jsx'
import {auth} from "./firebase.jsx"
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova'
import './Pages/home.jsx'
import Slideimg from './Pages/home.jsx'

// import { Link } from "react-router-dom";

const initialState={email:'',password:''};
function App() {
// The huge coding in App.jsx is due to writting login component code i App.jsx



  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {path:'/*', 
    element:<> <Shoaib /> <Slideimg /> <More /><Myfooter /></>},
    {path:'/Adduser',
  element:<><Shoaib /> <Adduser /> </>},
    {path:'/ReadProducts',
  element:<><Shoaib /> <ReadProducts /> <Myfooter /></>},
  ])

  const [state, setState]=useState(initialState);
  const [user,setUser]=useState({});
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[])

  const handelChange =e=>{
      setState({...state,[e.target.name]: e.target.value})
  }
  const handelSubmit =(e)=>{
      e.preventDefault()
      console.log(state)
      const{email, password}=state


      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        console.log('User Signed in Successfully')
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.error(error)
      })};

    
      const handelSubmit2 =(e)=>{
        e.preventDefault()
        console.log(state)
        const{email, password}=state
  
  
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          console.log('User Signed in Successfully')
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          console.error(error)
        })};



      const handelLogout =()=>{
        console.log('Log out Clcked')
        signOut(auth)
          .then(()=>{
            console.log('User Logged out')
            setUser({})
          })
        .catch((error)=>{
            console.error(error)
        })

      }

  return (
    <>
    {/* <RouterProvider router={router}/> */}
      {/* <Register/> */}
      {/* <Login /> */}
      {/* <Adduser /> */}
      {/* <ReadProducts /> */}
      {/* <Shoaib/> */}
      {/* <Challan /> */}
      {/* <Slideimg /> */}
      
      <div className="py-5">
        <div className="container">
          {user.email
          ?
        <div>
          <h2>Welcome</h2>
          <div className="row align-items-end">
                  <div className="col">
                  <button className="btn btn-outline-danger w-20" on onClick={handelLogout}>Logout</button>
                  </div>
                </div>
          <div>
          <RouterProvider router={router}/>
          </div>

        </div>
        :
        <div>
          <div class="form-floating mb-3">
  <input type="email" class="form-control" onChange={handelChange} id="floatingInput" placeholder="name@example.com" name='email'/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" onChange={handelChange} id="floatingPassword" placeholder="Password" name='password'/>
  <label for="floatingPassword">Password</label>
</div>
<div className="row">
                   <div className="col">
                   <button className="btn btn-outline-success w-50" onClick={handelSubmit}>Login</button>
                   </div>
                   <div className="col">
                   <button className="btn btn-outline-success w-50" onClick={handelSubmit2}>Register</button>
                   </div>

               </div>
        </div>



      //   <div className="row">
      //       <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      //         <div className="card p-2 p-md-4 p-lg-5">
      //           <form action="">
      //           <div className="row mb-4">
      //             <div className="col">
      //             <input type="email" className="form-control" onChange={handelChange} id="exampleFormControlInput3" placeholder="name@example.com" name="email"/>
      //             </div>
      //           </div>
      //           <div className="row">
      //             <div className="col">
      //             <input type="password" className="form-control" onChange={handelChange} id="exampleFormControlInput4" placeholder="name@example.com" name="password"/>
      //             </div>
      //             <div className="row">
      //             <div className="col">
      //             <button className="btn btn-outline-success w-50" onClick={handelSubmit}>Login</button>
      //             </div>
      //             <div className="col">
      //             <button className="btn btn-outline-success w-50" onClick={handelSubmit2}>Register</button>
      //             </div>

      //         </div>
      //       </div>
      //           </form>
      //     </div>
      //   </div>
      // </div>
      }
          
        
         </div>
         </div>
      
    </>
  )
}

export default App
