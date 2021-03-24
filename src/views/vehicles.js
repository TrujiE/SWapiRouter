import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext";
import CardDetalle from "./cardDetalle";


export function Vehicles(){
	const {number} = useParams();
	const {store, actions} = useContext(Context);

return (
	<div className="container">	
		<CardDetalle />	
		<div className="dropdown-divider" style={{"background-color": "red", height: "2px"}}></div>
		
		<ul className="list-group list-group-horizontal-xl">
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Name</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Passengers</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Vehicle Class</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Crew</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Manufacturer</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>Length</li>		  		  		  		  
		</ul>	
		
		<ul className="list-group list-group-horizontal-xl">
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.name}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.passengers}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.vehicle_class}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.crew}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.manufacturer}</li>
		  <li className="list-group-item" style={{"border": "none", color:"red"}}>{store.detalle.length}</li>		  		  		  		  
		</ul>	
	</div>
	);



}
