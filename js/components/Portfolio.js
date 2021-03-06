var Header = React.createClass({
  render() {
    return (
      <header>
        <nav>
          <i className="fa fa-bars hamburger"></i>
          <ul>
            <li className="nav-li"><i className="fa fa-home nav-icon"></i><a href="#/" className="nav-link home-link">home</a></li>
            <li className="nav-li"><i className="fa fa-laptop nav-icon"></i><a href="" className="nav-link projects-link">projects</a></li>
            <li className="nav-li"><i className="fa fa-keyboard-o nav-icon"></i><a href="#/blog" className="nav-link blog-link">blog</a></li>
            <li className="nav-li"><i className="fa fa-info nav-icon"></i><a href="" className="nav-link about-link">about</a></li>
            <li className="nav-li"><i className="fa fa-file-o nav-icon"></i><a href="" className="nav-link resume-link">resume</a></li>
          </ul>
        </nav>
      </header>
    )
  }
});

var Home = React.createClass({
  render (){
    return (

        <div className="section" id="home">
          <h1 className="name">
            Hi! I&#39;m <span className="highlight">Carlos</span>, a backend <span className="highlight"> developer</span> working in <span className="highlight"> Porto</span>.</h1>
          <div id="social-icons">
            <a className="fa fa-envelope-o" href="mailto:carlosmiguelcastro@me.com"></a>
            <a className="fa fa-github" href="https://github.com/carlosmiguelcastro"></a>
            <a className="fa fa-twitter" href="https://twitter.com/cmmcastro"></a>
            <a className="fa fa-linkedin" href="https://pt.linkedin.com/in/carlosmiguelcastro"></a>
          </div>
        </div>

    )
  }
});

var Project = React.createClass({
  render () {
    var project = this.props.project;

    var links = [];

    if (project.site != ""){
      links.push(
        <a href={project.site} className="project-link">View site</a>
      )
    }
    if(project.code != ""){
      links.push(
        <a href={project.code} className="project-link">View code</a>
      )
    }

    return (
     <div className="project">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="technologies">{project.technologies}</div>
        {links}
        <img className={project.classes} src={project.image} alt={project.imageAltText}></img>
      </div>
    );
  },
});

