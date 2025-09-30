(() => {
    const client = {
        name: 'Zuleyma',
        age: 25,
        address: {
            id: 125,
            zip: 'ZIP ROZ',
            city: 'Merida'
        },
        getFullAddress(id) {
            return this.address?.city;
        },
    };
    const client2 = {
        name: 'Ricardo',
        age: 30,
        address: {
            city: 'Uman',
            zip: 'UMN RIK',
            id: 1718
        },
        getFullAddress(id) {
            return this.address?.city;
        },
    };
    console.log(client);
    console.log(client2.getFullAddress('a'));
})();
export {};
//# sourceMappingURL=complejo.js.map