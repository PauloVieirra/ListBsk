import React, { useState, useEffect } from "react";
import { DataRanked } from "../../Compenents/Data/index";
import './style.css';
import { Button } from "@mui/material";

const Rank = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPromptEvent(e);
      setCanInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Verificar se o app já está instalado
    window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
      setIsAppInstalled(!!(evt.matches || window.navigator.standalone));
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      const userChoice = await installPromptEvent.userChoice;
      if (userChoice.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário recusou a instalação');
      }
      setInstallPromptEvent(null);
    }
  };

  return (
    <div className="divranked">
      <div className="divcomranked">
        <DataRanked />
        {!isAppInstalled && (
          <Button onClick={handleInstallClick} className="btninstall">Instalar App</Button>
        )}
      </div>
    </div>
  );
}

export default Rank;
