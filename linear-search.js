function linearSearch(array, searchTerm) {
	for (let i = 0; i < array.length; i++) {
		if(array[i]==searchTerm){
			return i
		}
	}
}

module.exports = linearSearch;
