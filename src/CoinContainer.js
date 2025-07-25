import React, { Component } from 'react'
import { choice } from './helpers'
import Coin from './Coin'
import './CoinContainer.css'

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'tails',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png',
      },
      {
        side: 'heads',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png',
      },
    ],
  }
  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    const newCoin = choice(this.props.coins)
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
      }
    })
  }

  handleClick(e) {
    this.flipCoin()
  }
  render() {
    return (
      <div className='CoinContainer'>
        <h1>Yazı mı Tura mı?</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam {this.state.nFlips} atıştan <br></br>
          {this.state.nTails} yazı <br></br>
          {this.state.nHeads} tura
        </p>
      </div>
    )
  }
}

export default CoinContainer