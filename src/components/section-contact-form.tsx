import React from "react";
// import Form from "./shared/form";
import map from "../images/map.png";
import { Link } from "gatsby";

const ContactFormSection: React.FC = () => (
<section className="size-lg flex h-[calc(100vh-96px)] flex-col justify-around">
    <div className="hidden lg:block" />
    <div className="flex items-center justify-between gap-16 py-8 lg:py-0">
    <div className="hidden flex-1 items-center justify-center lg:flex">
        <img
          src={map}
          alt="Illustration"
          className="max-h-[600px] min-h-[400px]"
        />
      </div>
      <div
        data-sal="slide-up"
        className="flex flex-1 flex-col items-start gap-8"
      >
        <h1 className="headline2 font-serif">Jak se k nám dostanete</h1>
        <p className="text-emph-md subtitle1">Adresa</p>
        <ul>
            <li>
              Václavská 6, Brno
            </li>
            <li>
              Spoje:
            </li>
            <li>
              Parkování v areálu. Ceník:
            </li>
          </ul>
{/*         <Link className="btn-primary" to="/">
          Link
        </Link> */}
      </div>

    </div>
    <div className="hidden animate-bounce items-center justify-center lg:flex">
    </div>
    {/* <Form formId="contact"></Form> */}
  </section>
);

export default ContactFormSection;
