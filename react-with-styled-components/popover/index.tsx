import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import React from "react";
const offsetY = "0.5rem";

const StyledPopver = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
  .popover {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 100%;
    left: 50%;
    transform: translate(-50%, ${offsetY});
    background-color: #fff;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    padding: 0.5rem;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 9999;
  }
  .open {
    animation: open 0.3s ease;
  }

  @keyframes open {
    /* 0% {
      transform: translate(-50%, -2rem);
    } */
    /* 50% {
      transform: translate(-50%, calc(${offsetY} + 0.5rem));
    } */
    /* 100% {
      transform: translate(-50%, ${offsetY});
    } */
  }
`;
interface PopoverProps {
  children: [React.ReactNode, React.ReactNode];
}

const Popover = (props: PopoverProps) => {
  const firstChildRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeEvent = (e: MouseEvent) => {
      if (
        firstChildRef.current &&
        !firstChildRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", closeEvent);

    return () => {
      document.removeEventListener("click", closeEvent);
    };
  }, []);
  return (
    <StyledPopver className="">
      <div
        onClick={() => setOpen(!open)}
        ref={firstChildRef}
        className="element"
      >
        {props.children[0]}
      </div>
      <div
        style={{ opacity: open ? 1 : 0, display: open ? "block" : "none" }}
        className={`popover ${open && "open"}`}
      >
        {props.children[1]}
        waza
      </div>
    </StyledPopver>
  );
};

export default Popover;
