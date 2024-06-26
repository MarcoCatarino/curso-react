import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    isLoading?: boolean;
    onClick: () => void;
}

function Button({ children, isLoading, onClick }: ButtonProps) {
    return (
        <button 
            disabled = {isLoading}
            onClick = {onClick}
            type="button" 
            className = {`btn btn-${isLoading ? 'secondary' : 'primary'}`}
        >
            { isLoading ? 'Cargando' : children }
        </button>

    )
}

export default Button;