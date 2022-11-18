import React from "react";
import styled from "styled-components";

const StyledToolTip = styled.div`
  position: relative;
  .tool-tip {
    position: absolute;
    bottom: 1em;
    left: 50%;
    transform: translate(-50%, 100%);
    background-color: #1d1d27ac;
    backdrop-filter: blur(0.5em);
    border-radius: 0.5em;
    padding: 1em;
    pointer-events: none;
    opacity: 0;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: opacity, bottom;
  }
  &:hover {
    .tool-tip {
      bottom: -1em;
      opacity: 1;
      color: white;
    }
  }
`;
interface Props {
  tooltip: string | React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const ToolTip = ({ tooltip, children, className, style }: Props) => {
  return (
    <StyledToolTip>
      <div
        style={{
          ...style,
        }}
        className={`tool-tip ${className || ""}`}
      >
        {tooltip}
      </div>
      {children}
    </StyledToolTip>
  );
};

export default ToolTip;
