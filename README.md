Live [here](https://ccheung96.github.io/software-tech-demo/)

The theme used is [Just the Docs](https://just-the-docs.com/) (JTD).

This project is intended to make it easy for 

If adding content is your only focus, all you need to do is write the content using Markdown, Mermaid, and JTD features. Occasiaonally you might need to add HTML or some pre-made HTML structures

## Just the Docs
JTD provides a number of layouts, but aside from the Home Page, all the pages in this project are a customised version of the JTD page layout which was configured in _layouts/custom-page.html. 

### Front Matter
The content at the beginning of the page, separated from the actual content by `---`, configures the page and its layout
* `title`: The page name that will appear on the sidebar. This will also be the appear as the title in page, unless specified by `custom-title`. **This is mandatory.**
* `custom-title`: A title that you want to use for the page itself. Unless specified, it defaults to the value set by `title`.
* `permalink`: By default, the link is based on the file's path, but since we don't want '/docs/' to appear as part of the link, each link has to be hard-coded (sorry).
* `parent`: If the page is a child of another page, specify the `title` of that parent page.
* `nav_order`: This determines the order of a page as it will apear on the sidebar in relation to its "siblings", ie. pages with the same parent. Start from 1.
* `grandparent`: If the page is a grandchild of another page, specify the `title` of that grandparent page. 
* `has_children`: If the page is expected to have one or more child pages, this is how it is declared. The children are not specified, however. 
* `has_toc`: Defines whether the page has a Table of Contents (TOC). By default this is set to true. For some pages, however, the placement of the TOC still needs to be hard-coded.
* `layout`: The default layout has been set to `custom-page` in `_config.yml`


index.md

In VS code you can configure Snippets to autocomplete customised code for you. [Here were some that have come in handy.](#appendix-snippets)

## Appendix: Snippets

As I rebuilt this project, I used many lines of repetitive code. Configuring them as snippets have made my work less time-consuming, and I hope they will be useful if you ever need them too. More information is avaliable [here](https://code.visualstudio.com/docs/editing/userdefinedsnippets).

### Configuration

This generates a new JSON file specifically for snippets. In the JSON file, define each snippet with a name, a prefix which is used to autocomplete and a body which is the code snippet itself.

Afterwards, save the file and reload the window to enable it.

### Usage
In the page, type in the snippet's prefix and then `tab` to autocomplete

