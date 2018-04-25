// Corey Question

var roman     = "VI"; // 1992, test string #1.
var rnDict    = {}; 
var rnConv    = [];
var rnCopy    = [];
var rnCount   = 0;
var total     = 0;
var rnOne     = 0;
var rnTwo     = 0;
var rnThree   = 0;
var searching = true;

rnDict = {
	"M" : 1000,
	"D" : 500,
	"C" : 100,
	"L" : 50,
	"X" : 10,
	"V" : 5,
	"I" : 1
};

rnCopy = roman.slice().length; // So that when looping we do not change length of original array.
rnConv = roman.split(""); // Convert string into an array of singletons.

// 1. Make a full split array of roman numerals.
// 2. Pop first 3 entries into rnTemp.
// 3. DO MATH.
// 4. Add to total.
// 5. Pop next 3 into rnTemp.
// .
// .
// .
// N. So on until no more to pop.
while (searching != false) {
	rnCount++ // XXX
	
	// Push first three values of string.
	rnOne   = rnConv.shift();
	rnTwo   = rnConv.shift();
	rnThree = rnConv.shift();

	console.log("RNONE ::: "+ rnDict[rnOne]); // XXX
	console.log("RNTWO ::: "+ rnDict[rnTwo]); // XXX
	console.log("RNTHREE ::: "+ rnDict[rnThree]); // XXX
	console.log(total);

	if (rnOne == undefined) {
		searching = false;
		break; // On first occurrence of a singular value
	} else if (rnTwo == undefined) {
		total = total + rnDict[rnOne];
	} else if ((rnThree == undefined) && (rnDict[rnTwo] >= rnDict[rnOne])) {
		total = total + rnDict[rnTwo] - rnDict[rnOne];
		break;
	} else if ((rnThree == undefined) && (rnDict[rnTwo] < rnDict[rnOne])) {
		total = total + rnDict[rnOne] + rnDict[rnTwo];
		break;
	} // For when shift encounters non-existant values.

	if ((rnDict[rnThree] > rnDict[rnTwo]) && (rnDict[rnOne] > rnDict[rnTwo]) && (rnDict[rnOne] >= rnDict[rnThree])) {
		total = total + rnDict[rnThree] - rnDict[rnTwo] + rnDict[rnOne];
	} // XIV large small middle || + - +

	if ((rnDict[rnTwo] > rnDict[rnThree]) && (rnDict[rnTwo] > rnDict[rnOne])) {
		total = total + rnDict[rnTwo] - rnDict[rnOne] + rnDict[rnThree];
	} // IXI small large small  || - + +

	if ((rnDict[rnOne] === rnDict[rnTwo]) && (rnDict[rnTwo] === rnDict[rnThree])) {
		total = total + rnDict[rnOne] + rnDict[rnTwo] + rnDict[rnThree];
	} // III small small small  || + + +

	if ((rnDict[rnOne] == rnDict[rnTwo]) && (rnDict[rnOne] < rnDict[rnThree])){
		total = total + rnDict[rnThree] - rnDict[rnTwo] - rnDict[rnOne]; 
	} // IIV small small large  || - - +

	if ((rnDict[rnOne] > rnDict[rnTwo]) && (rnDict[rnOne] > rnDict[rnThree])) {
		total = total + rnDict[rnThree] + rnDict[rnTwo] + rnDict[rnOne];
	} // VII large small small  || + + +

	console.log("RNONE ::: "+ rnDict[rnOne]); // XXX
	console.log("RNTWO ::: "+ rnDict[rnTwo]); // XXX
	console.log("RNTHREE ::: "+ rnDict[rnThree]); // XXX
	console.log(total);
}

console.log(total);