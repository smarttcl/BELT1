import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default props => {
    const [pirate, setPirate] = useState({})
    const navigate = useNavigate();
    const {_id} = useParams();


    useEffect( () => {
        axios.get("http://localhost:8000/api/pirate/" +_id)
          .then(response => {
            setPirate(response.data)
            console.log(response)
          })
          .catch(err => console.log("Error: ", err))
      }, [])


    const deleteObject = (_id) => {
        axios.delete(`http://localhost:8000/api/pirate/${_id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }


    return (


    <div className="container">

        <div className="row ">

            <div className="col p-3 mb-2 bg-secondary text-white text-center ">
                <h1>{pirate.name}</h1>
            </div>
        </div>

        <div className="row ">
            <div className="col-6 p-3 mb-2 bg-warning text-black text-center ">
                <img src={pirate.image} className="img-fluid"  alt="pirata"/>
                <h2>{pirate.frase}</h2>
            </div>


            <div className="col-6 p-3 mb-2 auto bg-warning text-black text-left ">
                <h3>Rango: {pirate.position}</h3>
                <h3>N° de Tesoros: {pirate.tesoro}</h3><br></br>
                <h5> {pirate.leg && <p>Pata de palo: Si</p>}</h5>
                <h5>{!pirate.leg && <p>Pata de palo: No</p>}</h5>
                <h5>{pirate.eye && <p>Parche en el ojo: Si</p>}</h5>
                <h5>{!pirate.eye && <p>Parche en el ojo: No</p>}</h5>
                <h5>{pirate.hand && <p>Garfio en la mano: Si</p>}</h5>
                <h5>{!pirate.hand && <p>Garfio en la mano: No</p>}</h5>

                <button onClick={ e => {deleteObject(pirate._id)}} className="btn btn-danger" style={{margin: "10px", fontSize:"25px"}}>Eliminar Pirata</button>
                <button onClick={e => {navigate("/edit/" + pirate._id)}} className="btn btn-success"style={{margin: "10px", fontSize:"25px"}}>Editar</button>
            </div>
        </div>
    </div>
)
}