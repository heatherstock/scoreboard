const chai = require('chai'); 
const expect = chai.expect;
import {computeScore} from '../src/logic/logic';
import 'babel-polyfill';

describe('computeScore', () => {
    it('increases the score by the correct number of points', () => {
        let player = 1;
        let opposition = 2;
        let playerPoints = 15;
        let oppositionPoints = 15;

        expect(computeScore(player, opposition, playerPoints, oppositionPoints))
            .to.deep.equal({ player1: 30, player2: 15 })
    })
})