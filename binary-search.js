function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let start=0
	let end=array.length-1
	let mid=parseInt((start+end)/2)
}

binarySearch([0,1,2,3,4,5,6,7,8,9],3)
module.exports = binarySearch;