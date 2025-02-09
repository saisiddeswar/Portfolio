import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/project.css'

const Project = ({ darkMode }) => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Annasamarpan',
      description: 'This is a description of Project 1.',
      image: '../public/5349ebef-b435-46c6-a332-2437493cc6ae.jpg',
      link: 'https://anna-prasan.vercel.app/',
    },
    {
      id: 2,
      title: 'TitleSafe',
      description: 'This is a description of Project 2.',
      image: '../public/8ce0f948-7971-43c6-b727-ac519bfd2f7a.jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'Healthy',
      description: 'This is a description of Project 3.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    // Add more projects as needed
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
          <div key={project.id}>
            <Card
              sx={{
                maxWidth: 345,
                margin: 'auto',
                backgroundColor: darkMode ? '#000' : '#fff',
                color: darkMode ? '#ffeb3b' : '#000',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  href={project.link}
                  sx={{ mt: 2, backgroundColor: darkMode ? '#ffeb3b' : '#1976d2', color: darkMode ? '#000' : '#fff' }}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;