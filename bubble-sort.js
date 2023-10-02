function bubbleSort(array) {
   let isSorted=checkIfSorted(array)
    while(!isSorted){
        for (let i = 0; i < array.length; i++) {
            if(array[i]>array[i+1]){
                let temp=array[i]
                array[i]=array[i+1]
                array[i+1]=temp
            }
    }
    isSorted=checkIfSorted(array)
}
return array;
}

function checkIfSorted(sorted){
    let inOrder=true
    for (let i = 0; i < sorted.length; i++) {
        if(sorted[i]>sorted[i+1]){
            inOrder=false
            break
        }
    }
    return inOrder
}

module.exports = bubbleSort;
