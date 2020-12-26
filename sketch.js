const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1 = new Pendulum(400,500,200/2);
	bob2 = new Pendulum(300,500,200/2);
	bob3 = new Pendulum(200,500,200/2);
	bob4 = new Pendulum(500,500,200/2);
  bob5 = new Pendulum(600,500,200/2);
  
  rope1 = new Sling(400,200,400,500);
  rope2 = new Sling(300,200,300,500);
  rope3 = new Sling(200,200,200,500);
  rope4 = new Sling(500,200,500,500);
  rope5 = new Sling(600,200,600,500);

}
 
function draw() {
  background("black");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function mouseDragged() {
  Matter.Body.setPosition(pendulum.body, {x: mouseX, y: mouseY});
}