import axios from 'axios';

// const getComments = () => {
//     return new Promise((resolve , reject) =>{
//         // console.log('comment');
//         resolve('basarili'); //diger veri tipleri doner
//     });
// };

// getComments()
// // .then(() => console.log('basarili'))
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        resolve(data);
        // reject('bir sorun olustu');
    });
}

const getPost = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts/1');
        resolve(data);
        // reject('bir sorun olustu');
    });
}

(async() => {
// // await getUsers()
// // .then((data) => console.log(data));

// // await getPost()
// // .then((data) => console.log(data));

// try{
//     const users = await getUsers();
//     const post = await getPost();
    
//     console.log(users);
//     console.log(post);
// }catch(e){
//     console.log(e);
// }

Promise.all([getUsers(),getPost()])
.then(console.log)
.catch(console.log);
})();
