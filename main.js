import { tesztesetek } from "./tesztek.js";

console.log(masodfokuEgyenletMegoldasa(1,2,1))

// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

export function masodfokuEgyenletMegoldasa(a, b, c) {
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    const eredmeny = {
        X1: x1,
        X2: x2,
    };
    return eredmeny;
}

