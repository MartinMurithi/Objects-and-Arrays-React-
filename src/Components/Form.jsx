import React, { useState } from 'react'

export const Form = () => {

    const [person, setPerson] = useState({
        firstName: "Martin",
        lastName: "Wachira",
        email:"martin100@email.com"
    })

    //updating the first name
    const updateFirstName = (e) => {
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }

    const updateLastName = (e) => {
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }

    const updateEmail = (e) => {
        setPerson({
            ...person,
            email: e.target.value
        })
    }
    
  return (
      <div className='formDiv'>
          <input type="text" value={person.firstName} onChange={updateFirstName}/>
          <input type="text" value={person.lastName} onChange={updateLastName}/>
          <input type="email" value={person.email} onChange={updateEmail} />
          <p>{ person.firstName  } {person.lastName} {person.email} </p>
          {/* To update the obj person, copy all its properties and update the speicifc fields */}

    </div>
  )
}
