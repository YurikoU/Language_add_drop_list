import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';



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



//クラスModalの宣言。
export class Modal extends React.Component {

    //クラスModalの返り値：Portalというインスタンス。
    //ID名='modal-root'のHTML要素（第一引数）の中に、コンポーネントContainer（第二引数）を埋め込む。
    render() {
        return ReactDOM.createPortal(
            <Container>
                { this.props.children }
            </Container>,
            modalRoot  //ID名='modal-root'のHTML要素
        )
    };
};