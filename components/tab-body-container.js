import React from 'react';
import styled from 'styled-components';

// styled-componentsでCSS実装---------------------------------------------------------------------------------------
// List.jsとForm.js共通のCSSを実装。
const Container = styled.div`
    padding: 12px 64px;
`
//End of styled-components---------------------------------------------------------------------------------------


export const TabBodyContainer = ({ children, title }) => {
    return (
        <Container>
            <h4>{ title }</h4>
            { children }
        </Container>
    );
};
