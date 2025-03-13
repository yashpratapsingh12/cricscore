import { useEffect, useState } from "react";
import Loader from "../Components/Infinity@1x-1.0s-200px-200px.svg";

type Match = {
  id: string;
  dateTimeGMT: string;
  matchType: string;
  status: string;
  ms: string;
  t1: string;
  t2: string;
  t1s: string;
  t2s: string;
  t1img: string;
  t2img: string;
  series: string;
};

type data = {
  matches: Match[];
  loading: boolean;
};

const CricScore = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [Error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `https://api.cricapi.com/v1/cricScore?apikey=${
            import.meta.env.VITE_API_KEY
          }`
        );

        const data = await response.json();
        setMatches(data?.data || []);
      } catch (error) {
        setError("Cannot Fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="flex flex-col items-center mt-2 h-screen">
      <div className="font-semibold text-green-700 text-2xl mb-3">
        CricScore
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {isLoading ? (
          <img src={Loader} className="w-16 h-16 " />
        ) : Error ? (
          <div>{Error}</div>
        ) : (
          matches.map((items) => (
            <div
              key={items.id}
              className="flex flex-col items-center border-1 border-green-700 rounded-lg "
            >
              <h3>{items.series}</h3>
              <h3>{items.matchType}</h3>
              <div>
                <img className="w-12 h-12" src={items.t1img} alt={items.t1} />
                <p>{items.t1s}</p>
              </div>

              <div>
                <img className="w-12 h-12" src={items.t2img} alt={items.t2} />
                <p>{items.t2s}</p>
              </div>
              <p>{items.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CricScore;
