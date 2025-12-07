---
title: Demonstration Page
description: A minimal page for demonstrating project features
author: Crystal Cheung
nav_exclude: true
---

This is a hidden for demonstrating features of the project.

See the test.md file for implementation.

## Callouts

These can be modified via _config.yml

{: .warning }
> This is a warning.
>
> second paragraph

{: .highlight}
This is a highlight.

{: .note }
note

{: .keynote}
keynote

{: .readings}
Chapter 7 of [Learning Processing](http://learningprocessing.com) by Danel Shiffman.



## Exercises
{% capture my_problem %}
problem
{% endcapture %}

{% capture my_solution %}
solution
{% endcapture %}

{% include exercise.html
    title="Exercise Title"
    problem=my_problem
    solution=my_solution
%}

## Titles, Headings and Subheadings

# Title, made with `#`
## Heading 1, made with `##`
### Heading 2, made with `###`
#### Heading 3, made with `####`
##### Heading 4, made with `#####`
###### Heading 5, made with `######`

