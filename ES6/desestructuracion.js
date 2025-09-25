(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    };
    const printAvenger = ({ ironman, ...resto }) => {
        console.log(ironman, resto);
    };
    const avengersArr = ['Cap. América', true, 14.17];
    const [capitan, ironman, seriaUnNumero] = avengersArr;
    console.log({ ironman, capitan });
})();
export {};
