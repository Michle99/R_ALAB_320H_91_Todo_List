import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        globals: true,
        environment: "happy-dom",
        setupFiles: "./src/__tests__/vitest.setup.ts",
        reporters: ['default','html'],
        coverage: {
            provider: 'v8'
        },
    },
});