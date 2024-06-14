import { fileURLToPath } from 'node:url';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  define: {
    __IS_DEV__: true
  },
  plugins: [
    {
      name: 'load-svg',
      enforce: 'pre',
      transform(_, id) {
        if (id.endsWith('.svg')) {
          return 'export default () => {}';
        }
      }
    }
  ],
  test: {
    css: true,
    globals: true,
    clearMocks: true,
    include: ['**/*.spec.tsx', '**/*.spec.ts'],
    reporters: ['basic', 'junit', 'json'],
    watch: false,
    environment: 'jsdom',
    setupFiles: './config/vitest/setup.ts',
    coverage: {
      reporter: ['html'],
      enabled: true,
      provider: 'v8',
      reportsDirectory: './tests/coverage',
      include: ['**/src/shared/**'],
      exclude: ['**/*.stories.*', '**/src/shared/providers/**', ...coverageConfigDefaults.exclude]
    },
    alias: {
      '@': fileURLToPath(new URL('../../src', import.meta.url))
    }
  }
});
