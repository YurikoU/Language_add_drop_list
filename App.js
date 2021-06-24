import React from 'react';
import styled from 'styled-components';

//名前なしimport(エントリポイントの中のコンポーネントを指定する方法)
import { List } from './List';
import { Form } from './Form';
import { getLanguages, languages } from './const/languages';
import { withLoading } from './hoc/withLoading';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px 64px 0;
    border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`

const HeaderLi = styled.li`
    list-style: none;
    padding: 4px 12px;
    cursor: pointer;
    border-bottom: ${ props => props.focused ? '2px solid #F44336' : 'none' };
`
//End of styled-components---------------------------------------------------------------------------------------



class App extends React.Component {
    //各種state（今回はdescriptionのみ）の、初期化。
    constructor(props){
        super(props);
        this.state = { 
            tab: 'list',
            langs: props.data
        };  //変数tabの初期値を、定義。
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
                <Header>
                    <HeaderUl>
                        {/* クリックしたら、関数setState()で、tabの値を変更する */}
                        <HeaderLi focused={tab === 'list'} onClick={ () => {this.setState({tab: 'list'})} }>
                            list
                        </HeaderLi>
                        <HeaderLi focused={tab === 'form'} onClick={ () => {this.setState({tab: 'form'})} }>
                            form
                        </HeaderLi>
                    </HeaderUl>
                </Header>

                {
                    tab === 'list' ? <List langs={langs} /> : <Form onAddLang={(lang) => this.addLang(lang)} />
                }
            </>
        );
    };


}

export default withLoading(App, getLanguages);