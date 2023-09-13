function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
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

bubbleSort([23,234,345,45,476])
module.exports = bubbleSort;
