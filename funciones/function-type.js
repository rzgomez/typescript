(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Batman'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
export {};
//# sourceMappingURL=function-type.js.map