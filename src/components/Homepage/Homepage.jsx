import "./Homepage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from '@mui/material/Avatar';
import {
  FaPeopleGroup,
  FaRegHand,
  FaPaperPlane,
  FaUserGroup,
} from "react-icons/fa6";
import { TbLayersSubtract } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";

import {
  faPlay,
  faCalendarDays,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  return (
    <div
      className="homepage"
      style={{ overflowX: "hidden", width: "100%", display: "block" }}
    >
      <div className="header1">
        <div className="header11">
          <div className="header11-left"></div>
          <div className="header11-right">
            <button className="header11-right1" onClick={() => window.location.href = '/login'}>Login</button>
            <button className="header11-right2" onClick={() => window.location.href = '/register'}>Sign Up</button>

          </div>
        </div>
        <div className="header2">
          <div
            className="header2_left"
            style={{ width: "400px", color: "white", marginTop: "100px" }}
          >
            <div>
              <h1 style={{ fontSize: "55px", fontWeight: "800", color: "#ea8a0b", display: "inline" }}>Practicing</h1><h1 style={{ display: "inline", fontSize: "35px", fontWeight: "900", color: "white" }}> Online is now much easier</h1>
              <span style={{ fontSize: "20px", display: "flex", marginTop: "40px" }}>
                SPEAK is an interesting platform that will help you in a more
                interactive way{" "}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <button className="btnTrial">Trial for Free</button>
              <FontAwesomeIcon
                icon={faPlay}
                style={{
                  borderRadius: "100%",
                  width: "25px",
                  height: "25px",
                  color: "#74C0FC",
                  marginLeft: "-8px",
                  padding: "10px 7px 10px 10px",
                }}
                className="btnPlay"
              />
              <button className="btnTrial">What how it work</button>
            </div>
          </div>
          <div className="header2_right">
            <div className="header2_right1">
              <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "#23BDEE"}}>
                <FontAwesomeIcon icon={faCalendarDays} style={{color: "white", padding: "11px 10px 10px 13px"}}/>
              </div>
              <p style={{ fontWeight: "600", lineHeight: "1.2", width: "82px", margin: "0px"}}>1000+ <br /> leaners</p>
            </div>
            <div className="header2_right2">
              <div style={{width: "40px", height: "40px", borderRadius: "10px", background: "#F88C3D"}}>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "white", padding: "11px 10px 10px 12px"}}/>
              </div>
              <div>
                <h4 style={{ marginBottom: "0px", marginTop: "16px" }}>Congratulations</h4>
                <p>Your admission completed </p>
              </div>
            </div>
            <div className="header2_right3">
              <div style={{ display: "flex", margin: "10px", justifyContent: "center", alignItems: "center" }}>
                <div>
                  <Avatar style={{ marginRight: "8px" }} alt="Remy Sharp" src="	https://mui.com/static/images/avatar/1.jpg" />
                </div>
                <div>
                  <h4 style={{ marginBottom: "2px" }}>User Experience Class</h4>
                  <p style={{ margin: "0px" }}>Today at 12.00 PM</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button style={{ backgroundColor: "#d8587e", width: "112px", borderRadius: "60px" }} variant="success">Join Now</Button>{' '}
              </div>

            </div>
            <div style={{ position: "absolute", right: "10px", top: '10px', backgroundColor: "#F25471", width: "45px", height: "45px", borderRadius: "10px"}}>
              <FaChartSimple style={{ color: "white", height: "30px", width: "30px", borderRadius: "10%", margin: "6px 0 0 6px"}} />
            </div>
          </div>
        </div>
      </div>
      <div className="what-is-totc">
        <p className="what-is-speak">
          <span className="what-is-speak-sub-0">What is </span>
          <span className="what-is-speak-sub-10" style={{ color: "#00CBB8" }}>
            SPEAK?
          </span>
        </p>
        <div>
          <div className="unlike-traditional-centers-and-available-apps-we-allows-users-to-learn-whenever-and-wherever-they-want-with-aaffordable-price-if-you-have-a-1-hour-break-during-lunch-time-and-you-feel-like-you-want-to-practice-your-speaking-skills-you-just-need-to-go-online-come-to-us-choose-atopic-book-an-available-tutor-then-you-will-be-served">
            Unlike traditional centers and available apps, we allows users to
            learn whenever and wherever they want with a affordable price. If
            you have a 1 hour break during lunch time and you feel like you want
            to practice your speaking skills, you just need to go online, come
            to us, choose a topic, book an available tutor, then you will be
            served.
          </div>
        </div>
        <div className="container-13">
          <div className="group-22">
            <div className="rectangle-19"></div>
            {/* <div className="rectangle-22"></div> */}
            <span className="for-teachers">FOR TEACHERS</span>
            <button className="group-20" style={{ color: "White", fontWeight: "500", fontSize: "20px" }}>
              {/* <span className="start-aclass-today">Start a class today</span> */}
              Start a class today
            </button>
          </div>
          <div className="group-23">
            {/* <div className="rectangle-23"></div> */}
            <div className="rectangle-21"></div>
            <div className="group-23-content">
              <div className="for-learners">FOR LEARNERS</div>
              <button className="group-21" style={{ color: "White", fontWeight: "500", fontSize: "20px" }}>
                {/* <span className="book-now">Book now</span> */}
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="you-can-do-with-totc">
        <div className="ellipse-12"></div>
        <div className="container-55">
          <p className="worry-about-schedule-you-have-speak">
            <span className="worry-about-schedule-you-have-speak-sub-7"></span>
            <span></span>
          </p>
          <div className="rectangle-18"></div>
        </div>
        <div className="container-39">
          <div className="container-46">
            <p className="Worry-about-schedule" style={{ fontSize: "30px" }}>
              <span className="Worry-about-schedule-sub-0" style={{ color: "#2F327D", fontWeight: "600" }}>
                Worry about schedule,{" "}
              </span>
              <span
                className="Worry-about-schedule-sub-10"
                style={{ color: "#00CBB8", fontWeight: "600" }}
              >
                you have SPEAK!
              </span>
            </p>
            <div className="we-provide-atotally-flexible-speaking-english-practice-sessions-with-the-help-of-both-ai-and-tutors-with-speak-the-true-meaning-ofno-boundery-means-users-can-practice-speaking-english-whenever-they-want-even-if-its-midnight-or-dawn">
              We provide a totally flexible Speaking English practice sessions
              with the help of both AI and tutors. With SPEAK, the true meaning
              of “no boundery” means users can practice speaking English
              whenever they want even if it’s midnight or dawn.
            </div>
            <span className="learn-more">Learn more</span>
          </div>
          <div className="container-8">
            <div className="group-17"></div>
            <div className="rectangle-17"></div>
          </div>
          <div className="ellipse-13"></div>
        </div>
        <div className="image-35"></div>
      </div>
      <div className="our-features">
        <p className="our-features-1">
          <span className="our-features-sub-0">Our </span>
          <span className="our-features-sub-10" style={{ color: "#00CBB8" }}>
            features
          </span>
        </p>
        <div className="this-very-extraordinary-feature-can-make-learning-activities-more-efficient">
          This very extraordinary feature, can make learning activities more
          efficient
        </div>
        <div className="group-83">
          <div className="ellipse-22"></div>
          <div className="ellipse-21"></div>
          <div className="container-34">
            <div className="container-28">
              <div className="group-71">
                <div className="group-67"></div>
                <div className="container-29">
                  <div className="group-57">
                    <div className="mask-group-1">
                      <div className="portrait-teacher-giving-online-class-1"></div>
                    </div>
                    <div className="mask-group-2">
                      <div className="rectangle-6"></div>
                      <div className="group-58">
                        <div className="rectangle-46"></div>
                        <div className="rectangle-47"></div>
                        <div className="rectangle-48"></div>
                      </div>
                      <div className="container-31">
                        <span className="instructor">Instructor</span>
                      </div>
                      <div className="eveny-howard">Eveny Howard</div>
                    </div>
                  </div>
                  <div className="container-70">
                    <div className="group-55">
                      <span className="present">Present</span>
                    </div>
                    <div className="group-56">
                      <div className="rectangle-44"></div>
                      <div className="phone-1"></div>
                      <span className="call" style={{ marginLeft: "20px" }}>
                        Call
                      </span>
                    </div>
                  </div>
                </div>
                <div className="container-3">
                  <div className="group-63">
                    <div className="mask-group-4">
                      <div className="image-7"></div>
                      <div className="rectangle-62"></div>
                      <div className="group-582">
                        <div className="rectangle-462"></div>
                        <div className="rectangle-472"></div>
                        <div className="rectangle-482"></div>
                      </div>
                      <span className="tamara-clarke">Tamara Clarke</span>
                    </div>
                  </div>
                  {/* <div style={{ height: "70px", width: "70px" }}>

                    <div className="group-65">
                      <div className="rectangle-63"></div>
                      <div className="group-583">
                        <div className="rectangle-463"></div>
                        <div className="rectangle-473"></div>
                        <div className="rectangle-483"></div>
                      </div>
                      <span className="humbert-holland">Humbert Holland</span>
                    </div>
                  </div> */}
                  <div className="group-65">
                    <div className="mask-group-4">
                      <div className="image-7-1"></div>
                      <div className="rectangle-62"></div>
                      <div className="group-582">
                        <div className="rectangle-462"></div>
                        <div className="rectangle-472"></div>
                        <div className="rectangle-482"></div>
                      </div>
                      <span className="tamara-clarke">Tamara Clarke</span>
                    </div>
                  </div>
                </div>
                <div className="container-26">
                  {/* <div className="group-64">
                    <div className="image-8"></div>
                    <div className="rectangle-61"></div>
                    <div className="group-581">
                      <div className="rectangle-461"></div>
                      <div className="rectangle-471"></div>
                      <div className="rectangle-481"></div>
                    </div>
                    <span className="adam-levin">Adam Levin</span>
                  </div> */}
                  <div className="group-64">
                    <div className="rectangle-64"></div>
                    <div className="group-584">
                      <div className="rectangle-464"></div>
                      <div className="rectangle-474"></div>
                      <div className="rectangle-484"></div>
                    </div>
                    <span className="patricia-mendoza">Patricia Mendoza</span>
                  </div>
                  <div className="group-66">
                    <div className="rectangle-64"></div>
                    <div className="group-584">
                      <div className="rectangle-464"></div>
                      <div className="rectangle-474"></div>
                      <div className="rectangle-484"></div>
                    </div>
                    <span className="patricia-mendoza">Patricia Mendoza</span>
                  </div>
                </div>

                <FaRegHand className="group-70" style={{ color: "#f48c06" }} />
                {/* <div className="image-8-1"></div> */}
              </div>
              {/* <div className="ellipse-19"></div> */}
              <div className="ellipse-20"></div>
            </div>
            <div className="container-1">
              {/* <p className="auser-interface-designed-for-the-classroom">
                <span className="auser-interface-designed-for-the-classroom-sub-9">
                  A
                </span>
                <span
                  className="auser-interface-designed-for-the-classroom-sub-10"
                  style={{ color: "#00CBB8" }}
                >
                  user interface
                </span>
                <span className="auser-interface-designed-for-the-classroom-sub-9">
                  designed for the classroom
                </span>
              </p> */}
              <p className="our-features-1">
                <span className="our-features-sub-0">A </span>
                <span className="our-features-sub-10" style={{ color: "#00CBB8" }}>
                  user interface{" "}
                </span>
                <span className="our-features-sub-0">
                  designed for the classroom{" "}
                </span>
              </p>
              <div className="container-24">
                <div className="container-36">
                  <div className="container-18">
                    <div className="rectangle-51"></div>
                    <div className="rectangle-52"></div>
                  </div>
                  <div className="container-58">
                    <div className="rectangle-53"></div>
                    <div className="rectangle-54"></div>
                  </div>
                </div>
                <span className="teachers-dont-get-lost-in-the-grid-view-and-have-adedicated-podium-space">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                  <br />
                </span>
              </div>
              <div className="container-15">
                <div className="container-37">
                  <TbLayersSubtract style={{ width: "30px", height: "30px" }} />
                </div>
                <span className="tas-and-presenters-can-be-moved-to-the-front-of-the-class">
                  TA’s and presenters can be moved to the front of the class.
                  <br />
                </span>
              </div>
              <div className="container-45">
                <div className="container-2">
                  <div className="users-2">
                    <FaPeopleGroup
                      className="icon"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                </div>
                <span className="teachers-can-easily-see-all-students-and-class-data-at-one-time">
                  Teachers can easily see all students and class data at one
                  time.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="group-123">
          <div className="container-52">
            <p className="tools-for-teachers-and-learners">
              <span className="tools-for-teachers-and-learners-sub-11">
                Tools For Teachers And Learners{" "}
              </span>
            </p>
            <span className="class-has-adynamic-set-of-teaching-tools-built-to-be-deployed-and-used-during-class-teachers-can-handout-assignments-in-real-time-for-students-to-complete-and-submit">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class.
              <br />
              Teachers can handout assignments in real-time for students to
              complete and submit.
            </span>
          </div>
          <div className="group-122">
            <div className="ellipse-100"></div>
            <div className="container-71">
              <div className="ellipse-99"></div>
              <div className="group-75">
                <div className="container-17">
                  <div className="container-73">
                    <div className="ellipse-27"></div>
                    <div className="ellipse-28"></div>
                    <div className="ellipse-29"></div>
                    <div className="ellipse-30"></div>
                    <div className="ellipse-31"></div>
                    <div className="ellipse-32"></div>
                  </div>
                  <div className="container-23">
                    <div className="ellipse-37"></div>
                    <div className="ellipse-38"></div>
                    <div className="ellipse-39"></div>
                    <div className="ellipse-40"></div>
                    <div className="ellipse-41"></div>
                    <div className="ellipse-42"></div>
                  </div>
                  <div className="container-5">
                    <div className="ellipse-47"></div>
                    <div className="ellipse-48"></div>
                    <div className="ellipse-49"></div>
                    <div className="ellipse-50"></div>
                    <div className="ellipse-51"></div>
                  </div>
                  <div className="container-72">
                    <div className="ellipse-57"></div>
                    <div className="ellipse-58"></div>
                    <div className="ellipse-59"></div>
                    <div className="ellipse-60"></div>
                    <div className="ellipse-61"></div>
                  </div>
                  <div className="container-68">
                    <div className="ellipse-67"></div>
                    <div className="ellipse-68"></div>
                    <div className="ellipse-69"></div>
                    <div className="ellipse-70"></div>
                    <div className="ellipse-71"></div>
                  </div>
                  <div className="container-43">
                    <div className="ellipse-77"></div>
                    <div className="ellipse-78"></div>
                    <div className="ellipse-79"></div>
                    <div className="ellipse-80"></div>
                    <div className="ellipse-81"></div>
                  </div>
                  <div className="container-57">
                    <div className="ellipse-87"></div>
                    <div className="ellipse-88"></div>
                    <div className="ellipse-89"></div>
                    <div className="ellipse-90"></div>
                    <div className="ellipse-91"></div>
                  </div>
                </div>
                <div className="container-41">
                  <div className="container-66">
                    <div className="ellipse-33"></div>
                    <div className="ellipse-34"></div>
                    <div className="ellipse-35"></div>
                    <div className="ellipse-36"></div>
                  </div>
                  <div className="container-38">
                    <div className="ellipse-43"></div>
                    <div className="ellipse-44"></div>
                    <div className="ellipse-45"></div>
                    <div className="ellipse-46"></div>
                  </div>
                  <div className="container-64">
                    <div className="ellipse-52"></div>
                    <div className="ellipse-53"></div>
                    <div className="ellipse-54"></div>
                    <div className="ellipse-55"></div>
                    <div className="ellipse-56"></div>
                  </div>
                  <div className="container-32">
                    <div className="ellipse-62"></div>
                    <div className="ellipse-63"></div>
                    <div className="ellipse-64"></div>
                    <div className="ellipse-65"></div>
                    <div className="ellipse-66"></div>
                  </div>
                  <div className="container-48">
                    <div className="ellipse-72"></div>
                    <div className="ellipse-73"></div>
                    <div className="ellipse-74"></div>
                    <div className="ellipse-75"></div>
                    <div className="ellipse-76"></div>
                  </div>
                  <div className="container-7">
                    <div className="ellipse-82"></div>
                    <div className="ellipse-83"></div>
                    <div className="ellipse-84"></div>
                    <div className="ellipse-85"></div>
                    <div className="ellipse-86"></div>
                  </div>
                  <div className="container-6">
                    <div className="ellipse-92"></div>
                    <div className="ellipse-93"></div>
                    <div className="ellipse-94"></div>
                    <div className="ellipse-95"></div>
                    <div className="ellipse-96"></div>
                  </div>
                </div>
              </div>

              <BiNews className="group-77" />
            </div>
            <div className="ellipse-97"></div>
            <div className="ellipse-98"></div>
            <div className="image-12"></div>

            <MdGroups className="group-78" />
          </div>
        </div>
        <div className="group-93">
          <div className="group-92">
            <div className="ellipse-106"></div>
            <div className="ellipse-107"></div>
            <div className="container-50">
              <div className="container-54">
                <div className="container-42">
                  <span className="meeting">Meeting</span>
                </div>
                <span className="interact-with-your-tutor">
                  Interact with your tutor!
                </span>
              </div>
              <div className="ellipse-108"></div>
              <div className="mask-group-7">
                <div className="image-13"></div>
              </div>
            </div>
            <div className="ellipse-105"></div>
            <div className="group-89">
              <div className="ellipse-104"></div>
              <div className="receive-feedback-immediately">
                Receive feedback immediately.
              </div>

              <FaPaperPlane className="group-86" />
            </div>
          </div>
          <div className="group-118" style={{ width: "500px" }}>
            <div className="assessments-tests">Assessments, Tests</div>
            <span className="easily-launch-live-assignments-and-tests-student-results-are-automatically-entered-in-the-online-gradebook">
              Easily launch live assignments, and tests.
              <br />
              Student results are automatically entered in the online gradebook.
            </span>
          </div>
        </div>
        <div className="group-125">
          <p className="class-management-tools-for-educators">
            <span className="class-management-tools-for-educators-sub-13">
              Class Management Tools for Educators{" "}
            </span>
            <span className="class-management-tools-for-educators-sub-12"></span>
          </p>
          <span className="class-provides-tools-to-help-run-and-manage-the-class-such-as-attendance-schedule-and-more">
            Class provides tools to help run and manage the class such as ,
            Attendance, Schedule and more. <br />
          </span>
        </div>
        <div className="image-36-1"></div>
        <div className="group-107">
          <div className="group-106">
            <div className="ellipse-118"></div>
            <div className="rectangle-79"></div>
            <div className="container-49">
              <div className="group-104">
                <div className="container-67">
                  <div className="group-101">
                    <div className="mask-group-10">
                      <div className="portrait-teacher-giving-online-class-12"></div>
                    </div>
                    <div className="mask-group-11">
                      <div className="rectangle-467"></div>
                    </div>
                  </div>
                  <div className="container-44">
                    <div className="group-551">
                      <span className="present-1">Present</span>
                    </div>
                    <div className="group-561">
                      <div className="phone-11"></div>
                      <span className="call-1">Call</span>
                    </div>
                  </div>
                </div>
                <div className="container-56">
                  <div className="group-631">
                    <div className="mask-group-9">
                      <div className="image-71"></div>
                      <div className="rectangle-66"></div>
                      <div className="group-586">
                        <div className="rectangle-466"></div>
                        <div className="rectangle-476"></div>
                        <div className="rectangle-486"></div>
                      </div>
                      <span className="tamara-clarke-1">Tamara Clarke</span>
                    </div>
                  </div>
                  <div className="group-651">
                    <div className="rectangle-67"></div>
                    <div className="group-587">
                      <div className="rectangle-468"></div>
                      <div className="rectangle-477"></div>
                      <div className="rectangle-487"></div>
                    </div>
                    <span className="humbert-holland-1">Humbert Holland</span>
                  </div>
                </div>
                <div className="container-35">
                  <div className="group-641">
                    <div className="rectangle-65"></div>
                    <div className="group-585">
                      <div className="rectangle-465"></div>
                      <div className="rectangle-475"></div>
                      <div className="rectangle-485"></div>
                    </div>
                    <span className="adam-levin-1">Adam Levin</span>
                  </div>
                  <div className="group-661">
                    <div className="rectangle-68"></div>
                    <div className="group-588">
                      <div className="rectangle-469"></div>
                      <div className="rectangle-478"></div>
                      <div className="rectangle-488"></div>
                    </div>
                    <span className="patricia-mendoza-1">Patricia Mendoza</span>
                  </div>
                </div>
                <div className="rectangle-77"></div>
              </div>
              <div className="group-103">
                <div className="container-53">
                  <div className="ellipse-162"></div>
                  <div className="ellipse-172"></div>
                  <div className="ellipse-182"></div>
                </div>
                <div className="container-61">
                  <div className="group-571">
                    <div className="mask-group-14">
                      <div className="portrait-teacher-giving-online-class-13"></div>
                    </div>
                  </div>
                  <div className="line-91"></div>
                  <div className="group-99">
                    {/* <div className="rectangle-69"></div>
                    <div className="group-589">
                      <div className="rectangle-479"></div>
                      <div className="rectangle-4610"></div>
                      <div className="rectangle-489"></div>
                    </div> */}
                    <div className="mask-group-14">
                      <div className="portrait-teacher-giving-online-class-14"></div>
                    </div>
                    <span className="patricia-mendoza-2">Patricia Mendoza</span>
                  </div>
                </div>
                <div className="container-65">
                  <div className="private-discussion">Private Discussion</div>
                  <div className="group-100">
                    <div className="rectangle-681"></div>
                    <span className="end-discussion">End Discussion</span>
                  </div>
                </div>
                <span className="your-video-cant-be-seen-by-others">
                  Your video can’t be seen by others
                </span>
              </div>

              <FaUserGroup className="group-105" />
            </div>
          </div>
          <div className="group-119">
            <p
              className="one-on-one-discussions"
              style={{ flexDirection: "column" }}
            >
              {/* <span className="one-on-one-discussions-sub-12">
                one-on-one-discussions
              </span> */}
              <span className="one-on-one-discussions-sub-12">One-on-One </span>
              <span
                className="one-on-one-discussions-sub-12"
                style={{ color: "#00CBB8" }}
              >
                Discussions
              </span>
            </p>
            <span className="teachers-and-learners-can-talk-privately">
              Teachers and learners can talk privately.
            </span>
          </div>
        </div>
        {/* <div className="group-37">
          <span className="see-more-features">See more features</span>
        </div> */}
        <div className="image-36"></div>
        <div className="vidcal-1"></div>
      </div>
      {/* <div
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          margin: "0 0 50px 100px",
        }}
      >
        Explore Lesson
      </div>
      <p
        style={{
          margin: "0 0 10px 100px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Healthcare
      </p>
      <div style={{ display: "flex" }}>
        <div className="image-health"></div>
        <div className="explore-healthcare-topics-to-enhance-your-well-being-from-tips-on-nutrition-to-fitness-advice-discover-ways-to-prioritize-your-health-and-live-better">
          Explore healthcare topics to enhance your well-being. From tips on
          nutrition to fitness advice, discover ways to prioritize your health
          and live better.
        </div>
      </div>

      <p
        style={{
          margin: "0 0 10px 100px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Environment
      </p>
      <div style={{ display: "flex" }}>
        <div className="image-enviroment"></div>
        <div className="discover-the-importance-of-our-environment-and-ways-to-protect-it-learn-about-sustainable-practices-conservation-efforts-and-how-you-can-make-apositive-impact-on-the-world-around-you">
          Discover the importance of our environment and ways to protect it.
          Learn about sustainable practices, conservation efforts, and how you
          can make a positive impact on the world around you.
        </div>
      </div> */}
      <div className="explore">
        <Row style={{ position: "relative" }}>
          <Col md={10} style={{
            backgroundColor: "rgb(222, 238, 250)", paddingTop: "5%", paddingBottom: "12%", marginBottom: "10%",
            borderBottomRightRadius: "5%"
          }}>

            <div
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                margin: "0 0 50px 100px",
                color: "black",
              }}>
              Explore Lesson
            </div>

            <p
              style={{
                margin: "0 0 10px 100px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
              }}>
              Healthcare
            </p>

            <div style={{ display: "flex", paddingBottom: "15%" }}>
              <Row>
                <Col md={6}>
                  <div className="image-health"></div>
                </Col>
                <Col md={6}>
                  <div className="explore-healthcare-topics-to-enhance-your-well-being-from-tips-on-nutrition-to-fitness-advice-discover-ways-to-prioritize-your-health-and-live-better">
                    Explore healthcare topics to enhance your well-being. From tips on
                    nutrition to fitness advice, discover ways to prioritize your health
                    and live better.
                  </div>
                </Col>
              </Row>
            </div>

            <p
              style={{
                margin: "0 0 10px 100px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
              }}>
              Environment
            </p>
            <div style={{ display: "flex" }}>
              <Row style={{ position: "relative" }}>
                <Col md={6}>
                  <div className="image-enviroment"></div>
                </Col>
                <Col md={6}>
                  <div className="discover-the-importance-of-our-environment-and-ways-to-protect-it-learn-about-sustainable-practices-conservation-efforts-and-how-you-can-make-apositive-impact-on-the-world-around-you">
                    Discover the importance of our environment and ways to protect it.
                    Learn about sustainable practices, conservation efforts, and how you
                    can make a positive impact on the world around you.
                  </div>
                </Col>
                <Row>
                </Row>
              </Row>
            </div>
          </Col>
          <Col md={2}>

          </Col>
          <div style={{ position: "absolute", top: "35%", width: "100%", fontSize: "2rem" }}>
            <a style={{ marginRight: "3%", display: "flex", justifyContent: "flex-end" }}>See all →</a>
            <div className="little-footer1" style={{
              backgroundColor: "rgba(230, 230, 230)", padding: "2%", opacity: "0.5",
              position: "absolute", left: "6%", right: "2%",
              borderTopRightRadius: "25px", borderTopLeftRadius: "25px", borderBottomRightRadius: "25px", borderBottomLeftRadius: "25px"
            }}>
            </div>
          </div>
          <div style={{ position: "absolute", top: "73%", width: "100%", fontSize: "2rem" }}>
            <a style={{ marginRight: "3%", display: "flex", justifyContent: "flex-end" }}>See all →</a>
            <div className="little-footer1" style={{
              backgroundColor: "rgba(230, 230, 230)", padding: "2%", opacity: "0.5",
              position: "absolute", left: "6%", right: "2%",
              borderTopRightRadius: "25px", borderTopLeftRadius: "25px", borderBottomRightRadius: "25px", borderBottomLeftRadius: "25px"
            }}>
            </div>
          </div>
        </Row>




      </div>
      <div className="testimonials" style={{ marginLeft: "50px" }}>
        <div className="mask-group">
          <div
            className="smiling-woman-with-afro-posing-pink-sweater-1"
            style={{ width: "767px", marginRight: "140px" }}
          ></div>
        </div>
        <div className="container-20">
          <div className="line-41"></div>
          <span className="testimonial">TESTIMONIAL</span>
        </div>
        <div className="what-they-say">What They Say?</div>
        <div style={{ width: "700px" }}>
          <div className="speak-has-got-more-than-1000-positive-ratings-from-our-users">
            SPEAK has got more than 1000 positive ratings from our users.
          </div>
          <div className="some-of-the-students-and-teachers-were-greatly-helped-by-the-skilline">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </div>
          <div className="are-you-too-please-give-your-assessment">
            Are you too? Please give your assessment
          </div>
        </div>
        <div className="container-25">
          <div className="container-9" style={{ width: "300px" }}>
            <div className="write-your-assessment">Write your assessment</div>
            <div className="group-32">
              <div className="arrow-2"></div>
            </div>
          </div>
          <div className="container-60" style={{marginRight: "107px"}}>
            <div className="rectangle-301"></div>
            <div className="line-31"></div>
            <span className="thank-you-so-much-for-your-help-its-exactly-what-ive-been-looking-for-you-wont-regret-it-it-really-saves-me-time-and-effort-speak-is-exactly-what-ineed">
              &#34;Thank you so much for your help. It&#39;s exactly what
              I&#39;ve been looking for. You won&#39;t regret it. It really
              saves me time and effort. SPEAK is exactly what I need.&#34;
            </span>
            <span className="gloria-rose">Gloria Rose</span>
            <span className="reviews-at-yelp">12 reviews at Yelp</span>
            <div className="group-29"></div>
            <div className="container">
              <div className="rectangle-302"></div>
              <div className="line-32"></div>
              <div className="container-21">
                <div className="thank-you-so-much-for-your-help-its-exactly-what-ive-been-looking-for-you-wont-regret-it-it-really-saves-me-time-and-effort-speak-is-exactly-what-ineed-1">
                  &#34;Thank you so much for your help. It&#39;s exactly what
                  I&#39;ve been looking for. You won&#39;t regret it. It really
                  saves me time and effort. SPEAK is exactly what I need.&#34;
                </div>
                <div className="container-22">
                  <div className="gloria-rose-1">Gloria Rose</div>
                  <div className="container-16">
                    <div className="group-291">
                      <IoIosStar
                        className="star-11"
                        style={{ color: "#fba333" }}
                      />
                      <IoIosStar
                        className="star-11"
                        style={{ color: "#fba333" }}
                      />
                      <IoIosStar
                        className="star-11"
                        style={{ color: "#fba333" }}
                      />
                      <IoIosStar
                        className="star-11"
                        style={{ color: "#fba333" }}
                      />
                      <IoIosStar
                        className="star-11"
                        style={{ color: "#fba333" }}
                      />
                    </div>
                    <span className="reviews-at-yelp-1">
                      12 reviews at Yelp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer1">
        <Row>
          <Col md={6}>
            <Row style={{ margin: "10% 5% 5% 5%" }}>
              <Col md={4}>
                <Row style={{ fontSize: "large", fontWeight: "bold", marginBottom: "18px"}}>ABOUT US</Row>
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Mission & Vision
                  </NavLink>
                </Row>
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Our Comapny
                  </NavLink>
                </Row>{" "}
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Our Projects
                  </NavLink>
                </Row>{" "}
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Our Team
                  </NavLink>
                </Row>
              </Col>
              <Col md={4}>
                <Row style={{ fontSize: "large", fontWeight: "bold", marginBottom: "18px"}}>DISCOVER</Row>
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Projects & Research
                  </NavLink>
                </Row>{" "}
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Clients Review
                  </NavLink>
                </Row>{" "}
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Our Projects
                  </NavLink>
                </Row>{" "}
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Our Team
                  </NavLink>
                </Row>
              </Col>
              <Col md={4}>
                <Row style={{ fontSize: "large", fontWeight: "bold", marginBottom: "18px"}}>USEFUL LINKS</Row>
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Contact Us
                  </NavLink>
                </Row>{" "}
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Terms & Conditions
                  </NavLink>
                </Row>{" "}
                <Row>
                  <NavLink
                    style={{ color: "white", margin: "1rem 0 0 0 " }}
                    to="/"
                  >
                       Review
                  </NavLink>
                </Row>{" "}
              </Col>
            </Row>
          </Col>
          <Col md={6} style={{paddingLeft: "149px"}}>
            <Row style={{ margin: "8% 5% 5% 5%" }}>
              <Col style={{ borderRight: "2px solid white", fontSize: "larger", fontWeight: "bold", paddingRight: "85px" }} md={2}>
                SPEAK
              </Col>
              <Col style={{ marginLeft: "0.7rem", paddingTop: "3px", fontWeight: "600" }} md={9}>
                Seize Potential, Enhance & Acquire Knowledge
              </Col>
            </Row>
            <Row style={{ margin: "6% 5% 6% 90px", justifyContent: "start", marginLeft: "90px", color: "#B2B3CF", fontSize: "18px", fontWeight: "600"}}>
              Subscribe to get our Newsletter
            </Row>
            <Row style={{ margin: "5% 5% 5% 5%" }}>
              {" "}
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" style={{background: "transparent", borderRadius: "30px", width: "295px"}} />
                      <Form.Text className="text-muted" style={{margin: "12px 0px 0px 9px"}}>
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
                  <Row style={{ margin: "11% 5% -32px 90px", justifyContent: "start", marginLeft: "90px", color: "#B2B3CF", fontSize: "15px"}}>
                  © 2021 Class Technologies Inc. 
                  </Row>
              </Form>
            </Row>
          </Col>
        </Row>
      </div>
    </div >
  );
}
