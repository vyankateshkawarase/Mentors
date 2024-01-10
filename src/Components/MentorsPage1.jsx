import mainframe from "../Images/mainframe.png";
import Ellipse108 from "../Images/Ellipse108.png";
import Ellipse111 from "../Images/Ellipse111.png";
import Ellipse109 from "../Images/Ellipse109.svg";
import Ellipse110 from "../Images/Ellipse110.svg";
import d1 from "../Images/d1.png";
import d2 from "../Images/d2.svg";
import d3 from "../Images/d3.svg";
import Ellipse141 from "../Images/Ellipse141.png";
import cipla from "../Images/cipla.svg";
import tata from "../Images/tata.svg";
import nestle from "../Images/nestle.svg";
import ola from "../Images/ola.svg";
import tesla from "../Images/tesla.svg";
import zara from "../Images/zara.svg";
import next from "../Images/next.svg";
import lamborghini from "../Images/lamborghini.svg";
import rolls from "../Images/rolls.svg";
import tech from "../Images/tech.svg";
import slack from "../Images/slack.svg";
import twilio from "../Images/twilio.svg";
import gatsby from "../Images/gatsby.png";
import apple from "../Images/apple.svg";
import session from "../Images/session.png";
import mentor1 from "../Images/mentor1.png";
import carrer from "../Images/carrer.png";
import mentor from "../Images/mentor.png";
import Rectangle560 from "../Images/Rectangle560.png";
import Rectangle561 from "../Images/Rectangle561.png";
import {
    Button
} from "@material-tailwind/react";

