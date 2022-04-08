import React from 'react';

const Next = ({page, dataCount, handleClick, item}) => {
    return (
        <>
            {
                page ===  Math.ceil(dataCount / 10)
                    ? null
                    : <>
                        <a onClick={
                            () => page <= Math.ceil(dataCount / 10)
                                ? handleClick(page + 1)
                                : null
                        }>
                            &gt;
                        </a>
                        <a onClick={
                            () => page <= Math.ceil(dataCount / 10)
                                ? handleClick(item.at(-1))
                                : null
                        }>
                            &raquo;
                        </a>
                    </>
            }
        </>
    );
};

export default Next;