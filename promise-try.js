// Example: Promise.try lets you run sync/async code uniformly
Promise.try(() => {
  const value = JSON.parse('{"score": 42}'); // if this throws, promise rejects
  return value.score;
})
  .then((score) => {
    console.log("Score:", score); // 42
  })
  .catch((error) => {
    console.error("Failed:", error.message);
  });


// Async inside Promise.try
Promise.try(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
})
  .then((data) => console.log("Todo:", data.title))
  .catch((error) => console.error("Error:", error.message));