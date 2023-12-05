class Tree {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.rows = 15; // Nombre de lignes pour le sapin
    }
  
    render(ctx) {
      for (let row = 0; row < this.rows; row++) {
        // Augmenter le nombre de caractères dans chaque ligne en descendant
        let charsInRow = 1 + 2 * row;
        let yOffset = this.y + row * ((this.height -250)/ this.rows);
  
        // Calculer le décalage horizontal pour centrer la ligne
        let xOffset = this.x + (this.width - charsInRow * (this.width / (2 * this.rows))) / 2;
  
        for (let i = 0; i < charsInRow; i++) {
          let charX = xOffset + i * (this.width / (2 * this.rows));
          let char = new Char(charX, yOffset, this.width / (2 * this.rows), this.height / this.rows, this.color);
          char.render(ctx);
        }
      }
      ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(this.x + this.width / 2.5, this.y + this.height - 210, this.width / 5, this.height / 5);
    }
  }
  
  class Char {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    zeroOr1() {
      return Math.floor(Math.random() * 2).toString();
    }
  
    render(ctx) {
        let isRed = Math.floor(Math.random()* 100);
        if(isRed < 5){
            this.color = 'red';
        }
      ctx.fillStyle = this.color;
      ctx.font = `${Math.floor(this.height * 0.8)}px monospace`;
      ctx.fillText(this.zeroOr1(), this.x, this.y + this.height * 0.8);
    }
  }
  
  // Créer et afficher le sapin
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const tree = new Tree(0, 0, canvas.width, canvas.height, 'green');
  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  tree.render(ctx);
    }, 150);