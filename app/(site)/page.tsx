import Image from "next/image";
import Link from "next/link";

import { getProjects } from '@sanity/sanity.utils';

const Home = async () => {
	const projects = await getProjects();
	console.log({ projects })
	return (
		<div>

			<h1 className="text-7xl font-extrabold">Hello I&apos;m
				<span className="bg-gradient-to-r from-orange-400 to-violet-800 bg-clip-text text-transparent"> David</span>!
			</h1>
			<p className="mt-3 text-xl text-gray-500">Aloha everyone! Check out my projects!</p>

			<h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project) => (
					<Link 
						href={`/projects/${project.slug}`}
						key={project._id} 
						className="border border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition">
						<div className="relative w-auto h-96 lg:h-72">{project.image && (
							<Image
								src={project.image}
								alt={project.alt}
								fill={true}
								style={{ objectFit: 'cover'}}
								className="object-cover rounded-lg border border-gray-500"
							/>
						)}</div>
						<div className="font-extrabold bg-gradient-to-r from-orange-400 to-violet-800 bg-clip-text text-transparent">
							{project.name}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
export default Home;