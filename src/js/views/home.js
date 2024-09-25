import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardCharacters } from "../component/cardCharacters";
import { Navigate } from "react-router";
import { Context } from "../store/appContext";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => {

	const { store, actions } = useContext(Context);


	
	return (
		<>
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="d-flex" style={{overflow: 'auto' }}>
				{store.character.map((personaje)=> <CardCharacters key ={personaje.url} url ={personaje.url} gender={personaje.gender} hair_color={personaje.hair_color} eye_color={personaje.eye_color} name={personaje.name}/>)}
			</div>
			
		</div>

		<div className="text-center mt-5">
			<h1>Planets</h1>
			<div className="d-flex" style={{overflow: 'auto' }}>
				{store.planet.map((planeta)=> <CardPlanets key ={planeta.url} url ={planeta.url} name={planeta.name} terrain={planeta.terrain} population={planeta.population}/>)}
			</div>
			
		</div>
		
	
		</>
		);
};
