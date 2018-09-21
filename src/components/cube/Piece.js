import * as THREE from 'three';

class Piece {
  constructor(w,h,d,x,y,z) {
    this.w = w;
    this.h = h;
    this.d = d;
    this.x = x;
    this.y = y;
    this.z = z;

    this.geo_plain = new THREE.PlaneGeometry(this.w-0.1, this.h-0.1);
  }

  addScene(scene) { // abstract method

  }

  addStickerU(cube) {
    let mat_plain;
    let plain;

    mat_plain = new THREE.MeshBasicMaterial({ color: '#FFFF00'});
    plain = new THREE.Mesh(this.geo_plain, mat_plain);
    plain.position.set(0,0.5001,0);
    plain.rotation.x = -Math.PI/2;
    cube.add(plain);
  }

  addStickerF(cube) {
    let mat_plain;
    let plain;

    mat_plain = new THREE.MeshBasicMaterial({ color: '#0000FF' });
    plain = new THREE.Mesh(this.geo_plain, mat_plain);
    plain.position.set(0,0,0.5001);
    cube.add(plain);
  }

  addStickerR(cube) {
    let mat_plain;
    let plain;

    mat_plain = new THREE.MeshBasicMaterial({ color: '#FF0000'});
    plain = new THREE.Mesh(this.geo_plain, mat_plain);
    plain.position.set(0.5001,0,0);
    plain.rotation.y = Math.PI/2;
    cube.add(plain);
  }

  addStickerL(cube) {
    let mat_plain;
    let plain;

    mat_plain = new THREE.MeshBasicMaterial({ color: '#FFA500'});
    plain = new THREE.Mesh(this.geo_plain, mat_plain);
    plain.position.set(-0.5001,0,0);
    plain.rotation.y = -Math.PI/2;
    cube.add(plain);
  }

  addStickerB(cube) {
    let mat_plain;
    let plain;

    mat_plain = new THREE.MeshBasicMaterial({ color: '#00FF00'});
    plain = new THREE.Mesh(this.geo_plain, mat_plain);
    plain.position.set(0,0,-0.5001);
    plain.rotation.y = Math.PI;
    cube.add(plain);
  }

  addStickerD(cube) {
    let mat_plain;
    let plain;

    mat_plain = new THREE.MeshBasicMaterial({ color: '#FFFFFF'});
    plain = new THREE.Mesh(this.geo_plain, mat_plain);
    plain.position.set(0,-0.5001,0);
    plain.rotation.x = Math.PI/2;
    cube.add(plain);
  }

  rotate(axis,angle) {
    const quaternion = new THREE.Quaternion().setFromAxisAngle( axis, angle );
    this.cube.position.applyQuaternion(quaternion);
    this.cube.rotateOnAxis( axis, angle );
  }
}

export default Piece;
