import React from "react";
import axios from "axios";
import { private_alpha_key } from "../Auth/alphaVantageConfig";
import "../Styles/StockTicker/tickerBoard.css";
import LiveClock from "./clock";

import { ImpulseSpinner } from "react-spinners-kit";
import { SpinnerContainer } from "../Styles/Reports/Reports";

class StockTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStamp: {},
      companies: ["DJI", "NDAQ", "SPX", "AAPL", "AMZN"], // stock company symbols
      stocks: []
    };
  }

  componentDidMount() {
    let promises = this.state.companies.map((
      company // map that sends array of companies through axios to invoke external API
    ) =>
      axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&interval=5min&apikey=${private_alpha_key}`
      )
    );
    this.fetchStocks(promises);
  }

  fetchStocks = promises => {
    // Receives array of companies and returns values of the stock symbols from the api
    let stocks = [];
    let timeStamp;
    axios
      .all(promises)
      .then(results => {
        results.forEach(result => {
          // loops through keys to access targeted values of stock(s)

          if (result.data.Note) {
            throw new Error();
          }

          let data = result.data["Time Series (Daily)"]; //Accesses correct object within API
          let timeStamps = Object.keys(data);
          let current = data[timeStamps[0]];
          timeStamp = timeStamps[0];

          stocks.push({
            company: result.data["Meta Data"]["2. Symbol"], // Collects stock symbol
            values: current
          });
        });

        this.setState({
          stocks,
          timeStamp
        });
      })
      .catch(error => {
        console.error("There was an error with the network requests", error);
      });
  };

  change = (close, start) => {
    // function for calculating the change of a stocks gain/loss by %
    let deduct = close - start;
    let divide = deduct / start;
    let solution = divide * 100;
    return solution.toFixed(2);
  };

  decimalToFixed = input => {
    // truncates the numbers following the decimal to two digits
    input = parseFloat(input).toFixed(2);
    return input;
  };

  render() {
    if (!this.state.stocks.length) {
      // returns loading sign while data is being retrieved from API
      return (
        <SpinnerContainer>
          <ImpulseSpinner size={30} frontColor="#EFEFEF" backColor="#301548" />
        </SpinnerContainer>
      );
    }

    let rows = [];

    const open = "1. open";
    const high = "2. high";
    const low = "3. low";
    const close = "4. close";

    this.state.stocks.forEach((stock, index) => {
      // Loops through array of stock values and creates a table
      /* console.log(stock) */
      rows.push(
        <tr key={index}>
          <td>{stock.company}</td>
          <td>{this.decimalToFixed(stock.values[open])}</td>
          <td>{this.decimalToFixed(stock.values[high])}</td>
          <td>{this.decimalToFixed(stock.values[low])}</td>
          <td>{this.decimalToFixed(stock.values[close])}</td>
          <td>{`${this.change(stock.values[close], stock.values[open])}%`}</td>
        </tr>
      );
    });

    return (
      <div>
        <div className="table">
          <LiveClock />
          <table className="tickerContainer">
            <thead>
              <tr>
                <th>
                  <h1>Company</h1>
                </th>
                <th>
                  <h1>Start</h1>
                </th>
                <th>
                  <h1>High</h1>
                </th>
                <th>
                  <h1>Low</h1>
                </th>
                <th>
                  <h1>Close</h1>
                </th>
                <th>
                  <h1>Change</h1>
                </th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StockTicker;
