import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

// const data = [
//   {
//     id: 0,
//     title: "Model S",
//   },
//   {
//     id: 1,
//     title: "Model 3",
//   },
//   {
//     id: 2,
//     title: "Model X",
//   },
//   {
//     id: 3,
//     title: "Model Y",
//   },
//   {
//     id: 4,
//     title: "Lowest Cost Solar Panels in America",
//   },
//   {
//     id: 5,
//     title: "Solar for New Roofs",
//   },
//   {
//     id: 6,
//     title: "Accessories",
//   },
//   {
//     id: 7,
//     title: "Cybertruck",
//   },
//   {
//     id: 8,
//     title: "Existing Inventory",
//   },
//   {
//     id: 9,
//     title: "Utilities",
//   },
// ];

function MenuBar({ onClick = () => {}, state = false }) {
  const data = useSelector((state) => state.reducer);
  return (
    <BurgerNav display={state}>
      <CustomMenuClose>
        <CloseIcon
          onClick={onClick}
          style={{ fontSize: 25, cursor: "pointer" }}
        />
      </CustomMenuClose>
      {data.cars.map(({ id, title }) => (
        <li key={id}>
          <a href={`#${title}`}>{title}</a>
        </li>
      ))}
    </BurgerNav>
  );
}

export default MenuBar;
const BurgerNav = styled.div`
  position: absolute;
  overflow-y: ;
  height: 100vh;
  /*clip-path: ${(props) =>
    props.display
      ? "polygon(0 0, 100% 0, 100% 100%, 0 100% )"
      : "polygon(100% 0, 100% 0, 100% 100%, 100% 100% )"};*/
  transform: ${(props) =>
    props.display ? "translateX(0)" : "translateX(100%)"};
  top: 0px;
  right: 0px;
  z-index: 11;
  list-style: none;
  text-transform: capitalize;
  background: white;
  padding: 0 2rem;
  opacity: 0.9;
  transition: 0.2s all linear;
  li a {
    text-transform: capitalize;
    line-height: 4rem;
    margin: 0;
  }
  li {
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.3);
    width: 23rem;
  }
`;
const CustomMenuClose = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1rem;
`;
