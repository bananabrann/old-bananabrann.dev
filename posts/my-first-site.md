---
title: "No shame, here's my first website"
metaTitle: "No shame, here's my first website"
metaDesc: ""
socialImage: "images/post-img-first-website.jpg"
date: "February 23, 2019"
tags:
  - code
  - career
---

# No shame, here's my first site


This past week, I worked on building a 'Would You Rather' game with [@RendonEls](https://github.com/RendonEls). I learned a lot about React, and definitely feel more comfortable with it after tackling this project.

However, a lot of times we only see others' highlight reels, so I figured I'd show off (and hide in the corner) my first full-CRUD site using React. No one is born a champion, so it's alright to have a bit of fun and briefly check out my Would You Rather game that isn't so production-ready. So hey, let's have some fun and look at all the things wrong!

____


## Landing Page
When you first come on the site, you're presented with the homepage.
![homepage](https://bananabrann.blob.core.windows.net/blog/would-you-rather-site-1.png)
You have the ability to play, view stats, or go to options.

## Playing the Game
![play](https://bananabrann.blob.core.windows.net/blog/would-you-rather-site-2.png)
Here is the play screen. Right now, the game isn't even playable, haha! But hey, it displays two random questions!
* No way to select a question.
* No next button.

## Options - Create 
![create](https://bananabrann.blob.core.windows.net/blog/would-you-rather-site-3.png)
After going into options, you can create a question. This part of the site is probably the part that looks the best, but is also the simplest.
* Pressing submit neither redirects nor refreshes.
* Navigating away, after submitting, does not show your question anywhere. You have to refresh manually no matter what page you go to. 😅

## Options - Edit
![edit](https://bananabrann.blob.core.windows.net/blog/would-you-rather-site-4.png)
Ah, the edit page. The bane of our existence, both on the back-end and front-end. In the end, it ended up being like 40 lines of code. This took us around 24 working hours to complete, but it works!
* Clicking delete also immediately deletes the question, without refresh! 😃
* Adding enough questions so it goes past the footer **destroys** the footer.

![edit with inserts](https://bananabrann.blob.core.windows.net/blog/would-you-rather-site-5.png)
... And then you press edit.
* Clicking edit on one will drop the boxes down for all.
* Clicking submit updates them immediately within state, and doesn't refresh! 😃😃😃

___

That's it! I hope this sadistically inspires someone, or at least gets a half-smile from some veteran coders. May your bugs be short, and Happy Coding!

Deployed website:
http://dirty-fan.surge.sh/

Front-end Repo:
https://github.com/bananabrann/would-you-rather-frontend

Back-end Repo: 
https://github.com/RendonEls/would-you-rather-backend
