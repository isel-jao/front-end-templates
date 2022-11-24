import Button from "../../components/button";
import Modal from "../../components/modal";
import { useState } from "react";
const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="home-page"
      style={{
        padding: "4em",
      }}
    >
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        open modal
      </Button>
      <h1>Menu</h1>
      <h3
        style={{
          color: "#AA3535",
        }}
      >
        Food & Drinks
      </h3>
      <Modal open={open}>
        <div
          style={{
            padding: "2em",
          }}
        >
          <h1>Modal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
          </p>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
