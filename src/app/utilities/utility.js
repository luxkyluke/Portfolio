import { browserHistory } from "react-router";


function requete(url, callback) {
    fetch(url, {credentials: "same-origin"})
        .then(function(response){
            if (response.status !== 200) {
                console.log('Error loading JSON Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                callback(data);
            });
        })
        .catch(function (error) {
            console.error("Request error :"+error.message);
        });
}


function requetePostSubmit(url, data, callback) {
    var form = new FormData();
    for(let key in data) {
        if(data.hasOwnProperty(key)) {
            let obj = data[key];
            form.append(key, obj);
        }
    }
    fetch(url, {
        method: 'POST',
        body: form
    })
        .then(function(response) {
            if (response.status !== 200) {
                console.log('Error loading JSON Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                console.log(url);
                console.log(data);
                callback(data);
            });
        })
        .catch(function(error) {
            console.error("Request error : " + error.message);
        });
}



function changePage(page){
    let url = window.location.href;
    let path =  url.split("#")[0];
    const newPath = path + "#"+page;
    window.history.pushState("", "", newPath);
    location.reload();
}

function getStyle(el, styleProp) {
  var value, defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
      return (function(value) {
        var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}


const utility = {
    query(url, callback){
        requete(url, callback);
    },

    queryPost(url, data, callback) {
        requetePostSubmit(url, data, callback);
    },

    getPublicPath(){
        return "./data/";
    },

    isConnected(callback){
        requete("api/user/id/", function(data){
            if(data.code == 0){
                changePage("/");
            }
            callback(data.id);
        });
    },
    //definition des types de fichiers
    IMAGE      : "1",
    YOUTUBE    : "2",
    SOUNDCLOUD : "3",
    TEXT       : "4",
    LINK       : "5"
}





module.exports = utility;