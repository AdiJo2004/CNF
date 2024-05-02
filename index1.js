//CLASS 
class Car {
    constructor(name) {
      this.brand = name;
    }
    
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  const mycar = new Car("Ford");
  mycar.present();

  //2
  class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();

  //CLASS COMPONENT
  class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }
  
  function Car() {
    return <h2>Hi, I am a Car!</h2>;
  }

  class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car />);

  //TO CHANGE COLOR
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />);

  const Header = () => {
    return (
      <>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }   

  //CLICK COUNTER
  const App = () => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0);
 
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1);
    };
 
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1);
    };
 
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
            }}
        >
            Counter App
            <div
                style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "green",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick1}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick2}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};
 
export default App;

//COUNTER
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

