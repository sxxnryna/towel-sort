// You should implement your task here.

module.exports = function towelSort(matrix) {
    // If matrix is empty or not provided, return an empty array
    if (!matrix || matrix.length === 0) {
        return [];
    }

    return matrix.reduce((acc, row, index) => {
        // For odd-indexed rows, reverse the row using slice to avoid mutating original array
        if (index % 2 !== 0) {
            acc.push(...row.slice().reverse());
        } else {
            acc.push(...row);
        }
        return acc;
    }, []);
};

module.exports = towelSort;
