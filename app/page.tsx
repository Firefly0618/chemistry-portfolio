"use client";

import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useState } from "react";

export default function AboutMePage() {
  return (
    <div className="p-4 space-y-12">
      {/* Main Title Centered */}
      <div className="flex justify-center">
        <h1 className={`${title()} text-center`}>
          Chemistry Unit Conclusions
        </h1>
      </div>

      {/* Properties of Matter */}
      <div className="flex flex-col space-y-4">
        <h6 className="text-4xl text-center">Properties of Matter</h6>
        <p className="text-center">
          Properties of Matter: Distinguishes between physical properties
          (malleability, density) and chemical properties (reactivity,
          flammability). It also notes the difference between intensive
          (size-independent) and extensive (size-dependent) properties.
        </p>
        <p className="text-center">
          Changes: Covers physical changes (phase changes like
          melting/sublimation) versus chemical changes (explosions/burning)
          where new substances are formed.
        </p>
        <p className="text-center">
          Classification: Breaks down matter into elements, compounds, and
          mixtures (homogeneous vs. heterogeneous).
        </p>
        <p className="text-center">
          Separation Techniques: filtration, distillation, sublimation,
          crystallization, and chromatography.
        </p>
      </div>

      <hr />

      {/* Structure of the Atoms */}
      <div className="flex flex-col space-y-4">
        <h6 className="text-4xl text-center">Structure of the Atoms</h6>
        <p className="text-center">
          Atomic History: Tracks the evolution of the atom from Dalton’s
          "Billiard Ball" to Thomson’s "Plum Pudding," Rutherford’s "Gold Foil"
          (nucleus discovery), and the modern Electron Cloud model.
        </p>
        <p className="text-center">
          Atomic Structure: Defines protons, neutrons, electrons, ions (charged
          atoms), and isotopes (same element, different mass).
        </p>
        <p className="text-center">
          Radioactivity: Explains nuclear stability and the three types of decay:
          Alpha (loss of He nucleus), Beta (neutron to proton change), and Gamma
          (high-energy radiation).
        </p>
      </div>

      <hr />

      {/* Electron in Atoms */}
      <div className="flex flex-col space-y-4">
        <h6 className="text-4xl text-center">Electron in Atoms</h6>
        <p className="text-center">
          Wave Mechanics: Relates wavelength and frequency to the electromagnetic
          spectrum and explains atomic emission spectra (the "fingerprint" of
          elements).
        </p>
        <p className="text-center">
          Quantum Theory: Introduces energy levels ($n$), sublevels ($s, p, d,
          f$), and orbitals.
        </p>
        <p className="text-center">
          Electron Mapping: Outlines the Aufbau Principle (fill lowest energy
          first), Pauli Exclusion Principle (opposite spins), and Hund’s Rule
          (don't pair up until necessary).
        </p>
      </div>

      <hr />

      {/* Periodic Table and Periodic Law */}
      <div className="flex flex-col space-y-4">
        <h6 className="text-4xl text-center">
          The Periodic Table and Periodic Law
        </h6>
        <p className="text-center">
          Organization: Describes the layout of the periodic table by groups
          (vertical) and periods (horizontal), including the s, p, d, f blocks.
        </p>
        <h6 className="text-2xl text-center">Periodic Trends</h6>
        <p className="text-center">Atomic Radius: Increases down, decreases right.</p>
        <p className="text-center">
          Ionization Energy & Electronegativity: Generally increase up and to the
          right.
        </p>
        <p className="text-center">
          Effective Nuclear Charge (ENC): The driving force behind these trends.
        </p>
      </div>

      <hr />

      {/* Ionic Compounds and Metals */}
      <div className="flex flex-col space-y-4">
        <h6 className="text-4xl text-center">Ionic Compounds and Metals</h6>
        <p className="text-center">
          Ions: Atoms lose or gain electrons to satisfy the Octet Rule (having 8
          valence electrons).
        </p>
        <p className="text-center">
          Ionic Bonding: Occurs between metals and nonmetals via electron
          transfer, resulting in a crystal lattice structure.
        </p>
        <p className="text-center">
          Metallic Bonding: Described as a "sea of electrons" which explains why
          metals are conductive, malleable, and lustrous.
        </p>
        <p className="text-center">
          Naming: Covers basic nomenclature for ionic compounds (Sodium Chloride
          and NaCl).
        </p>
      </div>

      <hr />

      {/* Covalent Bonding */}
      <div className="flex flex-col space-y-4">
        <h6 className="text-4xl text-center">Covalent Bonding</h6>
        <p className="text-center">
          Covalent Bonds: Occurs when nonmetals share electrons. Includes single,
          double, and triple bonds.
        </p>
        <p className="text-center">
          Lewis Structures: Diagrams showing how atoms bond and where lone pairs
          sit. Notes exceptions like incomplete octets and expanded octets.
        </p>
        <p className="text-center">
          VSEPR Theory: Explains molecular shapes (Linear, Trigonal Planar,
          Tetrahedral) based on electron repulsion.
        </p>
        <p className="text-center">
          Intermolecular Forces (IMF): Ranks forces from weakest (London
          Dispersion) to strongest (Hydrogen Bonding).
        </p>
      </div>

      <hr />

      {/* Chemical Reactions */}
      <div className="flex flex-col space-y-4">
        <h6 className="text-4xl text-center">Chemical Reactions</h6>
        <p className="text-center">
          Basics: How to write and balance equations to satisfy the Law of
          Conservation of Mass.
        </p>
        <p className="text-center">
          Reaction Types: Classifies reactions into five categories: Synthesis,
          Combustion, Decomposition, Single Replacement, and Double Replacement.
        </p>
        <p className="text-center">
          Aqueous Chemistry: Focuses on substances dissolved in water (the
          solvent), explaining precipitates (solids formed in a liquid) and how
          ions behave in solution.
        </p>
      </div>
    </div>
  );
}
