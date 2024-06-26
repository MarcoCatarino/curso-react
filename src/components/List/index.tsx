// import { MouseEvent } from "react";

import { useState } from "react";

type Props = {
    data: string [];
    onSelect?: (element: string) => void;
}

function List({ data, onSelect }: Props) {

    //*   index = variable && setIndex = function that update the variable && The Hook will renderize the component
    const [index, setIndex] = useState(-1); //? <= This is a STATE HOOK and it can modify variables on the functional components

    // const handleClick = (event: MouseEvent) <= In this way we can see the properties oft he event
    // const handleClick = (event: string)  <= Check the events 
    const handleClick = (i: number, element: string) => {
        setIndex( i );
        onSelect?.( element ); //   <= '?.' is used to confirm if the function is defined it can execute if it's undefined it can't.
    }

    return (
        <>
            <ul className="list-group">

                { data.map((element, i) => (
                    <li 
                    // onClick = { (event) => console.log(event) }  <= Rustic Way to do it
                    // onClick = { handleClick }    <= We can check the properties of the event
                    // onClick = { () => handleClick( element ) }   <= Check the element 
                    onClick = { () => handleClick( i, element ) }
                    key = { element }
                    className = {`list-group-item ${index == i ? 'active' : ''}`}>
                        { element }
                    </li>
                ))}
                
            </ul>
        </>
    )
}

export default List;