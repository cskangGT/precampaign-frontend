module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.d.ts', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never' },
    ],
    'react/jsx-indent': [2, 'tab'],
    'react/jsx-indent-props': [2, 'tab'],
    'no-var': 'warn', // var 금지
    'no-multiple-empty-lines': 'warn', // 여러 줄 공백 금지
    'no-console': ['warn', { allow: ['warn', 'error'] }], // console.log() 금지
    // : 'warn', // 일치 연산자 사용 필수
    'dot-notation': 'warn', // 가능하다면 dot notation 사용
    'no-unused-vars': 'warn', // 사용하지 않는 변수 금지
    'react/destructuring-assignment': 'warn', // state, prop 등에 구조분해 할당 적용
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로
    'react/no-direct-mutation-state': 'warn', // state 직접 수정 금지
    'react/jsx-no-useless-fragment': 'warn', // 불필요한 fragment 금지
    'react/no-unused-state': 'warn', // 사용되지 않는 state
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 강제
    'react/self-closing-comp': 'warn', // 셀프 클로징 태그 가능하면 적용
    'react/jsx-curly-brace-presence': 'warn', // jsx 내 불필요한 중괄호 금지
  },
};
