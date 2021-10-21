import { useContext } from 'react';
import PhoneContext from '../../PhoneContext';

const Info = () => {
    const {classNameInfo} = useContext(PhoneContext);
    console.log(classNameInfo);
    return(
        <p className={classNameInfo}> Calling... </p>
    )
}

export default Info;