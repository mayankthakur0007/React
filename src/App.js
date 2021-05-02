import "./App.css";

function App() {
  // const name = {
  //   First: 'Mayank',
  //   Last: "Singh"
  // }

  let movies = [
    {
      id:'1',
      name: "Dark",
      genre: "Horror"
    },
    {
      id:'2',
      name: "Inception",
      genre: "Suspense"
    },
    {
      id:'3',
      name: "Sixth Sense",
      genre: "Fiction"
    },
    {
      id:'4',
      name: "13 Reasons why",
      genre: "Death"
    },
    {
      id:'5',
      name: "Money Heist",
      genre: "Action"
    }
  ];

  const set = (e) => {
    console.log(e);
  };

  return (
    <table id='customers'>
      <thead >
      <tr>
        <th>Genre</th>
        <th>Action</th>
      </tr>
      </thead>
      {movies.map((movie) => {
        return (
          <>
          <tbody>
            <tr> 
              <td key={movie.id}>{movie.genre}</td>
              <td> 
                <button onClick={() => set(movie.id)} key={movie.id}>
                  {movie.name}
                </button>
              </td>
           </tr>
            </tbody>
          </>
        );
      })}
    </table>
  );
}

export default App;
