# ES6 Promises Project Design

## Goals
- Provide a complete ES6 Promises project scaffold for Holberton checks.
- Implement tasks 0 through 6 exactly as specified in the project brief.
- Ensure Jest and ESLint compatibility with Node 20.x.

## Scope
- Create project configuration files: package.json, babel.config.js, .eslintrc.js.
- Create README.md and utils.js.
- Create task files 0-promise.js through 6-final-user.js.
- No async/await usage in implementations.

## Non-Goals
- No additional features beyond the tasks.
- No refactors outside the project folder.
- No custom build tooling beyond Jest/Babel/ESLint.

## Architecture
- Single small-module files per task with a single exported function.
- Task files are pure functions returning Promises.
- utils.js provides mocked Promise-returning functions used in task 3.

## File Plan
- package.json: scripts for test, lint, and dev; devDependencies for jest, babel, eslint.
- babel.config.js: preset-env targeting current Node.
- .eslintrc.js: basic env + eslint configuration for Node/Jest.
- utils.js: export uploadPhoto and createUser Promises with fixed response data.
- README.md: project overview, setup, and usage.
- 0-promise.js: returns a Promise object.
- 1-promise.js: resolves or rejects based on boolean.
- 2-then.js: attaches then/catch/finally with logging.
- 3-all.js: uses Promise.all to aggregate two utils promises.
- 4-user-promise.js: resolves with user object.
- 5-photo-reject.js: rejects with Error using filename.
- 6-final-user.js: uses Promise.allSettled, maps results to required shape.

## Data Flow
- Tasks 0, 1, 4, 5 return Promises directly.
- Task 2 consumes a Promise input and returns a transformed result.
- Task 3 consumes utils promises and logs concatenated output.
- Task 6 consumes promises and returns a normalized results array.

## Error Handling
- Promise rejections use Error instances with exact messages.
- Task 3 logs a fallback message on errors.
- Task 2 returns an empty Error on rejection but always logs on finally.

## Testing and Lint
- Jest used for unit tests (as provided by the checker).
- ESLint used for style verification; no async/await.

## Risks and Mitigations
- Risk: Mismatched config expected by checker.
  Mitigation: Use standard Holberton config patterns.
- Risk: Incorrect Promise chaining in task 2 or 6.
  Mitigation: Implement using then/catch/finally and Promise.allSettled.

## Acceptance Criteria
- npm run test passes.
- npm run lint passes.
- Example main files produce the expected console output.
