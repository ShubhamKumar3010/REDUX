import { useSelector } from 'react-redux';
import './App.css';
import { inc , dec } from './states/reducers';
import { useDispatch } from 'react-redux';
function App() {
  //get initial state
  const curState = useSelector((state)=>state.number)
  const dispatch = useDispatch();
  return (
    <>
      <h1>React REDUX</h1>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{curState}</h1>
        <div>
          <button onClick={()=>dispatch(inc(5))}>INC</button>
          <button onClick={()=>dispatch(dec())}>DEC</button>
        </div>
      </div>
    </>
  );
}

export default App;
