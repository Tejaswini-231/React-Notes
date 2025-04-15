import PropTypes from 'prop-types';

function PropsExample(props){
    const style={
        border: "1px solid black",
        backgroundColor:"lightgray",
        padding:"20px",
        width:"200px",
        borderRadius:"5px",
        fontFamily:"sans-serif",
        textAlign:"center",
        margin:"10px",
    };
    return(
        <div style={style}>
            <p><strong>Name : </strong>{props.name}</p>
            <p><strong>Age : </strong>{props.age}</p>
            <p><strong>Graduated : </strong>{props.grad ? "Yes":"No"}</p>
        </div>
    );
}
PropsExample.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    grad: PropTypes.bool,
};

PropsExample.defaultProps = {
    name: "unknown",
    age: 0,
    grad: false,
};

export default PropsExample;
