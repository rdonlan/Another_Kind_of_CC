# Another_Kind_of_CC
Computational Creativity Spring 2021 Final Project

My project is called the Octo-Draw. It is a very simple premise that took a lot more time than I imagined to create. Basically this code separate the swqaure processing canvas into 8 equal sectors, split with a singular vertical and singular horizontal line (think about the sectors as slices if the square canvas was a pizza). The user would then click down to draw a red line, and 7 other lines would be drawn in unison. These lines are drawn so that every sector has rotational symmetry with the one that the user is drawing in. It is able to make some really cool and mesmorizing pictures, and I found myself just listening to music and playing around with it for way to long!

The users will essentially be creating a drawing. The users will stay engaged because of how mesmorizing the symmetry drawings that the program creates while the user is drawing. There are literally infinite possibilities to draw, and every different move of the mouse feels like something new and unique. Also, the program allows the user to change the width of the lines, and even turn the lines from solid to dotted to add more possibilities to their artwork. The users can stop at any time and take a screenshot or picture of their artwork and proudly share it amongst friends.

Special Commands are triggered when a specific key is pressed on the keyboard. Below are their descriptions:

R --> This command will wipe the canvas and give a new blank screen to create new artwork on

W --> Everytime this key is pressed the line will get thicker. This works while the user is in the process of drawing or even when they are not.

S --> Everytime this key is pressed the line will get thinner until it reaches a minimum of 1 pixel. This works while the user is in the process of drawing or even when they are not.

D --> The lines become dotted and are no longer solid. However after any other key is pressed (to potentially reset the canvas or alter the line width) the lines                  will by defualt become solid again. This is because when another key is pressed it disrupts the line for a split second, which is offputting and noticable for the solid line.

This system is meaningful to me because it reaches all the way back to the first ever app I played with on a smart phone. After my parents first got a smart phone when I was in late elementary school/early middle school they were very restrictive about what apps they would allow me to download on their phones to play with. One that we both agreed on was an app that helped the user to create spinart. I thought it was the coolest thing ever and spent hours using it, sending screenshots of my favorite ones to all my family members. While my project creates a different type of artwork, it is similar because of the mesmorizing pictures it can creates, and the unlimited potential for unique pictures.

This project challenged me as a computer scienctist because of the advanced planning that it took. I had to sit down with a notebook and calculator and determinine exactly what the coordinates of each of the seven computer generated lines needed to be so that the rotational symmetry worked correctly. This took more hours than I care to admit! However it was different for me than almost all previous projects because I didn't just dive straight in and do trial and error. I really made sure that I had this one planned out and the math calculated beforehand to make the rest of the project a breeze.

I cited the url at the top of the method, but I took inspiration for the dotted lines function from the page https://processing.org/discourse/beta/num_1202486379.html and the user J David Eisenberg.

The code in this repo has been copied and pasted from the editor at https://openprocessing.org/sketch/create with the Pjs setting. 
