import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			shared: path.resolve(__dirname, './src/shared'),
			entities: path.resolve(__dirname, './src/entities'),
			features: path.resolve(__dirname, './src/features'),
			pages: path.resolve(__dirname, './src/pages'),
		},
	},
});
