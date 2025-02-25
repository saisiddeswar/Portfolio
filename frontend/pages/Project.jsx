import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/project.css';

const Project = ({ darkMode }) => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Annasamarpan',
      description: 'This is a description of Project 1.',
      image: '../public/5349ebef-b435-46c6-a332-2437493cc6ae.jpg',
      link: 'https://annasamarpan.vercel.app/',
      github: 'https://github.com/user/annasamarpan'
    },
    {
      id: 2,
      title: 'TitleSafe',
      description: 'This is a description of Project 2.',
      image: '../public/8ce0f948-7971-43c6-b727-ac519bfd2f7a.jpg',
      link: '#',
      github: 'https://github.com/user/titlesafe'
    },
    {
      id: 3,
      title: 'Healthy',
      description: 'This is a description of Project 3.',
      image: '../public/health.png',
      link: 'https://health-umber-seven.vercel.app/',
      github: 'https://github.com/user/healthy'
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`projects-slider ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-group">
              <a href={project.link} className="live-link" target="_blank" rel="noopener noreferrer">Live Project</a>
              <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;