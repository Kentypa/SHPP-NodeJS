function Validator () {
    this.validateEmail = (email) => {
        let regexp = /^[a-zA-Z0-9]+([.\-+][a-zA-Z0-9]+)*@[a-zA-Z0-9.!$%&'*+\/=?^_-]{1,15}\.[a-zA-Z]{1,5}$/;
        return regexp.test(email);
    }

    this.validatePhone = (phone) => {
        let regexp = /%/
    }
}

console.log(new Validator().validateEmail("fi@secondpart.end"))
console.log(new Validator().validateEmail("first-part@.se=cond%p.art.end"))
console.log(new Validator().validateEmail("first.part@se=cond%part.r"))
console.log(new Validator().validateEmail("f@secondart.end,"))
console.log(new Validator().validateEmail("first-part@.se=cond@part.end"))
console.log(new Validator().validateEmail("-firstpart@.se=cond%.enddeded"))
console.log(new Validator().validateEmail("firs_tpart@.se.en"))
console.log(new Validator().validateEmail(""))
console.log(new Validator().validateEmail("firstpart@.se.enddeded"))
