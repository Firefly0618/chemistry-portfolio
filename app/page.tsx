"use client";

import { title } from "@/components/primitives";
import { useState } from "react";

export default function AboutMePage() {
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const sections = [
    {
      title: "Properties and Changes",
      img: "IMG_1971.jpeg",
      text: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Properties of Matter:</strong> Understand the physical and
            chemical properties of matter, how they behave and interact, and the
            difference between intensive and extensive properties. Malleability
            and density are physical properties, while reactivity and
            flammability are chemical properties.
          </li>
          <li>
            <strong>Changes:</strong> Understand physical changes, including phase
            changes such as melting and sublimation. Understand chemical changes,
            such as explosions and combustion, where new substances are formed.
          </li>
          <li>
            <strong>Classification:</strong> Understand how matter is classified
            as pure substances (elements and compounds) or mixtures, including
            homogeneous and heterogeneous mixtures.
          </li>
          <li>
            <strong>Separation Techniques:</strong> Understand methods such as
            filtration, distillation, sublimation, crystallization, and
            chromatography used to separate substances based on physical
            properties.
          </li>
        </ul>
      ),
    },
    {
      title: "Structure of the Atom",
      img: "IMG_1972.jpeg",
      text: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Atomic Models History:</strong> Learn about the evolution of
            atomic theory from Dalton’s “Billiard Ball” model to Thomson’s “Plum
            Pudding” model, Rutherford’s Gold Foil Experiment, and the modern
            Electron Cloud model.
          </li>
          <li>
            <strong>Atomic Structure:</strong> Understand the roles of protons,
            neutrons, and electrons. Recognize ions as charged atoms and isotopes
            as atoms of the same element with different masses.
          </li>
          <li>
            <strong>Radioactivity:</strong> Understand nuclear stability and the
            three main types of radioactive decay and their penetrating power.
            Alpha cannot penetrate paper, beta cannot penetrate heavy clothing,
            and gamma requires thick lead shielding.
          </li>
        </ul>
      ),
    },
    {
      title: "Electron in the Atom",
      img: "IMG_1973.jpeg",
      text: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Wave Mechanics:</strong> Understand the relationship between
            wavelength and frequency in the electromagnetic spectrum and why
            atomic emission spectra act as unique fingerprints.
          </li>
          <li>
            <strong>Quantum Theory:</strong> Understand quantized energy levels,
            sublevels (s, p, d, f), and orbitals. Electrons occupy regions of
            probability rather than fixed paths.
          </li>
          <li>
            <strong>Electron Configuration:</strong> Understand the Aufbau
            Principle, Pauli Exclusion Principle, and Hund’s Rule, which explain
            how electrons fill orbitals.
          </li>
        </ul>
      ),
    },
    {
      title: "The Periodic Table and Periodic Law",
      img: "IMG_1974.jpeg",
      text: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Organization:</strong> Understand how the periodic table is
            arranged by increasing atomic number into periods and groups and
            where the s, p, d, and f blocks are located.
          </li>
          <li>
            <strong>Atomic Radius & ENC:</strong> Understand effective nuclear
            charge, shielding effects, and how these influence atomic radius.
          </li>
          <li>
            <strong>Periodic Trends:</strong> Understand ionization energy, its
            relationship with atomic radius, and the difference between anions
            and cations.
          </li>
        </ul>
      ),
    },
    {
      title: "Ionic Compounds and Metals",
      img: "IMG_1976.jpeg",
      text: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Ions:</strong> Understand how atoms gain or lose electrons to
            achieve stability, usually following the octet rule.
          </li>
          <li>
            <strong>Naming:</strong> Learn nomenclature rules for ionic compounds,
            such as sodium chloride (NaCl) and name changes like chlorine to
            chloride.
          </li>
          <li>
            <strong>Ionic Bonding:</strong> Understand bonding between metals and
            nonmetals through electron transfer, forming a crystal lattice.
          </li>
          <li>
            <strong>Metallic Bonding:</strong> Understand the sea of electrons
            model, explaining conductivity, malleability, and luster.
          </li>
        </ul>
      ),
    },
    {
      title: "Covalent Bonding",
      img: "IMG_1977.jpeg",
      text: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Covalent Bonds:</strong> Formed when nonmetals share electrons,
            creating single, double, or triple bonds.
          </li>
          <li>
            <strong>Lewis Structures:</strong> Show bonding and lone pairs,
            including incomplete or expanded octets.
          </li>
          <li>
            <strong>VSEPR Theory:</strong> Predicts molecular geometry and polarity
            such as linear, trigonal planar, and tetrahedral shapes.
          </li>
          <li>
            <strong>Intermolecular Forces:</strong> Includes London dispersion,
            dipole–dipole interactions, and hydrogen bonding.
          </li>
        </ul>
      ),
    },
    {
      title: "Chemical Reactions",
      img: "IMG_1978.jpeg",
      text: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Chemical Equations:</strong> Write and balance equations while
            following the Law of Conservation of Mass.
          </li>
          <li>
            <strong>Reaction Types:</strong> Understand synthesis, combustion,
            decomposition, single replacement, and double replacement reactions.
          </li>
          <li>
            <strong>Aqueous Chemistry:</strong> Understand ion dissociation and
            precipitate formation in water-based reactions.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div
      className="p-6 space-y-16 min-h-screen"
      style={{
        background: "radial-gradient(circle, #1a1a1a 0%, #000000 100%)",
      }}
    >
      <div className="flex flex-col items-center mb-8 space-y-3">
        <h1
          className={`${title()} text-center text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(128,0,128,0.7)]`}
        >
          Chemistry Units Conclusion
        </h1>
        <p className="text-2xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(128,0,128,0.7)]">
          by Haosong Huang
        </p>
      </div>

      {sections.map((section, i) => (
        <div
          key={i}
          className="bg-gray-700 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8 md:even:flex-row-reverse animate-fade-in"
        >
          <img
            src={section.img}
            alt={section.title}
            className="w-[400px] max-w-full rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
            onClick={() => setZoomImg(section.img)}
          />
          <div className="space-y-4 text-center md:text-left text-gray-200">
            <h2 className="text-3xl font-semibold text-purple-400">
              {section.title}
            </h2>
            {section.text}
          </div>
        </div>
      ))}

      {zoomImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setZoomImg(null)}
        >
          <img
            src={zoomImg}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
