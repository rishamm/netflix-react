
import './App.css';
import Baner from './Components/Baner/Baner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {action,original,comedy,horror,romance,documentaries} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Baner /> 
      <RowPost title="Netflix Orginal" url={original}/>
      <RowPost  title="Actions" isSmall url={action} />
      <RowPost  title="Comedy Movies" isSmall url={comedy} />
      <RowPost  title="Horror Movies" isSmall url={horror} />
      <RowPost  title="Romance Movies" isSmall url={romance} />
      <RowPost  title="Documentaries" isSmall url={documentaries} />
    </div>
  );
}

export default App;
