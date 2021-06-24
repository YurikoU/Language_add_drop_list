import React from 'react';
import styled from 'styled-components';


// styled-componentsでCSS実装---------------------------------------------------------------------------------------
// List.jsとForm.js共通のCSSを実装。
const Container = styled.div`
    padding: 12px 64px;
`
//End of styled-components---------------------------------------------------------------------------------------


export class TabBodyContainer extends React.Component {
    render () {
        //propsから、変数childrenと変数titleを受け取る。
        const { children, title } = this.props;

        return(
            <Container>
                <h4>{ title }</h4>
                { children }
            </Container>
        );
    }
};
