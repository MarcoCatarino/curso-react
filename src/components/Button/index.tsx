//* CSS (Normal ~ No recomended)
// import './Button.css'

import styles from './Button.module.css'

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    isLoading?: boolean;
    onClick: () => void;
}

//* INLINE CSS
// const styles = {
//     backgroundColor: "blue",
// };

console.log(styles);

function Button({ children, isLoading, onClick }: ButtonProps) {

    const className = [
        `btn btn-${isLoading ? 'secondary' : 'primary'}`,
        styles.button,
    ].join(' ');


    return (
        <button 
            // style = { styles }    //*  <= Inline CSS
            disabled = {isLoading}
            onClick = {onClick}
            type="button" 
            className = { className }

            //? className = { [styles.button, styles.padded].join(' ') }     // <= It's used when we work with Module CSS
            //? className = {`btn btn-${isLoading ? 'secondary' : 'primary'}`}   // <= It's been used until now
        >
            { isLoading ? 'Loading...' : children }
        </button>

    )
}

export default Button;