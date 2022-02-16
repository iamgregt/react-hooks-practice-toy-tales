import React, {useState} from "react";

function ToyForm({onNewToy}) {

  const [toyName, setToyName] = useState("")
  const [toyImage, setToyImage] = useState("")

  function handleToyName(e){
    setToyName(e.target.value)
  }

  function handleToyImage(e){
    setToyImage(e.target.value)
  }

  function handleToySubmit(e){
    e.preventDefault()
    const newToy = {
      "name": e.target[0].value,
      "image": e.target[1].value,
      "likes": 0
    }
    onNewToy(newToy)
  }


  return (
    <div className="container">
      <form onSubmit={handleToySubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleToyName}
          value={toyName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleToyImage}
          value={toyImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
