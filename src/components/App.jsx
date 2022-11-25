import React from "react";
import joy from "../joy";
import Card from "./Card";

// Using a function that receive the array with objects and points into the right
// path in the objects. 

function cardEntry(arrObj) {
  return (
    <Card
      key={arrObj.id}
      title={arrObj.title}
      img={arrObj.img}
      url={arrObj.url}
      date={arrObj.date}
    />
  );
}

function App() {

  return (
    <>
      <div className="cards">
        <header className="animate__animated animate__bounce">
          Life is all about J🐶Y
        </header>
        {/* Running the function and mapping the object in the array */}
        {joy.map(cardEntry)}
      </div>
    </>
  );
}

export default App;
