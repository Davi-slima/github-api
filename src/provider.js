import React from 'react';
import App from './App';
import { ResetCss } from './global/resetCss';
import GithubProvider from './providers/githubProvider';

const provider = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCss />
                <App />
            </GithubProvider>
        </main>
    )
}

export default provider
