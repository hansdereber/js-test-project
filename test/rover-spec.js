'use strict'

const chai = require('chai')
const expect = chai.expect
const Rover = require('../src/rover')

let rover

beforeEach(function () {
})

describe('Rover', function () {
    it('should be constructed with attributes', function () {
        rover = new Rover(5,2,'N')

        expect(rover.x).to.equal(5)
        expect(rover.y).to.equal(2)
        expect(rover.heading).to.equal('N')
    })

    //todo paramerterized call to test
    it('should turn right', function () {
        rover = new Rover(5,2,'N')

        rover.turnRight()

        expect(rover.x).to.equal(5)
        expect(rover.y).to.equal(2)
        expect(rover.heading).to.equal('E')
    })

    it('should turn left', function () {
        rover = new Rover(5,2,'S')

        rover.turnLeft()

        expect(rover.x).to.equal(5)
        expect(rover.y).to.equal(2)
        expect(rover.heading).to.equal('E')
    })

    it('should move increase y when heading north', function () {
        rover = new Rover(5,2,'N')

        rover.move()

        expect(rover.x).to.equal(5)
        expect(rover.y).to.equal(3)
        expect(rover.heading).to.equal('N')
    })

    it('should move decrease y when heading south', function () {
        rover = new Rover(5,2,'S')

        rover.move()

        expect(rover.x).to.equal(5)
        expect(rover.y).to.equal(1)
        expect(rover.heading).to.equal('S')
    })

    it('should move decrease x when heading west', function () {
        rover = new Rover(5,2,'W')

        rover.move()

        expect(rover.x).to.equal(4)
        expect(rover.y).to.equal(2)
        expect(rover.heading).to.equal('W')
    })

    it('should move according to commands', function () {
        rover = new Rover(1,2,'N')

        rover.executeCommand('LMLMLMLMM')

        expect(rover.x).to.equal(1)
        expect(rover.y).to.equal(3)
        expect(rover.heading).to.equal('N')
    })
})
