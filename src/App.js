import "./App.css";
import React, { useState, useEffect } from "react";

function randomQuote(quotes){
  return quotes[Math.floor(Math.random()*quotes.length)]
  //(returns random index of the array (quote))
}
function App() {
  function getNewQuote() {
    setQuote(randomQuote(quotes))
    setCount(count+1)
  }
  const [quote, setQuote] = useState(null)
  const [quotes, setQuotes] = useState([])
  useEffect(()=>{
    // useEffect is used for side features (fetching, changing DOM)
    fetch("https://type.fit/api/quotes")
      .then((response)=>response.json())
      .then((data)=>{
        setQuotes(data)
        setQuote(data[0])
      });
  },[]);

  useEffect(()=>{
    document.title = `You have clicked ${count} times`
    // setCount(count+1)
  })
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Random quote generator</h1>
      <div className="container">
        <button onClick={getNewQuote}>Random Quote</button>
        <p>{quote?.text}</p>
        <p>{quote?.author}</p>
      </div>
    </>
  );
}

export default App;
