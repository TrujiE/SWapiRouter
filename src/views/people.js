import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function People(){

return (
	<div className="container">	
		<div className="card mb-3 text-center" style={{"max-width": "1000px", "border": "none"}}>
		  <div className="row no-gutters">
		    <div className="col-md-3">
		      <img src="https://picsum.photos/200/300/" className="card-img-top" alt="..." />
		    </div>
		    <div className="col-md-8">
		      <div className="card-body">
		        <h5 className="card-title">Card title</h5>
		        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>		        
		      </div>
		    </div>		    
		  </div>
		</div>
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
