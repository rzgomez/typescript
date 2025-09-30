(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address
        getFullAddress( id: string ):string;
    }

    interface Address {
        id: number,
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Zuleyma',
        age: 25,
        address: {
            id: 125,
            zip: 'ZIP ROZ',
            city: 'Merida'
        },
        getFullAddress(id: string) {
            return this.address?.city;
        },
    }

    const client2: Client = {
        name: 'Ricardo',
        age: 30,
        address: {
            city: 'Uman',
            zip: 'UMN RIK',
            id: 1718
        },
        getFullAddress(id: string) {
            return this.address?.city;
        },
    }

    console.log(client);
    console.log(client2.getFullAddress('a'));


})()