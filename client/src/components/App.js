import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainBody from "./MainBody";
import Awards from "./Footer/Awards";
import ContactUs from "./Footer/ContactUs";
// import SuccessStories from "./Footer/SuccessStories";
import StaticSuccess from "./Footer/StaticSuccess";
import Services from "./Body/Services/Services";
import AddProducts from "./admin/Products/ProductsForm";
import EditProducts from "./admin/Products/EditProducts";
import AllProducts from "./Products/AllProducts";
import AdminHome from "./admin/Home";
import AddProductItems from "./admin/Products/AddProductItems";
import FertilizerForm from "./admin/Products/Fertilizers";
import GrowthForm from "./admin/Products/GrowthPromoters";
import BioForm from "./admin/Products/Bio";
import AdjuvantsForm from "./admin/Products/Adjuvants";
import PesticidesForm from "./admin/Products/Pesticides";
import SeedsForm from "./admin/Products/Seeds";
import SprayersForm from "./admin/Products/Sprayers";
import Fertilizers from "./Products/Fertilizers";
import GrowthPromoters from "./Products/GrowthPromoters";
import Adjuvants from "./Products/Adjuvants";
import Seeds from "./Products/Seeds";
import Sprayers from "./Products/Sprayers";
import BioProducts from "./Products/BioProducts";
import Pesticides from "./Products/Pesticides";
import EDFertilizers from "./admin/Products/EditOrDelete/EDFertilizers";
import About from "./Body/About";
import EDSeeds from "./admin/Products/EditOrDelete/EDSeeds";
import EDAdjuvants from "./admin/Products/EditOrDelete/EDAdjuvants";
import EDBio from "./admin/Products/EditOrDelete/EDBio";
import EDPesticide from "./admin/Products/EditOrDelete/EDPesticides";
import EDGrowth from "./admin/Products/EditOrDelete/EDGrowth";
import EDSprayer from "./admin/Products/EditOrDelete/EDSprayer";
import SignIn from "./Auth/SignIn";
import PrivateRoute from "./privateRouter";
import Subscriptions from "./admin/Subscriptions";
import Enquires from "./admin/Enquires";
import AddTestimonial from "./admin/Testimonials/AddTestimonials";
import TestimonialList from "./admin/Testimonials/TestimonialList";
import LoginDetails from "./Auth/LoginDetails";
import LoginPage from "./Auth/LoginPage";
import Testing from "./testing";
import AddArticle from "./admin/Articles/AddArticle";
import ArticleList from "./admin/Articles/ArticleList";
import Welcome from "./admin/WelcomeBanner/welcome";
import RedirectPage from "./Redirect";
import Careers from "./Body/Careers/Careers";
import CareersForm from "./Body/Careers/CareersForm";
import AppliedCandidates from "./admin/Careers/Applied";
import ApplicantInfo from "./admin/Careers/ApplicantInfo";
import AddCareer from "./admin/Careers/AddCareer";
import NewFertilizers from "./Products/NewFertilizers";
import QuickContact from "./admin/QuickContact";
import Lab from "./Body/Services/Lab";
import FarmingClub from "./Body/Services/FarmingClub";
import Vahini from "./Body/Services/Vahini";
import CSR from "./Body/csr/CSR";
import PheromonesForm from "./admin/Products/Pheromones";
import EDPheromones from "./admin/Products/EditOrDelete/EDPheromones";
import Phermones from "./Products/Phermones";
import Gallery from "./Footer/Gallery";
import CreateGallery from "./admin/Gallery/CreateGallery";
import Infrastructure from "./Body/Infrastructure/Infrastructure";
import Blogs from "./Footer/Blogs";
import ScrollToTop from "./scrollTop";
import Error from "./Error";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={MainBody} />
            <Route path="/awards" exact component={Awards} />
            <Route path="/contact" exact component={ContactUs} />
            {/* <Route path="/success" exact component={SuccessStories} /> */}
            <Route path="/success" exact component={StaticSuccess} />
            <Route path="/services" exact component={Services} />
            <Route path="/mgproducts" exact component={AllProducts} />
            <Route path="/fertilizer" exact component={Fertilizers} />
            <Route path="/growthPromoters" exact component={GrowthPromoters} />
            <Route path="/adjuvants" exact component={Adjuvants} />
            <Route path="/seeds" exact component={Seeds} />
            <Route path="/sprayers" exact component={Sprayers} />
            <Route path="/bioProducts" exact component={BioProducts} />
            <Route path="/pesticides" exact component={Pesticides} />
            <Route path="/about" exact component={About} />
            <Route path="/testing" exact component={Testing} />
            <Route path="/careers" exact component={Careers} />
            <Route path="/newFertilizer" exact component={NewFertilizers} />
            <Route path="/lab" exact component={Lab} />
            <Route path="/farmingClub" exact component={FarmingClub} />
            <Route path="/vahini" exact component={Vahini} />
            <Route path="/csr" exact component={CSR} />
            <Route path="/pheromones" exact component={Phermones} />

            <Route path="/mggallery" exact component={Gallery} />
            <Route path="/infrastructure" exact component={Infrastructure} />
            <Route path="/blogs" exact component={Blogs} />

            {/* <Route path="/careersForm" exact component={CareersForm} /> */}

            {/* admin routes */}
            <Route path="/mgadmin" exact component={SignIn} />
            <Route path="/adminRedirect" exact component={RedirectPage} />
            <PrivateRoute path="/adminHome" exact component={AdminHome} />
            <PrivateRoute
              path="/addProductItems"
              exact
              component={AddProductItems}
            />
            <PrivateRoute path="/editProducts" exact component={EditProducts} />
            <PrivateRoute path="/allProducts" exact component={EditProducts} />
            <PrivateRoute
              path="/fertilizerForm"
              exact
              component={FertilizerForm}
            />
            <PrivateRoute path="/growthForm" exact component={GrowthForm} />
            <PrivateRoute path="/bioForm" exact component={BioForm} />
            <PrivateRoute
              path="/adjuvantsForm"
              exact
              component={AdjuvantsForm}
            />
            <PrivateRoute
              path="/pesticidesForm"
              exact
              component={PesticidesForm}
            />
            <PrivateRoute path="/seedsForm" exact component={SeedsForm} />
            <PrivateRoute
              path="/pheromonesForm"
              exact
              component={PheromonesForm}
            />
            <PrivateRoute path="/sprayersForm" exact component={SprayersForm} />
            <PrivateRoute
              path="/editProducts/:id/:table"
              exact
              component={AddProducts}
            />
            <PrivateRoute
              path="/EDFertilizers"
              exact
              component={EDFertilizers}
            />
            <PrivateRoute path="/EDSeeds" exact component={EDSeeds} />
            <PrivateRoute path="/EDAdjuvants" exact component={EDAdjuvants} />
            <PrivateRoute path="/EDBio" exact component={EDBio} />
            <PrivateRoute path="/EDPesticide" exact component={EDPesticide} />
            <PrivateRoute path="/EDGrowth" exact component={EDGrowth} />
            <PrivateRoute path="/EDSprayer" exact component={EDSprayer} />
            <PrivateRoute
              path="/Subscriptions"
              exact
              component={Subscriptions}
            />
            <PrivateRoute path="/Enquires" exact component={Enquires} />
            <PrivateRoute
              path="/AddTestimonial"
              exact
              component={AddTestimonial}
            />
            <PrivateRoute
              path="/testimonial"
              exact
              component={TestimonialList}
            />
            <PrivateRoute path="/loginDetails" exact component={LoginDetails} />
            <PrivateRoute path="/addArticles" exact component={AddArticle} />
            <PrivateRoute path="/articleList" exact component={ArticleList} />
            <PrivateRoute path="/welcomeBanner" exact component={Welcome} />
            <PrivateRoute
              path="/appliedCandidates"
              exact
              component={AppliedCandidates}
            />
            <PrivateRoute path="/appliedInfo" exact component={ApplicantInfo} />
            <PrivateRoute path="/addCareer" exact component={AddCareer} />
            <PrivateRoute path="/quickContact" exact component={QuickContact} />
            <PrivateRoute path="/EDPheromones" exact component={EDPheromones} />
            <PrivateRoute
              path="/createGallery"
              exact
              component={CreateGallery}
            />
            <Route path="/*" component={Error} />

            {/* <Redirect to="/" /> */}
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
