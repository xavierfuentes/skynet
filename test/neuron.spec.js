const Neuron = require('../src/neuron')
const Synapse = require('../src/synapse')
const expect = require('chai').expect

describe('Neuron', () => {
  let neuron;

  it('triggers a true response', () => {
    neuron = new Neuron({ synapses: [
        new Synapse({ value: -.2 }),
        new Synapse({ weight: 0, value: 1 }),
        new Synapse({ weight: .5, value: .8})
      ],
      threshold: .3
    });

    expect(neuron.shouldTrigger()).to.be.equal(true)
  });

  it('triggers a false response', () => {
    neuron = new Neuron({ synapses: [
        new Synapse({ value: -.2 }),
        new Synapse({ weight: 0, value: 1 }),
        new Synapse({ weight: .5, value: .8})
      ],
      threshold: .5
    });

    expect(neuron.shouldTrigger()).to.be.equal(false)
  });
})
