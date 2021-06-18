import React from 'react';

//名前なしimport(エントリポイントの中のコンポーネントを指定する方法)
import { List } from './List';
import { Form } from './Form';



class App extends React.Component {
    //各種state（今回はdescriptionのみ）の、初期化。
    constructor(props){
        super(props);
        this.state = { tab: 'list' };  //変数tabの初期値を、定義。
    }

    render () {
        //stateから、変数tab, descriptionの値を取得
        const { tab } = this.state;


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
                    tab === 'list' ? <List /> : <Form />
                }
            </>
        );
    };


}

export default App;