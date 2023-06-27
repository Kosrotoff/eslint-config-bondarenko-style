# eslint-config-bondarenko-style

Shareable ESLint config.

## Installation

```bash
# Using npm
npm install --save-dev eslint-config-bondarenko-style

# Using yarn
yarn add --dev eslint-config-bondarenko-style
```

> Required ESLint version >= 8
>
> [ESLint documentation](https://eslint.org/docs/latest/user-guide)

## Configs

Available configs:

- [recommended](https://github.com/Kosrotoff/eslint-config-bondarenko-style/blob/main/recommended.js) (default)
- [typescript](https://github.com/Kosrotoff/eslint-config-bondarenko-style/blob/main/typescript.js)

> Use the recommended config with other configs.

## Usage

### default

1) Add to your ESLint config:

   ```json
   {
     "extends": [
       "eslint-config-bondarenko-style"
     ]
   }
   ```

### recommended

1) Add to your ESLint config:

   ```json
   {
     "extends": [
       "eslint-config-bondarenko-style/recommended"
     ]
   }
   ```

### typescript

1) Install required dependencies:

   ```bash
   #Using npm
   npm install --save-dev typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser

   # Using yarn
   yarn add --dev typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

   > **Required versions:** <br/>
   typescript >= 4 <br/>
   @typescript-eslint/eslint-plugin >= 5 <br/>
   @typescript-eslint/parser >= 5 <br/>

2) Add to your ESLint config:

   ```json
   {
     "parser": "@typescript-eslint/parser",
     "parserOptions": {
       "ecmaVersion": "latest",
       "sourceType": "module",
       "project": "./tsconfig.json"
     },
     "extends": [
       "eslint-config-bondarenko-style/recommended",
       "eslint-config-bondarenko-style/typescript"
     ]
   }
   ```

## License

[MIT](LICENSE)
