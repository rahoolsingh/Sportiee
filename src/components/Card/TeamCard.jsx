import { useEffect, useState } from "react";

function TeamCard({ data, img }) {
  const [teamName, setTeamName] = useState(data.team_name);
  const [teamPlayers, setTeamPlayers] = useState(data.players);
  const [plyrCount, setPlyrCount] = useState(0);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerAge, setNewPlayerAge] = useState("");
  const [editPlayer, setEditPlayer] = useState("hidden");

  const handleAddedPlayer = () => {
    if (newPlayerName.trim() !== "" && newPlayerAge.trim() !== "") {
      const newPlayer = { name: newPlayerName, age: newPlayerAge };
      setTeamPlayers([newPlayer, ...teamPlayers]);
      setNewPlayerName("");
      setNewPlayerAge("");
      setEditPlayer("hidden");
    }
  };

  const handleAddPlayer = () => {
    setEditPlayer("");
  };

  // Player Counter
  useEffect(() => {
    setPlyrCount(teamPlayers.length);
    console.table(teamName, teamPlayers);
  }, [teamPlayers.length, teamName, teamPlayers]);

  return (
    <div
      className="rounded-2xl overflow-hidden bg-cover w-[260px] min-w-fit my-5"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-[#1b1f23b4] text-white py-4 px-4">
        <div className="text-left font-semibold">{teamName}</div>
        <div className="my-2 h-[160px] overflow-x-hidden overflow-scroll pe-1">
          <table>
            <tbody>
              <tr className="text-red-500">
                <th className="w-full text-left">Player</th>
                <th className="text-center">Age</th>
              </tr>

              <tr className={`font-light ${editPlayer}`}>
                <td className="w-full text-left ">
                  <input
                    type="text"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    placeholder="-"
                    required
                    className="w-[150px] bg-transparent mx-1 px-1"
                  />
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    value={newPlayerAge}
                    placeholder="-"
                    required
                    onChange={(e) => setNewPlayerAge(e.target.value)}
                    className="w-[30px] bg-transparent text-center mx-1"
                  />
                </td>
                <td className="text-center">
                  <button
                    type="submit"
                    className="fa-solid fa-square-check hover:text-red-500 hover:cursor-pointer px-1"
                    onClick={handleAddedPlayer}
                  ></button>
                </td>
              </tr>

              {teamPlayers.map((player, index) => (
                <tr key={index} className="font-light">
                  <td className="w-full text-left">{player.name}</td>
                  <td className="text-center">{player.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="m-auto my-3 opacity-50" />
        <div className="flex justify-between text-sm">
          <div>Players: {plyrCount}</div>
          <div className="flex gap-3">
            <i className="fa-solid fa-user-pen hover:text-red-500 hover:cursor-pointer"></i>
            <i
              className="fa-solid fa-user-plus hover:text-red-500 hover:cursor-pointer"
              onClick={handleAddPlayer}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