function MentorsPage1() {
    return (
        <div>
            {/* First Part  */}
            <div className="bg-[#00008B] w-full flex flex-col md:flex-row">
                <div className="m-8 md:m-16 pt-16 md:pt-32 text-center md:text-left">
                    <div className="pb-28">
                        <p className="text-4xl md:text-5xl text-white">
                            Find your <span className="text-orange-700">mentor.</span> <br />
                            Unlock your <span className="text-orange-700">career.</span>
                        </p>

                        <p className="mt-6 md:mt-10 text-white text-lg md:text-xl">
                            We help <span className="text-orange-700">students</span> and
                            <span className="text-orange-700"> early-stage working <br />
                                professionals</span> gain real career insights from industry <br />
                            experts, professionals, and entrepreneurs
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 mt-6">
                            <div>
                                <Button color="white" className="rounded-full w-40 h-12 text-[#F8983C] text-sm">
                                    VIEW MENTORS
                                </Button>
                            </div>
                            <div>
                                <Button variant="outlined" className="rounded-full border border-white w-48 h-14 text-white text-sm">
                                    BOOK A 1:1 SESSION
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <img
                        src={mainframe}
                        alt=""
                        className="h-[300px] md:h-[450px] md:w-[700px] md:ml-40 rounded-2xl"
                    />
                </div>
            </div>
            {/* Second Part */}
            <div className="bg-white w-full">
                <div className="flex flex-col md:flex-row items-center justify-center md:ml-4 mb-8 md:mb-0">
                    <img src={Ellipse108} alt="" className="h-28 w-28 md:block hidden" />
                    <p className="text-3xl text-center m-6 font-medium">
                        Learn from experienced leaders. Get unbiased guidance. <br />
                        Expand your network.
                    </p>

                    <img src={Ellipse111} alt="" className="h-24 w-24 mt-10 md:block hidden" />
                </div>
                <div className="flex md:flex-row gap-6 justify-center m-5">
                    <div className="text-center">
                        <div className="bg-[#FF9728] w-16 md:w-28 h-16 md:h-28 rounded-3xl items-center justify-center flex">
                            <img src={d1} alt="Mentor Icon" className="w-12 md:w-20 mb-2 md:mb-5" />
                        </div>
                        <p className="text-black font-bold mt-2 md:mt-4">1:1 Mentor <br /> Sessions</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#5B96FF] w-16 md:w-28 h-16 md:h-28 rounded-3xl items-center justify-center flex">
                            <img src={d2} alt="Podcast Icon" className="w-12 mb-0 md:w-16" />
                        </div>
                        <p className="text-black font-bold mt-2 md:mt-4">Podcasts</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#D32F6A] w-16 md:w-28 h-16 md:h-28 rounded-3xl items-center justify-center flex">
                            <img src={d3} alt="Group Mentoring Icon" className="w-10 md:w-16" />
                        </div>
                        <p className="text-black font-bold mt-2 md:mt-4">Group <br /> Mentoring</p>
                    </div>
                </div>

                <div className="flex items-center justify-center md:mb-0">
                    <img src={Ellipse109} alt="" className="h-20 w-20 mr-[200px] mb-32 md:block hidden" />
                    <Button variant="outlined" className="border border-blue-400 w-48 h-14 text-blue-400 mb-40 rounded-full items-center justify-center text-center text-sm">BOOK A 1:1 SESSION</Button>
                    <img src={Ellipse110} alt="" className="h-20 w-20 ml-[200px] mb-40 md:block hidden" />
                </div>
            </div>
            {/* Third Part */}
            <div className="reverse relative bg-[url('Images/Frame146.png')] bg-cover bg-center h-[500px] max-w-full mx-auto md:w-[1200px] md:ml-44 rounded-3xl">
                <div className="text-center md:text-left items-center justify-center h-full pt-10">
                    <p className="text-white text-3xl md:text-4xl md:ml-24">
                        We are changing the way Indians <br /> approach their careers.
                    </p>
                    <div className="flex flex-col items-center md:items-start mt-6 md:ml-28">
                        <div className="flex items-center mt-4 md:mt-0 md:ml-6">
                            <img src={Ellipse141} alt="" className="w-2 h-2 mt-2 md:mt-10" />
                            <p className="ml-2 mt-2 md:mt-8 text-[#0FFAEC]">
                                Find mentors you relate with
                            </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0 md:ml-6">
                            <img src={Ellipse141} alt="" className="w-2 h-2 mt-2 md:mt-10" />
                            <p className="ml-2 mt-2 md:mt-8 text-[#0FFAEC]">
                                Gain first-hand insight into their professions
                            </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0 md:ml-6">
                            <img src={Ellipse141} alt="" className="w-2 h-2 mt-2 md:mt-10" />
                            <p className="ml-2 mt-2 md:mt-8 text-[#0FFAEC]">
                                Get your career queries answered
                            </p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0 md:ml-6">
                            <img src={Ellipse141} alt="" className="w-2 h-2 mt-2 md:mt-10" />
                            <p className="ml-2 mt-2 md:mt-8 text-[#0FFAEC]">
                                Choose a career that is right for YOU
                            </p>
                        </div>
                    </div>
                    <button className="bg-white text-[#F96167] rounded-full w-40 h-10 mt-6 md:ml-[134px]">
                        VIEW MENTORS
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center mb-8">
                    {/* <img src={Frame146} alt="Ladies" className="w-24 h-24 mx-auto" /> */}
                </div>
            </div>
            {/* Fourth Part */}
            <p className="text-center text-3xl font-medium m-8">
                You are not alone in your career journey <br />
                Get mentored by industry leaders from top brands
            </p>
            <marquee>
                <div className="flex space-x-6 mb-8">
                    <img src={cipla} alt="img1" className="border border-black rounded-xl h-20 w-44" />
                    <img src={ola} alt="img2" className="border border-black rounded-xl h-20 w-44" />
                    <img src={nestle} alt="img3" className="border border-black rounded-xl h-20 w-44" />
                    <img src={tata} alt="img4" className="border border-black rounded-xl h-20 w-44" />
                    <img src={tesla} alt="img4" className="border border-black rounded-xl h-20 w-44" />
                    <img src={next} alt="img4" className="border border-black rounded-xl h-20 w-44" />
                    <img src={zara} alt="img4" className="border border-black rounded-xl h-20 w-44" />
                </div>
            </marquee>
            <marquee>
                <div className="flex space-x-6 mb-8">
                    <img src={lamborghini} alt="img1" className="border border-black rounded-xl h-20 w-44" />
                    <img src={rolls} alt="img2" className="border border-black rounded-xl h-20 w-44" />
                    <img src={slack} alt="img3" className="border border-black rounded-xl h-20 w-44" />
                    <img src={tech} alt="img4" className="border border-black rounded-xl h-20 w-44" />
                    <img src={twilio} alt="img4" className="border border-black rounded-xl h-20 w-44" />
                    <img src={gatsby} alt="img4" className="border border-black rounded-xl h-20 w-44" />
                    <img src={apple} alt="img4" className="border border-black rounded-xl h-20 w-44" />
                </div>
            </marquee>
            <div className="gap-6 flex  items-center justify-center text-center m-6">
                <div>
                    <Button color="blue" className="rounded-full border border-blue-400 w-40 h-12 text-white text-sm">VIEW MENTORS</Button>
                </div>
                <div>
                    <Button variant="outlined" className="rounded-full border border-blue-400 w-48 h-12 text-blue-400 text-sm">BOOK A 1:1 SESSION</Button>
                </div>
            </div>
            {/* Fifth Part */}
            <div className="bg-[#00008B] w-full pt-12">
                <p className="text-3xl text-white text-center">Join us in building the biggest Mentorship Movement India has seen</p>
                <p className="text-white text-xl text-center pt-4">By contributing just <span className="text-orange-500"> 30 minutes </span> of your time per week</p>

                <div className="flex flex-wrap md:flex-row gap-10 justify-center m-10 pb-4">
                    <div className="text-center">
                        <div className="bg-[#00FFFF] w-16 md:w-28 h-16 md:h-28 rounded-3xl items-center justify-center flex">
                            <img src={session} alt="Mentor Icon" className="w-16 mb-0 md:w-20" />
                        </div>
                        <p className="text-white font-bold text-center mt-4">Do sessions as <br /> per your  <br /> availability </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#FF69B4] w-16 md:w-28 h-16 md:h-28 rounded-3xl items-center justify-center flex">
                            <img src={mentor1} alt="Podcast Icon" className="w-14 mb-0 md:w-16" />
                        </div>
                        <p className="text-white font-bold text-center mt-4">Build your <br /> mentor brand</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#FFA351] w-16 md:w-28 h-16 md:h-28 rounded-3xl items-center justify-center flex">
                            <img src={carrer} alt="Group Mentoring Icon" className="w-12 mb-0 md:w-16" />
                        </div>
                        <p className="text-white font-bold text-center mt-4">Help shape <br /> careers</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#AA96DA] w-16 md:w-28 h-16 md:h-28 rounded-3xl items-center justify-center flex">
                            <img src={mentor} alt="Group Mentoring Icon" className="w-12 mb-0 md:w-16" />
                        </div>
                        <p className="text-white font-bold text-center mt-4">Encash / <br /> donate your <br /> earnings from <br /> mentoring </p>
                    </div>
                </div>
                <div className="items-center justify-center text-center">
                    <button className="bg-white text-[#00008B] font-medium rounded-full w-48 h-14 mb-20">BECOME A MENTOR</button>
                </div>
            </div>
            {/* Sixth Part */}
            <div>
                <p className="text-3xl text-center pt-10">Are you ready to unlock a thriving career?</p>
                <div className="flex items-center justify-center text-center gap-14 mt-10 mb-10">
                    <div>
                        <p className="font-bold text-3xl">51+</p>
                        <p>Mentees <br /> Impacted</p>
                    </div>
                    <div>
                        <p className="font-bold text-3xl">61+</p>
                        <p>Experienced <br /> Mentors</p>
                    </div>
                    <div>
                        <p className="font-bold text-3xl">21+</p>
                        <p>Successful <br /> Mentoring Sessions</p>
                    </div>
                </div>
            </div>
            {/* Seventh Part */}
            <div>
                <div className="flex flex-col md:flex-row m-4">
                    <img src={Rectangle560} alt="" className="h-[400px] md:w-[600px] rounded-full object-cover" />
                    <div className="flex flex-col items-left justify-left mt-8 md:mt-20 md:ml-8">
                        <p className="text-3xl font-medium">About Us</p>
                        <p className="pt-5">We are a mentorship platform that connects students and early-stage working
                            professionals to mentors that guide them towards career clarity. Our mentors
                            are industry experts, senior professionals, and entrepreneurs who have come
                            together to share their body of knowledge and experience in shaping the
                            career ambitions of India.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 mt-6">
                            <Button variant="outlined" className="rounded-full border border-blue-400 w-full md:w-40 h-12 text-blue-400 text-sm mb-2 md:mb-0">VIEW MENTORS</Button>
                            <Button color="blue" className="rounded-full border border-blue-400 w-full md:w-48 h-12 text-white text-sm">BOOK A 1:1 SESSION</Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row m-4">
                    <div className="flex flex-col items-left justify-left mt-8 md:mt-24">
                        <p className="text-3xl font-medium ml-4 md:ml-20">Our Mission</p>
                        <p className="pt-5 ml-4 md:ml-20">We are building a <span className="text-[#FF8400]"> mentorship movement </span> in India, where sharing one’s
                            knowledge and experience becomes an integral aspect of work life.
                            We aim to change the way Indians approach their careers and soon <span className="text-[#FF8400]"> replace
                                Job Satisfaction with Career Flourishment. </span>
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 ml-4 md:ml-20 mt-6">
                            <Button variant="outlined" className="rounded-full border border-blue-400 w-full md:w-40 h-12 text-blue-400 text-sm mb-2 md:mb-0">VIEW MENTORS</Button>
                            <Button color="blue" className="rounded-full border border-blue-400 w-full md:w-48 h-12 text-white text-sm">BECOME A MENTOR</Button>
                        </div>
                    </div>
                    <img src={Rectangle561} alt="" className="h-[400px] w-full md:w-[600px] rounded-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default MentorsPage1;
