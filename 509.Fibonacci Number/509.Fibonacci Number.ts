function fib(N: number): number {
    if (N <= 1) {
        return N;
    }

    const memo: number[] = [];

    memo[0] = 0;
    memo[1] = 1;

    function helper(n: number): number {
        if (memo[n] !== undefined) {
            return memo[n];
        }

        memo[n] = helper(n - 1) + helper(n - 2);

        return memo[n];
    }

    const result = helper(N);

    return result;
}
