export function initialBoard() {
    let newBoard = []
    for (let x = 0; x < 7; x++) {
        let newColumn =  []
        for ( let y = 0; y < 6; y++) {
            newColumn.push(0)
        }
        newBoard.push(newColumn)
    }
    return newBoard
}