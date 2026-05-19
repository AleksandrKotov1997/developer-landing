import {
  AboutSection,
  AiSection,
  ContactsSection,
  HeroSection,
  ProjectsSection,
  WorkflowSection,
} from "./components";

export const HomeView = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkflowSection />
      <ProjectsSection />
      <AiSection />
      <ContactsSection />
    </main>
  );
};
