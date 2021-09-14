import * as React from 'react';

const Pokemons = () => {
  const [poke, setPoke] = React.useState([]);

  React.useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=20';
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(data => {
        setPoke(data.results);
      })
      .catch(err =>
        console.log(`Se rompio todo, fue un error ${err.status}`, err)
      );
  }, []);

  return (
    <div>
      {poke?.map(pokemon => {
        return <p>{pokemon.name}</p>;
      })}
    </div>
  );
};

export default Pokemons;
