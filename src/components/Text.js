import React from 'react';

let Text = ({quote, author, colors}) => {
    return (
        <section className='container-text'>
            <div id='text' className='text-quote'>
                <h5 className=''style={{color: colors}}>{quote}</h5>
            </div>
            <div id='author' className='text-author'>
                <p className=''style={{color: colors}}>{author}</p>
            </div>
        </section>
    )
}

export default Text;

