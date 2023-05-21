import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className=" container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Dessign</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Develpment</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/*End of WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/*End of Content Creation */}

      </div>
    </section>
  );
};

export default Services;
