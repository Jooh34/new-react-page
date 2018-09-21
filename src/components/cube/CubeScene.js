import React, { Component } from 'react';
import styled from 'styled-components';

import CenterPiece from './CenterPiece';
import EdgePiece from './EdgePiece';
import CornerPiece from './CornerPiece';
import RotationManager from './RotationManager';

var THREE = require('three');
var TrackballControls = require('three-trackballcontrols');

const FrameContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #ffffff;
`
const SceneContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  border: 2px solid black;
`;

class CubeScene extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.initCubePiece = this.initCubePiece.bind(this);

    this.initCubePiece();
  }

  initCubePiece() {
    const sz = 1;
    this.TP_list = [];
    this.EP_list = [];
    this.CP_list = [];

    for(var i=0; i<6; i++) {
      this.TP_list.push(new CenterPiece(sz,i));
    }
    for(i=0; i<12; i++) {
      this.EP_list.push(new EdgePiece(sz,i));
    }
    for(i=0; i<8; i++) {
      this.CP_list.push(new CornerPiece(sz,i));
    }
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    this.controls = new TrackballControls( camera, this.mount );


    ///// draw object
    for(var i=0; i<6; i++) {
      this.TP_list[i].addScene(scene);
    }
    for(i=0; i<12; i++) {
      this.EP_list[i].addScene(scene);
    }
    for(i=0; i<8; i++) {
      this.CP_list[i].addScene(scene);
    }
    //////////

    camera.position.set(6,6,6);
    camera.lookAt(new THREE.Vector3(0,0,0));

    renderer.setClearColor('#FFFFFF');
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.mount.appendChild(this.renderer.domElement);
    this.start();

    this.rotationManager = new RotationManager(this.TP_list, this.EP_list, this.CP_list);
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.rotationManager.update();
    // this.centerpiece.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.controls.update();
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <FrameContainer>
        <SceneContainer innerRef={(mount) => { this.mount = mount }} />
      </FrameContainer>
    )
  }
}

export default CubeScene
