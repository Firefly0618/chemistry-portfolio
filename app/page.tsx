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
        `Properties of Matter: Understand the physical properties of matter. Such as malleability and density, chemical properties such as reactivity and flammability, and how substances behave and interact. It also includes intensive and extensive properties. Where intensive properties are independent of the amount of matter, and extensive properties are dependent on the size of the sample.`,
        `Changes: Covers physical changes, including phase changes like melting and sublimation, versus chemical changes such as explosions and burning, where new substances are formed through chemical reactions.`,
        `Classification: Breaks down matter into elements, compounds, mixtures, classify the homogenous and heterogenous compounds.`,
        `Separation Techniques: Introduces methods to separate substances including filtration, distillation, sublimation, crystallization, and chromatography, those are methods are used to separate substances depends on their physical properties.`,
      ],
    },
    {
      title: "Structure of the Atoms",
      img: "IMG_1972.jpeg",
      text: [
        `Atomic History: Learning evolution of atomic theory through models created by scientists. From Dalton’s “Billiard Ball” model to Thomson’s “Plum Pudding” model, to Rutherford’s Gold Foil experiment that revealed the nucleus, and finally the modern Electron Cloud model.`,
        `Atomic Structure: Defines the roles of protons, neutrons, and electrons in an atom, also understand ions as charged atoms and isotopes as atoms of the same element with different masses.`,
        `Radioactivity: Understand nuclear stability and describes the three main types of radioactive decays and their power of penetration. Alpha decay (loss of a helium nucleus) can’t penetrate paper, Beta decay (conversion of a neutron into a proton) can’t penetrate heavy clothing, and Gamma decay (release of high-energy radiation) can´t penetrate lead.`,
      ],
    },
    {
      title: "Electron in Atoms",
      img: "IMG_1973.jpeg",
      text: [
        `Wave Mechanics: Understand relationship of wavelength and frequency to the electromagnetic spectrum and understand how atomic emission spectra is a unique “fingerprint” that can be used to identify different elements.`,
        `Quantum Theory: The quantized energy levels, sublevels (s, p, d, f) and where they are located, and orbitals, demonstrating that electrons occupy specific energy regions rather than fixed paths.`,
        `Electron Configuration: Understand the Aufbau Principle, Pauli Exclusion, and Hund’s Rule, which together explain how electrons fill orbitals and why electron configurations follow predictable patterns.`,
      ],
    },
    {
      title: "The Periodic Table and Periodic Law",
      img: "IMG_1974.jpeg",
      text: [
        `Organization: How the periodic table is arranged by increasing atomic number into groups and periods, including where do the s, p, d, and f blocks located in the periodic table.`,
        `Atomic Radius: The atomic size increases down a group due to increase on energy levels and decreases across a period since nuclear charge increases.`,
        `Effective Nuclear Charge: Understand what is ENC, and how do it attracts electrons to the nucleus.`,
      ],
    },
    {
      title: "Ionic Compounds and Metals",
      img: "IMG_1976.jpeg",
      text: [
        `Ions: Understand how atoms gain or lose electrons to be stable, usually following the Octet Rule of having eight valence electrons but with some exceptions.`,
        `Naming: Covers basic nomenclature rules for ionic compounds, such as correctly naming substances like sodium chloride (NaCl), and remember element like chlorine change to chloride.`,
        `Ionic Bonding: Understanding bonding between metals and nonmetals through electron transfer(ONLY transfer), resulting in oppositely charged ions held together in a crystal lattice structure.`,
        `Metallic Bonding: Understand the sea of electrons, which helps explain why metals are conductive, malleable, and lustrous.`,
      ],
    },
    {
      title: "Covalent Bonding",
      img: "IMG_1977.jpeg",
      text: [
        `Covalent Bonds: The bond occur when only nonmetals share electrons to achieve stability, forming single, double, or triple bonds depending on the number of shared electron pairs.`,
        `Lewis Structures: Diagrams that show how atoms bond and where lone pairs of electrons are located, including common exceptions such as incomplete or expanded octets.`,
        `VSEPR Theory: Explains molecular geometry by predicting shapes such as linear, trigonal planar, and tetrahedral on electron pair and find if they are polar or nonpolar.`,
        `Intermolecular Forces (IMF):Three types of force, including London dispersion forces(weakest), dipole-dipole interactions(medium), and hydrogen bonding(strongest), and know when do they form.`,
      ],
    },
    {
      title: "Chemical Reactions",
      img: "IMG_1978.jpeg",
      text: [
        `Basics of chemical equation: Explains how to write and balance chemical equations while following the Law of Conservation of Mass which the result stay neutral.`,
        `Reaction Types: Understand the five reaction types—synthesis, combustion, decomposition, single replacement, and double replacement—based on how substances interact.`,
        `Aqueous Chemistry: Focuses on reactions occurring in water, explaining how ions dissociate in solution and how precipitates form when insoluble products are created.`,
      ],
    },
  ];

  return (
    <div className="p-6 space-y-16 min-h-screen" 
         style={{
           background: "radial-gradient(circle, #1a1a1a 0%, #000000 100%)"
         }}>
      {/* Main Title */}
      <div className="flex justify-center mb-8">
        <h1
          className={`${title()} text-center text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(128,0,128,0.7)]`}
        >
          Chemistry Units Conclusion
        </h1>
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
            <h2 className="text-3xl font-semibold text-purple-400">{section.title}</h2>
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
