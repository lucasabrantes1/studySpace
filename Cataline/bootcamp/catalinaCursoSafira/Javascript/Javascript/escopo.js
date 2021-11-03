  'use strict'
  //escopo global

function showCar(){
    //escopo local
    var car = 'bmw'
    console.log(car)
}

    //escopo global - tudo onde nãp há chaves
showCar.log(car)

    //escopo global