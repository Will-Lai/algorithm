//Selection sort

function findSmallest(arr){    // Step 1: find the smallest item first
    var smallest = arr[0] ;    //let 1st item in the array be the smallest
    var smallest_index = 0;    //

    for (var i = 1; i < arr.length; i++){
        if (arr[i] < smallest ) {
            smallest = arr[i];
            smallest_index = i;
        }
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.append[newArr, 'smallest'];
        }
    }
    // return smallest_index;
    return newArr;
}

let arr = [2,4,5,7,8,1,6];
console.log(findSmallest(arr));