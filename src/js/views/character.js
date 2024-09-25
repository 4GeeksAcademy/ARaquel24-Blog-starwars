import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
    const [characterData, setCharacterdata] = useState ({})
	
    useEffect( ()=>{
        
		fetch('https://www.swapi.tech/api/people/' + params.character_id)
		.then((response) => response.json())
		.then((data) => setCharacterdata(data.result.properties))
		
    }

    )

	return (
		<div className="jumbotron">
			<h1 className="display-4">{characterData.name}</h1>
			<p> Birth Year: {characterData.birth_year}</p>
			<p> Gender: {characterData.gender}</p>
			<p> Height: {characterData.height}</p>
			<p> Skin Color : {characterData.skin_color}</p>
			<p> Eye Color: {characterData.eye_color}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object
};