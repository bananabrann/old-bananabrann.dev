import * as THREE from "three";
import { AsciiEffect } from "three/addons/effects/AsciiEffect.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import { useEffect } from "react";

export default function ThreeD() {
  useEffect(() => {
    init();
    animate();
  }, []);

  let camera, controls, scene, renderer, effect;
  let plane, cube;

  const start = Date.now();

  function init() {
    camera = new THREE.PerspectiveCamera(
      70,
      window?.innerWidth / window?.innerHeight,
      1,
      1000
    );
    camera.position.y = 150;
    camera.position.z = 500;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);

    const pointLight1 = new THREE.PointLight(0xffffff);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.25);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    cube = new THREE.Mesh(
      new THREE.BoxGeometry(200, 200, 200),
      new THREE.MeshPhongMaterial({ flatShading: true })
    );
    scene.add(cube);

    plane = new THREE.Mesh(
      new THREE.PlaneGeometry(300, 300),
      new THREE.MeshBasicMaterial({ color: 0xe0e0e0 })
    );
    plane.position.y = -200;
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: true });
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "black";

    document.body.appendChild(effect.domElement);

    controls = new TrackballControls(camera, effect.domElement);

    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  function render() {
    const timer = Date.now() - start;

    cube.position.y = Math.abs(Math.sin(timer * 0.0002)) * 250;
    cube.rotation.x = timer * 0.0002;
    cube.rotation.z = timer * 0.0003;

    controls.update();

    effect.render(scene, camera);
  }

  return <canvas id="cube-bg"></canvas>;
}
