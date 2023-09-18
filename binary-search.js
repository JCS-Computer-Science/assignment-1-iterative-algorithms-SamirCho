function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	if(array.length==1){
		return 0
	}
	let start=0
	let end=array.length-1
	let mid
	while(start-mid!=1){
		mid=Math.floor((start+end)/2)
		if(array[mid]==searchTerm){
			return mid
		}
		if(array[mid]>searchTerm){
			end=mid
		}else{
			start=mid
		}
	}
	if(array[mid]==searchTerm){
		return mid
	}else{
		return -1
	}
}
var my_array = [];
 
for (var i = 1; i <= 100; i++) {
   my_array.push(i);
}
console.log(binarySearch(my_array,57))

module.exports = binarySearch;