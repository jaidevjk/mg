import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { trackPromise } from 'react-promise-tracker';

import { fetchWelcomeBanner } from '../../../actions/otherActions';

class MainCarousel extends React.Component {
  componentDidMount() {
    // Determine the total amount of images in the carousel.
    let sliderCount = $('#slider').find('.slider-img li img').length;
    // Load images into the carousel
    let sliderImg = $('#slider').find('.slider-img');
    // Define the navigation arrows and pagination bullets.
    let sliderArrow = `<ul class="slider-arrow"><li class="arrow-left" role="button"><i class="fas fa-chevron-left"></i></li><li class="arrow-right" role="button"><i class="fas fa-chevron-right"></i></li></ul>`;
    let sliderDotLi = '';
    for (let i = 0; i < sliderCount; i++) {
      sliderDotLi += `<li><i class="fas fa-circle"></i></li>`;
    }
    let sliderDot = `<ul class="slider-dot">${sliderDotLi}</ul>`;
    $('#slider').append(sliderArrow + sliderDot);

    let activeDefaultCount = $('.slider-dot li.active').length;
    if (activeDefaultCount !== 1) {
      $('.slider-dot li').removeClass().eq(0).addClass('active');
    }
    let sliderIndex = $('.slider-dot li.active').index();
    sliderImg.css('left', -sliderIndex * 100 + '%');

    // switch between images
    function sliderPos() {
      sliderImg.css('left', -sliderIndex * 100 + '%');
      $('.slider-dot li').removeClass().eq(sliderIndex).addClass('active');
    }

    $('.arrow-right').click(function () {
      sliderIndex >= sliderCount - 1 ? (sliderIndex = 0) : sliderIndex++;
      sliderPos();
    });

    $('.arrow-left').click(function () {
      sliderIndex <= 0 ? (sliderIndex = sliderCount - 1) : sliderIndex--;
      sliderPos();
    });

    $('.slider-dot li').click(function () {
      sliderIndex = $(this).index();
      sliderPos();
    });

    let goSlider = setInterval(() => {
      $('.arrow-right').click();
    }, 35000);

    $('#slider').on({
      mouseenter: () => {
        clearInterval(goSlider);
      },
      mouseleave: () => {
        goSlider = setInterval(() => {
          $('.arrow-right').click();
        }, 8000);
      },
    });

    // Welcome banner
    $('.welcome_banner').on('click', function () {
      sessionStorage.setItem('welcome', JSON.stringify(1));
      $(this).fadeOut('slow');
    });

    // Welcome banner fetching
    trackPromise(this.props.fetchWelcomeBanner());
  }

