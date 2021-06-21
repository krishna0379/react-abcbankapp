export function Footer() {
  return (
    <div className="footer-section" id="footer-control">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 footer-div">
            <div>
              <h3>ABOUT ABC BANK</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 footer-div text-center">
            <div>
              <h3>NAVIGATIONl LINK</h3>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact">Services</a>
              </li>
              <li>
                <a href="/about">Learn</a>
              </li>
              <li>
                <a href="/admin">LOGIN</a>
              </li>
              <li>
                <a href="/admin">REGISTER</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
              <li>
                <a href="/admin">ADMIN</a>
              </li>
              <li>
                <a href="/lad">LAD</a>
              </li>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12 footer-div">
            <div>
              <h3>NEWS LETTER</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="container newsletter-main">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="bg-dark text-light form-control news-input"
                      placeholder="Your Email"
                    />
                    <div className="input-group-append">
                      <span className="text-warning input-group-text">
                        Subscribe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <p>
            Copyright @2020 All right reserved | This template made with love by
            ABCBANK
          </p>
        </div>

        <div className="scrolltop float-right">
          <i className="fa fa-arrow-up" onClick="topFunction()" id="my-btn"></i>
        </div>
      </div>
    </div>
  );
}
