exports.getMiddle=getMiddle;
function getMiddle(arr){
    if (arr.length % 2 === 0) {
        //even number of elements
        const middleLower = arr[arr.length/2 - 1];
        const middleUpper = arr[arr.length/2];
        const average = (middleLower + middleUpper)/2;
        return average;
    } else {
        return arr[(arr.length - 1)/2];
    }
}