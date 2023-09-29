import GaugeComponent from 'react-gauge-component'

const Gauge = ({ data, text, labelColor }) => {
    console.log(labelColor);
    return <GaugeComponent
        type="semicircle" 
        arc={{
            width: 0.2,
            padding: 0.005,
            cornerRadius: 1,
            // gradient: true,
            subArcs: [
                {
                    limit: 2,
                    color: '#EA4228',
                    showTick: true,
                    tooltip: {
                        text: `Too low ${text}!`
                    },
                },
                {
                    limit: 4,
                    color: '#F5CD19',
                    showTick: true,
                    tooltip: {
                        text: `Low ${text}!`
                    }
                },
                {
                    limit: 8,
                    color: '#5BE12C',
                    showTick: true,
                    tooltip: {
                        text: `OK ${text}!`
                    }
                },
                {
                    limit: 12,
                    color: '#5BE12C',
                    showTick: true,
                    tooltip: {
                        text: `OK ${text}!`
                    }
                },
                {
                    limit: 14, color: '#F5CD19', showTick: true,
                    tooltip: {
                        text: `High ${text}!`
                    }
                },
                {
                    color: '#EA4228',
                    tooltip: {
                        text: `Too high ${text}!`
                    }
                }
            ]
        }}
        pointer={{
            color: '#345243',
            length: 0.80,
            width: 15,
            elastic: true,
        }}
        labels={{
            valueLabel: { formatTextValue: value => value + 'bar', style: {fontSize: 30 , fill: `${labelColor}`, textShadow: 'none'}, matchColorWithArc: true },
            tickLabels: {
                type: 'outer',
                valueConfig: { formatTextValue: value => value + 'bar', fontSize: 10 },
                // ticks: [
                //     { value: 13 },
                //     { value: 22.5 },
                //     { value: 32 }
                // ],
            }
        }}
        value={data}
        minValue={0}
        maxValue={16}
    />
}

export default Gauge;