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
　　仰いでも、俯いても、その輝きには虚偽なブルーライトは一片も映らない。`],
    },
  },
  {
    day: 5,
    jp: {
      userID: '1270133931118952569',
      data: [`こんにちは、皆さん。この日はいいです。それで、今日は私の日。この年はいいね。君たちが大好きだよ。ありがとうございます、皆さん。`],
    },
  },
  {
    day: 6,
    jp: {
      userID: '1253596952893984829',
      data: [`EJLXの皆さん、こんにちは！今年もいよいよ最後を迎えようとしていますね。早かったような、遅かったような…
このサーバーに参加してもう半年ぐらい経ちますが、いろんな人たちと出会えて、とても楽しく暖かい場所だなと、
あとめっちゃ勉強になる〜って助かる場面も豊富で、参加して本当に良かったと実感しています。
みんなありがとう<:dekuheart:1304944168832991303> 
初のアドベントカレンダーに参加しようと思ったのは実はつい昨夜だったのですが、
（最初は上手く書けるかどうか不安で諦めていたんですが、年に一度しかできないとのことで頑張ろうと思いました<:dcnaesalute:914618635627167744> ）
偶然今日スポットが開いたみたいなので、即席ですがみなさんに楽しんで読んでいただけるものを書くことができれば嬉しいです。

何を書けばいいのか、迷った果てにたどり着いたのがなぞなぞ川柳です<:jerry:974616001893236756> 
ペケxポン影響でなぞなぞ川柳が好きなのですが、二句考えたものを記載させていただきます<:bow3:702412219526414406> 
ただ好きと言っても、ただの趣味でアマチュアとか初心者とかのレベルでもなく、
右も左も分からない自分なのですが、ここらでいっちょ挑戦したいと変な勇気が舞い上がってしまいました（？）笑
未熟なため唐突で微妙ななぞなぞ川柳まとめになってしまいますが、毎日忙しく頑張っている皆さんのために少しでも楽しい暇になればと、
そして願わくば脳の刺激になればと思います。笑（出来が悪いなぞなぞになっていた場合本当にすみません<:dcnaecry:594197622772859055> 
すっきりしない後味の浄化にペケxポンやナゾトレ川柳を拝見してもらえると幸いです笑）

では早速ですが、該当するシナリオを読んで、二つの意味を持つ下の句を当てるなぞなぞ川柳となっております。（ペケxポン由来）
どうぞ、お楽しみくださいませませ〜<a:catbunbun:1304965618658840707> 
（※強引にでもなぞなぞが成り立つため、シナリオで起きる出来事が不自然な部分があったりするのですがどうかお許しを笑）


①…お正月川柳🎍 

★⭐︎★⭐︎
お正月の昼下がり、叔父のレイさんはおばあちゃん家で甥っ子のヒロくんを待っていました。
甥っ子が初めて1人で電車に乗って来ることになり、レイさんは少し心配しつつも、可愛い甥の成長を感じていました。

「ヒロくん、ちゃんと来れるかな…。まぁ、スマホも持ってるし大丈夫やんな。」

そんなとき、突如レイさんのスマホが震え出し、メールの通知音が連続で鳴り始めました。

「ヒロ、まだそっちに着いてへんって？」
「電車に乗ったって連絡きた？」
「今どこか知ってる？まだ着かへんの？」
「駅まで迎えに行ったほうがいいんちゃう？」
「道迷ってたりしてへんかな？なんか連絡きた？」

「ちょ、待て待て！メッセージ多すぎやろ、兄貴！」
「どれに答えればいいんや…ってかどれが一番新しいんか分からん…。うわ、追いつけへんてっ！」

レイさんは必死でメッセージを整理しながら、兄に「ヒロくんを信じよう」と返信しようとしますが、
その間にもまた新しいメッセージが次々と…。

「こっちまでめっちゃ心配になってくるやん…いや、元々やけどさ…」

そのとき、玄関のチャイムが鳴りました。
「おっ、ヒロくん来たんかな！無事着けて良かった…！」

だがドアを開けると、そこに立っていたのは先ほど注文していたピザの配達員さんだった。

*どないしよう…やっぱり迎えに行った方がいいんかな…*
★⭐︎★⭐︎

ここで一句
（下の句は六文字となります）：

> 正月に
> 慌てる親
> ◯◯◯◯◯◯

答えは下記スポイラータグで伏せているので、ぜひ宜しければ答え合わせ等にご覧になってください！<:dcthumbsup:1091885576044695683> 

||おいつかない（メールに追いつかない・甥がまだ家に着かない）||

