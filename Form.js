import styled from 'styled-components';
import React, {useState} from 'react';
import { Button } from './components/button';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const Container = styled.div`
    padding: 12px 64px;
`

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px
    font-weight: bold;
`

const Input = styled.input`
    border-radius: 3px;
    padding: 4px;
    border: 1px solid black;
`

const ButtonContainer = styled.div`
    margin-top: 24px;
`

// 既存のコンポーネントButtonのみを、拡張して、CSS修飾する
const FormButton = styled(Button)`
    width: 120px;
`
//End of styled-components---------------------------------------------------------------------------------------


//名前ありexport＜＝＝＞名前なしexport(default export)
export const Form = ({ onAddLang }) => {
    const [text, setText] = useState('');

    const submitForm = (event) => {
        event.preventDefault();//イベント発生時のページ遷移を防ぐ。
        onAddLang(text);//親コンポーネントのApp.jsから、関数onAddLangを参照し、<input>タグの入力値をパラメータにする。
    };


    return (
        <Container>
            <h4> Add New Language </h4>
            <form onSubmit={submitForm} >
                <div>
                    <Label>Language</Label>
                    <Input
                        type="text"
                        value={text}
                        // <input>タグに変更があった場合、入力値を関数setText()に代入し、変数textを変更する。
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <ButtonContainer>
                    {/* <button>にonClick()を付けない理由：①Enterで送信ができなくなる②<button>にpreventDefault()を指定できない */}
                    <FormButton>Add</FormButton>
                </ButtonContainer>
            </form>
        </Container>
    )
};