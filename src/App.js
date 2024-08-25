import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useState } from "react";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ChakraProvider>
      <AlertProvider>
        {/* <ParticleBackground /> */}
        <main>
          <Header
            darkMode={darkMode}
            isDarkMode={(darkMode) => setDarkMode(darkMode)}
          />
          <LandingSection darkMode={darkMode} />
          <ProjectsSection darkMode={darkMode} />
          <ContactMeSection darkMode={darkMode} />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
