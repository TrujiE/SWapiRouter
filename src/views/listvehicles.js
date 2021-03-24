import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext";
import Card from "./card";


function ListVehicles(){
	const {number} = useParams();
	const {store, actions} = useContext(Context);	
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [resultado, setResultado] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(response => response.json())
			.then(data => setResultado(data))
			.catch(error => console.error(error));		
	},[]);

	const vehiculos = 
		<div className="d-flex">
		{resultado.results
			? resultado.results.map((elemento, indice) => {			
			return(
				<div id={indice} key={indice} >	
						<Card title= {elemento.name} uid={elemento.uid} link={'/vehicles/' + elemento.uid} />	
				</div>					
				);			
		})
		: "loading..."}
		</div>;

	return(
		<div className="container">	
		<h4 style={{color: "red"}}> Vehicles </h4>
		<div className="card-deck">
		<div >
			{vehiculos}		
		</div>
	    </div>
	    </div>	   
		);
}

export default ListVehicles;