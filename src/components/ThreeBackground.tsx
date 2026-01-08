import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0f172a, 0.002)

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const particleCount = 200
    const pointsGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color(0x14b8a6)
    const color2 = new THREE.Color(0x22d3ee)

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 60
      const y = (Math.random() - 0.5) * 60
      const z = (Math.random() - 0.5) * 40

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      const mixedColor = color1.clone().lerp(color2, Math.random())
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(particles)

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.15,
    })

    const lineGeometry = new THREE.BufferGeometry()
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(linesMesh)

    const coreGeo = new THREE.IcosahedronGeometry(2, 0)
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x22d3ee,
      wireframe: true,
      emissive: 0x0f766e,
      emissiveIntensity: 0.5,
    })
    const core = new THREE.Mesh(coreGeo, coreMat)
    scene.add(core)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x2dd4bf, 2, 50)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX
      mouseY = event.clientY - windowHalfY
    }

    document.addEventListener('mousemove', onMouseMove)

    const updateSize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      windowHalfX = w / 2
      windowHalfY = h / 2

      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    updateSize()

    const updateLines = () => {
      const positionsArr = particles.geometry.attributes.position.array as Float32Array
      const linePositions: number[] = []
      const connectDistance = 9
      const neighborLimit = 24

      for (let i = 0; i < particleCount; i++) {
        const x1 = positionsArr[i * 3]
        const y1 = positionsArr[i * 3 + 1]
        const z1 = positionsArr[i * 3 + 2]

        const maxJ = Math.min(particleCount, i + 1 + neighborLimit)
        for (let j = i + 1; j < maxJ; j++) {
          const x2 = positionsArr[j * 3]
          const y2 = positionsArr[j * 3 + 1]
          const z2 = positionsArr[j * 3 + 2]

          const dx = x1 - x2
          const dy = y1 - y2
          const dz = z1 - z2
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < connectDistance) {
            linePositions.push(x1, y1, z1, x2, y2, z2)
          }
        }
      }

      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
      ;(lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true
    }

    let raf = 0
    const animate = () => {
      raf = window.requestAnimationFrame(animate)

      targetX = mouseX * 0.001
      targetY = mouseY * 0.001

      particles.rotation.y += 0.001 + (targetX - particles.rotation.y) * 0.05
      particles.rotation.x += 0.001 + (targetY - particles.rotation.x) * 0.05

      linesMesh.rotation.y = particles.rotation.y
      linesMesh.rotation.x = particles.rotation.x

      core.rotation.x += 0.005
      core.rotation.y += 0.01

      updateLines()
      renderer.render(scene, camera)
    }

    animate()

    const onResize = () => updateSize()
    window.addEventListener('resize', onResize)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('mousemove', onMouseMove)

      pointsGeometry.dispose()
      pointsMaterial.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      coreGeo.dispose()
      coreMat.dispose()
      ambientLight.dispose()
      pointLight.dispose()
      renderer.dispose()

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div id="canvas-container" ref={containerRef} />
}
