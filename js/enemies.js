class Enemies {

    constructor(gameSize, playerPosition, playerSize) {

        this.gameSize = gameSize
        this.playerPosition = playerPosition
        this.playerSize = playerSize

        this.direction = undefined

        this.enemySize = {
            width: 150,
            height: 150
        }

        this.enemyPosition = [
            {
                left: Math.random() * this.gameSize.width,
                top: 0 - this.enemySize.height,
                direction: 'down'
            },
            {
                left: this.gameSize.width,
                top: Math.random() * this.gameSize.height,
                direction: 'left'
            },
            {
                left: Math.random() * this.gameSize.width,
                top: this.gameSize.height,
                direction: 'up'
            },
            {
                left: 0 - this.enemySize.width,
                top: Math.random() * this.gameSize.height,
                direction: 'right'
            }
        ]

        this.enemyPositionAbsolute = this.enemyPosition[Math.round(Math.random() * (this.enemyPosition.length - 1))]

        this.direction = this.enemyPositionAbsolute.direction

        this.enemyVel = 2

        this.init()
    }

    init() {

        this.enemyElement = document.createElement('img')
        this.enemyElement.src = "./img/orco-izquierda.png"

        this.enemyElement.style.position = "absolute"

        this.enemyElement.style.width = `${this.enemySize.width}px`
        this.enemyElement.style.height = `${this.enemySize.height}px`

        this.enemyElement.style.top = `${this.enemyPositionAbsolute.top}px`
        this.enemyElement.style.left = `${this.enemyPositionAbsolute.left}px`

        document.querySelector('#game-screen').appendChild(this.enemyElement)
    }

    move() {
        if (this.direction === "down") this.enemyPositionAbsolute.top += this.enemyVel
        if (this.direction === "right") this.enemyPositionAbsolute.left += this.enemyVel
        if (this.direction === "left") this.enemyPositionAbsolute.left -= this.enemyVel
        if (this.direction === "up") this.enemyPositionAbsolute.top -= this.enemyVel
        this.updatePosition()
    }

    updatePosition() {
        this.enemyElement.style.left = `${this.enemyPositionAbsolute.left}px`
        this.enemyElement.style.top = `${this.enemyPositionAbsolute.top}px`
    }
}