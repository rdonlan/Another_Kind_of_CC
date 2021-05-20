/* Source: https://processing.org/discourse/beta/num_1202486379.html
 * Draw a dashed line with given set of dashes and gap lengths. 
 * x0 starting x-coordinate of line. 
 * y0 starting y-coordinate of line. 
 * x1 ending x-coordinate of line. 
 * y1 ending y-coordinate of line. 
 * spacing array giving lengths of dashes and gaps in pixels; 
 *  an array with values {5, 3, 9, 4} will draw a line with a 
 *  5-pixel dash, 3-pixel gap, 9-pixel dash, and 4-pixel gap. 
 *  if the array has an odd number of entries, the values are 
 *  recycled, so an array of {5, 3, 2} will draw a line with a 
 *  5-pixel dash, 3-pixel gap, 2-pixel dash, 5-pixel gap, 
 *  3-pixel dash, and 2-pixel gap, then repeat. 
 */ 
void dashline(float x0, float y0, float x1, float y1, float[ ] spacing) 
{ 
  float distance = dist(x0, y0, x1, y1); 
  float [ ] xSpacing = new float[spacing.length]; 
  float [ ] ySpacing = new float[spacing.length]; 
  float drawn = 0.0;  // amount of distance drawn 
 
  if (distance > 0) 
  { 
    int i; 
    boolean drawLine = true; // alternate between dashes and gaps 
 
    /* 
      Figure out x and y distances for each of the spacing values 
      I decided to trade memory for time; I'd rather allocate 
      a few dozen bytes than have to do a calculation every time 
      I draw. 
    */ 
    for (i = 0; i < spacing.length; i++) 
    { 
      xSpacing[i] = lerp(0, (x1 - x0), spacing[i] / distance); 
      ySpacing[i] = lerp(0, (y1 - y0), spacing[i] / distance); 
    } 
 
    i = 0; 
    while (drawn < distance) 
    { 
      if (drawLine) 
      { 
        line(x0, y0, x0 + xSpacing[i], y0 + ySpacing[i]); 
      } 
      x0 += (2 * xSpacing[i]); 
      y0 += (2 * ySpacing[i]); 
      /* Add distance "drawn" by this line or gap */ 
      drawn = drawn + mag(xSpacing[i], ySpacing[i]); 
      i = (i + 1) % spacing.length;  // cycle through array 
      drawLine = !drawLine;  // switch between dash and gap 
    } 
  } 
}


// Sets the size of the canvas and specifies the render mode (P3D).
void setup() {
  size(800, 800, P3D);
	background(128,128,128);
	stroke_size = 5
	strokeWeight(stroke_size);
}


// this ellipse has no real purpose other than for some reason unknown to me the strokeWeight
// function won't work without it in this location
ellipse(1, 1, 1, 1);


