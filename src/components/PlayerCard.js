import React, { useState, useEffect } from "react";
import axios from "axios";

function PlayerCard() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/bootstrap-static/");
        setPlayer(response.data.elements);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-20 grid grid-cols-4 gap-4">
      {player.map((item) => {
        console.log(item);
        return (
          <div className="flex flex-col bg-secondary-color p-5 items-start justify-start rounded-md text-white">
            <span>{`${item.first_name} ${item.second_name}`}</span>
            <span>{`Goal: ${item.goals_scored}`}</span>
            <span>{`Assist: ${item.assists}`}</span>
          </div>
        );
      })}
    </div>
  );
}

export default PlayerCard;
