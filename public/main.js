let deck = []
let userHand = []
let dealerHand = []
let userScore = 0 
let dealerScore = 0

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

const pushPop = (playerHand, deck) => {
  return playerHand.push(deck.pop())
}

const initUserScore = (cardOneIndex, cardTwoIndex) => {
  const label = '.display-user-card-value-count-label'
  userScore += userHand[cardOneIndex].value + userHand[cardTwoIndex].value
  document.querySelector(label).textContent = userScore
}

const initDealerScore = (cardOneIndex, cardTwoIndex) => {
  const label = '.hidden-dealer-card-value-count-label'
  dealerScore += dealerHand[cardOneIndex].value + dealerHand[cardTwoIndex].value
  document.querySelector(label).textContent = 'At least: ' + dealerHand[1].value
  
}

const dealCards = (numOfCards) => {
  for (let i = 0; i < numOfCards; i++) {
    pushPop(dealerHand, deck)
    pushPop(userHand, deck)
  }
  console.log(userHand)
  console.log(dealerHand)
  initUserScore(0, 1)
  initDealerScore(0, 1)
  const dealerHasBlackJackCombo = (dealerHand[0].value === 10 && dealerHand[0].rank !== "10" && dealerHand[1].value === 11) || (dealerHand[0].value === 11 && dealerHand[1].value === 10 && dealerHand[1].rank !== "10")
  const userHasBlackJackCombo = (userHand[0].value === 10 && userHand[0].rank !== "10" && userHand[1].value === 11) || (userHand[0].value === 11 && userHand[1].value === 10 && userHand[1].rank !== "10")
  if (dealerHasBlackJackCombo) {
    console.log("Dealer wins!")
  } 
  else if (userHasBlackJackCombo) {
    console.log("You win!")
  }
}

const updateUserScore = (cardIndex) => {
  const label = '.display-user-card-value-count-label'
  userScore += userHand[cardIndex].value
  document.querySelector(label).textContent = userScore
}

const userCardHit = () => {
  pushPop(userHand, deck)
  const index = userHand.length - 1
  updateUserScore(index)
}

document.addEventListener('DOMContentLoaded', createDeck)
document.querySelector('.deal-cards-button').addEventListener('click', () => dealCards(2))
document.querySelector('.hit-me-button').addEventListener('click', userCardHit)
