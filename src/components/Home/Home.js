import "./Home.css";
import Navigation from "../../Navigation/Navigation";
import logo from "./logo.jpeg";
import student from "./studentLogo.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home">
        <h1 className="heading">
          POTUKUCHI SOMASUNDARA SOCIAL WELFARE AND CHARITABLE TRUST
        </h1>
        <div className="section1">
          <div className="desc">
            <h1 className="heading">About Our Trust</h1>
            <p>
              As it impacted everyone else, the 2020 has been a year of
              challenges and finding solutions for the PSS Trust as well and
              working around Corona Virus our top priority.
            </p>{" "}
            <p>
              {" "}
              The Trust sensed the affect of pandemic that unless children are
              not kept engaged in education and coaching the country will lose
              them back to the poverty cycle and children would then become
              irrelevant for future. We take pride to say that we did not let
              that happen.
            </p>
            <p>
              PSS Trust remained focused on reaching out to children even in the
              most difficult circumstances and are providing love, care and
              education. We are able to do this bit just because of your
              support. We bow to your kind and generous donations and concern to
              make this difference. We couldn’t have done it without you! Thank
              you!!
            </p>
          </div>
          <div className="slide">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className="section2">
          <div className="details">
            <img className="slogo" src={student} alt="logo" />
            <NavLink to="/std-details" className={"details-link "}>
              Check Your Details
            </NavLink>
          </div>
          <div className="details-desc">
            <h1 className="heading">Student Details</h1>
            <p>
              “The man who does not read books has no advantage over the one who
              cannot read them.” —<b>Mark Twain</b>
            </p>
            <p>
              “Education is the passport to the future, for tomorrow belongs to
              those who prepare for it today.” —<b>Malcolm X</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
