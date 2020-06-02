import React, { FC } from "react";
import { Card, Header, Image } from "semantic-ui-react";

export interface DogsProps {
  images: string[];
  isLoading?: boolean;
}

const Dogs: FC<DogsProps> = ({ images = [], isLoading = false }) => {
  return (
    <>
      <div>
        <Header as="h2">hoge</Header>
      </div>
    </>
  );
};

export default Dogs;
