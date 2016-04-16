# graph-balance-laplacian-solver-js
## Description
Solution to the graph balance equation with help of laplacian potentials and js.
* author: alexsabdev <alexsabdev@gmail.com>
* version: v1.0.0
* link: https://github.com/alexsabdev/graph-balance-laplacian-solver-js
* dependencies: mathjs <https://github.com/josdejong/mathjs>
## Features
The v1.0.0 takes care of the closed balance equation only. Using given matrix of the graph nodes connectivity it peforms:
* transfomation of the connectivity matrix to its laplacian form;
* calculating a node connectivity;
* calculating laplacian potentials;
* calculating node flows.
## Installation
Download the library from the dist folder and link to you project. You can find either full or minified version there. Current version requires the mathjs library linked to your project. Publishing to the bower or the npm is subject to future development.
## Usage
Simply use a shorthand "GS$()", put a matrix between the paranthesis and call one of following methods:
```javascript
var matrix = ...; // matrix as a 2D array
GS$(matrix).laplacian(); // returns the laplacian of the given matrix as a 2D array
GS$(matrix).laplacPot(i) // returns the laplacian potential with index i which corresponds to the solution of this index
GS$(matrix).allLaplacPot() // returns array of the laplacian potentials / the equation solutions
GS$(matrix).nodeConnect(i) // returns the connectivity of the node with index i
GS$(matrix).flow(i) // returns the flow through the node with index i
GS$(matrix).allFlows() // returns array of the node flows
```javascript