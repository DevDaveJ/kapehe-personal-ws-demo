import { PortableText } from "@portabletext/react";
import { getPage } from "@sanity/sanity.utils";

type Props = {
	params: { slug: string }
}

const Page = async ({ params }:Props) => {
	const page = await getPage(params.slug);

	return (
		<div>
			<h1 className='bg-gradient-to-r from-orange-400 to-violet-800 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>{page.title}</h1>
			<div className="text-lg text-gray-700 mt-10">
				<PortableText value={page.content} />
			</div>
		</div>
	)
}
export default Page;
