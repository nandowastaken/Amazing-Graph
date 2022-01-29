![Result](https://user-images.githubusercontent.com/79945109/151641869-484cba2c-6e93-4330-ab04-c0f68855a12c.png)

## Introduction

The following tutorial teaches you how to create this landing page.

What do you need to know before:

* Basic html

## Html 

Look at the layout above, what do you see? There is a text and a menu in the top, then there is more text, a button, and a image being overlapped by the text, how can you recreate this using flexbox? The first thing you must do is separate the containers in your head, you must have an idea where everything goes before starting coding, trust me, this will make your life way easier. 

At first, we have a header, which consists of the logo (DevChallenge) and the menu, then we have the main content, let's separate these things. We could use divs, like this:

```html
<div class="header> 

</div>

<div class="main-content>

</div>
```

And that would work fine, however, html already gives us two tags specific to these things, which is header and main, this not only looks more organized, as it tells to the browser what that actually is, so it is way better than using divs, even though they would work. Let's use them:
  
```html
  <header> 
    
  </header>
  
  <main>
    
  </main>
```

Now that we have separated the two main containers in the page, let's make the things that goes inside them, starting with the header. What do we have the header? We have the logo and the menu, let's add them:
  
```html
  <header> 
    <h2>DevChallenge</h2>
        <nav>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
        </nav>
  </header>
 
```
  
You see the nav tag? It is a tag that works just like the header or the main, but specifically for menu's. Now let's make the same for the main:
  
```html
  <main>
        <div>
            <h1>Create amazing<br>graphics</h1>
            <p>Colaborate and create beautiful<br>graphics with your team</p>
            <button>Start now</button>
        </div>

        <img src="assets/team.jpg" width="50%">
  </main>
```
  
There you go, you just finished the skeleton of your website, now it comes the fun part, the CSS!
  
## CSS
  
Before even touching in the CSS, we must create our classes, every element that we created must have one, so that we can style them. Like this.

```html
<header class="header">
        <h2 class="logo">DevChallenge</h2>
        <nav class="menu">
            <a class="menu-item" href="#">Home</a>
            <a class="menu-item" href="#">Features</a>
            <a class="menu-item" href="#">Contact</a>
        </nav>

    </header>

    <main class="main-content">
        <div class="main-text">
            <h1 class="main-text-title">Create amazing<br>graphics</h1>
            <p class="main-text-paragraph">Colaborate and create beautiful<br>graphics with your team</p>
            <button class="main-text-button">Start now</button>
        </div>

        <img class="background-image" src="assets/team.jpg" width="50%">
    </main>
```

I'd recommend that you created your own classes, so that you can practice the CSS. 

Now let's start styling our page, when we create a webpage, there is already some default styling, like margin the margin or the padding. Let's remove this:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
}

```

The tag * specifies all the elements in the CSS, so, for example, by putting text-decoration none, not a single link will have that underline, which is something that we want. I also put the font-family as Roboto, because it is the only font that we use in the whole layout. 

