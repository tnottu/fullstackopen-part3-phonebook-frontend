import React from 'react'

const Person = ({ person, handleRemove }) => (
  <div key={person.name}>{person.name} {person.number} <button onClick={() => handleRemove(person)}>delete</button></div>
)

const Persons = ({ persons, handleRemove }) => (
  <div>
    {persons.map((person) => {
      return <Person key={person.name} person={person} handleRemove={handleRemove} />
    })}
  </div>
)

export default Persons;
