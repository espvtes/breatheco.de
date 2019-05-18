import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import { Obras } from "../component/obras.js";
import { Curriculum } from "../component/curriculum.js";
import { Contact } from "../component/contact.js";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return (
			<div className="container-fluid p-0 parallax">
				<nav className="navbar justify-content-center navbar-light">
					<ul className="nav  ">
						<li className="nav-item px-4">
							<a className="nav-link text-dark" href="#author">
								Autor
							</a>
						</li>
						<li className="nav-item px-4">
							<a className="nav-link text-dark" href="#curriculum">
								Curriculum
							</a>
						</li>
						<li className="nav-item px-4">
							<a className="nav-link text-dark" href="#obras">
								Obras
							</a>
						</li>
						<li className="nav-item px-4">
							<a className="nav-link text-dark" href="#contact">
								Contacto
							</a>
						</li>
					</ul>
				</nav>
				<div className="row">
					<div className="col-12">
						<a className="navbar-brand shadow " href="#">
							<span className="title text-light">RaydeL</span>
							<br />
							<span className="title-2 text-light">Griñan</span>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-12 parallax" />
				</div>

				{/*autor*/}
				<div className="container">
					<div className="row py-4" id="author">
						<div className="col-12 col-sm-3 pt-4">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Salvador_Dali_NYWTS.jpg/220px-Salvador_Dali_NYWTS.jpg"
								className="img-fluid w-100"
							/>
						</div>
						<div className="col-12 col-sm-9 pt-4 text-justify">
							<h4>Mi obra</h4>
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
								McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
								the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
								the cites of the word in classical literature, discovered the undoubtable source.
							</p>
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
								piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
								McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
								the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
								the cites of the word in classical literature, discovered the undoubtable source.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 parallax-2" />
				</div>
				{/*obras*/}
				<Obras />
				<div className="row">
					<div className="col-12 parallax-3" />
				</div>
				{/*curriculum*/}
				<Curriculum />
				<div className="row">
					<div className="col-12 parallax-4" />
				</div>
				{/*contact*/}
				<Contact />
				<div className="row">
					<div className="col-12 parallax" />
				</div>
			</div>
		);
	}
}
