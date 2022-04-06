import React from 'react';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch() // This will kick off the initial replacement of i to svg tags and configure a MutationObserver

const BoxQuote = ({ textPhrase, authorPhrase, phraseRandom }) => {

    return (

        <div className="quote-box">
            <div className='quotation-marks'><i class="fas fa-quote-left"></i></div>
            
            <div className="text">{textPhrase}</div>
            <div className="author"><p>{authorPhrase}</p></div>
       
            <div className="containerButton">
            <button 

                onClick={ phraseRandom } 
                className='circle'
            >
                    <i class="fa-solid fa-angle-right"></i>

            </button>
            </div>

        </div>
    );
};

export default BoxQuote;