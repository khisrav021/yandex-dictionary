import React, { useState } from "react";
import { TextareaDiv, TextareaInput } from "./styles";
import yandexLogo from "../../assets/logos/yandexLogo.png";

function Textarea({ getTranslatedWords }) {
  const [trnaslatorText, setTrnaslator] = useState("");

  const langs = [
    "ru-ru",
    "ru-en",
    "ru-pl",
    "ru-uk",
    "ru-de",
    "ru-fr",
    "ru-es",
    "ru-it",
    "ru-tr",
    "en-ru",
    "en-en",
    "en-de",
    "en-fr",
    "en-es",
    "en-it",
    "en-tr",
    "pl-ru",
    "uk-ru",
    "de-ru",
    "de-en",
    "fr-ru",
    "fr-en",
    "es-ru",
    "es-en",
    "it-ru",
    "it-en",
    "tr-ru",
    "tr-en",
  ];

  const langsToString = (lang) => {
    switch (lang) {
      case "ru":
        return "Russian";
      case "en":
        return "English";
      case "pl":
        return "Polandish";
      case "uk":
        return "Ukrainian";
      case "de":
        return "German";
      case "fr":
        return "French";
      case "es":
        return "Spanish";
      case "it":
        return "Italian";
      case "tr":
        return "Turkish";
      default:
        return "";
    }
  };

  const langTexts = (langs, number) => {
    const lang = langs.split("-");
    return langsToString(lang[number]);
  };

  const [chosenLang, setChosenLang] = useState("en-ru");

  return (
    <TextareaDiv>
      <TextareaInput>
        <select
          value={chosenLang}
          onChange={(e) => setChosenLang(e.target.value)}
        >
          {langs.map((lang) => (
            <option value={lang}>
              {langTexts(lang, 0)} &#10142; {langTexts(lang, 1)}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />
        <textarea
          rows={4}
          placeholder={"Type something to translate"}
          value={trnaslatorText}
          onChange={(e) => {
            getTranslatedWords(chosenLang, e.target.value.split(" ").join("+"));
            setTrnaslator(e.target.value);
            console.log(e.target.value.split(" ").join("+"));
          }}
        />
        <p>
          Powered by{" "}
          <a href="https://yandex.com/dev/dictionary/">
            <img src={yandexLogo} alt="logo" /> Yandex
          </a>
        </p>
      </TextareaInput>
    </TextareaDiv>
  );
}

export default Textarea;
