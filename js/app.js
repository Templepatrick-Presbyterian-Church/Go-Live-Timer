var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

//this really isn't the best way to do this, but I can't get it to read from config files right now so there's not much I can do...
if(mm == 12){
    particlesJS('particles-js',

{
    "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#fff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 500,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 4,
            "duration": 0.3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
      }
  );

  if(dd != 25){
    document.getElementById("greeting").innerHTML = "<h2>Merry Christmas!</h2><br><br>";
  } else{
    document.getElementById("main").innerHTML = "<h2 style='text-align: justify;'>This site is closed for now. Go and enjoy Christmas Day, it only happens once a year! Don't worry, the site will be back as usual tomorrow.</h2><br><br><h1><a href='https://www.youtube.com/watch?v=T3f5D9eAAPA'>🎁</a></h1>";
    document.getElementById("header").innerHTML = "";
    document.getElementById("footer").innerHTML = "";
  }
}
else{
    particlesJS('particles-js',
    {
        "particles": {
          "number": {
            "value": 140,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#03B1B5"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 3,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#03B1B5",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
  );
}
