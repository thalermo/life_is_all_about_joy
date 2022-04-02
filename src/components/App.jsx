import React from "react";
import joy from "../joy";
import Card from "./Card";

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
  // return <h1>Hello World!</h1>;
  return (
    <>
      <div className="cards">
        <header className="animate__animated animate__bounce">
          Life is all about J🐶Y
        </header>
        {joy.map(cardEntry)}
      </div>
    </>
  );
}

export default App;
