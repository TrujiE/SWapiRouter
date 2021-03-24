import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext";
import CardDetalle from "./cardDetalle";


export function Planets(){
	const {number} = useParams();
	const {store, actions} = useContext(Context);
return (
	<div className="container">	
		<CardDetalle />	
		<div className="dropdown-divider" style={{"background-color": "red", height: "2px"}}></div>
		
		<ul className="list-group list-group-horizontal-xl">
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Name</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Climate</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Population</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Orbital Period</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Rotation Period</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Diameter</li>		  		  		  		  
		</ul>	
		
		<ul className="list-group list-group-horizontal-xl">
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.name}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.climate}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.population}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.orbital_period}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.rotation_period}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.diameter}</li>		  		  		  		  
		</ul>		
	</div>
	);



}
