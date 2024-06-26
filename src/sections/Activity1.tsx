import Card from "../components/Card";
import { CardBody } from "../components/Card/CardBody";
import Button from "../components/Card/CardButton";

import List from "../components/List";

import { useState } from "react";

function Activity() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list: string[] = ["Marco", "Jr", "Lucy"];
  const handleSelect = (element: string) => {
    console.log("Jugando con", element);
  };

  return (
    <Card>
      <CardBody title="ACTIVITY 1" />

      <List data={list} onSelect={handleSelect} />

      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
}

export default Activity;
