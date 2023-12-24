const Card = ({children} : {children: React.ReactNode}) => {

    const cardStyle = {
        border: "1px solid grey",
        padding: "10px",
        margin: "10px",
    };

    return <div style={cardStyle} >{children}</div>;
};

export default Card;