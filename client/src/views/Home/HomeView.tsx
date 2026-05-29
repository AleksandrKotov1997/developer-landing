import { Reveal } from "@/components/Reveal";
import {
  HeroSection,
  VisualProofSection,
  ExperienceProofSection,
  AboutSection,
  SkillsSection,
  WorkflowSection,
  ProjectsSection,
  WorkScenarioSection,
  ContactsSection,
  FooterSection,
} from "./components";

export const HomeView = () => {
  return (
    <main>
      <HeroSection />
      <Reveal>
        <VisualProofSection />
      </Reveal>
      <Reveal>
        <ExperienceProofSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <Reveal>
        <WorkflowSection />
      </Reveal>
      <Reveal threshold={0.08}>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <WorkScenarioSection />
      </Reveal>
      <Reveal>
        <ContactsSection />
      </Reveal>
      <Reveal>
        <FooterSection />
      </Reveal>
    </main>
  );
};
