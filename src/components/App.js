import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  function handleNewToy(newToy){
    console.log(newToy)
    
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then((toyR) => {
      setToys([...toys, toyR])
    })
  }

  function handleDeletedToy(deletedToyId){
    const updatedToys = toys.filter((toy) => {
      return toy.id !== deletedToyId
    })

    fetch(`http://localhost:3001/toys/${deletedToyId}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => setToys(updatedToys))
  }

  function handleNewLike(newToy){
    console.log(newToy)
    fetch(`http://localhost:3001/toys/${newToy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "likes": ++newToy.likes
      })
    }
    )
      .then(r => r.json())
      .then(r => setToys([...toys, r]))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDeletedToy} onLike={handleNewLike} />
    </>
  );
}

export default App;
