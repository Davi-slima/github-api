import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import { ResetCss } from './global/resetCss';
import GithubProvider from './providers/githubProvider';

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>

    </main>
  );
}

export default App;
