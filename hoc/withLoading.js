import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const LoadDiv = styled.div`
    padding: 36px;
`
//End of styled-components---------------------------------------------------------------------------------------


export const withLoading = (WrappedComponent, fetchData) => {
    
    class HOC extends React.Component {//クラスコンポーネントなので、withLoadingの返り値は、クラスHOC。
        constructor(props) {
            super(props);
            this.state = { data: null }//stateの定義。
        }

        componentDidMount() {
            this.fetch();
        }
        //引数に受け取った関数（fetchData）を非同期で実行し、その値を関数setDataに代入。（=dataの値ができる）
        async fetch() {
            const data = await fetchData();
            this.setState({ data });
        }

        render() {
            const { data } = this.state;
            const Loading = (
                <LoadDiv>Loading...</LoadDiv>
            )

            //dataが存在するときは、コンポーネント<WrappedComponent />を表示、データが無ければ関数Loadingを表示。
            return data ? <WrappedComponent data={data}/> : Loading;
        }
    }
    
    //定義した新クラスHOCを返す。
    return HOC;
}