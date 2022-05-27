import vid from './assets/pexels-cottonbro.mp4';
import Text from './components/Text';


export default function App() {
  return (
    <div className="App">
      <div className='Video'>
          <video width="600" autoPlay muted loop>
            <source src={vid} type="video/mp4" />
          </video>
      </div>
      <Text />
    </div>
  );
}
