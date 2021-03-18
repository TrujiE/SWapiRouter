import React, { useState, useEffect } from "react";


export function Nav(){

return (
	<div className="container">
		<nav className="navbar navbar-light bg-light">
		  <a className="navbar-brand"><h2>StarWars</h2></a>
		  <div className="form-inline">
	    	<ul className="navbar-nav mr-auto">	    
	      		<li className="nav-item dropdown">
	        		<a className="nav-link dropdown-toggle btn btn-primary " style={{color: "white"}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          			Favoritos
	        		</a>
	        		<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	          		<a className="dropdown-item" href="#">Action</a>
	        		</div>
	      		</li>	      
	    	</ul>
		  </div>
		</nav>
	</div>
	);
}

