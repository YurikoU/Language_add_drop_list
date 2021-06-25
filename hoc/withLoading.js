import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const LoadDiv = styled.div`
    height: 100%
    padding: 36px;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.backgroundColor};
`
//End of styled-components---------------------------------------------------------------------------------------


export const withLoading = (WrappedComponent, fetchData) => {

    //withLoadingの返り値は、コンポーネント。
    return () => {
        const [data, setData] = useState(null);
        const [theme] = useContext(ThemeContext);

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
            <LoadDiv theme={theme}>Loading....</LoadDiv>
        )

        //dataが存在するときは、コンポーネント<WrappedComponent />を表示、データが無ければ関数Loadingを表示。
        return data ? <WrappedComponent data={data} /> : Loading;
    }
}