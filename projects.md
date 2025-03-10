---
layout: default
title: Projects
permalink: /projects/
---
## Projects

<!-- <h3 id="publications" style="margin: 2px 0px -15px;">Projects</h3> -->

<div class="publications">
<ol class="bibliography">

{% for post in site.posts %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if post.image %} 
    <img src="{{ post.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ post.url }}">{{ post.title }}</a></div>
      <div class="author">{{ post.author }}</div>
      </div>
    <div class="links">
      {% if post.code %} 
      <a href="{{ post.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {{ post.description }}
      {% if post.notes %} 
      <strong> <i style="color:#e74d3c">{{ post.notes }}</i></strong>
      {% endif %}
    </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>


