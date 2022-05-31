function data(n){
    // Define vars
    let x = n * n;
    let y = x * n;
    let p;
    let np = true;
    // check the %2
    if(x%2===0){
        // Then tue
        p = true;
    }
    else{
        // Then false
        p = false;
    }
    // Check prime
    for(let i=2;i<n;i++){
        // Verify if the number is n%i === 0
        if(n%i===0)
            np = false; // Then false
    }
    // Print
    console.log(x);
    console.log(y);
    console.log(p);
    console.log(np);
}

data(4);