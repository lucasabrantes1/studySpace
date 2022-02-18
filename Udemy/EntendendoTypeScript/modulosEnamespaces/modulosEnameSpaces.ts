//!!Introdução a Namespaces  --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// namespace Areas {
//     const PI = 3.14

// export function circunferencia(raio: number): number{
//     return PI * Math.pow(raio, 2)
// }

// export function retangulo(base: number, altura: number): number{
//     return base * altura
// }
// }


// const PI = 2.99

// console.log(Areas.circunferencia(10))
// console.log(Areas.retangulo(10, 20))

// console.log(PI)


//!!Introdução a Namespaces  --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//??Namespaces Aninhados  --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

namespace Geometria {
        export namespace Area {
            const PI = 3.14

        export function circunferencia(raio: number): number{
            return PI * Math.pow(raio, 2)
        }

        export function retangulo(base: number, altura: number): number{
            return base * altura
        }
    }
}


// const PI = 2.99

// console.log(Geometria.Area.circunferencia(10))
// console.log(Geometria.Area.retangulo(10, 20))

// console.log(PI)

//??Namespaces Aninhados  --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Módulos  --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*Quando se trabalha com módulos geralmente eles não são interpretados pelo browser, para isso usa
se a bliblioteca systemjs*/


//!!Módulos  --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---