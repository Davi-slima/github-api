import Layout from './components/Layout';
import NoSearch from './components/No-search/NoSearch';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import useGithub from "./hooks/githubHooks";

const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;