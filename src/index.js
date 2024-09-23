module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    return matrix.reduce((acc, row, index) => {
        if (index % 2 !== 0) {
            acc.push(...row.slice().reverse());
        } else {
            acc.push(...row);
        }
        return acc;
    }, []);
};
