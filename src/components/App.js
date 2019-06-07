import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { comics }  from '../comics/1.js';

//https://i.ibb.co/yF4Jr7h/lastbutton.png
//https://i.ibb.co/tp4CkJ4/nextarrowpng.png
//https://i.ibb.co/ZVgZYYz/prevarrow.png

class App extends Component {
  state = {
    currentPage: 1
  };

  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this.goToPage = this.goToPage.bind(this);
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }

  goToPage(page) {
    this.setState({ currentPage: page })
  }

  goToPrevPage() {
    const { currentPage } = this.state;
    if (currentPage !== 1) {
      this.goToPage(currentPage-1);
    }
  }

  renderNextButton() {
    const { currentPage } = this.state;
    if (currentPage === 3) {
      return (
        <Col>
          <button style={ {background: 'transparent', border: 0} } href="https://soundcloud.com/totallystraight/sets/marvellous-travelling-band">
            <img style={ {height: '100%', width: '100%', objectFit: 'contain'}} src={"https://i.ibb.co/yF4Jr7h/lastbutton.png"} alt='pepa' />
          </button>
        </Col>
      )
    }
    return (
      <Col>
        <button style={ {background: 'transparent', border: 0} } href="#" onClick={() => this.goToPage(currentPage+1)}>
          <img style={ {height: '100%', width: '100%', objectFit: 'contain'}} src={"https://i.ibb.co/tp4CkJ4/nextarrowpng.png"} alt='pepa' />
        </button>
      </Col>
    )
  }

  getBackgroundColor = () => {
    const { currentPage } = this.state;
    switch(currentPage) {
      case 1:
        return "#ff9400"
      case 2:
        return "#ffec00"
      default:
        return "#ffffff"
    }
  }

  render() {
    const { currentPage } = this.state;
    return (
      <div className="App" style={{ background: this.getBackgroundColor() }}>
        <Container style={ {flex: 1} }>
          <Row>
            <Col style={ {width: "80%"} }>
              <img style={ {height: '100%', width: '100%', objectFit: 'contain'}} src={comics[currentPage].image} alt='pepa' />
            </Col>
          </Row>
          <Row>
            <Col>
              <button style={ {background: 'transparent', border: 0} } href="#" onClick={() => this.goToPrevPage()}>
                <img style={ {height: '100%', width: '100%', objectFit: 'contain'}} src={"https://i.ibb.co/ZVgZYYz/prevarrow.png"} alt='pepa' />
              </button>
            </Col>
            <Col></Col>
            {
              this.renderNextButton()
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
