import React from 'react';

const Button = ({ changeQuote, quote, colors }) => {
    let urlTwitter = `https://twitter.com/intent/tweet?hashtags=${quote}`;
    let urlTumblr = `https://www.tumblr.com/`;
    return (
        <section className='container-buttons'>
            <div className='buttons-social'>
                <a id='tweet-quote' href={urlTwitter} target='_blank' className='social btn' style={{backgroundColor: colors}}>
                    <i className="fab fa-twitter"></i></a>
                <a id='tumblr-quote' href={urlTumblr} target='_blank' className='social btn' style={{backgroundColor: colors}}>
                    <i className="fab fa-tumblr"></i></a>
            </div>
            <div className='button-quote'>
                <input id='new-quote' type='button' className='btn quote' value='Nueva Cita' onClick={changeQuote}style={{backgroundColor: colors}}>
                </input>
            </div>
        </section>
    )
};

export default Button;