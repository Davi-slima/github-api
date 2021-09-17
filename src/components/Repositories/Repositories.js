/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/githubHooks';
import RepositoryItem from '../Repository-item';
import * as S from './styles';

const Repositories = () => {
    const { githubState, getUserRepos } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);

    return (
        <>
            {hasUserForSearchrepos ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            <RepositoryItem
                                name='Davi-slima'
                                linkToRepo='https://github.com/Davi-slima/Davi-slima'
                                fullName='Davi-slima/Davi-slima' />
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                <></>
            )}
        </>
    );
};

export default Repositories;