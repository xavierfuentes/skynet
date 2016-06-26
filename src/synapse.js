/**
 * Each synapse has a weight from 0 to 1, and a current value from -1 to +1.
 */
class Synapse {
    constructor({ weight = .1, value = 0 } = {}) {
        this.weight = weight
        this.value = value
    }
}

module.exports = Synapse;
