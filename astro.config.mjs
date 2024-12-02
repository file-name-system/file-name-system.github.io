// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site:"https://github.com/file-name-system/file-name-system.github.io",
	
	integrations: [
		starlight({
			title: 'File Name System',
			social: {
				github: 'https://github.com/file-name-system/file-name-system.github.io',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
