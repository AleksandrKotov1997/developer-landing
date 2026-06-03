import { Reveal } from "@/components/Reveal";
import {
  Header,
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
      <Header />
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal>
        <VisualProofSection />
      </Reveal>
      <Reveal>
        <ExperienceProofSection />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <WorkflowSection />
      </Reveal>
      <Reveal threshold={0.08}>
        <AboutSection />
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
