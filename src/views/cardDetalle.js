import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";


const CardDetalle = (props) => {
	const {store, actions} = useContext(Context);
	return(
		<div className="container">			
		<div className="card mb-3 text-center" style={{"max-width": "1000px", "border": "none"}}>
		  <div className="row no-gutters">
		    <div className="col-md-3">
		      <img src="https://picsum.photos/200/300/" className="card-img-top" alt="..." />
		    </div>
		    <div className="col-md-8">
		      <div className="card-body">
		        <h5 className="card-title">{store.detalle.name}</h5>
		        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>		        
		      </div>
		    </div>		    
		  </div>
		</div>
		<br />
		</div>			
		);
	}

export default CardDetalle;



