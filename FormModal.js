import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from './components/button';
import { Modal } from './components/modal';
import { ThemeContext, THEMES } from './contexts/ThemeContext';



//styled-componentsでCSS実装---------------------------------------------------------------------------------------
const Container = styled.div`
    width: 240px;
    border-radius: 10px;
    padding: 24px 36px;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.backgroundColor};
    border: ${ ({theme})  =>  theme === THEMES.dark ? '2px solid white' : 'none' };
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 24px;
`
//End of styled-components---------------------------------------------------------------------------------------


export const FormModal = ({ confirm, cancel }) => {
    const [theme] = useContext(ThemeContext);

    return (
        <Modal>
            <Container theme={theme}>
                <p> Are you sure to add the new language to the existing list? </p>
                <ButtonWrapper>
                    <Button onClick={ cancel }> cancel </Button>
                    <Button onClick={ confirm }> OK </Button>
                </ButtonWrapper>
            </Container>
        </Modal>
    );
};