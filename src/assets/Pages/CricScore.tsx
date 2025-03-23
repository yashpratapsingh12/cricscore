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

// type data = {
//   matches: Match[];
//   loading: boolean;
// };

const CricScore = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>("ss");

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `https://api.cricapi.com/v1/cricScore?apikey=${
            import.meta.env.VITE_API_KEY
          }`
        );

        const data = await response.json();
        console.log(data);

        setMatches(data?.data || []);
      } catch (error) {
        // setError("Cannot Fetch data");
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

      <div>
        {isLoading ? (
          <img src={Loader} className="w-16 h-16 mt-80" />
        ) : matches.length === 0 ? (
          <div className="font-semibold mt-20 text-xl">
            Looks like we've been hitting the API too hard. Take a break, grab a
            coffee ☕, and check back in a few minutes!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {matches.map((items) => (
              <div
                key={items.id}
                className="flex flex-col items-center border border-green-700 rounded-lg p-4"
              >
                <h3 className="font-bold">{items.series}</h3>
                <h3>{items.matchType.toUpperCase()}</h3>

                <div>
                  <img className="w-12 h-12" src={items.t1img} alt={items.t1} />
                  <p className="font-semibold">{items.t1s}</p>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <img className="w-12 h-12" src={items.t2img} alt={items.t2} />
                  <p className="font-semibold">{items.t2s}</p>
                </div>

                <p>{items.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CricScore;
