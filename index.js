const Neuron = require('./neuron');
const Synapse = require('./synapse');

const neuron1 = new Neuron({ synapses: [
    new Synapse({ value: -.2 }),
    new Synapse({ weight: 0, value: 1 }), // no effect
    new Synapse({ weight: .5, value: .8})
  ],
  threshold: .3
});

// Identical except for the threshold
const neuron2 = new Neuron({ synapses: [
    new Synapse({ value: -.2 }),
    new Synapse({ weight: 0, value: 1 }), // no effect
    new Synapse({ weight: .5, value: .8})
  ],
  threshold: .5
});

const willTriggerN1 = neuron1.shouldTrigger(); // true
const willTriggerN2 = neuron2.shouldTrigger(); // false

console.log(`
  The first neuron: ${ willTriggerN1 }
  The second neuron: ${ willTriggerN2 }
`);
