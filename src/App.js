import Layout from './components/Layout';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src='https://avatars.githubusercontent.com/u/79462616?v=4' alt='Profile img' />
          <h1>Davi-SLima</h1>
          <h3>Username: </h3>
          <span>Davi Lima</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>7</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>2</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>3</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
