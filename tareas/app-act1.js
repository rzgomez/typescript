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
export {};
//# sourceMappingURL=app-act1.js.map