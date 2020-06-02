import React, { FC } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

const types = ["akita", "pomeranian"];

const Home: FC = () => (
  <>
    <List celled relaxed>
      {types.map((type) => (
        <List.Item className="list-item" key={type}>
          <List.Content>
            <Link to={`/${type}/dogs`}>{type}</Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </>
);

export default Home;
