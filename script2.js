
function displayRandomCourses() {
    // An array of courses
    var courses = [
      {
        title: "Intro to JavaScript",
        image: "../img/courses/js1.png",
        category: "js",
        price:64
      },
      {
        title: "JavaScript Fundamentals",
        image: "../img/courses/js2.png",
        category: "js",
        price:80
      },
      {
        title: "Intro to css",
        image: "../img/courses/css.jpg",
        category: "css",
        price:54
      },
      {
        title: "Intro to html",
        image: "../img/courses/html1.jpeg",
        category: "html",
        price:34
      },
      {
        title: "Intro to php",
        image: "../img/courses/php2.jpg",
        category: "php",
        price:74
      },
      {
        title: "php oop",
        image: "../img/courses/php.jpg",
        category: "php",
        price:4
      },
      {
        title: "css tricks",
        image: "../img/courses/css2.jpg",
        category: "css",
        price:0
      },
      {
        title: "node js ",
        image: "../img/courses/html1.jpeg",
        category: "js",
        price:44
      },
      {
        title: "laravel",
        image: "../img/courses/laravel.png",
        category: "php",
        price:69
      },
    ];
    // Pick 3 random courses
    var randomCourses = [];
    while (randomCourses.length < 3) {
      var randomIndex = Math.floor(Math.random() * courses.length);
      if (!randomCourses.includes(courses[randomIndex])) {
        randomCourses.push(courses[randomIndex]);
      }
    }
  
    // Clear the container
    var container = document.getElementById("courses-container");
    container.innerHTML = "";
  
    // Add the random courses to the container
    for (var i = 0; i < randomCourses.length; i++) {
      var course = randomCourses[i];
      var html = `
        <div class="course">
          <img src="${course.image}" alt="${course.title}">
          <p>${course.title}</p>
          <span>${course.price}</span>
        </div>
      `;
      container.innerHTML += html;
    }
  }
  
  // Call the function when the page loads
  displayRandomCourses();
  function redirectToCourses() {
    window.location.href = "/courses.html";
  }