②…勉強川柳<a:noted:1081925759616159824> 

★⭐︎★⭐︎
ある日の夜、ヒロくんはデスクに向かい、試験勉強をしていた。
手元には厚い漢字辞典と練習帳。次の問題を解こうとしたとき、目の前の漢字に目が止まった。

「えっと、この『生』って字…読み方がいっぱいあるんやっけ。」

ヒロくんは練習帳を見つめながら、他の意味もしっかり把握しようと励む。
「『せい』？それとも『なま』…いや、『うむ』とかもあるんやな…」

練習帳を開いたまま、辞典をめくる。
「うわ、なんでこんなに意味があるんや…なんか全然ピンときーひんっていうか…いまいち感じ取れへんなー…。」

ヒロくんはふと手を止め、漢字の勉強はやっぱり難しくて嫌だな、と思ってしまうのでした。
★⭐︎★⭐︎

ここで一句
（こちらも下の句は六文字となります）：

> 難しい
> 意味が多すぎ
> ◯◯◯◯◯◯

こちらも答えは下記スポイラータグをかけて伏せておりますが、宜しければチェケラ！<:ch_holo:1312838556787408977> 

||かんじにくい（感じにくい・漢字がにくい）||

いやー猛烈にお恥ずかしいですが<:businessworry:1314042880314314792> 最後まで読んでいただき、誠にありがとうございます！
それでは皆さん、良いクリスマス＆新年をお迎えください〜<:christmasblob:1308569628750123090> 🎇 
あと最近寒くなってきましたので、お体にもお気を付けてください<:blobcuddle:1308223534656651364> 
ハッピーホリデーズ！！ 🎄 <a:birbwave:1314045434053922846>`],
    },
  },
  {
    day: 7,
    jp: {
      userID: '787800841469820992',
      data: [`２０２４年の新年私は自分にアートを作る約束をしたけど年の瀬を迎えて私はアートを作ることより心配することを時間をかけていました。従って、年内はアートをしますそして来年ではアートを作りながら楽しむことのために心配してみません`],
    },
  },
  {
    day: 8,
    en: {
      userID: '546655889415864330',
      data: [`2024/12/08

This morning, I joined the monthly English Studying Club's meeting in this town. There, an elderly person (I call him Mr. Y) gave us some handout papers that contained an autobiography about him, and also some scrapped articles from the Internet and newspaper, which were about the so-called "Kamikaze" and the Pacific War. Mr. Y asked us one question; "What is the day today, everybody?"

"The day John Lennon had passed away..." I answered.

"No way! Today is the day Japan had lost THE WAR", Mr. Y answered to us. "How do you think about THE WAR?" And he started telling his theories such as how Japan could have been innocent (in contrast, how the US could have been very tactical) and also how he has been feeling that learning English to understand other countries people's minds could be very, very important. After that great confession, Mr. Y asked us; "Why do you learn English? Just to pass through any exams? In my opinion, we should..." etc.

You might feel anger simply because of his too-one-sided attitude or opinion itself. If I were 10 years younger, I would feel very angry (and probably, I would choose not to attend this meeting anymore). However, sincerely (from the bottom of my heart), today I felt that question was a very important one, and also felt that I should accept this question as preciously as possible. In other words, for me, Mr. Y's very passionate and diligent attitude he ANYTIME shows to us seemed to be worthy of being respected well. I'm not telling you any lie about this (even though I am autistic).

