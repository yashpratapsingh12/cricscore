import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

type player = {
  id: number;
  name: string;
  teamName: string;
  faceImageId: number;
  dob: number;
};

const PlayersList = () => {
  const [players, setPlayers] = useState<player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  return <div>PlayersList</div>;
};

export default PlayersList;
