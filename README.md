# Black Jack

### Requirements: 

- [ ] On page load, *Create* a Deck of Cards (for each object (card) in array => suit, rank, and value attributes).
- [ ] On page load, *Shuffle* the Deck of Cards (Using Fisher-Yates shuffling algorithm).
- [ ] On **deal-cards-button** event *Deal* two cards to the user and dealer (dealer has one face up and one face down). 
    - [ ] *Create* an array that stores objects to hold user's/dealer's current hand => **user-hand** | **dealer-hand**.
    - [ ] *Update* **display-dealer-cards-list** to have _newLi elements in its unordered list element.
    - [ ] *Update* **display-user-cards-list** to have _newLi elements in its unordered list element. 
- [ ] *Initialize* the card value counts.
    - [ ] *Hide* **hidden-dealer-card-value-count-label**.
    - [ ] *Display* **display-user-card-value-count-label**
    - [ ] Both are used for game logic.
- [ ] On **hit-me-button** event, *Deal* another card to the user && *Increase* the counter.
    - [ ] User can *Hit* until they *Stand* or *Bust* (**display-user-card-value-count-label** is greater than 21).
    - [ ] *Update* **display-user-cards-list** to have _newLi elements in its unordered list element. 
    - [ ] If **dealer-hand** gets an Ace and a Jack, give them an automatic win.
    - [ ] Else If **user-hand** gets an Ace and a Jack, give them an automatic win.
- [ ] On **stand-button** event, have the dealer *Hit* until **hidden-dealer-card-value-count-label** is 17 or more && *Reveal* dealer's hand to user.
    - [ ] *Update* **display-dealer-cards-list** to have _newLi elements in its unordered list element. 
- [ ] *Compare* **display-user-card-value-count-label** and **hidden-dealer-card-value-count-label** on end of _dealing-life-cycle_.
    - [ ] If **display-user-card-value-count-label** > **hidden-dealer-card-value-count-label**, user wins.
    - [ ] If **display-user-card-value-count-label** < **hidden-dealer-card-value-count-label**, dealer wins.
    - [ ] If **display-user-card-value-count-label** == **hidden-dealer-card-value-count-label**, dealer wins.
- [ ] *Display* the winner on the screen to the **display-winner-label**.
- [ ] On **play-again-button** event, reset the hands and reshuffle the deck. 

### Variable Names:

* Buttons:
    1. **deal-cards-button**
    2. **hit-me-button**
    3. **stand-button**
    4. **play-again-button**
* Labels:
    1. **hidden-dealer-card-value-count-label** (hidden)
    2. **display-user-card-value-count-label** (shown)
    3. **display-dealer-cards-list**
    4. **display-user-cards-list**
    5. **display-winner-label**
* Javascript Variable Names:
    1. **deck** (array of card objects)
    2. **user-hand** (array of card objects)
    3. **dealer-hand** (array of card objects)






