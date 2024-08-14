function sumAll(a, b) {
    let res = 0;
    for (i = a; i <= b; ++i) {
        res += i;
    }

    return res;
}

// juego con la sintaxis nomás
const confirmar = (a, b) => ((b * (b + 1)) / 2) - (((a - 1) * (a)) / 2);

const a = 10;
const b = 100;
console.log(sumAll(a, b));

console.log(confirmar(a, b));
