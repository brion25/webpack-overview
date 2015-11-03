import Greetings from './Greetings';

class Person extends Greetings{
    constructor(first,last){
        super();
        this.first = first;
        this.last = last;
    }
    
    sayHello(){
        return super.english();
    }
    
    diHola(){
        return super.spanish();
    }
};

export default Person;