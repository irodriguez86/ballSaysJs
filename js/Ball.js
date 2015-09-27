function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = Ball.getSprite(this.x, this.y, 1, 30);
}

Ball.getSprite = function(x, y, alpha, size) {

    var sprite = BS.game.add.sprite(x, y, 'ball');

    sprite.pivot.x = sprite.width/2;
    sprite.pivot.y = sprite.height/2;
    sprite.inputEnabled = true;

    sprite.input.pixelPerfectOver = true;
    sprite.input.pixelPerfectClick = true;
    sprite.input.useHandCursor = true;

    BS.game.physics.arcade.enable([sprite]);

    sprite.body.collideWorldBounds = true;
    // use the bitmap data as the texture for the sprite
    return sprite;
};

