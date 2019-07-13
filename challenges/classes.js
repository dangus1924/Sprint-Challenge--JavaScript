// 1. Copy and paste your prototype in here and refactor into class syntax.



// function CuboidMaker(length, width, height){
//     this.length = length;
//     this.width = width;
//     this.height =  height;
//     this.volume = (this.length * this.width * this.height);
//     this.surfaceArea = (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//   }
  class CuboidMakers{
      constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height =  height;
        this.volume = (this.length * this.width * this.height);
        this.surfaceArea = (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
          } 
      }
  
  
  CuboidMakers.prototype.Volume = function(){
    return this.volume;
  }
     
  CuboidMakers.prototype.SurfaceArea = function() {
    return this.surfaceArea;
  }
      
  let shapes = new CuboidMakers(4, 5, 5);
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(shapes.Volume()); // 100
  console.log(shapes.SurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.