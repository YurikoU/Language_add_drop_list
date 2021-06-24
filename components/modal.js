import ReactDOM from 'react-dom';
import styled from 'styled-components';
import React, { useEffect, useContext } from 'react';



//HTMLのドキュメント(index.html)から、ID名='modal-root'の要素を取得。
const modalRoot = document.getElementById('modal-root');


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
`
//End of styled-components---------------------------------------------------------------------------------------



//コンポーネントModalの宣言。
export const Modal = (props) => {

    //関数Modalの返り値：Portalというインスタンス。
    //ID名='modal-root'のHTML要素（第一引数）の中に、コンポーネントContainer（第二引数）を埋め込む。
    return ReactDOM.createPortal(
        <Container>
            { props.children }
        </Container>,
        modalRoot  //ID名='modal-root'のHTML要素
    )
};
