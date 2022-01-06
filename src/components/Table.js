import React from 'react'

const Table = ({addUser}) => {

    return (

        <div>
            {addUser.length >0 ? (
           <div>
           <thead>
               <tr>
                   <th>First Name</th>
                   <th>Email</th>
                   <th>Phone</th>
                   <th>Age</th>
               </tr>
           </thead>
           <tbody>
              { addUser.map((user)=>(
                   <tr key={user.email}>
                       <td>{user.first+" "+user.last}</td>
                       <td>{user.email}</td>
                       <td>{user.phone}</td>
                       <td>{user.age}</td>
                    
                    </tr>
                   
               ))
              }
           </tbody>
          
           </div>) : null}
        </div>
    )
}

export default Table
