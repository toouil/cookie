function App() {
  const endPoint = import.meta.env.VITE_END_POINT

  return (
    <h1>
      <button
        onClick={() =>
          fetch(endPoint + "/get-cookie", {
            credentials: "include",
          })
          .then(res => res.json())
          .then(data => console.log(data))
        }
      >
        get
      </button>
      <button
        onClick={() =>
          fetch(endPoint + "/set-cookie", {
            credentials: "include"
          })
        }
      >
        set
      </button>
      <button
        onClick={() =>
          fetch(endPoint + "/delete-cookie", {
            credentials: "include"
          })
        }
      >
        delete
      </button>
    </h1>
  );
}

export default App;