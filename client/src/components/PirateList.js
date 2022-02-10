import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

export default props => {
    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();
    const getEverything = () => {

        Axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err));
    };

    useEffect( () => {
        getEverything();
    }, []);

    const deleteHandler = (id) => {
        Axios.delete('http://localhost:8000/api/pirate/' + id)
        .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
        .catch((err)=>console.log(err))
    }

    return (


<div className="container">

    <div className="row ">

        <div className="col-10 p-3 mb-2 bg-secondary text-white text-center ">
            <h1> Pirate Crew</h1>
        </div>

        <div className="col-2 p-3 mb-2 bg-secondary text-white text-center ">
        <button onClick={e => {navigate("/new")}} className="btn btn-primary">Agregar Pirata</button>
        </div>
    </div>

    <div className="row ">
        <div className="col-3 p-3 mb-2 bg-warning text-black text-center ">
        {pirates.map((pirate, index)=>{
                    return (
                        <div className='info'>
                            <div key={index}>
                            <img src={pirate.image} className="img-fluid"  alt="pirata"/>
                            </div>
                        </div>
                    )
            })}
        </div>


        <div className="col-9 p-3 mb-2 bg-warning text-black text-center ">
        {pirates.map((pirate, index)=>{
                    return (
                        <div className='info'>
                        <div key={index}>
                            <h3>{pirate.name}</h3>
                            <button onClick={()=>navigate("/pirate/" + pirate._id)}className="btn btn-primary" style={{margin: "10px", fontSize:"25px"}}>Ver info del Pirata</button>
                            <button onClick={()=>deleteHandler(pirate._id)}className="btn btn-danger" style={{margin: "10px", fontSize:"25px"}}>Caminar por la plancha</button> <br></br> <br></br>
                        </div>
                        </div>
                    )
            })}
        </div>
    </div>
</div>
   )
}