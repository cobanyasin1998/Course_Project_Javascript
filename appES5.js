function Course(title, instructor, image) {
  this.title = title;
  this.instructor = instructor;
  this.image = image;
}

function UI() {}

UI.prototype.addCourseToList = function (course) {
  const list = document.getElementById("course-list");
  var html = `
<tr>
    <td><img style="width:100px;" src="img/${course.image}"/></td>    
    <td>${course.title}</td>    
    <td>${course.instructor}</td>    
    <td><a href="#" class="btn btn-danger btn-sm">Delete</a></td>   
</tr>
`;
  list.innerHTML = html;
};

UI.prototype.clearControls = function () {
  const title = document.getElementById("title").value = "";
  const instructor = document.getElementById("instructor").value = "";
  const image = document.getElementById("image").value = "";
};

document.querySelector("#new-course").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const instructor = document.getElementById("instructor").value;
  const image = document.getElementById("image").value;

  const course = new Course(title, instructor, image);

  const ui = new UI();
  ui.addCourseToList(course);
  ui.clearControls();

  e.preventDefault();
});
