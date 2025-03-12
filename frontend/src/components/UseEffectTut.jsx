import React, { useEffect, useState } from 'react';

function UseEffectTut() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        console.log("Event Added");
        
        return () => {
            window.removeEventListener("resize", handleResize); 
            console.log("Event Removed");
            
        };
    }, []);

    useEffect(() => {
        document.title = `Count is ${count}-${color}`;
    }, [count, color]);

    const style = {
        borderRadius: "4px",
        border: "1px solid black",
        padding: "5px 15px",
        margin: "5px",
        backgroundColor: "#212121",
        color: "white",
        textAlign: "center",
        cursor: "pointer",
        fontWeight: "700",
    };

    return (
        <div>
            <h1 style={{ ...style, color }}>Count: {count}</h1>
            <h1 style={style}>Width: {width}px</h1>
            <h1 style={style}>Height: {height}px</h1>

            <button style={style} onClick={() => setCount(count + 1)}>Increase</button>
            <button style={style} onClick={() => setCount(count - 1)}>Decrease</button>
            <button style={style} onClick={() => setColor(color === "green" ? "red" : "green")}>Change Color</button>
        </div>
    );
}

export default UseEffectTut;
