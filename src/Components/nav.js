import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function Nav(){

return (
	<div className="container">
		<nav className="navbar navbar-light bg-light">
		  <Link to="/" className="navbar-brand"><h2>StarWars</h2></Link>
		  <div className="form-inline">
	    	<ul className="navbar-nav mr-auto">	    
	      		<li className="nav-item dropdown">
	        		<Link className="nav-link dropdown-toggle btn btn-primary " style={{color: "white"}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          			Favoritos
	        		</Link>
	        		<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	          		<Link className="dropdown-item" href="#">Action</Link>
	        		</div>
	      		</li>	      
	    	</ul>
		  </div>
		</nav>
	</div>
	);
}

