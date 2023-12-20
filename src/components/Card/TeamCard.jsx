import { useEffect, useState } from "react";

function TeamCard({ data, img }) {
  const [teamName, setTeamName] = useState(data.team_name);
  const [teamPlayers, setTeamPlayers] = useState(data.players);
  const [plyrCount, setPlyrCount] = useState(0);

  const [editPlayer, setEditPlayer] = useState("hidden");
  const [newPlayer, setNewPlayer] = useState("hidden");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerAge, setNewPlayerAge] = useState("");

  const handleAddPlayerBtn = () => {
    setEditPlayer("hidden")
    if(newPlayer == "hidden")
      setNewPlayer("");
    else
      setNewPlayer("hidden");
  };

  const handleEditPlayerBtn = () => {
    setNewPlayer("hidden");
    if(editPlayer == "hidden")
      setEditPlayer("flex")
    else
      setEditPlayer("hidden")
  }

  const handleNewPlayer = () => {
    if (newPlayerName.trim() !== "" && newPlayerAge.trim() !== "") {
      const newPlayer = { name: newPlayerName, age: newPlayerAge };
      setTeamPlayers([newPlayer, ...teamPlayers]);
      setNewPlayerName("");
      setNewPlayerAge("");
      setNewPlayer("hidden");
    }
  };

  const handleCloseNewPlayer = () => {
    setNewPlayer("hidden");
  };

  const handleDeletePlayer = (index) => {
    const updatedPlayers = [...teamPlayers];
    updatedPlayers.splice(index, 1);
    setTeamPlayers(updatedPlayers);
  }

  // Player Counter
  useEffect(() => {
    setPlyrCount(teamPlayers.length);
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

              <tr className={`font-light ${newPlayer}`}>
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
                <td className="text-center flex">
                  <button
                    type="submit"
                    className="fa-solid fa-check hover:text-red-500 hover:cursor-pointer px-1"
                    onClick={handleNewPlayer}
                  ></button>
                  <button
                    type="cancel"
                    className="fa-solid fa-close hover:text-red-500 hover:cursor-pointer px-1"
                    onClick={handleCloseNewPlayer}
                  ></button>
                </td>
              </tr>

              {teamPlayers.map((player, index) => (
                <tr key={index} className="font-light">
                  <td className="w-full text-left">{player.name}</td>
                  <td className="text-center">{player.age}</td>
                  <td className={`text-center ${editPlayer}`}>
                    <button
                      type="submit"
                      className="fa-solid fa-pen hover:text-red-500 hover:cursor-pointer px-1"
                      // onClick={handleEditPlayer}
                    ></button>
                    <button
                      type="cancel"
                      className="fa-solid fa-close hover:text-red-500 hover:cursor-pointer px-1"
                      onClick={() => handleDeletePlayer(index)}
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="m-auto my-3 opacity-50" />
        <div className="flex justify-between text-sm">
          <div>Players: {plyrCount}</div>
          <div className="flex gap-3">
            <i className="fa-solid fa-user-pen hover:text-red-500 hover:cursor-pointer"
              onClick={handleEditPlayerBtn}></i>
            <i
              className="fa-solid fa-user-plus hover:text-red-500 hover:cursor-pointer"
              onClick={handleAddPlayerBtn}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
