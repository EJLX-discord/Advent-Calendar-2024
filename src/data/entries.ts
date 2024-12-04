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
    jp: {
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
    en: {
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
  {
    day: 2,
    en: {
      userID: '706464536944705557',
      data: [`This is the AdCalendar for the year 2024.
The program is made in Python, and I created readme.py. (For more information about the site, you can check out the “Whimsical Monotsukuru Blog”.)
The readme text file describes how to use it and so on.
I don't want you to get a virus or anything, I just want you to install and use the 3.12.4 version of Python.
You can use it by doing “Python readme.py” and the prompt system (PowerShell) with Python installed, so please use it.
There is also one made in C#, but that one is for Windows.
If you have Windows, please use it.
The function of readme is to generate a text file, readme.txt.
It is a poor one, but we hope you can use it.`],
    },
    jp: {
      userID: '289842661630672896',
      data: [`こんにちはみんな、クリスマスおめでとうございます。
今回ちょっと私情の話をします。日本語は1年以上私が程度理解出来るのがどんな気持ちあるの話をしよう。あの…実は、足りないです。いつも「上手くなりたい」と考えるけれど最近本当によく集中できなかったばかりに上達できないと思う。<a:aTryNotToCry:586140562734972976>小説を読んだり、アニメを見たりしたいけれどつい怠け続けちゃう。私がやってみたらできるけれど。
Ankiでも終わるにはかなりの時間がかかる。<:potatosad:586129877649063946>つまり、最近ヤル気がないと思う。英語では Burnoutっていう。迷子みたい私（笑）
でも、それはきっとわけじゃないです。Burntoutなら毎日Ankiを学習してないでしょ？<:rooThink:528363327890522113> 日本語を勉強しはじめる頃から今まで、日本語勉強するのを始める理由が失っちゃった。その理由見つけたら私のヤル気が戻てくる。。。。祈ります
最近そんな感じある。私の話よりこのサーバーからの他人の話の方が朗らかでもそんな話をしながら振り返りましょう。今、私の状況もうちょっと分かる。偶に、困ってることの話をするのは大切だ。

読んでくれてありがとうございます
よろしくお願いします <:bow3:702412219526414406>`],
    },
  },
  {
    day: 4,
    jp: {
      userID: '175990649361793024',
      data: [`待降節おめでとうございます！今年は、我ら人類が長らく頭上に重く圧し掛かっていたパンデミックの靄を抜け、多くの恵みを受けることができた一年でしたね！
私自身も予想外の展開を迎え、教師の道を離れ、再び医療の世界に戻る決意を固めました。

来年も、今年に負けず劣らず充実した興味深い年になるようにしたいですね！

さて、今日ってなんと<@681475127208312854>の12歳の誕生日でもあるそうですね！
-# ん？
-# 21歳？
ごめん、先生、物覚えが悪くて……。　(〃⌒∇⌒)ゞえへへっ♪

遂に大人の仲間入りを果たし、アメリカでも合法的にお酒を楽しめる年齢になりましたよね。
-# （大人にはなったものの、オトナと呼べるかどうかはまだ未知数ですが。）
多分このままだと負け犬に成り果ててしまいかねまい……なんて思ったりもしますが、それでもずっとペリーらしく楽しんで生きてほしいですね。おたおめ。

今回は、私が今年３月に書いた、「ファビング」という現象と現世代の恋愛観に与える影響についての散文をご紹介したいと思います♡！
-# ふぁびんぐって何、って？
-# まあ、ペリーならきっとこの言葉に詳しいでしょうので、直接本人に聞いてみるのがいいかもしれませんね☆
この話は完全にフィクションですが、主人公を形作る際に携帯を常に肌身離さぬペリーからインスピレーションを得たことは、否定できないですぅ……。
これ以上兎や角言うのはやめておきます。ぜひ楽しんで読んでください～♬
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
`# お日様の宿敵　如月あやみ　令和六年弥生十六日
　　尖鋭なる陽光は、鋏の如く夢境の時空を一息に切り裂き、今日という新たな一日を彫造し始めた。新たな一日、それは恋で彩られて少しばかり陳腐に思えるが、何処か甘酸っぱい恋の予感にも満ちている。
　　ただの有りふれたデートのはずなのに、余りに楽しみにしすぎたせいか、家を出るとき持って出たはずの携帯を窓台の上に置き忘れてしまった。千匹の[駻馬](<https://kotobank.jp/word/駻馬-471214>)が胸中に駆け廻っているような心の震えに急き立てられ、喜びを他人と分かち合い心を寛がそうとするためのその「器具」を、陽光の尖鋭さに苛まれる中に忘れたまま置き去りにしてしまったのだ。

　　待ち合わせ場所は川辺の茶房――私の通勤路の途中にある。もう飽きるほど何度も歩いてきたその道で会おうとか言い出したのは、決して私ではない。而して私は到底その厭飽を文字にしてしまうことはなく、気障で甘すぎるラブセリフだけでも朝飯の一品となれるほど、朝中ずっと恋人といちゃいちゃする悦びに浸っていたのだ。
　　そんな中、バスに乗り込んでから漸く携帯を持ち忘れたことに気づいた私は、まるでその甜言蜜語と一言の挨拶もなしに突然別れたような感覚に襲われた。その瞬間の焦燥感は、朝旦の陽光が全身の肌を刺す痛みにさえ遥かに勝るものだった。
　　二つの苦しみを天秤に掛け、軽い方を選ぶとしたら、バスの中で初めて外の景色に目を向けるという贅沢を味わうことだった。ぼんやりと窓の外を眺めながら、私は次の停車を待った。
　　降りると、私は従来通りの足跡を踏み、速歩で川の辺りへと向かった。俯き加減で、道すがら只管自分の足跡を数え歩く――この姿勢は、私の可憐なる頚椎がもはや慣れ親しんでしまった物だ。

　　私は陽光が嫌いだ。朝は携帯の画面に浮かぶアイコンほどには整然と輝くことも出来なければ、黄昏時も又、携帯から流れる音楽の歌詞ほどに心の琴線に触れてはくれない。

　　ふと見ると、一羽の黄鳥が道端に立っていた。私は空な目でその姿を無感動に見詰めた。今までその存在を意識したことはなかったが、何処かで会った記憶の片隅を必死に捜し求めていたのだ。
　 　[騫々](<https://kotobank.jp/word/騫騫-2813538>)と鳥は枝に飛び乗り、私の瞳も空虚なままその動きを追った。目に映ってきたのは、禿げた弥生の枝々の間に孤独に咲く数輪の残桜。

　　空を見上げるだけでも、なんとこんなにも豊かさが得られるなんて――そう思い息を呑む。況してやここでは陽光も無理に主役を争おうとすることなく、穏やかに存在していた。その美しさに、私の心は怯えさせられる所となった。
　　鳥は囀りながら飛び去ったが、私はもう追い掛けなかった――この静まり返った落木の林が、私の目をその場に釘付けにしていたからだ。

　　我に返る。あんなに綺麗な存在なのに、誰も見返そうとしないのはなぜなのだろう。
　　思えば、衆生が低頭してばかりいるからだ。低頭しながら、携帯の声と映像に魅了され、天地を[磅礴](<https://kotobank.jp/word/磅礴-628412>)する[跫音](<https://kotobank.jp/word/跫音-477797>)が桜の美しさを消し去るままにさせているからだ。
　　私はといえば、そんな世界に馴染めず、声も映像も窓辺に残し、ここまでやってきたアウトサイダーだ。
　　この光景を前に、思わず写真を撮りたいという衝動にも駆けられたが、手は止まった。それは、持っていなかったこともあるが、それ以上に、私を欺いていた携帯に怒りを感じたのだ。携帯の私に見せた色彩は、現実の鮮やかさと比べれば、矢張り三千倍も劣り、三千倍も虚浮な物だった。

　　先の鳥は何という名前だったのだろう。いつもならばきっと十秒も掛からずに調べられたはずだ。しかしながら今日はそれができない。ただ頭の中に疑問を抱えたまま、記憶の僅かな断片を頼りに、約束の場所へと歩を進めるしかない。

　　やっと茶房に着く。鉄の[牖戸](<https://kotobank.jp/word/牖戸-402424>)は全く火傷しそうなくらいに熱くなっている。陽光のお陰様で、だ。
　店員さんはそんなことを一つも意に介さず、ただ惨めな光に侵略された朝空を真っ直ぐに見詰めている。何処か賞賛の眼差しさえ浮かべながら。
　　「暖かいカフェラテを一杯、お願いします。」
　　店員さんはお金受けから小銭を取り、微笑みながら手際よくパーフォーマンスを始め、洗練された動作で泡の上に桜の模様を描いてみせる。
　　いつもならば携帯で注文し、携帯で支払い、イヤホンも付けたまま店員さんの声を聞くこともない。格好良い蝶ネクタイが何色かや、笑顔が優しいかどうかすら、気に留めたこともなかった。
　　『カフェラテ、お待たせしました！』
　　両手でカップを受け取り、その見事なラテアートを褒めると、店員さんは感謝の言葉を返しながらも、泡の上の美しさは全部陽光から盗んだ物に過ぎないよと謙虚に語り、鉄窓の外に散り残る桜を指差し、段々と憧憬が顔を覗かせる。
　　そうか。彼の手には携帯などはなく、ただ陽光を反射するミルクピッチャーだけがあるのだ。
　　冷えた唇をラテで潤す。桜の花も共に飲み干す。なんとラテアートこそが、コーヒーの中で最も覚醒作用の強い役割を果たしていたのだ。正に見上げなければ気付けない花の様に、少しほどの「注意」という水やりがあるときに限り姿を現してくれる。奈何せん私は今まで十六度もの開謝を俯いたまま見過ごしてしまい、何杯ものラッテを無味に嚥下し、乾燥に排出し、唇を潤すこともなく、その温もりを感じることもなく、蒙昧に過ごしてきたのだ。

　　彼女が来た。桃色の帽の縁には二輪の花が咲いていて、何とも純真に見える。私はカフェラテのカップを捨て、鉄の扉を飛び出し、ちょっと汗ばんだ彼女の額にそっと一つ口付けを落とす。
　　「可愛いな。」
　　『さっき桜にいてた[繡眼児](<https://kotobank.jp/word/目白-141336>)の方が可愛かったんちゃう？』
  　　どうやら、私が窓辺に忘れた携帯は、まだ二人の会話を開きっぱなしにしていたらしい。既読無視のまま九十回も返信が途絶え、彼女にしても焦燥の色は隠しきれない。けれど、一旦会ってしまえば、眉間の皺はあっという間に消え去る。
　　目の前にいるのは、血も通い、肌も温かい、正真正銘の人間で、僅か幾言かの口先だけの好意ではなく、通知欄の中で[拘縻](<https://kotobank.jp/word/拘縻-2816189>)された情思なんかでもないのだから。

　　携帯という「器具」は、確かに便利だ。
　　しかし、連絡を取ることができる所があれば、邂逅や翹望の喜びが失却される所も、往々にしてある。
　　写真を撮ることができる所があれば、再び見上げて山水を鑑賞する興味が[扼殺](<https://kotobank.jp/word/扼殺-647833>)される所も、往々にしてある。
　　ネットで知識を検索することができる所があれば、世間の知識の得難さが抹刷され、名前すら知られていなかった繡眼児のあどけなさが[蹉過](<https://kotobank.jp/word/蹉過-273150>)される所も、往々にしてある。

　　『な、携帯、あげよっか？』
　　「いや、構わんといてな。」
　　携帯か。矢張り要らないな。今は[眼耳鼻舌身意](<https://t.ly/OPRf3>)を空っぽにしておき、陽光の[和煦](<https://kotobank.jp/word/和煦-664867>)さや桜の[色声香味触法](<https://t.ly/OPRf3>)にただそのまま浸り耽っていたいだけだ。
　　要らないわ。私の手は、これから伴侶の手を聢と握り、二人で余生を歩んでいくために存在する物だから。

　　恋人繋ぎで密着しあった十指には、二枚のダイヤだけが閃々と輝く。
　　仰いでも、俯いても、その輝きには虚偽なブルーライトは一片も映らない。`]
    },
  },
]

export default entries
