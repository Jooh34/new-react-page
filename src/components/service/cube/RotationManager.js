import * as THREE from 'three';

// Center Location //
const U = 0;
const F = 1;
const R = 2;
const L = 3;
const B = 4;
const D = 5;
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
const S = 12;
//

const MAX = 18; // control speed of cubing

// axis define
  const axis_x = new THREE.Vector3( -1, 0, 0 );
  const axis_xi = new THREE.Vector3( 1, 0, 0 );
  const axis_y = new THREE.Vector3( 0, -1, 0 );
  const axis_yi = new THREE.Vector3( 0, 1, 0 );
  const axis_z = new THREE.Vector3( 0, 0, -1 );
  const axis_zi = new THREE.Vector3( 0, 0, 1 );

///////

const cubeincube = [F_, L_, F_, U_i, R_, U_, F_, F_, L_, L_, U_i, L_i, B_, D_i, B_i, L_, L_, U_, S, S, S, S, S];
const cubeincube_rev = [U_i, L_, L_, B_, D_, B_i, L_, U_, L_, L_, F_, F_, U_i, R_i, U_, F_i, L_i, F_i, S, S, S, S, S];

class RotationManager {
  constructor(TP_list,EP_list,CP_list) {
    this.TP_list = TP_list;
    this.EP_list = EP_list;
    this.CP_list = CP_list;

    this.count = 0;
    this.formula = [];
    this.isReverse = false;
  }

  update() {
    if(!this.formula.length) {
      if(this.isReverse) this.formula = cubeincube.slice();
      else this.formula = cubeincube_rev.slice();
      this.isReverse = !this.isReverse;
    }
    else {
      if(this.count>=MAX) {
        this.formula.shift();
        this.count = 0;
      }
      else {
        this.rotate(this.formula[0], this.count===MAX-1);
        this.count++;
      }
    }
  }

  rotate(rot_dir, last_count) {
    var i,j,tp,axis;
    var ep = [];
    var cp = [];

    switch(rot_dir) {
      case U_ :
        tp = U;
        ep = [UF, UR, UB, UL];
        cp = [UFL, UFR, UBR, UBL];
        axis = axis_y;
        break;

      case U_i :
        tp = U;
        ep = [UF, UR, UB, UL];
        cp = [UFL, UFR, UBR, UBL];
        axis = axis_yi;
        break;

      case F_ :
        tp = F;
        ep = [UF, FR, FL, DF];
        cp = [UFL, UFR, DFL, DFR];
        axis = axis_z;
        break;

      case F_i :
        tp = F;
        ep = [UF, FR, FL, DF];
        cp = [UFL, UFR, DFL, DFR];
        axis = axis_zi;
        break;

      case R_ :
        tp = R;
        ep = [UR, FR, BR, DR];
        cp = [UFR, UBR, DBR, DFR];
        axis = axis_x;
        break;

      case R_i :
        tp = R;
        ep = [UR, FR, BR, DR];
        cp = [UFR, UBR, DBR, DFR];
        axis = axis_xi;
        break;

      case L_ :
        tp = L;
        ep = [UL, FL, BL, DL];
        cp = [UFL, UBL, DBL, DFL];
        axis = axis_xi;
        break;

      case L_i :
        tp = L;
        ep = [UL, FL, BL, DL];
        cp = [UFL, UBL, DBL, DFL];
        axis = axis_x;
        break;

      case B_ :
        tp = B;
        ep = [UB, BR, BL, DB];
        cp = [UBL, UBR, DBL, DBR];
        axis = axis_zi;
        break;

      case B_i :
        tp = B;
        ep = [UB, BR, BL, DB];
        cp = [UBL, UBR, DBL, DBR];
        axis = axis_z;
        break;

      case D_ :
        tp = D;
        ep = [DF, DR, DB, DL];
        cp = [DFL, DFR, DBR, DBL];
        axis = axis_yi;
        break;

      case D_i :
        tp = D;
        ep = [DF, DR, DB, DL];
        cp = [DFL, DFR, DBR, DBL];
        axis = axis_y;
        break;

      default:
        return;
    }

    for(i=0; i<6; i++) {
      if(this.TP_list[i].loc === tp) {
        this.TP_list[i].rotate(axis, Math.PI/36);
      }
    }

    for(i=0; i<12; i++) {
      for(j=0; j<4; j++) {
        if(this.EP_list[i].loc === ep[j]) {
          this.EP_list[i].rotate(axis, Math.PI/36);
        }
      }
    }

    for(i=0; i<8; i++) {
      for(j=0; j<4; j++) {
        if(this.CP_list[i].loc === cp[j]) {
          this.CP_list[i].rotate(axis, Math.PI/36);
        }
      }
    }

    if(last_count) {

      var ep_ = [];
      var cp_ = [];

      for(j=0; j<4; j++) {
        for(i=0; i<12; i++) {
          if(this.EP_list[i].loc === ep[j]) {
            ep_.push(i);
          }
        }
      }

      for(i=0; i<4; i++) {
        this.EP_list[ep_[i]].refresh(rot_dir);
      }

      for(j=0; j<4; j++) {
        for(i=0; i<8; i++) {
          if(this.CP_list[i].loc === cp[j]) {
            cp_.push(i);
          }
        }
      }

      for(i=0; i<4; i++) {
        this.CP_list[cp_[i]].refresh(rot_dir);
      }
    }
  }
}

export default RotationManager;
