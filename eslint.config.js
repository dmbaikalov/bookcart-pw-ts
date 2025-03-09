module.exports = [
    {
        ignores: ["node_modules", "dist", "playwright-report"],
    },
    {
        languageOptions: {
            parser: require("@typescript-eslint/parser"),
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
            prettier: require("eslint-plugin-prettier"),
        },
        rules: {
            "prettier/prettier": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "no-console": "warn",
            quotes: ["error", "double", { avoidEscape: true }],
            semi: ["error", "always"],
            indent: ["error", 4],
        },
    },
];
