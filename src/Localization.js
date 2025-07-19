import * as Localization from "expo-localization";
import i18n from "i18n-js";

const setLanguage = () => {
  switch (Localization.locale) {
    case "ru-RU":
      i18n.locale = "ru";
      break;
    default:
      i18n.locale = "en";
  }
};

setLanguage();

i18n.translations = {
  en: {
    title: "Tic-Tac-Toe",
    play: "Play",
    backToMenu: "Back to main menu",
    languageGame: "Language game",
    en: "English",
    ru: "Russian",
    turn: "Turn",
    winner: "WINNER",
    draw: "DRAW",
    restart: "Restart",
    clearScore: "Clear score",
  },
  ru: {
    title: "Крестики-нолики",
    play: "Играть",
    backToMenu: "Назад в главное меню",
    languageGame: "Язык игры",
    en: "Английский",
    ru: "Русский",
    turn: "Ход",
    winner: "ПОБЕДИТЕЛЬ",
    draw: "НИЧЬЯ",
    restart: "Заново",
    clearScore: "Очистить счёт",
  },
};

export default i18n;
