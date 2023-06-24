import { defineConfig } from "sanity";
import { deskTool} from 'sanity/desk';

import schemas from '@schemas/index';

const config = defineConfig({
	projectId: "7bqcyzyf",

	dataset: "production",

	title: "My Personal Website",

	apiVersion: "2023-06-17",

	basePath: "/admin",

	plugins: [deskTool()],

	schema: { types: schemas }
});
export default config;