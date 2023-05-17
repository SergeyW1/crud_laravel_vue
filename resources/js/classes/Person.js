export default class Person {
    constructor({name = null, age = null, job = null, id = null}) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.id = id;
    }

    cleanObj() {
        this.name = null;
        this.age = null;
        this.job = null;
        this.id = null;
    }
}
