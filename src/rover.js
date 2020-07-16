'use strict'

class Rover {

    constructor(x, y, heading) {
        this.x = x
        this.y = y
        this.heading = heading
    }

    executeCommand(command) {
        command.split('').forEach(singleCommand => this.executeSingleCommand(singleCommand))
    }

    executeSingleCommand(singleCommand) {
        switch (singleCommand) {
            case 'M':
                this.move()
                break
            case 'R':
                this.turnRight()
                break
            case 'L':
                this.turnLeft()
                break
        }
    }

    turnRight() {
        //todo class field
        let turnMap = {
            N: 'E',
            E: 'S',
            S: 'W',
            W: 'N'
        }
        this.heading = turnMap[this.heading]
    }

    turnLeft() {
        //todo class field
        let turnMap = {
            N: 'W',
            E: 'N',
            S: 'E',
            W: 'S'
        }
        this.heading = turnMap[this.heading]
    }

    move() {
        let moveMap = {
            N: {
                dX: 0,
                dY: 1
            },
            E: {
                dX: 1,
                dY: 0
            },
            S: {
                dX: 0,
                dY: -1
            },
            W: {
                dX: -1,
                dY: 0
            }
        }
        this.y += moveMap[this.heading].dY
        this.x += moveMap[this.heading].dX
    }
}

module.exports = Rover