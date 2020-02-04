var Livingcreature = require("./livingcreature.js");
var random = require("./random");
module.exports = class water extends LivingCreature {
    mul() {
        this.multiply++;
        var newCell = random(this.yntrelVandak(0));
        if(this.multiply >= 8 && newCell) {
            var newWater  = new Water(newCell[0],newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}