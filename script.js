const experiences = [
    {
      companyName: "Enroute Technologies | PPB",
      location: "Rawalpindi",
      role: "Front-end Developer",
      startDate: "11/2022",
      endDate: "Present",
      projects: [
        {
          projectName: "NTSC",
          projectDescription: "Contributed to KSA's 2030 vision through advanced fleet management solutions.",
          contribution: "Led front-end enhancements, integrating tracking and management features."
        },
        {
          projectName: "Flotilla IoT",
          projectDescription: "Enhanced a telematics platform for fleet management and GPS tracking.",
          contribution: "Optimized UI for better user experience across devices."
        },
        {
          projectName: "Sianty",
          projectDescription: "Developed a vehicle service management system.",
          contribution: "Collaborated with teams to integrate new features."
        }
      ]
    },
    {
      companyName: "Smart Fusion",
      location: "Islamabad",
      role: "Full Stack Developer",
      startDate: "05/2022",
      endDate: "10/2022",
      projects: [
        {
          projectName: "Tabsera",
          projectDescription: "E-learning platform with gamified courses and live tutoring.",
          contribution: "Led development of marketplace and merchant portal."
        }
      ]
    },
    {
      companyName: "Zigron Inc",
      location: "Islamabad",
      role: "Full Stack Developer (Intern)",
      startDate: "04/2021",
      endDate: "07/2021",
      projects: [
        {
          projectName: "Medicalens",
          projectDescription: "Medical solution to reduce insurance fraud.",
          contribution: "Developed user management module using React and Node."
        }
      ]
    }
  ];
  
  
  const experienceList = document.getElementById('experience-list');
  
  experiences.forEach(exp => {
    const jobDiv = document.createElement('div');
    jobDiv.classList.add('job');
  
    jobDiv.innerHTML = `
  <h3>${exp.companyName}, ${exp.location}</h3>
  <div class="job-details">
    <p><strong>Role:</strong> ${exp.role} (${exp.startDate} - ${exp.endDate})</p>
  </div>
`;

exp.projects.forEach(project => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  projectDiv.innerHTML = `
    <p><strong>Project:</strong> ${project.projectName}</p>
    <p><strong>Description:</strong> ${project.projectDescription}</p>
    <p><strong>My Contribution:</strong> ${project.contribution}</p>
  `;

  jobDiv.querySelector('.job-details').appendChild(projectDiv);
});

  
    experienceList.appendChild(jobDiv);
  });
  