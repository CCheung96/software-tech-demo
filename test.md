---
title: Test Page
description: A minimal page for testing new features
author: Crystal Cheung
nav_exclude: true
---

This is a hidden test page.

## Callouts

{: .warning }
> This is a warning.
>
> second paragraph

{: .highlight}
This is a highlight, but it has no specific purpose

another paragraph

{: .note }
note

{: .keypoint }
KEYPOINT

{: .keynote}
keynote

{: .readings}
Chapter 7 of [Learning Processing](http://learningprocessing.com) by Danel Shiffman.

<!-- Exercise -->
{% capture my_problem %}
problem
{% endcapture %}

{% capture my_solution %}
solution
{% endcapture %}

{% include exercise.html
    title=""
    problem=my_problem
    solution=my_solution
%}

# Title
## Heading 1
### Heading 2
#### Heading 3
##### Heading 4
###### Heading 5

~~~~~java
void draw() {
    drawBox();
}
~~~~~

```java
void draw() {
    drawBox();
}
```

```
void draw() {
    drawBox();
}
```

<div id="my-d3-target"></div>



<svg id="grid-num" width="200" height="200"></svg>

<svg id="grid-matrix" width="200" height="200"></svg>



<div id="variables-in-memory-animation"></div>

<script src="assets/js/variables-in-memory.js"></script>

<div class="grid" id="empty" rows=5 cols=5 ></div>

<div class="grid" id="1-15-rand" rows=9 cols=9 ></div>

<div class="grid" id="1-15-rand" rows=9 cols=9 ></div>

<div class="grid" id="matrix-diag" rows=9 cols=9 ></div>

<div class="grid" id="x-5" rows=9 cols=9 ></div>

