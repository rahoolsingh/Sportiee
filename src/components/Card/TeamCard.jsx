import { useEffect, useState } from "react";

function TeamCard({ data, img }) {

  const [plyrCount, setPlyrCount] = useState(0);
  useEffect(() => {
    setPlyrCount(data.players.length);
  }, [data.players]);
  return (
    <div className="rounded-2xl overflow-hidden bg-cover w-[260px] min-w-fit my-5" style={{ backgroundImage: `url(${img})`}}>
      <div className="bg-[#1b1f23b4] text-white py-4 px-4">
        <div className="text-left font-semibold">
          {data.team_name}
        </div>
        <div className="my-2 h-[160px] overflow-x-hidden overflow-scroll pe-1">
          <table>
            <tbody>
              <tr className="text-red-500">
                <th className="w-full text-left">Player</th>
                <th className="text-center">Age</th>
              </tr>
              {data.players.map((player, index) => (
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
            <i className="fa-solid fa-user-plus hover:text-red-500 hover:cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
