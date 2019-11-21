var app = new Vue({
    el: '#app',
    data: {
        variable: 'hello',
        divs: [],
        planets: [],
        // styleObject: {
        //     top: 0,
        //     left: 0,
        // }
        posx: 0,
        posy: 0,
        captureToggle: false,
        x: 0,
        y: 0,
        // xoffs: 500,
        // yoffs: 50,
        mousex: 0,
        mousey: 0,
        zoom: 1,
        galaxysize: 10,
        tilesizeinpx: 250,
        galaxyborder: 20,

        // zoom: 0.500001,
    },
    methods: {
        mo: function(evt) {
            if (this.captureToggle) {
                this.x += (evt.x - this.mousex);
                this.y += (evt.y - this.mousey);
                this.mousex = evt.x;
                this.mousey = evt.y;
            }
        },
        captureOn: function(evt) {
            this.captureToggle = true;
            this.mousex = evt.x;
            this.mousey = evt.y;
        },
        captureOff: function() {
            this.captureToggle = false;
        },
        zoomin() {
            this.zoom += 0.1;
        },
        zoomout() {
            this.zoom -= 0.1;
        },
        createarray() {
            var hello = [];
            for (var j = 0; j < this.galaxysize; j++) {
                var row = [];
                for (var i = 0; i < this.galaxysize; i++) {
                    row.push("");
                }
                hello.push(row);
            }
            this.divs = hello;
            this.planets = hello;

            this.planets[2][2] = "tile.png";
            this.planets[9][1] = "tile.png";
            this.planets[2][9] = "tile.png";
        },
    },
    computed: {
        styleObject: function() {
            if (this.x > this.galaxyborder) {
                this.x = this.galaxyborder;
            }
            if (this.y > this.galaxyborder) {
                this.y = this.galaxyborder;
            }
            var width = document.getElementById("window").offsetWidth;
            var height = document.getElementById("window").offsetHeight;

            if (this.x < -this.galaxywidth + width - this.galaxyborder) {
                this.x = -this.galaxywidth + width - this.galaxyborder;
            }
            if (this.y < -this.galaxyheight + height - this.galaxyborder) {
                this.y = -this.galaxyheight + height - this.galaxyborder;
            }
            return {
                left: (this.x) + "px",
                top: (this.y) + "px",
            }
        },
        zoomStyleObject: function() {
          return {
                transform: "scale(" + this.zoom + ")",  
          }
        },
        galaxywidth() {
            return this.galaxysize * this.tilesizeinpx;
        },
        galaxyheight() {
            return this.galaxysize * this.tilesizeinpx;
        },
    },

    created() {
        this.createarray();
        // window.addEventListener('scroll', this.zoom);
    },
});
