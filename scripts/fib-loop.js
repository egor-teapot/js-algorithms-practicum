const fibLoop = (n) => {
    let prev = 0, next = 1
    for(i=0; i < n; i++) {
        let temp = next
        next = prev + temp
        prev = temp
    }
    return prev
}