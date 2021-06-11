class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x,y,this.w,this.h,options)
        World.add(world,this.body)

    }
    display(){
        var position=this.body.position
        var angle=this.body.angle
        push ()
        translate (position.x,position.y)
        rotate (angle)
        rectMode(CENTER)
        fill ("brown")
        rect(0,0,this.w,this.h)

        pop ()
    }
}