import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

	const Card = (props) => {
		return(
			<div className="container">	
			<h4 style={{color: "red"}}> Characters </h4>
			<div className="card" style={{width: "18rem"}}>
			  <img src="https://picsum.photos/90/80/" className="card-img-top" alt="..." />
			  <div className="card-body">
			    <h5 className="card-title">{props.title}</h5>
			    <p className="card-text">Gender: </p>
			    <p className="card-text">Hair Color: </p>
			    <p className="card-text">Eye-Color: </p>
			    <Link to="/people" className="btn btn-outline-primary">Learn more!</Link>&nbsp;&nbsp;<a href="#" className="btn btn-outline-warning">♥</a>
			  </div>
			</div>
			<br />
			</div>			
			);
	}


export default Card;



