import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In development, serve the content editor at /admin like the live site does,
// instead of falling through to the app.
const adminRoute = {
  name: 'admin-route',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/admin' || req.url === '/admin/') req.url = '/admin/index.html';
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), adminRoute],
});
