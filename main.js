define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const batimovil = {
            carroceria: "Negra",
            modelo: "6x6",
            antibalas: true,
            pasajeros: 4
        };
        const bumblebee = {
            carroceria: "Amarillo con negro",
            modelo: "4x2",
            antibalas: true,
            pasajeros: 4,
            disparar() {
                console.log("Disparando");
            }
        };
        const villanos = [{
                nombre: "Lex Luthor",
                edad: 54,
                mutante: false
            }, {
                nombre: "Erik Magnus Lehnsherr",
                edad: 49,
                mutante: true
            }, {
                nombre: "James Logan",
                edad: undefined,
                mutante: true
            }];
        const charles = {
            poder: "psiquico",
            estatura: 1.78
        };
        const apocalipsis = {
            lider: true,
            miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
        };
        console.log(apocalipsis);
        let mystique;
        mystique = charles;
        mystique = apocalipsis;
    })();
});
define("funciones/args-default", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName, upper = false) => {
            if (upper) {
                return `${firstName} ${lastName || 'no lastname'}`.toUpperCase();
            }
            else {
                return `${firstName} ${lastName || 'no lastname'}`;
            }
        };
        const name = fullName('Tony', 'Stark', true);
        console.log({ name });
    })();
});
define("funciones/args-optional", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            return `${firstName} ${lastName || 'no lastname'}`;
        };
        const name = fullName('Tony');
        console.log({ name });
    })();
});
define("funciones/args-required", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            return `${firstName} ${lastName}`;
        };
        const name = fullName('Tony', 'Stark');
        console.log({ name });
    })();
});
define("funciones/args-rest", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, ...restArgs) => {
            return `${firstName} ${restArgs.join(' ')}`;
        };
        const superman = fullName('Clark', 'Joseph', 'Kent');
        console.log({ superman });
    })();
});
define("funciones/function-type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("funciones/functions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const hero = 'Flash';
        function returnName() {
            return hero;
        }
        const activateBatiSignal = () => {
            return 'Batiseñal activada!';
        };
        console.log(typeof activateBatiSignal);
        const heroName = returnName();
    })();
});
define("objetos/objects", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 24,
            powers: ['Súper velocidad', 'Viajar en el tiempo']
        };
        let superman = {
            name: 'Clark Kent',
            age: 60,
            powers: ['Súper velocidad']
        };
    })();
});
define("objetos/type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 24,
            powers: [1, 2]
        };
        let superman = {
            name: 'Clark Kent',
            age: 60,
            powers: [1],
            getName() {
                return this.name;
            }
        };
    })();
});
define("objetos/union-types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let myCustomVariable = 'Fernando';
        console.log(typeof myCustomVariable);
        myCustomVariable = 20;
        console.log(typeof myCustomVariable);
        myCustomVariable = {
            name: "Bruce",
            age: 43,
            powers: [1]
        };
        console.log(typeof myCustomVariable);
        console.log(myCustomVariable);
    })();
});
define("tareas/app-act1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const batman = 'Bruce';
        const superman = 'Clark';
        const existe = false;
        const parejaHeroes = [batman, superman];
        const villano = ['Lex Lutor', 5, true];
        const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
        let Poder;
        (function (Poder) {
            Poder[Poder["acuaman"] = 0] = "acuaman";
            Poder[Poder["batman"] = 1] = "batman";
            Poder[Poder["flash"] = 5] = "flash";
            Poder[Poder["superman"] = 100] = "superman";
        })(Poder || (Poder = {}));
        const fuerzaFlash = Poder.flash;
        const fuerzaSuperman = Poder.superman;
        const fuerzaBatman = Poder.batman;
        const fuerzaAcuaman = Poder.acuaman;
        function activar_batiseñal() {
            return 'activada';
        }
        function pedir_ayuda() {
            console.log('Auxilio!!!');
        }
        const poder = '100';
        const largoDelPoder = poder.length;
        console.log(largoDelPoder);
    })();
});
define("tareas/app-act2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
});
define("tareas/app-act3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
});
define("tipos/any", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avenger = 123;
        let exists;
        let power;
        avenger = 'Dr Strange';
        console.log(avenger.charAt(0));
        avenger = 150.758422413;
        console.log(avenger.toFixed(2));
        console.log(exists);
        console.log(power);
    })();
});
define("tipos/arrays", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const villian = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
        villian.forEach(v => console.log(v.toUpperCase()));
    })();
});
define("tipos/booleans", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let isSuperman = true;
        let isBatman = false;
        isSuperman = (isBatman) ? true : false;
        console.log({ isSuperman });
        console.log({ isBatman });
    })();
});
define("tipos/enums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let AudioLevel;
        (function (AudioLevel) {
            AudioLevel[AudioLevel["min"] = 1] = "min";
            AudioLevel[AudioLevel["medium"] = 2] = "medium";
            AudioLevel[AudioLevel["max"] = 10] = "max";
        })(AudioLevel || (AudioLevel = {}));
        let currentAudio = AudioLevel.max;
        console.log(currentAudio);
        console.log(AudioLevel);
    })();
});
define("tipos/never", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const error = (message) => {
            throw new Error(message);
        };
        error('Auxilio!');
        console.log('Hola Mundo');
    })();
});
define("tipos/null-undefined", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
    })();
});
define("tipos/numbers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avengers = 10;
        console.log(avengers);
        const villians = 20;
        if (avengers < villians) {
            console.log('Estamos en problemas');
        }
        else {
            console.log('Nos salvamos');
        }
        avengers = Number('55A');
        console.log({ avengers });
    })();
});
define("tipos/strings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const batman = 'Batman';
        const linternaVerde = "Linterna's Verde";
        const volcanNegro = `Héroe: Volcan Negro`;
        console.log(batman.toUpperCase());
        console.log(`I'm ${batman}`);
        console.log(batman[10]?.toUpperCase || 'No está presente');
    })();
});
define("tipos/tuples", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const hero = ['Dr Strange', 100, true];
        hero[0] = 'Ironman';
        hero[1] = 50;
        hero[2] = false;
        console.log(hero);
    })();
});
define("tipos/void", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        function callBatman() {
            return;
        }
        const callSuperman = () => {
            return;
        };
        const a = callBatman();
        console.log(a);
    })();
});
//# sourceMappingURL=main.js.map