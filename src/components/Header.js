import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";

function Header(props) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <Container className="Header">
      <Link to={"/"}>
        <a href="#">
          <img src={"/images/logo.svg"} alt="Tesla Logo"></img>
        </a>
      </Link>
      <Menu>
        <a href="#Model S">Model&nbsp;S</a>
        <a href="#Model 3">Model&nbsp;3</a>
        <a href="#Model X">Model&nbsp;X</a>
        <a href="#Model Y">Model&nbsp;Y</a>
      </Menu>
      <RightMenu>
        <a href="https://react-bootstrap.github.io/components/navbar/">shop</a>
        <a href="https://react-bootstrap.github.io/components/navbar/">
          Tesla&nbsp;Account
        </a>
        <CustomMenu onClick={() => toggleMenu()} style={{ fontSize: 25 }} />
      </RightMenu>
      <MenuBar onClick={() => toggleMenu()} state={open} />
    </Container>
  );
}

export default Header;
const Container = styled.div`
  width: 100vw;
  position: fixed;
  padding: 1.5rem;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 1rem;
    color: black;
  }
  a ::selection :visited {
    color: black;
  }
  img {
    height: 3rem;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    font-size: 1.5rem;
    margin: 0 0.8rem;
  }
`;
const CustomMenu = styled(MenuIcon)`
  margin: 0 1rem;
  cursor: pointer;
`;
