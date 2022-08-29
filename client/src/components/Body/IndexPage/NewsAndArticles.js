// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { trackPromise } from "react-promise-tracker";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// import { fetchArticles } from "../../../actions/otherActions";

// class NewsAndArticles extends Component {
//   state = {
//     update: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       450: {
//         items: 2,
//       },
//       600: {
//         items: 3,
//       },
//     },
//   };
//   componentDidMount() {
//     trackPromise(this.props.fetchArticles());
//     this.setState({ update: false });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.update !== prevState.update) {
//       trackPromise(this.props.fetchArticles());
//     }
//   }

//   renderArticles() {
//     return this.props.articles.map((article) => {
//       return (
//         <div className="item" key={article._id}>
//           <img src={article.image} />
//           <div class="blog-text">
//             <div class="date f1 bg3">
//               <p class="fw-6">{article.month}</p>
//               <p class="fw-7">{article.date}</p>
//             </div>
//             <a class="title f1 fw-7 cw">
//               <span>{article.description}</span>
//             </a>
//           </div>
//         </div>
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         {/* News and articles */}
//         <div className="blog" style={{ zIndex: 2 }} id="newsAndArticles">
//           <div className="container">
//             <div className="section-header text-center">
//               <h2 className="f2 c1">News & Articles</h2>
//               <h1 className="f1 fw-7 c4">Recent posts and updates</h1>
//             </div>
//             <OwlCarousel
//               className="owl-theme"
//               loop
//               margin={10}
//               autoplay
//               autoplayTimeout={3000}
//               responsive={this.state.responsive}
//             >
//               {this.renderArticles()}
//             </OwlCarousel>
//           </div>
//         </div>
//         {/* News and articles ends */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     articles: state.articles,
//   };
// };

// export default connect(mapStateToProps, { fetchArticles })(NewsAndArticles);
