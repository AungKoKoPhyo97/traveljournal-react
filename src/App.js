import './App.css';
import NavBar from './components/navbar';
import Body from './components/body'
import travel_data from './data/travel_data'

function App() {
  const travelData = travel_data.map(items => {
    return <Body
      key={items.id}
      {...items}
    />
  })



  return (
    <div className="App">
      <NavBar />
      {travelData}
    </div>
  );
}

export default App;
