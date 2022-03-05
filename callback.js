import fetch from 'node-fetch';
import axios from 'axios';

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data) => data.json()) //datayı alip duzenli json parse 
// .then((users) => {
//     console.log('Kullanici' , users);
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((data) => data.json())
//     .then((post) => console.log('Post' , post));
// });

async function getData(){
    // const user = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    // const post1 = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')) .json();

    const {data:user} = await axios('https://jsonplaceholder.typicode.com/users');
    const {data:post1} = await axios('https://jsonplaceholder.typicode.com/posts/1'); // axios data dondurur. 

    console.log(user);
    console.log(post1);
    
}

getData();

