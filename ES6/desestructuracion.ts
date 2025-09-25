(() => {


    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

    // const { poder, vision } = avengers;
    // console.log( poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ( { ironman, ...resto }: Avenger ) => {
        console.log( ironman, resto );
    }

    // printAvenger( avengers );



    // const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk'];
    const avengersArr: [string, boolean, number] = ['Cap. América', true, 14.17];
    // const ironman = avengersArr[1];
    const [ capitan, ironman, seriaUnNumero ] = avengersArr;
    console.log({ ironman, capitan });
})()