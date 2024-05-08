import React from "react";
import './firebase.jsx'
import {auth} from "./firebase"
import { signOut } from "firebase/auth";

import { Link } from "react-router-dom";
function Shoaib(){
  // const [user,setUser]=useState({});

  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       // const uid = user.uid;
  //       console.log(user);
  //       setUser(user);
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // },[])


  const handelLogout =()=>{
    console.log('Log out Clcked')
    signOut(auth)
      .then(()=>{
        console.log('User Logged out',user)
        setUser({})
      })
    .catch((error)=>{
        console.error(error)
    })

  }
    return(
    //     <div>
    //         <nav>
    //             <Link to="/">Home</Link>
    //             <Link to="/login">Log</Link>
    //             <Link to="/Regist">About</Link>
    //         </nav>
    //     </div>


    
    <div className='nav'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <Link className="navbar-brand" to="#">Traffic Police</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Adduser">Challan</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/ReadProducts">Record</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="#">Action</Link></li>
          <li><Link className="dropdown-item" to="#">Another action</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><button className="btn btn-outline-danger w-50" onClick={handelLogout}>Logout</button></li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
      </li>
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
  </div>
  
    )
}
export default Shoaib;


// function Navbar(){
//     return(
//         <div className='nav'>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="#">Traffic Police</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="#">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="#">Challan</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="#">Record</Link>
//         </li>
//         <li className="nav-item dropdown">
//           <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             More
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="#">Action</Link></li>
//             <li><Link className="dropdown-item" to="#">Another action</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="#">Something else here</Link></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </div>
//     )
// }
// export default Navbar;