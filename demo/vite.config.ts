import { defineConfig, type UserConfig } from 'vite';


export default defineConfig({
	root:  './demo',
	build: {
		outDir: '../dist/demo',
	},
}) as UserConfig;
