const chess_url = 'https://lichess.org/api/user/briares';
let chessPuzzles = 0;
let chessRating = 0;
let chessPlaytime = 0; // in seconds

fetch(chess_url)
  .then(function(data) {
 	data.text().then(function(text) {
 		let newText = JSON.parse(text);
 		console.log(newText);
 		chessPuzzles = newText.perfs.puzzle.games;
 		chessRating = newText.perfs.puzzle.rating;
 		chessClassical = newText.perfs.classical.games;
 		chessClassicalRating = newText.perfs.classical.rating;
		document.querySelector("#chessPuzzles").innerHTML += chessPuzzles;
		document.querySelector("#chessPuzzleRating").innerHTML += chessRating;
		document.querySelector("#chessClassical").innerHTML += chessClassical;
		document.querySelector("#chessClassicalRating").innerHTML += chessClassicalRating;

    });;
  })
  .catch(function(error) {
    console.log(error);
  });   
