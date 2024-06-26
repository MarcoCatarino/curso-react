interface CardBodyProps {
    title: string;
    text?: string;
}

export function CardBody(props: CardBodyProps) {

    const { title, text } = props;

    return (
        <>
            <h3 className="card-title">
                {title}
            </h3>

            <p className="card-text">
                {text}
            </p>

        </>
    )
}

export default CardBody;