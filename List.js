import React from 'react';



//名前ありexport＜＝＝＞名前なしexport(default export)
export class List extends React.Component {
    render() {
        const{ langs } = this.props;

        return (
            <>
                {
                    langs.map((lang, index) => {
                        return <div key={index.toString()}> {lang} </div>
                    })
                }
            </>
        ); 
    }


};

//名前なしexport(default export)
// export default List;