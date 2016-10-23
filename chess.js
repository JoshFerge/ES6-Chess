'use strict'
const squareSize = '50'

class Square {
    constructor(column,row) {
        this.row = row;
        this.column = column
        this.element = document.createElement('div');
        this.element.style.display = 'inline-block';
        this.element.style.width = squareSize+'px';
        this.element.style.height = squareSize+'px';
        this.element.style.backgroundColor = 'black';
    }
}

//for (var i = 65; i <= 90; i++) {
//    $('#select_id_or_class').append('<option>' + String.fromCharCode(i)

window.onload = function () {
    let board = document.createElement('div');

    board.style.width = '400px';
    board.style.height = '400px';

    board.style.backgroundColor = '#f4f4f4';

    document.body.appendChild(board);

    for (let i = 0; i <= 8; i++) {
        let square = new Square('A',1)
    }

    board.appendChild(square.element)

}
