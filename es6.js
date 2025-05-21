// ES6 Features Demonstration

// 1. Arrow Functions
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Ritheesh")); 

// 2. Callbacks
function fetchDataCallback(callback) {
  setTimeout(() => {
    const data = { id: 1, message: "this is from the callback function" };
    callback(data);
  }, 1000);
}

fetchDataCallback((result) => {
  console.log("Callback Result:", result);
});

// 3. Promises
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve({ id: 2, message: "Data fetched using promise" });
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then((data) => console.log("Promise Result:", data))
  .catch((error) => console.error("Promise Error:", error));

// 4. Async/Await
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Async/Await Result:", data);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

fetchDataAsync();
