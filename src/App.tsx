import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, Setdata] = useState([]);

  useEffect(() => {
    const fectdata = async () => {
      try {
        await fetch(
          `https://api.cricapi.com/v1/currentMatches?apikey=${
            import.meta.env.VITE_API_KEY
          }&offset=0`
        )
          .then((res) => res.json())
          .then((dat) => console.log(dat));
      } catch (error) {
        console.log(error);
      }
    };
    fectdata();
  }, []);

  return <div></div>;
}

export default App;
