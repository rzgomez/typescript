(() => {
    class Avenger {
        name;
        team;
        realName;
        static avgAge = 35;
        static getAvgAge() {
            return this.name;
        }
        ;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(Avenger.getAvgAge());
})();
export {};
//# sourceMappingURL=basica.js.map