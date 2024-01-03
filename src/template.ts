import Handlebars from "handlebars";

import users from './users';

let globalCounter = 1

export default (handlebars: typeof Handlebars) => {

  Handlebars.registerHelper('getUser', (userID: string) => {
    return users[userID] ?? users['placeholder']
  })

  Handlebars.registerHelper('dayToDOW', (day: number) => {
    const DOW = ['金', '土', '日', '月', '火', '水', '木']
    return DOW[(day - 1) % 7]
  })

  Handlebars.registerHelper('getNextID', () => {
    const nextID = globalCounter
    globalCounter += 1
    return nextID
  })

  const helmetPartial = Handlebars.registerPartial(
    'helmet', 
    `<head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>EJLX Advent Calendar 2023</title>
      <link href="styles/index.css" rel="stylesheet" />
      <link href="styles/discord-components.css" rel="stylesheet" />
      <script async src="scripts/back-to-top-button.js"></script>
      <script async src="scripts/image-zoomer.js"></script>
      <script async src="scripts/copy-link-button.js"></script>
    </head>`
  )

  const headerPartial = Handlebars.registerPartial(
    'header', 
    `<header class="page-header">
    <div class="page-header-content">
      <div class="page-header-title">EJLX Advent Calendar<br><span class="page-header-title-year">2023<span></div>
      <div class="page-header-button-container">
        <a href="https://ejlx-discord.github.io/Advent-Calendar-Hub/" class="page-header-button">Other Years</a>
        <a href="https://discord.gg/japanese" class="page-header-button">Join the Server</a>
      </div>
    </div>
    </header>`
  )

  const brPartial = Handlebars.registerPartial('br', '<br class="d-br">')
  const textPartial = Handlebars.registerPartial('text', '<span class="d-text">{{content}}</span>')
  const headingPartial = Handlebars.registerPartial('heading', '<h{{level}} class="d-heading-{{level}}">{{content}}</h{{level}}>')
  const emPartial = Handlebars.registerPartial('em', `<em class="d-em">{{#each content}}{{> (lookup . 'type') }}{{/each}}</em>`)
  const strongPartial = Handlebars.registerPartial('strong', `<strong class="d-strong">{{#each content}}{{> (lookup . 'type') }}{{/each}}</strong>`)
  const strikethroughPartial = Handlebars.registerPartial('strikethrough', `<s class="d-strikethrough">{{#each content}}{{> (lookup . 'type') }}{{/each}}</s>`)
  const underlinePartial = Handlebars.registerPartial('underline', `<u class="d-underline">{{#each content}}{{> (lookup . 'type') }}{{/each}}</u>`)
  const spoilerPartial = Handlebars.registerPartial('spoiler', `<span class="d-spoiler">{{#each content}}{{> (lookup . 'type') }}{{/each}}</span>`)
  const linkPartial = Handlebars.registerPartial('link', `<a href="{{target}}" class="d-link">{{#each content}}{{> (lookup . 'type') }}{{/each}}</a>`)
  const autolinkPartial = Handlebars.registerPartial('autolink', `<a href="{{target}}" class="d-autolink">{{#each content}}{{> (lookup . 'type') }}{{/each}}</a>`)
  const urlPartial = Handlebars.registerPartial('url', `<a href="{{target}}" class="d-url">{{#each content}}{{> (lookup . 'type') }}{{/each}}</a>`)
  const twemojiPartial = Handlebars.registerPartial('twemoji', `<span class="d-twemoji">{{name}}</span>`)
  const emojiPartial = Handlebars.registerPartial(
    'emoji',
    `
    {{#if isMissing}}
      <span class="d-emoji-text">&lt:{{name}}:{{id}}&gt:</span>
    {{else if animated}}
      <span class="d-emoji d-emoji-animated"><img src="emojis/{{id}}.gif" width="50" height="50" /></span>
    {{else}}
      <span class="d-emoji"><img src="emojis/{{id}}.png" width="50" height="50" /></span>
    {{/if}}
    `
  )
  const channelPartial = Handlebars.registerPartial('channel', `<span class="d-channel" id="d-channel-{{name}}">#{{name}}</span>`)
  const userPartial = Handlebars.registerPartial('user', `<span class="d-user" id="d-user-{{name}}">@{{name}}</span>`)
  const inlineCodePartial = Handlebars.registerPartial('inlineCode', `<span class="d-inline-code">{{content}}</span>`)
  const codeBlockPartial = Handlebars.registerPartial('codeBlock', `<span class="d-code-block">{{content}}</span>`)
  const blockQuotePartial = Handlebars.registerPartial('blockQuote', `<span class="d-block-quote">{{#each content}}{{> (lookup . 'type') }}{{/each}}</span>`)

  const imagePartial = Handlebars.registerPartial(
    'image',
    `<div class="d-attachment-image-container">
      <img src="attachments/{{file}}" class="d-attachment-image{{#if isUnbound}} d-attachment-image-unbound{{/if}}"/>
    </div>`
  )
  const audioPartial = Handlebars.registerPartial(
    'audio',
    `<div class="d-attachment-audio-container">
      <div class="d-attachment-audio-title">{{file}}</div>
      <audio controls class="d-attachment-audio">
        <source src="attachments/{{file}}" type="audio/mpeg">
        Audio is not supported...
      </audio>
    </div>`
  )

  const videoPartial = Handlebars.registerPartial(
    'video',
    `<div class="d-attachment-video-container">
      <div class="d-attachment-video-title">{{file}}</div>
      <video controls class="d-attachment-video" preload="none">
        <source src="attachments/{{file}}" type="video/mp4">
        Video is not supported...
      </video>
    </div>`
  )

  const entryHeaderPartial = Handlebars.registerPartial(
    'entryHeader',
    `<div class="entry-header">
      {{#if day}}
        <div class="entry-header-calendar-info">
          <span>Day {{day}}</span>
          <span>{{dayToDOW day}}</span>
        </div>
      {{else}}
        <div class="entry-header-annoucement">
          Annoucement
        </div>
      {{/if}}
      <div class="entry-header-user-info">
        {{#if user.serverAvatar}}
          <img class="entry-header-server-avatar" src="users/{{user.serverAvatar}}" />
        {{/if}}
        <img class="entry-header-global-avatar" src="users/{{user.globalAvatar}}" />
        <div class="entry-header-text">
          <div class="entry-header-server-nickname">{{user.serverNickname}}</div>
          <div class="entry-header-global-info">
            <span class="entry-header-global-nickname">{{user.globalNickname}}</span>
            <span class="entry-header-global-username">{{user.globalUsername}}</span>
            {{#if user.pronouns}}<span class="entry-header-pronouns">{{user.pronouns}}</span>{{/if}}
          </div>
        </div>
      </div>
    </div>`
  )

  const entryPartial = Handlebars.registerPartial(
    'entry',
    `<div class="entry{{#if isAnnoucement}} entry-annoucement{{/if}}"
        {{#if day}}id="entry-{{day}}"{{/if}}
        {{#if isAnnoucement}}id="entry-annoucement-{{getNextID}}"{{/if}}>
      {{>entryHeader user=(getUser userID) day=day}}
      <div class="entry-content{{#if isOnlyEmojis}} entry-emoji-only{{/if}}">
        {{#each nodes}}{{> (lookup . 'type') }}{{/each}}
      </div>
      {{#if attachments}}
      <div class="entry-attachment-container">
        {{#each attachments}}
          {{> (lookup . 'type') }}
        {{/each}}
      </div>
      {{/if}}
    </div>`
  )

  const mainTemplate = Handlebars.compile(`
  <!doctype html>
  <html>
    {{>helmet}}
    <body>
      {{>header}}
      <div class="entry-container">
        {{#each entries}}
        {{>entry nodes=data}}
        {{/each}}
      </div>
    </body>
  </html>
  `)

  return mainTemplate
}