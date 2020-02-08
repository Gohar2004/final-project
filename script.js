function setup() {

    var socket = io();

    var side = 30;

    var matrixclient = [];

    
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');


    function drawCreatures(data) {
        console.log(data)
        
        matrixclient = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        
        createCanvas(matrixclient[0].length * side, matrixclient.length * side)
        //! clearing background by 
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrixclient.length; i++) {
            for (var j = 0; j < matrixclient[i].length; j++) {
                if (matrixclient[i][j] == 1) {
                    fill("green");
                } else if (matrixclient[i][j] == 2) {
                    fill("orange");
                }
               else if (matrixclient[i][j] == 3) {
                    fill('red');
                } else if (matrixclient[i][j] == 4) {
                    fill('blue');
                } else if (matrixclient[i][j] == 5) {
                    fill('yellow');
                }else{
                    fill('#acacac');
                }
                rect(j * side, i * side, side, side);
                
            }
        }
        // function mousePressed(){
        //     var x = Math.floor(mouseX/side);
        //     var y = Math.floor(mouseY/side);
        //     var arr =[x,y];
        //     console.log(arr)
        //     socket.emit("fire",arr)
        // }
        // mousePressed();
    }
    socket.on("data", drawCreatures);
}