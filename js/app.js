document.addEventListener('DOMContentLoaded', () => {
    // Sample student data
    const students = [
        {
            name: 'Carlos Rene Angarita Sanguino',
            id: '05372',
            email: 'carlosreneas@ufps.edu.co',
            github: 'GitHub',
            image: 'https://via.placeholder.com/300'
        },
        {
            name: 'Yan Carlo Angarita Sanguino',
            id: '00001',
            email: 'yancarlo120b@gmail.com',
            github: 'GitHub',
            image: 'https://via.placeholder.com/300'
        },
        {
            name: 'Claudia Yamile Gomez Llanez',
            id: '05096',
            email: 'claudiaygomez@ufps.edu.co',
            github: 'GitHub',
            image: 'https://via.placeholder.com/300'
        }
    ];

    const studentsList = document.getElementById('studentsList');
    const template = document.getElementById('studentCardTemplate');

    // Render students
    function renderStudents() {
        studentsList.innerHTML = '';
        students.forEach(student => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector('.student-name').textContent = student.name;
            clone.querySelector('.student-id').textContent = `ID: ${student.id}`;
            clone.querySelector('.student-email').textContent = student.email;
            clone.querySelector('.student-image').src = student.image;
            clone.querySelector('.github-link').href = `https://github.com/${student.github}`;

            studentsList.appendChild(clone);
        });
    }

    // Initial render
    renderStudents();

});
