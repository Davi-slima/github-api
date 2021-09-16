import React from 'react';
import RepositoryItem from '../Repository-item';
import * as S from './styles';

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name='Beer_Stock_project'
                    linkToRepo='https://github.com/Davi-slima/Beer_Stock_project'
                    fullName='Davi-slima/Beer_Stock_project' />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name='Davi-slima'
                    linkToRepo='https://github.com/Davi-slima/Davi-slima'
                    fullName='Davi-slima/Davi-slima' />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>
        </S.WrapperTabs>
    );
}

export default Repositories;