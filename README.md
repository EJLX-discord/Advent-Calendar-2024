# EJLX Advent Calendar 2023

It's the 7th annual Advent Calendar event for the EJLX discord server :o

This is a web archive for the event, with a... pale-green sort of aesthetic going on.

## Technical Stuff

This is built on the idea of last year: to parse the markdown of entries similar to how Discord parses messages, and then turning the syntax tree into HTML.

This makes it very easy to add entries, as you just need to copy the text and paste it right into `data/entries.ts` without having to manually convert emojis and markup like we had to do in earlier years (a big pain).

A goal for this year is to generate completely static HTML with some optional JS functions added on. I couldn't find a good framework which makes pre-rendering a single page easy, so for this we just go back to the more traditional style of string templates (using handlebars.js).

The build step is as follows:

1. Reads entry data from `data/entries.ts`
2. Parses each entry and builds a syntax tree of nodes
3. Fix some issues with the syntax tree (add support for newer features like headings, and coalesce redundant nodes)
4. Recursively convert the syntax tree to templated HTML depending on the node type (templates defined in `template.ts`)
    - Gets user info from the user ID. Avatars are in `users` and user data is in `users/users.csv`.
    The CSV has the following columns:
        1. User ID
        2. Global username
        3. Global nickname
        4. Server nickname
        5. Pronouns (optional)
        6. Global avatar filename
        7. Server avatar filename (optional)
    - Check for missing emoji files and reports them. Emoji files are located in `emojis/{id}.{ext}`
    - Maps channel and user ids to names using mappings defined in `data/mappings.ts`
5. Minify the output (remove unnecessary whitespace)
6. Output to `index.html`

There are also CSS files in `styles`:
- `index.css` contains general layout styles
- `discord-components.css` contains styles for converted syntax tree nodes for discord messages

Optional Javascript features are located in `scripts`. If anything on the page is made interactable by JS, then the script itself is what creates and injects those components into the DOM. Thus is any user has JS disabled, those interactive components simply won't exist on the page.

- `back-to-top-button.js`: Adds a button to the bottom-right of the page to scroll back to the top.
- `image-zoomer.js`: When you click on an attachment image, opens up a modal with the fullscreen image. This is useful since some of the entries have images with writing or text on it.
- `copy-link-button.js`: Adds a "copy link" button to the bottom of each entry which puts the direct link for the entry to the clipboard. Also handles a temporary popup annoucing the copy.