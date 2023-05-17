// Write your JS code here

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesData} = this.props
    return (
      <div className="currency-list-container">
        <div className="header">
          <h1 className="heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="currency-image"
          />
        </div>
        <div className="currency-container">
          <div className="list-container">
            <div className="header-container">
              <p className="coin-type">Coin Type</p>
              <div className="header-items">
                <p className="currency-usd">USD</p>
                <p className="currency-euro">EURO</p>
              </div>
            </div>
            <ul>
              {cryptocurrenciesData.map(each => (
                <CryptocurrencyItem key={each.id} currencyDetails={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
