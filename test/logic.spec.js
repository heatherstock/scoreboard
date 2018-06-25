const chai = require('chai'); 
const expect = chai.expect;
import {computeScore} from '../src/logic/logic';
import 'babel-polyfill';

describe('computeScore', () => {
    it('increases the score by the correct number of points', () => {
        let player = 1;
        let gameScore = {player1: 15, player2: 15};

        expect(computeScore(player, gameScore))
            .to.deep.equal({ player1: 30, player2: 15 })
    })

    it('announces the winner after 40 points if not on deuce', () => {
        let player = 1;
        let gameScore = {player1: 40, player2: 15};

        expect(computeScore(player, gameScore))
            .to.deep.equal({ player1: 'WINNER', player2: 'LOSER' })
    })

    it('increases score to advantage if on deuce', () => {
        let player = 1;
        let gameScore = {player1: 40, player2: 40};

        expect(computeScore(player, gameScore))
            .to.deep.equal({ player1: 'ADVANTAGE', player2: 40 })
    })

    it('announces the winner after advantage', () => {
        let player = 1;
        let gameScore = {player1: 'ADVANTAGE', player2: 40};

        expect(computeScore(player, gameScore))
            .to.deep.equal({ player1: 'WINNER', player2: 'LOSER' })
    })

    it('decreases the oppositions score if they had advantage', () => {
        let player = 1;
        let gameScore = {player1: 40, player2: 'ADVANTAGE'};

        expect(computeScore(player, gameScore))
            .to.deep.equal({ player1: 40, player2: 40 })
    })

    it('resets the score after the winner is announced (and awards the correct number of points)', () => {
        let player = 1;
        let gameScore = {player1: 'WINNER', player2: 'LOSER'};

        expect(computeScore(player, gameScore))
            .to.deep.equal({ player1: 15, player2: 0 })
    })
})