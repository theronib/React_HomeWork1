import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: "greeting" },
    'Hello, ' + name
  )
}

function UserPresentation({ lastN, patronymic, firstN, phoneNum, email }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'p',
      { className: "user" },
      'My name is ' + lastN + " " + " " + firstN + " " + patronymic + "."
    ),
    React.createElement(
      'p',
      { className: "user" },
      'My phone is ' + phoneNum + "."
    ),
    React.createElement(
      'p',
      { className: "user" },
      "My email is " + email + "."
    )
  );
}

function MyCity({ townName, countryName, foundationYear, monumentPictures }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'p',
      { className: "myTown" },
      'I am from ' + townName + "."
    ),
    React.createElement(
      'p',
      { className: "myTown" },
      'It\'s a part of ' + countryName + "."
    ),
    React.createElement(
      'p',
      { className: "myTown" },
      townName + ' was founded in ' + foundationYear + "."
    ),
    React.createElement(
      'div',
      { className: "townPictures" },
      monumentPictures.map((monument, index) => React.createElement(
        'div',
        { key: index},
        React.createElement(
          'img',
          {className: "pictures", src: `monument${index}.jpg`, alt: `monument_${index}pic`}
        )
      ))

    )
  );
}

function App() {
  let name = "React";

  let userLastName = "Baranivskyy";
  let userPatronymic = "Dmytrovych";
  let userFirstName = "Yaroslav";
  let userPhone = "+380639821137";
  let userEmail = "yaroslav_baranivskyy2017@gmail.com";

  let userTown = "Bila Tserkva";
  let userCountry = "Ukraine";
  let userTownYearFoundation = "1032";
  let userTownMonuments = ["monument0.jpg", "monument1.jpg", "monument2.jpg"];

  return (
    <div className="App">
      <Greeting name={name}></Greeting>
      <hr></hr>
      <UserPresentation lastN={userLastName} patronymic={userPatronymic}
        firstN={userFirstName} phoneNum={userPhone}
        email={userEmail}></UserPresentation>
      <hr></hr>
      <MyCity townName={userTown} countryName={userCountry} foundationYear={userTownYearFoundation} monumentPictures={userTownMonuments}></MyCity>
    </div>
  );
}

export default App;
