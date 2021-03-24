import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CardDetalle from "./cardDetalle";


export function People(){
	const {number} = useParams();
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);


	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/ + number")
			.then(response => response.json())
			.then(data => setTarea(data))
			.catch(error => console.error(error));		
	},[]);

	const listaPeople = () => {

		const nombre2 = tarea.message
		console.log("nombre2", nombre2);

	}

return (
	<div className="container">	
		<CardDetalle />	
		<div className="dropdown-divider" style={{"background-color": "red", height: "2px"}}></div>
		
		<ul className="list-group list-group-horizontal-xl">
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Name</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Birth Year</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Gender</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Height</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Skin Color</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Eye Color</li>		  		  		  		  
		</ul>	
		
		<ul className="list-group list-group-horizontal-xl">
		  <li className="list-group-item" style={{"border": "none", color:"red"}}></li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}></li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}></li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}></li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}></li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}></li>		  		  		  		  
		</ul>		
	</div>
	);

}
