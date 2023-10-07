class Game {
  constructor() {
    this.fields = Array.from(document.querySelectorAll('.field'));
    this.characters = [];
    this.init();
  }

  init() {
    this.createCharacter();
    setInterval(() => {
      this.moveCharacter();
    }, 1000);
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomField() {
    const emptyFields = this.fields.filter(field => !field.querySelector('.character'));
    const randomIndex = this.getRandomNumber(0, emptyFields.length - 1);
    return emptyFields[randomIndex];
  }

  createCharacter() {
    const character = document.createElement('img');
    let imgSrc = require("../img/goblin.png");
    character.src = imgSrc;
    character.className = 'character';

    const randomField = this.getRandomField();
    randomField.appendChild(character);

    this.characters.push(character);
  }

  moveCharacter() {
    const randomCharacter = this.characters[this.getRandomNumber(0, this.characters.length - 1)];
    const randomField = this.getRandomField();
    randomField.appendChild(randomCharacter);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
});
