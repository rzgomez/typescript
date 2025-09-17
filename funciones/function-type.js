(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    let myFunction;
    // let myFunction: (a:number, b:number) => number;
    // let myFunction: (a:string) => string;
    // let myFunction: () => string;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Batman'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
export {};