I have to say sorry about posting this controversial topic. You can have your opinion (my DM status is basically open). What I want to tell you is this today's event reminded me of the primal motivation for learning English. In my case, I have been doing that because somewhere in my mind I want to understand what other people are saying (in a way, it can mean exactly the same as what THE WORLD is saying) to us.`,
`As an autistic guy, I always have to struggle with having such very primal communication with anyone, so probably this desire toward understanding has been created. So, if I could tell him my opinion as my answer, I would tell him like this. "I want to understand YOU. It seems our opinions must be opposite to each other, however, your opinion must have come from your precious, honest life experiences and also the personality you own, and mine too. I respect you, even though for you I am just a too-young guy. Within your head, there must be a cluster of various ideas that lead us all. I want to learn from YOU.

TBH, I had another topic for this advent calendar 2024. But, I have decided to share today's true story (yes, based on my pretty plain life I've always been writing in the language-switch channel), and am interested in what YOU have in your minds.

Dreaming for world peace from Japan.`,
`By throbbing disco cat.`],
    },
    jp: {
      userID: '294441472864944129',
      data: [`みなさん、こんにちは。
今日は僕の出番が来た。
書いてみたかった話題は将来の話。

二年前、アドカレを最後に投稿したとき、ワーホリビザで日本にいてた。🇯🇵
帰国してからもう一年半が経って、大学院生になった。
そろそろ最終学期が始まり、というか一月15日ギリシャのアテネ市に行くことになってワクワクしてる。🇬🇷 ギリシャ語は初級まで習ったけど、同級生の協力に頼ってる。(フランス語上級のギリシャ出身) 
なぜなら、大学院生になった以来、休み時間はほとんどなかったんだ。確かに留学のことも「休み」と呼ばれないだろうと思ってるんだけど、これで2023年7月から最初の海外旅行のきっかけになる。今年の夏休みは旅行に行けばよかったんだけど、3ヶ月フランス語の教師のインターンシップにつとめていた。実務経験としてはすごく面白かったから、別に構わなかった。🧑‍🏫

修士号を取得するのに論文を書かなくてはならない。取得したら、日本で就職活動をしたいと思って、来年はきっと観光ビザでも日本に戻ることに決まっている。🛫🇯🇵
実は、ここからでも念のため色々な学校に連絡をしといた。📝

できるだけ日本語能力試験を受けたいと思うんだけど、忙しいから準備はちゃんとできていないためまだ登録してない。

忙しくてもガスパーちゃん (アバターの猫ちゃん 🐈) がこないだ亡くなっちゃっても去年の同じ時期と比べて気分がいい。この修士号に決まってよかったからだ。<:yotsubaYay:743808226520203276> 

みなさん、今度もよろしくお願いします。<:bow3:702412219526414406>`],
    }
  },
  {
    day: 9,
    en: {
      userID: '380341436953919488',
      data: [`**EJLX Advent Calendar on  December 9th 2024**

Hello, I’m yosyuku.
I’d like to look back on 2024 over four personal events.
And I’m grateful if you would correct my expression.
Thank you in advance. 

1. Went to Firework Display in Utsunomiya (Tochigi Prefecture, Kanto Area)
    Preschool children designed their own fireworks and those were fired when each of them shouts, ‘My firework, go up!’ one after the other. It was amazing.
    I visited Utsunomiya with Discord friends. Everyone was new people for me in person. Wow.

2. Read through William Faulkner’s Light in August (translated in Japanese, of course!)
    I like literature especially novels. Light in August was published in 1932. That was a year when my parents were born. I read this novel in new translation. The publisher is Kohbunsha. It’s not Iwanami nor Shinchoh. This novel made me remember the fact there was the Civil War in America. Faulkner’s storytelling is like big tires start to rolling, speed up and run away in a large momentum. I was left here in daze. I highly recommend it. I read Gabriel Garcia Marquez’s One Hundred Years of Solitude, too. Both of them were brilliant. I feel lucky because I can read these novels in Japanese. But I know there is something lost by translation.

3. Re-opened my personal website
    After 18 years of silence, I bought my domain and re-opened my website. It has Japanese and English pages. The old site didn’t have English pages. It’s my diary and updated every night in JST. Visual Studio Code helps me a lot. I used to edit html files with Apple's SimpleText in 2001. I like writing. However, I’m using translator on English pages at the moment. I’m afraid of people here regard this as an advertisement of my website. But I never intend to.`,
  `4. Changed jobs
    New people and new work, but I’m the same. The same coward me. Is there anyone who read the book titled 'Leadership and Self-deception : Getting Out of the Box’? In the box, it’s dark and narrow. I must get out of it. Or I need to accept myself as it is. Nobody is perfect. That sounds like an easy`,
  `excuse. I just want to be better than myself one second earlier.`,
  `(I noticed the sentence hasn't ended properly)`]
    },
    jp: {
      userID: '688465754516881622',
      data: [`# アドベントカレンダー2024年12月９日
-- 
> 来年が来るので、この俳句の４つで僕は生活のことを考えます。今年はA Levelsからもっと忙しくなりました。私八方美人であることはやめて、自分一人で生きるほうがいいと思います。
## （冬）
短日か
海から風は
吹いてるし
## （春）
変更や
はえを感じる
芝生けり
## （夏）
若菜に
休みに行くか
友達と
## （秋）
嘘紅葉
アイデンティティは
変わったか`,]
    }
  },
  {
    day: 10,
    en: {
      userID: '654560680426471424',
      data: [`Ramen recipe
<a:AquaJamming:815723139346202684> ･･･---･･･ -･-･･ ･･ –･ -･-･･ ･･ –･
Ingredients 
Noodle 1 serving 

Kaeshi 15 to 20 ml
Soy sauce 80cc
Mirin 10cc
Sake 10cc

char shu
pork belly block 500g
seasoningA
soy sauce 200cc
sake 100cc
mirin 100cc
honey tbsp2
garlic paste tsp1
ginger paste tsp1


Vegetables soup 300ml
soy sprouts 
Cabbage 
Umami seasoning 5g
Garlic paste to taste 
Chinese seasoning paste 20g
lard 5g

-･-･･ ･･ –･ -･-･･ ･･ –･　･ -･･･ ･･-･･ ･･---<a:KoroneCheerFast:855180891705966633> 

Instructions 
〇Kaeshi 
Pour the soy sauce and mirin and sake in a pot 
Cook off the alcohol by mirin and sake.
Pour in another container 
〇char shu
stab the pork a lot
put the pork in the ziplock
pour seasoningA in the ziplock
close the ziplock(remove the air)
knead it a lot
I wanna be happy
pork transfer to heat-resistant dish
cover that dish with wrap
in microwave 500W 1 minutes
cut that pork
bake that pork with sauce

〇ramen
Add a kaeshi and umami seasoning and garlic paste In a bowl(A)
Boiled vegetables bean sprouts and cabbage 
Pour that hot water in the bowl(A).
Add the Chinese seasoning paste in the bowl(A)
Add the lard in the bowl(A)
Boiled noodle 
Drain the noodles water
Add the noodles in the bowl(A)
Place the bean sprouts and cabbage on the noodles.
And then place the char shu on these vegetables as much as you like.

topping
cheese
lard
chilli pepper powder
garlic
etcetc

btw today(12/10) is my bonus day so I will check it
・・・。・・・。
<:GuraCry:754545718835937331>`],
    },
    jp: {
      userID: '496822929749835786',
      data: [`# **アドカレ2024年**
まあ、EJLXで話す時は年寄りと感じるだと思います。今年、just hanging outで話しかける時はいつも初めて話したことの思い出を省みるし、それでいっぱいの仲良くした友達を身近に思います。『まあ、時が早減ったんでしょ』って思いました。来年、成年になって人生はすごく変えるつもりだと思います。お母さんは妊娠してしまって赤ちゃんは十週目です。妊娠のニュースを聞いた時、私は親と同じくらい嬉しくて泣いてしまいました。弟が聞いた時は顎が外れそうになり、飛び跳ねて驚きました。最近、人生はとても忙しく、試験や宿題が日常生活の一部でした。複雑な数学のテストはギリギリ合格でした、でも、電卓使ったの試験は電卓なしの試験よりも難しかったです。だから、日本語の猛勉強はあまりなく、他の言語やギターの練習もできませんでした。日本語の先生が知的にお手伝いしてくれて、文章を日本語っぽく書くようなりました。先生の一番好きなフレーズは「量より質」です。自分で大体たくさんを書いて、壮大な語彙を使って、時々作文ほどが滑らかで流暢ではないの結果です。まあ、年中に便利な文法を学んだり、よく使ったり、作文で書いたりすることにしました。いつも「たくさんの間違いが会ったら、どうするのか？上達しなかったのか？勉強の時間がとうていもったいないことだのか？」って思ってためらっても、言語力を全部出していっぱいな知識を使いこなします。


初めての2024年、悪い習慣を断ち切ることを希望します。今年、全部を断ち切らなくても、人生は健康になりました。過去に車で学校に通いましたが、3月マウンテンバイクに乗るようにしてふくらはぎと腿の筋肉がだんだん強くなりました。一週間に一生懸命マウンテンバイクに乗ったせいで、初音ミクのコンサートを見た時、筋肉痛になり、歩くのも走るのも辛くなりました。しかし、お父さんが「一生懸命に力を出して家に帰ったら、汗をたくさんかいて、数日後に遅発性筋肉痛を感じるかもしれない」と言っていました。胸と腿が強くなると聞いた時は、とても嬉しくなり、上達する自信をがさらに高まりました。毎日、父と一緒に走ります、それから腹筋運動と腕立て伏せを10回します。まず、トレーニングが難しくて筋肉がよく痛くなりましたが、運動すれば運動するほど、トレニングが易くなりました。たくさんの断ち切った悪い習慣がありましたが、この二つは目立つだと思います

以上です。短いアドカレの投稿を書かせていただいて誠にありがとうございました。

皆さん！メリークリスマス！良いお年を！`],
    }
  },
]

export default entries
