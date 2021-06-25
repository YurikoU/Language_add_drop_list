import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from './components/button';
import { ThemeContext } from './contexts/ThemeContext';


//styled-componentsでCSS実装---------------------------------------------------------------------------------------

//<header>タグを元にした、styledコンポーネントがつくられる。(コンポーネント名：Header)
const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px 64px 0;
    border-bottom: 1px solid #E0E0E0;
`;

const HeaderUl = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const HeaderLi = styled.li`
    list-style: none;
    padding: 4px 12px;
    cursor: pointer;
    // border-bottom：プロパティfocusedが、trueなら'2px solid #F44336'、falseなら'none'。
    border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`;

const HeaderButton = styled(Button)`
    padding: 0;
    margin-bottom: 4px;
`;

//End of styled-components---------------------------------------------------------------------------------------



export const Header = ({ tab, setTab }) => {
    const [theme, toggleTheme] = useContext(ThemeContext);

    return(
        <div>
            <Container>
                <HeaderUl>
                    {/* 関数setTab()がクリックされたら、変数tabの値を、listもしくはformに変更。 */}
                    {/* プロパティfocused： {tab==='list'}が成り立つならtrue、{tab === 'form'}が成り立つならtrue。*/}
                    <HeaderLi focused={tab === 'list'} onClick={ () => setTab('list') }>list</HeaderLi>
                    <HeaderLi focused={tab === 'form'} onClick={ () => setTab('form') }>form</HeaderLi>
                </HeaderUl>
                <HeaderButton onClick={toggleTheme}> Theme </HeaderButton>
            </Container>

        </div>
    );
};