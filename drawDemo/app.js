var i=1;
var layerIndex=1;
var restorePoints = [];
  var a=false;
    var b,c="";
    var checkEvent=false;
    var layer1;
    

$(document).ready(function(){
	//$(function() {
  	  // alert("working");
		
	//});
   stage = new Kinetic.Stage({
          container: "drawingBoard",
          width: 310,
          height: 400,
          name:"stage",
        });
 drawing=new Kinetic.Rect({
      x:0,
      y:0,
      width: 310,
      height:400,
      fill:"transparent",
      name:"drawingRect",
      stroke:'green',
});  

drawingLayer = new Kinetic.Layer(); 
layer = new Kinetic.Layer();
textLayer = new Kinetic.Layer();

    
    drawingLayer.add(drawing);
    stage.add(drawingLayer);
     stage.add(layer);
            
  var d=drawingLayer.getCanvas();
  var drawCtx=drawingLayer.getContext();
          

$("#image").click(function(){
   layer.moveToTop();
   var sources="cn.jpg";
   loadImages(sources);
 
   layer.draw();
    drawingLayer.off("mousemove", function(d){});
    yodaGroup.on("mousedown", function() {
      layer1 = this.getLayer();
          this.moveToTop();
        });
 });
 
// touch drawing
$("#drawing").click(function(){ 
   drawingLayer.off("mousemove.erase", function(d){});
   drawingLayer.moveToTop();
     //drawCtx.drawRect(0,0,100,100);
   //drawingLayer.getContext().clearRect(0,0,0,0);

   drawCtx.strokeStyle="red";
   drawCtx.lineWidth=5;
   drawCtx.lineCap="round";
  // e.fillStyle="transparent";
   //e.fillRect(0,0,d.width,d.height);



 drawingLayer.on("mousedown", function(d){
  saveRestorePoint();
   //var mousePos = stage.getUserPosition();
   // var x = mousePos.x;
       // var y = mousePos.y;

    a=true;
    drawCtx.save();
    b=d.pageX-document.getElementById("drawingBoard").offsetLeft;
    c=d.pageY-document.getElementById("drawingBoard").offsetTop;

  });

$(document).mouseup(function(){a=false});
$(document).click(function(){a=false});

$("#bsz").change(function(a){drawCtx.lineWidth=this.value});
$("#bcl").change(function(a){drawCtx.strokeStyle=this.value});

drawingLayer.on("mousemove", function(d){
	if(a==true){
    //var mousePos = stage.getUserPosition();
        //var x = mousePos.x;
        //var y = mousePos.y;
        //alert("draw mosue down");
		drawCtx.beginPath();
		drawCtx.moveTo(d.pageX-
        document.getElementById("drawingBoard").offsetLeft,
        d.pageY-document.getElementById("drawingBoard").offsetTop);
		drawCtx.lineTo(b,c);
		drawCtx.stroke();
		drawCtx.closePath();
		b=d.pageX-document.getElementById("drawingBoard").offsetLeft;
        c=d.pageY-document.getElementById("drawingBoard").offsetTop;

        }
        
      
        }
		);
		
$("#clr > div").click(function(){
    drawCtx.strokeStyle=$(this).css("background-color");
    //$("#bcl").val($(this).css("background-color"))
   });
});//end drawing
 
// save drawing
$("#save").click(function(){
   stage.toDataURL(function(dataUrl) {
        $("#result").html("<img src="+dataUrl+' />');
        });
    });
    
// erase
$("#eraser").click(function(){
    drawingLayer.on("mousemove.erase", function(d){
     
  if(a==true){
  drawCtx.strokeStyle="transparent";
      //drawingLayer.getContext().strokeStyle="transparent";
     //drawingLayer.getContext().strokeRect(b-11, c-11, 21, 21);
    drawingLayer.getContext().clearRect(b-10, c-10, 20, 20);
     
       drawCtx.beginPath();
		drawCtx.moveTo(d.pageX-
        document.getElementById("drawingBoard").offsetLeft,
        d.pageY-document.getElementById("drawingBoard").offsetTop);

		drawCtx.lineTo(b,c);
		drawCtx.stroke();
		drawCtx.closePath();
		b=d.pageX-document.getElementById("drawingBoard").offsetLeft;
        c=d.pageY-document.getElementById("drawingBoard").offsetTop;
        
		}
       // drawCtx.clearRect(0,0,0,0); 
        }
       
        );


              });
              
$("#undo").click(function(){undoDrawOnCanvas();});    
    
 //clear drawing board   
$("#clear").click(function(){
      stage.clear();
   });
$("#delete").click(function(){
    //layer.moveToTop();
   // alert('groupName=='+groupName);
    selImage=layer.get(".yodaGroup")[0];
          layer.remove(selImage);
          layer.draw();
    
        //layer.draw(); 
}); 
$("#text").click(function(){
     textEditor();
     textLayer.moveToTop();
   });  
  $("#move").draggable();
		 //alert("working qsqw");
});

function saveRestorePoint() {

   // var d=drawingLayer.getCanvas();
   // var e=drawingLayer.getContext();
	
    stage.toDataURL(function(dataUrl){
    	var imgData=dataUrl;
    restorePoints.push(imgData);
  });
	
      //restorePoints.push(oImg);
}

function undoDrawOnCanvas() {
	if (restorePoints.length > 0)
	  {
        var imgUrl = restorePoints.pop();
        var imgOb = new Image();
        imgOb.src=imgUrl;
      
		//oImg.onload = function() {
		
            //drawingLayer.draw();
        // stage.toDataURL(function(dataUrl) {
          stage.clear();
          alert(stage.getStage());//.drawImage(imgOb,0,0);
           alert("working");
        //  drawingLayer.draw();
           
        // });
         }
   }