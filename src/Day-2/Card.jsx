import image from '../assets/image-logo.jpg';

function Card(){

    return (
        <div className="card">
            <img className="card-logo" src={image} alt="image placeholder" />
            <h3 className="heading">Git Hub Challenge</h3>
            <p className="text">I am taking a 30-day react Challenge pushing my daily practice on to git without a miss</p>
        </div>
    );
}

export default Card;