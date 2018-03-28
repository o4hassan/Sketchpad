
// the function that will create the grids inside of my container
function makeGrid(x) {
    for (var rows = 0; rows < x*x; rows ++){
       // for (var columns = 0; columns < x; columns ++){         
            $("#container").append("<div class='grid'></div>");
        //};
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

//function clearing the grid

function clearGrid(){
    $(".grid").remove();
}

//function asking user to select number of boxes in a grid

function refreshGrid(){
    var z= prompt("Input the number of rows you want")
    clearGrid();
    makeGrid(z);
}


// Now after doing all the functions, start the jQuery
/* original grid when page is refreshed */$(document).ready(function(){
    makeGrid(16);
    $(".grid").hover(function(){
    $(this).css("background-color","orange")
    })
       /*new grid function */ $(".newGrid").click(function(){
            refreshGrid();
            $(".grid").hover(function(){
            $(this).css("background-color","orange")
            })
       })
               /*Eraser*/ $(".eraseall").click(function(){
                    $(".grid").css("background-color","white").css("outline-color","black");
                })
    /*changing colours */
    $(".red").click(function(){
        $(".grid").hover(function(){
            $(this).css("background-color","red")
        })
    })
    $(".blue").click(function(){
        $(".grid").hover(function(){
            $(this).css("background-color","blue")
        })
    })
    $(".green").click(function(){
        $(".grid").hover(function(){
            $(this).css("background-color","green")
        })
    })
});
    

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid*/
//$(document).ready(function() {
//    make(16);
//})
/*
    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});*/
