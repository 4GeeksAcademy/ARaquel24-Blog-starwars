import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">{store.favoritePersonaje.map((personaje)=><p>{personaje}</p>)}</a></li>
						<li><a class="dropdown-item" href="#">{store.favoritePlaneta.map((planeta)=><p>{planeta}</p>)}</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
