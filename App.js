import styled from 'styled-components';

//名前ありimport(エントリポイントの中のコンポーネントを指定する方法)
import { useEffect, useState } from 'react';
import { List } from './List';
import { Form } from './Form';
import { getLanguages } from './const/languages';
import { withLoading } from './hoc/withLoading';



//styled-componentsでCSS実装---------------------------------------------------------------------------------------

//<header>タグを元にした、styledコンポーネントがつくられる。(コンポーネント名：Header)
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px 64px 0;
    border-bottom: 1px solid #E0E0E0;
`;

const HeaderUl = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const HeaderLi = styled.li`
    list-style: none;
    padding: 4px 12px;
    cursor: pointer;
    // border-bottom：プロパティfocusedが、trueなら'2px solid #F44336'、falseなら'none'。
    border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`;
//End of styled-components---------------------------------------------------------------------------------------




function App({ data }) {

    //tabという名前のstateを宣言。
    //useState()の返り値は、配列。返り値の配列の、一つ目の値が変数tab(=state)、2つ目の値が関数setTab。
    //setTab；パラメーターとして受け取った値を、tabに変更する。
    const [tab, setTab] = useState('list');
    const [langs, setLangs] = useState(data);

    //変数langsもしくは変数tabに変化があれば、関数fetchLanguages()を実行する。
    // useEffect(() => {
    //     fetchLanguages();
    // }, [langs, tab])
    //第二引数が空の配列なら、mounting時（初期時）のみ実行されて、情報変更時は実行されない。
    //なぜなら、第二引数（空の配列）が変更された時のみ、useEffect()が実行されるから。(=どの変数に依存するか、を変えられる)


    const fetchLanguages = async () => {
        const languages = await getLanguages();
        setLangs(languages);
    }


    //変数bodyの値は、条件演算子。tab === 'list'の条件が、trueなら<List />、falseなら<Form />。return()の↓と同じ。
    //{
    //  tab === 'list'  ?  <List />  :  <Form />
    //}
    // const body =  tab === 'list' ?  <List />  :  <Form />


    const addLang = (lang) => {
        setLangs([...langs, lang]);//配列langsの末尾に、新しい要素langを追加する。
        setTab('list');//変数tabを'list'に変更し、リストを表示。
    };


    return (
        <div>
            <Header>
                <HeaderUl>
                    {/* 関数setTab()がクリックされたら、変数tabの値を、listもしくはformに変更。 */}
                    {/* プロパティfocused： {tab==='list'}が成り立つならtrue、{tab === 'form'}が成り立つならtrue。*/}
                    <HeaderLi focused={tab === 'list'} onClick={ () => setTab('list') }>list</HeaderLi>
                    <HeaderLi focused={tab === 'form'} onClick={ () => setTab('form') }>form</HeaderLi>
                </HeaderUl>
            </Header>
            {
                //条件演算子：変数tab === 'list'の条件が、trueなら<List />、falseなら<Form />
                tab === 'list'  ?  <List langs={langs} />  :  <Form onAddLang={addLang} />
            }
        </div>
    );
}

export default withLoading(App, getLanguages);