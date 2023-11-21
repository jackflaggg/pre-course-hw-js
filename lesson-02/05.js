let passport = {
    name: "Petr",
    surname: "Petrov",
};
console.log(passport.name);

let copyPassport = {...passport, name: "Ivan"};
console.log(copyPassport.name);
