import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./card";


function ListPeople(){
	const {number} = useParams();
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [resultado, setResultado] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/1")
			.then(response => response.json())
			.then(data => setTareas(data))
			.catch(error => console.error(error));		
	},[]);

	const listaPeople = () => {

/*
		let nombre2 = <ul> {tarea.result.map((elemento, indice) => {
			return(<li key={indice}> {elemento.uid}</li>);
		})}</ul>;
		console.log("nombre2", nombre2);

*/
	const people = [
	  {
	  	message: 'OK',
	  },
	  {
	    properties: {
	    name:'James',
	    height: '172',
	    hair_color: 'blond',
	    gender: 'male',
	    eye_color: 'blue',
	    birth_year: '19BBY',
	  }
	  },
	  {
	    description: 'A person within the Star Wars universe',
	  },
	  {
	    uid: '1',
	  }
	];
			
	const resultado2 = people;
	const resultado3= resultado2.message;
    console.log("resultado3", resultado3);









	let nombre1 = <div> {tareas.results ? tareas.results.map((elemento, indice) => {
				return ( <div id={indice} key={indice}> {elemento} </div>
					);
		}) : "loading2..."}
		</div>;
		console.log("nombre1",nombre1);

		
	let nombre = 
		<div>
			{tareas.results
				? tareas.results.map((elemento, indice) => { 

				return (<div id={indice} key={indice}> 
						{elemento.name},

					</div>					
					);

			
			})
			: "loading..."}
			</div>;
		console.log("nombre",nombre);

	let persona = {nombre}.length;
		//console.log(persona);


		return(
			nombre
		);
	}


	return(
		<div className="card-deck">
		<div className="d-flex">
	        <Card title= {listaPeople()} />
	        <Card title="Segunda Carta" />
	        <Card title="Tercera Carta" />
	        <Card title="Cuarta  Carta" />
	    </div>
	    </div>
		);


}

export default ListPeople;