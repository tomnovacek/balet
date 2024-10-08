import * as React from "react";
import how from "../images/baletky-volnost.jpg";

const steps: { title: string; description: string }[] = [
  {
    title: "#1 Zjistěte volnou kapacitu a přihlaste se.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "#2 Podepište zaslou přihlášku a uhraďte členský příspěvek.",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "#3 Příjděte na lekci!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const HowSection: React.FC = () => (
  <section id="how" className="">
    <div className="size-lg flex items-center justify-between gap-16">
      <img
        src={how}
        alt="Ukázka baletní hodiny Baletní školy I.V.Psoty"
        className="hidden max-h-[500px] min-h-[300px] lg:block"
      />
      <div className="flex flex-col justify-between gap-8">
        <h2 className="headline4">Jak se k nám přidat?</h2>
        <ul data-sal="slide-up" className="flex flex-1 flex-col gap-4">
          {steps.map((vp) => (
            <li key={vp.title} className="flex flex-col gap-4 p-4">
              <h3 className="headline6">{vp.title}</h3>
              <p className="text-emph-md">{vp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default HowSection;
