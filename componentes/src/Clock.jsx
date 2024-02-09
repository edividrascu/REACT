import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext"; // Asegúrate de importar correctamente

export default function Clock() {
    const [date, setDate] = useState(new Date());
    const language = useLanguage(); // Obtener el idioma actual

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(intervalId);
    }, [date]);

    const getLocalizedText = () => {
      switch (language) {
        case 'es':
          return "La hora actual es: ";
        case 'it':
          return "L'ora attuale è: ";
        default:
          return "The current time is: ";
      }
    };
    return (
        <div className="clock-container">
            <div className="clock-face">
                <div className="hour-hand" style={{ transform: `rotate(${(date.getHours() % 12) * 30 + date.getMinutes() / 2}deg)` }}></div>
                <div className="minute-hand" style={{ transform: `rotate(${date.getMinutes() * 6}deg)` }}></div>
                <div className="second-hand" style={{ transform: `rotate(${date.getSeconds() * 6}deg)` }}></div>
                <div className="center-circle"></div>
            </div>
            <div>
              <h3 className="h3Data">{getLocalizedText() + date.toLocaleTimeString()}</h3>
            </div>
        </div>
    );
}
