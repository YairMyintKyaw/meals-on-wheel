import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'MealOnWheel'
  },
  plugins: [
    babel({
      extensions: ['.tsx'],
      presets: ['@babel/preset-react']
    })
  ]
};
