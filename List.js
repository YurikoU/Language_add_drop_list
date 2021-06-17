import React from 'react';

//名前ありexport＜＝＝＞名前なしexport(default export)
export class List extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <>
                <h1>This is a title</h1>
                <h4> {title} </h4>
            </>
        ); 
    }


};

//名前なしexport(default export)
// export default List;