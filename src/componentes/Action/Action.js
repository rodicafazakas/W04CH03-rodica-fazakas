const Action = ({phoneNumber, callClassName, hangClassName, actionOnClick, actionOnClickDelete}) => {

    return (
        <>
            <button className={callClassName} 
                    onClick={actionOnClick}> CALL </button>
            <button className={hangClassName}
                    onClick={actionOnClickDelete}> HANG </button>
        </>
    )
}

export default Action;