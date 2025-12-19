Live [here](https://ccheung96.github.io/software-tech-demo/)

The theme used is [Just the Docs](https://just-the-docs.com/) (JTD).

To deploy in a development environment, run `jekyll serve`.

This project was designed for ease-of-use, so that most editors would not have to worry about compnents and can focus on editing markdown pages.

If adding content is your only focus, all you need to do is write the content using Markdown, Mermaid, and JTD features. Occasiaonally you might need to add HTML or some pre-made HTML structures

## Just the Docs
JTD provides a number of layouts, but aside from the Home Page, all the pages in this project are a customised version of the JTD page layout which was configured in _layouts/custom-page.html.

Its layout is reponsive to screen width; at smaller cscreen widths the navigation bar.

The pages are written mainly in Markdown, with occasional insertions of html tags.
All the pages that are part of the navigation have been placed together in the `docs` folder. The exceptions are the landing page and the hidden pages, `/test` and `/demo`.

### Front Matter
https://jekyllrb.com/docs/front-matter/

YAML front matter (--- blocks at the top) are parsed for metadata and configuration.
The YAML configuration content at the beginning of each page, separated from the actual content by `---`, contains the metadata and configuration of the page. This configures page variable to determine how it will display in the website.

The most important variables to configure in most cases are:
* `title`: The page name that will appear on the navigation bar. This will also be the appear as the title in page, unless specified by `custom-title`. In undefined, it will not appear on the navigation bar
* `permalink`: By default, the link is based on the file's path in the project, but since we don't want '/docs/' to appear as part of the link, each link has to be hard-coded (sorry).
* `nav_order`: This determines the order of a page as it will apear on the navigation bar in relation to its "siblings", ie. pages at the same level. Number the pages from 1 onwards, where 1 is the page that is listed first. See [Navigation Bar Structure](#directory-structure-and-thegeneration-of-urls-and-the-navigation-bar).


In certain cases, the following variable may also need to be defined:
* `custom-title`: A title that you want to use for the page itself. Unless specified, it defaults to the value set by `title`.


* `parent`: If the page is a child of another page, specify the `title` of that parent page. See [Navigation Bar Structure](#directory-structure-and-thegeneration-of-urls-and-the-navigation-bar).
* `grandparent`: If the page is a grandchild of another page, specify the `title` of that grandparent page. This is a precaution that becomes important **if pages have parents pages with the same name, but different grandparent pages**. See [Navigation Bar Structure](#directory-structure-and-thegeneration-of-urls-and-the-navigation-bar).
* `has_children`: If the page is expected to have one or more child pages, this is how it is declared. Note: Do not also list the children in the parent page. See [Navigation Bar Structure](#directory-structure-and-thegeneration-of-urls-and-the-navigation-bar).


There are some variables that have a default setting and may never need to be explicitly defined. Nonetheless, they are important to take note of:
* `layout`: The default layout *for this project* has been set to `custom-page`, which inherits from Just the Doc's `page` layout, which is in turn based on its [`default` layout](https://just-the-docs.com/docs/layout/layout/#the-default-layout). Currently, `custom-page` adds a title and author at the top of the main container before the rest of the page content, which is defined in the rest of the file. The Table of Contents (TOC) is not included in the layout because its ability to generate is dependent on the page contents.
* `has_toc`: Set to `true` by default. Defines whether a parent page has a Table of Contents (TOC) that displays all its child pages. This does no affect any in-page TOCs, which are for in-page navigation.
* `nav_exclude`: Set this to `true` to exclude the page from the navigation navigation bar. This has been done with the [test page](https://ccheung96.github.io/software-tech-demo/test) and [demo page](https://ccheung96.github.io/software-tech-demo/demo).

You can also define new configuration variables to use in other files, eg. `custom-title` and `author` which were variables made for the page layout.

### Page Contents
Anything below the [front matter](#front-matter) is generated into the main content of the page. For the sake of ease-of-implementation, the content can be written almost entirely in [Markdown](https://www.markdownguide.org/) with the intent to make pages easy to write and edit. Occasionally, this may need to be supplemented with HTML, Includes, Mermaid Diagrams and/or D3js.


### Directory Structure and the Generation of URLs and the Navigation Bar

By default, Jekyll preserves the folder structure when building the URLs for the site

https://just-the-docs.com/docs/navigation/main/order/
https://just-the-docs.com/docs/navigation/main/levels/
https://just-the-docs.com/docs/navigation/main/ancestry/


### Includes
https://jekyllrb.com/docs/includes/

Includes are pieces of reusable content. The following Includes have been made to attempt to separate HTML template structures from Markdown content, thus allowing for consistency and removing the editor's need to write the HTML themselves:

* prereq_outcomes.html - HTML that generates dropdowns revealing two lists, namely Assumed Knowledge (ie. prerequisites) and Learning Outcomes (ie. outcomes).
* exercise.html - HTML that generates blocks containing examples, questions and scenarios with 1-2 hidden dropdown solutions.
* youtube.html - HTML that allows a youtube video to be embedded into the page.

While the HTML structure is provided, often custom content still needs to be provided. Within the page, liquid syntax is used to **capture** Markdown content in a variable name, and then used to **include** an instance of the Include supplied with those variable names.

```
{% capture content_1 %}
    Markdown Content
{% endcapture %}

{% capture content_2 %}
    Markdown Content
{% endcapture %}

<!-- The actual instance of the Include -->
{% include prereq_outcomes.html variable_1=content_1 variable_1=content_2 %}
```

The style of the HTML elements is handled in [./sass/color_schemes/custom.scss](https://github.com/CCheung96/software-tech-demo/blob/main/_sass/color_schemes/custom.scss), see [CSS and SCSS](#css-and-scss) for more details.

If there is a need for specific HTML that differs from these templates, it can be written directly into the page itself.

#### Assumed Knowledge and Learning Outcomes

Structure: prereq_outcomes.html

In Page: use markdown in capture and include liquid syntax, specify prereq and outcomes

#### Exercises/Examples/Scenarios with Solution(s)
Structure: exercise.html

In Page: Use markdown in capture and include liquid syntax, specify title, problem and at least one solution (ie. “solution”). The option for a second solution (“solution2”) has already been added, the option for more will require an update of exercise.html.

##### Youtube Embeds
Structure: youtube.html

In Page: Use include liquid syntax only, specify id (ie. the string of characters after https://www.youtube.com/watch?v=)

## Snippets

In VS code, snippets are customised autocomplete templates help to reduce the time spent writing repetitive code. [Here were some that have come in handy so far.](#appendix-snippets)

* Snippets reduce the time spent writing repetitive code
* Snippets also ensures consistency in the code

### Configuration

 Snippets can be made to be used globally, or only for a specific project. To make a snippet, first create a new snippet JSON file (Ctrl-P -> Snippets: Configure snippets -> New Snippets file for [project_name] / New Global Snippets file).

In the snippet file, define each snippet with:
* a name (outside the snippet),
* a prefix, which will be used to autocomplete, and
* a body, which is the template code for the snippet itself.
* a desciption, describing the snippet, is optional.

Afterwards, save the file and reload the window to enable the changes. Snippet files can be modified at any time. (Ctrl-Shift-P -> Snippets: Configure snippets -> [snippet_file].code_snippets).
(Ctrl-Shift-P -> Reload Window)



### Usage
In the page, type in the snippet's prefix, example `html-img`, and then press `tab` to autocomplete.

More information is avaliable [here](https://code.visualstudio.com/docs/editing/userdefinedsnippets).

## Slide generation
Pandoc can be used to build slides from the lesson Markdown files. To generate slides for `sorting.md` manually run:

```bash
./codex-setup.sh            # installs pandoc and LaTeX packages
pandoc sorting.md --slide-level=4 -t beamer -o sorting.pdf
pandoc sorting.md --slide-level=4 -o sorting.pptx
```

An example GitHub Actions workflow for `sorting.md` lives in `.github/workflows/sorting-slides.yml`. Duplicate this file and replace `sorting.md` with another lesson file to generate slides for other topics.

## TO DO (Known Issues)
* Implement Katex (seems only relevant to number_systems.md)
* Find a way to not be reliant on hard-coded permalinks
* Estasblish consistent linting practices
* Checks:
  * Check the proper functioning of all links
  * Check for consistency in style
* Reorganise all the coomp1000 and comp1010 assets, and reconfigure their links
* Replace diagrams and images with mermaid diagrams/svgs/D3js where appropriate
* Incorporate divs classed as "task"
  * The exercise blocks are generated after the in-page TOCs, and so their titles are not included in the TOC

## Appendix: Snippets

These are [snippets](#snippets) that have been used in creating the project so far.

### HTML Snippets

```
	"HTML Image Tag": {
		"prefix": "html-img",
		"body": "<img src=\"{{ site.baseurl }}/$1\" alt=\"$2\"/>",
		"description": "Insert HTML image tag"
	},

	"Site BaseURL":{
		"prefix": "baseurl",
		"body": "{{ site.baseurl }}",
		"description": "Insert Base URL"
	},

	"Youtube Embed": {
		"prefix": "youtube",
		"body": "{% include youtube.html id=\"$1\" %}",
		"description": "template for using youtube.html to add youtube videos"
	},

	"Exercise-Solution Blocks": {
		"prefix": "exercise",
		"body": "<!-- ${title:Exercise} -->\n{% capture my_problem %}\n${1:problem}\n{% endcapture %}\n\n{% capture my_solution %}\n${2:solution}\n{% endcapture %}\n\n{% include exercise.html\n\ttitle=\"$3\"\n\tproblem=my_problem\n\tsolution=my_solution\n%}",
		"description": "An exercise and solution block capture and include block template. Only one solution by default."
	},

	"Prerequisite-Outcome Blocks": {
		"prefix": "prereqs",
		"body": "<!-- Assumed Knowledge -->\n{% capture topic_prereq %}\n$1\n{% endcapture %}\n<!-- Learning Outcomes -->\n{% capture topic_outcomes %}\n$2\n{% endcapture %}\n\n{% include prereq_outcomes.html prereq=topic_prereq outcomes=topic_outcomes %}",
		"description": "Capture-and-Include block for Assumed Knowledge and Learning Outcomes"
	},

	"D3js Grid HTML": {
		"prefix": "d3js-grid",
		"body": "<div class=\"grid\" id=\"$1\" rows=9 cols=9></div>",
		"description": "HTML for svg grids. Defaults to a 9x9 grid, id is used to customise the grid content."
	},

	"Centred Image HTML": {
		"prefix": "centre",
		"body": "<div class=\"centred-img\">\n\t<img src=\"{{ site.baseurl }}/$1\" alt=\"$2\"/>\n</div>",
		"description": "HTML for a div container to centre images within it."
	},

	"Table Of Contents": {
		"prefix": "toc",
		"body": "- TOC\n{:toc}",
		"description": "For autogenerated in-page Table of Contents"
	}

```

### Mermaid Snippets

```
	"Mermaid Flowchart Template": {
		"prefix": "merm-flow",
		"body": "```mermaid\nflowchart TD\n$1\n```",
		"description": "A template for Mermaid flowcharts (top-down)"
	},

	"Mermaid Configuration Template": {
		"prefix": "merm-conf",
		"body": "---\nconfig:\n\tlook: $1\n\ttheme: $2\n---",
		"description": "A template for mermaid configuration"
	},

	"Hexagon Node": {
		"prefix": "hex",
		"body": "$1@{ shape: hex, label: \"$2\"}",
		"description": "hexagonal node"
	},

	"Stadium Node":{
		"prefix": "stad",
		"body": "$1@{ shape: stadium, label: \"$2\"}",
		"description": "pill-shaped node"
	},

	"Junction Node":{
		"prefix": "junction",
		"body": "$1@{ shape: f-circ, label: \"Junction\"}",
		"description": "filled circle node which indicates a junction"
	}
```





