import React, { useState, useEffect } from "react";
import axios from "axios";

function PlayerCard() {
  const [player, setPlayer] = useState([]);
  const [playerRole, setPlayerRole] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/bootstrap-static/");
        setPlayer(response.data.elements);
        setPlayerRole(response.data.element_types);
        console.log(response.data.elements);
        console.log(response.data.element_types);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const playerId = playerRole.map((role) => {
    return <div>{role.id}</div>;
  });

  const playerRoles = playerRole.map((role) => {
    return <div>{role.plural_name_short}</div>;
  });

  return (
    <div className="container flex items-center justify-center flex-wrap mx-auto gap-4">
      {player.map((item, index) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {`${item.first_name} ${item.second_name}`}
                <div className="badge badge-secondary">
                  {item.element_types === playerId ? playerRoles : "Null"}
                </div>
              </h2>
              <p>Team</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{`Goal: ${item.goals_scored}`}</div>
                <div className="badge badge-outline">{`Assist: ${item.assists}`}</div>
                <div className="badge badge-outline">{`Total Points: ${item.total_points}`}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlayerCard;
