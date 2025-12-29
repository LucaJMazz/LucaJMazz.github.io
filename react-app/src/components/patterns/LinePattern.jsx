import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import fragmentShader from './fragment.glsl?raw';
import vertexShader from './vertex.glsl?raw';

function WaveMaterial() {
    const material = useRef()
    const scale = 7;

    useFrame(({ clock }) => {
        material.current.uniforms.uTime.value = clock.elapsedTime
        // Use actual window dimensions instead of canvas size
        material.current.uniforms.uResolution.value.set(
            window.innerWidth/ scale, 
            window.innerHeight/ scale
        )
    })

    return (
        <shaderMaterial
            ref={material}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(window.innerWidth/100, window.innerHeight) },
            }}
        />
    )
}

function FullscreenPlane() {
    const { viewport } = useThree()

    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <WaveMaterial/>
        </mesh>
    )
}

function LinePattern({ className, style, children }) {
    return (
        <div className={className} style={{ ...style, position: 'relative' }}>
            <Canvas 
                orthographic
                camera={{ zoom: 1, position: [0, 0, 1] }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <FullscreenPlane />
            </Canvas>

            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    )
}

export default LinePattern;