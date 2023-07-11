# Random password generator

This is a Random strong password generator project

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [Implementation](#my-process)
  - [Tools](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users will be able to:

- Generate 4 passwords by 8-25 characters clicking on the button
- Set the password length by slider
- Copy passwords to the clipboard clicking on the them


## Implementtation

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid Layout
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I sharpened my CSS skills through this project and learned good amount of JS:

- How to store all elements with same class in a variable and how to change their CSS styles via Javascript

A problem in this project was to generate a valid password containing at least one of each of these characters: upppercase, lowercase, numeric, special.
I used `Math.random()` to generate 4 random indices to place each of these characters in the password string. These characters were chosen from their own seperate character array.
The rest of the pasword string was chosen from a combined character array of all of these classes. 

The usual way of generating a random number from 32 to 127 was intially considered but I discarded it due to following reasons:
- Not all of the characters are allowed (eg. `( , ; '` etc)
- An `exclude()` method is not defined for the `Math` class

So instead I created a character array and sliced it up for the seperate classes. Instead of generating a random ASCII code, the function I wrote would instead generate a random index from which
the ASCII code of a valid character would be picked up.

### Continued development

I'd like to:

- Equalise the probability of all classes of characters getting chosen. (Since there are more alphabets, their probability of getting picked is higher) 
