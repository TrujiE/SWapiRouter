import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ListVehicles(){

	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [resultado, setResultado] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(response => response.json())
			.then(data => setTareas(data))
			.catch(error => console.error(error));		
	},[]);

	const listaVehicles = () => {
		let nombre = 
		<div>
			{tareas.results
				? tareas.results.map((elemento, indice) => { 

				return (<div id={indice} key={indice}> 
						{elemento.name}					
					</div>				

					);

			
			})
			: "loading..."}
			</div>;

		return(
			//console.log(nombre)
			nombre
		);
	}

	return(
		<div className="container">	
		<h4 style={{color: "red"}}> Vehicles </h4>
		<div className="card" style={{width: "18rem"}}>
		  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
		  <div className="card-body">
		    <h5 className="card-title">{listaVehicles()}</h5>
		    <p className="card-text">Model: </p>
		    <p className="card-text">Vehicle-Class: </p>
		    <Link to="/vehicles" className="btn btn-outline-primary">Learn more!</Link>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
		  </div>
		</div>
		<br />
		</div>
		);


}

export default ListVehicles;