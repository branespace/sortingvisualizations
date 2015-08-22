var INSERTIONSORTER = function() {
    "use strict";

    var sortObj = {};

    sortObj.sorter = function* sorter(sortArr){
        var j;
        var tempSpace;
        for(var i = 1; i < sortArr.length; i += 1){
            j = i;
            while (j > 0 && sortArr[j - 1] > sortArr[j]){
                tempSpace = sortArr[j - 1];
                sortArr[j - 1] = sortArr[j];
                sortArr[j] = tempSpace;
                j -= 1;
                yield {target:j};
            }
        }
        return false;
    };

    return sortObj;
}();

