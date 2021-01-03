let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });

  return p;
}


export let loop = async (request, h) => {
  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;
  
  for (let n of numbers) {
    console.log(`Trying to add ${n}`);
    sum = await adder(sum, n);
    console.log('sum is: ', sum);
  }

  return sum;
};

