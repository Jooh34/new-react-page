import * as THREE from 'three';

import Piece from './Piece';

// Rotation Dir //
const U_ = 0;
const U_i = 1;
const F_ = 2;
const F_i = 3;
const R_ = 4;
const R_i = 5;
const B_ = 6;
const B_i = 7;
const L_ = 8;
const L_i = 9;
const D_ = 10;
const D_i = 11;
//

// Edge Location //
const UF = 0;
const UR = 1;
const UB = 2;
const UL = 3;
const FR = 4;
const BR = 5;
const BL = 6;
const FL = 7;
const DF = 8;
const DR = 9;
const DB = 10;
const DL = 11;
//

class EdgePiece extends Piece {
  constructor(sz,loc){
    const gap = 0.1;
    const pos = sz+gap;

    switch (loc) {
      case UF:
        super(sz,sz,sz,0,pos,pos);
        break;

      case UR:
        super(sz,sz,sz,pos,pos,0);
        break;

      case UB:
        super(sz,sz,sz,0,pos,-pos);
        break;

      case UL:
        super(sz,sz,sz,-pos,pos,0);
        break;

      case FR:
        super(sz,sz,sz,pos,0,pos);
        break;

      case BR:
        super(sz,sz,sz,pos,0,-pos);
        break;

      case BL:
        super(sz,sz,sz,-pos,0,-pos);
        break;

      case FL:
        super(sz,sz,sz,-pos,0,pos);
        break;

      case DF:
        super(sz,sz,sz,0,-pos,pos);
        break;

      case DR:
        super(sz,sz,sz,pos,-pos,0);
        break;

      case DB:
        super(sz,sz,sz,0,-pos,-pos);
        break;

      case DL:
        super(sz,sz,sz,-pos,-pos,0);
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
      case UF:
        this.addStickerU(cube);
        this.addStickerF(cube);
        break;

      case UR:
        this.addStickerU(cube);
        this.addStickerR(cube);
        break;

      case UB:
        this.addStickerU(cube);
        this.addStickerB(cube);
        break;

      case UL:
        this.addStickerU(cube);
        this.addStickerL(cube);
        break;

      case FR:
        this.addStickerF(cube);
        this.addStickerR(cube);
        break;

      case BR:
        this.addStickerB(cube);
        this.addStickerR(cube);
        break;

      case BL:
        this.addStickerB(cube);
        this.addStickerL(cube);
        break;

      case FL:
        this.addStickerF(cube);
        this.addStickerL(cube);
        break;

      case DF:
        this.addStickerD(cube);
        this.addStickerF(cube);
        break;

      case DR:
        this.addStickerD(cube);
        this.addStickerR(cube);
        break;

      case DB:
        this.addStickerD(cube);
        this.addStickerB(cube);
        break;

      case DL:
        this.addStickerD(cube);
        this.addStickerL(cube);
        break;

      default:
        break;
    }

    scene.add(cube);
    cube.position.set(this.x,this.y,this.z);
    this.cube = cube;
  }

  refresh(rot_dir) {
    switch (rot_dir) {
      case R_  :
        switch (this.loc) {
          case FR :
            this.loc = UR;
            break;

          case UR :
            this.loc = BR;
            break;

          case BR :
            this.loc = DR;
            break;

          case DR :
            this.loc = FR;
            break;

          default :
        }
        break;

      case L_i :
        switch (this.loc) {
          case FL :
            this.loc = UL;
            break;

          case UL :
            this.loc = BL;
            break;

          case BL :
            this.loc = DL;
            break;

          case DL :
            this.loc = FL;
            break;

          default :
            break;
        }
        break;

      case R_i :
        switch (this.loc) {
          case FR :
            this.loc = DR;
            break;

          case DR :
            this.loc = BR;
            break;

          case BR :
            this.loc = UR;
            break;

          case UR :
            this.loc = FR;
            break;

          default :
            break;
        }
        break;

      case L_ :
        switch (this.loc) {
          case FL :
            this.loc = DL;
            break;

          case DL :
            this.loc = BL;
            break;

          case BL :
            this.loc = UL;
            break;

          case UL :
            this.loc = FL;
            break;

          default :
            break;
        }
        break;

      case U_ :
        switch (this.loc) {
          case UF :
            this.loc = UL;
            break;

          case UR :
            this.loc = UF;
            break;

          case UB :
            this.loc = UR;
            break;

          case UL :
            this.loc = UB;
            break;

          default :
            break;
        }
        break;

      case D_i :
        switch (this.loc) {
          case DF :
            this.loc = DL;
            break;

          case DR :
            this.loc = DF;
            break;

          case DB :
            this.loc = DR;
            break;

          case DL :
            this.loc = DB;
            break;

          default :
            break;
        }
        break;

      case U_i :
        switch (this.loc) {
          case UF :
            this.loc = UR;
            break;

          case UR :
            this.loc = UB;
            break;

          case UB :
            this.loc = UL;
            break;

          case UL :
            this.loc = UF;
            break;

          default :
            break;
        }
        break;

      case D_ :
        switch (this.loc) {
          case DF :
            this.loc = DR;
            break;

          case DR :
            this.loc = DB;
            break;

          case DB :
            this.loc = DL;
            break;

          case DL :
            this.loc = DF;
            break;

          default :
            break;
        }
        break;

      case F_ :
        switch (this.loc) {
          case UF :
            this.loc = FR;
            break;

          case FR :
            this.loc = DF;
            break;

          case DF :
            this.loc = FL;
            break;

          case FL :
            this.loc = UF;
            break;

          default :
            break;
        }
        break;

      case B_i :
        switch (this.loc) {
          case UB :
            this.loc = BR;
            break;

          case BR :
            this.loc = DB;
            break;

          case DB :
            this.loc = BL;
            break;

          case BL :
            this.loc = UB;
            break;

          default :
            break;
        }
        break;

      case F_i :
        switch (this.loc) {
          case UF :
            this.loc = FL;
            break;

          case FL :
            this.loc = DF;
            break;

          case DF :
            this.loc = FR;
            break;

          case FR :
            this.loc = UF;
            break;

          default :
            break;
        }
        break;

      case B_ :
        switch (this.loc) {
          case UB :
            this.loc = BL;
            break;

          case BL :
            this.loc = DB;
            break;

          case DB :
            this.loc = BR;
            break;

          case BR :
            this.loc = UB;
            break;

          default :
            break;
        }
        break;

      default :
        break;
    }
  }
}

export default EdgePiece;
