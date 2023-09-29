import { useEffect, useState } from "react";
import { getEnergy, getMachineStatus, getOEE, getProductHome } from "../../services/home.service";

import Wrap, { BodyWrap, FooterWrap, HeaderWrap } from "../Fragments/Wrap";
import ActiveMachine from "../Elements/ActiveMachine/ActiveMachine";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import LineChart from "../Elements/Chart/LineChart";
import CardHome from "../Fragments/CardHome";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const HomeLayout = () => {
    const darkMode = useSelector((state)=> state.darkMode);
    const auth = useSelector((state)=>state.auth.user);
    const navigate = useNavigate();
    let token = "";
    const [product, setProduct] = useState([]);
    const [status, setStatus] = useState([]);
    const [power, setPower] = useState([]);
    const [waktuPower, setWaktuPower] = useState([]);
    const [oee, setOEE] = useState([]);

    const bgCardColor = [
        '#303841',
        '#3A4750',
        '#00ADB5',
        '#EEEEEE',
    ]

    const titleProduct = [
        "Machine ",
        "Unit Type : ",
        "Processed Unit : ",
        "Good Unit : ",
        "Defect Unit : "
    ];

    const titleOEE = [
        "Machine ",
        "Performance : ",
        "Quality : ",
        "Availability : ",
        "OEE : "
    ];
    useEffect(() => {
        if(auth){
            token = auth.token;
        }else{
            navigate('/login');
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            getOEE({ token }, (response) => {
                if (response.status == 200) {
                    setOEE(response.data.data);
                } else {
                    setOEE([]);
                }
            })
        }, 1500);
        return () => clearInterval(interval);
    },[token])

    useEffect(() => {
        const interval = setInterval(() => {
            getProductHome({ token }, (response) => {
                if (response.status == 200) {
                    setProduct(response.data.data);
                } else {
                    setProduct([]);
                }
            });
        }, 1500);
        return () => clearInterval(interval);
    }, [token])

    useEffect(() => {
        const interval = setInterval(() => {
            getMachineStatus({ token }, (response) => {
                if (response.status == 200) {
                    setStatus(response.data.data);
                } else {
                    setStatus([]);
                }
            })
        }, 1500);
        return () => clearInterval(interval);
    }, [token])

    useEffect(() => {
        const interval = setInterval(() => {
            getEnergy({ token }, (response) => {
                if (response.status == 200) {
                    setPower(response.data.data);
                    let data = [];
                    let waktu = []
                    response.data.data.map((item) => {
                        const date = new Date(item.createdAt);
                        date.setUTCHours(date.getUTCHours() + 7);
                        const jam = date.getUTCHours();
                        const menit = date.getUTCMinutes();
                        const detik = date.getUTCSeconds();
                        waktu.push(`${jam}:${menit}:${detik}`);
                        data.push(item.power);
                        setWaktuPower(waktu);
                        setPower(data);
                    })
                } else {
                    console.log('error');
                }
            })
        }, 1500);
        return () => clearInterval(interval);
    }, [token])

    return (
        <main className="home" style={{backgroundColor: darkMode? '#333e46' : '#EEEEEE'}}>
            <Wrap style={{backgroundColor: darkMode? '#333e46' : '#FFFFFF'}} className={"top-left-wrap"}>
                <HeaderWrap style={{color: darkMode? 'white' : '#303841'}} title={"Active Machine"} />
                <BodyWrap>
                    {
                        status.map((item, index) => {
                            return <ActiveMachine key={index}
                                title={`Machine ${item.machine_id}`}
                                style={item.status === 1 ? { backgroundColor: "green" } : { backgroundColor: "red" }}
                                status={item.status === 1 ? "Active" : "Not Active"}
                                icon={item.status === 1 ? faCheck : faClose}
                                fontColor={{ color: darkMode? 'white' : '#303841' }}
                                />
                        })
                    }
                </BodyWrap>
                <FooterWrap />
            </Wrap>
            <Wrap style={{backgroundColor: darkMode? '#333e46' : '#FFFFFF'}} className={"bot-left-wrap"}>
                <HeaderWrap style={{color: darkMode? 'white' : '#303841'}} title={"Power Usage (W)"} />
                <LineChart 
                label="Power Usage" 
                items={power} labels={waktuPower} 
                gridColor={darkMode? 'white' : '#303841'} 
                labelColor={darkMode? 'white' : '#303841'}
                />
            </Wrap>
            <section className="big-wrap" style={{backgroundColor: darkMode? '#333e46' : '#FFFFFF'}}>
                <h1 style={{color: darkMode? 'white' : ''}}>Dashboard</h1>
                <h2 style={{color: darkMode? 'white' : ''}}>Production</h2>
                <div className="card-home-wrap">
                    {
                        product.map((item, index) => {
                            return (
                                <CardHome key={index}
                                    machine={item.machine_id}
                                    data1={item.tipe}
                                    data2={item.processed}
                                    data3={item.good}
                                    data4={item.defect}
                                    path={`/machine/${item.machine_id}`}
                                    color={bgCardColor[index]} 
                                    title={titleProduct}
                                />
                            )
                        })
                    }
                </div>
                <h2 style={{color: darkMode? 'white' : '#303841'}}>OEE</h2>
                <div className="card-home-wrap">
                    {
                        oee.map((item, index) => {
                            return (
                                <CardHome key={index}
                                    machine={item.machine_id}
                                    data1={`${item.performance * 100}%`}
                                    data2={`${item.quality * 100}%`}
                                    data3={`${item.availability * 100}%`}
                                    data4={`${item.nilaioee * 100}%`}
                                    path={`/machine/${item.machine_id}`}
                                    color={bgCardColor[index]} 
                                    title={titleOEE}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default HomeLayout;