var Projects = React.createClass({
  render (){
    var projectsData = [
      {
      title: "Feedr",
      description: "For 10 weeks in 2016 I was teacher's assistant for a part-time JavaScript Development course with General Assembly. Feedr was one of the projects.",
      technologies: "ES6",
      site: "",
      code: "https://github.com/amysimmons/js1-feedr",
      image: "project-images/feedr.png",
      imageAltText: "Feedr",
      classes: "project-image"
      },

      {
      title: "In a Giphy",
      description: "Over the Easter long weekend in 2016 I travelled to Hong Kong with two girlfriends. On the flight I started building the game Memory. I use the Giphy API as a source for the cards.",
      technologies: "JavaScript | jQuery |  Node | Express | HTML | CSS",
      site: "http://amysimmons.github.io/memory/",
      code: "https://github.com/amysimmons/memory",
      image: "project-images/memory.png",
      imageAltText: "Memory card game",
      classes: "project-image"
      },
      {
      title: "Mosaic generator",
      description: "In March 2016 I built a mosaic generator. It takes a user uploaded photo and returns a mosaic one row at a time.",
      technologies: "JavaScript | HTML | CSS",
      site: "",
      code: "https://github.com/amysimmons/mosaic",
      image: "project-images/swift-mosaic.png",
      imageAltText: "Mosaic image of Taylor Swift",
      classes: "project-image"
      },
      {
      title: "Unlucky Monkey",
      description: "I built Unlucky Monkey in January 2016 ahead of Lunar New Year. It allows people around the world to create fortune cookies to be opened by complete strangers.",
      technologies: "Ruby on Rails | HTML | CSS",
      site: "https://unlucky-monkey.herokuapp.com/",
      code: "https://github.com/amysimmons/fortune-cookie",
      image: "project-images/unlucky-monkey.png",
      imageAltText: "Unlucky Monkey",
      classes: "project-image"
      },
      {
      title: "A guide to the care and feeding of new devs",
      description: "In November 2015 I interviewed junior web developers to find out how they could be better supported in the workplace. This website outlines my findings.",
      technologies: "React | JavaScript | HTML | CSS",
      site: "http://amysimmons.github.io/a-guide-to-the-care-and-feeding-of-new-devs/",
      code: "https://github.com/amysimmons/a-guide-to-the-care-and-feeding-of-new-devs",
      image: "project-images/new-devs-guide.png",
      imageAltText: "A guide to the care and feeding of new devs",
      classes: "project-image"
    },
    {
      title: "JavaScript Study Group: 6 apps in 10 weeks",
      description: "I organised a 10-week JavaScript Study Group from September 30 to December 2, 2015. In that time I completed six projects, including a React Native Minesweeper app.",
      technologies: "React | React Native | JavaScript | jQuery | Canvas | HTML | CSS",
      site: "http://www.meetup.com/Sydney-JavaScript-Study-Group/about/",
      code: "https://github.com/amysimmons/js-study-group",
      image: "project-images/minesweeper.png",
      imageAltText: "JavaScript Study Group: 6 apps in 10 weeks",
      classes: "iphone"
    },
    {
      title: "Rails Girls Events",
      description: "I contributed to this app during SheHacks 2015 and in the lead up to the Rails Girls 2015 Winter workshop. It was used to manage applications for the event, which I helped organise and host.",
      technologies: "Ruby on Rails | JavaScript | jQuery | HTML | CSS",
      site: "http://rails-girls-events.herokuapp.com/",
      code: "https://github.com/amysimmons/rails-girls-events",
      image: "project-images/rails-girls-events.png",
      imageAltText: "Rails Girls Events",
      classes: "project-image"
    },
    {
      title: "Playa",
      description: "My final project for Web Development Immersive. Playa brings democracy to music playlists, allowing guests to add an equal number of songs and vote to skip.",
      technologies: "Ruby on Rails | JavaScript | jQuery | Backbone | Underscore | Ajax | HTML | CSS",
      site: "https://playa-app.herokuapp.com",
      code: "https://github.com/amysimmons/playa_app",
      image: "project-images/playa.png",
      imageAltText: "Playa",
      classes: "project-image"
    },
    {
      title: "Sparkr",
      description: "My second project for Web Development Immersive. Sparkr is a dating app for mature-aged singles, where connections are formed through moments.",
      technologies: "Ruby on Rails | JavaScript | jQuery | Ajax | Handlebars | HTML | CSS",
      site: "http://make-sparks-fly.herokuapp.com/",
      code: "https://github.com/amysimmons/sparkr_app",
      image: "project-images/sparkr.png",
      imageAltText: "Sparkr",
      classes: "project-image"
    },
    {
      title: "Twitter",
      description: "My first project for Web Development Immersive. I built a version of Twitter which allows users to quickly and easily separate accredited News tweets from the noise.",
      technologies: "Ruby on Rails | JavaScript | jQuery | HTML | CSS",
      site: "http://twitter-news.herokuapp.com/",
      code: "https://github.com/amysimmons/twitter",
      image: "project-images/twitter.png",
      imageAltText: "Twitter",
      classes: "project-image"
    },
    {
      title: "Why online journalists should learn to code",
      description: "I interviewed journalists from around the world on why it's important for online journalists to learn to code, and built this website to showcase their reasons.",
      technologies: "HTML | CSS",
      site: "http://why-online-journalists-should-learn-to-code.bitballoon.com/",
      code: "https://github.com/amysimmons/Unicorns",
      image: "project-images/unicorns.png",
      imageAltText: "Why online journalists should learn to code",
      classes: "project-image"
    },
    {
      title: "Faith in Numbers",
      description: "I built this website in March 2014 as my final project in General Assembly’s Front-End Web Development course. It was my first time using D3.",
      technologies: "JavaScript | jQuery | D3 | HTML | CSS",
      site: "http://amysimmons.github.io/faith-in-numbers/",
      code: "https://github.com/amysimmons/Faith-in-Numbers",
      image: "project-images/faith-in-numbers.png",
      imageAltText: "Faith in Numbers",
      classes: "project-image"
    },
    {
      title: "Promise Tracker",
      description: "I produced Australia’s first interactive election promise tracker, which was nominated for a Walkley Award for excellence in multimedia journalism.",
      technologies: "CoreMedia | Keystone.js",
      site: "http://www.abc.net.au/news/factcheck/promisetracker/",
      code: "",
      image: "project-images/promise-tracker.png",
      imageAltText: "Promise Tracker",
      classes: "project-image"
    }
    ];

    var projects = [];
    for (var i = 0; i < projectsData.length; i++) {
      var project = projectsData[i];
      projects.push(<Project key={i} project={project} />)
    };

    return (
      <div>
        <h2>Projects</h2>
      {projects}
      </div>
    )
  }
});

