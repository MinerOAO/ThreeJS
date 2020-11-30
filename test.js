var geometry_01 = new THREE.BoxGeometry(2,2,2);
var material_01 = new THREE.MeshBasicMaterial(
    {color:0x66CCFF}
);
var cube = new THREE.Mesh(geometry_01,material_01);

var geometry_02 = new THREE.Geometry();
var material_02 = new THREE.LineBasicMaterial({color:0x0000FF});
geometry_02.vertices.push(new THREE.Vector3(-10,0,0));
geometry_02.vertices.push(new THREE.Vector3( 0, 10, 0) );
geometry_02.vertices.push(new THREE.Vector3( 10, 0, 0) );
geometry_02.vertices.push(new THREE.Vector3( -10, 0, 0) );
var line_01 = new THREE.Line(geometry_02,material_02);

var ambientlight = new THREE.AmbientLight(0xFFFFF);

var scene = new THREE.Scene();
scene.add(cube);
scene.add(line_01);
scene.add(ambientlight);
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/innerHeight,0.1,100);
//视野角度FOV,长宽比,近平面距离,远平面距离

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement ); 
//将renderer的dom元素加入HTML,为canvas元素

var clock = new THREE.Clock();

function animate(){
    requestAnimationFrame(animate);
    var elapsed = clock.getElapsedTime();
    renderer.render(scene,camera);
    cube.rotation.x = Math.sin(elapsed);
    cube.rotation.y = Math.cos(elapsed);
    camera.position.set(20 * Math.sin(elapsed),0,15);
    camera.lookAt(0,0,0);
}
animate();