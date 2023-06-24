import { createClient, groq } from "next-sanity";
import { Project } from "types/Project";
import { Page } from "types/Page";
import clientConfig from '@sanity/config/client-config';

export const getProjects = async(): Promise<Project[]> => {
	return await createClient(clientConfig).fetch(
		groq`*[_type == 'project']{
			_id, 
			_createdAt,
			name,
			"slug": slug.current,
			"image": image.asset->url,
			url,
			content,
			"alt": image.alt
		}`
	)
}

export const getProject = async(slug: string):Promise<Project> => {
	return await createClient(clientConfig).fetch(
		groq`*[_type == 'project' && slug.current == $slug][0]{
			_id, 
			_createdAt,
			name,
			"slug": slug.current,
			"image": image.asset->url,
			url,
			content,
			"alt": image.alt
		}`,
		{ slug: slug}
	)
}

export const getPages = async(): Promise<Page[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page"]{
			_id,
			_createdAt,
			title,
			"slug": slug.current
		}`
	)	
}

export const getPage = async(searchSlug: string): Promise<Page> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == "page" && slug.current == $slug][0]{
			_id,
			_createdAt,
			title,
			"slug": slug.current,
			content
		}`,
		{ slug: searchSlug}
	)
}