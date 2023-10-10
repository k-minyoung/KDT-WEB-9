 //reduce : 배열의 모든 요소를 더할때 사용, 하나의 결과를 반환
   // a.reduce(( acc, curr ) => acc + curr , 0)
   function sum2(...a:number[]) :number {
    return a.reduce((acc, curr) => acc + curr, 0)
}
console.log(sum2(1,2,3,4,10))