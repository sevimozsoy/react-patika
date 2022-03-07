function User(name,surname,age,isLoggedIn){
    console.log(name);
    return(
    
    <>
    <h2>{isLoggedIn ? `${name} ${surname} ${age}` : 'Giriş Yapmadınız.'}</h2>
    </>
)
}
export default User;