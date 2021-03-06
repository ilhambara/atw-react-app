import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import JoinServer from './pages/JoinServerPage/JoinServer';
import Posts from './pages/PostPage/Post';
import ScrollToTop from './components/ScrollToTop';

class App extends React.Component {

  render() {

    return (
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/joinserver" exact component={JoinServer} />
          <Route path="/blogpost" exact component={Posts} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
