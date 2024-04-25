import {masodfokuEgyenletMegoldasa} from "./main.js";

export function masodfokuEgyenletMegoldasaTeszt(){
    const tesztLista = [
        {
            a: 0,
            b: 0,
            c: 0,
            vartX1: "Nincs megoldása az egyenletnek",
            vartX2: "Nincs megoldása az egyenletnek"
        },
        {
            a: 1,
            b: 0,
            c: 0,
            vartX1: 0,
            vartX2: "nincs"
        },
        {
            a: 0,
            b: 1,
            c: 0,
            vartX1: "Nincs megoldás, mert a diszkrimináns <=0",
            vartX2: "Nincs megoldás, mert a diszkrimináns <=0"
        },
        {
            a: 0,
            b: 0,
            c: 1,
            vartX1: "Nincs megoldás, mert a diszkrimináns <=0",
            vartX2: "Nincs megoldás, mert a diszkrimináns <=0"
        },
        {
            a: 20,
            b: 10,
            c: 1,
            vartX1: "Nincs megoldás, mert a diszkrimináns <=0",
            vartX2: "Nincs megoldás, mert a diszkrimináns <=0"
        },
        
    ]
    tesztLista.forEach(function(teszt, index) {
        const eredmeny = masodfokuEgyenletMegoldasa(teszt.a, teszt.b, teszt.c);
        console.assert(
            teszt.vartX1 === eredmeny.X1 &&
            teszt.vartX2 === eredmeny.X2,
            `HIBA! a/az ${index + 1}. tesztesetnél`)
        /* 
        
        
        ,"%o",
        `a: ${masodfokuEgyenletMegoldasaTeszt.a} b: ${masodfokuEgyenletMegoldasaTeszt.b} c: ${masodfokuEgyenletMegoldasaTeszt.c} 
        vartX1: ${masodfokuEgyenletMegoldasaTeszt.vartX1} vartX2: ${masodfokuEgyenletMegoldasaTeszt.vartX2} 
        kapottX1: ${masodfokuEgyenletMegoldasa(x1)} kapottX2:  ${masodfokuEgyenletMegoldasa(x2)}`,`HIBA! a/az ${index +1}. tesztesetnél`) */
    })

}