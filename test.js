

var EMPTY = 'empty';
var WHITE = 'white';
var BLACK = 'black';

function makeInitialGameBoard() {
  var board = {};

  for (var x = 0; x < N; x++)
    for (var y = 0; y < N; y++)
      board[[x, y]] = EMPTY;

  var x2 = x >> 1;
  var y2 = y >> 1;
  board[[x2 - 1, y2 - 1]] = WHITE;
  board[[x2 - 1, y2 - 0]] = BLACK;
  board[[x2 - 0, y2 - 1]] = BLACK;
  board[[x2 - 0, y2 - 0]] = WHITE;

  return board;
}


function drawGameBoard(board, player) {
  var ss = [];

  ss.push('<table>');
  for (var y = -1; y < 5; y++) {
    ss.push('<tr>');
    for (var x = -1; x < N; x++) {
      if (0 <= y && 0 <= x) {
        ss.push('<td class="');
        ss.push('cell');
        ss.push(' ');
        ss.push(board[[x, y]]);
        ss.push('">');
        ss.push('<span class="disc"></span>');
        ss.push('</td>');
      } else if (0 <= x && y == -1) {
        ss.push('<th>' + 'abcdefgh'[x] + '</th>');
      } else if (x == -1 && 0 <= y) {
        ss.push('<th>' + '12345678'[y] + '</th>');
      } else /* if (x == -1 && y == -1) */ {
        ss.push('<th></th>');
      }
    }
    ss.push('</tr>');
  }
  ss.push('</table>');

  $('#game-board').html(ss.join(''));
  $('#current-player-name').text(player);
}