import React from 'react';

const PetList = (props) => {
  const pets = props.petList.map((pet) => (
    <a key={pet._id} onClick={() => props.updateSelected(pet)}>
      <li>{pet.name}</li>
    </a>
  ));

  return (
    <div>
      <h1>Pet List</h1>
      <button onClick={props.handleFormView}>
        {props.isFormOpen ? 'Close Form' : 'New Pet'}
      </button>
      <ul>{pets}</ul>
    </div>
  );
};

export default PetList;
