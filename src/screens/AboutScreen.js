import React, { Component } from "react";
import "../components/App.css";
import { Button } from "react-bootstrap";
import Title from "../components/Title";
import profile from "../assets/profile.png";

class AboutScreen extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div className="App">
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Yakubu.</p>
        <Title />
        <p>I am React native and ReactJS engineer.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live California, and I code everyday</p>
            <p>My favorite languate is Javascript, and it is awesome.</p>
            <p>
              Besides coding, I also love to work out and live a healthy
              lifstyle.
            </p>
            <Button variant="dark" onClick={this.toggleDisplayBio}>
              Show less
            </Button>
          </div>
        ) : (
          <div>
            <Button variant="dark" onClick={this.toggleDisplayBio}>
              Read more
            </Button>
          </div>
        )}
      </div>
    );
  }
}

//   return (
//     <div>
//       <h1>AboutScreen</h1>
//       <img src={profile} alt="profile-img" className="Profile-image" />
//       <h1>Hello!</h1>
//       <p>My name is Yakubu.</p>
//       <Title />
//       <p>I am React native and ReactJS engineer.</p>
//     </div>
//   );
// };

export default AboutScreen;
