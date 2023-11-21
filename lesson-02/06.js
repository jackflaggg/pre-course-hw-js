let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let waterPassportWithAddress = structuredClone(passportWithAddress);

waterPassportWithAddress.address.city = 'Bobryisk';

console.log(passportWithAddress);
console.log(waterPassportWithAddress);