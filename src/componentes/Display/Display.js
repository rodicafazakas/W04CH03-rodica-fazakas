import {useState} from "react";

const Display = ({digit}) => {
    const [number, setNumber] = useState(null);

    const updateNumber = (digit) => {
        setNumber([...number, digit]);
    }

    return (
        <button className="number" onChange={updateNumber}> {number} </button>
    )
}

export default Display;