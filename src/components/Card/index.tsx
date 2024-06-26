import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;    //* ReactNode is used to use other components in a component yhat already exist, it also used 'chidren'
}

function Card(props:CardProps) {

    const { children } = props;

    //TODO: Here we'll see some OPTIONS to custom CSS in your components
    const width = { //! <== BAD PRACTICE
        width: "350px", 
    }

    return (
        <div className="card" style = {width}>

            <div className="card-body" style = {{
                color: 'violet'   //! <== BAD PRACTICE
            }}>
                { children }
            </div>

        </div>
    )
}

export default Card;