import { defineConfig } from 'cypress';
import 'dotenv/config';

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'http://localhost:3000',
    env: {
      loginEmail: 'refugee+test.reshetniak@gmail.com',
      loginPassword: 'schemu8s',
    },
  },
});
