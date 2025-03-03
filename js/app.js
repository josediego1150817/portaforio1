

    // Sample student data
const studentsList = document.getElementById('studentsList');
const template = document.getElementById('studentCardTemplate');

// Render students
async function renderStudents() {
    const students = await api.getStudents();
    studentsList.innerHTML = '';
    students.forEach(student => {
        console.log(student);
        const clone = template.content.cloneNode(true);
        
        clone.querySelector('.student-name').textContent = student.name;
        
        clone.querySelector('.student-id').textContent = `ID: ${student.code}`;
        clone.querySelector('.student-email').textContent = student.email;
        clone.querySelector('.student-image').src = student.photo;

        clone.querySelector('.student-image').addEventListener('click', () => {
            console.log('Image clicked');
        });
        clone.querySelector('.github-link').href = `https://github.com/${student.github}`;
        
        studentsList.appendChild(clone);
        
    });
}

const btnLoad = document.getElementById('loadStudent');
const btnNew = document.getElementById('addNewStudent');



btnLoad.addEventListener('click', async () => {
    await renderStudents();
});


btnNew.addEventListener('click',  () => {
    window.location.href = "https://www.google.com";
});
