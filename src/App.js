import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import { ResetCss } from './global/resetCss';

const App = () => {
  return (
    <main>
      <ResetCss />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
