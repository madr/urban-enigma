import React from 'react'
import SetForm from '../containers/set-form'
import SetList from '../containers/set-list'

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
        <h1>1rm</h1>
      )}
      {currentView === 'history' && (
        <h1>logg</h1>
      )}
    </React.Fragment>
  )
}