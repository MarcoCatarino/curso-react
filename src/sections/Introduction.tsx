// import Title from '../components/Title/Title'
import Card from "../components/Card";
import { CardBody } from "../components/Card/CardBody";

import List from "../components/List";

//TODO: Explain of Thrusty and Falsy values
// * > Thrusty
// * > Falsy = 0, "", false, undefined, null <= Normal JavaScript
// ? > Falsy = "", false, undefined, null <= React
/* Types of Falsy [inside the function]
            {'' && 'String void'}
            {undefined && "It's Undefined"}
            {null && "It's Null"}
            {false && "It's False"}
            {0 && 'Number cero'}
            {'Hello pretty' && 'String Hello'} 
            */

function Introduction() {
  const listA = ["Goku", "Naruto", "Luffy"];
  const listB = ["Milk", "Hinnata", "Nami"];
  const listC: string[] = ["Gohan", "Boruto", "No child"];
  const listD: string[] = [];

  const handleSelectA = (element: string) => {
    console.log("Peleando con", element);
  };
  const handleSelectB = (element: string) => {
    console.log("Viendo a", element);
  };
  const handleSelectC = (element: string) => {
    console.log("Jugando con", element);
  };

  const contentA = listC.length ? (
    <List data={listC} onSelect={handleSelectC} />
  ) : (
    "No elements to show"
  );
  const contentB = listD.length !== 0 && (
    <List data={listD} onSelect={handleSelectA} />
  );

  return (
    // <Title />

    <Card>
      <CardBody title="TITLE" text="Text of the card" />

      <List data={listA} onSelect={handleSelectA} />

      <br />

      {listD.length !== 0 && "My list"}

      <List data={listB} onSelect={handleSelectB} />

      <br />
      {contentA}
      <br />
      {contentB}
    </Card>
  );
}

export default Introduction;
