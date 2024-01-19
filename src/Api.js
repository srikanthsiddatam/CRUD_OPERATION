import axios from "axios"
const url="https://fakestoreapi.com/products"
export async function getdata()

{
    
    return await axios.get(url)
}

export async function deleteData(id){
        return await axios.delete(`${url}/${id}`)
    }



