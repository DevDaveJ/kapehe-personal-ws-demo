const project = {
	name: 'project',
	title: 'Projects',
	type: 'document',

	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				//Change to schema title to automatically populate
				source: "title",
				slugify: (input: string) =>
					input
						.toLowerCase()
						//Remove spaces
						.replace(/\s+/g, "-")
						//Remove special characters
						.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
				
			},
			validation: (Rule: { required: () => any; }) => Rule.required()
		},
		{
			name: 'image',
			title: 'Name',
			type: 'image',
			options: { hotspot: true },

			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string'
				}
			]
		},
		{
			name: 'url',
			title: 'URL',
			type: 'url'
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
}
export default project;