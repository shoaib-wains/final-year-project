import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../config/firebase"
import { useState, useEffect } from "react";


const initialState={email:'',password:''};
function Login(){


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


    return(
      <div className="py-5">
        <div className="container">
          {user.email
          ?
        <div>
          <h2>Welcome</h2>
          <div className="row">
                  <div className="col">
                  <button className="btn btn-outline-danger w-50" on onClick={handelLogout}>Logout</button>
                  </div>
                </div>
        </div>
        :
        <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="card p-2 p-md-4 p-lg-5">
                <form action="">
                <div className="row mb-4">
                  <div className="col">
                  <input type="email" className="form-control" onChange={handelChange} id="exampleFormControlInput3" placeholder="name@example.com" name="email"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                  <input type="password" className="form-control" onChange={handelChange} id="exampleFormControlInput4" placeholder="name@example.com" name="password"/>
                  </div>
                  <div className="row">
                  <div className="col">
                  <button className="btn btn-outline-success w-50" onClick={handelSubmit}>Login</button>
                  </div>

              </div>
            </div>
                </form>
          </div>
        </div>
      </div>
      }
          
        
         </div>
         </div>





//             {user.email
//             ?
//             <h1>Welcome</h1>
//             :
//             <form action="" onSubmit={handelSubmit}>
//             <div>
//           <div className="mb-3">
//   <label for="exampleFormControlInput1"  className="form-label">Email </label>
//   <input type="email" className="form-control" onChange={handelChange} id="exampleFormControlInput3" placeholder="name@example.com" name="email"/>
// </div>
// <div className="mb-3">
//   <label for="exampleFormControlTextarea1" className="form-label">Password</label>
//   <input type="password" className="form-control" onChange={handelChange} id="exampleFormControlInput4" placeholder="name@example.com" name="password"/>
// </div>
// <div>
//   <button className="btn btn-outline-success w-50">Login</button>
// </div>
// <div>
//   <button className="btn btn-outline-danger w-50" on onClick={handelLogout}>Logout</button>
// </div>
//         </div>
        
              
//           {/* <div><h2>{user.email}</h2></div> */}
        
          
         
//          </form>
//          }
// </div>
//     )
// }




    )}

export default Login;