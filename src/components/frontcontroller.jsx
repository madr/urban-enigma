import React from 'react'
import SetForm from '../containers/set-form'
import SetList from '../containers/set-list'
import OneRepMax from '../components/1rm'

export default props => {
  const {
    currentView,
  } = props
  return (
    <React.Fragment>
      {currentView === 'new' && (
        <React.Fragment>
          <SetForm />
          <SetList />
        </React.Fragment>
      )}
      {currentView === '1rm' && (
        <OneRepMax />
      )}
      {currentView === 'history' && (
        <h1>logg</h1>
      )}
    </React.Fragment>
  )
}