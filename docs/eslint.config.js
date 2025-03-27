import mantine from 'eslint-config-mantine';
import reactCompiler from 'eslint-plugin-react-compiler';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ...mantine[0], ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts', 'dist'] },
  {
    ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts', 'dist'],
    plugins: {
      'react-compiler': reactCompiler,
    },
    rules: {
      curly: 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'react-compiler/react-compiler': 'error',
    },
  }
);
