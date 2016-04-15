;
(function(global, math) {
	"use strict";
    /**
     * new object
     * @param {Array} c connectivity matrix
     */
    var GBLSolvr = function(c) {
        return new GBLSolvr.init(c);
    };
    /**
     * method creating a 2D array
     * @param  {Number} length length of a dimension
     * @return {Array}         result
     */
    var createArray = function(length) {
        var arr = new Array(length || 0),
            i = length;
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while (i--) arr[i] = createArray.apply(this, args);
        }
        /*for (var k = 0; k < length; k++) {
        	for (var j = 0; j < length; j++) {
        		arr[k][j] = 0;
        	}
        }*/
        return arr;
    };
    /**
     * prototype honding methods
     * @type {Object}
     */
    GBLSolvr.prototype = {
        /**
         * validation of the incoming matrix
         */
        validate: function() {
            if (!Array.isArray(this.c)) {
                throw "error: needed an array!";
            }
            if ((this.c[0].length < 2) || (this.c.length !== this.c[0].length)) {
                throw "error: needed a matrix of size NxN, N>1!";
            }
            for (var i = 0; i < this.c.length; i++) {
                if (this.c[i][i] !== 0) {
                    throw "error: all the intersects should be zeros!";
                }
            }
        },
        /**
         * mothod calculating a node connectivity
         * @param  {Number} node node number
         * @return {Number}      result
         */
        nodeConnect: function(node) {
            var buffer = 0;
            for (var k = 0; k < this.c.length; k++) {
                buffer += this.c[k][node];
            }
            return buffer;
        },
        /**
         * transform to the laplacian
         * @return {Object} [description]
         */
        laplacian: function() {
            var N = this.c.length;
            var l = createArray(N, N);
            for (var i = 0; i < N; i++) {
                for (var j = 0; j < N; j++) {
                    if (i == j) {
                        l[i][j] = l[i][j] || 0 + this.nodeConnect(j);
                    } else {
                        l[i][j] = l[i][j] || 0 - this.c[i][j];
                    }
                }
            }
            return l;
        },
        /**
         * calculate the laplacian potential
         * @param  {Number} index number of a potential
         * @return {Number}       result
         */
        laplacPot: function(index) {
        	var N = this.c.length;
            var l = this.laplacian();
            l.splice(index, 1);
            for (var i = 0; i < l.length; i++) {
                l[i].splice(index, 1);
            }
            var lm = math.matrix(l);
            return math.det(lm);
        },
        /**
         * calculate all the laplacian potentials
         * @return {Array} array with laplacian potentials
         */
        allLaplacPot: function() {
            var array = [];
            for (var i = 0; i < this.c.length; i++) {
                array.push(this.laplacPot(i));
            }
            return array;
        }
    };
    /**
     * actual object is created here with no need to type "new"
     * @param  {Array} c connectivity matrix
     */
    GBLSolvr.init = function(c) {
        var self = this;
        self.c = c;
        self.validate();
    };
    /**
     * prototype chain
     */
    GBLSolvr.init.prototype = GBLSolvr.prototype;
    /**
     * attach our GBLSolvr to the global object and give it a shorthand 'GS$'
     */
    global.GBLSolvr = global.GS$ = GBLSolvr;
})(window, math);