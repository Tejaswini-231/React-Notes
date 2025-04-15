
function ConditionalRendering (props){

    const LogSuccess={
        backgroundColor:"rgb(211, 211, 247)",
        fontFamily:"sans-serif",
        padding:"20px",
        width:"500px",
        textAlign:"center",
    }

    const LogFailed={
        backgroundColor:"rgb(245, 199, 199)",
        fontFamily:"sans-serif",
        padding:"20px",
        width:"500px",
        textAlign:"center",
    }

    const success=<h2 style={LogSuccess} className="LogSuccess">You came successfully Mr/Mrs.{props.name}</h2>

    const failed=<h2 style={LogFailed}>You failed to login</h2>

    return(
        (props.isLogged?success:failed)
    );
}

export default ConditionalRendering;