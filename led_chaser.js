
var pinMode = [2,3,4,5,6,7];

console.log("Starting level pin: "+2+"\n");

for(i=2; i<=pinMode.length+1; i++){

	console.log("pin: "+i+" => High");

	if (i == 7) {
		i=2;
		console.log("pin back to : "+i+" => High"+"\n");
		console.log("Pins Looped: {"+pinMode+"}");
		console.log("\n\n");
		break;
	}
}


