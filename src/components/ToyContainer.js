import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLike}) {
  return (
    <div id="toy-collection">{toys.map((toy) => {
     return <ToyCard toy={toy} key={toy.id} onDelete={onDelete} onLike={onLike} />
    })}</div>
  );
}

export default ToyContainer;
