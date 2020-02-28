/*
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/


const greet_abe = () => {
  let name = 'Abe';
  return "Hello, " + name + '!';
};

const greet_ben = () => {
  let name = 'Ben';
  return "Hello, " + name + '!';
};