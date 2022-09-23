var GradientShader = {

  uniforms: {
    time: {
      type: "f",
      value: 1.0
    }
  },

  vertexShader: [
    "varying vec2 vUv;",
    "void main() {",
    "	 vUv = uv;",
    "	 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}"
  ].join('\n'),

  fragmentShader: [
    "varying vec2 vUv;",
    "uniform float time;",

    "// Íñigo Quílez",
    "// https://www.shadertoy.com/view/MsS3Wc",
    "vec3 hsv2rgb( in vec3 c ) {",
    "	 vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );",
    "	 rgb = rgb*rgb*(3.0-2.0*rgb); // cubic smoothing",
    "	 return c.z * mix( vec3(1.0), rgb, c.y);",
    "}",

    "void main() {",
    "	 float h = vUv.x - time;",
    "	 vec3 hsl = vec3( h, 1.0, 1.0 );",
    "	 vec3 col = hsv2rgb( hsl );",
    "	 gl_FragColor = vec4( col, 1.0 );",
    "}"
  ].join('\n'),
}

var OutlineShader = {

  uniforms: {
    offset: {
      type: 'f',
      value: 0.01
    },
    color: {
      type: 'v3',
      value: new THREE.Color('#000000')
    },
    alpha: {
      type: 'f',
      value: 1.0
    }
  },

  vertexShader: [

    "uniform float offset;",

    "void main() {",
    "  vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );",
    "  gl_Position = projectionMatrix * pos;",
    "}"

  ].join('\n'),

  fragmentShader: [

    "uniform vec3 color;",
    "uniform float alpha;",

    "void main() {",
    "  gl_FragColor = vec4( color, alpha );",
    "}"

  ].join('\n')

};

var container = document.getElementById('infiny');

var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight/2);
container.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, .1, 1000);
camera.position.set(0, 0, 2);

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x37253F);

// ---------------------------------------------------------------

var points = []; // for line
var pointsGeo = new THREE.Geometry(); // for dots

// Lemniscate of Bernoulli
// https://gamedev.stackexchange.com/a/43704
for (var t = 0; t < 2 * Math.PI; t += Math.PI / 36) {

  var point = new THREE.Vector3();

  var scale = 1.1 / (3 - Math.cos(2 * t));
  point.set(
    scale * Math.cos(t),
    scale * Math.sin(2 * t) / 2,
    0.11 * Math.sin(t)
  );

  points.push(point);
  pointsGeo.vertices.push(point);

};

var curve = new THREE.CatmullRomCurve3(points, false);

// tube James Bond (0.07)
var tubeGeo = new THREE.TubeBufferGeometry(curve, 64, 0.03, 32, true);

var clock = new THREE.Clock();

var tubeMat = new THREE.ShaderMaterial({
  uniforms: THREE.UniformsUtils.clone(GradientShader.uniforms),
  vertexShader: GradientShader.vertexShader,
  fragmentShader: GradientShader.fragmentShader
});

var tube = new THREE.Mesh(tubeGeo, tubeMat);
scene.add(tube);

var outlineMat = new THREE.ShaderMaterial({
  uniforms: THREE.UniformsUtils.clone(OutlineShader.uniforms),
  vertexShader: OutlineShader.vertexShader,
  fragmentShader: OutlineShader.fragmentShader,
  side: THREE.BackSide
});

var tubeOutline = new THREE.Mesh(tubeGeo, outlineMat);
tube.add(tubeOutline);

//

var sphereGeo = new THREE.SphereBufferGeometry(0.11, 32, 32);
var sphereMat = new THREE.MeshBasicMaterial({
  color: 0x111111
});
var sphere = new THREE.Mesh(sphereGeo, sphereMat);
tube.add(sphere);

// ---------------------------------------------------------------

window.addEventListener('resize', resize, false);

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight/2);
}

renderer.setAnimationLoop(loop);

function loop() {

  var t = clock.getElapsedTime();

  tubeMat.uniforms.time.value = t / 10; // /6

  var scale = 1.1 / (3 - Math.cos(2 * t) );
  sphere.position.set(
    scale * Math.cos(t),
    scale * Math.sin(2 * t) / 2,
    0.1 * Math.sin(t)
  );

  renderer.render(scene, camera);
}