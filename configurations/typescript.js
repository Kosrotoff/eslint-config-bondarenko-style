module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
    },
};
