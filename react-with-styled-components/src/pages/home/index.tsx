import Button from "../../components/button";
import { useEffect, useRef, useState } from "react";
import useAffirm from "../../hooks/use-affirm";
import Popover from "../../components/popover";
import Modal from "../../components/modal";

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
      <Popover position="top" offset="0rem">
        <Button
          style={{
            width: "100px",
          }}
        >
          click me
        </Button>
        <div className="p-4 debug">test</div>
      </Popover>
    </div>
  );
};

export default HomePage;
