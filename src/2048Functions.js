export function move(board, dir) {
    let moved = false;
    if (dir === "down") {
      while (canMove(board, dir)) {
        for (let i = 3; i >= 0; i--) {
          for (let j = 0; j <= 3; j++) {
            if (i + 1 <= 3 && board[i][j] != 0) {
              if (board[i + 1][j] === 0) {
                board[i + 1][j] = board[i][j];
                board[i][j] = 0;
                moved = true;
              }
              if (board[i + 1][j] === board[i][j]) {
                board[i + 1][j] = board[i + 1][j] * 2;
                board[i][j] = 0;
                moved = true;
              }
            }
          }
        }
      }
    }

    if (dir === "up") {
      while (canMove(board, dir)) {
        for (let i = 0; i <= 3; i++) {
          for (let j = 0; j <= 3; j++) {
            if (i - 1 >= 0 && board[i][j] != 0) {
              if (board[i - 1][j] === 0) {
                board[i - 1][j] = board[i][j];
                board[i][j] = 0;
                moved = true;
              }
              if (board[i - 1][j] === board[i][j]) {
                board[i - 1][j] = board[i - 1][j] * 2;
                board[i][j] = 0;
                moved = true;
              }
            }
          }
        }
      }
    }

    if (dir === "right") {
      while (canMove(board, dir)) {
        for (let j = 3; j >= 0; j--) {
          for (let i = 0; i <= 3; i++) {
            if (j + 1 <= 3 && board[i][j] != 0) {
              if (board[i][j + 1] === 0) {
                board[i][j + 1] = board[i][j];
                board[i][j] = 0;
                moved = true;
              }
              if (board[i][j + 1] === board[i][j]) {
                board[i][j + 1] = board[i][j + 1] * 2;
                board[i][j] = 0;
                moved = true;
              }
            }
          }
        }
      }
    }
    if (dir === "left") {
      while (canMove(board, dir)) {
        for (let j = 0; j <= 3; j++) {
          for (let i = 0; i <= 3; i++) {
            if (j - 1 >= 0 && board[i][j] != 0) {
              if (board[i][j - 1] === 0) {
                board[i][j - 1] = board[i][j];
                board[i][j] = 0;
                moved = true;
              }
              if (board[i][j - 1] === board[i][j]) {
                board[i][j - 1] = board[i][j - 1] * 2;
                board[i][j] = 0;
                moved = true;
              }
            }
          }
        }
      }
    }
    if (moved === true) {
      spawn(board);
    }
    if (!hasMoves(board)) {
      console.log("game over");
    }
    return moved;
  }

  export function canMove(board, dir) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (dir === "down") {
          if (board[i][j] != 0 && i + 1 <= 3) {
            if (board[i + 1][j] === 0 || board[i + 1][j] === board[i][j]) {
              console.log("can move down");
              return true;
            }
          }
        }
        //check right
        if (dir === "right") {
          if (board[i][j] != 0 && j + 1 <= 3) {
            if (board[i][j + 1] === 0 || board[i][j + 1] === board[i][j]) {
              console.log("can move right");
              return true;
            }
          }
        }
        //check up
        if (dir === "up") {
          if (board[i][j] != 0 && i - 1 >= 0) {
            if (board[i - 1][j] === 0 || board[i - 1][j] === board[i][j]) {
              console.log("can move up");
              return true;
            }
          }
        }
        //check left
        if (dir === "left") {
          if (board[i][j] != 0 && j - 1 >= 0) {
            if (board[i][j - 1] === 0 || board[i][j - 1] === board[i][j]) {
              console.log("can move left");
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  export function hasMoves(board) {
    if (
      canMove(board, "up") ||
      canMove(board, "down") ||
      canMove(board, "left") ||
      canMove(board, "right")
    ) {
      return true;
    } else {
      return false;
    }
  }

  export function spawn(board) {
    let randRow = Math.floor(Math.random() * 4);
    let randCol = Math.floor(Math.random() * 4);
    let placed = false;

    while (placed === false) {
      if (board[randRow][randCol] === 0) {
        placed = true;
        if ((randRow + randCol) % 2 === 0) {
          board[randRow][randCol] = 2;
        } else {
          board[randRow][randCol] = 4;
        }
      } else {
        if (hasMoves) {
          randRow = Math.floor(Math.random() * 4);
          randCol = Math.floor(Math.random() * 4);
        } else {
          placed = true;
        }
      }
    }
  }