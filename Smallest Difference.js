//brute force O(n^2)

function smallestDifference(arrayOne, arrayTwo) {
    var smallestDiff = Number.MAX_SAFE_INTEGER;
    var smallestDiffPair = [0, 0];
    for (var i = 0; i < arrayOne.length; i++) {
        {
            for (var j = 0; j < arrayTwo.length; j++) {
                {
                    var currentDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
                    if (currentDiff < smallestDiff) {
                        smallestDiff = currentDiff;
                        smallestDiffPair[0] = arrayOne[i];
                        smallestDiffPair[1] = arrayTwo[j];
                    }
                }
                ;
            }
        }
        ;
    }
    return smallestDiffPair;
};

//O(mlog(m) + nlog(n)) Sorting
function smallestDifference(arrayOne, arrayTwo)  {
    arrayOne.sort((a,b) => a - b)
    arrayTwo.sort((a,b) => a - b)
    
    
    var smallestDiff = Number.MAX_SAFE_INTEGER
    var smallestDiffPair = [0, 0];
    var i = 0;
    var j = 0;
    while ((i < arrayOne.length && j < arrayTwo.length)) {
        {
            var currentDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
            if (currentDiff < smallestDiff) {
                smallestDiff = currentDiff;
                smallestDiffPair[0] = arrayOne[i];
                smallestDiffPair[1] = arrayTwo[j];
            }
            if (arrayOne[i] < arrayTwo[j]) {
                i++;
            }
            else {
                j++;
            }
        }
    }
    ;
    return smallestDiffPair;
};