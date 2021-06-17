import React from 'react';

//名前ありexport＜＝＝＞名前なしexport(default export)
export const List = (props) => {
    const title = props.title;

    return (
        <>
            <h1>This is a title</h1>
            <h4> {title} </h4>
        </>
    );
};

//名前なしexport(default export)
// export default List;