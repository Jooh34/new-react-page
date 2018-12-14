import * as THREE from 'three';

import Piece from './Piece';

// Center location //
const U = 0;
const F = 1;
const R = 2;
const L = 3;
const B = 4;
const D = 5;
//

class CenterPiece extends Piece {

  constructor(sz,loc){
    const gap = 0.1;
    const pos = sz+gap;

    switch (loc) {
      case U:
        super(sz,sz,sz,0,pos,0);
        break;

      case F:
        super(sz,sz,sz,0,0,pos);
        break;

      case R:
        super(sz,sz,sz,pos,0,0);
        break;

      case L:
        super(sz,sz,sz,-pos,0,0);
        break;

      case B:
        super(sz,sz,sz,0,0,-pos);
        break;

      case D:
        super(sz,sz,sz,0,-pos,0);
        break;

      default:
        super(sz,sz,sz,0,0,0);
        break;
    }

    this.loc = loc;
  }

  addScene(scene) {

    const geometry = new THREE.BoxGeometry(this.w, this.h, this.d);
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
    const cube = new THREE.Mesh(geometry, material);

    switch (this.loc) {
      case U:
        this.addStickerU(cube);
        break;

      case F:
        this.addStickerF(cube);
        break;

      case R:
        this.addStickerR(cube);
        break;

      case L:
        this.addStickerL(cube);
        break;

      case B:
        this.addStickerB(cube);
        break;

      case D:
        this.addStickerD(cube);
        break;

      default:
        break;
    }

    scene.add(cube);
    cube.position.set(this.x,this.y,this.z);
    this.cube = cube;
  }
}

export default CenterPiece;
