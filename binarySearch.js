function binarySearch(arr, item){
    let low = 0,                // lowest item
        high = arr.length - 1;  //highest item

    while(low <= high){         //While loop
        let mid = Math.floor((low + (high + 1))/2) ; //middle item;
        if(arr[mid] === item){          //If middle item is equal to the search item, result is found;
            return mid;
        }
        else if (arr[mid] > item){      //if the search item is less than the middle item; set the item just below the middle item (mid - 1) as the highest item
            high = mid - 1;
        }
        else{                           //if the search item is higher than the middle item, set the item just above the middle item (mid + 1) as the lowest item
            low = mid + 1;
        }
    }
    return false ; // element not found
}

//test to find 2 in the array;
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 2));
