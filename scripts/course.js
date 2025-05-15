const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    if (menuToggle.textContent === 'X'){
        menuToggle.textContent = '☰';
    }else{
        menuToggle.textContent = 'X';
    }
});

function getTotalCredits(courseList){
    const total = courseList.reduce((sum,course) => sum + course.credits,0);
    const totalCreditsDiv = document.getElementById('totalcredits'); 

    if (totalCreditsDiv) {
        totalCreditsDiv.innerHTML = `<p>The total number of courses listed below is ${total} credit unit</p>`;
    } else {
        console.warn('Element with ID "totalcredits" not found.');
    }
}

function displayCourse(list) {
    const courseCode = document.querySelector('.course');
    courseCode.innerHTML = ""; // Optional: clear previous content
    list.forEach(course => {
        const codeKey = `${course.subject.trim()} ${course.number}`.trim();
        courseCode.innerHTML += `
            <div class="course-code" data-code="${codeKey}">
                <a>${course.subject} ${course.number}</a>
            </div>`;
    });
    getTotalCredits(list);
}
function getCompletedCourse(courses) {
    const completed = courses.filter(course => course.completed === true);
    completed.forEach(course => {
        const codeKey = `${course.subject.trim()} ${course.number}`.trim();
        const courseCode = document.querySelector(`.course-code[data-code="${codeKey}"]`);
        if (courseCode) {
            courseCode.style.backgroundColor = 'black';
            courseCode.style.color = 'white'
        }
    });
}

function updateDate(){
    const year = document.querySelector('#currentyear');
    const today = new Date()
    year.textContent=`${today.getFullYear()}`;

    document.querySelector('#Lastupdated').innerText=`${document.lastModified}`;
}

function changeContent(list){
    document.querySelectorAll('.toggle a').forEach(anchor => {
        anchor.addEventListener('click',()=>{
            const filter = anchor.textContent.trim();
            let filteredCourse;
            if(filter === 'All')
                filteredCourse = list;
            else{
                filteredCourse = list.filter(course => course.subject === filter)
            }
            displayCourse(filteredCourse);
            getCompletedCourse(filteredCourse);
        })
    })
}
//call function
displayCourse(courses);
getCompletedCourse(courses);
changeContent(courses)
updateDate();
