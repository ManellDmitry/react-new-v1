import styled from "styled-components";
import { Link } from "react-router-dom";
import { List } from "./styledComponents";
const Item = styled.li`
  margin-right: 30px;
`;

function Navigation({ links }) {
  const handleItemClick = () => {
    console.log("Item click");
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("CLICK");
  };

  const handleLinkMouseEnter = (e) => {
    console.log(e);
    console.log("ENTER");
  };

  return (
    <nav>
      <List>
        {links?.map(({ id, label, path }) => (
          <Item key={id} onClick={handleItemClick}>
            <Link to={path}>{label}</Link>
          </Item>
        ))}
      </List>
    </nav>
  );
}

export default Navigation;
