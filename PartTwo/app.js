$(".movieForm").submit(function (e) {
  e.preventDefault();
  appendMovie();
});

function appendMovie() {
  let movieTitle = $(".titleInput").val();
  let movieRating = $(".ratingInput").val();

  if (movieTitle.length > 1) {
    let li = $(`<li> Movie: ${movieTitle} Rating: ${movieRating}</li>`);
    let removeBtn = $("<button>", {
      text: "REMOVE",
      click: function () {
        $(this).parent().remove();
      },
    });
    li.append(removeBtn);
    $(".movieList").append(li);
  }
}
