import React from 'react';

//名前なしimport(エントリポイントの中のコンポーネントを指定する方法)
import { List } from './List';
import { Form } from './Form';
import { getLanguages, languages } from './const/languages';



class App extends React.Component {
    //各種state（今回はdescriptionのみ）の、初期化。
    constructor(props){
        super(props);
        this.state = { 
            tab: 'list',
            langs: []
        };  //変数tabの初期値を、定義。
    }

    componentDidMount() {
        console.log('App.js: componentDidMount');
        this.fetchLanguages();
    }

    async fetchLanguages() {
        const langs = await getLanguages();
        this.setState({ langs });
    }

    addLang(lang){
        this.setState({ 
            tab: 'list',
            langs: [...this.state.langs, lang] 
        });//新しい入力値を受け取ったら、配列langsに入力値を追加し、stateを更新する。
    }


    render () {
        //stateから、変数tab, descriptionの値を取得
        const { tab, langs } = this.state;


        return(
            <>
                <header>
                    <ul>
                        {/* クリックしたら、関数setState()で、tabの値を変更する */}
                        <li onClick={ () => {this.setState({tab: 'list'})} }>
                            list
                        </li>
                        <li onClick={ () => {this.setState({tab: 'form'})} }>
                            form
                        </li>
                    </ul>
                </header>
                <hr />

                {
                    tab === 'list' ? <List langs={langs} /> : <Form onAddLang={(lang) => this.addLang(lang)} />
                }
            </>
        );
    };


}

export default App;