var Resume = React.createClass({
  render (){
    return (
       <div className="section" id="resume">
       <div className="resume-col-1">
          <div className="resume-section">
            <h2 className="resume-title">RESUME</h2>
            <h3>AMY SIMMONS</h3>
            <div className="resume-item">
              <span className="resume-info">
                <a className="fa fa-envelope-o" href="mailto:amysimmons.abc@gmail.com"></a>
                <a className="fa fa-github" href="https://github.com/amysimmons"></a>
                <a className="fa fa-twitter" href="https://twitter.com/amesimmons"></a>
                <a className="fa fa-linkedin" href="https://au.linkedin.com/in/amesimmons"></a><br/>
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>dev life</h2>
            <div className="resume-item">
              <span className="resume-date">September 2016 to now:</span>
              <span className="resume-info">Software engineer, <a href="https://www.twitter.com/">Twitter</a></span>
            </div>
            <div className="resume-item">
              <span className="resume-date">April 2015 to August 2016:</span>
              <span className="resume-info">Developer, <a href="https://www.ansarada.com/">ansarada</a></span>
            </div>
            <div className="resume-item">
              <span className="resume-date">May 2016 to July 2016:</span>
              <span className="resume-info"><a href="https://generalassemb.ly/education/javascript-development">JavaScript Development</a> teacher&#39;s assistant, General Assembly</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">July 2016:</span>
              <span className="resume-info"><a href="https://itunes.apple.com/gb/podcast/tech-women-australia/id1013578561?mt=2">Tech Women Australia</a> podcast interview</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">April 2016:</span>
              <span className="resume-info"><a href="http://www.railsgirls.com">Rails Girls</a> advanced mentor</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">March 2016:</span>
              <span className="resume-info"><a href="https://www.meetup.com/Ruby-On-Rails-Oceania-Sydney">Ruby on Rails Oceania Sydney</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January 2016:</span>
              <span className="resume-info"><a href="http://www.sydjs.com/">SydJS</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">December 2015:</span>
              <span className="resume-info"><a href="http://www.girlgeeksydney.com/">Girl Geek Dinner</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">November 2015:</span>
              <span className="resume-info"><a href="https://vimeo.com/154932127">CampJS Brisbane</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info"><a href="http://www.meetup.com/Product-Hunt-Sydney/">Product Hunt Sydney</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info"><a href="http://www.codenewbie.org/podcast/from-journalist-to-developer">CodeNewbie</a> podcast interview</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">September to December 2015:</span>
              <span className="resume-info"><a href="http://www.meetup.com/Sydney-JavaScript-Study-Group/">JavaScript Study Group</a> organiser, host and attendee</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">August 2015:</span>
              <span className="resume-info"><a href="http://www.railsgirls.com">Rails Girls</a> organiser and host</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">June 2015:</span>
              <span className="resume-info"><a href="http://railscamps.com/">Rails Camp</a> Sydney attendee</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">June 2015:</span>
              <span className="resume-info"><a href="https://www.youtube.com/watch?v=ljrvFZCuzN4&app=desktop">SydCSS</a> talk</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">May 2015:</span>
              <span className="resume-info"><a href="http://girlgeekacademy.com/shehacks/">SheHacks</a> hackathon</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">March 2015:</span>
              <span className="resume-info"><a href="http://www.railsgirls.com">Rails Girls</a> beginner mentor</span>
            </div>
          </div>
        </div>
        <div className="resume-col-2">
          <div className="resume-section">
            <h2>journo life</h2>
            <div className="resume-item">
              <span className="resume-date">January 2009 to December 2014: </span>
              <span className="resume-info">Journalist/Digital Producer, <a href="http://www.abc.net.au/news/">Australian Broadcasting Corporation</a>
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-achievement">Achievement:</span>
              <span className="resume-info">Nominated for a <a href="http://www.walkleys.com/">Walkley Award</a> for Excellence in Multimedia Storytelling for producing the <a href="http://www.abc.net.au/news/factcheck/promisetracker/">Promise Tracker</a> – an interactive data visualisation project, which I led for 12 months.
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>education</h2>
            <div className="resume-item">
              <span className="resume-date">December 2015:</span>
              <span className="resume-info"><a href="http://yowconference.com.au/">YOW!</a> conference</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">October 2015:</span>
              <span className="resume-info"><a href="https://www.webdirections.org/">Web Directions</a> conference</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">April to June 2015:</span>
              <span className="resume-info">ThoughtWorks <a href="http://levelup.thoughtworks.com/">LevelUp</a> program
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January to April 2015: </span>
              <span className="resume-info"><a href="https://generalassemb.ly/education/web-development-immersive">Web Development Immersive</a>, General Assembly
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">July 2014:</span>
              <span className="resume-info">Rails Girls Next attendee
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">January to March 2014: </span>
              <span className="resume-info"><a href="https://generalassemb.ly/education/front-end-web-development">Front-End Web Development</a>, General Assembly</span>
            </div>
            <div className="resume-item">
              <span className="resume-date">November 2013:</span>
              <span className="resume-info">Rails Girls Beginner attendee
              </span>
            </div>
            <div className="resume-item">
              <span className="resume-date">2005 to 2008:</span>
              <span className="resume-info">Bachelor of Journalism & Bachelor of Arts, <a href="http://www.uq.edu.au/">University of Queensland</a>. I graduated with a GPA of 6 (out of 7). My Arts majors were Religion and Political Science.
              </span>
            </div>
          </div>
          <div className="resume-section">
            <h2>skills</h2>
            <div className="resume-item">
              <span className="resume-info">JavaScript | React | React Native | Node | jQuery | Canvas | Backbone | Underscore | HTML | CSS</span>
            </div>
            <div className="resume-item">
              <span className="resume-info">Ruby | Rails | C# | .net | VisualStudio | SQL | Git</span>
            </div>
            <div className="resume-item">
              <span className="resume-info">Agile practices | Test-driven development | Microservices architecture | OOP</span>
            </div>
            <div className="resume-item">
              <span className="resume-info">Interviewing | Writing | Producing | Editing</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

var About = React.createClass({
  render (){
    return (
      <div className="section" id="about">
        <h2>About</h2>
        <img className="profile" src="images/profile-pic.jpg" alt="Amy Simmons"></img>
        <div className="about-content">
          <p>I started my career in 2009 as a journalist/producer with <a href="http://www.abc.net.au/news/">ABC News Online</a> in Brisbane.</p>
          <p>From 4:30 am to 1:00 am, seven days a week, we covered major national and international news stories.</p>
          <p>A few years later I made the move to Sydney, and began working in the ABC&#39;s <a href="http://www.abc.net.au/news/factcheck/">Fact Checking Unit</a>. The unit held politicians to account - testing their claims through in-depth, rigorous research.</p>
          <p>This was the role that sparked my interest in coding. I wanted to tell stories in new and interesting ways, but didn&#39;t have the technical skills.</p>
          <p>I wrote my first line of code in November 2013, at a two-day <a href="http://railsgirls.com/sydney">Rails Girls</a> workshop. From that moment I was hooked, and I needed to learn more.</p>
          <p>In 2014 I took a part-time <a href="https://generalassemb.ly/education/front-end-web-development">front-end web development course</a> with General Assembly, received tutoring from a senior JavaScript developer at the ABC and attended more Rails Girls workshops.</p>
          <p>At the end of the year, I still wasn&#39;t satisfied. I wasn&#39;t progressing quickly enough, and I had so much to learn!</p>
          <p>I took the plunge, and signed up for General Assembly’s full-time, 12-week <a href="https://generalassemb.ly/education/web-development-immersive">Web Development Immersive course</a>.</p>
          <p>I spent the first three months of 2015 transitioning from a journalist/digital producer into a full-stack web developer.</p>
          <p>During the course I worked the hardest I’ve ever worked, and I loved every minute of it.</p>
          <p>I graduated in April and received my first full-time developer job, with an amazing company called <a href="https://www.ansarada.com/">ansarada</a>.</p>
          <p>In 2016 I moved to London for a dream job as a software engineer with <a href="https://www.twitter.com/">Twitter</a>.</p>
          <p>The last couple of years have been the best years of my life, and that&#39;s all because I learnt to code.</p>
          <p>You can hear more about my journey from journalism to dev in my <a href="https://itunes.apple.com/gb/podcast/tech-women-australia/id1013578561?mt=2">Tech Women Australia podcast interview</a>, <a href="https://vimeo.com/154932127">CampJS Brisbane talk</a>, <a href="http://www.codenewbie.org/podcast/from-journalist-to-developer">CodeNewbie podcast interview</a>, <a href="http://www.sbs.com.au/news/article/2016/02/29/women-succeeding-increasingly-male-dominated-it-industry">SBS News interview</a> and <a href="https://www.youtube.com/watch?v=ljrvFZCuzN4&app=desktop">SydCSS talk</a>.</p>
        </div>
      </div>
    )
  }
});

var Portfolio = React.createClass({
  getInitialState() {
      return {
        route: window.location.hash.substr(1)
      }
  },

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    switch (this.state.route) {
      case '/': $('body').css('background-color', '#19519E'); break;
      case '/projects': $('body').css('background-color', '#fff'); break;
      case '/about': $('body').css('background-color', '#fff'); break;
      case '/resume': $('body').css('background-color', '#fff'); break;
    }

    let Child
    switch (this.state.route) {
      case '/projects': Child = Projects; break;
      case '/about': Child = About; break;
      case '/resume': Child = Resume; break;
      default:      Child = Home;
    }

    return (
      <div className="container">
        <Header />
        <div className="content-container" id="content-container">
          <Child/>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Portfolio />, document.getElementById('root')
);

var showNavMenu = function(){
  $('nav ul').toggleClass('show-menu');
};

$('.hamburger').on('click', showNavMenu);
