
import './App.css';
import Account from './app/Account';
import Header from './app/shared/Header';

function App() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-lg-4 offset-lg-4 mt-3">
                <form action="#" method="POST">
                    <div className="card form-Container">
                        <div className="container">
                            <Header />
                            <Account />
                            <p className="text-inverse text-center">Don't have an account? <a style={{textDecoration: "none"}}>Sign Up</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
