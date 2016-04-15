// input matrix of connectivity
var demo = [
    [0, 2, 1],
    [1, 0, 1],
    [2, 1, 0]
];
// method of logging an array
function arrLog(arr) {
    for (var i = 0; i < arr.length; i++) {
        var line = "";
        if (arr[0].length) {
	        for (var j = 0; j < arr[i].length; j++) {
	            line += arr[i][j] + " ";
	        }
	    } else {
	    	line += arr[i];
	    }
        console.log(line);
    }
}

console.log("Given Matrix of Connectivity C:");
arrLog(GS$(demo).c);
console.log("Transformation to its Laplacian L:");
arrLog(GS$(demo).laplacian());
console.log("Solution as a vector of the laplacian potentials P:");
arrLog(GS$(demo).allLaplacPot());