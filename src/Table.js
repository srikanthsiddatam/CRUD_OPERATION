const Table = (props) => {
    const {data1,delete1} = props
    return(
        <>
        <table border={3} className=" table m-4">
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>category</th>
                    
                </tr>
                </thead>
                <tbody>
                    
                    {data1.map((item)=>
                    {
                      return  ( 
                            <tr key={item.id}>
                                <td>
                                    {item.id}
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td className="btn btn-primary">Edit</td>
                                <td className="btn btn-danger" onClick={()=>{
                                    delete1(item.id)

                                }}>Delete</td>



                            </tr>
                          
                        )
                    })}
                    
                </tbody>
                
            
        </table>
        
        </>
    )

}
export default Table