import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
    const [planetData, setPlanetdata] = useState ({})
	
    useEffect( ()=>{
        
		fetch('https://www.swapi.tech/api/planets/' + params.planet_id)
		.then((response) => response.json())
		.then((data) => setPlanetdata(data.result.properties))
		
    }

    )

	return (
		<div className="jumbotron">
			
			<h1 className="display-4">{planetData.name}</h1>
			<p>Gravity: {planetData.gravity}</p>
			<p>Climate: {planetData.climate}</p>
			<p>Rotation Period: {planetData.rotation_period}</p>
			<p>Superface Water: {planetData.surface_water}</p>
			

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};