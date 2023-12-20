import { useEffect, useState } from "react";
import TeamCard from "../Card/TeamCard";

function SportSection({ data }) {
  const clientId = import.meta.env.VITE_ACCESS_KEY;
  const img = data.game;
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (clientId) {
      fetch(
        `https://api.unsplash.com/search/photos?query=${img}&client_id=${
          clientId
        }`
      )
        .then((data) => data.json())
        .then((dataJ) => {
          setRes(dataJ.results);
        })
        .catch((e) => {
          console.log("Error :: Unable to fetch unsplash images :: ", e);
        });
    }
  }, [res && res.length]);

  return (
    <div className="my-5 pb-2 rounded-md overflow-hidden shadow-sm">
      <div className="px-4 py-3 text-white font-bold text-xl bg-[#1e1e1f] rounded-xl">
        <span>{data.game}</span>
      </div>
      <div className="lg:flex lg:w-full md:flex md:w-full w-fit m-auto gap-5 my-5">
        {data.teams.map((team, index) => (
          <TeamCard
            data={team}
            img={res && res.length && res[index].urls.small}
            key={team.team_name}
          />
        ))}
      </div>
    </div>
  );
}

export default SportSection;
