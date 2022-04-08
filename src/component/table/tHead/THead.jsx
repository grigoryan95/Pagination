import React from 'react';

const THead = ({columns}) => {

    const headerArr = columns.map((i, index, arr) => {
        const handlerClick = i.handlerClick
        return (
            <React.Fragment key={i.key}>
                <th>
                    {i.customRender
                        ? <>{i.title}
                            <span
                                className="p-1"
                                onClick={handlerClick ? () => handlerClick(i, index, arr) : null}>{i.customRender(i, index, arr)}
                            </span>
                          </>
                        : i.title}
                </th>
            </React.Fragment>
        );
    });

    return (
        <>
            <thead className="table-primary">
            <tr>
                {headerArr}
            </tr>
            </thead>
        </>
    );
};

export default THead;