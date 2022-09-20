function moveElementToEnd(array, toMove) 
  {
    let i = 0, j = array.length - 1
    while(i < j )
      {
        while(i < j && array[j] == toMove)
          j--
        if(array[i] == toMove)
          swap(array, i, j)
        i++
      }
    return array
  }
function swap(arr, i, j)
  {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp 
    return arr
  }

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
