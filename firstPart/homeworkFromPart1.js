import axios from 'axios';

export default async function homework(userId){
    const {data:user} = await axios('https://jsonplaceholder.typicode.com/users/'+ userId);
    const{data:post} = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + userId);

    console.log('Users',user);
    console.log('Posts:',post);
}

homework(1)

