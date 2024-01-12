import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "./catState";

function App() {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.gallery.breeds);

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  console.log("cats", cats);
  return (
    <div className="App">
      <h1>CAT BREEDS GALLERY</h1>
      <p>
        Images of different cat breeds. Lots of puddy tat's for your viewing
        pleasure
      </p>
      <hr />
      <div className="GALLERY">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
            <img
              src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
              alt={cat.name}
              width="200"
              height="200"
            />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
