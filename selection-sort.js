function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	for (let i = 0; i < array.length; i++) {
		let smallest={value:array[i],index:i}
		for (let a = i; a < array.length; a++) {
			if(smallest.value>array[a]){
				smallest.value=array[a]
				smallest.index=a
			}
		}
		let temp=array[i]
		array[i]=array[smallest.index]
		array[smallest.index]=temp
	}
	return array
}

module.exports = selectionSort;