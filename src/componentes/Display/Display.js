import { useContext } from 'react';
import PhoneContext from '../../PhoneContext';

const Display = () => {
    const {phoneNumber} = useContext(PhoneContext);
    return (
        <button className="number" placeholder="phone-number"> {phoneNumber} </button>
    )
}

export default Display;