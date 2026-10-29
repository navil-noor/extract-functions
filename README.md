# extract-functions

A tiny CLI that finds function declarations in a JavaScript file using regex.

> ⚠️ **Learning project.** This was my first solo CLI, built to understand why regex fails at code parsing. It works, and it has known limitations. For the real version — a Tree-sitter–based code intelligence engine, **currently in active development** — see [voltroniq-arch](https://github.com/voltroniq/voltroniq-arch).

## Usage

    npm install
    npx tsx src/index.ts <file.js>

Example output:

    Found 3 function(s):
     -handleUser (line 1)
     -notARealFunction (line 12)
     -alsoNotReal (line 13)

## Known limitations

This uses a regex, not a parser. It has no idea what's inside a string or a comment. The example above shows the bug clearly:

- `handleUser` is a real function (correct)
- `notARealFunction` is inside a string (incorrect — regex can't tell)
- `alsoNotReal` is inside a comment (incorrect — same reason)

It also misses arrow functions and class methods, because they don't start with the keyword `function`.

This is the reason real code-analysis tools use a parser (Tree-sitter) instead of regex.

## Built with

- TypeScript
- tsx (run TS without a build step)
- vitest (tests)

## License

MIT
