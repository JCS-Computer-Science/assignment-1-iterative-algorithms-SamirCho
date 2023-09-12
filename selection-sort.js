function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	let tempArray=[]
	const count=array.length
	for (let i = 0; i < count; i++) {
		tempArray[i]=findSmallest(array).value
		array.splice(findSmallest(array).index,1)
	}
	return tempArray
}

function findSmallest(array){
	let smallest={value:array[0],index:0}
	for (let i = 0; i < array.length; i++) {
		if(smallest.value>array[i]){
			smallest.value=array[i]
			smallest.index=i
		}
	}
	return smallest
}

module.exports = selectionSort;
