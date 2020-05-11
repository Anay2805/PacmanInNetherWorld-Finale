class Box {
  constructor(x, y, width, height) {

    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    
  }
  display(){
    strokeWeight(7);
    noFill();
    this.sprite = createSprite(this.posX, this.posY, this.width, this.height);
    this.sprite.shapeColor = "blue"
  }
};
