import React, { Component } from "react";
import Header2 from "../Navbar/Header2";
import Footer from "./Footer";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { createContact } from "../../actions/otherActions";
import emailjs from "emailjs-com";

class ContactUs extends Component {
  componentDidMount() {
    document.title = "Multiplex Group";
  }

  state = {
    name: "",
    email: "",
    mobile: "",
    message: "",
    department: null,
    state: null,
    address: "",
  };

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.createContact(this.state));
    // console.log(this.state);
    this.setState({
      name: "",
      email: "",
      mobile: "",
      message: "",
      address: "",
    });
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  renderStates() {
    const states = [
      { code: "AN", name: "Andaman and Nicobar Islands" },
      { code: "AP", name: "Andhra Pradesh" },
      { code: "AR", name: "Arunachal Pradesh" },
      { code: "AS", name: "Assam" },
      { code: "BR", name: "Bihar" },
      { code: "CG", name: "Chandigarh" },
      { code: "CH", name: "Chhattisgarh" },
      { code: "DH", name: "Dadra and Nagar Haveli" },
      { code: "DD", name: "Daman and Diu" },
      { code: "DL", name: "Delhi" },
      { code: "GA", name: "Goa" },
      { code: "GJ", name: "Gujarat" },
      { code: "HR", name: "Haryana" },
      { code: "HP", name: "Himachal Pradesh" },
      { code: "JK", name: "Jammu and Kashmir" },
      { code: "JH", name: "Jharkhand" },
      { code: "KA", name: "Karnataka" },
      { code: "KL", name: "Kerala" },
      { code: "LD", name: "Lakshadweep" },
      { code: "MP", name: "Madhya Pradesh" },
      { code: "MH", name: "Maharashtra" },
      { code: "MN", name: "Manipur" },
      { code: "ML", name: "Meghalaya" },
      { code: "MZ", name: "Mizoram" },
      { code: "NL", name: "Nagaland" },
      { code: "OR", name: "Odisha" },
      { code: "PY", name: "Puducherry" },
      { code: "PB", name: "Punjab" },
      { code: "RJ", name: "Rajasthan" },
      { code: "SK", name: "Sikkim" },
      { code: "TN", name: "Tamil Nadu" },
      { code: "TS", name: "Telangana" },
      { code: "TR", name: "Tripura" },
      { code: "UK", name: "Uttarakhand" },
      { code: "UP", name: "Uttar Pradesh" },
      { code: "WB", name: "West Bengal" },
    ];

    return states.map((state) => {
      return <option value={state.name}>{state.name}</option>;
    });
  }

  render() {
    return (
      <div>
        <Header2 />

        <div className="op-header">
          <div className=" section-header  section-header1 text-center">
            <h1 className="f1 fw-7 cw">Contact Us</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Have any questions? We'd love to hear from you.
            </h2>
          </div>
          <div style={{ marginLeft: "10rem !important" }}>
            <button
              type="button"
              className="contact_btn"
              data-toggle="modal"
              data-target="#quickContact"
            >
              Quick Contact
            </button>
          </div>
        </div>
        <div className="container" style={{ margin: "3rem auto" }}>
          <div className="row">
            <div className="col-12 col-md-6">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1yDbT6dEjoIU7p9OGIVnN6bbvjv1L0ZcP&ehbc=2E312F"
                width="100%"
                height="600px"
                title="googlemaps"
              ></iframe>
            </div>
            <div className="col-12 col-md-6 content_flow">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h2 className="fw-7">
                    Head Office
                    <br />
                    <h4>Karnataka Bengaluru</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> Plot No. 180, 1st Main Road, Mahalakshmi
                    Layout Extension Bengaluru.
                    <br />
                    <a href="tel:080 23497464">
                      <b>Phone:</b>
                      <span> 080 23497464</span>
                    </a>
                    <br />
                    <a href="mailto:corporate@multiplexgroup.com">
                      <b>
                        Email: <span>corporate@multiplexgroup.com</span>
                      </b>
                    </a>
                  </p>
                </li>
                <li className="list-group-item">
                  <h2 className="fw-7">
                    Andhra Pradesh
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> Plot No.1,2,3, B&S Complex, Beside SBH Bank,
                    Gurubrahma Nagar, Bellary Road, Kurnool – 518 003
                    <br />
                    <a href="tel:08518 - 259460">
                      <b>Phone:</b>
                      <span> 08518 - 259460</span>
                    </a>
                    <br />
                    <a href="mailto:kurnool@multiplexgroup.com">
                      <b>
                        Email: <span>kurnool@multiplexgroup.com</span>
                      </b>
                    </a>
                  </p>
                </li>
                <li className="list-group-item">
                  <h2 className="fw-7">
                    Assam
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> C/o. Sadana Ware Housing & Agencies Pvt.
                    Ltd., 178, 1st Floor, Rukminigaon, G.S. Road, Guwahati – 781
                    022 Assam
                    <br />
                    <a href="tel:9577812802">
                      <b>Phone:</b>
                      <span> 0361-2339993 / 9577812802 / 9435185686</span>
                    </a>
                    <br />
                    <a href="mailto:guwahati@multiplexgroup.com">
                      Email: <span>guwahati@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Bihar
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> H/O Sri pranay Kumar, Near Kumahrar Railway
                    Crossing, Mehta Building, Sandalpur Road, Patna-800 006,
                    Bihar.
                    <br />
                    <a href="tel:9334542894">
                      <b>Phone:</b>
                      <span>8002688426 / 9334542894 </span>
                    </a>
                    <br />
                    <a href="mailto:patna@multiplexgroup.com">
                      Email: <span>patna@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Chattisgarh
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> R/o – 635, Near Sundar Nagar Gate Mahadev
                    Ghat Road, Raipur – 492 013 Chhattisgarh
                    <br />
                    <a href="tel:9111001032">
                      <b>Phone:</b>
                      <span> 0771-2243959 / 9111001032</span>
                    </a>
                    <a href="mailto:raipur@multiplexgroup.com">
                      Email: <span>raipur@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Gujarat
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> Shed No 15 and 16, Shyam-4 Industrial Hub,
                    Sublaxmi Estate, Near Steel Town, Changodar, Ahmedabad-382
                    213, Gujarat
                    <br />
                    <a href="tel:06356601102">
                      <b>Phone:</b>
                      <span> 06356601102</span>
                    </a>
                    <br />
                    <a href="mailto:ahmedabad@multiplexgroup.com">
                      Email: <span>ahmedabad@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Haryana
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> First Floor, Booth No. 53, New Grain (Anaz)
                    Markets, Hisar – 125 001 Haryana
                    <br />
                    <a href="tel:01662 - 277077">
                      <b>Phone:</b>
                      <span> 01662 - 277077</span>
                    </a>
                    <br />
                    <a href="mailto:hissar@multiplexgroup.com">
                      Email: <span>hissar@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Himachal Pradesh
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> C/o M/s.Park Agri Business Enterprises,
                    Khasra No.427/1, MRF Building, Nariyal Road, Near Siddhartha
                    Enterprises, Dist. Solan, Parwanoo-173220
                    <br />
                    <a href="tel:9418021875">
                      <b>Phone:</b>
                      <span> 9418021875 / 7018041875</span>
                    </a>
                    <br />
                    <a href="mailto:parwanoo@multiplexgroup.com">
                      Email: <span>parwanoo@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Jharkhand
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> C/o Shiv Shakti Trading Co.,Kathitand, Ratu,
                    Ranchi-835 224, Jharkhand
                    <br />
                    <a href="tel:7251423999">
                      <b>Phone:</b>
                      <span> 7251423999 / 7979911540</span>
                    </a>
                    <br />
                    <a href="mailto:patna@multiplexgroup.com">
                      Email: <span>patna@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Karnataka
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4">
                    <b> Address 1:</b>Plot No. 180, 1st Main Road, Mahalakshmi
                    Layout Extension Bengaluru.
                    <a href="tel:080 23214013">
                      <b>Phone:</b>
                      <span> 080 - 23497464</span>
                    </a>
                    <br />
                    <a href="mailto:karnataka@multiplexgroup.com">
                      Email: <span>karnataka@multiplexgroup.com</span>
                    </a>
                    <br />
                    <b>Address 2:</b> Plot No. 6 & 7, Ground Floor, A.P.M.C.
                    Amargol, Hubli – 585 025
                    <br />
                    <a href="tel:7259000775">
                      <b>Phone:</b>
                      <span> 7259000775 / 9945547612</span>
                    </a>
                    <br />
                    <a href="mailto:hubli@multiplexgroup.com">
                      Email: <span>hubli@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Madhya Pradesh
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address 1:</b> No.79, Ground Floor, Scheme No. 94,
                    Eastern Ring Road, Gulab Bagh Colony, Dewas Naka, Indore-452
                    010, Madhya Pradesh.
                    <br />
                    <a href="tel:9285503702">
                      <b>Phone:</b>
                      <span> 9285503702</span>
                    </a>
                    <br />
                    <a href="mailto:indore@multiplexgroup.com">
                      Email: <span>indore@multiplexgroup.com</span>
                    </a>
                    <br />
                    <b>Address 2:</b> khasra No. 405/7, Oriya Basti Road, katngi
                    Bypass Chowk, Jabalpur- 482 001.
                    <br />
                    <b>Phone:</b> 0761-4920495, <br />
                    <a href="tel:9285503745">
                      <b>Phone:</b>
                      <span> 9285503745</span>
                    </a>
                    <br />
                    <a href="mailto:Jabalpur@multiplexgroup.com">
                      Email: <span>Jabalpur@multiplexgroup.com</span>
                    </a>
                    <br />
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Maharashtra
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address 1:</b> No. 2, 1st Floor, 688, Mahesh Chambers,
                    Bibvewadi, Pune Satara Road, Pune – 411 037 Maharashtra
                    <br />
                    <a href="tel:020-24213064/24214168">
                      <b>Phone:</b>
                      <span> 020-24213064/24214168</span>
                    </a>
                    <br />
                    <a href="mailto:pune@multiplexgroup.com">
                      Email: <span>pune@multiplexgroup.com</span>
                    </a>
                  </p>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address 2:</b> C/o Radhakrishna Fibers Pvt. Ltd. F-22,
                    MAIDC Dist Akola, 444001
                    <br />
                    <a href="tel:8055577940">
                      <b>Phone:</b>
                      <span> 8055577940</span>
                    </a>
                    <br />
                    <a href="mailto:akola@multiplexgroup.com">
                      Email: <span>akola@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Odisha
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address: </b> Plot No. 84, Bapuji Nagar, P.S. Capital,
                    Bhubaneshwar – 751 009 Odisha
                    <br />
                    <a href="tel:0674-2597998">
                      <b>Phone:</b>
                      <span> 0674-2597998 / 2597998 / 6451081</span>
                    </a>
                    <br />
                    <a href="mailto:bhubaneshwar@multiplexgroup.com">
                      Email: <span>bhubaneshwar@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Punjab
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> No. 304-C, Model Town, Phase 1,Bathinda –
                    151 001, Punjab
                    <br />
                    <a href="tel:0164-2929285">
                      <b>Phone:</b>
                      <span> 0164-2929285 / 8872800778</span>
                    </a>
                    <br />
                    <a href="mailto:bathinda@multiplexgroup.com">
                      Email: <span>bathinda@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Rajasthan
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address 1:</b> 1st Floor, BS-4, Kukarkheda Anaj Mandi,
                    Sikar Road, Jaipur-302 013, Rajasthan.
                    <br />
                    <a href="tel:09001295106">
                      <b>Phone:</b>
                      <span> 0141-2421260 / 09001295106 / 9571910008</span>
                    </a>
                    <br />
                    <a href="mailto:jaipur@multiplexgroup.com">
                      Email: <span>jaipur@multiplexgroup.com</span>
                    </a>
                    <br />
                    <b>Address 2:</b> 1st Floor, Main Road, Cooperative
                    Industrial State Ltd., Near 100 feet Road, Sri
                    Ganganagar-335 001
                    <br />
                    <a href="tel:9001294545">
                      <b>Phone:</b>
                      <span> 0154-2475767 / 9001294545</span>
                    </a>
                    <br />
                    <a href="mailto:sriganganagar@multiplexgroup.com">
                      Email: <span>sriganganagar@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Tamil Nadu
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> No: 03/1006B, Pugal Nagar,North Kattur,
                    Pappakurichi, Thiruvarambur (Tk), Trichy-620 019
                    <br />
                    <a href="tel:7397731500">
                      <b>Phone:</b>
                      <span> 0431 - 2202300 / 09442202688 / 7397731500</span>
                    </a>
                    <br />
                    <a href="mailto:trichy@multiplexgroup.com">
                      Email: <span>trichy@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Telangana
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> Plot No. 4, Block No. 7, Near Deer Park,
                    Auto Nagar, Hyderabad – 500 070
                    <br />
                    <a href="tel:09000201822">
                      <b>Phone:</b>
                      <span> 040-24021822 / 09000201822</span>
                    </a>
                    <br />
                    <a href="mailto:hyderabad@multiplexgroup.com">
                      Email: <span>hyderabad@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Uttarakhand
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> Plot No. 8, Near city One Colony, BhuraRani
                    Road On 100 Ft Highway, Near Nazara Restaurant, Rudrapur,
                    Dist. U.S. Nagar - 263 153
                    <br />
                    <a href="tel:7827938925">
                      <b>Phone:</b>
                      <span> 7827938925</span>
                    </a>
                    <br />
                    <a href="mailto:kashipur@multiplexgroup.com">
                      Email: <span>kashipur@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Uttar Pradesh
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address 1:</b> Flat No. E-120, Transport Nagar, Near U.P.
                    Transport Corpn.(Lucky Transport), Lucknow – 226 012
                    <br />
                    <a href="tel:0522 - 4003592">
                      <b>Phone:</b>
                      <span> 0522 - 4003592 / 4003021 / 2435891</span>
                    </a>
                    <br />
                    <a href="mailto:lucknow@multiplexgroup.com">
                      Email: <span>lucknow@multiplexgroup.com</span>
                    </a>
                    <br />
                    <b>Address 2:</b> 2nd Floor, SRV Complex, 77, Ambedkar Road,
                    Opp. Nehru Yuba Kendra Ghaziabad – 201 001
                    <br />
                    <a href="tel:7827938922">
                      <b>Phone:</b>
                      <span> 7827938922 </span>
                    </a>
                    <br />
                    <a href="mailto:delhi@multiplexgroup.com">
                      Email: <span>delhi@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    West Bengal
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address 1:</b> No.P-191/A, 2nd Floor, C.I.T Road, Opp.
                    Phulbagan Kali Mandir, Near Gurudas Park, Kolkata – 700 010
                    <br />
                    <a href="tel: 033-23639610">
                      <b>Phone:</b>
                      <span> 033-23639610 / 23639611 / 46050239</span>
                    </a>
                    <br />
                    <a href="mailto:kolkata@multiplexgroup.com">
                      Email: <span>kolkata@multiplexgroup.com</span>
                    </a>{" "}
                    <br />
                    <b>Address 2:</b> 2nd Floor, Punjabi Para Chawk, Shiv Mandir
                    Road, Punjabi Para, Sevoke Road, Siliguri – 734 001 West
                    Bengal
                    <br />
                    <a href="tel:0353-2642212">
                      <b>Phone:</b>
                      <span> 0353-2642212 / 2640113 / 0353-2642215</span>
                    </a>
                    <br />
                    <a href="mailto:siliguri@multiplexgroup.com">
                      Email: <span>siliguri@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>

                <li className="list-group-item">
                  <h2 className="fw-7">
                    Goa
                    <br />
                    <h4>Karnataka Agro Chemicals</h4>
                  </h2>
                  <p className="fw-4" style={{ fontSize: "1.65rem" }}>
                    <b>Address:</b> C/o. NV Eco Enterprises, 691, Ward No 1,
                    Kirpal Dabaltaluka Dharbandora, Goa-403 727
                    <br />
                    <a href="tel:9575757169">
                      <b>Phone:</b>
                      <span> 0832-2462162 / 9575757169</span>
                    </a>
                    <br />
                    <a href="mailto:pune@multiplexgroup.com">
                      Email: <span>pune@multiplexgroup.com</span>
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />

        {/*  Modal */}
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade"
            id="quickContact"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered global_relation"
              // role="document modal-dialog-scrollable" 
              
            >
              <div className="modal-content custom-div">
                <div className="modal-header">
                  <h2
                    className="modal-title d-block w-100 text-center"
                    id="exampleModalLabel"
                  >
                    Qucik Contact
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
                <div className="modal-body mt-4 text-center">
                  <div className="form-group">
                    <input
                      autoComplete="off"
                      required
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      autoComplete="off"
                      required
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Id"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      autoComplete="off"
                      required
                      type="number"
                      className="form-control"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={this.state.mobile}
                      onChange={(e) => {
                        this.setState({ mobile: e.target.value });
                      }}
                    />
                  </div>

                  <select
                    name="department"
                    id="cars"
                    required
                    style={{
                      display: "block",
                      width: "100%",
                      background: "#f5f5f5",
                      padding: "15px",
                      marginBottom: "3rem",
                    }}
                    value={this.state.department}
                    onChange={(e) => {
                      this.setState({ department: e.target.value });
                    }}
                  >
                    <option value="">Select Department</option>
                    <option value="Dealership">Dealership</option>
                    <option vlaue="Technical">Technical</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Others">Others</option>
                  </select>

                  <div className="dropDown">
                    <select
                      name="state"
                      id="states"
                      style={{
                        display: "block",
                        width: "100%",
                        background: "#f5f5f5",
                        padding: "15px",
                        marginBottom: "3rem",
                      }}
                      required
                      value={this.state.state}
                      onChange={(e) => {
                        this.setState({ state: e.target.value });
                      }}
                    >
                      <option value="">Select State</option>
                      {this.renderStates()}
                    </select>
                  </div>

                  <div className="form-group">
                    <textarea
                      type="text"
                      name="address"
                      className="form-control products_input"
                      value={this.state.address}
                      onChange={(e) => {
                        this.setState({ address: e.target.value });
                      }}
                      onKeyDown={this.handleKeyDown}
                      autoComplete="off"
                      placeholder="Address"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <textarea
                      type="text"
                      name="message"
                      className="form-control products_input"
                      value={this.state.message}
                      onChange={(e) => {
                        this.setState({ message: e.target.value });
                      }}
                      required
                      onKeyDown={this.handleKeyDown}
                      autoComplete="off"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success text-left"
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-large"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* modal ends */}
      </div>
    );
  }
}

export default connect(null, { createContact })(ContactUs);
