import React, { useReducer } from 'react';
import '../Styles/App.css';
import AppBar from './AppBar';
import AddIcon from './AddIcon';
import SubsucForm from './SubsucForm';
import SubsucList from './SubsucList';
import reducer from '../reducers'
import SpanningTable from './table';

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="App">
      <AppBar />
      <AddIcon />
      <SubsucForm state={state} dispatch={dispatch} />
      <SubsucList state={state} dispatch={dispatch} />
      <SpanningTable />
    </div>
  );
}

export default App;