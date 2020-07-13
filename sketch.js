var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var log, logSprite;
var log2, log2Sprite;
var log3, log3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);
  logSprite = createSprite(width / 2, 655, 200, 10);
  log2Sprite = createSprite(505, 560, 10, 200);
  log3Sprite = createSprite(295, 560, 10, 200);
  log2Sprite.shapeColor = color("red");
  logSprite.shapeColor = color("red");
  log3Sprite.shapeColor = color("red");
  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width / 2, 200, 5, {
    restitution: 0,
    isStatic: true,
  });

  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
  World.add(world, ground);
  Matter.Body.setStatic(packageBody, false);
  packageBody.setScale = 0.5;
  //Create logs

  log = Bodies.rectangle(width / 2, 655, 200, 10, { isStatic: true });
  log2 = Bodies.rectangle(505, 560, 10, 200, { isStatic: true });
  log3 = Bodies.rectangle(295, 560, 10, 200, { isStatic: true });
  World.add(world, log);
  World.add(world, log2);
  World.add(world, log3);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    World.add(world, packageBody);
  }
}
