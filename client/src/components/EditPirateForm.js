import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


export default props => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [tesoro, setTesoro] = useState("");
    const [frase, setFrase] = useState("");
    const [position, setPosition] = useState("");
    const [leg, setLeg] = useState("");
    const [eye, setEye] = useState("");
    const [hand, setHand] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const {_id} = useParams();


    useEffect( () => {
        axios.get("http://localhost:8000/api/pirate/"+ _id)
            .then(res => {
                setName(res.data.name);
                setImage(res.data.image);
                setTesoro(res.data.tesoro);
                setFrase(res.data.frase);
                setPosition(res.data.position);
                setLeg(res.data.leg);
                setEye(res.data.eye);
                setHand(res.data.hand);


                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pirate/${_id}`, {
            name,
            image,
            tesoro,
            frase,
            position,
            leg,
            eye,
            hand,
        })
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/")
                }
                console.log(res)

            })
            .catch(err => console.log(err))
    }



    return (


        <div className="p-3 mb-2 bg-secondary text-white text-center w-100 mx-auto p-1">
            <div className='row'>
                <div className='col-10'>
                    <h1>Agregar Pirata </h1>
                </div>
                <div className='col-2'>
                    <button onClick={e => {navigate("/")}} className="btn btn-primary">ir a Pirate Crew</button>
                </div>
            </div>

        <form onSubmit={onSubmitHandler}>


        <div className="p-3 mb-2 bg-warning text-black">
            <div className="row">
                 <div className="w-25 mx-auto p-1 ">

                    <div className="form-group">
                        <label>Nombre del Pirata: </label>
                        <input type="text" value={name} onChange = {e => setName(e.target.value)} className="form-control" />
                        <span className="text-danger">{errors.name ? errors.name.message: "" }</span>
                    </div>

                    <div className="form-group">
                        <label>Imagen del Pirata: </label>
                        <input type="url" value={image} onChange = {e => setImage(e.target.value)} className="form-control" />
                        <span className="text-danger">{errors.image ? errors.image.message: "" }</span>
                    </div>

                    <div className="form-group">
                        <label>Numero de Tesoros: </label>
                        <input type="number" value={tesoro} onChange = {e => setTesoro(e.target.value)} className="form-control" />
                        <span className="text-danger">{errors.tesoro ? errors.tesoro.message: "" }</span>
                    </div>

                    <div className="form-group">
                        <label>Eslogan del pirata: </label>
                        <input type="text" value={frase} onChange = {e => setFrase(e.target.value)} className="form-control" />
                        <span className="text-danger">{errors.frase ? errors.frase.message: "" }</span>
                    </div>
                </div>

                <div className="w-25 mx-auto p-1">

                    <div className="form-group">
                        <label>Rango del Pirata:</label>
                        <select onChange = {(e)=>setPosition(e.target.value)} name="position" value={position} className="form-control">
                                            <option value="">Seleccione el rango</option>
                                            <option value="Captain">Captain</option>
                                            <option value="First Mate">First Mate</option>
                                            <option value="Quarter Master">Quarter Master</option>
                                            <option value="Boatswain">Boatswain</option>
                                            <option value="Powder Monkey">Powder Monkey</option>
                        </select><br></br>
                        <span className="text-danger">{errors.position ? errors.position.message: "" }</span>
                    </div>

                    <div className="form-check">
                            <label class="form-check-label" for="flexCheckDefault">Pata de Palo</label>
                            <input onChange = {e => setLeg(!leg)} checked={leg} classname="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
                        </div>

                        <div className="form-check">
                            <label class="form-check-label" for="flexCheckDefault">Parche en el ojo</label>
                            <input onChange = {e => setEye(!eye)} checked={eye} classname="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
                        </div>

                        <div className="form-check">
                            <label class="form-check-label" for="flexCheckDefault">Garfio en la mano</label>
                            <input onChange = {e => setHand(!hand)} checked={hand} classname="form-check-input" type="checkbox" value="" id="flexCheckDefault"  /><br></br><br></br>
                        </div>

                    <input type="submit" value="Edit Pirate" className="btn btn-success"/>
                 </div>
            </div>

        </div>

        </form>
    </div>
)

}

