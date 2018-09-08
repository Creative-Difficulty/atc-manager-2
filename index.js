import 'milligram';
import './style';
import { Component } from 'preact';
import Router from 'preact-router';
import createHashHistory from 'history/createHashHistory';
import Game from './containers/Game/Game';
import Home from './containers/Home/Home';
import GameStore from './stores/GameStore';
import { EventEmitter } from 'events';
import NotFound from './containers/NotFound/NotFound';
import SavesEditor from './containers/SavesEditor/SavesEditor';

if (typeof window !== 'undefined') {
  window.onbeforeunload = function () {
    return 'You have unsaved progress. Are you sure you want to exit without saving?';
  }
}

export const router = new EventEmitter();
export const history = typeof window !== "undefined" ? createHashHistory() : undefined; // enable pre rendering

export default class App extends Component {
  constructor(props) {
    super();
    // this.setState({

    // });
  }

  render() {
    return (
      <main>
        <Router history={history} onChange={router.emit('change')}>
          <Home path="/" />
          <Game path="/game" />
          <SavesEditor path="/saves-editor" />
          <NotFound default />
        </Router>
      </main>
    );
  }
}