/*
The code inside the draw() function runs continuously
from top to bottom until the program is stopped.
*/
void draw() {
	
	// this allows you to clear your drawing
	if (keyCode == 'R'){
		keyCode = 'L';
		background(128,128,128);
	}
	
	// this allows you to make lines thicker by 1 pixel each time you press the 'W' key
	if (keyCode == 'W'){
		stroke_size += 2;
		keyCode = 'L';
		strokeWeight(stroke_size);
		print('the line width is now: ' + str(stroke_size));
	}
	
	// this allows you to make lines thinner by 1 pixel each time you press the 'S' key
	if ((keyCode == 'S') && stroke_size > 1){
		stroke_size -= 2;
		keyCode = 'L';
		strokeWeight(stroke_size);
		print('the line width is now: ' + str(stroke_size));
	}
	
  if(mousePressed) {
		
		// calculations needed for the location of the lines in sections that are 45 degrees off the axis
		new_x_pos = ((mouseX - 400) / sqrt(2)) + 400 + ((400 - mouseY) / sqrt(2));
		new_y_pos = ((mouseX - 400) / sqrt(2)) + 400 - ((400 - mouseY) / sqrt(2));
		new_x_pos_with_prev = ((pmouseX - 400) / sqrt(2)) + 400 + ((400 - pmouseY) / sqrt(2));
		new_y_pos_with_prev = ((pmouseX - 400) / sqrt(2)) + 400 - ((400 - pmouseY) / sqrt(2));
		
		// this draws the lines defualt as solid
		if (keyCode != 'D'){
			// the line being drawn from the mouse
			stroke(255,0,0);
			line(mouseX, mouseY, pmouseX, pmouseY);
			
			// this line is in the section that is one step clockwise
			stroke(0,0,255);
			line(new_x_pos, new_y_pos, new_x_pos_with_prev, new_y_pos_with_prev);

			// this line is in the section that is one step counter-clockwise
			stroke(255, 165, 0);
			line(new_y_pos, (400 - (new_x_pos - 400)), new_y_pos_with_prev, (400 - (new_x_pos_with_prev - 400)));

			//this line is in the section that is three steps clockwise
			stroke(0,255,255);
			line((400 - (new_y_pos - 400)), (400 - (400 - new_x_pos)), (400 - (new_y_pos_with_prev - 400)), (400 - (400 - new_x_pos_with_prev)));

			// this line is in the section that is three steps counter-clockwise
			stroke(255,0,255);
			line((400 - (new_x_pos - 400)), (400 + (400 - new_y_pos)), (400 - (new_x_pos_with_prev - 400)), (400 + (400 - new_y_pos_with_prev)));

			// the line in the opposite (180 degrees) section
			stroke(225,225,255);
			line((400 - (mouseX - 400)), (400 + (400 - mouseY)), (400 - (pmouseX - 400)), (400 + (400 - pmouseY)));

			// the line in the section 2 in the counter-clockwise direction
			stroke(255,255,0);
			line(mouseY, (400 - (mouseX - 400)), pmouseY, (400 - (pmouseX - 400)));

			// the line in the section 2 in the clockwise direction
			stroke(0,235,0);
			line((800 - mouseY), mouseX, (800 - pmouseY), pmouseX);
		}

		// this will allow you to draw with dotted lines
		// this will return to solid lines when any other key is pressed
		// this means if the user attempts to increase or decrease the line width while drawing with
		// dotted lines the lines will automatically become solid again
		if (keyCode == 'D'){
			// the line being drawn from the mouse
			stroke(255,0,0);
			dashline(mouseX, mouseY, pmouseX, pmouseY, [5,15]);
			
			// this line is in the section that is one step clockwise
			stroke(0,0,255);
			dashline(new_x_pos, new_y_pos, new_x_pos_with_prev, new_y_pos_with_prev, [5,15]);

			// this line is in the section that is one step counter-clockwise
			stroke(255, 165, 0);
			dashline(new_y_pos, (400 - (new_x_pos - 400)), new_y_pos_with_prev, (400 - (new_x_pos_with_prev - 400)), [5,15]);

			//this line is in the section that is three steps clockwise
			stroke(0,255,255);
			dashline((400 - (new_y_pos - 400)), (400 - (400 - new_x_pos)), (400 - (new_y_pos_with_prev - 400)), (400 - (400 - new_x_pos_with_prev)), [5,15]);

			// this line is in the section that is three steps counter-clockwise
			stroke(255,0,255);
			dashline((400 - (new_x_pos - 400)), (400 + (400 - new_y_pos)), (400 - (new_x_pos_with_prev - 400)), (400 + (400 - new_y_pos_with_prev)), [5,15]);

			// the line in the opposite (180 degrees) section
			stroke(225,225,255);
			dashline((400 - (mouseX - 400)), (400 + (400 - mouseY)), (400 - (pmouseX - 400)), (400 + (400 - pmouseY)), [5,15]);

			// the line in the section 2 in the counter-clockwise direction
			stroke(255,255,0);
			dashline(mouseY, (400 - (mouseX - 400)), pmouseY, (400 - (pmouseX - 400)), [5,15]);

			// the line in the section 2 in the clockwise direction
			stroke(0,235,0);
			dashline((800 - mouseY), mouseX, (800 - pmouseY), pmouseX, [5,15]);
		}		
	}
}