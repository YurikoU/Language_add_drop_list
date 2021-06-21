import React from 'react';
import { useEffect } from 'react';


//名前ありexport＜＝＝＞名前なしexport(default export)
export const List = ({ langs }) => {

    useEffect(() => {
        console.log('List.js: useEffect');

        //unmountの値：useEffect()の第一引数の、返り値（return）
        return () => {
            console.log('List.js: useEffect: unmount');
        }
    })

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