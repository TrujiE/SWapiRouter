import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ListPeople from './listpeople';
import ListPlanets from './listplanets';
import ListVehicles from './listvehicles';

function Home(){
	const {name} = useParams();

return (
	<div className="container">	
		<h1> Hello {name} </h1>
		<ListPeople />
		<br />
		<ListPlanets />		
		<br />		
		<ListVehicles />				
	</div>
	);



}

export default Home;