class Launcher{
    constructor(body1,point1){
    var options={
        bodyA: body1,
        pointB: point1,
        stiffness: 0.04,
        length: 10
    }
    this.point1=point1
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            var pointA= this.sling.bodyA.position
            var pointB=this.point1
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y)    
        }
        
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
}