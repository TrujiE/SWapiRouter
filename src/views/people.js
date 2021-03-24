import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext";
import CardDetalle from "./cardDetalle";


export function People(){
	const {number} = useParams();
	const {store, actions} = useContext(Context);
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);

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
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.name}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.birth_year}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.gender}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.height}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.skin_color}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.eye_color}</li>		  		  		  		  
		</ul>		
	</div>
	);

}
