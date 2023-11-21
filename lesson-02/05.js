let passport = {
    name: "Petr",
    surname: "Petrov",
};

let copyPasport = Object.assign(passport);
copyPasport.name = 'Ivan';

console.log(passport.name);
console.log(copyPasport.name);
