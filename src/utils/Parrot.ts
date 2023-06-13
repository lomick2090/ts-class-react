
export default class Parrot {
    private _name : string;
    private _phrases : string[];


    constructor(name:string, phrases:string[] = []) {
        this._name = name;
        this._phrases = phrases;
    }

    get name() {
        return this._name
    }

    set name(newName: string) {
        this._name = newName
    }

    speak = function(this: Parrot) {
        let randomIndex = Math.floor(Math.random() * this._phrases.length)
        console.log(this._phrases[randomIndex])
    }
    
    announce = function(this: Parrot) {
        console.log(`Squack! I am ${this.name}`)
    }

    learn = function(this:Parrot, newPhrase: string) {
        this._phrases.push(newPhrase)
    }


}