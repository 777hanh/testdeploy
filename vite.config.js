import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'development' ? './' : '/testdeploy',
    plugins: [react()],
    resolve: {
        // change alias
        alias: {
            // @ --> `./src`
            '@': path.resolve(__dirname, './src'),
            // @component --> `./src/component`
            '@component': `${path.resolve(__dirname, './src/components')}`,
            // @pages --> `./src/pages`
            '@pages': path.resolve(__dirname, './src/pages'),
        },
    },
    server: {
        // Open Browser when start `npm run dev`
        open: true,
        // Set port to listen on 3000
        port: 3000,
    },
});
