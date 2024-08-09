import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// import components
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
import cv from "../assets/files/cv.pdf";

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

// import style
import style from "./App.module.css";
import clsx from "clsx";

const posters = [
  {
    image: "src/assets/images/matema.jpg",
  },
  {
    image: "src/assets/images/masangula.jpg",
  },
  {
    image: "src/assets/images/Poster for Angel.jpg",
  },
  {
    image: "src/assets/images/putin poster.jpg",
  },
  {
    image: "src/assets/images/poster.png",
  },
  {
    image: "src/assets/images/advert.jpg",
  },
];

const logos = [
  {
    image: "src/assets/images/global3.jpg",
  },
  {
    image: "src/assets/images/Keonna dark.jpg",
  },
  {
    image: "src/assets/images/Nzuri-cotts.png",
  },
  {
    image: "src/assets/images/rename.jpg",
  },
  {
    image: "src/assets/images/SuperBalo.jpg",
  },
  {
    image: "src/assets/images/tumwinue.png",
  },
];

function App() {
  const form = useRef();

  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   setTimeout(function () {
  //     emailjs
  //       .sendForm(
  //         "service_gjbmeus",
  //         "template_qk6p0pa",
  //         form.current,
  //         "HDMwz57k3xrihLg4J"
  //       )
  //       .then((result) => {
  //         e.target.name.value = "";
  //         e.target.email.value = "";
  //         e.target.message.value = "";
  //       });
  //     setLoading(false);
  //   }, 2000);
  // };

  return (
    <div className={style.app}>
      {/* Navbar */}
      <div className={style.nav}>
        <a className={style.logo}>
          <img src="src/assets/images/logo.png" width={50 + "px"} />
          <h5>Baraka Jimmy</h5>
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Projects">Posters</a>
          </li>
          <li>
            <a href="#logos">Logos</a>
          </li>
          <li>
            <a href="#motion">Motion</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className={style["menu-icon"]}>
          <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            for="checkbox"
            onClick={() => setMenu(!menu)}
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
      {menu === true && (
        <ul className={style.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Projects">Posters</a>
          </li>
          <li>
            <a href="#logos">Logos</a>
          </li>
          <li>
            <a href="#motion">Motion</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      {/* Home */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1>HEY, I'M Baraka Jimmy</h1>
          <p>
            A Developer by Profession, and this is my Graphic Design Portfolio
          </p>
          <a
            href={cv}
            download="cv-PDF-document"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <div className={style["scroll-icon"]}>
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
          <a
            className={style.github}
            target="_blank"
            href="https://github.com/barakacanbyte"
          >
            <AiFillGithub size="30px" color="black" />
          </a>
          <a
            className={style.linkedin}
            target="_blank"
            href="https://www.linkedin.com/in/barakamangesho/"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
          <a
            className={style.gmail}
            target="_blank"
            href="mailto:barakajimmy@outlook.com?subject=SendMail&body=Description"
          >
            <BiLogoGmail size="30px" color="black" />
          </a>
          {/* <a
            className={style.facebook}
            target="_blank"
            href="https://www.facebook.com/ibrahim.hiarea"
          >
            <BsFacebook size="30px" color="black" />
          </a> */}
        </div>
      </div>

      {/* Posters */}
      <div id="Projects" className={style.projects}>
        <div className={style.container}>
          <h2 className={style.title}>Gallery</h2>
          <p>Here you will find some of the personal and clients works</p>
          <h3 className="">Posters</h3>
          <div className={style["projects-list"]}>
            {posters.map((poster, index) => {
              return (
                <div key={`project${index}`} className={style["project"]}>
                  <div className={style["project-image"]}>
                    <img src={poster.image} alt="Project Image" />
                  </div>
                </div>
              );
            })}
          </div>
          {/* logos */}
          <h3 id="logos">Logos</h3>
          <div className={style["projects-list"]}>
            {logos.map((logo, index) => {
              return (
                <div key={`logo${index}`} className={style["logo-g"]}>
                  <div className={style["logo-image"]}>
                    <img src={logo.image} alt="Project Image" />
                  </div>
                </div>
              );
            })}
          </div>
          {/* motion graphics */}
          <h3 id="motion" className="">
            Motion Graphics
          </h3>
          <div className={style["video-container"]}>
            <iframe
              src="https://www.youtube.com/embed/suyTE-WephA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="Contact" className={style.contact}>
        <div className={style.container}>
          <h2 className={style.title}>Contact</h2>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <form
            ref={form}
            action="mailto:barakajimmy@outlook.com"
            method="post"
            enctype="text/plain"
            className={clsx({ [style["inactive-form"]]: loading })}
          >
            <InputField
              width="700px"
              height="40px"
              name="name"
              placeholder="Enter Your Name"
              label="Name"
              type="text"
            />
            <InputField
              width="700px"
              height="40px"
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              type="email"
            />
            <TextAreaField
              width="700px"
              height="250px"
              name="message"
              placeholder="Enter Your Message"
              label="Message"
              type="text"
            />
            <SubmitButton
              icon={<RiSendPlaneFill size="20px" color="white" />}
              width="200px"
              height="60px"
              color="white"
              backgroundColor="var(--primary-main)"
            >
              Submit
            </SubmitButton>
            {loading && (
              <div className={style.loader}>
                <Loader />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div className={style.social}>
              <h3>Social</h3>
              <div className="">
                <a
                  className={style.git}
                  target="_blank"
                  href="https://github.com/barakacanbyte"
                >
                  <AiFillGithub size="30px" color="white" />
                </a>
                <a
                  className={style.linkedin}
                  target="_blank"
                  href="https://www.linkedin.com/in/barakamangesho/"
                >
                  <AiFillLinkedin size="30px" color="white" />
                </a>
                <a
                  className={style.gmail}
                  target="_blank"
                  href="mailto:barakajimmy@outlook.com?subject=SendMail&body=Description"
                >
                  <BiLogoGmail size="30px" color="white" />
                </a>
                {/* <a
                  className={style.facebook}
                  target="_blank"
                  href=""
                >
                  <BsFacebook size="30px" color="white" />
                </a> */}
              </div>
            </div>
          </div>
          <div className={style["copy-right"]}>
            © Copyright 2023. Made by <span>Baraka Jimmy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
