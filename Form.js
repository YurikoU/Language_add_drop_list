import React, {useState} from 'react';
import styled from 'styled-components';
import { Button } from './components/button';
import { TabBodyContainer } from './components/tab-body-container';
import { FormModal } from './FormModal';
import { Hint } from './Hint';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
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

// 既存のコンポーネントButtonを、拡張して、CSS修飾する
const FormButton = styled(Button)`
    width: 120px;
`
//End of styled-components---------------------------------------------------------------------------------------


//名前ありexport＜＝＝＞名前なしexport(default export)
export const Form = ({ onAddLang }) => {
    const [text, setText] = useState('');//初期状態は、入力されていないので、初期値’’。
    const [showModal, setShowModal] = useState(false);//はじめは、モーダルは開いてないので、初期値false

    const submitForm = (event) => {
        event.preventDefault();//イベント発生時のページ遷移を防ぐ。
        setShowModal(true);//イベント発生したら、モーダルが開いて、languageを追加するか聞く
    };


    return (
        <TabBodyContainer title='Add New Language'>
            <form onSubmit={submitForm} >
                <div>
                    <Label>Language</Label>
                    <Input
                        type="text"
                        value={text}
                        // <input>タグに変更があった場合、入力値を関数setText()に代入し、変数textを変更する。
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Hint />
                </div>

                <ButtonContainer>
                    {/* <button>にonClick()を付けない理由：①Enterで送信ができなくなる②<button>にpreventDefault()を指定できない */}
                    <FormButton>Add</FormButton>
                </ButtonContainer>
            </form>
            {
                //条件式（showModal===true）が成り立つときだけ、<FormModal />を実行する。
                showModal && 

                <FormModal 
                    confirm={() => onAddLang(text)}//親コンポーネントのApp.jsから、関数onAddLangを参照し、<input>タグの入力値をパラメータにする。
                    cancel={() => setShowModal(false)}//モーダルを閉じる。
                />
            }

        </TabBodyContainer>
    );
};