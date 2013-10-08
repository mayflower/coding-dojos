describe('Tennis1', function() {
    var allScores = [
        [0, 0, "Love-All"],
        [1, 1, "Fifteen-All"],
        [2, 2, "Thirty-All"],
        [3, 3, "Deuce"],
        [4, 4, "Deuce"],

        [1, 0, "Fifteen-Love"],
        [0, 1, "Love-Fifteen"],
        [2, 0, "Thirty-Love"],
        [0, 2, "Love-Thirty"],
        [3, 0, "Forty-Love"],
        [0, 3, "Love-Forty"],
        [4, 0, "Win for player1"],
        [0, 4, "Win for player2"],

        [2, 1, "Thirty-Fifteen"],
        [1, 2, "Fifteen-Thirty"],
        [3, 1, "Forty-Fifteen"],
        [1, 3, "Fifteen-Forty"],
        [4, 1, "Win for player1"],
        [1, 4, "Win for player2"],

        [3, 2, "Forty-Thirty"],
        [2, 3, "Thirty-Forty"],
        [4, 2, "Win for player1"],
        [2, 4, "Win for player2"],

        [4, 3, "Advantage player1"],
        [3, 4, "Advantage player2"],
        [5, 4, "Advantage player1"],
        [4, 5, "Advantage player2"],
        [15, 14, "Advantage player1"],
        [14, 15, "Advantage player2"],

        [6, 4, "Win for player1"],
        [4, 6, "Win for player2"],
        [16, 14, "Win for player1"],
        [14, 16, "Win for player2"]
    ];

    var checkScore = function(TennisGame, player1Score, player2Score, expectedScore) {
        var highestScore = Math.max(player1Score, player2Score);
        var game;
        var result;
        var i;

        try {
            game = new TennisGame("player1", "player2");
            for (i = 0; i < highestScore; i++) {
                if (i < player1Score) {
                    game.wonPoint("player1");
                }
                if (i < player2Score) {
                    game.wonPoint("player2");
                }
            }
            result = game.getScore();
            expect(result).toEqual(expectedScore);
        } catch (ex) {
            console.log(ex);
        }
    }

    var TennisGame = TennisGame1;

    for (i = 0; i < allScores.length; i += 1) {
        bindFunc = checkScore.bind(this, TennisGame, allScores[i][0],allScores[i][1],allScores[i][2]);
        it("should return " + allScores[i][2] + " if " + allScores[i][0] + " and " + allScores[i][1] +" is provided!", bindFunc);
    }
});