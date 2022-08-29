import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Header2 from '../../Navbar/Header2';
import Footer from '../../Footer/Footer';

export default class CSR extends Component {
  componentDidMount() {
    document.title = 'Corporate Social Responsibility';
  }

  state = {
    update: true,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  };

  render() {
    return (
      <div>
        <Header2 />
        <div className='op-header'>
          <div className='section-header text-center  section-header1'>
            {/*   <h2 className="f2 c3">Contact us</h2>  */}
            <h1 className='f1 fw-7 cw fontSize1'>Corporate Social Responsibility</h1>
            <h2
              style={{
                color: '#fff',
                fontSize: '2.2rem',
                marginTop: '1rem',
              }}
            >
              Our Contribution to Society
            </h2>
          </div>
        </div>

        {/* Services Starts Here */}
        <div className='cus_container'>
          <div className='project-area clearfix'>
            <div className='row'>
              <div className='col-lg-12 col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2 col-lg-offset-0 project-box'>
                <div className='row'>
                  {/*  <div className="donate f1 fw-7 cw">10% */}
                  {/*  <br />Donated</div>  */}

                  <div className='col-12'>
                    <div className='row'>
                      <div className='col-12'>
                        <h2 className='text-center pt-20 fontSize1'>
                          <b>Krishi Vikas Rath (KVR)</b>
                        </h2>
                        <div className='text-justify' style={{ fontSize: '2rem' }}>
                          <p>
                            <span style={{ marginLeft: '3rem', fontSize: '4rem' }}>
                              <b>M</b>
                            </span>
                            ultiplex Group has been engaged with farmers through a unique program
                            Krishi Vikas Rath (KVR). We intend to operate the program with 17
                            Exclusive Multi utility vehicles equipped with audio and visual aids.
                            The main purpose of Krishi Vikas Rath is to educate and create awareness
                            in analyzing and identifying field problems like nutrient deficiency,
                            pest and disease using field diagnostic tools that are available at
                            their door step. Our subject matter experts also enlighten them on
                            sustainable farming methods and advanced technologies to produce high
                            yields. Krishi Vikas Rath is reaching across the country including
                            Karnataka, Andhra Pradesh, Maharashtra, Uttar Pradesh, Jharkhand, Madhya
                            Pradesh, Punjab, Rajasthan, Orissa, West Bengal, Assam, Bihar and Uttar
                            Pradesh throughout the year.
                          </p>
                        </div>
                      </div>
                      <div className='col-12 mt-30'>
                        <OwlCarousel
                          className='owl-theme lab_imgs'
                          loop
                          margin={10}
                          autoplay
                          autoplayTimeout={3000}
                          responsive={this.state.responsive}
                        >
                          <div className='item'>
                            <img src='img/MULTIPLEX_IMAGES/CSR/14.jpg' alt=""/>
                          </div>
                          <div className='item'>
                            <img src='img/MULTIPLEX_IMAGES/CSR/15.jpg' alt=""/>
                          </div>
                          <div className='item'>
                            <img src='img/MULTIPLEX_IMAGES/CSR/16.jpg' alt=""/>
                          </div>
                          <div className='item'>
                            <img src='img/MULTIPLEX_IMAGES/CSR/17.jpg' alt=""/>
                          </div>
                          <div className='item'>
                            <img src='img/MULTIPLEX_IMAGES/CSR/18.jpg' alt=""/>
                          </div>
                          <div className='item'>
                            <img src='img/MULTIPLEX_IMAGES/CSR/19.jpg' alt=""/>
                          </div>
                          <div className='item'>
                            <img src='img/MULTIPLEX_IMAGES/CSR/20.jpg' alt=""/>
                          </div>
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12 col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2 col-lg-offset-0 project-box'>
                <div className='row'>
                  {/*  <div className="donate f1 fw-7 cw">10% */}
                  {/*  <br />Donated</div>  */}

                  <div className='col-12'>
                    <h2 className='text-center pt-20 fontSize1'>
                      <b>Multiplex Contribution During COVID-19</b>
                    </h2>
                    <div className='' style={{ fontSize: '2rem' }}>
                      <p>
                        <span style={{ fontSize: '4rem' }}>
                          <b>C</b>
                        </span>
                        ontributed Life-Line during Pandemics
                        <br /> <br />
                        There was a huge influence on lives during COVID 19 pandemic and challenges
                        extended on the overall health management systems. The dearth of equipment
                        impacted thousands of lives. Multiplex stretched its arms to contribute to
                        avail oxygen concentrators for the needy.
                        <br /> <br />
                        Multiplex Group acted upon the situation and imported 50 oxygen
                        concentrators of different capacities and supplied them to hospitals,
                        district administrations, jails and public institutions. We wish to be
                        blessed by those who breathed back their life in these tough times!
                        <br /> <br />
                        Contribution to PM Cares and CM Relief Fund
                        <br /> <br />
                        In the recent past, when the country was facing unprecedented challenges
                        with communities and economy by the growing COVID-19 pandemic, we have
                        humbly contributed Rs 10, 00, 000 (Million) to PM cares and Rs 10,00,000 (
                        Million) to CM Relief Fund in Karnataka.
                        <br /> <br />
                        Contribution of Hand Sanitizer and Face Mask
                        <br /> <br />
                        As a strategy to suppress transmission of corona, standard and specified
                        quality face masks are mandate. We have contributed thousands of quality
                        face masks to frontline warriors like medical professionals, police
                        officials, media personnel; essential commodities service staffs and general
                        public.
                        <br /> <br />
                        Washing hands often with soap and water for at least 20 seconds, especially
                        when you have been in public places is recommended by medical professionals
                        to prevent the spread of pandemic. Frontline warriors are more vulnerable to
                        disease spread and with due respect we have contributed thousands of
                        bioorganic hand sanitizer bottles of our patented brand "SHUDDI" (patent
                        no.381950) to them.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <div className='container-fluid' style={{ margin: '2rem auto' }}>
                      <OwlCarousel
                        className='owl-theme lab_imgs'
                        loop
                        margin={10}
                        autoplay
                        autoplayTimeout={3000}
                        responsive={this.state.responsive}
                      >
                        {/* <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/CSR/1.jpg" />
                        </div> */}
                        <div className='item'>
                          <img src='img/MULTIPLEX_IMAGES/CSR/2.jpg' alt=""/>
                        </div>
                        <div className='item'>
                          <img src='img/MULTIPLEX_IMAGES/CSR/3.jpg' alt=""/>
                        </div>
                        <div className='item'>
                          <img src='img/MULTIPLEX_IMAGES/CSR/4.jpg' alt=""/>
                        </div>
                        <div className='item'>
                          <img src='img/MULTIPLEX_IMAGES/CSR/5.jpg' alt=""/>
                        </div>
                        <div className='item'>
                          <img src='img/MULTIPLEX_IMAGES/CSR/6.jpg' alt=""/>
                        </div>
                        <div className='item'>
                          <img src='img/MULTIPLEX_IMAGES/CSR/7.jpg' alt=""/>
                        </div>
                        <div className='item'>
                          <img src='img/MULTIPLEX_IMAGES/CSR/8.jpg' alt=""/>
                        </div>
                        {/* <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/CSR/9.jpg" />
                        </div> */}
                        {/* <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/CSR/10.jpg" />
                        </div> */}
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services ends */}

        <Footer />
      </div>
    );
  }
}
