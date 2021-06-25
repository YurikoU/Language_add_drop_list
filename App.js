import styled from 'styled-components';
//名前ありimport(エントリポイントの中のコンポーネントを指定する方法)
import { useState, useContext } from 'react';
import { Form } from './Form';
import { getLanguages } from './const/languages';
import { Header } from './Header';
import { List } from './List';
import { ThemeContext } from './contexts/ThemeContext';



const Container = styled.div`
    height: 100%;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
`;


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


    const [theme] = useContext(ThemeContext);


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
        <Container theme={theme}>
            <Header tab={tab} setTab={setTab} />
            {
                //条件演算子：変数tab === 'list'の条件が、trueなら<List />、falseなら<Form />
                tab === 'list'  ?  <List langs={langs} />  :  <Form onAddLang={addLang} />
            }
        </Container>
    );
}

export default App;