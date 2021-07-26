import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";



console.log(GryffFunctions.colors);
// => 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'

GryffFunctions.values();

// GryffFunctions.values();
// => Attempted import error

function Hogwarts() {
  whoseHouse();

  return (
    <div>
      <h1>Welcome to Hogwarts!</h1>
      <Hufflepuff />
    </div>
  );
}

export default Hogwarts;