import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'Jashim', 'Salman Shah', 'Riaz']
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>JSX</h1>
    //     <div className="container">
    //       <h3>Hello Dude React . How are you ?</h3>
    //     </div>

    //     <div className="music">
    //       <p>Name : {22 + number}</p>
    //       <p style={singerStyle}>Name : {singer.name} {singer.job}</p>
    //       <p style={{ color: 'blue', backgroundColor: 'yellow' }}>Name : {singer2.name} {singer2.job}</p>
    //     </div>

    //   </header>
    // </div>
    <div className="App">
      {
        nayoks.map(nayok => <li>Name : {nayok}</li>)
      }

      <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person></Person>
      <Person></Person>

      <h5>New Component</h5>
      <p>Rock mama . React Mama</p>
      <Freind phone="09302"></Freind>
      <Freind phone="6546"></Freind>
      <Freind phone="123213"></Freind>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika : {props.nayika}</p>
    </div>
  )
}

function Freind(props) {
  console.log(props)
  return (

    <div className="container">
      <h3>Name : Ajay Devgun</h3>
      <p>Phone : {props.phone}</p>
    </div>
  )
}

export default App;
