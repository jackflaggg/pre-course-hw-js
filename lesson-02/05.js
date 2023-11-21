let passport = {
    name: "Petr",
    surname: "Petrov",
};

let copyPasport = Object.assign(passport);
copyPasport.name = 'Ivan';

console.log(passport);
console.log(copyPasport);
