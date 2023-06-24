import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import { getProject } from '@sanity/sanity.utils';
import Image from 'next/image';

type Props = {
	params: { project: string }
}

const Project = async ({ params }: Props) => {
	const slug = params.project;

	const project = await getProject(slug);

	return (
		<div>
			<header className='flex justify-between'>
				<h1 className='bg-gradient-to-r from-orange-400 to-violet-800 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
					{project.name}
				</h1>
				<Link href={project.url} title='View Project' target='_blank' rel='noopener noreferrer'
					className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition'
				>
					View Project
				</Link>
			</header>

			<div className='text-lg text-gray-700 mt-5'>
				<PortableText value={project.content} />
			</div>

			<div>
				<Image
					src={project.image}
					alt={project.alt}
					width={1920}
					height={768}
					className='mt-10 border-2 border-gray-700 object-cover rounded-xl'
					/>
			</div>
		</div>
	)
}
export default Project;