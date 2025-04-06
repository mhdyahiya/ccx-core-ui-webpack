# Contributing to CCX Core UI

Thank you for your interest in contributing to CCX Core UI! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project. We strive to maintain a welcoming and inclusive environment for all.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/ccx-core-ui-webpack.git`
3. Create a new branch for your changes: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes
6. Commit your changes: `git commit -m "Add your meaningful commit message"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a pull request

## Development Guidelines

### Code Style

- Follow the project's code style defined in `.eslintrc.js` and `.prettierrc`
- Use SCSS for styling (avoid inline styles)
- Run `npm run lint` and `npm run format` before submitting PRs

### Component Development

When creating new components:

1. Create a new folder under `src/components/` with your component name in PascalCase
2. Include the component's .tsx file and .scss file
3. Add comprehensive test coverage
4. Make sure to export the component in the appropriate module federation configuration

Example component structure:
```
src/components/
└── MyNewComponent/
    ├── index.ts
    ├── MyNewComponent.tsx
    ├── MyNewComponent.scss
    └── MyNewComponent.test.tsx
```

### Testing

- Write tests for all new features
- Maintain or improve test coverage
- Run tests before submitting: `npm test`

### Documentation

- Update the README.md with any new features or changes
- Document all new components, utilities, and exported modules
- Include examples where appropriate

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the version in package.json following semantic versioning
3. The PR should be reviewed by at least one maintainer
4. After approval, a maintainer will merge your PR

## Feature Requests and Bug Reports

- Use the GitHub issue templates for bug reports and feature requests
- Provide as much information as possible
- For bugs, include steps to reproduce, expected behavior, and actual behavior

## Adding New Module Federation Exports

When exposing new components or utilities:

1. Add the new export in `configs/shared/webpack.config.js`
2. Document the new export in the README.md
3. Add appropriate tests

## License

By contributing to CCX Core UI, you agree that your contributions will be licensed under the same [ISC License](./LICENSE) that covers the project.