import React, { FC } from "react";
import { Card, Header, Image } from "semantic-ui-react";
import Spinner from "./Spinner";

export interface DogsProps {
  images: string[];
  type: string;
  isLoading?: boolean;
}

const Dogs: FC<DogsProps> = ({ images = [], type = "", isLoading = false }) => {
  return (
    <>
      <div>
        <Header as="h2">{type}</Header>
        {isLoading ? (
          <Spinner />
        ) : (
          <Card.Group>
            {images.map((image, index) => (
              <Card key={index}>
                <Card.Content>
                  <Image src={image} />
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        )}
      </div>
    </>
  );
};

export default Dogs;
