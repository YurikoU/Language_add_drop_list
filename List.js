import React from 'react';

//配列languagesを宣言。
const languages = [
    'JavaScript',
    'PHP',
    'C++',
    'C#',
    'Java',
    'Ruby',
    'Go'
];


//名前ありexport＜＝＝＞名前なしexport(default export)
export const List = (props) => {
    //変数titleの宣言：親コンポーネントAppから、titleという名前のpropsを受け取る。

    return (
        <>
            <h2> This is a list </h2>
            {
                // map()： 配列languagesを、別の配列に変換する
                languages.map((lang, index) => {
                    return <div key={index.toString()}> {lang} </div>
                })
            }

        </>
    );
};

//名前なしexport(default export)
// export default List;