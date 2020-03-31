import React from 'react';
import ReactDOM from 'react-dom';
// import Lesson from './02_components/Lesson.jsx';

// import CounterButton from './03_state/Lesson.jsx';
// import CounterButton from './04_props/Lesson.jsx';
// import {Lesson, Button, Counter} from './05_props/Lesson.jsx';
// import App from './06_events/Lesson.jsx';
// import App from './07_conditional_rendering/Lesson.jsx';
// import App from './08_lists_and_keys/Lesson.jsx';
import Table from './09_fragments_and_css/Lesson.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Table />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
