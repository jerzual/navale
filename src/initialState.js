export default {
    gameStarted: false,
    playerName: '',
    round: {
        number: 0,
        turn: ''
    },
    boards: {
        // stocke les tirs du joueurs, fait apparaitre les navires touchés
        playerBoard: {
            hits: {

            },
            ships: {

            }
        },
        //
        enemyBoard: {
            hits: {
                'A1': true,
                'B6': true
            },
            ships: {
                
            }
        }
    }
}