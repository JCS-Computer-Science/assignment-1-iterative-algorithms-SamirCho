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

console.log(bubbleSort([14,56,-1,0,24,456,67,768,7,8,6,76,76,6,5,67,65,5,6,56,7,5,67,56,2]))
module.exports = bubbleSort;
