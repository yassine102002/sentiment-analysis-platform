import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center mb-4 title">About SAP</h1>
          <p className="lead text-center">
            Welcome to SAP (Sentiment Analysis Platform), your go-to tool for analyzing social media sentiment!
          </p>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Our Mission</h2>
              <p className="card-text">
                At SAP, we aim to help businesses and individuals understand public sentiment by analyzing social media posts.
                Our platform provides insights into how people feel about products, brands, and trends on platforms like
                Facebook, Instagram, and Twitter.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">How It Works</h2>
              <p className="card-text">
                Simply paste a link to a social media post, and our advanced AI algorithms will analyze the text to determine
                whether the sentiment is positive, negative, or neutral. You can also view detailed analytics and trends in
                the dashboard.
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Why Choose SAP?</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Accurate sentiment analysis powered by AI.</li>
                <li className="list-group-item">Easy-to-use interface for seamless navigation.</li>
                <li className="list-group-item">Support for multiple social media platforms.</li>
                <li className="list-group-item">Detailed analytics and reporting.</li>
              </ul>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Meet the Team</h2>
              <div className="row">
                <div className="col-md-4 text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Team Member"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <h5>Yassine</h5>
                  <p>Founder & Developer</p>
                </div>
                <div className="col-md-4 text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Team Member"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <h5>Haytam el ghbouri</h5>
                  <p>AI Engineer</p>
                </div>
                <div className="col-md-4 text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Team Member"
                    className="img-fluid rounded-circle mb-3"
                  />
                  <h5>aymen haimeur</h5>
                  <p>UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h2>Ready to Get Started?</h2>
            <p>Join SAP today and unlock the power of sentiment analysis!</p>
            <a href="/" className="btn bar-color text-white">
              Analyze Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;