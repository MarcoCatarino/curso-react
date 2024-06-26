import Card from "../components/Card";
import { CardBody } from "../components/Card/CardBody";

import Button from "../components/Button";

import List from "../components/List";

import { useState } from "react";

function Introduction() {
  const [data, setData] = useState(["Dragon Ball", "Naruto", "One Piece"]);

  const addAnime = () => setData([...data, "Isekai"]);
  const delAnime = () => setData(data.slice(0, -1));

  return (
    <Card>
      <CardBody title="ACTIVITY 2" />

      <Button onClick={addAnime}>Agregar +</Button>

      <Button onClick={delAnime}>Eliminar -</Button>

      <List data={data} />
    </Card>
  );
}

export default Introduction;
