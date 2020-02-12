import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <section className="hero is-dark is-fullheight">
      <Header />
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">
            Title
          </p>
          <p className="subtitle">
            Subtitle
          </p>
        </div>
      </div>
      <Footer />
    </section>
    // <div>
    //   <Hero size="fullheight" color="primary" >
    //     <Hero.Head renderAs="header">
    //       <div className="bd-notification is-info">Header</div>
    //     </Hero.Head>
    //     <Hero.Body>
    //       Body
    //     </Hero.Body>
    //     <Hero.Footer>
    //       <div className="bd-notification is-danger">Footer</div>
    //     </Hero.Footer>
    //   </Hero>
    // </div>
  );
}
