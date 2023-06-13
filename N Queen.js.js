function solveNQueens(n) {
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    const solutions = [];
  
    backtrack(0);
  
    return solutions;
  
    function backtrack(row) {
      if (row === n) {
        // Found a valid solution
        const solution = board.map(row => row.join(''));
        solutions.push(solution);
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isValid(row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    function isValid(row, col) {
      // Check if there is a queen in the same column
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
          return false;
        }
      }
  
      // Check if there is a queen in the same diagonal (top-left to bottom-right)
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }
  
      // Check if there is a queen in the same diagonal (top-right to bottom-left)
      for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }
  
      return true;
    }
  }
  
  // Example usage
  const n = 5;
  const solutions = solveNQueens(n);
  console.log(`Number of solutions for ${n}-Queens: ${solutions.length}`);
  solutions.forEach(solution => {
    console.log('---');
    solution.forEach(row => console.log(row));
  });
  