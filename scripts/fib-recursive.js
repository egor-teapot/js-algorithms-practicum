const fibRec = (n) => {
    console.log(n)
    if (n <= 1) {return n}
    else {
    return fib(n-1) + fib(n-2)
    } 
}