  renderWelcomeBanner() {
    if (this.props.welcome.length === 1) {
      if (!sessionStorage.getItem('welcome')) {
        return (
          <div className='loading-indicator '>
            <div className='welcome_banner_align'>
              <img src={this.props.welcome.length === 1 ? this.props.welcome[0].image : null} alt=""/>
              <button>Close</button>
            </div>
          </div>
        );
      } else {
        return;
      }
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <div className='main_slider'>
          <div className='slider-wrapper' id='slider'>
            <ul className='slider-img'>
              <li>
                <video src='./video/Banner.mp4' autoPlay muted loop></video>
              </li>
              <li>
                <img src='./img/MULTIPLEX_IMAGES/carousel4.png' alt='' />
              </li>
              <li>
                <img src='./img/MULTIPLEX_IMAGES/carosel5.png' alt='' />
              </li>
              <li>
                <img
                  src='https://urbangreen-images.s3.ap-south-1.amazonaws.com/carosel5.png'
                  alt=''
                />
              </li>
            </ul>
          </div>
        </div>

        <div className='welcome_banner '>{this.renderWelcomeBanner()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    welcome: state.welcome,
  };
};

export default connect(mapStateToProps, {
  fetchWelcomeBanner,
})(MainCarousel);




// import React from 'react';
// import $ from 'jquery';
// import { connect } from 'react-redux';
// import { trackPromise } from 'react-promise-tracker';

// import { fetchWelcomeBanner } from '../../../actions/otherActions';

// class MainCarousel extends React.Component {
//   componentDidMount() {
//     // Determine the total amount of images in the carousel.
//     let sliderCount = $('#slider').find('.slider-img li img').length;
//     // Load images into the carousel
//     let sliderImg = $('#slider').find('.slider-img');
//     // Define the navigation arrows and pagination bullets.
//     let sliderArrow = `<ul class="slider-arrow"><li class="arrow-left" role="button"><i class="fas fa-chevron-left"></i></li><li class="arrow-right" role="button"><i class="fas fa-chevron-right"></i></li></ul>`;
//     let sliderDotLi = '';
//     for (let i = 0; i < sliderCount; i++) {
//       sliderDotLi += `<li><i class="fas fa-circle"></i></li>`;
//     }
//     let sliderDot = `<ul class="slider-dot">${sliderDotLi}</ul>`;
//     $('#slider').append(sliderArrow + sliderDot);

//     let activeDefaultCount = $('.slider-dot li.active').length;
//     if (activeDefaultCount !== 1) {
//       $('.slider-dot li').removeClass().eq(0).addClass('active');
//     }
//     let sliderIndex = $('.slider-dot li.active').index();
//     sliderImg.css('left', -sliderIndex * 100 + '%');

//     // switch between images
//     function sliderPos() {
//       sliderImg.css('left', -sliderIndex * 100 + '%');
//       $('.slider-dot li').removeClass().eq(sliderIndex).addClass('active');
//     }

//     $('.arrow-right').click(function () {
//       sliderIndex >= sliderCount - 1 ? (sliderIndex = 0) : sliderIndex++;
//       sliderPos();
//     });

//     $('.arrow-left').click(function () {
//       sliderIndex <= 0 ? (sliderIndex = sliderCount - 1) : sliderIndex--;
//       sliderPos();
//     });

//     $('.slider-dot li').click(function () {
//       sliderIndex = $(this).index();
//       sliderPos();
//     });

//     let goSlider = setInterval(() => {
//       $('.arrow-right').click();
//     }, 35000);

//     $('#slider').on({
//       mouseenter: () => {
//         clearInterval(goSlider);
//       },
//       mouseleave: () => {
//         goSlider = setInterval(() => {
//           $('.arrow-right').click();
//         }, 8000);
//       },
//     });

//     // Welcome banner
//     $('.welcome_banner').on('click', function () {
//       sessionStorage.setItem('welcome', JSON.stringify(1));
//       $(this).fadeOut('slow');
//     });

//     // Welcome banner fetching
//     trackPromise(this.props.fetchWelcomeBanner());
//   }

//   renderWelcomeBanner() {
//     if (this.props.welcome.length === 1) {
//       if (!sessionStorage.getItem('welcome')) {
//         return (
//           <div class='loading-indicator '>
//             <div class='welcome_banner_align'>
//               <img src={this.props.welcome.length === 1 ? this.props.welcome[0].image : null} alt=""/>
//               <button>Close</button>
//             </div>
//           </div>
//         );
//       } else {
//         return;
//       }
//     } else {
//       return;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div class='main_slider'>
//           <div class='slider-wrapper' id='slider'>
//             <ul class='slider-img'>
//               <li>
//                 <video src='./video/Banner.mp4' autoPlay muted loop></video>
//               </li>
//               <li>
//                 <img src='./img/MULTIPLEX_IMAGES/carousel4.png' alt='' />
//               </li>
//               <li>
//                 <img src='./img/MULTIPLEX_IMAGES/carosel5.png' alt='' />
//               </li>
//               <li>
//                 <img
//                   src='https://urbangreen-images.s3.ap-south-1.amazonaws.com/carosel5.png'
//                   alt=''
//                 />
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className='welcome_banner '>{this.renderWelcomeBanner()}</div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     welcome: state.welcome,
//   };
// };

// export default connect(mapStateToProps, {
//   fetchWelcomeBanner,
// })(MainCarousel);
