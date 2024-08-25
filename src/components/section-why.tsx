import * as React from "react";
import why from "../images/vaclavska.jpg";

const valuePropositions: { title: string; description: string }[] = [
  {
    title: "Nový sál",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Nové vybavení",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Poslení volná místa",
    description:
      "Čtvrtek XX:XX a Pátek XX:XX",
  },
];

const WhySection: React.FC = () => (
  <section id="why" className="size-lg flex flex-col gap-8">
    <h2 className="headline4">Novinky</h2>
    <div className="flex justify-between gap-8">
      <ul data-sal="slide-up" className="flex flex-1 flex-col gap-4">
        {valuePropositions.map((vp) => (
          <li key={vp.title} className="flex flex-col gap-4">
            <h3 className="headline6">{vp.title}</h3>
            <p className="text-emph-md">{vp.description}</p>
          </li>
        ))}
      </ul>
      <div className="hidden flex-1 items-center justify-center lg:flex">
        <img
          src={why}
          alt="Reasons to use YOURProduct"
          className="max-h-[500px] min-h-[300px]"
        />
      </div>
    </div>
  </section>
);

export default WhySection;
