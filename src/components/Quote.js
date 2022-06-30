import React from "react";

function Quote({ quote }) {
  return (
    <div className="quote">
      <div className="name" title={quote.name}>
        {quote.name}
      </div>

      <blockquote>{quote.message}</blockquote>

      <div className="image" title={quote.image}>
        {quote.image}
      </div>
    </div>
  );
}

export default Quote;
