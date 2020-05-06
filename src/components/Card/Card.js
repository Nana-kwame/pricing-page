import React from 'react';
import './Card.scss';

const Card = ({ title, cost, analyzer, month_support, sessions, guarantee }) => {
    return (
        <div className='card'>
            <div className='card__header'>
                <h4 className='card__header--text'> {title}</h4>

                <div className='card__header--priceWrap'>
                    <span className='price'>${cost}</span>
                    <span className='month'> /Mo</span>
                </div>

            </div>

            <div className='card__body'>
                <ul>
                    <li> {analyzer} Analyzer</li>
                    <li> {month_support} Month Support</li>
                    <li> {sessions} Sessions</li>
                    {guarantee ? <li> {guarantee} Guarantee</li>
                        : null}
                </ul>
            </div>

            <div className='card__footer'>
                <a href='javascript:void(0)' className='card__footer--btn gd-bg'>
                    Get Started
                </a>
            </div>
        </div>
    );
}

Card.defaultProps = {
    title: 'Bronze',
    cost: '250',
    analyzer: '5',
    month_support: '3',
    sessions: '10',
    guarantee: 'No Risk'
}

export default Card;

