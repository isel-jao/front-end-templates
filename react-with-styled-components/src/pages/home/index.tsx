import Button from "../../components/button";
import { useEffect, useRef, useState } from "react";
import useAffirm from "../../hooks/use-affirm";
import Popover from "../../components/popover";
import Modal from "../../components/modal";

const HomePage = () => {
  const [afirm, AffirmModal] = useAffirm({});
  const [open, setOpen] = useState(false);
  return (
    <div
      className="home-page"
      style={{
        padding: "4em",
      }}
    >
      <div className="flex gap-4">
        <span>open</span>
        <span>{JSON.stringify(open)}</span>
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        open modal
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className="bg-slate-50 text-slate-500 text-4xl  rounded p-4"
        style={{
          minWidth: "20rem",
          minHeight: "15rem",
        }}
      >
        test
      </Modal>
    </div>
  );
};

export default HomePage;
