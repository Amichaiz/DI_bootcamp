import PrintHello  from './components/PrintHello.js';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const MyFunction = () => {
    return <h1>Im component Love React</h1>;
}
const BootstrapCard =() => {
  return(
  <div className="card m-5" style={{width: '30rem'}}>
  <img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title">Bob Dylan</h5>
    <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
    <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
  </div>
</div>
  )
}
  const BootstrapCard1 =({title,imageUrl,buttonLabel,buttonUrl,description}) => {
    return(
    <div className="card m-5" style={{width: '30rem'}}>
    <img className="card-img-top" src={imageUrl} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href={buttonUrl} className="btn btn-primary">{buttonLabel}</a>
    </div>
  </div>
    )
}
const Jumbotron = ({title,description,buttonLabel,buttonURL}) => {
  return (
    <div class="jumbotron m-5">
  <h1 class="display-4">{title}</h1>
  <p class="lead">{description}</p>
  <a class="btn btn-primary btn-lg" href={buttonURL} role="button">{buttonLabel}</a>
</div>
  )
}
  return (
    <>
    <h1>I Love React</h1>
    <PrintHello />
    <MyFunction />
    <BootstrapCard />
    <BootstrapCard1 title='McCartney'
      imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
      buttonLabel='Go to Wikipedia'
      buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
      description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
/>
<Jumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
/>
    </>
  );
}

export default App;
