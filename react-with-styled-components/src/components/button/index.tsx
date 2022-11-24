import styled from "styled-components";
import { lighten, rgba } from "polished";
import { ThemeProvider } from "styled-components";

const StyledButton = styled.button`
  &,
  &::after,
  &::before {
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  border: none;
  cursor: pointer;
  padding: 0.5em 1em;
  text-transform: Capitalize;
  &.contained {
    background-color: ${(props) => props.color || props.theme.palette.primary};
    color: white;
    box-shadow: 0 0.2em 0.5em #7f7f7f7f;
    &:hover {
      box-shadow: 0 0.2em 0.5em
        ${(props) => rgba(props.color || props.theme.palette.primary, 0.9)};
    }
    &:active {
      box-shadow: inset 0 0.1em 0.5em 0.1em rgba(0, 0, 0, 0.1);
    }
  }
  &.outlined {
    background-color: transparent;
    color: ${(props) => props.color || props.theme.palette.primary};
    border: 0.1em solid ${(props) => props.color || props.theme.palette.primary};
    &:hover {
      box-shadow: 0 0em 0.5em
          ${(props) => rgba(props.color || props.theme.palette.primary, 0.3)},
        inset 0 0em 0.5em
          ${(props) => rgba(props.color || props.theme.palette.primary, 0.3)};
    }
    &:active {
      box-shadow: none;
    }
  }
  &.indicator {
    position: relative;
    color: ${(props) => props.color || props.theme.palette.primary};
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      height: 0.2em;
      background-color: ${(props) =>
        props.color || props.theme.palette.primary};
      width: 0;
      transition-property: width;
    }
    &:hover::after {
      width: 100%;
    }
  }
  &.double-indicator {
    position: relative;
    color: ${(props) => props.color || props.theme.palette.primary};
    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 0.2em;
      background-color: ${(props) =>
        props.color || props.theme.palette.primary};
      width: 0;
      transition-property: width;
    }
    &::before {
      top: 0;
      right: 0;
    }
    &::after {
      bottom: 0;
      left: 0;
    }
    &:hover::after,
    &:hover::before {
      width: 100%;
    }
  }
`;

StyledButton.defaultProps = {
  theme: {
    palette: {
      primary: "#3e1bdb",
    },
  },
};

interface Props {
  variant?: "contained" | "outlined" | "indicator" | "double-indicator";
  rounded?: "sm" | "md" | "lg" | "xl" | "full" | "none";
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  onClick?: () => void;
}
const Button = ({ variant = "contained", rounded = "md", ...props }: Props) => {
  return (
    <StyledButton
      color={props.color}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      className={`${variant} rounded-${rounded} ${props.className}`}
      style={{
        ...props.style,
      }}
    >
      {props.children || "Button"}
    </StyledButton>
  );
};

export default Button;
