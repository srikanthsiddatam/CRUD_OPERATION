import Table from './Table'
import Form from './Form'
import { useEffect,useState } from 'react'
import {getdata,deleteData}from "./Api"

const App = () =>{
  const[data,setdata]=useState([])

  useEffect(()=>{
 getproduct()

  },[])

  let getproduct = async ( ) => {
    let res= await getdata()
  //  let data= res.props.children.data
  let data=res.data  
  setdata(data)
    console.log(data)

  }
  let deleteproduct = async (id) =>{
    await deleteData(id);
    getproduct()
  }

 




  return(
    <>
    <div className="container ">
      <h1>these is crud operation</h1>
      <button className='btn btn-primary'>Add product</button>
       <Table data1={data} delete1={deleteproduct}/>
      
    </div>
    
    </>
  )
}
export default App