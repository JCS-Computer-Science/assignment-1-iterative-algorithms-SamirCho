function binarySearch(array, searchTerm) {
	let start=0
	let end=array.length-1
	while(start<=end){
		let mid=parseInt((start+end)/2)
		if(array[mid]==searchTerm){
			return mid
		}
		if(array[mid]>searchTerm){
			end=mid-1
		}else{
			start=mid+1
		}
	}
}

module.exports = binarySearch;