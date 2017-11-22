const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   message: 'This is my resolved data',
    //   random: 'bs'
    // });
    reject('This is my rejection');
  }, 2000)
});

console.log('before');

promise.then((data) => {
  console.log('1',data.random);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise')
    }, 5000)
  });
}).then((str) => {
  console.log(str)
}).catch((error) => {
  console.log('error: ', error);
});


console.log('after');