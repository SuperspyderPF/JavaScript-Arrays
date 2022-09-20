function longestPeak(array){
    let arr = array.slice()
    let max = 0
    for(let left = 0; left < arr.length; left++) {
       let right = left
       while(arr[right] < arr[right + 1]) {
          right++
       }
       const top = right
       while(right > left && arr[right] > arr[right + 1]) {
          right++
       }
       if(right > top && top > left) {
          max = Math.max(max, right - left + 1)
          left = right
          left--
       }
    }
    return max
 }
 
 // Do not edit the line below.
 exports.longestPeak = longestPeak;
 