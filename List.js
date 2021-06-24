import React from 'react';
import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
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
        <TabBodyContainer title='This is a list'>
            {
                // map()： 配列langsを、別の配列に変換する
                langs.map((lang, index) => {
                    return <ListItem key={index.toString()}> {lang} </ListItem>
                })
            }
        </TabBodyContainer>
    );
};

//名前なしexport(default export)
// export default List;