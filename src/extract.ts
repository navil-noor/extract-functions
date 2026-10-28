export function findFunctions(source: string): { name: string; line: number }[] {
    const regex = /function\s+(\w+)/g
    const matches = [...source.matchAll(regex)]

    const results: { name: string; line: number }[] = []
    for (const m of matches) {
        const name = m[1]
        if (!name) continue
        const line = lineOf(source, m.index)
        results.push({ name, line })
    }
    return results
}

export function lineOf(source: string, index: number): number {
    return source.slice(0, index).split("\n").length
}