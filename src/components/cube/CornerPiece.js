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

// Corner location //
const UFL = 0;
const UFR = 1;
const UBR = 2;
const UBL = 3;
const DFL = 4;
const DFR = 5;
const DBR = 6;
const DBL = 7;
//

class CornerPiece extends Piece {
  constructor(sz,loc){
    const gap = 0.1;
    const pos = sz+gap;

    switch (loc) {
      case UFL:
        super(sz,sz,sz,-pos,pos,pos);
        break;

      case UFR:
        super(sz,sz,sz,pos,pos,pos);
        break;

      case UBR:
        super(sz,sz,sz,pos,pos,-pos);
        break;

      case UBL:
        super(sz,sz,sz,-pos,pos,-pos);
        break;

      case DFL:
        super(sz,sz,sz,-pos,-pos,pos);
        break;

      case DFR:
        super(sz,sz,sz,pos,-pos,pos);
        break;

      case DBR:
        super(sz,sz,sz,pos,-pos,-pos);
        break;

      case DBL:
        super(sz,sz,sz,-pos,-pos,-pos);
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
      case UFL:
        this.addStickerU(cube);
        this.addStickerF(cube);
        this.addStickerL(cube);
        break;

      case UFR:
        this.addStickerU(cube);
        this.addStickerF(cube);
        this.addStickerR(cube);
        break;

      case UBR:
        this.addStickerU(cube);
        this.addStickerB(cube);
        this.addStickerR(cube);
        break;

      case UBL:
        this.addStickerU(cube);
        this.addStickerB(cube);
        this.addStickerL(cube);
        break;

      case DFL:
        this.addStickerD(cube);
        this.addStickerF(cube);
        this.addStickerL(cube);
        break;

      case DFR:
        this.addStickerD(cube);
        this.addStickerF(cube);
        this.addStickerR(cube);
        break;

      case DBR:
        this.addStickerD(cube);
        this.addStickerB(cube);
        this.addStickerR(cube);
        break;

      case DBL:
        this.addStickerD(cube);
        this.addStickerB(cube);
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
          case UFR :
            this.loc = UBR;
            break;

          case UBR :
            this.loc = DBR;
            break;

          case DBR :
            this.loc = DFR;
            break;

          case DFR :
            this.loc = UFR;
            break;

          default :
            break;
        }
        break;

      case L_i :
        switch (this.loc) {
          case UFL :
            this.loc = UBL;
            break;

          case UBL :
            this.loc = DBL;
            break;

          case DBL :
            this.loc = DFL;
            break;

          case DFL :
            this.loc = UFL;
            break;

          default :
            break;
        }
        break;

      case R_i :
        switch (this.loc) {
          case UFR :
            this.loc = DFR;
            break;

          case DFR :
            this.loc = DBR;
            break;

          case DBR :
            this.loc = UBR;
            break;

          case UBR :
            this.loc = UFR;
            break;

          default :
            break;
        }
      break;
      
      case L_ :
        switch (this.loc) {
          case UFL :
            this.loc = DFL;
            break;

          case DFL :
            this.loc = DBL;
            break;

          case DBL :
            this.loc = UBL;
            break;

          case UBL :
            this.loc = UFL;
            break;

          default :
            break;
        }
        break;

      case U_ :
        switch (this.loc) {
          case UFL :
            this.loc = UBL;
            break;

          case UBL :
            this.loc = UBR;
            break;

          case UBR :
            this.loc = UFR;
            break;

          case UFR :
            this.loc = UFL;
            break;

          default :
            break;
        }
        break;

      case D_i :
        switch (this.loc) {
          case DFL :
            this.loc = DBL;
            break;

          case DBL :
            this.loc = DBR;
            break;

          case DBR :
            this.loc = DFR;
            break;

          case DFR :
            this.loc = DFL;
            break;

          default :
            break;
        }
        break;

      case U_i :
        switch (this.loc) {
          case UFL :
            this.loc = UFR;
            break;

          case UFR :
            this.loc = UBR;
            break;

          case UBR :
            this.loc = UBL;
            break;

          case UBL :
            this.loc = UFL;
            break;

          default :
            break;
        }
        break;

      case D_ :
        switch (this.loc) {
          case DFL :
            this.loc = DFR;
            break;

          case DFR :
            this.loc = DBR;
            break;

          case DBR :
            this.loc = DBL;
            break;

          case DBL :
            this.loc = DFL;
            break;

          default :
            break;
        }
        break;

      case F_ :
        switch (this.loc) {
          case UFL :
            this.loc = UFR;
            break;

          case UFR :
            this.loc = DFR;
            break;

          case DFR :
            this.loc = DFL;
            break;

          case DFL :
            this.loc = UFL;
            break;

          default :
            break;
        }
        break;

      case B_i :
        switch (this.loc) {
          case UBL :
            this.loc = UBR;
            break;

          case UBR :
            this.loc = DBR;
            break;

          case DBR :
            this.loc = DBL;
            break;

          case DBL :
            this.loc = UBL;
            break;

          default :
            break;
        }
        break;

      case F_i :
        switch (this.loc) {
          case UFL :
            this.loc = DFL;
            break;

          case DFL :
            this.loc = DFR;
            break;

          case DFR :
            this.loc = UFR;
            break;

          case UFR :
            this.loc = UFL;
            break;

          default :
            break;
        }
        break;

      case B_ :
        switch (this.loc) {
          case UBL :
            this.loc = DBL;
            break;

          case DBL :
            this.loc = DBR;
            break;

          case DBR :
            this.loc = UBR;
            break;

          case UBR :
            this.loc = UBL;
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

export default CornerPiece;
