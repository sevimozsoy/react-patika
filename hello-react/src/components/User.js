import { PropTypes } from "prop-types";


function User({ name, surname, age, isLoggedIn, friends, address }) {
if(!isLoggedIn){
    return(
        <div>Giriş Yapmadınız</div>
    )
}
    
    return (
        <>
            <h2>{`${name} ${surname} ${age}`}</h2>

            {address.title} {address.zip}

            <br />
            <br />

            {friends && friends.map(friend => (
                <div key={friend.id}>
                    {friend.name}
                </div>
            ))}
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
};

User.defaultProps = {
    isLoggedIn: false,
    name:"İsimsiz"
}
export default User;