---
layout: default
title: Projects
permalink: /projects/
---
## Projects

<!-- {% include_relative _includes/projects.md %} -->

<ul>
  {% for proj in site.projects %}
    <li>
      <a href="{{ proj.url }}">{{ proj.title }}</a>
    </li>
  {% endfor %}
</ul>