import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sendEmail } from "../../actions/otherActions";
import { trackPromise } from "react-promise-tracker";

class Footer extends Component {
  state = { email: "" };

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.sendEmail(this.state));
    this.setState({ email: "" });
  }
  render() {
    return (
      <div>
        {/* <a
          href="https://api.whatsapp.com/send/?phone=919036999422&text&app_absent=0"
          target="_blank"
          
          style={{ position: "fixed", bottom: 20, right: 30, zIndex: 1000 }}
        >
          <img src="img/MULTIPLEX_IMAGES/whatsapp.png" width="50px" alt=""/>
        </a> */}
        {/* The below changes are made to the above lines to eliminate 'target="_blank"
          rel="noopener noreferrer"' error */}
        <a
          href="https://api.whatsapp.com/send/?phone=919036999422&text&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "fixed", bottom: 20, right: 30, zIndex: 1000 }}
        >
          <img src="img/MULTIPLEX_IMAGES/whatsapp.png" width="50px" alt=""/>
        </a>
        <div
          className="footer-middle"
          style={{ "backgroundColor": " whitesmoke", color: "black" }}
        >
          <div
            className="cus_container"
            style={{ "backgroundColor": " whitesmoke", color: "black" }}
          >
            <div
              className="row"
              style={{ "backgroundColor": " whitesmoke", color: "black" }}
            >
              <div className="col-md-6 clearfix mb-sm-50">
                <div className="fooler-col f1">
                  <h2 className="footer-title">company</h2>
                  <ul>
                    <li>
                      {" "}
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      {" "}
                      {/* <a href="#" data-toggle="modal" data-target="#missions">
                        Vision & Mission
                      </a> */}
                      <a href="!#" data-toggle="modal" data-target="#missions">
                        Vision & Mission
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/awards">Awards & Recognitions</a>
                    </li>
                    <li>
                      {" "}
                      <Link to="/contact">Our Branches</Link>
                    </li>
                  </ul>
                </div>

                <div className="fooler-col f1 col-6">
                  <h2 className="footer-title">services</h2>
                  <ul>
                    <li>
                      <Link to="/farmingClub">Multiplex Farmer's Club</Link>
                    </li>
                    <li>
                      <Link to="/vahini">Multiplex Vahini</Link>
                    </li>
                    <li>
                      {/* <a href="#" data-toggle="modal" data-target="#relations">
                        Global Relations
                      </a> */}
                      <a href="!#" data-toggle="modal" data-target="#relations">
                        Global Relations
                      </a>
                    </li>
                    <li>
                      <Link to="/csr">CSR</Link>
                    </li>
                  </ul>
                </div>

                {/*  Modal */}
                <div
                  className="modal fade"
                  id="relations"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  {/* <div
                    className="modal-dialog modal-dialog-centered global_relation modal-lg"
                    role="document modal-dialog-scrollable"
                  > */}
                  <div
                    className="modal-dialog modal-dialog-centered global_relation modal-lg modal-dialog-scrollable"
                    role="document"
                  >
                    <div className="modal-content custom-div">
                      <div className="modal-header">
                        <h2
                          className="modal-title d-block w-100 text-center"
                          id="exampleModalLabel"
                        >
                          GLOBAL RELATIONS
                        </h2>
                        <button
                          type="button"
                          style={{ marginTop: " -40px", marginBottom: " 10px" }}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body mt-4 text-justify modal_body">
                        <p>
                          Multiplex Group inception has been based on such a
                          foundation that works in a keen synergy with global
                          traders. Fortifying the global agenda of sustainable
                          development, Multiplex Founder Dr.G.P.Shetty and
                          Managing Director Mr Mahesh G Shetty has been working
                          tirelessly to purvey the environmental motives and
                          expand the company’s reach to the overseas projects.
                          By uplifting India during the times of its major food
                          crisis, the company has contributed prodigiously
                          towards sustainable farming and uplifting the Indian
                          farming industry.
                          <br />
                          <br />
                          Our efforts are constantly ameliorating global
                          relations and one such illustration is when the
                          Republic of Djibouti, Africa, signed a Memorandum of
                          Understanding (MoU) with Multiplex Group entering into
                          a joint venture, approaching the company to supervise
                          12,000 acres of wheat project, located in Ethiopia,
                          Africa. Implemented with the best of our endeavours,
                          the project was a major success and was well
                          accomplished in time. The project required the local
                          farmers to be handled, which was done responsibly and
                          vigilantly. Continuing for a span of 5 years, the
                          project successfully met its expectations.
                          <br />
                          <br />
                          Yet another bosting overseas prospect came into
                          existence, when we incepted exporting to Sultanate of
                          Oman, Sri Lanka, Thailand, Vietnam and Indonesia in
                          the 1990’s. We further proliferated in 2000 and we
                          began exporting to Mauritius, Malaysia, Bangladesh,
                          China, Nepal, Muscat and Egypt.
                          <br />
                          <br />
                          By the mid of 2009’s, we had already expanded to
                          Djibouti, Ethiopia which can all be owed to the
                          tenacious aspirations and efforts of our Managing
                          Director Mr. Mahesh G. Shetty, Honorary Consulate of
                          the Republic of Djibouti.
                          <br />
                          <br />
                          Additionally, we possess Venezuela, Cyprus, Lebanon,
                          Maldives and Kenya in our trading spectrum since the
                          dawn of 2011. Likewise, Japan continues to be our
                          cardinal trade partner.
                          <br />
                          <br />
                          Our agricultural products have been moving across the
                          vital trading countries and has fortify the situation
                          of the farmers, in real sense. In recognition of our
                          stupendous development manoeuvres and research
                          perpetrated, in 2008, The Fertilizers Association of
                          India (FAI), New Delhi, awarded us for superior
                          quality “Production, Promotion and Marketing of
                          Bio-Fertilizers”.
                          <br />
                          <br />
                          Besides the aforesaid deployments in the trading
                          industry of the agriculture arena, the Multiplex Group
                          continues to serve the overseas farming sector and
                          bestow every possible help to upliftment the farmers
                          and their families. We had incepted with “Multiplex
                          Farmer Happy Farmer” motto and continue to work to
                          uphold the dignity.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-success btn-large"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* modal ends */}

                <div className="fooler-col f1">
                  <h2 className="footer-title">links</h2>
                  <ul>
                    <li>
                      <Link to="/blogs">Blog's & Videos</Link>
                    </li>
                    <li>
                      <a href="/mggallery">Gallery</a>
                    </li>
                    <li>
                      <a href="/success">Success Stories</a>
                    </li>
                    <li>
                      {/* <a href="#" data-toggle="modal" data-target="#payment1">
                        Digital Payment
                      </a> */}
                      <a href="!#" data-toggle="modal" data-target="#payment1">
                        Digital Payment
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 mb-sm-20">
                <div className="footer-contact">
                  <h2 className="footer-title">Head Office</h2>
                  <h3>
                    No. 180, 1st Main Road, <br />
                    Mahalakshmi Layout Extension Bengaluru.
                  </h3>
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i>{" "}
                      <a href="mailto:corporate@multiplexgroup.com">
                        corporate@multiplexgroup.com
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>{" "}
                      <a href="mailto:multiplex@multiplexgroup.com">
                        multiplex@multiplexgroup.com
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-phone-square"></i> 080 23497464
                    </li>
                    <li>
                      <i className="fa fa-phone-square"></i> 080 23494406 /
                      23497360
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 mb-sm-50">
                <div className="footer-contact">
                  <h2 className="footer-title mb-md-0 mb-sm-50 termMargin">
                    Terms And Policies
                  </h2>
                  <ul className="footer_link">
                    {/* Here all href="#" are replaced by href="!#" */}
                    <li>
                      {/* <a href="#" data-toggle="modal" data-target="#terms">
                        Terms of Use
                      </a> */}
                      <a href="!#" data-toggle="modal" data-target="#terms">
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      {/* <a href="#" data-toggle="modal" data-target="#shipping">
                        Shipping Policy
                      </a> */}
                      <a href="!#" data-toggle="modal" data-target="#shipping">
                        Shipping Policy
                      </a>
                    </li>
                    <li>
                      {/* <a href="#" data-toggle="modal" data-target="#privacy">
                        Privacy Policy
                      </a> */}
                        <a href="!#" data-toggle="modal" data-target="#privacy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      {/* <a href="#" data-toggle="modal" data-target="#cancel">
                        Cancellation Policy
                      </a> */}
                      <a href="!#" data-toggle="modal" data-target="#cancel">
                        Cancellation Policy
                      </a>
                    </li>
                    <li>
                      {/* <a href="#" data-toggle="modal" data-target="#refund">
                        Refund Policy
                      </a> */}
                      <a href="!#" data-toggle="modal" data-target="#refund">
                        Refund Policy
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>

              <div
                className="col-md-8 col-lg-push-1"
                style={{ marginTop: "1rem" }}
              >
                <div className="footer-contact f1">
                  <form action="" onSubmit={this.onSubmit.bind(this)}>
                    <div className="row">
                      <div className="col-md-5">
                        <h2
                          className="footer-title"
                          style={{ textAlign: "right", marginTop: "0.5rem" }}
                        >
                          Subscribe For Newsletter
                        </h2>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          value={this.state.email}
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                          autoComplete="off"
                          required
                          style={{ padding: "0rem 1rem", height: "45px" }}
                        />
                      </div>
                      <div
                        className="col-md-2"
                        style={{ marginBottom: "1rem", marginTop: "-1rem" }}
                      >
                        <input type="submit" value="Submit" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-bottom f1"
          style={{
            textAlign: " center",
            margin: "-2rem 0",
            background: "#111c16",
            paddingBottom: "1rem",
          }}
        >
          <div className="container">
            <p className="float-right" style={{ float: "left" }}>
              © Multiplex Group of Companies 2021
            </p>
            <p className="float-right" style={{ float: "right" }}>
              Powered by &nbsp;
              {/* <a
                href="https://techravensolutions.com"
                target="_blank"
              > */}
                {/* The below changes are made to the above lines to eliminate 'target="_blank"
                    rel="noopener noreferrer"' error */}
                <a
                href="https://techravensolutions.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="img/MULTIPLEX_IMAGES/logo.png"
                  alt="logo"
                  height="12px"
                />
              </a>
            </p>
          </div>
        </div>

        {/* <!-- Modal 7  --> */}
        <div
          className="modal fade groups"
          id="missions"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Vision & Mission
                </h2>
                <button
                  type="button"
                  style={{ marginTop: " -40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body modal_body">
                <div className="row">
                  <div className="col-md-4 col-12 text-center">
                    <h3>
                      <b>WHO WE ARE.</b>
                    </h3>
                    <hr />
                    <p className="text-left">
                      We are an ISO 9001 and ISO 14001 certified company known
                      for their quality standards. Both our Bio-Fertilizers and
                      Bio-Pesticides are certified by IMO Switzerland for use in
                      organic farming.
                    </p>
                  </div>
                  <div className="col-md-4 col-12 text-center">
                    <h3>
                      <b>OUR MISSION.</b>
                    </h3>
                    <hr />
                    <p className="text-left">
                      To be the most preferred Quality Agro Input manufacturer
                      and supplier, as well as “Total Solution Provider” to
                      improve – Overall soil health, crop productivity and
                      quality of the produce.
                    </p>
                  </div>
                  <div className="col-md-4 col-12 text-center">
                    <h3>
                      <b>WHAT WE DO.</b>
                    </h3>
                    <hr />
                    <p className="text-left">
                      We are one of the leading manufacturers, marketers and
                      exporters of Micro Nutrients, Organic Manure,
                      Bio-Fertilizers, Bio-Pesticides, and Bio-activators in
                      India.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4 col-12 text-center">
                    <h3>
                      <b>OUR VISION.</b>
                    </h3>
                    <hr />
                    <p className="text-left">
                      Our progress is through innovative products and services
                      to the farming community.
                    </p>
                  </div>
                  <div className="col-md-4 col-12 text-center">
                    <h3>
                      <b>OUR VALUES.</b>
                    </h3>
                    <hr />
                    <p className="text-left">
                      Integrity, Quality and Trust,Transparency, Commitment,
                      Relationship, Innovation
                    </p>
                  </div>
                  <div className="col-md-4 col-12 text-center">
                    <h3>
                      <b>OUR MOTTO.</b>
                    </h3>
                    <hr />
                    <p className="text-left">Multiplex Farmer Happy Farmer.</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal footer ends --> */}

        {/* <!-- Modal 7  --> */}
        <div
          className="modal fade groups"
          id="terms"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Terms of Use
                </h2>
                <button
                  type="button"
                  style={{ marginTop: " -40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body modal_body">
                <p>
                  Please read these terms carefully before using the online
                  payment facility. Using the online payment facility on this
                  website indicates that you accept these terms. If you do not
                  accept these terms do not use this facility.
                  <br />
                  All payments are subject to the following conditions:-
                  <br />
                  All amounts quoted are in Indian Rupees.
                  <br />
                  Your payment will normally reach the KARNATAKA AGRO CHEMICALS
                  account to which you are making a payment within two working
                  days.
                  <br />
                  We cannot accept liability for a payment not reaching the
                  correct KARNATAKA AGRO CHEMICALS account due to you quoting an
                  incorrect account number, incorrect personal details,
                  incorrect VPA, incorrect QR code etc. Neither can we accept
                  liability if payment is refused or declined by the
                  credit/debit card supplier/UPI etc for any reason.
                  <br />
                  If the card supplier/UPI etc declines payment the KARNATAKA
                  AGRO CHEMICALS is under no obligation to bring this fact to
                  your attention. You should check with your
                  bank/UPI/credit/debit card supplier that payment has been
                  deducted from your account.
                  <br />
                  In no event will the KARNATAKA AGRO CHEMICALS be liable for
                  any damages whatsoever arising out of the use, inability to
                  use, or the results of use of this site, any websites linked
                  to this site, or the materials or information contained at any
                  or all such sites, whether based on warranty, contract, tort
                  or any other legal theory and whether or not advised of the
                  possibility of such damages.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal footer ends --> */}

        {/* <!-- Modal 7  --> */}
        <div
          className="modal fade groups"
          id="shipping"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Shipping Policy
                </h2>
                <button
                  type="button"
                  style={{ marginTop: " -40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body modal_body">
                <p>
                  Online Payments
                  <br />
                  All amounts quoted are in Indian Rupees. Your payment will
                  normally reach the KARNATAKA AGRO CHEMICALS account to which
                  you are making a payment within two working days. We cannot
                  accept liability for a payment not reaching the correct
                  KARNATAKA AGRO CHEMICALS account due to you quoting an
                  incorrect account number, incorrect personal details,
                  incorrect VPA, incorrect QR code etc. Neither can we accept
                  liability if payment is refused or declined by the
                  credit/debit card supplier/UPI etc for any reason. If the card
                  supplier/UPI etc declines payment the KARNATAKA AGRO CHEMICALS
                  is under no obligation to bring this fact to your attention.
                  You should check with your bank/UPI/credit/debit card supplier
                  that payment has been deducted from your account. In no event
                  will the KARNATAKA AGRO CHEMICALS be liable for any damages
                  whatsoever arising out of the use, inability to use, or the
                  results of use of this site, any websites linked to this site,
                  or the materials or information contained at any or all such
                  sites, whether based on warranty, contract, tort or any other
                  legal theory and whether or not advised of the possibility of
                  such damages.
                  <br />
                  <br />
                  Refund Policy <br />
                  No refunds will be processed through the website. In case of
                  any dispute, you would need to contact the concerned in
                  KARNATAKA AGRO CHEMICALS for redressal.
                  <br />
                  <br />
                  Security <br />
                  All payment details which are entered through this payment
                  gateway are encrypted when the Customer, or third party making
                  payment, enters them. Communications to and from the Service
                  Provider's site are encrypted.
                  <br />
                  The KARNATAKA AGRO CHEMICALS shall not be liable for any
                  failure by the Customer or third party making payment to
                  properly protect data from being seen on their screen by other
                  persons or otherwise obtained by such persons, during the
                  online payment process or in respect of any omission to
                  provide accurate information in the course of the online
                  payment process.
                  <br />
                  Service Provider <br />
                  Online Payments can be made by Credit / Rupay Debit card/ UPI/
                  UPI QR code. These payments are not collected by the KARNATAKA
                  AGRO CHEMICALS directly but by the Service Provider.
                  <br />
                  Once payment is received by the Service Provider in cleared
                  funds, the Service Provider will contact the KARNATAKA AGRO
                  CHEMICALS to confirm the details of the successful payment
                  made by the Customer, or third party making payment. On
                  receipt of this confirmation the KARNATAKA AGRO CHEMICALS will
                  update its records pertaining to the relevant Customer that
                  the payment has been received and accepted by the KARNATAKA
                  AGRO CHEMICALS. It is the responsibility of the Customer to
                  check with the KARNATAKA AGRO CHEMICALS that the payment has
                  been accepted. The Customer shall remain responsible for the
                  payment until such time as the confirmation as referred to
                  above is received from the KARNATAKA AGRO CHEMICALS in
                  relation to each of these and any outstanding amounts owed to
                  the KARNATAKA AGRO CHEMICALS.
                  <br />
                  Privacy Policy <br />
                  This Privacy Policy applies to all of the products, services
                  and websites offered by KARNATAKA AGRO CHEMICALS. Sometimes,
                  we may post product specific privacy notices or Help Centre
                  materials to explain our products in more detail.
                  <br />
                  Information we collect will be used for our KARNATAKA AGRO
                  CHEMICALS (including group entities and affiliates) business
                  purposes only.
                  <br />
                  Website Detail: <br />
                  Entire content of the website has been gathered to the best of
                  our knowledge and belief, and the company endeavours to keep
                  it up to date. In particular, we reserve the entire right to
                  update and/or modify and/or remove this data anytime and
                  without any prior notice. Please note that the KARNATAKA AGRO
                  CHEMICALS holds no responsibility for incorrect or no longer
                  correct statements, quotes or descriptions and thereby
                  excludes liability for any losses resulting from such wrong
                  information.
                  <br />
                  Further, KARNATAKA AGRO CHEMICALS has every right to bring
                  about legal action on customers who misuse/alter/reproduce the
                  content/ information available on the website without
                  obtaining prior written permission from KARNATAKA AGRO
                  CHEMICALS.
                  <br />
                  Data Privacy Policy <br />
                  Our data privacy policy strictly conforms as per the
                  regulations set down in accordance to the protection of data
                  collected from people visiting our website. KARNATAKA AGRO
                  CHEMICALS treats all personal data obtained via internet and
                  our website carefully and confidentially so that no
                  physical/mental harm is instilled up on the person, with
                  regard to the collected data . Personal data that has possibly
                  been known to us will be kept secret, privacy will be
                  respected and information will be used exclusively for the
                  purpose for which it was made known to us. Without seeking
                  approval of the respective person, this data will neither be
                  made accessible to third parties, nor transferred to them in
                  any form or manner.
                  <br />
                  Changes to our Privacy Policy <br />
                  KARNATAKA AGRO CHEMICALS reserves the entire right to
                  modify/amend/remove this privacy statement anytime and without
                  any reason. Nothing contained herein creates or is intended to
                  create a contract/agreement between KARNATAKA AGRO CHEMICALS
                  and any user visiting the KARNATAKA AGRO CHEMICALS website or
                  providing identifying information of any kind.
                  <br />
                  DND Policy <br />
                  If you wish to stop any further sms/email alerts/contacts from
                  our side, all you need to do is to send an email:
                  multiplex@multiplexgroup.com with your mobile numbers and you
                  will be excluded from the alerts list. However, please note
                  that by doing so, you are solely responsible for any risks
                  arising out of missing any crucial information/alerts.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal footer ends --> */}

        {/* <!-- Modal 7  --> */}
        <div
          className="modal fade groups"
          id="privacy"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Privacy Policy
                </h2>
                <button
                  type="button"
                  style={{ marginTop: " -40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <p>
                  Privacy Policy This Privacy Policy applies to all of the
                  products, services and websites offered by KARNATAKA AGRO
                  CHEMICALS. Sometimes, we may post product specific privacy
                  notices or Help Centre materials to explain our products in
                  more detail.
                  <br />
                  <br />
                  Information we collect will be used for our KARNATAKA AGRO
                  CHEMICALS (including group entities and affiliates) business
                  purposes only.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal footer ends --> */}
        {/* <!-- Modal 7  --> */}
        <div
          className="modal fade groups"
          id="refund"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Refund Policy
                </h2>
                <button
                  type="button"
                  style={{ marginTop: " -40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <p>
                  No refunds will be processed through the website. In case of
                  any dispute, you would need to contact the concerned in
                  KARNATAKA AGRO CHEMICALS for redressal.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal footer ends --> */}

        {/* <!-- Modal 7  --> */}
        <div
          className="modal fade groups"
          id="cancel"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Cancellation Policy
                </h2>
                <button
                  type="button"
                  style={{ marginTop: " -40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body modal_body">
                <p>
                  Online Payments
                  <br /> <br />
                  All amounts quoted are in Indian Rupees.
                  <br />
                  Your payment will normally reach the KARNATAKA AGRO CHEMICALS
                  account to which you are making a payment within two working
                  days. We cannot accept liability for a payment not reaching
                  the correct KARNATAKA AGRO CHEMICALS account due to you
                  quoting an incorrect account number, incorrect personal
                  details, incorrect VPA, incorrect QR code etc. Neither can we
                  accept liability if payment is refused or declined by the
                  credit/debit card supplier/UPI etc for any reason. If the card
                  supplier/UPI etc declines payment the KARNATAKA AGRO CHEMICALS
                  is under no obligation to bring this fact to your attention.
                  You should check with your bank/UPI/credit/debit card supplier
                  that payment has been deducted from your account. In no event
                  will the KARNATAKA AGRO CHEMICALS be liable for any damages
                  whatsoever arising out of the use, inability to use, or the
                  results of use of this site, any websites linked to this site,
                  or the materials or information contained at any or all such
                  sites, whether based on warranty, contract, tort or any other
                  legal theory and whether or not advised of the possibility of
                  such damages.
                  <br />
                  <br />
                  Refund Policy
                  <br />
                  No refunds will be processed through the website.
                  <br />
                  In case of any dispute, you would need to contact the
                  concerned in KARNATAKA AGRO CHEMICALS for redressal.
                  <br />
                  <br />
                  Security
                  <br />
                  All payment details which are entered through this payment
                  gateway are encrypted when the Customer, or third party making
                  payment, enters them. Communications to and from the Service
                  Provider's site are encrypted.
                  <br />
                  The KARNATAKA AGRO CHEMICALS shall not be liable for any
                  failure by the Customer or third party making payment to
                  properly protect data from being seen on their screen by other
                  persons or otherwise obtained by such persons, during the
                  online payment process or in respect of any omission to
                  provide accurate information in the course of the online
                  payment process.
                  <br />
                  Service Provider
                  <br />
                  Online Payments can be made by Credit / Rupay Debit card/ UPI/
                  UPI QR code. These payments are not collected by the KARNATAKA
                  AGRO CHEMICALS directly but by the Service Provider.
                  <br />
                  Once payment is received by the Service Provider in cleared
                  funds, the Service Provider will contact the KARNATAKA AGRO
                  CHEMICALS to confirm the details of the successful payment
                  made by the Customer, or third party making payment. On
                  receipt of this confirmation the KARNATAKA AGRO CHEMICALS will
                  update its records pertaining to the relevant Customer that
                  the payment has been received and accepted by the KARNATAKA
                  AGRO CHEMICALS. It is the responsibility of the Customer to
                  check with the KARNATAKA AGRO CHEMICALS that the payment has
                  been accepted. The Customer shall remain responsible for the
                  payment until such time as the confirmation as referred to
                  above is received from the KARNATAKA AGRO CHEMICALS in
                  relation to each of these and any outstanding amounts owed to
                  the KARNATAKA AGRO CHEMICALS.
                  <br />
                  Privacy Policy
                  <br />
                  This Privacy Policy applies to all of the products, services
                  and websites offered by KARNATAKA AGRO CHEMICALS. Sometimes,
                  we may post product specific privacy notices or Help Centre
                  materials to explain our products in more detail.
                  <br />
                  Information we collect will be used for our KARNATAKA AGRO
                  CHEMICALS (including group entities and affiliates) business
                  purposes only.
                  <br />
                  Website Detail:
                  <br />
                  Entire content of the website has been gathered to the best of
                  our knowledge and belief, and the company endeavours to keep
                  it up to date. In particular, we reserve the entire right to
                  update and/or modify and/or remove this data anytime and
                  without any prior notice. Please note that the KARNATAKA AGRO
                  CHEMICALS holds no responsibility for incorrect or no longer
                  correct statements, quotes or descriptions and thereby
                  excludes liability for any losses resulting from such wrong
                  information.
                  <br />
                  Further, KARNATAKA AGRO CHEMICALS has every right to bring
                  about legal action on customers who misuse/alter/reproduce the
                  content/ information available on the website without
                  obtaining prior written permission from KARNATAKA AGRO
                  CHEMICALS.
                  <br />
                  Data Privacy Policy
                  <br />
                  Our data privacy policy strictly conforms as per the
                  regulations set down in accordance to the protection of data
                  collected from people visiting our website. KARNATAKA AGRO
                  CHEMICALS treats all personal data obtained via internet and
                  our website carefully and confidentially so that no
                  physical/mental harm is instilled up on the person, with
                  regard to the collected data . Personal data that has possibly
                  been known to us will be kept secret, privacy will be
                  respected and information will be used exclusively for the
                  purpose for which it was made known to us. Without seeking
                  approval of the respective person, this data will neither be
                  made accessible to third parties, nor transferred to them in
                  any form or manner.
                  <br />
                  Changes to our Privacy Policy
                  <br />
                  KARNATAKA AGRO CHEMICALS reserves the entire right to
                  modify/amend/remove this privacy statement anytime and without
                  any reason. Nothing contained herein creates or is intended to
                  create a contract/agreement between KARNATAKA AGRO CHEMICALS
                  and any user visiting the KARNATAKA AGRO CHEMICALS website or
                  providing identifying information of any kind.
                  <br />
                  DND Policy
                  <br />
                  If you wish to stop any further sms/email alerts/contacts from
                  our side, all you need to do is to send an email:
                  multiplex@multiplexgroup.com with your mobile numbers and you
                  will be excluded from the alerts list. However, please note
                  that by doing so, you are solely responsible for any risks
                  arising out of missing any crucial information/alerts.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal footer ends --> */}

        {/* payment modal */}
        <div
          className="modal fade"
          id="payment1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
        >
          <div
            className="modal-dialog modal-dialog-centered payment_modal"
            role="document"
          >
            <div className="modal-content custom-div ">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  UPI PAYMENT
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mt-4 text-center">
                <div className="row">
                  <img
                    src="img/MULTIPLEX_IMAGES/upi_payment.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* payment modal ends */}
      </div>
    );
  }
}

export default connect(null, { sendEmail })(Footer);
