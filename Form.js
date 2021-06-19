import React from 'react';


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
            <div>
                <h4>Add New Languages</h4>
                <form onSubmit={(event) => this.submitForm(event)} >
                    <div>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => this.setState({text: e.target.value})} 
                        />
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </form>
            </div>
        )
    }
};