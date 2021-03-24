import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext";
import Card from "./card";


function ListPeople(){
	const {number} = useParams();
	const {store, actions} = useContext(Context);
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [resultado, setResultado] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(response => response.json())
			.then(data => setResultado(data))
			.catch(error => console.error(error));		
	},[]);

	const nombres = 
		<div className="d-flex">
		{resultado.results
			? resultado.results.map((elemento, indice) => {			
			return(
				<div id={indice} key={indice} >	
						<Card title= {elemento.name} uid={elemento.uid}/>	
				</div>					
				);			
		})
		: "loading..."}
		</div>;

	return(
		<div className="container">	
		<h4 style={{color: "red"}}> Characters </h4>	
		<div className="card-deck">
		<div >
			{nombres}	
			{store.favoritos.map((item, indice) => 
				(<h1 key={indice}>{item} 
					<span style={{cursor: "pointer"}} onClick={() => 
						actions.eliminaFav(indice)}> X </span></h1>))}
		</div>
	    </div>
	    </div>	   
		);
}

export default ListPeople;

// Carta funciona
/*
const nombre2 = 
		<div className="d-flex">
		{resultado.results
			? resultado.results.map((elemento, indice) => {			
			return(
				<div id={indice} key={indice} >													
					<Card title={elemento.name} gender="male"/>

				</div>					
				);			
		})
		: "loading..."}
		</div>;
*/


	//console.log("nombre2",nombre2);



/*
		const ListaPeople = (x) => {

		useEffect(() => {
			fetch("https://www.swapi.tech/api/people/" + x)
				.then(response => response.json())
				.then(data => setTareas(data))
				.catch(error => console.error(error));
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
	
*/




/*
	const ListaGenero = (id) => {
		const [tarea, setTarea] = useState("");
		const [tareas, setTareas] = useState([]);

		useEffect(() => {
			fetch("https://www.swapi.tech/api/people/" + id)
				.then(response => response.json())
				.then(data => setTareas(data))
				.catch(error => console.error(error));		
		},[]);

    	const genero=
			[tareas].filter(person => person.result).map(filteredPerson => (
          		filteredPerson.result.properties.gender
      		)) 
		return(
			genero
			);
	}

		useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + 1)
			.then(response => response.json())
			.then(data => setTareas(data))
			.catch(error => console.error(error))		
	},[]);

	[tareas].filter(person => person.result).map(filteredPerson => (
	<Card title="filteredPerson.result.properties.name" gender="filteredPerson.result.properties.gender"
	 hair="filteredPerson.result.properties.hair_color" eyes="filteredPerson.result.properties.eye_color" />
	));


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


*/
