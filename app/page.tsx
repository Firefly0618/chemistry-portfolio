"use client";

import { subtitle, title } from "@/components/primitives";
import { useState } from "react";

export default function AboutMePage() {
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const sections = [
    {
      title: "Properties of Matter",
      img: "IMG_1971.jpeg",
      text: [
        `Properties of Matter: Understand the physical and chemical properties of matter, how they behave and interact, and intensive and extensive properties. For example, malleability and density are physical properties; and reactivity and flammability and chemical properties. Intensive properties are independent of the amount of matter; and extensive properties are dependent on the size of the sample. `,
        `Changes: Understand physical changes, including phase changes such as melting and sublimation. Chemical changes, such as explosions and burning, where new substances are formed through chemical reactions. `,
        `Classification: Understand how matter is separated into elements, mixtures, and homogenous and heterogenous compounds.  `,
        `Separation Techniques: Understand the methods—filtration, distillation, sublimation, crystallization, and chromatography—that are used to separate substances from a mixture. All separation methods are used to separate compounds from the mixture depending on their physical properties. `,
      ],
    },
    {
      title: "Structure of the Atoms",
      img: "IMG_1972.jpeg",
      text: [
        `Atomic Models History: Learning about the evolution of atomic theory through models created by scientists. From Dalton’s “Billiard Ball” model to Thomson’s “Plum Pudding” model, to Rutherford’s Gold Foil experiment that revealed the nucleus, and finally the modern Electron Cloud model. `,
        `Atomic Structure: Defines the roles of protons, neutrons, and electrons in an atom. Understand ions as charged atoms and isotopes as atoms of the same element with different masses. `,
        `Radioactivity: Understand nuclear stability and describes the three main types of radioactive decays and their power of penetration. Alpha decay (loss of a helium nucleus) can’t penetrate paper. Beta decay (conversion of a neutron into a proton) can’t penetrate heavy clothing. Gamma decay (release of high-energy radiation) can´t penetrate lead. `,
      ],
    },
    {
      title: "Electron in Atoms",
      img: "IMG_1973.jpeg",
      text: [
        `Wave Mechanics: Understand the relationship between wavelength and frequency to the electromagnetic spectrum. Know why atomic emission spectra is a unique “fingerprint” that can be used to identify different elements. `,
        `Quantum Theory: Understand the quantized energy levels, sublevels (s, p, d, f) and where they are located, and orbitals. The Quantum Theory demonstrated that electrons occupy specific energy regions rather than fixed paths. `,
        `Electron Configuration: Understand the Aufbau Principle, Pauli Exclusion, and Hund’s Rule. Together, they explained how electrons fill orbitals and why electron configurations follow predictable patterns.`,
      ],
    },
    {
      title: "The Periodic Table and Periodic Law",
      img: "IMG_1974.jpeg",
      text: [
        `Organization: How the periodic table is arranged by increasing the atomic number into groups and periods. Understand where the s, p, d, and f blocks are located in the periodic table. `,
        `Atomic Mass and Effective Nuclear Charge (ENC): Understand what is ENC, and how does it attract electrons to the nucleus and increase or decrease the atomic mass `,
        `Periodic trends: Know what is ionization energy, when will it help elements to gain or lose an electron, and the relation with atomic radius. Understand the difference between anion and cation, and their properties.`,
      ],
    },
    {
      title: "Ionic Compounds and Metals",
      img: "IMG_1976.jpeg",
      text: [
        `Ions: Understand how atoms gain or lose electrons to be stable. They usually follow the Octet Rule of having eight valence electrons but with some exceptions. `,
        `Naming: Covers basic nomenclature rules for ionic compounds, such as correctly naming substances like sodium chloride (NaCl), and remember elements like chlorine change to chloride. `,
        `Ionic Bonding: Understanding bonding between metals and nonmetals through electron transfer (ONLY transfer). Ionic bonding resulted in oppositely charged ions held together in a crystal lattice structure. `,
        `Metallic Bonding: Understand the sea of electrons, which helps explain why metals are conductive, malleable, and lustrous`,
      ],
    },
    {
      title: "Covalent Bonding",
      img: "IMG_1977.jpeg",
      text: [
        `Covalent Bonds: The bond occurs when only nonmetals share electrons to achieve stability, forming single, double, or triple bonds depending on the number of shared electron pairs. `,
        `Lewis Structures: Diagrams that show how atoms bond and where lone pairs of electrons are located, including common exceptions such as incomplete or expanded octets. `,
        `VSEPR Theory: Explains molecular geometry by predicting shapes such as linear, trigonal planar, and tetrahedral on electron pair and find if they are polar or nonpolar. `,
        `Intermolecular Forces (IMF): Three types of force, including London dispersion forces (weakest), dipole-dipole interactions (medium), and hydrogen bonding (strongest), and know when they are formed. `,
      ],
    },
    {
      title: "Chemical Reactions",
      img: "IMG_1978.jpeg",
      text: [
        `Basics of chemical equation: The basics of how to write and balance chemical equations while following the Law of Conservation of Mass, which the result stays neutral (mean without positive or negative charge). `,
        `Reaction Types: Understand the five reaction types—synthesis, combustion, decomposition, single replacement, and double replacement—based on how substances interact. `,
        `Aqueous Chemistry: Focuses on reactions occurring in water, explaining how ions dissociate in solution and how precipitates form when insoluble products are created. `,
      ],
    },
  ];

  return (
    <div
      className="p-6 space-y-16 min-h-screen"
      style={{
        background: "radial-gradient(circle, #1a1a1a 0%, #000000 100%)",
      }}
    >
      {/* Main Title */}
      <div className="flex flex-col items-center mb-8 space-y-3">
        <h1
          className={`${title()} text-center text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(128,0,128,0.7)]`}
        >
          Chemistry Units Conclusion
        </h1>

        <p
          className="text-2xl md:text-3xl font-semibold text-white text-center
                     drop-shadow-[0_2px_10px_rgba(128,0,128,0.7)]"
        >
          by Haosong Huang
        </p>
      </div>

      {/* Sections */}
      {sections.map((section, i) => (
        <div
          key={i}
          className="bg-gray-700 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8
                     md:even:flex-row-reverse animate-fade-in"
        >
          <img
            src={section.img}
            alt={section.title}
            className="w-[400px] max-w-full rounded-lg cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={() => setZoomImg(section.img)}
          />

          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-purple-400">
              {section.title}
            </h2>
            {section.text.map((line, j) => (
              <p key={j} className="text-gray-200">
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
