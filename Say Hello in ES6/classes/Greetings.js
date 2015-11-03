class Greetings{
    spanish(){
        let msg = `Hello Mr. ${this.last}, or Maybe I should say: Hi ${this.first}!`;
        return msg;
    }
    english(){
        let msg = `Hola Sr. ${this.last}, o quisas deba decir: Hola ${this.first}!`;
        return msg;
    }
}

export default Greetings;