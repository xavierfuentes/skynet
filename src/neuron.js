/**
 * A neuron is basically the sum of its synapses. Along with a trigger threshold,
 * that's all we need to calculate whether or not it will trigger at any given moment:
 */
class Neuron {
    constructor({ synapses = [], threshold = 1 } = {}) {
        this.synapses = synapses
        this.threshold = threshold
    }

    /**
     * A simple function can take a neuron's threshold and synapses as input, sum the results,
     * and determine whether or not to fire.
     * @return {Boolean} whether or not it should fire
     */
    shouldTrigger() {
        const sum = this.synapses.reduce((amplitude, { weight, value }) => {
            return amplitude + (weight * value)
        }, 0)
        return sum >= this.threshold
    }
}

module.exports = Neuron;
