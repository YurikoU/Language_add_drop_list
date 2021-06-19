import React, {useState} from 'react';



//名前ありexport＜＝＝＞名前なしexport(default export)
export const Form = ({ onAddLang }) => {
    const [text, setText] = useState('');

    const submitForm = (event) => {
        event.preventDefault();//イベント発生時のページ遷移を防ぐ。
        onAddLang(text);//親コンポーネントのApp.jsから、関数onAddLangを参照し、<input>タグの入力値をパラメータにする。
    };

    return (
        <div>
            <h4> Add New Language </h4>
            <form onSubmit={submitForm} >
                <div>
                    <input
                        type="text"
                        value={text}
                        // <input>タグに変更があった場合、入力値を関数setText()に代入し、変数textを変更する。
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                {/* <button>にonClick()を付けない理由：①Enterで送信ができなくなる②<button>にpreventDefault()を指定できない */}
                <button>Add</button>
            </form>
        </div>
    )
};