//const the_railway_chronicles_bg = require('/./../data/the_railway_chronicles/background.jpg');

const ProjectApi = { 
  projects : 
    [
      { 
        id: 0,   
        name:  "monaco_porcelaine",
        type : "Webapp",
        title: "Chinese Porcelains",
        desc : "<p>This project is aimed to showcase the exhibition of the Chinese Imperial Collection at the Grimaldi Forum of Monaco. It is composed of one web application and one website. The web application aims to install a touchscreen in the exhibition, offering visitors the opportunity to create their own virtual porcelain pottery. After editing, their creations are sent to them via email and uploaded onto the exhibition website.</p><p>Technos : <span>HTML5</span>, <span>CSS3</span>, <span>WebGL</span>, <span>JavaScript ES6</span>, <span>Electron</span>, <span>GSAP</span></p>",
        background : './data/monaco_porcelaine/background.jpg',
        role: "Developer",
        context:'Intership at <br> <a href="http://fleurdepapier.com" target="_blank"  rel="noopener">Fleur de Papier</a>',
        year: "2017",
        color: "#232846",
        txtcolor: "#bf3917",
        imgs: [
          {
            src : './data/monaco_porcelaine/3.jpg',
            full: false
          },
          {
            src : "./data/monaco_porcelaine/1.jpg",
            full: false
          },
          {
            src : "./data/monaco_porcelaine/2.jpg",
            full: true
          },
          {
            src : "./data/monaco_porcelaine/4.jpg",
            full: false
          },
          {
            src : "./data/monaco_porcelaine/6.jpg",
            full: false
          }

        ]
      },
      { 
        id: 1,   
        name:  "the_railway_chronicles",
        type : "Website",
        title: "The Railway Chronicles",
        desc : "<p>This is a project for a web design university class. Railway travel is underexposed in online publishing. There isn’t an abundance of aspirational content revolving around the tropic, therefore in a group of three, we sought to design and develop a travel webzine. </p><p>Technos : <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>jQuery</span></p>",
        link : "http://luxkyluke.github.io/therailwaychronicles/",
        background : './data/the_railway_chronicles/background.jpg',
        role: "Developer,<br> Web Designer",
        context:"Student Project",
        year: "2016",
        color: "#A4632A",
        txtcolor: "#5A2A00",
        imgs: [
          {
            src : "./data/the_railway_chronicles/1.jpg",
            full: false
          },
          {
            src : "./data/the_railway_chronicles/5.gif",
            full: false
          },
          {
            src : "./data/the_railway_chronicles/2.jpg",
            full: true
          },
          {
            src : "./data/the_railway_chronicles/4.jpg",
            full: false
          },
          {
            src : "./data/the_railway_chronicles/3.jpg",
            full: false
          }
        ]
      },
      { 
          id: 2,   
          name:  "delaunay_dreams",
          type : "Digital Installation",
          title: "Delaunay Dreams",
          desc : "<p>Delaunay’s Interactive Dreams is an interactive installation that immerses the audience in a audio and visual universe, inspired by French artists Robert and Sonia Delaunay. The sounds and visuals change according to users’ hand gestures. This allows the spectator to become the creator.</p><p>Technos : <span>C++</span>, <span>OpenFrameworks</span>, <span>LeapMotion SDK</span>",
          link : "https://delaunaysinteractivedreams.github.io/",
          background : './data/delaunay_dreams/background.jpg',
          role: "Developer",
          context:'University Project',
          year: "2016-2017",
          color: "#50180d",
          txtcolor: "#200500",
          imgs: [
            {
              src : "./data/delaunay_dreams/4.jpg",
              full: false
            },
            {
              src : "https://player.vimeo.com/video/217138011",
              full: true
            },
            {
              src : "./data/delaunay_dreams/6.jpg",
              full: false
            },
            {
              src : "./data/delaunay_dreams/7.jpg",
              full: false
            },
            {
              src : "./data/delaunay_dreams/1.jpg",
              full: true
            },
            {
              src : "./data/delaunay_dreams/5.jpg",
              full: false
            },
            {
              src : "./data/delaunay_dreams/8.jpg",
              full: false
            }
          ]
      },

      { 
        id: 3,   
        name:  "giverny_galaxy",
        type : "Website",
        title: "Impressionnist Galaxy",
        desc : "<p>This project was requested by the Musée des Impressionnismes Giverny. They wanted a website to be composed of two main parts. The first part enticed visitors to click on specific impressionist pieces of art in a 3D space. Once selected, the second part of the website helps users discover the history behind the pieces through an interactive experience.</p><p>Technos : <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>WebGL</span>, <span>GSAP</span></p>",
        link : "http://galaxie.mdig.fr/en/",
        background : './data/giverny_galaxy/background.jpg',
        role: "Developer",
        context:'Intership at <br> <a href="http://fleurdepapier.com" target="_blank"  rel="noopener">Fleur de Papier</a>',
        year: "2017",
        color: "#a23435",
        txtcolor: "#500101",
        imgs: [
          {
            src : "./data/giverny_galaxy/6.jpg",
            full: false
          },
          {
            src : "./data/giverny_galaxy/2.jpg",
            full: false
          },
          {
            src : "./data/giverny_galaxy/7.jpg",
            full: true
          },
          {
            src : "./data/giverny_galaxy/4.jpg",
            full: false
          },
          {
            src : "./data/giverny_galaxy/3.jpg",
            full: false
          }
        ]
      },
      
      { 
          id: 4,   
          name:  "sinesthesie",
          type : "Short Film",
          title: "Sinesthésie",
          desc : "<p>Sinesthésie is a short film about Transhumanism that I produced with friends. <br> Watch to find out more...</p>",
          background : './data/sinesthesie/background.jpg',
          role: "Scriptwriter, <br> Producer, <br> Actor",
          context:'University Project',
          year: "2017",
          color: "#766c92",
          txtcolor: "#060017",
          imgs: [
            {
              src : "https://www.youtube.com/embed/-GIhmbULJ4M?rel=0&amp;controls=0&amp;showinfo=0",
              full: false
            }
          ]
      },
      { 
          id: 5,   
          name:  "the_challenger",
          type : "Website",
          title: "The Challenger",
          desc : "<p>The Challenger is a social network for artists who want to develop and challenge their own creativity. The website periodically proposes ephemeral challenges, where artists can publish their own creations around specific themes. At the end of the period, the most liked post is declared the winner of the challenge and published on the website homepage. The project was made during a workshop week with a second front-end developer and two back-end developers.</p><p>Technos : <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript ES6</span>, <span>React.js</span></p>",
          link : "https://www.yorka-design.fr/thechallenger",
          background : './data/the_challenger/background.jpg',
          role: "Front-end Developer",
          context:'University Project',
          year: "2017",
          color: "#42ab9d",
          txtcolor: "#00312a",
          imgs: [
            {
              src : "./data/the_challenger/1.jpg",
              full: false
            },
            {
              src : "./data/the_challenger/3.jpg",
              full: true
            },
            {
              src : "./data/the_challenger/2.jpg",
              full: false
            },
            {
              src : "./data/the_challenger/6.jpg",
              full: true
            },
            {
              src : "./data/the_challenger/4.jpg",
              full: false
            }
          ]
      }
    ] ,
  nbProjects: function(){return this.projects.length},
  all: function() {return this.projects},
  get: function(id) {
    const isProject = p => p.id === id;
    return this.projects[id];
  }
}

export default ProjectApi;