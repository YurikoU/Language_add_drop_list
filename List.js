import React from 'react';



//名前ありexport＜＝＝＞名前なしexport(default export)
export class List extends React.Component {
    componentWillUnmount() {
        //List.jsを参照しなくなるタイミング（=formに切り替える時）に、実行される。
        console.log('list.js: componentWillUnmount');
    }

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