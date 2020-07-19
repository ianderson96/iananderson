import React, { useState } from "react";
import { HeaderText, HeaderColumn } from "./styles";
import { ComponentWrapper, Row, DoubleColumn } from "../../views/styles";
import ProjectCard from "../ProjectCard/ProjectCard";
import Rotate from "react-reveal/Rotate";

const scoutColor = "#00A1B6";
const sgColor = "#DD0000";
const alexaColor = "#31C4f3";
const knightlyColor = "#1A2252";

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState("scout");

  return (
    <ComponentWrapper>
      <Row>
        <HeaderColumn>
          <Rotate top right>
            <HeaderText>these are some of my favorite projects</HeaderText>
          </Rotate>
        </HeaderColumn>
        <DoubleColumn>
          <ProjectCard
            title="scout website 🌐"
            active={activeProject === "scout" ? true : false}
            description="Scout is Northeastern's Student-Led Design Studio. As Technology Director, I spearheaded and acted as lead engineer on the initiative to create a brand new website to reflect how the organization has grown over the years. This project was both fun and challenging - our priority was to ensure that this site could be reliably used for years to come, and to allow future students to easily update the site's content and structure as needed."
            clickFunction={() => setActiveProject("scout")}
            url="https://sc-website.netlify.app/"
            color={scoutColor}
          />
          <ProjectCard
            title="shooting gallery game 🎯"
            active={activeProject === "shooting gallery" ? true : false}
            description="For a project for my Web Development class, my teammate and I created a multiplayer Shooting Gallery game. We used the Phoenix Framework and its concept of channels to create a live-updating web game. This was inspired by Shooting Gallery minigame in the game Wii Play."
            clickFunction={() => {
              setActiveProject("shooting gallery");
            }}
            url="https://github.com/ianderson96/shooting_gallery/"
            color={sgColor}
          />
          <ProjectCard
            title="diethelper alexa skill 🍎"
            active={activeProject === "diethelper" ? true : false}
            description="Diethelper is an Alexa skill that allows users to ask if certain foods can be eaten with certain dietary restrictions. I worked with two friends to create this Alexa skill during the HackDartmouth hackathon in 2018 in which we won Best Health Hack!"
            clickFunction={() => {
              setActiveProject("diethelper");
            }}
            url="https://devpost.com/software/diethelper"
            color={alexaColor}
          />
          <ProjectCard
            title="knightly ⚔️"
            active={activeProject === "knightly" ? true : false}
            description="Knightly is a campus safety app that allows students to notify their friends when they feel unsafe walking across campus, or notify the police if they are ever in danger. I worked as a UX designer and a front-end developer on this project. I worked on desiging the user flows, conducted usability testing and research, and helped to build out the app front-end using React Native."
            clickFunction={() => {
              setActiveProject("knightly");
            }}
            url="https://drive.google.com/file/d/1WxXpMCWVXITaXjoUHMWo0FfOv7H81pQ4/view?usp=sharing"
            color={knightlyColor}
          />
        </DoubleColumn>
      </Row>
    </ComponentWrapper>
  );
};

export default Projects;
