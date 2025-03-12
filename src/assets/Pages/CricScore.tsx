import { useEffect, useState } from "react";

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

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          "https://api.cricapi.com/v1/cricScore?apikey=f82b10e9-e469-4f43-a441-725fef3835f0"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching match data:", error);
      } finally {
      }
    };

    fetchMatches();
  }, []);
  return <div>Cricscore</div>;
};

export default CricScore;
