import styled from 'styled-components';
import React from 'react';

//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const Container = styled.div`
    padding: 12px 64px;
`

const ListItem = styled.div`
    padding: 8px 16px;

    //2番目の<div>から、実装される。
    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`
//End of styled-components---------------------------------------------------------------------------------------


//名前ありexport＜＝＝＞名前なしexport(default export)
export const List = ({ langs }) => {
    return (
        <Container>
            <h2> This is a list </h2>
            {
                // map()： 配列langsを、別の配列に変換する
                langs.map((lang, index) => {
                    return <ListItem key={index.toString()}> {lang} </ListItem>
                })
            }
        </Container>
    );
};

//名前なしexport(default export)
// export default List;