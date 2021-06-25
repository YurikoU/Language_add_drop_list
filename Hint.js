import React from 'react';
import styled from 'styled-components';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const HintContainer = styled.div`
    position: relative;
    display: inline-flex;
    margin-left: 12px;
`;

const HintInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #757575;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const PopupContainer = styled.div`
    position: absolute;
    left: 88%;
    bottom: 12px;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    width: 300px;
`;
//End of styled-components---------------------------------------------------------------------------------------



export class Hint extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
        this.ref = React.createRef();
    }

    //this.ref.currentが存在すれば、フォーカスする。
    componentDidUpdate() {
        if (this.ref.current) {
            this.ref.current.focus();
        }
    };


    render () {
        const { showPopup } = this.state;

        return (
            <HintContainer>
                <HintInner onClick={() => this.setState({showPopup: true})}> ? </HintInner>
                {
                    //変数showPopup===trueの時だけ、コンポーネント<PopupContainer>を実行する。
                    //コンポーネント<PopupContainer>からカーソルが外れたら、変数showPopupがfalseに変わる。 
                    //tabIndex：フォーカス不可の要素（<div>）をフォーカスするために、tabindex属性を設定しないといけない。
                    showPopup &&
                    <PopupContainer ref={this.ref} onBlur={() => this.setState({showPopup: false})} tabIndex={0}>
                        Please enter a language you want to add.
                    </PopupContainer>
                }
            </HintContainer>
        )

    }
};