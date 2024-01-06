import React from 'react'
import Particles from 'react-tsparticles'
import particles from '../neHeader/particle-config'
import { loadFull } from "tsparticles";

export default function Particlesbg() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			params={particles}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
}
