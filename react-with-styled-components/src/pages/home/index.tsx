import Button from "../../components/button";
import { useState } from "react";
import useAffirm from "../../hooks/use-affirm";
const HomePage = () => {
  const [afirm, AffirmModal]  = useAffirm({});
  return (
    <div
      className="home-page"
      style={{
        padding: "4em",
      }}
    >
      <h1>Home Page</h1>
      <Button
        onClick={() => {
          afirm(() => {
            console.log("affirmed");
          });
        }}
      >
        Affirm
      </Button>
      <AffirmModal />
    </div>
  );
};

export default HomePage;
