import { useEffect, useState } from "react";

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
