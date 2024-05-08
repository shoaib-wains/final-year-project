import { useState } from "react";
import { collection, addDoc,setDoc,doc } from "firebase/firestore/lite"; 
import { firestore } from "../config/firebase";


const initialState={name:'',phone:'',cnic:'',vehicalno:'',address:''};
function Adduser(){


  const [state, setState]=useState(initialState);



  const handelChange =e=>{
      setState({...state,[e.target.name]: e.target.value})
  }
  // const handelSubmit = async(e)=>{
  //     e.preventDefault()
  //     console.log(state)
  //     const{name, age, country}=state

  //     try {
  //       const docRef = await addDoc(collection(firestore, "users"), {name, age, country});
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  // }


  const handelSubmit = async(e)=>{
    e.preventDefault()
    console.log(state)
    const{name, phone, cnic, vehicalno, address}=state
    const randomId= Math.random().toString(36).slice(2);

    try {
      const docRef = await setDoc(doc(firestore, "users", randomId), {name, phone, cnic, vehicalno, address, id: randomId});
      console.log("Document written with ID: ", randomId);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

    return(
      <>
      <form className="col g-3" onSubmit={handelSubmit}>
      <div className="col-md-12">
        <label for="name" className="form-label text-left">Name</label>
        <input type="text" className="form-control" onChange={handelChange} id="exampleFormControlInput1" placeholder="name@example.com" name="name"/>
      </div>
      <div className="col-md-12">
        <label for="inputPassword4" className="form-label">Phone</label>
        <input type="phone" className="form-control" onChange={handelChange} id="inputPassword4" name="phone"/>
      </div>
      <div className="col-12">
        <label for="inputAddress" className="form-label">CNIC</label>
        <input type="cnic" className="form-control" onChange={handelChange} id="inputAddress" placeholder="Your CNIC" name="cnic"/>
      </div>
      <div className="col-12">
        <label for="inputAddress2" className="form-label">Vehicle No:</label>
        <input type="vehicleno" className="form-control" onChange={handelChange} id="inputAddress2" placeholder="Number" name="vehicalno"/>
      </div>
      <div className="col-md-12">
        <label for="inputCity" className="form-label align-left">Address</label>
        <input type="address" className="form-control mb-5" onChange={handelChange} id="inputAddress" name="address"/>
      </div>
 
 
 
      <div className="col-12">
        <button type="submit" className="btn btn-primary" >Submit</button>
      </div>
    </form>
</> )
}
export default Adduser;