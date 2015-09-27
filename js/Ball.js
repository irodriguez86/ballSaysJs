function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = Ball.getSprite(this.x, this.y, 0xFF0000, 1, 30);
}

Ball.getSprite = function(x, y, color, alpha, size) {
    var graphics = BS.game.add.graphics(0, 0),
        sprite = BS.game.add.sprite(x, y);

    BS.game.physics.enable(sprite, Phaser.Physics.ARCADE);

    graphics.beginFill(color, alpha);
    graphics.drawCircle(0, 0, size);

    //sprite.body.setCircle(graphics._radius, 0, 0);


    sprite.addChild(graphics);
    return sprite;
};

