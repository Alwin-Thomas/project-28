class Slingshot{
    constructor(body1,pointB){
        var slingoptions={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.01,
            length:20
        }
        this.pointB=pointB
        this.sling=Constraint.create(slingoptions)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    
    display(){
        if(this.sling.bodyA){
         var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
     
        }
        
    }
}