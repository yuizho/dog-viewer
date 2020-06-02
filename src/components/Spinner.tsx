import React, { FC } from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const Spinner: FC = () => (
  <Segment className="spinner">
    <Dimmer active inverted>
      <Loader inverted={false}>Loading...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
