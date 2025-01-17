import React from "react";

function Card(props) {
    return (
        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "5px", margin: "20px", backgroundColor: "#eeecec" }}>
            <h3>{props.title}</h3>
            <div>{props.children}</div>
        </div>
    );
}

export default Card;