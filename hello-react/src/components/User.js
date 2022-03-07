function User({name,surname,age,isLoggedIn, friends}){
    console.log(name);
    return(    
    <>
    <h2>{isLoggedIn ? `${name} ${surname} ${age}` : 'Giriş Yapmadınız.'}</h2>
    {friends.map(friend =>(
        <div key={friend.id}>
        {friend.name}
        </div>
    ))}
    </>
)
}
export default User;