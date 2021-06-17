import { useState } from 'react';

//名前なしimport(エントリポイントの中のコンポーネントを指定する方法)
import { List } from './List';



function App() {

    //descriptionという名前のstateを宣言。
    //useState()の返り値は、配列。返り値の配列の、一つ目の値が変数description(=state)、2つ目の値が関数setDescription。
    //setDescription；パラメーターとして受け取った値を、descriptionに変更する。
    const [description, setDescription] = useState('Before click');

    //descriptionを変更する、関数changeDescriptionを宣言。
    const changeDescription = () => {
        setDescription('After clicked!!');
    };



    return (
        <div>
            <List title="Languages" />
            { description }
            {/* ボタンをクリックすると、関数changeDescriptionを実施。stateはメモリに保存されるので、F5で初期値に戻る */}
            {/* <button onClick={ changeDescription }>button</button> */}
            <button onClick={ () => changeDescription() }>button</button>
        </div>
    );
}

export default App;
