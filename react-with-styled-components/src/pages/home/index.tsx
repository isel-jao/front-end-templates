import Button from "../../components/button";
import { useEffect, useRef, useState } from "react";
import useAffirm from "../../hooks/use-affirm";
import ProgressPie from "../../components/progress-pie";
import ProgressBar from "../../components/progress-bar";
import linearGradient from "../../assets/lineare.webp";

const HomePage = () => {
  const [afirm, AffirmModal] = useAffirm({});
  const [progres, setProgres] = useState(0.2);
  return (
    <div
      className="home-page"
      style={{
        padding: "4em",
      }}
    >
      <h1>home page</h1>
      <div className="flex w-full justify-center gap-4 mb-6 align-center flex-wrap">
        <input
          type="number"
          style={{
            border: "1px solid #ccc",
          }}
          onChange={(e) => setProgres(parseFloat(e.target.value / 100))}
        />
        <Button onClick={() => setProgres((p) => p - 0.1)}>-</Button>
        <Button onClick={() => setProgres(0)}>reset progres</Button>
        <Button onClick={() => setProgres((p) => p + 0.1)}>+</Button>
      </div>
      <div className=" flex gap-4 ">
        <ProgressPie
          width="20vw"
          progress={progres}
          stokeWidth={5}
        ></ProgressPie>
        <ProgressPie
          width="20vw"
          progress={progres}
          stokeWidth={50}
          title=""
        ></ProgressPie>
        <ProgressBar width="10vw" progress={progres} />
      </div>
    </div>
  );
};

export default HomePage;
