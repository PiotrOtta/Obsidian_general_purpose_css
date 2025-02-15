import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

export default tseslint.config(...mantine, {
  ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts'],
  rules: {
    curly: 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
});
