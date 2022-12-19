import dataCenterIcon from "../../assets/icons/data-center.svg";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const StyledPopver = styled.div`
  position: relative;
  width: fit-content;
  .popover {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    transition: opacity 0.5s ease;
    z-index: 9999;
  }
  .top {
    animation: top 0.3s ease;
  }
  .bottom {
    animation: bottom 0.3s ease;
  }
  .left {
    animation: left 0.3s ease;
  }
  .right {
    animation: right 0.3s ease;
  }

  @keyframes top {
    0% {
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes bottom {
    0% {
      bottom: 50%;
      transform: translate(-50%, 50%);
    }
  }
  @keyframes left {
    0% {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes right {
    0% {
      right: 50%;
      transform: translate(50%, -50%);
    }
  }
`;
interface PopoverProps {
  children: [React.ReactNode, React.ReactNode];
  position?: "top" | "bottom" | "left" | "right";
  offset?: string;
}

const Popover = (props: PopoverProps) => {
  const firstChildRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const offset = props.offset || "0.5rem";
  const positionMap = {
    top: {
      top: `-${offset}`,
      left: "50%",
      transform: "translate(-50%, -100%)",
    },
    bottom: {
      bottom: `-${offset}`,
      left: "50%",
      transform: "translate(-50%, 100%)",
    },
    left: {
      top: "50%",
      left: `-${offset}`,
      transform: "translate(-100%, -50%)",
    },
    right: {
      top: "50%",
      right: `-${offset}`,
      transform: "translate(100%, -50%)",
    },
  };
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
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          padding: typeof props.children[1] === "string" ? "0.5rem" : "0",
          ...positionMap[props.position || "bottom"],
        }}
        className={`popover ${open && props.position}`}
      >
        {props.children[1]}
      </div>
    </StyledPopver>
  );
};

export default Popover;
