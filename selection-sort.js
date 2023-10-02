function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let smallest={value:array[i],index:i}
		for (let a = i; a < array.length; a++) {
			if(smallest.value>array[a]){
				smallest.value=array[a]
				smallest.index=a
			}
		}
	[array[i],array[smallest.index]]=[array[smallest.index],array[i]]
	}
	return array
}

module.exports = selectionSort;