for (a=1; a<= 7; a++) {

	for (b=1; b <=7; b++) {

		for (c=1; c <=7; c++) {

			//filters even numbers only
			if (a%2==0 && b%2==0 && c%2==0) {

				//Filter similarity
				if (a!=b && a!=c && b!=c ) {

					//filters sum to be 12
					if ((a+b+c) == 12) {
						console.log("a : "+a+" b: "+b+" c : "+c);
					}


				}
				
			}

		}

	}

}