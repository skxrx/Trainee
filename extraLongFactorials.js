const extraLongFactorials = n => {
    n = BigInt(n);
    return n === 0n ? 1n : n * extraLongFactorials(n - 1n);
};

function main() {
    const n = parseInt(readLine(), 10);
    const factorial = extraLongFactorials(n).toString()
    console.log(factorial);
}