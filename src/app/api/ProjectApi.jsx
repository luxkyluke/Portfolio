//const the_railway_chronicles_bg = require('/././data/the_railway_chronicles/background.jpg');


const ProjectApi = {
  projects: [
    { 
      id: 0,   
      name:  "monaco_porcelaine",
      type : "Webapp",
      title: "Chinese Porcelains",
      desc : "This project is do eiusmo dtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi  ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ",
      background : '/data/monaco_porcelaine/background.jpg',
      role: "Developer",
      context:'Intership at <br> <a href="http://fleurdepapier.com" target="_blank">Fleur de Papier</a>',
      year: "2017",
      color: "#232846",
      txtcolor: "#000314",
      imgs: [
        {
          src : "/data/monaco_porcelaine/3.jpg",
          full: false
        },
        {
          src : "/data/monaco_porcelaine/1.jpg",
          full: false
        },
        {
          src : "/data/monaco_porcelaine/2.jpg",
          full: true
        },
        {
          src : "/data/monaco_porcelaine/4.jpg",
          full: false
        },
        {
          src : "/data/monaco_porcelaine/6.jpg",
          full: false
        }

      ]
    },
    { 
      id: 1,   
      name:  "the_railway_chronicles",
      type : "Website",
      title: "The Railway Chronicles",
      desc : "This project is do eiusmo dtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi  ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ",
      link : "http://luxkyluke.github.io/therailwaychronicles/",
      background : '/data/the_railway_chronicles/background.jpg',
      role: "Developer,<br> Web Designer",
      context:"Student Project",
      year: "2016",
      color: "#A4632A",
      txtcolor: "#5A2A00",
      imgs: [
        {
          src : "/data/the_railway_chronicles/1.jpg",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/5.gif",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/2.jpg",
          full: true
        },
        {
          src : "/data/the_railway_chronicles/4.jpg",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/3.jpg",
          full: false
        }
      ]
    },
    { 
      id: 2,   
      name:  "the_railway_chronicles",
      type : "Website",
      title: "The Railway Chronicles",
      desc : "This project is do eiusmo dtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ",
      link : "http://luxkyluke.github.io/therailwaychronicles/",
      background : '/data/the_railway_chronicles/background.jpg',
      role: "Developer,<br> Web Designer",
      context:"Student Project",
      year: "2016",
      color: "#A4632A",
      txtcolor: "#5A2A00",
      imgs: [
        {
          src : "/data/the_railway_chronicles/1.jpg",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/3.jpg",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/2.jpg",
          full: true
        },
        {
          src : "/data/the_railway_chronicles/4.jpg",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/5.jpg",
          full: false
        }
      ]
    },
    { 
        id: 3,   
        name:  "delaunay_dreams",
        type : "Interactive Installation",
        title: "Delaunay Dreams",
        desc : "This project is do eiusmo dtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ",
        link : "https://delaunaysinteractivedreams.github.io/",
        background : '/data/delaunay_dreams/background.jpg',
        role: "Developer",
        context:'University Project',
        year: "2016-2017",
        color: "#50180d",
        txtcolor: "#200500",
        imgs: [
          {
            src : "/data/delaunay_dreams/4.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/1.mp4",
            full: true
          },
          {
            src : "/data/delaunay_dreams/6.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/7.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/1.jpg",
            full: true
          },
          {
            src : "/data/delaunay_dreams/5.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/8.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/3.jpg",
            full: false
          }

        ]
      }
  ],

  nbProjects: function(){return this.projects.length},
  all: function() {return this.projects},
  get: function(id) {
    const isProject = p => p.id === id
    return this.projects.find(isProject)
  }
}

export default ProjectApi;