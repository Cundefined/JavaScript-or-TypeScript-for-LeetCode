function intersection(nums1: number[], nums2: number[]): number[] {
    if (nums1.length === 0 && nums2.length === 0) {
        return [];
    }

    const resultSet: Set<number> = new Set();

    const nums2Set: Set<number> = new Set(nums2);

    for (let i: number = 0; i < nums1.length; i++) {
        if (nums2Set.has(nums1[i])) {
            resultSet.add(nums1[i])
        }
    }

    return Array.from(resultSet);
};