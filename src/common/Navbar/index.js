import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #FFD601;
  width: 13rem;
  height: 2.5rem;
  border: none;
  border-radius: 15px;
  color: #4B0057;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;
