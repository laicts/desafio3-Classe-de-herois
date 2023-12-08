// classe 
class heroBuild {
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack

    }
// estrutura de decisão
    writeBuild() {
        switch (this.type) {
            case "Mage":
                console.log(`The ${this.type} attacked using Magic`)   
            break

            case "Warrior":
                console.log(`The ${this.type} attacked using Sword`)
            break

            case "Monk":
                console.log(`The ${this.type} attacked using Marcial arts`)
            break

            case "Ninja":
                console.log(`The ${this.type} attacked using Shuriken`)
            break

            default:
                console.log(`O ${this.type} não possui um ataque válido.`);
        }
    }

}

// exemplos de uso do objeto

// let heroMage = new heroBuild("Unknow", "unknow", "Mage", "unknow");
// myHero.writeBuild()

// let heroWarrior = new heroBuild("Unknow", "unknow", "Warrior", "unknow");
// heroWarrior.writeBuild()

let heroMonk = new heroBuild("Unknow", "unknow", "Monk", "unknow");
heroMonk.writeBuild()

// let heroNinja = new heroBuild("Unknow", "unknow", "Ninja", "unknow");
// heroNinja.writeBuild()




