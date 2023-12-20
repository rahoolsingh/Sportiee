import { useEffect, useState } from "react";

function TeamCard({ data, img }) {
  const [teamName, setTeamName] = useState(data.team_name);
  const [teamPlayers, setTeamPlayers] = useState(data.players);
  const [plyrCount, setPlyrCount] = useState(0);

  const [newPlayer, setNewPlayer] = useState("hidden");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerAge, setNewPlayerAge] = useState("");

  const [editPlayer, setEditPlayer] = useState("hidden");
  const [editPlayerIndex, setEditPlayerIndex] = useState(-1);

  const handleAddNewPlayer = () => {
    setEditPlayer("hidden")
    setEditPlayerIndex(-1)
    if(newPlayer == "hidden")
      setNewPlayer("");
    else
      setNewPlayer("hidden");
  };

  const handleEditPlayers = () => {
    setNewPlayer("hidden");
    if(editPlayer == "hidden" && plyrCount != 0)
      setEditPlayer("flex")
    else
      setEditPlayer("hidden")
      setEditPlayerIndex(-1)
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

  const handleEditPlayer = (index) => {
    setNewPlayer("hidden");
    setEditPlayerIndex(index === editPlayerIndex ? -1 : index);
  };

  const handleEditPlayerChange = (value, index, field) => {
    const updatedPlayers = [...teamPlayers];
    updatedPlayers[index][field] = value;
    setTeamPlayers(updatedPlayers);
  };
  
  

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
                    className="w-[150px] bg-zinc-900 mx-1 px-1"
                  />
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    value={newPlayerAge}
                    placeholder="-"
                    required
                    onChange={(e) => setNewPlayerAge(e.target.value)}
                    className="w-[30px] bg-zinc-900 text-center mx-1"
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
                  <td className="w-full text-left">
                  {editPlayerIndex === index ? (
                      <input
                        type="text"
                        value={player.name}
                        onChange={(e) => handleEditPlayerChange(e.target.value, index, 'name')}
                        className="w-[150px] bg-zinc-900 mx-1 px-1"
                      />
                    ) : (
                      player.name
                    )}
                  </td>
                  <td className="text-center">
                  {editPlayerIndex === index ? (
                      <input
                        type="text"
                        value={player.age}
                        onChange={(e) => handleEditPlayerChange(e.target.value, index, 'age')}
                        className="w-[30px] bg-zinc-900 text-center mx-1"
                      />
                    ) : (
                      player.age
                    )}
                  </td>
                  <td className={`text-center ${editPlayer}`}>
                    {editPlayerIndex === index ? (
                        <button
                          type="submit"
                          className={`fa-solid fa-check hover:text-red-500 hover:cursor-pointer px-1`}
                          onClick={() => handleEditPlayer(index)}
                        ></button>
                      ) : (
                        <>
                        <button
                          type="submit"
                          className={`fa-solid fa-pen hover:text-red-500 hover:cursor-pointer px-1`}
                          onClick={() => handleEditPlayer(index)}
                        ></button>
                    
                        <button
                          type="cancel"
                          className="fa-solid fa-close hover:text-red-500 hover:cursor-pointer px-1"
                          onClick={() => handleDeletePlayer(index)}
                        ></button>
                        </>
                      )}
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
            <i className={`fa-solid fa-user-pen hover:text-red-500 hover:cursor-pointer ${editPlayer != "hidden" ? 'text-red-500': '' }`}
              onClick={handleEditPlayers}></i>
            <i
              className={`fa-solid fa-user-plus hover:text-red-500 hover:cursor-pointer ${newPlayer != "hidden" ? 'text-red-500': '' }`}
              onClick={handleAddNewPlayer}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
