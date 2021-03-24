import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext";
import ListPeople from './listpeople';
import ListPlanets from './listplanets';
import ListVehicles from './listvehicles';


function Home(){
	const {name, id} = useParams();
	const {store, actions} = useContext(Context);

	return (
		<div className="container">	
			<button onClick= {() => actions.onClick()}> click acaaaa</button>
			<h1> Hi {name} {store.first_name} {store.last_name}</h1>
			<ListPeople />
			<br />
			<ListPlanets />		
			<br />		
			<ListVehicles />				
		</div>
		);
}

export default Home;