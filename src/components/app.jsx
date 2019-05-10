import React from 'react'
import SetForm from '../containers/set-form';
import SetList from '../containers/set-list';
import Nav from '../components/nav';

const App = () => {
  return (
    <React.Fragment>
      <SetForm />
      <SetList />
      <Nav />
    </React.Fragment>
  )
}

export default App