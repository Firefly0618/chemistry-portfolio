"use client";

import { title } from "@/components/primitives";
import { useState } from "react";

export default function AboutMePage() {
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const sections = [
    {
      title: "Properties of Matter",
      img: "IMG_1971.jpeg",
      text: [
        `Properties of Matter: Distinguishes between physical properties such as malleability and density, and chemical properties such as reactivity and flammability, which describe how substances behave and interact. It also explains the difference between intensive properties, which are independent of the amount of matter, and extensive properties, which depend on the size of the sample.`,
        `Changes: Covers physical changes, including phase changes like melting and sublimation, versus chemical changes such as explosions and burning, where new substances are formed through chemical reactions.`,
        `Classification: Breaks down matter into elements, compounds, and mixtures, further distinguishing between homogeneous mixtures with uniform composition and heterogeneous mixtures with visibly different components.`,
        `Separation Techniques: Introduces common laboratory methods including filtration, distillation, sublimation, crystallization, and chromatography, each used to separate substances based on their physical properties.`,
      ],
    },
    {
      title: "Structure of the Atoms",
      img: "IMG_1972.jpeg",
      text: [
        `Atomic History: Tracks the evolution of atomic theory from Dalton’s “Billiard Ball” model to Thomson’s “Plum Pudding” model, followed by Rutherford’s Gold Foil experiment that revealed the nucleus, and finally the modern Electron Cloud model.`,
        `Atomic Structure: Defines the roles of protons, neutrons, and electrons, while also explaining ions as charged atoms and isotopes as atoms of the same element with different masses.`,
        `Radioactivity: Explains nuclear stability and describes the three main types of radioactive decay—alpha decay (loss of a helium nucleus), beta decay (conversion of a neutron into a proton), and gamma decay (release of high-energy radiation).`,
      ],
    },
    {
      title: "Electron in Atoms",
      img: "IMG_1973.jpeg",
      text: [
        `Wave Mechanics: Relates wavelength and frequency to the electromagnetic spectrum and explains how atomic emission spectra serve as unique “fingerprints” that can be used to identify different elements.`,
        `Quantum Theory: Introduces quantized energy levels, sublevels (s, p, d, f), and orbitals, demonstrating that electrons occupy specific energy regions rather than fixed paths.`,
        `Electron Mapping: Outlines the Aufbau Principle, Pauli Exclusion Principle, and Hund’s Rule, which together explain how electrons fill orbitals and why electron configurations follow predictable patterns.`,
      ],
    },
    {
      title: "The Periodic Table and Periodic Law",
      img: "IMG_1974.jpeg",
      text: [
        `Organization: Describes how the periodic table is arranged by increasing atomic number into groups and periods, including the s, p, d, and f blocks that reflect electron configurations.`,
        `Atomic Radius: Explains that atomic size generally increases down a group due to additional energy levels and decreases across a period as effective nuclear charge increases.`,
        `Ionization Energy & Electronegativity: Describes how these properties generally increase moving up and to the right of the periodic table, reflecting a stronger attraction between electrons and the nucleus.`,
        `Effective Nuclear Charge (ENC): Identifies ENC as the main driving force behind periodic trends by determining how strongly electrons are attracted to the nucleus.`,
      ],
    },
    {
      title: "Ionic Compounds and Metals",
      img: "IMG_1976.jpeg",
      text: [
        `Ions: Explains how atoms gain or lose electrons to achieve a stable electron configuration, often following the Octet Rule of having eight valence electrons.`,
        `Ionic Bonding: Describes bonding between metals and nonmetals through electron transfer, resulting in oppositely charged ions held together in a crystal lattice structure.`,
        `Metallic Bonding: Described as a “sea of electrons,” which helps explain why metals are conductive, malleable, and lustrous.`,
        `Naming: Covers basic nomenclature rules for ionic compounds, such as correctly naming substances like sodium chloride (NaCl).`,
      ],
    },
    {
      title: "Covalent Bonding",
      img: "IMG_1977.jpeg",
      text: [
        `Covalent Bonds: Occur when nonmetals share electrons to achieve stability, forming single, double, or triple bonds depending on the number of shared electron pairs.`,
        `Lewis Structures: Diagrams that show how atoms bond and where lone pairs of electrons are located, including common exceptions such as incomplete or expanded octets.`,
        `VSEPR Theory: Explains molecular geometry by predicting shapes such as linear, trigonal planar, and tetrahedral based on electron pair repulsion.`,
        `Intermolecular Forces (IMF): Ranks forces from weakest to strongest, including London dispersion forces, dipole-dipole interactions, and hydrogen bonding.`,
      ],
    },
    {
      title: "Chemical Reactions",
      img: "IMG_1978.jpeg",
      text: [
        `Basics: Explains how to write and balance chemical equations while following the Law of Conservation of Mass.`,
        `Reaction Types: Classifies reactions into five major categories—synthesis, combustion, decomposition, single replacement, and double replacement—based on how substances interact.`,
        `Aqueous Chemistry: Focuses on reactions occurring in water, explaining how ions dissociate in solution and how precipitates form when insoluble products are created.`,
      ],
    },
  ];

  return (
    <div className="p-6 space-y-16">
      {/* Main Title */}
      <div className="flex justify-center mb-8">
        <h1 className={`${title()} text-center text-5xl font-extrabold text-white drop-shadow-2xl`}>
          Chemistry Units Conclusion
        </h1>
      </div>

      {/* Sections */}
      {sections.map((section, i) => (
        <div
          key={i}
          className="bg-gray-50 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8
                     md:even:flex-row-reverse animate-fade-in"
        >
          <img
            src={section.img}
            alt={section.title}
            className="w-[400px] max-w-full rounded-lg cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={() => setZoomImg(section.img)}
          />

          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-purple-800">{section.title}</h2>
            {section.text.map((line, j) => (
              <p key={j} className="text-gray-700">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* Zoom Modal */}
      {zoomImg && (
        <div
          className="fixed inset-0 w-full h-full bg-black/90 backdrop-blur-md flex items-center justify-center z-50 cursor-zoom-out p-6"
          onClick={() => setZoomImg(null)}
        >
          <img
            src={zoomImg}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl scale-110 transition-transform duration-200"
          />
        </div>
      )}

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes fade-in {
            0% {opacity:0; transform: translateY(20px);}
            100% {opacity:1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
