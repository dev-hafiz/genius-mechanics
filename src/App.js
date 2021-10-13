
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
     <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/service/:bookingId">
            <Booking/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Router path="*">
            <NotFound/>
          </Router>
        </Switch>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
