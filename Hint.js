import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';


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



export const Hint = () => {
    //変数showPopupの定義と初期化。
    const [showPopup, setShowPopup] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        //ref.current（指定したHTML要素）が存在すれば、フォーカスする。
        if (ref.current) ref.current.focus();
    })

    return (
        <HintContainer>
            {/* コンポーネント<HintInner>をクリックしたら、変数showPopupがtrueに変わる。 */}
            <HintInner onClick={() => setShowPopup(true)}> ? </HintInner>

            {
                //変数showPopup===trueの時だけ、コンポーネント<PopupContainer>を実行する。
                //コンポーネント<PopupContainer>からカーソルが外れたら、変数showPopupがfalseに変わる。 
                //tabIndex：フォーカス不可の要素（<div>）をフォーカスするために、tabindex属性を設定しないといけない。
                showPopup &&
                <PopupContainer ref={ref} onBlur={() => setShowPopup(false)} tabIndex={0}>
                    Please enter a language you want to add.
                </PopupContainer>
            }

        </HintContainer>
    );  
};