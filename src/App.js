import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState({
    name: null,
    message: null,
    image: null,
  });

  const fetchQuote = async () => {
    return await fetch("http://localhost:3040/quotes").then((response) =>
      response.json()
    );
  };

  useEffect(async () => {
    setQuote(await fetchQuote());
  }, []);

  return (
    <div className="App">
      <Quote quote={quote} />
    </div>
  );
}

export default App;
