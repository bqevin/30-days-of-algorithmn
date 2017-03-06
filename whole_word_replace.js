
var replace  = function(sentence, search_word, new_word){
	var this.sentence = sentence;
	var this.search_word  search_word;
	var this.new_word = new_word;
	var array[] = sentence.split(" ");
	var new_sentence[];
	for (var i = 0; i < array.length; i++) {
		if (array[i] == search_word) {
			array[i] == $new_word;
			 new_sentence.push(array[i]);
			 console.log(Array.prototype.join(new_sentence));
			return Array.prototype.join(new_sentence);
		};	
	};

};

var neno = "This film is the best film of the year";
replace(neno, "film", "movie");