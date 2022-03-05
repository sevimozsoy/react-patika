const users = ['sevim' , 'selin' , 'ozsoy'];

//map --> hepsini dolasir

users.map((item) =>{
    console.log(item);
})

const buldum = users.find((item) => item === 'sevim');
console.log(buldum);

 //some === sarta uyarsa true
 //every === array'in butun elemanlari bir sarta uyuyorsa trueb 