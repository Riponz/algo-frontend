import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
        <div className="navbar">
            <div className="logo">Algo-Trade</div>
        </div>
        
        <div className="main">
            <div className="strategy">
                <div className="watchlist-text">Strategy</div>
                
                
                <div className="strategy-list">
                    <div className="strategy-name">
                        <div className="name">MACD CROSSOVER</div>
                        <div className="details">NSE | EQUITY | POSITIONAL</div>
                    </div>
                    <div className="strategy-stock">
                        <div className="stock">ICICI LTD.</div>
                        <div className="risk-reward">R/R - 5:1</div>
                    </div>
                </div>


                
                <div className="strategy-list">
                    <div className="strategy-name">
                        <div className="name">EMA BREAKOUT</div>
                        <div className="details">NSE | F&O | INTRADAY</div>
                    </div>
                    <div className="strategy-stock">
                        <div className="stock">BANKNIFTY</div>
                        <div className="risk-reward">R/R - 5:2</div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Home