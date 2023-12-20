import { useEffect, useState } from "react";
import TeamCard from "../Card/TeamCard";

function SportSection({ data }) {

    const img = data.game;
    const [res, setRes] = useState([]);

      useEffect(() => {
        fetch(
            `https://api.unsplash.com/search/photos?query=${img}&client_id=${import.meta.env.VITE_ACCESS_KEY}`
          ).then((data)=> data.json())
          .then(dataJ => {
              setRes(dataJ.results)
          })
      }, [res.length]);

  return res.length && (
    <div className="my-5 pb-2 rounded-md overflow-hidden shadow-sm">
      <div className="px-4 py-3 text-white font-bold text-xl bg-[#1e1e1f] rounded-xl flex justify-between align-middle">
        <span>{data.game}</span>
        <span className="btn text-sm py-1 bg-zinc-800 rounded-md text-white px-2"><i className="fa-solid fa-plus"></i> Add Team</span>
      </div>
      <div className="lg:flex lg:w-full md:flex md:w-full w-fit m-auto gap-5 my-5">
        {data.teams.map((team, index) => (
          <TeamCard data={team} img={res[index].urls.small} key={team.team_name} />
        ))}
      </div>
    </div>
  );
}

export default SportSection;
