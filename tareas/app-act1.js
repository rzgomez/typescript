(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
export {};
