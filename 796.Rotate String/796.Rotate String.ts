function rotateString(A: string, B: string): boolean {
    if (A.length !== B.length) {
        return false;
    }

    const periodicStr: string = A + A;

    return periodicStr.includes(B);
};