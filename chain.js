class chain{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            length:15,
            stiffness:0.5
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var A=this.chain.bodyA.position
        var B=this.chain.bodyB.position
        strokeWeight(30)
        line(A.x,A.y,B.x,B.y)
    }

}