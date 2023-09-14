function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	const count=array.length
	for (let i = 0; i < count; i++) {
		for (let a = 0; a < count; a++) {
			if(array[i]<array[a]){
				let temp=array[i]
				array[i]=array[a]
				array[a]=temp
				break
			}
		}
	}
	console.log(array)
	return array;
}
insertionSort([5,3,445,1])
module.exports = insertionSort;