"use client"
import Button from "@/components/Button"
import CanvasLoader from "@/components/CanvasLoader"
import Cube from "@/components/Cube"
import HeroCamera from "@/components/HeroCamera"
import ReactLogo from "@/components/ReactLogo"
import Rings from "@/components/Rings"
import Setup from "@/components/Setup"
import Target from "@/components/Target"
import { calculateSizes } from "@/constants"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  //   const x = useControls("Setup", {
  //     positionX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 0,
  //       min: 0,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: 0,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 0,
  //       min: 0,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0,
  //       max: 100,
  //     },
  //   })

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Agrim <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Crafting Apps and Websites That Inspire
        </p>
        <div className="w-full h-full absolute inset-0">
          {/* <Leva /> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <perspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
                <Setup
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.4, 0.8, 0]}
                  // position={[x.positionX, x.positionY, x.positionZ]}
                  // scale={[x.scale, x.scale, x.scale]}
                  // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button
              name="Lets work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
