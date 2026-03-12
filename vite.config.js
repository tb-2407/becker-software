import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        productDetail: resolve(__dirname, 'product-detail.html'),
        company: resolve(__dirname, 'company.html'),
        governance: resolve(__dirname, 'governance.html'),
        sustainability: resolve(__dirname, 'sustainability.html'),
        talents: resolve(__dirname, 'talents.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
