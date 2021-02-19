# JavaScript JungleGym v1.0.0


This is an interactive coding environment.  You can write Javascript, see it executed, and write comprehensive documentation using markdown.


## Installation


```
npm install jsjunglegym
```
```
npx jsjunglegym serve
```

## How to use Javascript JungleGym

 Open browser and go to http://localhost:4005 to view the code editor.
 * Add new cells by hovering on the divider between each cell.
 * Click any text cell to edit it.
 * The code in each code editor is all joined together into one file.  If you define a variable in cell #1, you can refer to it in any following cell.
 * You can show any React component, string, number, or anything else by calling the `show function`.   This is a function built into this environment.  Call `show()` multiple times to show multiple values.
 * Re-order or delete cells using the buttons in the upper corner of each cell.


 All of your changes get saved to the file you opened JungleGym with.  So if you ran npx jsjunglegym test.js, all of the text and code you write will be saved to the test.js file.