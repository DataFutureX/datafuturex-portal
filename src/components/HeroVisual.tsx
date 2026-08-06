import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COLORS = {
  blue: 0x1677ff,
  cyan: 0x00d4c7,
  violet: 0x7b61ff,
  bg: 0x1a4f78,
} as const

/**
 * Three.js Hero：数字地球 · AI 核心 · 数据节点 · IoT 连接线 · 粒子场
 */
export function HeroVisual() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const width = host.clientWidth || window.innerWidth
    const height = host.clientHeight || window.innerHeight

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(COLORS.bg, 0.028)

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100)
    camera.position.set(-1.2, 0.55, 5.2)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.className = 'hero-visual__canvas'
    host.insertBefore(renderer.domElement, host.firstChild)

    const root = new THREE.Group()
    root.position.set(1.35, 0.15, 0)
    scene.add(root)

    // 数字地球（线框经纬球）
    const earthGroup = new THREE.Group()
    const earthGeo = new THREE.SphereGeometry(1.35, 48, 32)
    const earthWire = new THREE.WireframeGeometry(earthGeo)
    const earthLines = new THREE.LineSegments(
      earthWire,
      new THREE.LineBasicMaterial({
        color: COLORS.blue,
        transparent: true,
        opacity: 0.28,
      }),
    )
    earthGroup.add(earthLines)

    const earthShell = new THREE.Mesh(
      earthGeo,
      new THREE.MeshBasicMaterial({
        color: COLORS.blue,
        transparent: true,
        opacity: 0.06,
      }),
    )
    earthGroup.add(earthShell)

    const equator = new THREE.Mesh(
      new THREE.TorusGeometry(1.38, 0.008, 8, 96),
      new THREE.MeshBasicMaterial({
        color: COLORS.cyan,
        transparent: true,
        opacity: 0.55,
      }),
    )
    equator.rotation.x = Math.PI / 2
    earthGroup.add(equator)
    root.add(earthGroup)

    // AI 核心（发光二十面体）
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.32, 1),
      new THREE.MeshBasicMaterial({
        color: COLORS.violet,
        transparent: true,
        opacity: 0.9,
        wireframe: true,
      }),
    )
    const coreGlow = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.22, 0),
      new THREE.MeshBasicMaterial({
        color: COLORS.cyan,
        transparent: true,
        opacity: 0.55,
      }),
    )
    root.add(core, coreGlow)

    // 数据节点 + IoT 连接线
    const nodeCount = 10
    const nodes: THREE.Mesh[] = []
    const nodePositions: THREE.Vector3[] = []
    const nodeGroup = new THREE.Group()
    const linePositions: number[] = []

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount)
      const theta = Math.sqrt(nodeCount * Math.PI) * phi
      const r = 1.85 + (i % 3) * 0.18
      const pos = new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.cos(phi) * 0.85,
        r * Math.sin(theta) * Math.sin(phi),
      )
      nodePositions.push(pos)

      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.045 + (i % 3) * 0.01, 12, 12),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? COLORS.cyan : COLORS.blue,
          transparent: true,
          opacity: 0.95,
        }),
      )
      node.position.copy(pos)
      nodes.push(node)
      nodeGroup.add(node)

      linePositions.push(0, 0, 0, pos.x, pos.y, pos.z)
      if (i > 0 && i % 3 === 0) {
        const prev = nodePositions[i - 1]
        linePositions.push(prev.x, prev.y, prev.z, pos.x, pos.y, pos.z)
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    const links = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({
        color: COLORS.cyan,
        transparent: true,
        opacity: 0.35,
      }),
    )
    root.add(nodeGroup, links)

    // 粒子场
    const particleCount = 420
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 10
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        color: COLORS.blue,
        size: 0.025,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    )
    scene.add(particles)

    const ambient = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambient)

    let frameId = 0
    let disposed = false
    const clock = new THREE.Clock()

    const resize = () => {
      if (disposed || !host) return
      const w = host.clientWidth
      const h = host.clientHeight
      if (w < 1 || h < 1) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(host)

    const renderFrame = () => {
      const t = clock.getElapsedTime()

      if (!reducedMotion) {
        earthGroup.rotation.y = t * 0.12
        earthGroup.rotation.x = Math.sin(t * 0.15) * 0.08
        core.rotation.x = t * 0.55
        core.rotation.y = t * 0.72
        coreGlow.rotation.y = -t * 0.4
        const pulse = 1 + Math.sin(t * 2.2) * 0.06
        core.scale.setScalar(pulse)
        coreGlow.scale.setScalar(pulse * 0.95)
        nodeGroup.rotation.y = t * 0.18
        particles.rotation.y = t * 0.04

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i]
          const base = nodePositions[i]
          n.position.y = base.y + Math.sin(t * 1.6 + i) * 0.06
        }
      }

      renderer.render(scene, camera)
    }

    const animate = () => {
      if (disposed) return
      renderFrame()
      if (!reducedMotion) {
        frameId = requestAnimationFrame(animate)
      }
    }

    renderFrame()
    if (!reducedMotion) {
      frameId = requestAnimationFrame(animate)
    }

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
      ro.disconnect()

      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh
        if (mesh.geometry) mesh.geometry.dispose()
        const mat = mesh.material
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
        else if (mat) mat.dispose()
      })

      renderer.dispose()
      if (renderer.domElement.parentElement === host) {
        host.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="hero-visual" aria-hidden="true" ref={hostRef}>
      <div className="hero-visual__haze" />
      <div className="hero-visual__grain" />
    </div>
  )
}
