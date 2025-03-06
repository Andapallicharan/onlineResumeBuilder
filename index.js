document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const objective = document.getElementById('objective').value;
    const education1 = document.getElementById('education1').value;
    const education2 = document.getElementById('education2').value;
    const education3 = document.getElementById('education3').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumeContent = `
        <h2>Resume</h2><br/>
        <h3>${name}</h3><hr/>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h4>Objective:</h4><hr/>
        <p>${objective}</p>
        <h4>Education Qualification:</h4><hr/>
        <ul>
        <li><p>${education1}</p></li>
        <li><p>${education2}</p></li>
        <li><p>${education3}</p></li>
        </ul>
        <h4>Work Experience:</h4><hr/>
        <p>${experience}</p>
        <h4>Skills & Interests</h4><hr/>
        <p>${skills}</p>
    `;
    
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeContent').style.overflow='none';
    document.getElementById('resumeOutput').style.display = 'flex';
    document.getElementById('resumeOutput').style.justifyContent='center';
    document.getElementById('resumeContent').style.textAlign='center';
    document.getElementById('print').style.display='flex';
    document.getElementById('print').style.flexDirection='column';
    document.getElementById('print').style.justifyContent='center';
    document.getElementById('in').style.display='none';
});
