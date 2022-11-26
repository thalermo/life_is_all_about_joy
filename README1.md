![welcome](./src/screenshot/../screenshots/banner.png)

<h1>

[Visit the website](https://life-is-all-about-joy.netlify.app/ 'check the website ')

</h1>
<div>

In this Repository you can find some of the best moments I shared with J🐶Y, my sport pug. Practice my React.js skills was my main goal using the map method, different functional components and props in order to render an array of object.

Feel free to click on the cards, and check where does it lead 🧐 [ Click to visit the website](https://life-is-all-about-joy.netlify.app 'VIsit the website')

</div>

  <h2>Table of Contents</h2>

- [🧐 How to install?](#-how-to-install)
- [🦋 Inspiration](#-inspiration)
- [🤓 Highlight of code snippets \& Screenshots](#-highlight-of-code-snippets--screenshots)
- [🌪️ Built with](#️-built-with)
- [🙇 What I learned](#-what-i-learned)
- [🙆 Continued development](#-continued-development)
- [💆 Useful resources \& Credits 🙏](#-useful-resources--credits-)
- [👀 Author](#-author)

### 🧐 How to install?

```
npm install
```

<hr>

### 🦋 Inspiration

**THE IDEA:** I order to practice React.js in the full-stack development program, I decided to take as a challenge and render cards with images taken from joy's instagram profile.

<hr>

---

### 🤓 Highlight of code snippets & Screenshots

<h3>Rendering local images in React </h3>

  <details>

<ul>

<li> 1. Using a variable</li>

</ul>

```
  import joyGoesViral from "./images/go_viral.png"

  const joy = [
   {
    id: 3,
    title: "Joy goes viral",
    img: joyGoesViral,
    date: "10/08/20",
    url: "https://www.instagram.com/p/CF89GAbHPxb",
  }]

```

<ul>

<li> 2. Using the require key with the src image folder</li>

</ul>

```
  const joy = [
   {
    id: 8,
    title: "Practicing our favorite hobby - napping",
    img: require("./images/sleepy_friday.png"),
    date: "10/06/20",
    url: "https://www.instagram.com/p/CZ8zyoGsytZ",
  }]

```

<ul>

<li> 3. Using the the sub image folder in the public folder, outside from the src folder</li>

</ul>

```
  const joy = [
  {
    id: 11,
    title: "Cuddle time ",
    img: "images/cuddle_time.png",
    date: "10/06/20",
    url: "https://www.instagram.com/p/CFl28hFA0Tj",
  }]

```

</details> <br>

<h3>Responsiveness of the website</h3>

<details>

<h4>wide screen</h4>

![Responsiveness](./src/screenshots/wide_view.png)

<h4>medium & small screen device</h4>

<div align="center">
<img src="./src/screenshots/tablet_view.png" alt="medium screen view" width="40%"/>
<img src="./src/screenshots/mobile_view.png" alt="medium screen view" width="30%"/>
</div>

<p>This property makes the flexbox display responsive without any media queries </p>

```
  flex-wrap: wrap;
```

</details><br>

<h3>Mapping method</h3>

<details>

<p>Using a function outside the app component receives the array of object from imported js file, in order place the orders of the card rendering.</p>

<p>Using the map method in the App component and calling the pre pre prepared function </p>

```
function cardEntry(arrObj) {
  return (
    <Card
      key={arrObj.id}
      title={arrObj.title}
      img={arrObj.img}
      url={arrObj.url}
      date={arrObj.date}
    />
  );
}

function App() {

return (
<>

<div className="cards">
<header className="animate__animated animate__bounce">
Life is all about J🐶Y
</header>
{/_ Running the function and mapping the object in the array _/}
{joy.map(cardEntry)}
</div>
</>
);
}

export default App;

```

</details>

<hr>

### 🌪️ Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- React.js
- JavaScript

<hr>

### 🙇 What I learned

- How to use the map method with a separate function
- How to have a responsive website using the flexbox display
- How to mapping local images using different ways

<hr>

### 🙆 Continued development

- Edit the dates using props and JS methods
- Use a random method to show every page refresh different cards
- Add a return button

<hr>

### 💆 Useful resources & Credits 🙏

- [clickable image](ttps://stackoverflow.com/questions/42051528/how-do-i-make-an-image-clickable) - This helped me to understand how to make an image clickable.

- [render images](https://stackoverflow.com/questions/34582405/react-wont-load-local-images) - This stack overflow helps me to understand, why the image doesn't render and what are the ways to do so

<hr>

### 👀 Author

- LinkedIn - [@thaler_mo](https://www.linkedin.com/in/moran-thaler/)
