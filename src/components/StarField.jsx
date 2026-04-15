import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  
  // Reduced to 2000 points for a cleaner, more minimalistic look (matching screenshots)
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, []);

  useFrame((state, delta) => {
    const { mouse } = state;
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;

    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * 0.1, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * 0.1, 0.05);
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export default function StarField() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#020202']} />
        <fog attach="fog" args={['#020202', 0, 5]} />
        <ParticleField />
      </Canvas>
      
      {/* Very subtle CRT/noise overlay for texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.01]"
        style={{
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 2px, 3px 100%'
        }}
      />
    </div>
  );
}
