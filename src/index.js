module.exports = function towelSort(matrix) {
    if (matrix == undefined) return [];

    const matrix2 = matrix.map((el, i) =>
        i % 2 !== 0 ? el.reverse() : el
    );

    return [].concat(...matrix2);
};
