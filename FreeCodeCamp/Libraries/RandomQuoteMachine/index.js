"use strict";
//=================================================
//Elements:
const root = document.getElementById("root");
//=================================================
//Styles;
const styles = {
  container: {
    width: "50%",
    height: "fit-content",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
//=================================================
const QuoteBox = (props) => {
  //---------------------------------------------
  const pressets = {
    url: "https://type.fit/api/quotes",
  };
  const [quotes, setQuotes] = React.useState([]);
  const [quote, setQuote] = React.useState({});
  const [ready, setReady] = React.useState(false);
  //---------------------------------------------
  function getRandomQuote(data) {
    return setQuote(data[Math.round(Math.random() * data.length)]);
  }
  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const quotes = await response.json();
    setQuotes(quotes);
    setReady(true);
    getRandomQuote(quotes);
  };
  //+++++++

  //---------------------------------------------
  React.useEffect(() => {
    fetchQuotes(pressets.url);
  }, []);
  //-------------------------------------------------------
  if (!ready) {
    return (
      <div
        className="loader text-center text-uppercase fs-1 fw-bold"
        style={styles.loader}
      >
        Loading
      </div>
    );
  } else {
    return (
      <div className="container p-5" id="quote-box" style={styles.container}>
        <div className="card border-1 border-dark">
          <div className="card-body">
            <p className="card-text fst-italic fs-5" id="text">
              &quot;{quote.text}&quot;
            </p>
            <p className="card-text" id="author">
              <small className="fs-6 fw-bold">
                - {quote.author || "Author unknown"} -
              </small>
            </p>
            <div className="row m-auto">
              <button
                id="new-quote"
                onClick={() => getRandomQuote(quotes)}
                className="btn btn-success fw-bold col-4"
              >
                Next Quote
              </button>
              <div className="col-4"></div>
              <a
                id="tweet-quote"
                className="btn btn-primary col-4 fw-bold"
                href="https://twitter.com/intent/tweet"
                target="blank"
              >
                Twitter<i className="bi bi-twitter ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
//-------------------------------------------------
const App = (props) => {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
};
//=================================================

//=================================================
//Rendering:
ReactDOM.render(<App />, root);
