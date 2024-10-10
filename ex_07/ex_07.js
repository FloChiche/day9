// First canvas - Three shapes
const stage1 = new Konva.Stage({
    container: 'art1',
    width: 200,
    height: 200,
  });
  
  const layer1 = new Konva.Layer();
  stage1.add(layer1);
  
  // Adding shapes with adjusted positions
  const circle1 = new Konva.Circle({
    x: 60,
    y: 60,
    radius: 30,
    fill: '#0D3B66',
  });
  
  const rect1 = new Konva.Rect({
    x: 120,
    y: 120,
    width: 50,
    height: 30,
    fill: '#FAF0CA',
  });
  
  const hexagon1 = new Konva.RegularPolygon({
    x: 70,
    y: 140,
    sides: 6,
    radius: 20,
    fill: '#F95738',
  });
  
  layer1.add(circle1, rect1, hexagon1);
  layer1.draw();
  
  // Second canvas - Two shapes and animation
  const stage2 = new Konva.Stage({
    container: 'art2',
    width: 200,
    height: 200,
  });
  
  const layer2 = new Konva.Layer();
  stage2.add(layer2);
  
  const rect2 = new Konva.Rect({
    x: 50,
    y: 50,
    width: 80,
    height: 50,
    fill: '#F4D35E',
  });
  
  const circle2 = new Konva.Circle({
    x: 120,
    y: 120,
    radius: 30,
    fill: '#EE964B',
  });
  
  layer2.add(rect2, circle2);
  layer2.draw();
  
  // Animation for second canvas
  let velocityX = 2;
  function animate() {
    let posX = rect2.x() + velocityX;
    if (posX > stage2.width() - rect2.width() || posX < 0) {
      velocityX = -velocityX;
    }
    rect2.x(posX);
    layer2.draw();
  }
  animate();
  
  // Third canvas - Single shape and event
  const stage3 = new Konva.Stage({
    container: 'art3',
    width: 200,
    height: 200,
  });
  
  const layer3 = new Konva.Layer();
  stage3.add(layer3);
  
  const hexagon3 = new Konva.RegularPolygon({
    x: 100,
    y: 100,
    sides: 6,
    radius: 40,
    fill: '#FAF0CA',
  });
  
  // Adding event listener
  hexagon3.on('click', () => {
    hexagon3.fill('#F95738'); // Change color on click
    layer3.draw();
  });
  
  layer3.add(hexagon3);
  layer3.draw();
  