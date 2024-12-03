// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site:"https://github.com/file-name-system/file-name-system.github.io",
	trailingSlash:"always",

	integrations: [
		starlight({
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			title: 'File Name System',
			defaultLocale: 'en', // optional
			locales: {
				en: {
					label: 'English',
				  },
				'ko': {
				  label: '한국어',
			
				}
			},
			components: {
				// Override the default `SocialIcons` component.
				//PageFrame: './src/components/PageFrame.astro',
				//Header: './src/components/Header.astro',
			  },
			social: {
				github: 'https://github.com/file-name-system/file-name-system.github.io',
			},
			sidebar: [
				{
					label: 'Guides',
				 slug: 'guide'
				},
				{
					label: 'Spec',
				 slug: 'spec'
				},
			],
		}),
	],
});
