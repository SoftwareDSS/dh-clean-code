// Created by Antonio González, May 2022

function showNumberCharacteristics( integer ) {
    
    let square  = getNumberSquare( integer );
    let cube    = getNumberCube( integer );
    let isPair  = isNumberPair( integer );
    let isPrime = isPrimeNumber( integer );

    console.log( square );
    console.log( cube );
    console.log( isPair );
    console.log( isPrime );

}

function getNumberSquare( number ) {
    return number * number;
}

function getNumberCube( number ) {
    return number * number * number;
}

function isNumberPair( number ) {
    return ( number % 2 === 0 ) ? true : false;
}

function isPrimeNumber( number ) {

    let isPrime = true;

    for( let i = 2; i < number; i++ ){

        if( number % i === 0 ) {
            isPrime = false;
            break;
        }

    }

    return isPrime;

}

// # Important call the function using integer numbers.
showNumberCharacteristics( 4 );