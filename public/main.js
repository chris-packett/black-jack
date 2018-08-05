let deck = []
let userHand = []
let dealerHand = []
let userScore = 0 
let dealerScore = 0
let gameOver = false

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

const dealCards = (numOfCards) => {
  for (let i = 0; i < numOfCards; i++) {
    pushPop(dealerHand, deck)
    pushPop(userHand, deck)
  }
  postDealCardsActions()
}

const postDealCardsActions = () => {
  initUserScore(0, 1)
  initDealerScore(0, 1)
  displayUserCards(0)
  displayUserCards(1)
  displayDealerCards(0)
  displayDealerCards(1)
  displayBlackJackWin()
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

const displayUserCards = (cardIndex) => {
  const userHandList = document.querySelector('.user-hand-list')
  if (!gameOver) {
    const newLi = document.createElement('li')
    newLi.textContent = userHand[cardIndex].rank + ' of ' + userHand[cardIndex].suit
    newLi.classList.add('user-card-list-item')
    userHandList.appendChild(newLi)
  }
  else {
    userHandList.removeChild(userHandList.childNodes[cardIndex])
  }
}

const displayDealerCards = (cardIndex) => {
  const dealerHandList = document.querySelector('.dealer-hand-list')
  if (!gameOver) {
    const newLi = document.createElement('li')
    newLi.textContent = dealerHand[cardIndex].rank + ' of ' + dealerHand[cardIndex].suit
    if (cardIndex === 0) {
      newLi.classList.add('hidden-text-dealer-card-list-item')
    }
    else {
      newLi.classList.add('dealer-card-list-item')
    }
    dealerHandList.appendChild(newLi)
  }
  else {
    dealerHandList.removeChild(dealerHandList.childNodes[cardIndex])
  }
}

const displayBlackJackWin = () => {
  const dealerHasBlackJackCombo = (dealerScore === 21 && dealerHand[0].rank !== "10" && dealerHand[1].rank !== "10")
  const userHasBlackJackCombo = (userScore === 21 && userHand[0].rank !== "10" && userHand[1].rank !== "10")
                                
  if (dealerHasBlackJackCombo) {
    gameOver = true
    updateWinner('The Dealer...')
  } 
  else if (userHasBlackJackCombo) {
    gameOver = true
    updateWinner('You!')
  }
}

const userCardHit = () => {
  pushPop(userHand, deck)
  const index = userHand.length - 1
  updateUserScore(index)
  displayUserCards(index)
  if (userScore > 21) {
    gameOver = true
    updateWinner('The Dealer...')
  }
}

const updateUserScore = (cardIndex) => {
  const label = '.display-user-card-value-count-label'
  userScore += userHand[cardIndex].value
  document.querySelector(label).textContent = userScore
}

const userStand = () => {
  if (dealerScore < 17) {
    dealerCardHit()
  }
  else {
    compareScores()
  }
}

const dealerCardHit = () => {
  pushPop(dealerHand, deck)
  const index = dealerHand.length - 1
  updateDealerScore(index)
  displayDealerCards(index)
  if (dealerScore > 21) {
    gameOver = true
    updateWinner('You!')
  }
  else if (dealerScore < 17) {
    dealerCardHit()
  }
  else {
    compareScores()
  }
}

const updateDealerScore = (cardIndex) => {
  const label = '.hidden-dealer-card-value-count-label'
  dealerScore += dealerHand[cardIndex].value
  document.querySelector(label).textContent = dealerScore
}

const compareScores = () => {
  if (dealerScore > userScore) {
    gameOver = true
    updateWinner('The Dealer...')
  }
  else if (userScore > dealerScore) {
    gameOver = true
    updateWinner('You!')
  }
  else {
    updateWinner('Welp... I guess the game is pushed!')
  }
}

const updateWinner = (winner) => {
  document.querySelector('.display-winner-label').textContent = winner
}

const playAgain = () => {
  deck = []
  console.log(deck)
  while (userHand.length > 0) {
    const index = userHand.length - 1
    displayUserCards(index)
    userHand.pop()
  }
  userHand = []
  console.log(userHand)
  while (dealerHand.length > 0) {
    const index = dealerHand.length - 1
    displayDealerCards(index)
    dealerHand.pop()
  }
  dealerHand = []
  console.log(dealerHand)
  userScore = 0
  console.log(userScore)
  document.querySelector('.display-user-card-value-count-label').textContent = '0'
  dealerScore = 0
  console.log(dealerScore)
  document.querySelector('.hidden-dealer-card-value-count-label').textContent = '0'
  document.querySelector('.display-winner-label').textContent = ''
  gameOver = false
  console.log(gameOver)
}

document.addEventListener('DOMContentLoaded', createDeck)
document.querySelector('.deal-cards-button').addEventListener('click', () => dealCards(2))
document.querySelector('.hit-me-button').addEventListener('click', userCardHit)
document.querySelector('.stand-button').addEventListener('click', userStand)
document.querySelector('.play-again-button').addEventListener('click', playAgain)