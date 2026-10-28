# extract-functions

A tiny CLI that finds function declarations in a JavaScript file using regex.

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

This is the reason real code-analysis tools use a parser (Tree-sitter) instead of regex. See [the next version](link to come later) for that.

## Built with

- TypeScript
- tsx (run TS without a build step)
- vitest (tests)

## License

MIT