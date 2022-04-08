import React from 'react';

const Prev = ({page, handleClick}) => {

    return (
        <>
            <>
                {
                    page === 1
                        ? null
                        :
                        <>
                            <a
                                onClick={() => page >= 1
                                    ? handleClick(1)
                                    : null
                                }>
                                &laquo;
                            </a>
                            <a
                                onClick={() => page >= 1
                                    ? handleClick(page - 1)
                                    : null
                                }>
                                &lt;
                            </a>
                        </>
                }
            </>

        </>
    );
};

export default Prev;