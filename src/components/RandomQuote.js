import React from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = React.useState([]);
  const [isLoading, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(null);
  const getQuote = async () => {
    setIsLoaded(true);
    const category = 'knowledge';
    await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'OV78NUwb3sjc0Yz1CrMfsA==TuJvAMm8hehWMWql',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json()).then((data) => {
      setQuote(data);
    }).catch((error) => {
      setHasError(error);
      setIsLoaded(false);
    });
    setIsLoaded(false);
  };

  React.useEffect(() => {
    getQuote();
  }, []);

  if (isLoading) {
    return (
      <div className="quote-loading">
        <p>  Loading...</p>
      </div>
    );
  } if (hasError) {
    return (
      <div className="quote-error">
        <p>Something went wrong...</p>
      </div>
    );
  }

  return (
    <div className="quote">
      {quote?.map((item) => (
        <div key={item.id + 1}>
          <p className="quote-text">{item.quote}</p>
          <p className="quote-author">{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomQuote;
