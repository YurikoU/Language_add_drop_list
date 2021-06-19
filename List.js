import React from 'react';
import { languages } from './const/languages';



//名前ありexport＜＝＝＞名前なしexport(default export)
export const List = ({ langs }) => {
    //変数titleの宣言：親コンポーネントAppから、titleという名前のpropsを受け取る。

    return (
        <>
            <h2> This is a list </h2>
            {
                // map()： 配列langsを、別の配列に変換する
                langs.map((lang, index) => {
                    return <div key={index.toString()}> {lang} </div>
                })
            }
        </>
    );
};

//名前なしexport(default export)
// export default List;