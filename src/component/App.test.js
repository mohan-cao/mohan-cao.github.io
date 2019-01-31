import React from 'react';
import ReactDOM from 'react-dom';
import App, { fetchNewProfile } from './App';

function checkValidProfile(json) {
  expect(json).toHaveProperty('tagline');
  expect(json).toHaveProperty('work_experience');
  expect(json).toHaveProperty('education');
  expect(json).toHaveProperty('contact');
  expect(json).toHaveProperty('skills');
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('fetches latest info', () => {
  return fetchNewProfile().then(checkValidProfile);
})