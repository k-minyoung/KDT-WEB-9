function arrElement<T>(arr : T[], idx : number): T | boolean {
    if(arr.length -1 < idx ) {
        return false
    }
    
    return arr[idx]
}
console.log(arrElement<string>(['1','hi','hello'],3))