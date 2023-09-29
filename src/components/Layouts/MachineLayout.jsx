import { useEffect, useState } from "react";
import Gauge from "../Elements/Gauge/Gauge";
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from "react-redux";
import { energyConsumption, getLifeTimeMachine, getOEEMachine, getParameterMachine, getProductionMachine, getProductionTimeMachine, pressureGauge } from "../../services/machine.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBoltLightning, faBattery, faAtom } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import CircularProgress from "../Elements/CircularProgress/CircularProgress";


const MachineLayout = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const id = useParams().id;
    const auth = useSelector((state) => state.auth.user);
    let token = "";
    if (auth) {
        token = auth.token;
    }

    const [lifeTime, setLifeTime] = useState(0);
    const [pressureGaugeValue, setPressureGaugeValue] = useState(0);
    const [energyValue, setEnergyValue] = useState({
        'voltage': 0,
        'current': 0,
        'power': 0,
        'energy': 0
    });
    const [oeeValue, setOEEValue] = useState({
        'machine_id': 0,
        'availability': 0,
        'performance': 0,
        'quality': 0,
        'nilaioee': 0,
    })

    const [parameter, setParameter] = useState({
        'cycle_time': 0,
        'loading_time': 0,
        'oee_target': 0,
        'tipe_benda': '',
        'state': 0,
    });

    const [production, setProduction] = useState({
        'defect': 0,
        'good': 0,
        'processed': 0,
        'state': 0,
    });

    const [productionTime, setProductionTime] = useState({
        'operation_time': 0,
        'running_time': 0,
        'downtime': 0,
        'state': 0,
    });

    //Life Time
    useEffect(() => {
        const interval = setInterval(() => {
            getLifeTimeMachine({ token, id }, (response) => {
                if (response.status == 200) {
                    setLifeTime(response.data.data.timevalue / 60);
                } else {
                    console.log(response);
                }
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [id]);

    //Pressure Gauge
    useEffect(() => {
        const interval = setInterval(() => {
            pressureGauge({ token }, (response) => {
                if (response.status == 200) {
                    setPressureGaugeValue(response.data.data[0].value);
                } else {
                    console.log(response);
                }
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [id]);

    //Power Consumption
    useEffect(() => {
        const interval = setInterval(() => {
            energyConsumption({ token }, (response) => {
                if (response.status == 200) {
                    setEnergyValue({
                        'voltage': response.data.data[0].voltage,
                        'current': response.data.data[0].current,
                        'power': response.data.data[0].power,
                        'energy': response.data.data[0].energy
                    })
                } else {
                    console.log(response);
                }
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [id]);

    //OEE
    useEffect(() => {
        const interval = setInterval(() => {
            getOEEMachine({ token, id }, (response) => {
                if (response.status == 200) {
                    setOEEValue({
                        'machine_id': response.data.data[0].machine_id,
                        'availability': response.data.data[0].availability,
                        'performance': response.data.data[0].performance,
                        'quality': response.data.data[0].quality,
                        'nilaioee': response.data.data[0].nilaioee
                    })
                } else {
                    console.log(response);
                }
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [id, lifeTime]);

    //Parameter
    useEffect(() => {
        const interval = setInterval(() => {
            getParameterMachine({ token, id }, (response) => {
                if (response.status == 200) {
                    let data = response.data.data[0]
                    setParameter({
                        'cycle_time': data.cycle_time,
                        'loading_time': data.loading_time,
                        'oee_target': data.oee_target,
                        'tipe_benda': data.tipe_benda,
                        'state': data.state
                    })
                } else {
                    console.log(response);
                }
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [id]);

    //Production
    useEffect(() => {
        const interval = setInterval(() => {
            getProductionMachine({ token, id, tipe: parameter.tipe_benda }, (response) => {
                console.log(response.status);
                if (response['status'] == 200) {
                    let data = response.data.data[0];
                    setProduction({
                        'defect': data.defect,
                        'good': data.good,
                        'processed': data.processed,
                        'state': data.state
                    })
                } else {
                    console.log(response);
                }
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [id, lifeTime]);

    //Production Time
    useEffect(() => {
        const interval = setInterval(() => {
            getProductionTimeMachine({ token, id }, (response) => {
                if (response.status == 200) {
                    let data = response.data.data[0];
                    // console.log(data)
                    setProductionTime({
                        'operation_time': (data.operationtime / 60).toFixed(2),
                        'running_time': (data.runningtime / 60).toFixed(2),
                        'downtime': (data.downtime / 60).toFixed(2),
                        'state': data.state
                    })
                } else {
                    console.log(response);
                }
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [id, lifeTime]);


    return (
        <main className="machine" style={{ backgroundColor: darkMode ? '#333e46' : '#EEEEEE' }}>
            <article className="sensor" style={{ backgroundColor: darkMode ? '#303841' : 'white' }}>
                <section className="pressure">
                    <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Air Pressure</h1>
                    <div className="gauge">
                        <Gauge data={pressureGaugeValue} text={'pressure'} labelColor={darkMode ? "#EEEEEE" : "#3A4750"} />
                    </div>
                </section>
                <section className="listrik">
                    <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Energy Consumption</h1>
                    <div className="box volt">
                        <h2 style={{ color: darkMode ? 'white' : '#303841' }}>Voltage <FontAwesomeIcon icon={faBolt} /></h2>
                        <h6 style={{ color: darkMode ? 'white' : '#303841' }}>{energyValue.voltage} Volt</h6>
                    </div>
                    <div className="box current">
                        <h2 style={{ color: darkMode ? 'white' : '#303841' }}>Current <FontAwesomeIcon icon={faBoltLightning} /></h2>
                        <h6 style={{ color: darkMode ? 'white' : '#303841' }}>{energyValue.current} Ampere</h6>
                    </div>
                    <div className="box power">
                        <h2 style={{ color: darkMode ? 'white' : '#303841' }}>Power <FontAwesomeIcon icon={faBattery} /></h2>
                        <h6 style={{ color: darkMode ? 'white' : '#303841' }}>{energyValue.power} Watt</h6>
                    </div>
                    <div className="box energy">
                        <h2 style={{ color: darkMode ? 'white' : '#303841' }}>Energy <FontAwesomeIcon icon={faAtom} /></h2>
                        <h6 style={{ color: darkMode ? 'white' : '#303841' }}>{energyValue.energy} KWh</h6>
                    </div>
                </section>
            </article>
            <article className="production" style={{ backgroundColor: darkMode ? '#303841' : 'white' }}>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Machine {id}</h1>
                <section className="param">
                    <h2 style={{ color: darkMode ? 'white' : '#303841' }}>Life Time : {lifeTime.toFixed(2)}</h2>
                    <h2 style={{ color: darkMode ? 'white' : '#303841' }}>Object Type : {parameter.tipe_benda}</h2>
                </section>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Production</h1>
                <div className="card-prod" style={{ backgroundColor: darkMode ? '#333e46' : '#EEEEEE' }}>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>Processed Unit : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{production.state == 1 ? production.processed : 0} Unit</p>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>Good Unit : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{production.state == 1 ? production.good : 0} Unit</p>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>Defect Unit : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{production.state == 1 ? production.defect : 0} Unit</p>
                </div>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Production Time</h1>
                <div className="card-prod" style={{ backgroundColor: darkMode ? '#333e46' : '#EEEEEE' }}>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>Running Time : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{production.state == 1 ? productionTime.running_time : 0} Minute</p>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>Operation Time : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{production.state == 1 ? productionTime.operation_time : 0} Minute</p>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>Downtime : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{production.state == 1 ? productionTime.downtime : 0} Minute</p>
                </div>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Parameter</h1>
                <div className="card-prod" style={{ backgroundColor: darkMode ? '#333e46' : '#EEEEEE' }}>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>Loading Time : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{parameter.state == 1 ? parameter.loading_time : 0} Minute</p>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>Cycle Time : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{parameter.state == 1 ? parameter.cycle_time : 0} Minute</p>
                    <h4 style={{ color: darkMode ? 'white' : '#303841' }}>OEE Target : </h4>
                    <p style={{ color: darkMode ? 'white' : '#303841' }}>{parameter.state == 1 ? parameter.oee_target : 0} %</p>
                </div>
            </article>

            <article className="oee" style={{ backgroundColor: darkMode ? '#303841' : 'white' }}>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Machine {id}</h1>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Overall Equipment Effectiveness</h1>
                <div className="circular">
                    <CircularProgress value={oeeValue.nilaioee * 100} pathColor='0, 141, 152' textColor={darkMode ? 'white' : '#303841'} />
                </div>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Availability</h1>
                <div className="circular">
                    <CircularProgress value={oeeValue.availability * 100} pathColor='2, 183, 79' textColor={darkMode ? 'white' : '#303841'} />
                </div>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Performance</h1>
                <div className="circular">
                    <CircularProgress value={oeeValue.performance * 100} pathColor='206, 0, 54' textColor={darkMode ? 'white' : '#303841'} />
                </div>
                <h1 style={{ color: darkMode ? 'white' : '#303841' }}>Quality</h1>
                <div className="circular">
                    <CircularProgress value={oeeValue.quality * 100} pathColor='206, 166, 0' textColor={darkMode ? 'white' : '#303841'} />
                </div>
            </article>
        </main>
    )
}

export default MachineLayout;