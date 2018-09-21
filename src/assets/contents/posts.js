const posts = [
  {
    id : 17,
    title : '온라인 강의 자동 시청 with selenium',
    date : '2018.05.02',
    category : 'etc',
    description : '온라인 강의 자동으로 모두 시청해주는 프로그램. (어머니가 온라인 강의 일일이 눌러서 듣기 귀찮다고 하셔서 제작)',
    labels : [
      'Python',
      'Selenium',
      'WebDriver',
    ],
    cover : require('../images/project/selenium/selenium.jpg'),
    github_url : 'https://github.com/Jooh34/watching-onlinevideo-automation',
  },

  {
    id : 16,
    title : 'Mnist Classification 문제 - Convolutional Neural Network 사용',
    date : '2018.05.01 ',
    category : 'tensorflow',
    description : 'Tensorflow를 이용하여 Convolutional Neural Network(CNN)로 Mnist 이미지 분류. 55000개 training image와 10000개의 test image로 진행하였다. 28x28 이미지를 convolution + maxpooling + dropout을 두 단계 거친 후, fully connected NN 두단계를 걸쳐 output에 연결하였다. 50개의 batch * 20000번의 반복학습 결과 99.2%의 정확도를 얻었으며 CPU 계산으로는 1724초(약30분), GPU계산으로는 245초(약4분)가 걸렸다.',
    labels : [
      'Tensorflow',
      'Tensorflow-GPU',
      'Python',
      'Convolutional Neural Network',
      'Deep Learning',
      'TensorBoard',
    ],
    cover : require('../images/project/tensorflow/mnistCNN_tensorboard.png'),
    github_url : 'https://github.com/Jooh34/tensor_prac',
  },

  {
    id : 15,
    title : 'Mnist Classification 문제 - Neural Network 사용',
    date : '2018.04.29 ',
    category : 'tensorflow',
    description : 'Tensorflow를 이용하여 Neural Network로 Mnist 이미지 분류. 1. initialize 기법 없음 + Adam Optimizer 사용 => 94% accuracy 2. xavier initialization + Adam Optimizer 사용 => 97.7% accuracy 3. xavier initialization + Adam Optimizer 사용 + 3 hidden layer + dropout 사용 => 98.32%',
    labels : [
      'Tensorflow',
      'Python',
      'Neural Network',
      'Deep Learning',
      'TensorBoard',
    ],
    cover : require('../images/project/tensorflow/mnist_deeplearning3.JPG'),
    github_url : 'https://github.com/Jooh34/tensor_prac',
  },

  {
    id : 14,
    title : 'Mnist Classification 문제 - Logistic Regression 사용',
    date : '2018.04.29 ',
    category : 'tensorflow',
    description : 'Tensorflow를 이용하여 Logistic Regression로 Mnist 이미지 분류. 정확도는 대략 91% 정도 나옴. Deep Learning을 위한 기초.',
    labels : [
      'Tensorflow',
      'Python',
      'Logistic Regression',
      'basis of Machine Learning',
      'TensorBoard',
    ],
    cover : require('../images/project/tensorflow/mnist_logistic_regression.JPG'),
    github_url : 'https://github.com/Jooh34/tensor_prac',
  },

  {
    id : 13,
    title : 'React 개인 페이지',
    date : '2018.04.18 ~ 2018.04.27',
    category : 'react',
    description : 'react를 사용한 Single Page Application으로 개인 웹페이지 제작하였습니다.',
    labels : [
      'Javascript',
      'ReactJS',
      'Css',
      'Webpack',
      'SPA',
    ],
    cover : require('../images/project/webpage/webpage_cover.JPG'),
    github_url : 'https://github.com/Jooh34/jooh_page',
    demo_url : 'https://jooh34.github.io/react-gh-pages/',
  },

  {
    id : 12,
    title : '강원학사 식단 앱',
    date : '2018.04.07 ~ 2018.04.16',
    category : 'android',
    description : '대학생활 중 강원학사에 살면서 매번 웹으로 강원학사 식단을 확인하는게 번거롭다고 많이 느껴서 언젠가는 강원학사 식단 정보 앱을 만들어 학사 사람들에게 배포해야겠다고 생각했었는 마침 nodeJS 연습 겸 식단 앱을 만들어 사람들에게 배포했습니다',
    labels : [
      'Android',
      'Java',
      'NodeJS',
      'AWS EC2',
    ],
    cover : require('../images/project/haksasik/haksasik_cover.png'),
    github_url : 'https://github.com/Jooh34/Haksasik',
    demo_url : 'https://play.google.com/store/apps/details?id=com.jooh.mnh51.haksasik',
  },

  {
    id : 11,
    title : '강원학사 식단 메뉴 서버',
    date : '2018.04.07 ~ 2018.04.11',
    category : 'etc',
    description : '강원학사 홈페이지에서 날짜 및 해당 날짜의 식단 정보 크롤링 연습. 서버는 AWS EC2 를 이용하였습니다. ',
    labels : [
      'NodeJS',
      'Back-end',
      'AWS EC2',
    ],
    cover : require('../images/project/haksasik/ssh.JPG'),
    github_url : 'https://github.com/Jooh34/haksasik-server.git',
    demo_url : 'http://34.213.112.175/menus/',
  },
  {
    id : 10,
    title : 'DB를 사용한 Java Application - School System ',
    date : 'April 2017',
    category : 'database',
    description : 'Oracle DB를 사용하여 학생,교수,강좌,시간 등등 학교 정보 시스템을 저장 및 제어하는 Java Application을 구현하였습니다. JDBC를 사용하여 DB와 Application을 연결하였고, SQL을 사용하여 DB를 조작하였습니다. 전반적인 DBMS 원리를 이해했고, 이론으로 이해했던 SQL 문을 실제로 Application에 적용하며 사용법을 익혔습니다.',
    labels : [
      'DataBase',
      'Oracle DB',
      'SQL',
      'Java',
      'JDBC',
      'SQL Developer'
    ],
    cover : require('../images/project/database/school.JPG'),
    github_url : 'https://github.com/Jooh34/JDBCproject.git',
    demo_url : 'https://github.com/Jooh34/JDBCproject.git',
  },
  {
    id : 9,
    title : '위치 기반 SNS 웹사이트 \'Happening\' 개발',
    date : 'Mar 2017 ~ June 2017',
    category : 'react',
    description : 'Front-end : React/Redux , Back-end : Django-REST \'소프트웨어의 개발 및 실습\' 강의에서 진행한 4인 개발 프로젝트입니다. 위치 기반 SNS인 Happening을 개발했습니다. ',
    labels : [
      'ReactJS',
      'Redux',
      'Redux-Saga',
      'Django',
      'Django-REST API',
      'Semantic-ui',
      'Happening',
    ],
    cover : require('../images/project/swpp/swpp1.png'),
    demo_url : 'http://34.217.214.191:3000/',
  },

  {
    id : 8,
    title : 'Solving Rubik\'s Cube Game',
    date : 'Dec 2017',
    category : 'opengl',
    description : '',
    labels : [
      'OpenGL',
      'C++',
      'Game',
      'Rubik\'s Cube',
    ],
    cover : require('../images/project/graphics/cube/all.JPG'),
    github_url : 'https://github.com/Jooh34/jooh/tree/master/graphics/cube',
    video : true
  },

  {
    id : 7,
    title : 'Backward Ray Tracing',
    date : 'Mar 2017 ~ June 2017',
    category : 'opengl',
    description : '',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Ray Tracing',
    ],
    cover : require('../images/project/graphics/raytracing/3.bmp'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    id : 6,
    title : 'Shading - 조명과 그림자 효과 + BSP Tree 구현',
    date : 'Mar 2017 ~ June 2017',
    category : 'opengl',
    description : '',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Shading',
      'Depth Ordering',
      'BSP Tree',
    ],
    cover : require('../images/project/graphics/shading/1.PNG'),
    github_url : 'https://github.com/Jooh34/jooh.git',
    video : true,
  },

  {
    id : 5,
    title : 'Spline Curve - 스플라인 곡선을 이용하여 3D Model 디자인하기',
    date : 'Mar 2017 ~ June 2017',
    category : 'opengl',
    description : '곡선을 디자인 하는 방법 중 ~적인 B-Spline 곡선과 Catmull-Rom 곡선을 이용하여 3D Model을 디자인하였습니다.',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Spline Curve'
    ],
    cover : require('../images/project/graphics/spline/2.PNG'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    id : 4,
    title : 'Virtual Trackball - 마우스 드래그에 따라 화면 전환 & 렌더링',
    date : 'Mar 2017 ~ June 2017',
    category : 'opengl',
    description : '대부분의 3D tool들처럼 마우스 드래그에 따라 회전시켜 물체의 모든 면을 볼 수 있게 합니다. 이번 프로젝트에서는 그것을 구현하였습니다. 2D에서 마우스 움직임을 Virtual Trackball의 3D rotation으로 바꿔주고, 구의 방정식 & 삼각함수를 이용하여 viewpoint의 이동으로 mapping해주어 구현하였습니다.',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Virtual Trackball'
    ],
    cover : require('../images/project/graphics/virtual_trackball/1.JPG'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    id : 3,
    title : 'Hierarchical Modeling - hierarchical 3d 모델 디자인',
    date : 'Mar 2017 ~ June 2017',
    category : 'opengl',
    description : 'OpenGL 의 modelview matrix stack 을 이용하여 Hierarchical Modeling 과 Animation을 구현하였습니다. OpenGL을 처음 배우는 단계라 three-dimensional primitives 로 구현, Cuboid, Cylinder, Circular cone으로 회전목마를 만들었습니다.',
    labels : [
      'Computer Graphics',
      'OpenGL',
      'C++',
      'Hierarchical Modeling',
    ],
    cover : require('../images/project/graphics/hierarchical_modeling/3.JPG'),
    github_url : 'https://github.com/Jooh34/jooh.git',
  },

  {
    id : 2,
    title : 'Event Driven Simulation - CSMA/CD, CSMA/CA',
    date : 'May 2017',
    category : 'datacommunication',
    description : 'Ethernet의 2가지 MAC schemes 중 1-persistent CSMA + binary exponential backoff 방식의 scheme과 IEEE 802.11 CSMA-CA DCF 두 가지 방식을 언어 : JAVA, Event-Driven 방식으로 프로그래밍하였습니다. Event-Driven Simulation은 simulation을 event가 일어난 시점을 기준으로 simulation을 작성하기 때문에 아무 event도 일어나지 않는 시간이 많을 경우 효과적인 방법이다. ',
    labels : [
      'Data Communication',
      'Java',
      'Event-Driven Simulation'
    ],
    cover : require('../images/project/datacom/event.png'),
    github_url : 'https://github.com/Jooh34/datacom.git'
  },

  {
    id : 1,
    title : '서울대학교 식단 어플 \'식샤\' 유지 및 업데이트',
    date : 'Oct 2016 ~ June 2017',
    category : 'android',
    description : '어플 개발 동아리 ‘와플 스튜디오’ 에서 서울대학교 식단 어플 ‘식샤’팀에 들어가 안드로이드 유지 및 업데이트 역할을 맡게 되었습니다. 서버를 맡은 친구와 함께 서비스에 대해서 논의하던 중 식단에 평가 기능을 추가하자는 의견을 제시하여 식단 평가 기능을 추가하였고, 세부적인 디자인 및 기능을 수정하는 작업을 하였습니다. ',
    labels : [
      'Android',
      'Java',
      'Volley request'
    ],
    cover : require('../images/project/siksha/siksha_cover.png'),
    github_url : 'https://github.com/wafflestudio/siksha',
    demo_url : 'https://play.google.com/store/apps/details?id=com.wafflestudio.siksha'
  },

  {
    id : 0,
    title : '안드로이드 앱 개발 인턴 Qoo10',
    date : 'Dec 2015 ~ Feb 2016',
    category : 'android',
    description : 'Qoo10 안드로이드 앱 개발팀에서 인턴을 하며 처음으로 자바와 안드로이드 앱 개발을 배웠습니다. JAVA를 배워 OOP 특성을 이용하여 전체적인 프로젝트 구조를 설계 해보았고 제공받은 Library를 사용하여 핸드폰 -영수증 기계 연동 후 핸드폰 앱에서 영수증 정보를 보내 출력하는 작업, 신용카드를 사진으로부터 카드 정보를 추출하는 작업을 구현하였습니다.',
    labels : [
      'Android',
      'Java',
      'Qoo10',
    ],
    cover : require('../images/project/qoo10/qoo10-1.JPG'),
  }
];

export default posts
