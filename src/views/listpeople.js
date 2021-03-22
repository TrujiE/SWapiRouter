import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./card";


function ListPeople(){
	const {number} = useParams();
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [resultado, setResultado] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(response => response.json())
			.then(data => setResultado(data))
			.catch(error => console.error(error));		
	},[]);


	const ListaPeople = () => {	
		const nombre2 = 
			<div>
			{resultado.results
				? resultado.results.map((elemento, indice) => { 
				<div id={indice} key={indice}>
						{elemento.url}
				</div>					
				return (elemento.uid);		
			})
			: "loading..."}
			</div>;
		console.log("nombre2",nombre2);
	

		useEffect(() => {
//		for(let numb =1; numb < 3; numb= numb+1 ){	
			fetch("https://www.swapi.tech/api/people/1")
				.then(response => response.json())
				.then(data => setTareas(data))
				.catch(error => console.error(error));		
		



//	for(let i=1; i< 4; i= i + 1){ console.log(i) }







//		}
		},[]);
		

		const people = [
		  {
		  	message: 'OK',
		  },
		  {
			result:{
			properties: {
		    name:'James',
		    height: '172',
		    hair_color: 'blond',
		    gender: 'male',
		    eye_color: 'blue',
		    birth_year: '19BBY',
		  }
		  }
		},
		  {
		    description: 'A person within the Star Wars universe',
		  },
		  {
		    uid: '1',
		  }
		];

		const names2=  <div>
      		{people.filter(person => person.result).map(filteredPerson => (
        	<li>
          		{filteredPerson.result.properties.name}
        	</li>
      		))}
    		</div>
			//console.log("names2", names2);	

		const nombre=
			[tareas].filter(person => person.result).map(filteredPerson => (
          		filteredPerson.result.properties.name
      		))
		return(
			nombre
			);


	
	}

	const listaGenero = () => {
    	const genero=
			[tareas].filter(person => person.result).map(filteredPerson => (
          		filteredPerson.result.properties.gender
      		)) 
		return(
			genero
			);
	}

	const listaCabello = () => {
		const cabello=
			[tareas].filter(person => person.result).map(filteredPerson => (
          		filteredPerson.result.properties.hair_color
      		))  		
		return(
			cabello
			);
	}

	const listaOjos = () => {
		const ojos=
			[tareas].filter(person => person.result).map(filteredPerson => (
				filteredPerson.result.properties.eye_color
      		))
		return(
			ojos
			);
	}

	const pruebaL = () => {
		for(let i=0; i<5; i=i+1){
			console.log("i",i);		
		}
	}
	

	return(
		<div className="container">	
		<h4 style={{color: "red"}}> Characters </h4>
		<div className="card-deck">
		<div className="d-flex">
		
	        <Card title={ListaPeople()} gender={listaGenero()} hair={listaCabello()} eyes={listaOjos()} />
	   
	        <Card title="Segunda Carta" />
	        <Card title="Tercera Carta" />
	        <Card title="Cuarta  Carta" />
	    </div>
	    </div>
	    </div>	   
		);


}

export default ListPeople;