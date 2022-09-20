function isMonotonic(array) {
    return (
      array.join`` == [...array].sort((a,b) => a - b).join`` ||
      array.join`` == [...array].sort((a,b) => b - a).join`` 
    )
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  


  function isMonotonic(array) {
    return (array.every((v, i) => i === 0 || v <= array[i - 1]) || array.every((v, i) => i === 0 || v>= array[i - 1]))
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
    