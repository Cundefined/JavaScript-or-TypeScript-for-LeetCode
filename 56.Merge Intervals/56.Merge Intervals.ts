function merge(intervals: number[][]): number[][] {

    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a: number[], b: number[]): number => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    })

    let mergingInterval: number[] = intervals[0];

    let result: number[][] = [];

    for (let i: number = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= mergingInterval[1]) {
            mergingInterval[1] = Math.max(mergingInterval[1], intervals[i][1]);

        } else {
            result.push(mergingInterval);
            mergingInterval = intervals[i];
        }
    }

    result.push(mergingInterval);
    return result;
};