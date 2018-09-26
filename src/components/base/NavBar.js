import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Sidebar, Menu, Segment, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { TweenMax, Linear, TimelineMax, Expo} from 'gsap/TweenMax'

import { set_category } from '../../actions';

const HeaderContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #ffffff;
`
const ButtonContainer = styled.div`
  height: 40px;
  margin-left: 10px;
  margin-top: 20px;
  position: relative;
`;

const MenuButton = styled.button`
  background-color: #FFFFFF;
  color: #000000;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  position: relative;
  display: block;
  height: 40px;
  width: 90px;
  border: 1px solid #000000;
  border-radius: 2px;

  @media (max-width: 768px) {
    width : 40px;
  }
`

const Word = styled.span`
  display: inline-block;
`

const Title = styled.div`
  position: absolute;
  width:max-content;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const TitleText = styled.h1`
  font-size: 2em;
  font-family: ConsertOne;
`

const CustomMenuItem = styled(Menu.Item)`
  &&& {
    pointer-events: ${props => (props.visible) ? 'auto' : 'none'}
    opacity : ${props => props.count}
    top : ${props => props.count * 20 - 20}px
  }
`

const TempBox = styled.div`
`

const Indicator = styled(Icon)`
  &&& {
    float: right;
  }
`

class NavBar extends Component {
  constructor(props) {
    super(props);

    this._count = 0;
    this.state = {
      count: 0,
      visible: false,
      project_sub_visible: false,
    }
  }

  componentDidMount() {
    this.tl_menu = new TimelineMax({paused: true});
    const words = document.querySelectorAll("#menu_button span");
    this.tl_menu.staggerTo(words, 1, {rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");

    this.tl_indi = new TimelineMax({paused: true});
    const indi = document.querySelectorAll("#indicator");
    this.tl_indi.to(indi, 0.5, {rotationZ: 90, ease: Linear.easeOut});
  }

  handleMenuButtonOver() {
    this.tl_menu.play();
  }

  handleMenuButtonOut() {
    this.tl_menu.reverse();
  }

  handleMenuButtonClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })

  handleProjectClick = () => {
    if(!this.state.project_sub_visible) {
      this.setState({ project_sub_visible: !this.state.project_sub_visible })
      TweenMax.to(this,0.5,{
        _count: 100,
        onUpdate: () => this.setState({ count: this._count }),
        ease: Linear.easeNone,
      })
      this.tl_indi.play();
    }
    else {
      this.setState({ project_sub_visible: !this.state.project_sub_visible })
      TweenMax.to(this,0.5,{
        _count: 0,
        onUpdate: () => this.setState({ count: this._count }),
        ease: Linear.easeNone,
      })
      this.tl_indi.reverse();
    }
  }

  countMaker(index, len) {
    var interval = 100/len;
    var min = index*interval;
    var res = this.state.count-min;

    if(res<0) return 0;
    else if(res>interval) return 1;
    else return res/interval;
  }

  handleMenuClick = (name) => {
    if (name === 'home') this.props.history.push('/');
    else if(name === 'about') this.props.history.push('/'+name);
    this.setState({ visible: false })
  }

  handlePostClick = (category) => {
    this.props.setCategory(category);
    this.props.history.push('/post');
    this.setState({ visible: false })
  }

  render() {
    return (
      <div>
        <HeaderContainer>
          <ButtonContainer>
            <Title>
              <TitleText>Jooh</TitleText>
            </Title>
            <MenuButton id='menu_button' onMouseOver={()=>this.handleMenuButtonOver()} onMouseOut={()=>this.handleMenuButtonOut()} onClick={()=>this.handleMenuButtonClick()}>
                <Icon id='menu_icon' name='bars'/>
                <MediaQuery query="(min-width: 768px)">
                  <Word>M</Word><Word>e</Word><Word>n</Word><Word>u</Word>
                </MediaQuery>
            </MenuButton>
          </ButtonContainer>
        </HeaderContainer>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={this.state.visible}
            width='thin'
            size='large'
          >
          <MediaQuery query="(min-width: 768px)">
            <Menu.Item onClick={()=>this.handleMenuClick('home')} as='a'>
              <TempBox>
                <Icon name='home' />
                Home
              </TempBox>
            </Menu.Item>
            <Menu.Item onClick={()=>this.handleMenuClick('about')} as='a'>
              <TempBox>
                <Icon name='user' />
                About Me
              </TempBox>
            </Menu.Item>
            <Menu.Item onClick={()=> {
              this.handleProjectClick();
            }} as='a'>
              <TempBox>
                <Icon name='book' />
                Project
                <Indicator id='indicator' name='caret right' />
              </TempBox>
            </Menu.Item>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)">
            <Menu.Item onClick={()=>this.handleMenuClick('home')} as='a'>
              <Icon name='home' />
            </Menu.Item>
            <Menu.Item onClick={()=>this.handleMenuClick('about')} as='a'>
              <Icon name='user' />
            </Menu.Item>
            <Menu.Item onClick={()=> {
              this.handleProjectClick();
            }} as='a'>
              <Icon name='book' />
            </Menu.Item>
          </MediaQuery>
            <div>
              <CustomMenuItem as='a' visible={this.state.project_sub_visible} count={this.countMaker(0,7)} onClick={()=>this.handlePostClick('opengl')}>OpenGL</CustomMenuItem>
              <CustomMenuItem as='a' visible={this.state.project_sub_visible} count={this.countMaker(1,7)} onClick={()=>this.handlePostClick('android')}>Android</CustomMenuItem>
              <CustomMenuItem as='a' visible={this.state.project_sub_visible} count={this.countMaker(2,7)} onClick={()=>this.handlePostClick('react')}>React</CustomMenuItem>
              <CustomMenuItem as='a' visible={this.state.project_sub_visible} count={this.countMaker(3,7)} onClick={()=>this.handlePostClick('tensorflow')}>Tensorflow</CustomMenuItem>
              <CustomMenuItem as='a' visible={this.state.project_sub_visible} count={this.countMaker(4,7)} onClick={()=>this.handlePostClick('datacommunication')}>Data Com</CustomMenuItem>
              <CustomMenuItem as='a' visible={this.state.project_sub_visible} count={this.countMaker(5,7)} onClick={()=>this.handlePostClick('database')}>DataBase</CustomMenuItem>
              <CustomMenuItem as='a' visible={this.state.project_sub_visible} count={this.countMaker(6,7)} onClick={()=>this.handlePostClick('etc')}>ETC</CustomMenuItem>
            </div>
          </Sidebar>

          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCategory: (category) => dispatch(set_category(category))
    };
}

NavBar = connect(undefined, mapDispatchToProps)(NavBar);
export default withRouter(NavBar);
