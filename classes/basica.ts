(() => {


    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name; //Nombre de la clase
        };

        // constructor( name: string, team: string, realName?: string){
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }

        constructor( //Forma corta de asignar propiedades
            private name: string, 
            private team: string, 
            public realName?: string,
        ){}



        private bio() {
            return `${ this.name } (${ this.team })`;
        }
    }



    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    
    console.log(antman)
    console.log(Avenger.avgAge)

    //Las propiedades estaticas solo se puede acceder a través de la clase,
    //no es posible a través de instancias de la clase
    console.log( Avenger.getAvgAge()); 

})()