import React from 'react';
import styled from 'styled-components';
import {Button} from './components/button';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const Container = styled.div`
    padding: 12px 64px;
`

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`

const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black
`

const ButtonContainer = styled.div`
    margin-top: 24px;
`

const FormButton = styled(Button)`
    width: 120px;
`
//End of styled-components---------------------------------------------------------------------------------------



//名前ありexport＜＝＝＞名前なしexport(default export)
export class Form extends React.Component {
    //stateを初期化するため、constructor()を宣言。
    constructor(props){
        super(props);
        this.state = { text: '' }
    }

    //
    submitForm(event) {
        event.preventDefault();//フォーム送信字の、ページ遷移を防ぐ
        this.props.onAddLang(this.state.text);//親コンポーネントのApp.jsから、関数onAddLangを参照して、変数textを追加する。
    }

    render() {
        const {text} = this.state;
        return (
            <Container>
                <h4>Add New Languages</h4>
                <form onSubmit={(event) => this.submitForm(event)} >
                    <div>
                        <Label>Language</Label>
                        <Input
                            type="text"
                            value={text}
                            onChange={(e) => this.setState({text: e.target.value})} 
                        />
                    </div>
                    <ButtonContainer>
                        <FormButton>Add</FormButton>
                    </ButtonContainer>
                </form>
            </Container>
        )
    }
};