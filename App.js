import React from 'react';

//名前なしimport(エントリポイントの中のコンポーネントを指定する方法)
import { List } from './List';



class App extends React.Component {
    //各種state（今回はdescriptionのみ）の、初期化。
    constructor(props){
        super(props);
        this.state = { description: 'before click' };  //変数descriptionの初期値を、定義。
    }

    //state である変数descriptionを、変更する関数
    changeDescription(){
        //関数setState()は、オブジェクトを受け取る。
        this.setState({
            description: 'After clicked!!!'  //変数descriptionの値を、変更。
        })
    }


    render () {
        //stateから、変数descriptionの値を取得
        const { description } = this.state;


        return(
            <>
                <h2>This is a class component</h2>
                <List title='Languages' />
                { description }
                {/* 関数changeDescription()の実行 */}
                <button onClick={ ()=>this.changeDescription() }>button</button>
            </>
        );
    };


    //descriptionという名前のstateを宣言。
    //useState()の返り値は、配列。返り値の配列の、一つ目の値が変数description(=state)、2つ目の値が関数setDescription。
    //setDescription；パラメーターとして受け取った値を、descriptionに変更する。
    // const [description, setDescription] = useState('Before click');

    //descriptionを変更する、関数changeDescriptionを宣言。
    // const changeDescription = () => {
    //     setDescription('After clicked!!');
    // };



    // return (
    //     <div>
    //         <List title="Languages" />
    //         { description }
    //         {/* ボタンをクリックすると、関数changeDescriptionを実施。stateはメモリに保存されるので、F5で初期値に戻る */}
    //         {/* <button onClick={ changeDescription }>button</button> */}
    //         <button onClick={ () => changeDescription() }>button</button>
    //     </div>
    // );
}

export default App;
