import { parse } from 'discord-markdown-parser'

export type AttachmentType = 'image' | 'audio' | 'video'

export interface Attachment {
  type: AttachmentType;
  file: string;
  isUnbound?: boolean;
}

export interface EntryData {
  userID: string;
  data: string[];
  attachments: Attachment[];
}

export interface ParsedEntryData {
  userID: string;
  data: ReturnType<typeof parse>[];
  attachments: Attachment[];
}

export interface Entry {
  annoucement?: EntryData;
  en?: EntryData;
  jp?: EntryData;
  day?: number;
}

export interface ParsedEntry {
  annoucement?: ParsedEntryData;
  en?: ParsedEntryData;
  jp?: ParsedEntryData;
  day?: number;
}

const entries: Entry[] = [
  {
    annoucement: {
      userID: '297635569041801217',
      data: [`あ`],
      attachments: [],
    },
  },
  {
    day: 1,
    en: {
      userID: '214705183010193408',
      data: [`**__# アドベントカレンダー2024年12月1日__**

12月1日のアドベントカレンダーの投稿を載せていただきます。アドベントカレンダーの投稿はいつも心から書くようにしています。頭に浮かんだ言葉でそのまま書いてみます。

私がスポーツアニメにこだわる理由と、日本語学習の初心者（ビギナー）にスポーツアニメを勧める理由についてお話しします。
<a:accaSmoke:489618405524242432> _タバコを吸いながら空を向いて遠い目をする_
スポーツアニメは魂の燃料になる。ペースが速く、登場するキャラクターは魂を込めた動きをする。見ててエンジンがかかった気持ちになる。スポーツをしたことがなくても、挫折を経験した人やなにかしらの工夫をしたことのある人には、共感できる部分が多いはず。スポーツアニメでキャラクターの心の声を聞かさられることが多いが、それはおおかたそのキャラクターが勝利へのヒントを掴みかけているときや、自分が上達するために必要な何かを探しているときだ。
どんなものでも、新しいスキルを習得する過程の中で、なんども壁にぶつかることがあるはずで、スポーツアニメを見て、キャラクターの工夫と壁を乗り越える姿を見て、壁にぶつかったときどういう思考回路をするべきかの参考になったり、カタルシスになったりする。

でもそういうのはいいよ、シニ。心がどうとかに興味がないって思ってる方もいると思うので、心のかけらもない、冷酷な彼らにもメリットのある話をしよう。まず、仲間云々の話は正直私もそこまで興味や関心がない。それに、スポーツアニメの真似してはよくないところといえば、やはり勝ちに拘りすぎるところかな。もちろん、誰でも勝つのが目的であって、勝つための努力は惜しむべきではない。ただ、1つの試合や大会に拘るのではなく、物事をもっと長い目で見る必要があると思う。インターハイで優勝することを目指すより、自分の長所をより強くして試合で生かす努力と、短所を補う努力がなにより大事だと思う。もちろん、努力することと優勝することは繋がってるとは思うし、目標があったほうが努力しやすいこともわかる。ただ、多くのスポーツアニメは、高校が舞台だから、登場する選手はそれぞれ個性が強くて（まあ、キャラクターの個性で物語に独特性を与えたいという気持ちはわかるし、インハイ優勝は誰でも共感できそうなわかりやすい目標になることもわかる）、チーム内での立場や他チームとの相性が優先されてしまうけど、実際はそうはいかないことが多い。現実では、自分の相性や向き不向きと関係なく闘わなければならない場面が出てくる。あと、負けた人はいつも次の戦いに向けて練習するとき、悔しさが努力の糧（モチベ）になることが多いが、時には違うモチベーションを見せてほしい。例えば、負けてもなお、そのスポーツを愛しているから次も戦うとか、負けた時になにかが何か新しい発見をしたとか（自分より強い人がこんなにいるんだとか、そういう抽象的な理由ではなく）、一度も負けたことのない人間はいないから、負けたことを悔しむより、上達する意思が強いから次も戦いたいと思うキャラクターがいてほしい。

私の悪い癖で話がだいぶ脱線してしまったけど、日本語学習の初心者（ビギナー）にスポーツアニメを勧める別の理由は、スポーツアニメで同じ言葉が繰り返し使われたり、同じ文系に当てはまるセリフが多かったりする。だから同じパターンのセリフを、同じ言葉をなんども聞いたりすることで自然な日本語が身に付く。長いアニメほど慣れやすいので、その点も含めてスポーツアニメは初心者に向いている。

来年こそ、みんなでスポーツアニメをたくさん見ましょう！ 🎾 🏐 ⚾ ⚽ 🚴 🥊`],
      attachments: [],
    },
    jp: {
      userID: '1198839768994283610',
      data: [`**2024-12-01**

Reflecting on this year is like opening up a memory box. I don’t know about yours, but mine has a miniature cup, brussels sprout, car tyre, and microphone, with each one tied to memories of those around me. So, without further ado…`,
        `<:cappuccinoSmall:1312553682193092608>`,
        `Harry* is the owner of a nearby café who’s notorious for being so chatty that customers often have difficulty crossing the road to catch their train in time. In his spare time, he browses AliExpress to bookmark miscellaneous things and video calls his wife, two kids and overweight cat who remain in Bangladesh. We like to talk about being cat parents, good brands of puff pastry, and complain about Shitney’s weather.`,
        `<:brusselssprout:1312553678460157952>`,
        `Sinead* is one of my coworkers. She’s loud, friendly, and has a strong Irish accent. We genuinely get along but mostly communicate through text because I can’t understand her that well even after 13 months. One day I thought she was having a big fight with another coworker in the office when she was actually just raving about scones (which she loves with clotted cream). On Halloween, I tricked her into biting into a brussels sprout that was disguised as a ferrero rocher. She helped me trick five other people in our office after swearing and telling me off.`,
        `<:cartyre:1312554434059964569>`,
        `Keith* started working with us in March. For some very mysterious reason he sometimes changes his car tyre during work hours and takes photos of his car afterwards, leading to us calling him our resident ‘spin doctor’. He loves recommending restaurants to people but 8/10 are Thai so we don’t really listen to him anymore. He’s cheerful and animated when sober but unexpectedly melancholic when drunk.`,
        `<:microphone:1312563688091156592>`,
        `Si On* is one of the first people I befriended after moving to Australia. A few months ago, her daughter was discharged from a public hospital, and she was so impressed with the level of care given that she decided to raise money to donate to them. She asked me to join her in busking around the CBD, so after we got a permit, we did 5 sessions of her singing and me playing the guitar in different tourist hotspots. It was a really fun experience but my fingers were sore for days afterwards and typing was a *itch.

Of course, this wouldn’t be a proper reflection without recalling a few embarrassing moments that happened (because those are always the most memorable…)

I’ve always struggled to quickly parse double and triple negatives in spoken English, so I dread the moments when people say things like “…can’t not…” or “I can’t say he’s never not late”.  In fact, my boss said the latter to me 2 months ago and I just stared at him blankly for a good few long seconds. 

I’m also terrible at understanding strong Irish or Scottish accents, so I was thrilled when I was served by a supermarket cashier with a thick Glaswegian accent. I could tell that he was being friendly but only because the few words I understood and his smile. It was days later when I realised that he had said something like, “Well thank you, I hope you have a nice day!” to which I replied, “Oh, no thanks, that’s all.” <:what:1310235526875320340> 

My job has led me to present at a couple of conferences and speak as a guest panellist at a few events, so I feel comfortable interacting in-person. But it’s a different story when it comes to teams calls and other voice calls. I get nervous and start to mispronounce words, and sometimes even forget words in English (such as “curtain”…)

If you’re still reading this, thanks. I’m glad you haven’t died of second-hand embarrassment 😇 I’m off to Kyoto soon to see some old faces, and I hope your festive season is off to a great start! 

* \*Names have been changed.*
`],
      attachments: [],
    }
  },
]

export default entries
