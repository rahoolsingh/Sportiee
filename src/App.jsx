import { useEffect, useState } from "react";
import SportSection from "./components/SportSection/SportSection";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      });
  }, []);

  return (
    data && (
        <>
          <Header/>
          <div className="container w-full max-w-7xl m-auto p-5">
            {data.map((each) => (
              <SportSection data={each} key={each.game} />
            ))}
          </div>
        </>
    )
  );
}

export default App;
