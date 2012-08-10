var stage;
var drawingcan;
var layer;
var drawingLayer;
var textLayer;
var yodaGroup;
var selImage;
var groupName;
var i=1;
var yodaImg;

    function update(group, activeAnchor) {
    
        var topLeft = group.get(".topLeft")[0];
        var topRight = group.get(".topRight")[0];
        var bottomRight = group.get(".bottomRight")[0];
        var bottomLeft = group.get(".bottomLeft")[0];
        var image = group.get(".image")[0];

        // update anchor positions
        switch (activeAnchor.getName()) {
          case "topLeft":
            topRight.attrs.y = activeAnchor.attrs.y;
            bottomLeft.attrs.x = activeAnchor.attrs.x;
            break;
          case "topRight":
            topLeft.attrs.y = activeAnchor.attrs.y;
            bottomRight.attrs.x = activeAnchor.attrs.x;
            break;
          case "bottomRight":
            bottomLeft.attrs.y = activeAnchor.attrs.y;
            topRight.attrs.x = activeAnchor.attrs.x;
            break;
          case "bottomLeft":
            bottomRight.attrs.y = activeAnchor.attrs.y;
            topLeft.attrs.x = activeAnchor.attrs.x;
            break;
        }

        image.setPosition(topLeft.attrs.x, topLeft.attrs.y);
        image.setSize(topRight.attrs.x - topLeft.attrs.x, bottomLeft.attrs.y - topLeft.attrs.y);
      }
      
      
function addAnchor(group, x, y, name) {
     
       var stage = group.getStage();
       layer = group.getLayer();

        var anchor = new Kinetic.Circle({
          x: x,
          y: y,
          stroke: "#666",
          fill: "#ddd",
          strokeWidth: 2,
          radius: 2,
          name: name,
          draggable: true
        });

        anchor.on("dragmove", function() {
          update(group, this);
          layer.draw();
        });
        anchor.on("mousedown touchstart", function() {
          group.setDraggable(false);
          this.moveToTop();
        });
        anchor.on("dragend", function() {
          group.setDraggable(true);
          layer.draw();
        });
        // add hover styling
        anchor.on("mouseover", function() {
          var layer = this.getLayer();
          document.body.style.cursor = "pointer";
          this.setStrokeWidth(4);
          layer.draw();
        });
        anchor.on("mouseout", function() {
          var layer = this.getLayer();
          document.body.style.cursor = "default";
          this.setStrokeWidth(2);
          layer.draw();
        });

        group.add(anchor);
      }
      
      
function loadImages(a){
      
        groupName='grp'+i;
        var img = new Image();
        img.src="cn.jpg";  
        i++;                    
   yodaGroup = new Kinetic.Group({
          x: 0,
          y: 0,
          width:310,
          height: 400,
          draggable: true,
          name:groupName,
          
        });
        
    layer.add(yodaGroup);
    stage.add(layer);
    //if(yodaImg){yodaImg.image="cn.jpg";}
    //else
   // {
   yodaImg = new Kinetic.Image({
          x: 0,
          y: 0,
          image:img,
          width:100,
          height: 120,
          name: "image",
          id: "myimage"
        });
       // }
    
        yodaGroup.add(yodaImg);
        addAnchor(yodaGroup, 0, 0, "topLeft");
        addAnchor(yodaGroup, 100, 0, "topRight");
        addAnchor(yodaGroup, 100, 120, "bottomRight");
        addAnchor(yodaGroup, 0, 120, "bottomLeft");
        
    yodaImg.on("mousedown",function(evt){
 
   yodaImg.getImage();
    //  yodaGroup.remove(yodaImg);SSSS
     // layer.draw();
      //
      
});
    yodaGroup.on("mousedown dragstart", function(){
          
          this.moveToTop();
          //alert('jjhojhojhojho==='+yodaGroup.getImage());
       // groupName=yodaGroup.getName();
          layer.draw();
        
          //alert('selImage=='+selImage);
           //alert("mouse over is working");
        });
   

        //stage.draw();
      }
function textEditor()
{ 
 var text= new Kinetic.Text({
          x:50,
          y:50,
          
          // draggable: true,
          //fill:"green",
          text:'All the world\'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.',
          textFill: "black",
          fontSize: 14,
          stroke:'red',
          width: 200,
          height:100,
         // padding: 20,
          //align: 'center',
          fontStyle: 'italic',
        });
        
       textLayer.add(text);
       stage.add(textLayer); 
       textLayer.draw();
       
}
/*  new Kinetic.Text({
          x: 50,
          y: 65,
          stroke: 'black',
          strokeWidth: 5,
          fill: '#ddd',
          text: 'All the world\'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.',
          fontSize: 14,
          fontFamily: 'Calibri',
          fontStyle: 'normal',
          textFill: '#555',
          width: 100,
          padding: 20,
          align: 'center',
          fontStyle: 'italic',

          //cornerRadius: 10
        });   

 */   
  

   
  
