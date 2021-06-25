import React from 'react';
import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const ListItem = styled.div`
    padding: 8px 16px;

    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`;
//End of styled-components---------------------------------------------------------------------------------------



//名前ありexport＜＝＝＞名前なしexport(default export)

export class List extends React.Component {
    componentWillUnmount() {
        //List.jsを参照しなくなるタイミング（=formに切り替える時）に、実行される。
        console.log('list.js: componentWillUnmount');
    }

    render() {
        const{ langs } = this.props;

        return (
            <TabBodyContainer title='Languages List'>
                {
                    langs.map((lang, index) => {
                        return <ListItem key={index.toString()}> {lang} </ListItem>
                    })
                }
            </TabBodyContainer>
        ); 
    }


};

//名前なしexport(default export)
// export default List;