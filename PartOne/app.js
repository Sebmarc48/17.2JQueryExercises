$(document).ready(() => {
  console.log("Let's get ready to party with jQuery!");
});
//2-
$("article img").addClass("image-center");
//3-
$("p article").last().remove();

//4-
let randomPixel = Math.random() * 100 + 1;
$("#title").css("font-size", randomPixel);

//5-
$("ol").append("<li>it can say whatever you want</li>");

//6-
$("ol").empty();
$("ol").append("<p>I'm sorry for the list's existence</p>");

//7-
$("input.form-control").change(() => {
  let inputs = $("input.form-control");
  $("body").css(
    "background-color",
    `rgb(${inputs[0].value}, ${inputs[1].value}, ${inputs[2].value})`
  );
});

//8-
$("img").click(function () {
  $(this).remove();
});

/*  
 1 . When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!” DONE
 Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head). DONE
3. Remove the last paragraph in the article. DONE
  4. Set the font size of the title to be a random pixel size from 0 to 100. DONE
 5. Add an item to the list; it can say whatever you want. DONE
 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence. DONE
 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.  DONE
 8. Add an event listener so that when you click on the image, it is removed from the DOM. DONE */
