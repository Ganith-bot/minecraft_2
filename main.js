var canvas= new fabric.Canvas("myCanvas");
var block_width= 30;
var block_heigth= 30;
var player_x= 100;
var player_y= 100;
var player_object="";
var block_object="";
var block_x=50;
var block_y=50;

function player_call(){
   fabric.Image.fromURL("player.png",function(Img)
   {player_object=Img;
   player_object.scaleToWidth(100);
   player_object.scaleToHeight(150);
   player_object.set({
       left:player_x,top:player_y
   });
   canvas.add(player_object);
}
   );
}

function block_call(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_heigth);
    block_object.set({
        left:block_x,top:block_y
    });
    canvas.add(block_object);
 }
    );
 }

 window.addEventListener("keydown",keydown1);

function keydown1(e){
   var keys=e.keyCode;
   console.log(keys);

   if (e.shiftKey==true && keys=='80'){
      console.log("P and Shift key has been pressed")
      block_heigth=block_heigth+15;
      block_width=block_width+15;
      document.getElementById("wide1").innerHTML=block_width;
      document.getElementById("lenght1").innerHTML=block_heigth;
   }

   if (e.shiftKey==true && keys=='77'){
      console.log("M and Shift key has been pressed")
      block_heigth=block_heigth-15;
      block_width=block_width-15;
      document.getElementById("wide1").innerHTML=block_width;
      document.getElementById("lenght1").innerHTML=block_heigth;
   }

   if (keys=='67'){
      block_call("cloud.jpg");
      console.log("C has been pressed"+keys);
   }

   if (keys=='68'){
      block_call("dark_green.png");
      console.log("D has been pressed"+keys);
   }

   if (keys=='71'){
      block_call("ground.png");
      console.log("G has been pressed"+keys);
   }

   if (keys=='76'){
      block_call("light_green.png");
      console.log("L has been pressed"+keys);
   }

   if (keys=='80'){
      block_call("player.png");
      console.log("P has been pressed"+keys);
   }

   if (keys=='82'){
      block_call("roof.jpg");
      console.log("R has been pressed"+keys);
   }

   if (keys=='84'){
      block_call("trunk.jpg");
      console.log("T has been pressed"+keys);
   }

   if (keys=='85'){
      block_call("unique.png");
      console.log("U has been pressed"+keys);
   }

   if (keys=='87'){
      block_call("wall.jpg");
      console.log("W has been pressed"+keys);
   }

   if (keys=='89'){
      block_call("yello_wall.png");
      console.log("Y has been pressed"+keys);
   }

   if (keys=='38'){
      up();
      console.log("UP arrow has been pressed"+keys);
   }

   if (keys=='40'){
      down();
      console.log("DOWN arrow has been pressed"+keys);
   }

   if (keys=='37'){
      left();
      console.log("LEFT arrow has been pressed"+keys);
   }

   if (keys=='39'){
      right();
      console.log("RIGHT arrow has been pressed"+keys);
   }
}