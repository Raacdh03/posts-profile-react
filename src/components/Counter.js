import { useEffect, useState } from "react";

function Counter() {
    // useState
    const [count, setCount] = useState(0);

    // useEffect
    useEffect(() => {
        if (count % 5 === 0 && count !== 0) {
            alert(`You clicked ${count} times`);
        }
    }, [count]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
                fontFamily: "Arial, sans-serif",
                color: "#333",
            }}
        >
            <p>You clicked {count} times</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button
                    style={{
                        backgroundColor: "#ff4d4f",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        fontSize: "1rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
                <button
                    style={{
                        backgroundColor: "#4caf50",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        fontSize: "1rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;
