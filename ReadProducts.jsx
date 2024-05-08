import { useEffect, useState } from "react";
import { collection, addDoc,setDoc,doc, getDocs, deleteDoc } from "firebase/firestore/lite"; 
import { firestore } from "../config/firebase";

export default function ReadProducts(){
    
    const [users, setProdcts]=useState([]);
    const fetchDocuments= async()=>{
          let array=[]
          const querySnapshot = await getDocs(collection(firestore, "users"));
          querySnapshot.forEach((doc) => {
            let data=doc.data();
            data.id=doc.id;
            array.push(data);
          console.log(`${doc.id} => ${doc.data()}`);
});
    setProdcts(array)

    }
    const handleUpdate= async(user)=>{
      console.log(user)
      await setDoc(doc(firestore, "users", user.id), {
        name: "Los Angeles",
        age: "CA",
        country: "USA"
      },{merge:true});
      console.log('Document Updated')
    }
    const handleDelete=async(user)=>{
      await deleteDoc(doc(firestore, "users", user.id));
      console.lof('Document Deleted')
    }


    useEffect(()=>{
        fetchDocuments()},[])
    return(
       <main>
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-blue text-center">users</h2>
                        <hr />
                        {users.length>0
                        ?
                        <div className="table-responsive">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">CNIC</th>
      <th scope="col">Vehical No.</th>
      <th scope="col">Adress</th>
    </tr>
  </thead>
  <tbody>

                    
                    {users.map((user,i)=>{
                        return(
                        <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.cnic}</td>
                        <td>{user.vehicalno}</td>
                        <td>{user.address}</td>
                        <td><button onClick={()=>{handleUpdate(user)}}>Update</button></td>
                        <td><button onClick={()=>{handleDelete(user)}}>Delete</button></td>
                      </tr>)
                    })}
                    
                    </tbody>
</table>
</div>
                    :
                    <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
}


                    </div>
                </div>
            </div>
        </div>
       </main>
        )
}