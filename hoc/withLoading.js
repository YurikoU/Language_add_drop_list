import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const LoadDiv = styled.div`
    padding: 36px;
`
//End of styled-components---------------------------------------------------------------------------------------


export const withLoading = (WrappedComponent, fetchData) => {

    //withLoadingの返り値は、コンポーネント。
    return () => {
        const [data, setData] = useState(null);

        //mounting時だけ、関数fetch()を実行。
        useEffect(() => {
            fetch();
        }, [])

        //引数に受け取った関数（fetchData）を非同期で実行し、その値を関数setDataに代入。（=dataの値ができる）
        const fetch = async () => {
            const data = await fetchData();
            setData(data);
        }

        const Loading = (
            <LoadDiv>Loading....</LoadDiv>
        )

        //dataが存在するときは、コンポーネント<WrappedComponent />を表示、データが無ければ関数Loadingを表示。
        return data ? <WrappedComponent data={data} /> : Loading;
    }
}