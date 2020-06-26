import { mdsvex } from 'mdsvex'
import postcss from 'rollup-plugin-postcss'

export default {
  svelte: config => ({
    ...config,
    preprocess: mdsvex({ extension: '.md' }),
    extensions: ['.svelte', '.md'],
  }),
  rollup: config => ({
    ...config,
    plugins: [ postcss(), ...config.plugins]
  }),
  routify: config => ({ ...config })
}
