import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Image, Container, Button } from "semantic-ui-react";
import ReactPlayer from 'react-player';
import logo from "./img/play_color.svg";
import store from './img/playstore.png';

const App = () => {
  return (
    <Grid
      stackable
      style={{ height: "100vh", padding: "2rem", backgroundColor: "#FFC300" }}
    >
      <Grid.Row verticalAlign="middle" stretched style={{ height: "100vh" }}>
        <Grid.Column textAlign="right" width={6}>
          <Image
            className="main-logo"
            centered
            style={{ right: 0 }}
            src={logo}
          />
        </Grid.Column>
        <Grid.Column stretched width={10}>
          <Container textAlign="left">
            <h1
              className="title"
              style={{
                fontFamily: "Sail",
                color: "black",
                textDecoration: "underline",
                textDecorationColor: "white"
              }}
            >
              What's the story?
            </h1>
            <div style={{ bottom: 0 }}>
              <p
                style={{
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  color: "black"
                }}
              >
                A project developed by:{" "}
                <a
                  className="profile"
                  href="http://jacobdanovitch.me"
                  style={{ color: "#5187F0" }}
                >
                  <b>Jacob Danovitch</b>
                </a>
                {", "}
                <a
                  className="profile"
                  href="https://github.com/faris"
                  style={{ color: "black" }}
                >
                  <b>Faris Mohamed</b>
                </a>
                {", "}
                <a
                  className="profile"
                  href="https://omarflores.dev"
                  style={{ color: "#8600B6" }}
                >
                  <b>Omar Garcia Flores</b>
                </a>
                {" & "}
                <a
                  className="profile"
                  href="https://github.com/nathanembaye"
                  style={{ color: "#FF351A" }}
                >
                  <b>Nathan Embaye</b>
                </a>
              </p>
              <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                <Image size='small' src={store} href="https://play.google.com/store/apps/details?id=com.vibecheck.vibecheck" />
              </div>
              <p
                className="legend"
                style={{
                  marginTop: '0.1rem',
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                By downloading this application you agree to the fair use of the infomation collected.
              </p>
            </div>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        verticalAlign="middle"
        stretched
        style={{ height: "100vh" }}
        id="about"
      >
        <Grid.Column stretched>
          <Container textAlign="left">
            <div style={{ height: 600 }}>
              <ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=GoZMTgulD_w" />
            </div>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        verticalAlign="middle"
        stretched
        style={{ height: "100vh" }}
        id="about"
      >
        <Grid.Column stretched>
          <Container textAlign="left">
            <h1
              className="title"
              style={{
                fontFamily: "Sail",
                color: "black",
                textDecoration: "underline",
                textDecorationColor: "white"
              }}
            >
              What's vibecheck?
            </h1>
            <div style={{ bottom: 0 }}>
              <p
                style={{
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  fontSize: "2rem",
                  color: "black"
                }}
                className="about"
              >
                Much of the music we listen to is curated on listening behaviour
                of other users, rather than the meaning of the music itself.
                Vibecheck is an application that{" "}
                <b style={{ color: "#000000" }}>
                  recommends music based on your moods and emotions.
                </b>
              </p>
              <p
                style={{
                  fontFamily: "Work Sans",
                  fontWeight: 400,
                  fontSize: "2rem",
                  color: "black"
                }}
                className="about"
              >
                Our goal is to make you able to {" "}
                <b style={{ color: "#FF351A" }}>
                  find music that matches your context
                </b>
                {", "}
                <b style={{ color: "#8600B6" }}>
                  personality
                </b>{", "}
                and {" "}
                <b style={{ color: "#5187F0" }}>
                music that you can relate
                to. 
                </b>
              </p>
              <Button
                className="action-button"
                floated="right"
                style={{
                  width: "18rem",
                  backgroundColor: "black",
                  color: "white",
                  fontFamily: "Work Sans",
                  fontWeight: 300,
                  borderRadius: 0,
                }}
                href="/vibecheck_brand_guide.pdf"
              >
                Our brand guide
              </Button>
            </div>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
