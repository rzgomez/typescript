(() => {
    //Es una funcion que usualmente va a terminar con un error
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio!');
    console.log('Hola Mundo');
})();
export {};
