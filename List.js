import React from 'react';

//配列languagesを宣言。
const languages = [
    'Go',
    'Ruby',
    'Java',
    'C#',
    'C++',
    'JavaScript'
];


//名前ありexport＜＝＝＞名前なしexport(default export)
export class List extends React.Component {
    render() {
        return (
            <>
                {
                    languages.map((lang, index) => {
                        return <div key={index.toString()}> {lang} </div>
                    })
                }
            </>
        ); 
    }


};

//名前なしexport(default export)
// export default List;