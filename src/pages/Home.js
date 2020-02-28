import React, { Component } from 'react'
import FormContainer from '../compoents/FormContainer'
import Input from '../compoents/Input'
import Modal from '../compoents/Modal'
export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      tickerInput: '',
      sharesInput: '',
      avgPricePaidInput: '',
      holdings: [
        {
          ticker: 'cci',
          shares: 4,
          avgPricePaid: 145
        },
        {
          ticker: 'o',
          shares: 4,
          avgPricePaid: 145
        },
        {
          ticker: 't',
          shares: 4,
          avgPricePaid: 145
        }
      ]
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  handleInputChange = evt => {
    const value = evt.target.value.toLowerCase()
    this.setState({
      ...this.state,
      [evt.target.name]: value
    })
  }

  handleAddHolding = evt => {
    evt.preventDefault()
    const { tickerInput, sharesInput, avgPricePaidInput } = this.state

    const newHolding = {
      ticker: tickerInput,
      shares: sharesInput,
      avgPricePaid: avgPricePaidInput
    }
    this.setState({
      tickerInput,
      sharesInput,
      avgPricePaidInput,
      holdings: [...this.state.holdings, newHolding]
    })
  }

  render() {
    const { showModal } = this.state

    return (
      <div>
        <h2>My Porfolio</h2>
        {showModal ? (
          <Modal>
            <FormContainer className="holding_form">
              <Input
                name="tickerInput"
                title="Ticker"
                type="text"
                placeholder="Ticker Symbol"
                handleChange={this.handleInputChange}
              />
              <Input
                name="sharesInput"
                title="Shares"
                type="text"
                placeholder="Number of shares"
                handleChange={this.handleInputChange}
              />
              <Input
                name="avgPricePaidInput"
                title="Avg Price Paid"
                type="text"
                placeholder="Price"
                handleChange={this.handleInputChange}
              />
              <button type="submit" onClick={this.handleAddHolding}>
                Add
              </button>
              <button onClick={this.toggleModal}>Cancel</button>
            </FormContainer>
          </Modal>
        ) : null}
        <button onClick={this.toggleModal}>Add holdings</button>
      </div>
    )
  }
}
