const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Hola 4seg ");
      }, 4000);
    } else {
      reject("whooops!");
    }
  });
};

// somethingWillHappen()
//   .then((response) => console.log(response))
//   .then(console.log("Hola desde then 1ero"))
//   .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Hola 2seg ");
      }, 2000);
    } else {
      const error = new Error("Ops x(");
      reject(error);
    }
  });
};

// somethingWillHappen2()
//   .then((response) => console.log(response))
//   .then(console.log("Hola desde then"))
//   .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log("Array of results", response))
  .catch((err) => console.error(err));

// Promise.race([somethingWillHappen(), somethingWillHappen2()])
//   .then((response) => console.log("Array of results", response))
//   .catch((err) => console.error(err));
