export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // Type must be one of these values
        'type-enum': [
            2,
            'always',
            [
                'feat',     // New feature
                'fix',      // Bug fix
                'docs',     // Documentation only changes
                'style',    // Code style changes (formatting, etc)
                'refactor', // Code refactoring without changing functionality
                'perf',     // Performance improvements
                'test',     // Adding or updating tests
                'build',    // Build system or external dependencies
                'ci',       // CI configuration changes
                'chore',    // Maintenance tasks (updating dependencies, etc)
                'revert',   // Reverting a previous commit
            ],
        ],
        // Type is required
        'type-empty': [2, 'never'],
        // Type must be lowercase
        'type-case': [2, 'always', 'lower-case'],
        // Subject is required
        'subject-empty': [2, 'never'],
        // Subject max length
        'subject-max-length': [2, 'always', 100],
        // Header max length
        'header-max-length': [2, 'always', 100],
    },
};
