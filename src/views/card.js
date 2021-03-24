import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";


const Card = (props) => {
	const {store, actions} = useContext(Context);
	return(
		<div className="container">			
		<div className="card" style={{width: "18rem"}}>
		  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
		  <div className="card-body">
		    <h5 className="card-title">{props.title}</h5>
		    <p className="card-text"> {props.gender}</p>
		    <p className="card-text"> {props.hair}</p>
		    <p className="card-text"> {props.eyes}</p>
		    <Link to={props.link} id={props.uid} onClick={() => 
		    	 actions.detalle(props.link)} className="btn btn-outline-primary">Learn more! 
		    	</Link>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
		  </div>
		</div>
		<br />
		</div>			
		);
	}

export default Card;
