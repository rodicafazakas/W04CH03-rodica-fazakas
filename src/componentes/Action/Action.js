import { useContext } from 'react';
import PhoneContext from '../../PhoneContext';

const Action = () => {

    const {callClassName, hangClassName, actionOnClickCall, actionOnClickHang} = useContext(PhoneContext);

    return (
        <>
            <button className={callClassName} 
                    onClick={actionOnClickCall}> CALL </button>
            <button className={hangClassName}
                    onClick={actionOnClickHang}> HANG </button>
        </>
    )
}

export default Action;