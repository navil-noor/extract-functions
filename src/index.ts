import { readFileSync } from 'node:fs'
import { findFunctions } from './extract.js'

if (!process.argv[2]) {
    console.log("no argv")
    process.exit(1)
}

try {
    const data = readFileSync(process.argv[2], 'utf8')
    const results = findFunctions(data)

    if (results.length === 0) {
        console.log("No functions found!")
    } else {
        console.log(`Found ${results.length} function(s):`)
        for (const r of results) {
            console.log(` -${r.name} (line ${r.line})`)
        }
    }
} catch (error) {
    console.error("error:", error instanceof Error ? error.message: error)
    process.exit(1)
}