//const the_railway_chronicles_bg = require('/./../data/the_railway_chronicles/background.jpg');

const ProjectApi = { 
  projects : 
    [
      { 
        name:  "art_lease_website",
        type : "Website",
        title: "Art Lease Website",
        desc : "<p>Art Lease site recast : Creation of new visual identity for a better user experience for desktops, mobiles and tablets. Integration of this identity by creating a wordpress theme from scratch, to allow content modification.  </p><p>Technos : <span>Wordpress</span>, <span>PHP5</span>, <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>jQuery</span></p>",
        link : "http://www.artlease.fr/sandbox/newsite",
        background : './data/art_lease_website/background.jpg',
        role: "Web Designer,<br>Web Developer",
        context:'Intership at <br> <a href="http://artlease.fr" target="_blank" rel="noopener">Art Lease</a>',
        year: "2018",
        color: "#772406",
        txtcolor: "#975521",
        imgs: [
          {
            src : "./data/art_lease_website/2.jpg",
            full: false
          },
          {
            src : "https://www.youtube.com/embed/videoseries? listType=playlist&list=PL8rJS4YmZoAlEgNjcfRlAIZcLyE78AQ_X& version=3&loop=1&autoplay=1&rel=0&showinfo=0&controls=0&autohide=1",
            full: false
          },
          {
            src : "./data/art_lease_website/1.jpg",
            full: true
          },
          {
            src : "https://www.youtube.com/embed/videoseries? listType=playlist&list=PL8rJS4YmZoAkjVSO_IGxXh_mUbUo9EvEZ& version=3&loop=1&autoplay=1&rel=0&showinfo=0&controls=0&autohide=1",
            full: false
          }
        ]
      },
      { 
          name:  "transitory",
          type : "Digital Art",
          title: "Transitory",
          desc : "<p>Transitory is an digital installation around artificial intelligence which explore people behavior in public space. In a 9 square metres space, the installation interact with visitors by responding to their movements with visuals and poetry. This project will be exposed in <span>Siggraph Asia 2018</span> at Tokyo</p><p>Technos : <span>TouchDesigner</span>, <span>Python</span>, <span>AI - Deep Learning</span>, <span>Ableton Live</span></p>",
          background : './data/transitory/background.jpg',
          role: "Interactive Developer",
          context:'Student Project',
          year: "2018",
          color: "#8528ab",
          txtcolor: "#420e57",
          imgs: [
            {
              src : "https://www.youtube.com/embed/l6A9MvUaOsQ?rel=0&amp;controls=0&amp;showinfo=0;",
              full: false
            },
            {
              src : "./data/transitory/1.jpg",
              full: true
            },
            {
              src : "https://www.youtube.com/embed/DxIIl2Jj8ms?rel=0&amp;controls=0&amp;showinfo=0;",
              full: false
            },
            {
              src : "./data/transitory/2.jpg",
              full: false
            }
          ]
      },
      {
        name:  "film_photographs",
        type : "Website",
        title: "Film Photography",
        desc : "<p>Film Photography is the portfolio of my film photographs. It displays my best shots took during my travels, gathered into one analog film (35 photos). <br>Go take a look!   </p><p>Technos : <span>Vue.js</span>, <span>JavaScript</span>, <span>HTML5</span>, <span>CSS3</span>, <span>TweenMax</span></p>",
        link : "https://www.antoinedemiere.com/FilmPhotography/",
        background : './data/film_photographs/background.jpg',
        role: "Web Designer,<br>Web Developer",
        context:'Personal Project',
        year: "2018",
        color: "#5ea1d0",
        txtcolor: "#333849",
        imgs: [
          {
            src : "./data/film_photographs/4.jpg",
            full: false
          },
          {
            src : "https://www.youtube.com/embed/videoseries? listType=playlist&list=PL8rJS4YmZoAnIRxshUl0bkOWSpmWgdIKe& version=3&loop=1&autoplay=1&rel=0&showinfo=0&controls=0&autohide=1",
            full: false
          },
          {
            src : "./data/film_photographs/3.jpg",
            full: true
          },
          {
            src : "./data/film_photographs/2.jpg",
            full: false
          },
          {
            src : "./data/film_photographs/1.jpg",
            full: false
          }
        ]
      },
      { 
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
          name:  "delaunay_dreams",
          type : "Digital Installation",
          title: "Delaunay Dreams",
          desc : "<p>Delaunay’s Interactive Dreams is an interactive installation that immerses the audience in a audio and visual universe, inspired by French artists Robert and Sonia Delaunay. The sounds and visuals change according to users’ hand gestures. This allows the spectator to become the creator.</p><p>Technos : <span>C++</span>, <span>OpenFrameworks</span>, <span>LeapMotion SDK</span>, <span>Ableton Live</span>",
          link : "https://delaunaysinteractivedreams.github.io/",
          background : './data/delaunay_dreams/background.jpg',
          role: "Developer",
          context:'Student Project',
          year: "2016-2017",
          color: "#4C74B1",
          txtcolor: "#263855",
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
      }
    ] ,
  nbProjects: function(){return this.projects.length},
  all: function() {
    return this.projects.map((p, i)=>{
      p.id = i
      return p
    })
  },
  get: function(id) {
    const isProject = p => p.id === id;
    return this.projects[id];
  }
}

export default ProjectApi;