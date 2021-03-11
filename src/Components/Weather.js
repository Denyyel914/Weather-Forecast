import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './weather.css';
import { Container, Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import Card from './Card';

const Weather = () => {

    const [key,setKey] = useState([]);
    const [data,setData] = useState({
        city: "",
        country: ""
    })

    const API = '28876c50c36221de5f008fa752cb3f1a';

    const dataWeather = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${data.city},${data.city}&appid=${API}`)
        .then(res => {
            console.log(res.data)
            // const {resData} = res.list;
            const {list:resData} = res.data
            console.log(resData);
            setKey(resData);
        })
    }

    const handleClick = (e) => {
        const {name,value} = e.target;
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const trigger = (e) => {
        e.preventDefault();
        dataWeather()
    }
    return (
    <Form>
        <Container>
        <Form>
  <Form.Row>
    <Col>
      <Form.Control placeholder="City" onChange={handleClick} name="city" value={data.city} />
    </Col>
    <Col>
      <Form.Control placeholder="Country" onChange={handleClick} name="country" value={data.country}/>
    </Col>
    <Button variant="primary" type="submit" onClick={trigger}>
            Submit
        </Button>
  </Form.Row>
  </Form>

       
        <div className="grid">
        {
            key !== null && (
                key.map((dataMap,index) => {
                    if(index % 8 === 0) {
                        return <Card data={dataMap.weather[0].description} date={dataMap.dt_txt} imgSrc={dataMap.weather[0].icon} temp={Math.floor(dataMap.main.temp - 273.15)}/>
                    } else {
                        return null
                    }
                })
            )
            
            }
        </div> 
        {/* {
            key !== null &&(
            key.map((dataMap,index => {
                if(index % 4 ===  0) {
                    return <Card data={dataMap.weather[0].description} date={dataMap.dt_txt} imgSrc={dataMap.weather[0].icon} temp={Math.floor(dataMap.main.temp - 273.15)}/>

                } else {
                    return null;
                }
            }))
            )
        } */}

        </Container>
    </Form>
    ) /* return ending */
}


export default Weather;
