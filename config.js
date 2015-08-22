var CONFIG = function(){
    "use strict";

    var confObj = {}

    confObj.arraySize = 50;

    confObj.scramble = UTILITY.scramble;
    confObj.sorter = SELECTIONSORT.sorter;

    confObj.minimumPadding = 20;
    confObj.percentRectPadding = 0.20;

    confObj.timeStep = 100;
    confObj.rectColor = 'white';
    confObj.targetColor = 'red';
    confObj.importantColor = 'blue';

    return confObj;
}();