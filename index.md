---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Aaditya Prakash Kattekola
layout: homepage
---
## Namaste 🙏🏽

I am a second year PhD student in Electrical and Computer Engineering at University of California Santa Barbara, advised by [Prof. Yasamin Mostofi](https://web.ece.ucsb.edu/~ymostofi/). Currently, I research on crowd analytics using RF sensing. Additionally, I love collaborating and going beyond my defined role — whether it's spending extra hours as a TA to help students gain confidence or contributing wherever I can to support those around me. Prior to my PhD, I graudted with a Bachelors degree from the [NIT, Warangal](https://www.nitw.ac.in) in the Department of Electronics & Communication Engineering.

## Projects
<ul>
  {% for proj in site.projects %}
    <li>
      <a href="{{ proj.url }}">{{ proj.title }}</a>
    </li>
  {% endfor %}
</ul>

## Publications

{% include_relative _includes/preprints.md %}

{% include_relative _includes/conf_papers.md %}


## Beyond My Academic Work

 I have a keen interest in Indian Knowledge Systems and often spend time exploring their rich intellectual traditions. I have a deep appreciation for mathematics and often spend my free time solving problems just for fun. I also enjoy playing chess and am always open to a good match on [Lichess](https://lichess.org/@/AadityaP). Cooking is another passion of mine, and while I experiment in the kitchen, I occasionally share my creations on Instagram. If you like to chat about research, philosophy or eigenvalues, drop me a line via email.

<!--
You can use HTML elements in Markdown, such as the comment element, and they won't be affected by a markdown parser. However, if you create an HTML element in your markdown file, you cannot use markdown syntax within that element's contents.
-->
