'use client'
import Image from 'next/image'
import { Canvas } from "@react-three/fiber";
import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  )
}
