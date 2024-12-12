function Validator () {
    this.validateEmail = (email) => {
        let regexp = /^[a-zA-Z0-9]+([.\-+][a-zA-Z0-9]+)*@[a-zA-Z0-9.!$%&'*+\/=?^_-]{1,15}\.[a-zA-Z]{1,5}$/;
        return regexp.test(email);
    }

    this.validatePhone = (phone) => {
        let regexp =  /^((\+\d\d|([- ]{*}|))+([ -]|))(\(|[ -])([0-9][ -]?[0-9][ -]?[0-9][ -]?)/
        return phone.match(regexp);
    }
}

// console.log(new Validator().validateEmail("fi@secondpart.end")) // Валідні
// console.log(new Validator().validateEmail("first-part@.se=cond%p.art.end")) // Валідні
// console.log(new Validator().validateEmail("first.part@se=cond%part.r")) // Валідні
// console.log(new Validator().validateEmail("f@secondart.end,")) // Не валідні
// console.log(new Validator().validateEmail("first-part@.se=cond@part.end")) // Не валідні
// console.log(new Validator().validateEmail("-firstpart@.se=cond%.enddeded")) // Не валідні
// console.log(new Validator().validateEmail("firs_tpart@.se.en")) // Не валідні
// console.log(new Validator().validateEmail("")) // Не валідні
// console.log(new Validator().validateEmail("firstpart@.se.enddeded")) // Не валідні

console.log(new Validator().validatePhone("+38 (099) 567 8901")) // Валідні
console.log(new Validator().validatePhone("+38 099 5 6 7 8 9  01")) // Валідні
console.log(new Validator().validatePhone("(09-9) 567-890-1")) // Валідні
console.log(new Validator().validatePhone("--  (099) 567 890-1")) // Валідні
console.log(new Validator().validatePhone("+38 (099) 567 8901 0")) // Не Валідні
console.log(new Validator().validatePhone("+38 099 a0000000")) // Не Валідні
console.log(new Validator().validatePhone("+38 (0989) 567 8901")) // Не Валідні
console.log(new Validator().validatePhone("+48 (0989) 567 8901"))// Не Валідні