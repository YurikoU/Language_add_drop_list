import React from 'react';
import styled from 'styled-components';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const Container = styled.div`
    padding: 12px 64px;
`

const ListItem = styled.div`
    padding: 8px 16px;

    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`
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
            <Container>
                {
                    langs.map((lang, index) => {
                        return <ListItem key={index.toString()}> {lang} </ListItem>
                    })
                }
            </Container>
        ); 
    }


};

//名前なしexport(default export)
// export default List;