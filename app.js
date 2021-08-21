// grab jokes data by API call
const url = "https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=9";

async function getJokes(url) {
  const res = await fetch(url);
  return res.json();
}

// Header Component
function Header() {
  // Code
  return (
    <header>
      <h1>Awesome Random Jokes</h1>
    </header>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

// Note Component (requires props to get jokes)
function Note(props) {
  //Code Here
  return (
    <div className="gallery">
      {props.data.map((joke, index) => (
        <div className="card" key={index}>
          <p>
            <strong>{joke.setup}</strong>
          </p>
          <p>{joke.delivery}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  // importing the react
  const { useState, useEffect } = React;
  // create a useState to hold the jokes
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setJokes(data.jokes);
  };

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((jokes) => {
  //       setJokes(jokes.jokes);
  //       console.log(jokes.jokes);
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    if (jokes.length === 0) {
      fetchJokes();
    }
  });

  return (
    <div>
      <Header />
      <Note data={jokes} />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
