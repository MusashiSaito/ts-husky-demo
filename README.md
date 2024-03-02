# ESLint Prettier Husky Commit Auto Fix

## First install

```
$ cd ts-husky-eslint-prettier
$ npm init
$ npm install --save-dev typescript eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged
$ touch tsconfig.eslint.json .eslintrc.js .prettierrc
```

## If husky doesn't run

＊動かない場合、一度huskyをインストールし直してください。

```
$ npm uninstall husky
$ npm install -D husky@4.3.8
```
