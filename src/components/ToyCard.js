import React from "react";

function ToyCard({toy, onDelete, onLike}) {

function handleGoodwillClick(){
    onDelete(toy.id)
  }

function handleLikeClick(){
  onLike(toy)
}

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleGoodwillClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
