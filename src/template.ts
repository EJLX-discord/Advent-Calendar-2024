import Handlebars from "handlebars"

import users from './users'

let globalCounter = 1

export default (handlebars: typeof Handlebars) => {

  Handlebars.registerHelper('getUser', (userID: string) => {
    return users[userID] ?? users['placeholder']
  })

  Handlebars.registerHelper('dayToDOW', (day: number) => {
    const DOW = ['日', '月', '火', '水', '木', '金', '土']
    return DOW[(day - 1) % 7]
  })

  Handlebars.registerHelper('getNextID', () => {
    const nextID = globalCounter
    globalCounter += 1
    return nextID
  })

  Handlebars.registerHelper('sequence', function(n: number, options: Handlebars.HelperOptions) {
    const out = []
    const data = Handlebars.createFrame(options.data);
    for(let i = 0; i < n; ++i) {
      data.index = i + 1;
      out.push(options.fn(i, { data }))
    }
    return out.join('')
  });

  const helmetPartial = Handlebars.registerPartial(
    'helmet', 
    `<head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>EJLX Advent Calendar 2024</title>
      <link href="styles/index.css" rel="stylesheet" />
      <link href="styles/discord-components.css" rel="stylesheet" />
      <script async src="scripts/image-zoomer.js"></script>
    </head>`
  )

  const calendarPartial = Handlebars.registerPartial(
    'calendar',
    `<div class="calendar-container">
      <div class="calendar-dow-row">
        {{#sequence 7}}
          <div class="calendar-dow-entry">{{dayToDOW @index}}</div>
        {{/sequence}}
      </div>
      <div class="calendar-days">
        {{#sequence 31}}
          <a id="calendar-day-btn-{{@index}}" class="calendar-day-entry calendar-link" href="#entry-{{@index}}">{{@index}}</a>
        {{/sequence}}
        {{#sequence 4}}
          <div class="calendar-day-entry"></div>
        {{/sequence}}
      </div>
    </div>`
  )

  const headerPartial = Handlebars.registerPartial(
    'header', 
    `<header class="page-header">
      <div class="page-header-inner-container">
        <div class="page-header-content">
          <div class="page-header-title"><span class="page-header-ejlx">EJLX</span><br>Advent Calendar<br><span class="page-header-title-year">2024<span></div>
          <div class="page-header-button-container">
            <a href="https://ejlx-discord.github.io/Advent-Calendar-Hub/" class="page-header-button">Other Years</a>
            <a href="https://discord.gg/japanese" class="page-header-button">Join the Server</a>
          </div>
        </div>
        <div class="page-header-calendar-container">
          {{>calendar}}
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

  const dayHeader = Handlebars.registerPartial(
    'dayHeader',
    `<div class="day-header">
      {{#if day}}
        <div class="day-header-sticky">
          <div>{{day}}</div>
          <div>{{dayToDOW day}}</div>
        </div>
      {{else}}
        <div class="day-header-sticky">
          <div>発</div><div>表</div>
        </div>
      {{/if}}
    </div>`
  )

  const userInfoBar = Handlebars.registerPartial(
    'user-info-bar',
    `<div class="entry-header-user-info">
      {{#if user.serverAvatar}}
        <img class="entry-header-server-avatar" src="users/{{user.serverAvatar}}" />
      {{/if}}
      <img class="entry-header-global-avatar" src="users/{{user.globalAvatar}}" />
      <div class="entry-header-text">
        <div class="entry-header-server-nickname">{{user.serverNickname}}</div>
        <div class="entry-header-global-info">
          {{#if user.pronouns}}<span class="entry-header-pronouns">{{user.pronouns}}</span>{{/if}}
        </div>
      </div>
    </div>`
  )

  const entryPartial = Handlebars.registerPartial(
    'entry',
    `<div class="entry{{#if isAnnoucement}} entry-annoucement{{/if}}"
        {{#if day}}id="entry-{{day}}"{{/if}}
        {{#if isAnnoucement}}id="entry-annoucement-{{getNextID}}"{{/if}}>
        {{>dayHeader day=day}}
        <div class="entry-pair-container">
          {{#if annoucement}}
          <div class="entry-content-column" id="entry-annoucement-{{day}}">
            {{>user-info-bar user=(getUser annoucement.userID)}}
            <div class="entry-content{{#if annoucement.isOnlyEmojis}} entry-emoji-only{{/if}}">
              {{#each annoucement.data}}{{> (lookup . 'type') }}{{/each}}
            </div>
            {{#if annoucement.attachments}}
              <div class="entry-attachment-container">
                {{#each annoucement.attachments}}
                  {{> (lookup . 'type') }}
                {{/each}}
              </div>
            {{/if}}
          </div>
          {{/if}}
          {{#if en}}
          <div class="entry-content-column" id="entry-en-{{day}}">
            {{>user-info-bar user=(getUser en.userID)}}
            <div class="entry-content{{#if en.isOnlyEmojis}} entry-emoji-only{{/if}}">
              {{#each en.data}}{{> (lookup . 'type') }}{{/each}}
            </div>
            {{#if en.attachments}}
              <div class="entry-attachment-container">
                {{#each en.attachments}}
                  {{> (lookup . 'type') }}
                {{/each}}
              </div>
            {{/if}}
          </div>
          {{/if}}
          {{#if jp}}
          <div class="entry-content-column" id="entry-jp-{{day}}">
            {{>user-info-bar user=(getUser jp.userID)}}
            <div class="entry-content{{#if jp.isOnlyEmojis}} entry-emoji-only{{/if}}">
              {{#each jp.data}}{{> (lookup . 'type') }}{{/each}}
            </div>
            {{#if jp.attachments}}
              <div class="entry-attachment-container">
                {{#each jp.attachments}}
                  {{> (lookup . 'type') }}
                {{/each}}
              </div>
            {{/if}}
          </div>
          {{/if}}
        </div>
    </div>`
  )

  const bottomBarPartial = Handlebars.registerPartial(
    'bottom-bar',
    `<div class="bottom-bar-container">
      <a href="#">Back to Top</a>
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
        {{>entry en=en jp=jp}}
        {{/each}}
      </div>
      {{>bottom-bar}}
    </body>
  </html>
  `)

  return mainTemplate
}