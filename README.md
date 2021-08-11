## Memory Game
A website for a Memory Game , "Memory game" is a fun game that you may have played in "real life", with actual paper tiles. It's called that because the main skill in the game is your memory - how well you can remember the position of tiles. It's also a game that can be re-created on a computer, and is a good example of using computer memory to remember information, like with arrays.

The website is implementation for which I have learned (HTML/CSS/JavaScript).
And I have built this website to present it for the project 2.

## Using the project: 
The project has 1 page. 
-	**Home page content:**<br />
1 – A title at the top.<br />
2- A  score panel which shows how many moves which the user made and a timer.<br />
3- A small paragraph about the *game's* instructions.<br />
4- A Cards deck which contains 16 cards (4x4).<br />
5- At the end our social media accounts links.<br />

## Problems and solutions during the game test : <br />
-	**li attribute**<br />
During building the code we have faced several problems for example :<br />
1 – The icons which they have "li" in HTML file they had "type" attribute then we have changed them to ids because there was an error on the HTML validator<br />
2 - Then we have found that we can't give the same id to several "li" for example 2 cards have the same id="python".<br />
3 - So we correct them using data-framework attribute instead of id and we have made the required correction in game.js file also.<br />

-	**The game continue after the 2nd round**<br />
1- If you won and repeated the game and also won, the timer keep running .<br />
2- To solve this issue we have recalled the startGame function after the alert and also we made sure to reset the value of totalMatch to zero.<br />

-	**Tested on Web.dev :**<br />
![WEB.DEV Test](assets/images/web-dev-test.png)

-	**Tested on W3C CSS Validator:**<br />
![CSS Test](assets/images/css-checker.png)

-	**Tested on W3C HTML Validator:**<br />
![HTML Test](assets/images/html-checker.png)
**_NOTE:_**  Regarding the HTML validator there is no need to add h2-h6 element to the section tag.<br />

## Screenshots: 
![Closed cards](assets/images/closed-cards.png)
![Matched cards](assets/images/matched-cards.png)
![End of the game](assets/images/end-of-the-game.png)
![Mobile edition](assets/images/mobile-edition.jpg)

## Our accounts on social media:
 - [Twitter](https://twitter.com/)
 - [Instagram](https://www.instagram.com/)
 - [Facebook](https://www.facebook.com/)

## Deployment:
The site was deployed to GitHub pages. The steps to deploy are as follows:<br />

In the GitHub repository, navigate to the Settings tab In the pages section, go to select branch drop-down menu, select Main Once the Main branch has been selected, a link to the site is provided.<br />

The live link can be found here - https://hadi-darra.github.io/memory-game/

## Content: 
https://fontawesome.com/<br />
https://www.khanacademy.org<br />
https://fonts.google.com/<br />