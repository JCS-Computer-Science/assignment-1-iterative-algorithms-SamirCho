function insertionSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let a = 0; a < array.length; a++) {
			if(array[i]<array[a]){
				let temp=array[i]
				array[i]=array[a]
				array[a]=temp
			}
		}
	}
	return array;
}

module.exports = insertionSort;