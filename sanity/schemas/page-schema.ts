const page = {
	name: 'page',
	title: 'Pages',
	type: 'document',

	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,

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
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
}
export default page;