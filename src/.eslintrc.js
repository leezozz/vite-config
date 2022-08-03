module.exports = {
  // 是否开启 eslint
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineComponent: 'readonly',
    defineExpose: 'readonly',
  },
}

// module.exports = {
//   root: true,
//   env: {
//   node: true,
//   es2021: true,
//   browser: true
//   },
//   extends: [
//   'plugin:vue/vue3-recommended',
//   'eslint:recommended',
//   'plugin:prettier/recommended'
//   ],
//   plugins: ['@typescript-eslint', 'prettier'],
//   parserOptions: {
//   parser: '@typescript-eslint/parser',
//   ecmaVersion: 12
//   },
//   rules: {
//   'prettier/prettier': 0,
//   }
// }

//.eslintrc.js里的配置
// module.exports = {
//   /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
//   parser: 'vue-eslint-parser',
//   /* 扩展配置，加一些插件 */
//   extends: [
//     'plugin:vue/recommended' /* eslint应用在vue的必须配置 */,
//     'plugin:prettier/recommended' /* 使用Prettier */
//   ],
//   /* 优先级低于parse的语法解析配置 */
//   parserOptions: {
//     parser: '@typescript-eslint/parser' /* 解析ts语法 */,
//     ecmaVersion: 2018,
//     sourceType: 'module'
//   }
// }
