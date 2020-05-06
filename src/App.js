import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from './components/Card/Card';

//** Internal Component Import */


class App extends Component {
  state = {
    pricing_plans: [
      {
        title: 'Bronze',
        cost: '75',
        analysis: '5',
        month: '3',
        sessions: '1 Concurrent Session',
        // guarantee: 'No Support'
      },
      {
        title: 'Silver',
        cost: '125',
        analysis: '5',
        month: '5',
        sessions: '3 Concurrent Sessions',
        guarantee: '1 yr Support'
      }, {
        title: 'Gold',
        cost: '345',
        analysis: '5',
        month: '8',
        sessions: 'Priority Session Delivery',
        guarantee: '24/7 Technical Delivery Support'
      },
    ]
  }
  render() {
    return (
      <div className='pricing'>
        <span className='pricing__subtitle'>
          Pricing plans
        </span>

        <h3 className='pricing__title'>
          Choose your pricing
        </h3>
        <p className='pricing__text'>
          Select any of the following plans to help you get started
        </p>

        <div className='pricing__cards'>
          {this.state.pricing_plans.map(({ title, cost, analysis, month, sessions, guarantee }, i) => (
            <Card
              key={`plan-${i}`}
              title={title}
              cost={cost}
              analyzer={analysis}
              month_support={month}
              sessions={sessions}
              guarantee={guarantee}

            />

          ))}
        </div>
      </div>
    );
  }
}

export default App;

