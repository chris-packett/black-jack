let deck = []
let userHand = []
let dealerHand = []

const createDeck = () => {
  let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
  let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
  let rank_values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
  for (let s = 0; s < suits.length; s++) {
    for (let r = 0; r < ranks.length; r++) {
      const card = {
        suit: suits[s],
        rank: ranks[r],
        value: rank_values[r]
      }
      deck.push(card)
    }
  }
  shuffleDeck()
}

const shuffleDeck = () => {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * i)
    const tempCard = deck[i]
    deck[i] = deck[j]
    deck[j] = tempCard
  }
  console.log(deck)
}

document.addEventListener('DOMContentLoaded', createDeck)