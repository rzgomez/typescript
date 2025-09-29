(() => {


    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullname() {
            return `${ this.name } ${ this.realName } `;
        }

    }


    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            //El super constructor debe llamarse al inicio
            super(name, realName);
            console.log('Constructor Xmen llanado');
        }
        
        
        get fullName() {
            return ` ${ this.name } - ${ this.realName }`;
        }

        set fullName( name: string ) {
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullname() )
        }


    }


    const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // // wolverine.getFullNameDesdeXmen();
    // console.log(wolverine.fullName);

    // wolverine.fullName = 'Fernando';
    // console.log(wolverine.fullName);
})()