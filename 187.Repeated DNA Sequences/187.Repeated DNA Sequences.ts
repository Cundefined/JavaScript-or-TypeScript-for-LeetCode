function findRepeatedDnaSequences(s: string): string[] {
    let map: Map<string, number> = new Map();

    let result: string[] = [];

    for (let i: number = 0; i < s.length - 9; i++) {
        let sequences: string = s.substring(i, i + 10);

        if (!map.has(sequences)) {
            map.set(sequences, 1);
        } else if (map.get(sequences) === 1) {
            map.set(sequences, 2);
            result.push(sequences);
        }

    }

    return result;
};