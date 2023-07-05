module.exports = {
    rules: {
        'array-callback-return': 'error',
        'no-constant-binary-expression': 'error',
        'no-duplicate-imports': [
            'error',
            {
                includeExports: true,
            },
        ],
        'no-self-compare': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable-loop': 'error',
        'no-unused-private-class-members': 'warn',
        'require-atomic-updates': 'error',
        'arrow-body-style': 'error',
        camelcase: [
            'error',
            {
                ignoreGlobals: true,
                ignoreImports: true,
                ignoreDestructuring: true,
            },
        ],
        curly: 'error',
        'default-case': 'error',
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
            },
        ],
        'prefer-const': 'error',
        'prefer-promise-reject-errors': 'error',
        'quote-props': [
            'error',
            'as-needed',
        ],
        'spaced-comment': 'error',
        'array-bracket-spacing': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'block-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'implicit-arrow-linebreak': 'error',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 120,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'max-statements-per-line': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'no-tabs': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    consistent: true,
                    multiline: true,
                },
                ObjectPattern: {
                    multiline: true,
                },
                ImportDeclaration: {
                    multiline: true,
                },
                ExportDeclaration: {
                    multiline: true,
                },
            },
        ],
        'object-curly-spacing': 'error',
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        quotes: [
            'error',
            'single',
        ],
        'rest-spread-spacing': 'error',
        semi: 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'wrap-iife': 'error',
    },
};
