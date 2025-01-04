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
  {
    day: 11,
    jp: {
      userID: '107202830846148608',
      data: [`こんにちは皆さん、お久しぶりです。

メリクリスマスかあけましておめでとうございますとを言う事はまだちょっと早いからそう言いません。それでも今年のアドベントカレンダーの内容は私が今年にしたことになります。

去年の終わりの私のビッグイベントは両親の家から出ることでした。
今年の物語はその時からの冒険についてです。

今年はすごく忙しかったです。去年の続きというのは新しい仕事を頑張って続けることです。去年の夏にちゃんとした仕事を得て、学ばないといけないことがいっぱい出ました。経済のと仕事なので他人のお金を操られてミスとかは大変です。確かにどんな仕事にもちゃんとしないといけないけど私にとって初めてのこういう体験です。いつもちゃんと集中しなければなりません。でも今はもう仕事を勉強して毎日頑張ろうと思っています。

でも仕事の話はつまらない話なのでその続きへ、

両親の家から引っ越してすぐ初めての彼女ができました。色々デートとかしたり、いろいろな新しい場所に行ったりしました。ご家族ともミーティングしました。旅行も一緒にしました。バーサロナからクルーズを乗ってグリシャやターキーやフランスの色々なところに行きました。とても楽しかったです。

その後やっと一人暮らしを勉強しました。洗濯したり、料理したり、掃除したりしています。頑張っています

今年は色んな新しいことを勉強して、新しい経験がありました。

今年も読んでくれてありがとうございました。

今年もよろしくお願いいたします。`],
    },
  },
  {
    day: 12,
    jp: {
      userID: '704543504881156116',
      data: [`これを書きながら明日の期末テストを勉強しています。今年は結構忙しくて色々起こりました。その上に, 私は人間的に成長できたと感じています。というわけで、今年の振り返りについて話したいと思います。
6月に高校の卒業生になりました。卒業直前、小学校の頃以来会っていない人が、突然声をかけました。「ラーメンを食べに行こう」と私を誘い、なんで今と思いました。六月21日に付き合うことになりました(ていうか小学校の時もお互い好きだった)。今週の土曜日、旅行として一緒にハワイに行きます。

7月に卒業のお祝いで友達と日本にいきました(日本に行くのは三回目)。　大阪と東京の辺に回してて、すごい経験でした。その友達は大学のためにテキサス州に引っ越すことになったので、この旅行を最大限に楽しむようにしました。けれど, 楽しむようにしたかったでさえも、うちの間に苦難がいっぱい起こったんです。それにも関わらず、楽しむことができました。

今日で大学1年の第1四半期が終わります。大学受験の頃は、大学生活を楽しめるかどうか不安でした。特に友達を作られるかどうか、彼氏と会えることも不安でした。
しかし、最初の四半期を終えてから、大学生活は予想以上に楽しいのだと気づきました。私は医者に目指しているので学校で大変勉強しないといけないです💦。

来年の目標を考えるのではなく、一歩一歩、来期の目標から考えていこうと思います。`],
    },
  },
  {
    day: 13,
    jp: {
      userID: '221167310986149888',
      data: [`# 👻﻿ 13日の金曜日👹﻿﻿
Zoopです。今日は13日の金曜日、怖いことについてお話したいと思います。幽霊。故人。それに出会ったこと？独りで会話したい？私は、まだ幽霊に出会わなく心霊的みたいな活動をしたことがある。
﻿
最近私は東亜とベトナムの歴史と昔の作品に興味がある。ベトナムのお寺を何回もお参りしたけど、お門に彫った漢文は全然読めなかった。それから漢文の勉強を始めた。その時、亡くなった人を書いた作品で習い、故人と会話するみたいです。孔子や孟子や韓非子などの作品、ベトナムの漢詩、仏教の心経、など。これは難しい一通の会話ですが故人の思考の交換できるようになり、楽しい。過去の生活に戻って生きる異世界みたい。
﻿
漢文を勉強しながら書道もならっている。最近、中国の交流と文化会に私の書を見せ、中国人に書を書いてもらった。中国語を話せないけど、私も会員も嬉しかった。では、書道も時々心霊的な活動です。練習のとき有名な書作品を真似し、臨書する。深夜に優しい音楽が流れる静かな部屋の中で筆をゆっくりと動いて書を書く。交霊会みたいに、大昔の書聖の王羲之や欧陽詢などは幽霊に会い、書の教えを仰ぐ。蝋燭があったらいいけどアパートで厳禁しまう。
﻿
現在、私は漢文と書道の練習を続く。漢文を読めば読むほど多く故人の幽霊と相談できると思う。それ以上、読んでありがとう！
# ﻿🕯️﻿﻿🕯️﻿﻿🕯️`],
    },
  },
  {
    day: 14,
    jp: {
      userID: '639141931837947916',
      data: [`# アドベントカレンダー2024年12月14日

EJLXの皆さんこんにちはとメリクリスマス、ゼイシです！クリスマスは後まで11日(イギリスに少なくとも)、楽しみですか？クリスマスを祝いませんなら良い休みを！来週は最終の学校週間、二週間休みがあります！！今年クリスマスに服と本がほしいです。

初めてのアドベントカレンダー、僕はまだ初心者だから間違いがあります。今回僕のBLとGLのプリファレンスを話してます、ちょっとだけから僕の日本語が下手です。jhoの皆さんは僕がBLとGLが好きもう知ってる！実はBLよりGLが好きでもサイトに沢山BLがあります。実生活もインターネットもよく「何でそんなに大好き」を聞いた。大きな理由がない、もっとLGBTQの事を見たいだけです。12歳ごろから読んでます！

正直何を言い事わかりませんからこれは短いけど始めましょう。
没入感の時よくラブストーリーを読んでますとめと楽しい時間です！
ちょっと変だけど最初のBLがハリーポッターのファンフィクション。最初のGLは多分「キミノヒカリ ～あさがおと加瀬さん」学校で見ましたが。
どちらも好きな場面は絶対に学校だからまぁ僕も学生で学生見たいです！ふつうに高校生の漫画を読むでもキャラはよくバカな喧嘩をするから時々大学生の方がいい。もし漫画が二カップルがあればでは僕は多分二番のカップルより好き。。ちなみに今僕の好きなGLは「付き合ってあげてもいいかな」！！キャラクターの仲が本当に良いですよ。別のGLが好きは「気になってる人が男じゃなかった」です

BLには、どこでものメディアになると女っぽい男が大好きだけど男らしいも好きです。GLにはぎゃく、男っぽい女本当に大好きでも女らしいも好き。カップルは目につきの高度差が好き、たとえば佐々木と宮野とか平野と鍵裏とか。人格ならカップルは雪と墨それともそれがるでも実際に同じ！時々クリシェの事が最高、犬っぽい人と猫っぽい人は可愛いです。「ビハインド・スキャンダル〜俺たち友達なのか」がそんなトロープがある上手いBLだけど短すぎる。。

学校で僕BLは友達と話すでもGLじゃないから大半の友達がGLあんまり読んで見ません。インターネットに友達とGLを話す！母はBLを見ますから間々に一緒に見ます。母が中国の歴史的 BLが好き。一人だけでは本(デジタルも物理的も大丈夫)を好みます。本はどこでもに持って開けます、あんまりオーディオのドラマを聞きませんでTVめんどくさすぎるです。

読んでくれてありがとうございます♪、もう一度メリクリスマスと良い休みを。このサーバーに来年を楽しみ、今年が本当にありがとうございます、とても新しいことを知ってきた。`],
    },
    en: {
      userID: '742521478062407742',
      data: [`# アドベントカレンダー２０２４年１２月１４日

## 人間は水上を歩くことができるの？

「Madzieさん、病気なの？マジイエスみたいに水上を歩けるって？」

特別な技術を使わず人間は歩けないのが分かる。飛ぶこともできないけど、飛行機など発明をしてから、私でも日本に飛べる。

ほかの動物に比べて人間は力弱い。猫よりも遅い、熊よりも力弱い、犬よりも穴を掘るのが下手…
しかし、ドラえもんのように秘密の道具を使う能力のおかげで、できないことをできるようにする。車で行く、銃で戦う、シャベルで穴を掘る。不可能なことは可能にすればするほど、「水上を歩けない」は「水上を歩ける」になるのか…？

「歩ける」ってどういうこと？船で歩けるので、水上を歩けるけど、本当にイエスのように歩くじゃない？浮かびながら横になるのも「歩く」と言わない。水が地面になるかのように歩けると、「水上を歩くことができる」と言える。

ググったら、JLaservideoさんの水上を歩けるようになる靴を作る動画を見つけた。扇風機を靴に付けたので、沈む前に水上を歩ける。よく歩けないけど、もしかして、未来にはそんな靴があるのか…？

そうじゃないと思う。船は特別な靴よりも便利なのだ。`],
    },
  },
  {
    day: 15,
    jp: {
      userID: '768107991673077790',
      data: [`**2024年12月15日 アドベントカレンダー**

まずは自己紹介させてください。はじめまして、柚です。僕は3歳のビーグルです。趣味は毛布をしゃぶること、長い散歩に行くこと、そして飼い主の膝に乗ることです。好きなものは食べ物全般と柔らかいぬいぐるみ。特に好き嫌いはありません。よろしくお願いします！
--------------------------------
いつもと変わらない寒い冬の朝、僕は目を覚ましました。部屋の中はまだ暗く、とても静かです。僕が一番に起きるので、飼い主が起きてくるのを楽しみに待ちます。10分後、ついに飼い主が起きてきて、朝のルーティンが始まりました。

まずは外に出してもらうために、スライディングウィンドウの横にある鈴を鳴らします。
「今日も寒いなぁ。でも、早くおトイレを済ませて戻らなくちゃ！」
霜の降りた芝生の上をそろりそろりと歩き回り、スッキリしたところで違う匂いに気づきました。どうやら僕が寝ている間に誰かが庭に立ち入ったようです。匂いを調査してみると、犯人はアライグマでした。彼らは僕の庭をよく通るので慣れっこです。少しホッとした僕は、家に戻ることにしました。

戻ると飼い主が僕の足を丁寧に拭いてくれます。その間、僕はご飯のいい匂いにソワソワして待ちきれません。足をきれいにした後は、「お手」「伏せ」「待て」といった命令を完璧にこなし、「いいよ」と言われたら食べ始めるのがルールです。ご飯の後は、ピルポケットに包まれた薬を飲むのも忘れません。

朝のルーティンを終えた飼い主がデスクに戻ると、僕もすかさず駆け寄ります。「抱っこして！膝に乗せて！」とアピールすると、たいてい成功します。僕はそのまま飼い主の膝の上で短い昼寝をするのが大好きです。

しばらくすると、飼い主が「散歩行く？」と聞いてきます。僕は尻尾を思い切り振って「行きたい！」と返事します。散歩は30分程度で、近所を歩き回ります。途中、他の犬に吠えられたり、地面に落ちているものを拾い食いしたり、とても楽しい時間です。散歩中にもう一度トイレを済ませることも忘れません。帰宅後はベッドに戻り、長い昼寝をします。

夕飯は朝ご飯よりも楽しみにしています。ドッグフードの上にサーモンオイルをかけてもらえるので、待ちきれません。でも、僕が興奮しすぎるせいか「お座り」や「待て」の時間が長くなることがあります。首を長くして待った分、ご飯はあっという間に食べ終えてしまいます。その後、水をがぶ飲みするのが習慣です。

夕飯の後は、また薬を飲んで歯磨きをします。そしてデンタルトリートをもらうのが楽しみです。このトリートはとても美味しいので、ゆっくり味わいながら食べます。
　
「寝る時間だよ！トイレに行こうね」と飼い主が声をかけてきます。僕は夜の冷たい空気を感じながらも、素早くトイレを済ませます。家に戻るとまた足を拭いてもらい、暖かいベッドに入ります。飼い主が毛布をかけてくれるので、僕はぐっすり眠ることができます。
--------------------------------
※最後までアドベントカレンダーを読んでくれてありがとう！
僕のことをよく知っている人は、「きっと全部ひらがなで書くんだろうな」と思ったかもしれません。でも、最近少しずつ漢字を覚えて使えるようになってきました。`],
    },
    en: {
      userID: '656043434318233604',
      data: [`*Excluded from archive by request*`]
    }
  },
  {
    day: 16,
    jp: {
      userID: '982274390223880262',
      data: [`### 2024年12月16日

作文をする機会がほとんどないのですが、自分なりに頑張って書いてみました。アドバイスなどがあればぜひ。

---
## 言語学習も「小さな成功体験の積み重ね」


何ヶ月か前に「Atomic Habits」という本を読んだのですが、その内容がすごく面白かったので、それが言語学習にどう当てはまるのか、そして具体的にどこからどう取り組めばいいのかを自分なりに色々と考えてみたので、おすすめのやり方をいくつか紹介します。

Discordのあらゆる言語学習系サーバーを長年うろついていた身として、我々学習者が一番思い悩んでいるのは「アウトプット」だと感じましたので、まずそこから始めようと思います。アウトプットで大事なのは「小さな成功体験」。リアルでもDiscordでもVRChatでも何でもいいし、何なら話し相手がネイティブではなくても構いません。アウトプット力を上げるには「とりあえず会話してみる」ことが大切です。

そしてそのあと、自分が成したことを振り返ってみてください。

深く考える必要はありません。「初めて英語で会話をした」とか。「この前漫画で見たあの単語を初めて実践で使った」とか。些細なことでもいいので、その達成感を十分に味わうことが重要で、それを糧に自分なりの「成功体験の連鎖」を作ることを心がけましょう。

Immersion（リスニングやリーディングを指す総称）が長続きしない、モチベがあまりないという方には同じ本で解説されている「2分の法則」というものをおすすめします。「勉強したくない」という日は誰にでもありますが、例えば、読みたいな〜と少しでも思った本があればとりあえずそれを開いてみたり、観たいと思った動画の再生ボタンを押したりしてみましょう。本であればそれを2分間読むだけで十分ですし、動画であれば最初の2分間を観るだけでいいのです。そして2分が経った時点で、それを続けるのか、やめるのかの判断をしましょう。自分が最初の一歩が踏み出せなかっただけで、そのコンテンツがどれだけ楽しいのかということに気づいて、「もっとやりたい」と思うようになるはずです。

自分の経験談ではありますが、「環境を整える」ことも非常に効果的でした。KindleやiPadを使って小説を読む方であれば、そのデバイスを自分の机に置いたりして、必ず目に入るようにしましょう。YouTubeをよく観る方であれば、日本語用のアカウントと英語用のアカウントを両方作って、自分が勉強したいほうの言語のアカウントを普段使いするようにしましょう。YouTube側もおすすめ動画を合わせてくれるので、「いっぱいリスニングしたい！」という方にはかなり向いている方法ではないかと思います。肝心なのは、自分が勉強したい言語に触れることが何らの努力も必要としない環境を整えることです。

これまでの内容からも察していただけると思いますが、言語学習のような長期的かつ高難易度なことに挑戦するときは、目標を作ってそれを頑張って乗り換えるのではなく、なるべくその目標の達成が楽になるように、最初の一歩を簡単で魅力的なものにして、小さな成功を積み重ねることで自然とその目標に向かって進むようにしましょう。`],
    },
  },
  {
    day: 17,
    en: {
      userID: '295592546938388482',
      data: [`2024/12/17

It has been nearly 3 years since I joined this server. I remember that the first thing I saw was the advent calendar. I was quite surprised that there is such a server to encourage each other to learn languages. 
I must say 2024 will be deeply impactful for me. Lots of fun stuff happened, and some sorrowful events, too. 

One of the highlights of this year was two school reunions in the summer. Although this might sound cliche, it was like a dream. On top of the metaphorical sense, you think of straightaway, the fact that the old friends gather in one place, spend just one night and get back to their own daily life is another sense of the dream. It was like a dream structurally. 
In one of them, I took part in the organising side. After several meetings and planning, we made it happen with success. I actually burst into tears while making the recap video of the event. moved by the fact that everyone had a great time. 

The end of an 8-year relationship is another significant thing. In the summer, my ex-girlfriend opened up about her pain and even indifference towards me earlier this year and proposed the problems we had been omitted to look at. Unfortunately, we couldn’t find a groundbreaking solution that solves the issues immediately. It ended up ending the relationship. Well, at least she already found someone else WHILE I AM STILL PROCESSING THE PAIN. It is not my wish to express hatred against her (because she was once and …still my beloved one), but the moment I saw her status bubble on Instagram saying about her crush, it was as if I had gotten whacked. Really.

Let’s finish this happily, as the advent calendar is meant to be joyful. Even though I had plenty of ups and downs, I am glad that I feel I am becoming a mature grown-up by experiencing pleasant and tragic life events. 

Thank you for letting me be a part of this lovely tradition. I wish you all a happy holiday and a wonderful new year. Let’s keep the positive vibes for next year. Peace!!`],
    },
    jp: {
      userID: '441283734214279178',
      data: [`**アドベントカレンダー2024年12月17日**

# 麻雀

今年はもうすぐ終わっちゃいますね。去年のアドベントカレンダーを書いたばかりのような気がするけど、もう12月です。来月もう20歳になるって、怖いですよ。やっぱり年を取ったら時間の流れがだんだん速くなりますよね。。

とにかく、麻雀を打ったことがありますか。三ヶ月前、「アカギ」と「咲-Saki-」という麻雀についてのアニメを見て麻雀を打ち始めました。そして秋学期の始まり、大学で人に会うために麻雀部を作りました。Discordサーバーで大学から麻雀に興味がある人がやく40人以上いるし、日本から麻雀牌セットを二つ買って毎週の火曜日に会うようになりました。アメリカでそんなに麻雀打ちがいるってビックリしました。大学以外、シアトルでも大きいクラブがあるそうです。

いつか麻雀を打つチャンスがあれば、ぜひやってみてください。麻雀は運と実力のバランスがいいゲームです。簡単なルールが分かれば、初心者でも勝てるけど、深みがあって強い麻雀打ちになりたいなら効率的な打ち方の理論があります。（僕は全然まだまだですけど。）チェス、将棋、囲碁などはプレーヤーが二人いるけど、麻雀は4人、それとも「三麻」のルールで3人で出来るので、クラブにぴったりのゲームだと思います。

試したいなら、日本語で「雀魂」【じゃんたま】、英語で「Mahjong Soul」というオンラインクライアントで麻雀を打てます。かわいいキャラもいますよ〜 <:IchiThumbsUp:661246864653287430>

去年、大学を始めてやっとリアルで友達に会えるだろうって思っていました。コロナのせいで高校とコミュニティーカレッジをすべてオンラインでやったので、中学校のころからオンラインでしか友達に会いませんでした。ですから、大学に入学したばかりの頃、新しい友達に会うのを楽しみにしていました。でも、転入したので三回生同士達はもう友達グループがいたし、寮でルームメイトがいなかったし、実際は思ったより難しかったです。それで、結局、諦めました。

でも、今年はもう四回生の僕は大学生活が一年間だけ残っているので、何とかしないといけないと思ってます。ですから、麻雀部を毎週やり続けて人に会うために頑張ります。麻雀部を通して新しい人に会えて同じ寮同士と仲良くできてすごく嬉しいです。

皆さん、高校でも大学でも友達を作りにくいなら、先手を取ってください。麻雀でも、勉強サークルでも、ゲームでも、参加を通して友達ができる活動がかならずあるはずです。講義に行くことだけで友達が作れませんよ。人生は短いだから、一所懸命頑張るしかないです。

それでは、以上です。

メリークリスマス、そして良いお年を！ <:roosantayay:640160185779748864>`],
    },
  },
  {
    day: 18,
    jp: {
      userID: '457361778230165510',
      data: [`2024年12月18日

カチカチ。カチカチ。

「私たちはそんなに早く飾る必要があるの？」

「別に、けど私はこのことがしたい。それで…うん。頑張ってください。」

「ヒイラギさん…」

「さあね。多分サンタさんは私たちの努力を見てくれるよ！」

私はヒイラギさんが木のてっぺんに輝く星を置くのを見た。そしてため息をついた。

「…はい、お姫様。」

「うるさい、ノエル！」

…沈黙。私はストッキングを吊るした。

「ヒイラギさんにとって、今年が初めてのクリスマスなんですか？」

「…うん。なんで聞くの？」

「…何でもない。やっぱり、あなたの幸せを願っているんです。」

「やめろ、ノエル！恥ずかしいよ…」

私たちは笑った。ヒイラギさんは私をみます。

「あのね、ノエル。」

「はい？」　

「…本当に、ありがとう。」

私は言葉に詰まった。

「え？？　なんで？」

「…さあなあ？」

「ヒイラギ！」

いつも、私はクリスマスを気にしない。でも、このクリスマス…

私も楽しみ。



こんにちは！これは私、アザレアです！17日10時に書いている。そしてちょっと眠い。

実を言うと、私はやる気のある人じゃない。私も働くのが下手です。いつも、私は趣味が干満、一貫性がない。

日本語は私にそのようでした。それを見るのは簡単でしょう？私の書く文は全て怪しい、じゃないか？

でも、この物語を書くのはすごく楽しいよ！本当に。いつか… 私は改善することを願う。

今は12時です。雨が降っている。それは安らかでしょう？

とにかく、読んでくれてありがとう！

私は未来にたのしみ。`],
    },
  },
  {
    day: 19,
    jp: {
      userID: '732607156129497160',
      data: [`2024年１２月１９日

今年、私は二物語を書きたいましたでもときがありませんでした。 ボンナペティ とメリクリスマス!
---
## 親友
「まあ、週末にモール一緒に行こう！」ランマラはタイプしました。ランマラ自分の友達、アニシャ、五年から知りました。お互いはいつの間にか親友なりました。

「すみません、この週末あたしは忙しいです」。ランマラはこの返事は見込ました。毎週のわけはくれました。

でも、１２月の６日にアニシャの答えは違いました
「はい、日曜日に映画館へ行こう」。ランマラはたくさん嬉しいでした。あれは踊りちゃった。日曜日はどんどん来ました。興奮してきた。

日曜日来ました。ランマラ玄関に待ってました。彼とアニシャ６時半まで待ってちゃったに意見が纏めました。でも、ランマラは三十分から待ちに待った。
アニシャは来ました。「どこはいました？」彼女は大声で言った。顔は怒るそうでした。ランマラは彼女がこのように見ません。「え？私はこの場所へいました。意見が纏めました。忘れった？」。アニシャは息をつく。「はい、すいません。じゃ、映画を見られる、私たちは遅いです」

ランマラとアニシャは映画館の後ろに座れました。映画は始めません。ランマラは今日のことを思い出す。アニシャはいつでも優しいと嬉しいでした、そして今急になぜ変わりました？「えっと、家に大丈夫ですか？」アニシャはしばらく黙った。 「はい！大丈夫です！どうでもいいですよ！」。ランマラ答えは見逃した。アニシャは何も隠れます、ランマラと思う。「オケ！」半分冗談で言うました。
映画の間にアニシャは突然泣きました。「ああ、すみません！」。彼女は映画館から逃げました。ランマラもアニシャのあと従った。

アニシャとランマラは映画館の外に会いました。「なんで急に走った？」「ごめん、気分が悪いでした」

「数ヶ月からあんたのようにしません！あんたの諸問題言ってください！私はあんたの親友ね？そして言ってください！」

アニシャはしばらく考えった。「まあ、言ってます。
何ヶ月から私は深いな不幸にいます。毎日ベッドから起こしたくない。「なんで学校に行きます？人生の意味はなんですか？明日はだいじょうぶですか？」...このようの問題頭に飛べます。心は重いな感じいます。本当に不幸...」もう泣きっている。

「アニシャ、俺はあんたの親友です… そして、なんで僕にこのことは早い言えない？」アニシャは何も言えません。「聞いて、あんたの生活はわかりません、でも人生に何も問題はあります、俺を教えて。俺はあんたの友達です、あんたは私の一番好き友達ですけど。忘れてない。いつもあんたを助ける。」
どちらもは一緒にお茶を読みます。`],
    },
  },
  {
    day: 20,
    jp: {
      userID: '1278339688335278181',
      data: [`2024年12月20日

本日、僕はある夢に基づいた物語をしたいと思います。

質素な館に少年が住んでいた。アントニヌスは出窓のソファに座りながら母が教えたイソップ寓話をペラペラと読んでいた。最後のページを済む最中、彼は今日の晩ご飯で報告をすると命じられたので時間を無駄使いせずに続いた。
その日はいつも通り、青くて明るかった。垣根越しに広場外の子どもたちが鬼ごっこをやったりしており、時々そちらで集まってがやがやと燥いだ。館の二階の部屋から俯向くアントニヌスは羨ましいと思った。ずっと前から傍にいたのが愛着した縫いぐるみの馬だけしかなかったし、「忙しいから良い子になりなさい」と母に言われるごとに寂しくなったし、彼はあのグループに参加することを望み始めた。しかし、ドアの隣に座る中年の召し使いに近寄り、外に出させようと聞くと、召し使いが丁寧に断った。「アントニヌス様、ご許可なく外にお出ししません」と言った。
彼は怒り出した。いきなり手にある本を壁に投げ、開けっ放しのドアに駆け寄ろうとした。召し使いが抵抗しようと頑張ったが、年を取ったせいで、いい加減をさせる余裕が無くなって、手から滑らせてしまった。 自由自在になったアントニヌスは階段から下りて廊下に走って、そして門を越して遂に逃げてしまった。
しかし、手遅れだった。その時点で子どもたちは既に帰っていた。そのため、アントニヌスは走り続けて館からどんどん離れると人に満ちる街路に行き着いてしまった。方向音痴のアントニヌスは自分が迷い込んでいると気づき、気遣いのない人の波に流されるように、街路を歩きながら馬を抱いて泣いた。
そして、あるお店を通っていた時、歩みをやめた。ガラスの後ろから展示する純白なマネキンのお店で、マネキンの姿勢のと抜群さで目立ち、彼は魅力に引いてお店を入ることにした。
ドアが軋んだ。その途端、長い口ひげを蓄えたオットマン人のような男が歓喜に出迎えた。その男は店主であり、店内で少年を案内して回った。歩き回ってマネキンの群を見せられたアントニヌスは痺れてじろじろ見てやまないように嬉しくなった。動かずに鑑賞している同時、店主はポケットから針を取り抜き、アントニヌスの腕を掴んだ。突如、雰囲気が悪くなり、アントニヌスが絶叫して必死に逃げ出そうとしていたが、外に声が届かなくて店主の手強さによって阻められた。店主はどっと笑い、針を少年の右目にハマった。奇しくも痛いがなかったが、深海の底まで沈んだパイプのようにじっくり入り込むと、アントニヌスの肌が白くなり、身体が固くなって成長し、動きが厳しくなった。色彩豊かな衣装が散々裂け、縫いぐるみの馬も彼の背中に合併して一緒になった。どんどん人間を失うと、群のようにマネキンに完全になった。喜んだ店主はマネキンを運び、空間のスペースに置いてから階上にあがってソファで仮眠した。
彼が知らない間に、馬は動いた。`],
    },
  },
  {
    day: 21,
    jp: {
      userID: '185051004763504640',
      data: [`2024年12月21日
## 10年前の私へ

君に伝えたいことがいっぱいある。といっても、近頃タイムマシンみたいなものができない限り、この思いは一生届かないだろう。もし届いたのなら、よく聞いて、私の言う通りにしてくれ。だって君は今頃、他の人のことを誰も信じられなくなったのだろう？なら、せめて10年後の自分自身である私のことを信じてみて。

まず、あの娘のことを諦めて。誰のことかって？いいよ、知らないふりしなくても。とにかく、いつまでも引きずるのをやめて。それよりもっと大事なことがあるのだから。あと、お前は世界の中心でもなんでもないのだからいい加減にして。過ぎたことはもう変わらない。無理してすぐ直そうとするより、一旦落ち着いてよく考えて行動して。

あと、周りの人のこと気にしすぎ。もう一回言うけど、君は世界の中心でもなんでもないのだから。自分のことに集中して、しっかりやることやれば、きっと周りからも評価される。目立ちたがりやの君は10年後の今も変わらないから、せめてちゃんとしたやり方で目立って。調子に乗るのもほどほどにね？調子に乗りすぎて躓いて失敗するのが一番ダサいから。

最後に一番大事なことを言うんだけど、自分のことをもっと大事にして。特に食生活と睡眠時間。体力がないとか顔の肌荒れがひどいとか全然筋肉つかないとかは全部ちゃんと食べてちゃんと寝ればそのうち良くなるから。マジで若いうちにしっかりしないと後々（かなり後だけど）響くよ。例えば10年後とか。あと、健康とかもそうだけど、君は自分に自信なさすぎ。色々しくじって全部うまくいかないように見えてしまうのはわかるけど、君は今までよくやったよ。胸を張っていいんだよ。今までの積み重ねはそう容易く消えたりしない。だから頑張ってね。

-# え、ちょっと待って。10年前の私って、日本語できてたっけ？`],
    },
  },
  {
    day: 22,
    en: {
      userID: '1279751293958881281',
      data: [`Advent Calendar 2024
December 22


Hello guys! How is your Japanese and English learning going?

As for me, I have been waiting for 4 years for that moment to leave Japan, and to live in an English speaking country.

Nearly for 4 years I have used discord for a language exchange app.
And I was not wrong.

I thought it was the US where I would go to practice English but I couldn't.
The fee was too expensive. Well, in fact, I was planning to go to Mexico and while being there I thought I would visit the US. However the plane ticket for Mexico was too expensive, gor my budget.

Then I got a sudden idea.
I asked the travel agency's stuff and she said.
"It's about 700 USD for a round trip to Sydney, Australia."

It's not too bad.
The country of Kangaroos and Crocodiles.
I decided this trip right away.
"I will take it, madam."

My plane left Japan on 29th November.

And this is one piece of my trip through Australia.`,
`"Kangaroo Driver"

Terry was an old truck drive of 62 years old from Adelaide, the capital city of South Australia, a hot city.

That day, on Tuesday December 3rd, he was driving his truck from Adelaide to Broken Hill at late night. 
His truck was a road train, a big one, with 20 tyres.

Highway A32 was like his own garden. He drove on that road so many times in his life, day or night.

That day, it was around 9 PM, near Burra, the first thing happened. A Kangaroo appeared on the right side of the road. On a very quiet Highway, in the  middle of no where.
They crossed their eyes.

"Oh, lovely friend," said Terry to himself. 

That was quite normal in the area that the drivers encounter wild animals, such as kangaroos, goats or emus, etc.

But that day was different.
Terry passed his 1st kangaroo and saw the 2nd one. Normally, the truck keep driving even if there come some animals on the road.

That 2nd kangaroo was quite wild, it jumped onto his way, Terry could just avoid it from hitting.
"Shit, wth!" he shouted.

And the next moment, in his sight in front of him, he saw bunch of kangaroos.
10 to 12, at least.

"My god," said Terry touching his long beard, with an exited smile.

But as a truck driver, he would never speed down.
Just sent light signs to avoid them.
His truck hit one of jumping kangaroos, but not a serious damage.

And after those families of kangaroos, he kept seeing them all night until the town of Broken Hill. 

He even counted how many of them he met that night.

157 kangaroos in a night.

His new record of his life. Probably nearly the Guiness Records.

"That is Australia, my friend," said the truck driver to his Japanese traveler, touching his long beard.`],
    },
    jp: {
      userID: '208546518846799883',
      data: [`2024年12月22日

もうこの時期ですね、いよいよ年末です。僕は今年もアドベントカレンダーに参加させてもらいます。よろしくお願いします。

皆さんが言語学習を始めたきっかけはなんでしたか？

アニメを字幕なしで観たいとか読みたい漫画と本の翻訳に待ちたくないという理由とモチベーションが多いですね。

僕は特別な理由なく日本語の勉強を始めました。ただ暇なんだから何をしようかなと思って結局適当に日本語を勉強することにしました。最初には僕が目指したのは流暢になるということでした。イマージョンする時、別に楽しくないわけじゃないけどなんか語学力を上達しているのそのものは一番のモチベーションでした。以前より本を早く読めるとかという感じをモチベーションにしました。

でも、今は違います。今年、なんか新しいモチベーションを見つけました。はい、皆さんもう知っているでしょう？そうです、やっぱりVチューバーのことです。今まで何か意味深い文章だと思っているね皆さん。違います。やっぱりVのことを話したいです。

僕前からVをもう知っているけどあんまり興味ないから見てなかったです。でも今年のある日にはベッドにごろごろしながらオススメページで気になる配信を見つけました。「ネタバレ激しすぎるRPGー最後の敵の正体は勇者の父ー」というタイトルでした。まぁ今別になにもしてないから見てみようかと思いました。結局午後３時まで昼ご飯さえも食べずにベッドにそのまま３時間の配信を見てしまいました。本当に神ゲーで神配信だった…僕には伝説になりました。その日から毎日Vを見ててVにハマっています。

Vというか天音かなたというVチューバーですね<:PPSmug2:715878753716404235> 。なんか面白いしツッコミ上手だし面白い話がいっぱいあります。例えばリンゴジュースを飲むだけで１５分も話せる。「V好きだから切り抜きして自分で翻訳してみれば？」と友達に言われたら、まぁちょっとやってみようかと思いました。結局翻訳することはめっちゃ楽しくてもっとやりたくなりました。

ここまで書いたのは僕の新しいモチベーションです。もっとVの配信を楽しみたいです。もっと日本語が上手くなりたくてもっと聞き取れるようになりたいです。もっと翻訳したいです。今はまだまだですがこれからもっと頑張っていつか上手な翻訳者になりたいです。仕事でしたいかどうか分からないけど趣味でもしてもいいと思います。

この動画は自分で翻訳した切り抜きです。皆さんよかったら見てもらえませんか？
https://youtu.be/sdm56o4agqs?si=ezhZMuWjE8h8uk9e
TLC & QC: kashi, ayami, rae

今年のアドカレを読んでくれてありがとうございます。皆さん、メリークリスマス！
これからもよろしくお願いします。`],
    },
  },
  {
    day: 23,
    en: {
      userID: '781772168450146326',
      data: [`Advent calendar challenge 
December 24th 2024

Dear 🌏💓⭐️THE WORLD 🌎 💓⭐️

🎄❤️MERRY CHRISTMAS to  THE WORLD❤️🌏🎄!🧑‍🎄

I wish you all have a wonderful Christmas!

This is my first time trying an advent calendar, and I’m honored to join in.

On this Christmas Day, I would love to show you how to make miso by yourself.So please give it a try!

I make miso myself once a year in around March. It’s a very easy to make and healthy fermented food. If you have the ingredients, please give it a shot.

Ingredients:
    •    500g Beans (大豆)
    •    500g Koji (生糀)
    •    200g Salt

This is my recommended ratio of ingredients for the miso.

You can make 2kg miso with ingredients above. 

(I normally make 5kg a year at once. )


The ingredients are simply beans, salt, and koji.

First, wash the beans thoroughly. Wash them just like you would wash rice. Then, soak the beans in water for 18 hours until they become soft. You will need three time as much water as  beans.

Put the beans in a pot and add enough water to cover them. Boil them for about 3 hours. The key is to submerge the beans in just enough water to cover them. (If you are using a pressure cooker, cook for about 20 minutes.) 

As soon as you take out the beans from the hot water,
soak them in cold water for a while. Then, drain the water from the beans.

Next, put the salt and koji into a plastic bag and mix them well. After that, add the beans and mix everything together. Mash the beans thoroughly. The degree of mashing is up to your preference.

Shape the mixture into balls and try to remove as much air as possible, as air can cause mold to grow.`,
`You should try to throw the balls into the container to let more air out , I mean…you could even try to throw the balls into the container to let more air out.
(If you miss, the balls go flying so be careful! LOL I did miss few times 🤣I use to belong to the volleyball club so I’m ashamed of myself to miss it lol) Try to pack them tightly into the container to remove any air.

The final step is to flatten the miso in the container. Sprinkle the salt evenly on top, cover with plastic wrap, and store in a cool place.

You can enjoy the miso after 6 months to 1 year.
If you see any mold, just remove it.

To finish, put a sticker on the container with the date you made it and the word “Love”which will make the miso even more delicious!(言霊)

You should definitely try it!

I wish you all a Merry Christmas and a Happy New Year! ❤️🎄

🌏⭐️💕 May there be a world without war. 
🌏⭐️💕Peace & Love 💕 ⭐️🌏　　　　　　　　　　　　　　

🎅The reality that letters to Santa, who lives in Canada, are not reaching him due to his strike is a sad truth for children. I hope that next year, Santa’s strike will come to an end.🎅🙏

———From Yu ————`],
    },
    jp: {
      userID: '317491770114048000',
      data: [`２０２４年１２月２３日
こんにちは、皆さん！TofuMarsだよ！クリスマスと言えば、プレゼントを配ったり受かったり、クリスマスツリーを飾ったりすること。もしかして、恋人がいたら、クリスマス・デートでもするかも！？そういう題材にしなくて、もっと、もっと、ときめき、可愛さ、やる気を湧き出せる話を書いてみたい。もちろん、この話はフィクションだが、顕現されている気持ちは本物のはずだ。

タイトル：補習を回避すれば、満点を取るコツは一つ！じゃない！！

「ふふふ、この服で森羅万象の真理を感想してるぞ！」

ダサくて虹色のフリルドレスのままで暗い教室の中でギラギラ輝いている少女と宣伝された。あの子の前に一人の男がいる。彼の心で「どうにかしろよ！こいつが死んじゃうぞ！」と響き出したのに、まるでメドゥーサに石化されたみたいに動けなかった。降参したがっている瞬間に彼がいいことを思いついた「そうだ、まだやれることがあるぞ！それやるしかない！」

遡ること数時間前：

どこにでもある学校の教室には、数学の先生の講義を見ながらソワソワしている少女がいる。髪をいじり、鉛筆を噛み、椅子の背にもたれあっていて、講義のつまらなさに彼女が机の面に頭突きさせる瞬間に先生が振り回してクラスの皆に向いて「明日は学期末テストなので勉強し忘れないでね！しかし、今までしなかったら、勉強するより神様に祈った方が良いよ」誰も笑わずに先生をじっと見た。言わずもがなダサい冗談だった。空気を読めなかったことを気づいてから先生が退室した。くしゃくしゃ髪型した少女は隣の学生を向いて「あ～よかった。。。じゃないよ！赤点取ったら僕のゆっくり休みを奪っちゃうよ！梧桐（あおぎり）くん、助けてよ。。。一生の願いだって」「なぜあんたを助からなきゃいけないか？自業自得だろ？ゲームしたり天井をぼうっとしたりしたくせに」彼女が手でハートを作って胸へ置いて「この可愛い僕は君の唯一の親友っしょ？他の女の子に虐められた時、誰が君を庇っていたの？そう、この白き鎧の騎士の僕であった！」と言われた。「まぁ、その論理で議論できない。放課後にこの教室に会えよ」「わい！菓子、飲み物などを僕に任せて！この語部瑠夏（かたりべるか）の辞書には不可能という言葉はない！」廊下へ走り去っていく瑠夏の姿を見ながら梧桐は教科書を集めて、勉強会の準備をし出す。

遡ること１５分前：

「よし、準備万端。これで瑠香ちゃんが合格だそうだ。ギリギリだけど」梧桐は扉を向いて瑠夏が来るまで待っていた。梧桐は眠くなってくる時、突然、扉がどんと開き、「おい、テメェ！」と声掛けた瑠夏が教室に入った。「こんな声掛けが必要じゃないか？」「必要かとは別件だけど、眠気を一切発散させばいいんじゃない？見ればわかるよ、可愛い僕のために待っていた寝顔を」瑠夏は床に２つの箱を置いて「左の方が差し入れだよ、どうぞ！」モンスターエナジー２本とチップス２つを取って、机の面に置いた。「右の方が勝負服だよ！」虹色のフリルドレスと彼女の頭にぴったりするカチューシャを取り出した。「どこでこのドレスを手に入れた？」「コンビニに行ってついでに家に帰ったんだ」「魔法を含んでいるらしいよ、このドレス。見た目は疑わしくて本当に優しいおばあちゃんから買っちゃって」瑠夏は誇らしく宣伝した。「特に知恵を与えるんだ。これでよく行ったら、僕達は一度も勉強させない！」瑠夏はドレスの中に潜り込みながらと言われた。「どうやって頭良くなるんだ？手術だろうが万能薬だろうがバカは治らないよ」「頭に綿が詰まったんですか？さっきの話通りに魔法で頭が良くなるんだよ！ま・ほ・う・で！見て下さい！ドレスの儀式の行いを！」瑠夏は3回ぐるぐると回って天井に左手の指し指を指して最後に右手の手平が梧桐へ伸ばした。１秒経過。２秒経過。３秒経過。電気がチカチカし出し、まるでドレスに電気のエネルギーが吸収されるみたいに虹色の色彩が深くなってくる。真っ黒の教室の中に立っているのが瑠夏だけだ。遺体のように彼女の顎が開き、深淵如く瞳が暗くなった。「ね、梧桐くん。いいこと、いや、物凄いことを思いついたよ。これで学校で一度も勉強させないというより、一生（これからも）一度も勉強させなけばいいんじゃない？」「なっ、何言ってるんだよ、瑠夏ちゃん！勉強すること、学ぶことが人生だ！」「だよね。。。だから。。。一緒に死んじゃえ！」虹色の雷で包み込んで、瑠夏がどんどんギラギラに輝いている。「森羅万象の真理を感想すれば、頭に知能を溢れすぎて死んじゃう！蘊蓄を尽くして死神として教鞭をとる！」梧桐は椅子を使って、盾として虹色の雷から防いだ。しかし、この雷は壁に数回反射して、跳弾で梧桐を当たった。怪我はないが、彼は床に転んじゃった。「ふふふ、この服で森羅万象の真理を間もなく感想してるぞ！」瑠夏が狂って笑ってた。梧桐は動かずに瑠香の方に向いて、モンスター2本を気づいた。「そうだ！こいつの力の源が光だ！光の吸収を乱せば、元に戻るはず！やるしかない！」どうやら瑠夏に見えずに彼が箱に近づいてモンスターを握って瑠香のドレスまるごと全部に注いでた。「僕の勝負服が！」瑠香が叫びながら、ドレスから光が出てきた。教室の明るさと瑠香の意識が戻った。梧桐は砂糖でベタベタ粘った瑠香に近づいた。「ぴえん！もう詰んだ！結局、私の天国（やすみ）を奪っちゃった～」泣きじゃくりながら言われた。彼は彼女を慰めてみた。「私を道連れにすれば、私たちは詰んだよ。物理的に。テストの勉強しなかったけど、学んだことが一つだ。一気に勉強するのが無理でしこしことし続けば何よりだ。」「へへへ、しこしこって言っちゃって」瑠香は微笑んで涙の跡を拭いた。「意味を勘違いしないで。しばらくゆっくりして、できるだけに勉強しよう！」`],
    },
  },
  {
    day: 24,
    jp: {
      userID: '202995638860906496',
      data: [`## 2024年12月24日
### __日本語へ手紙を__
皆さん、こんにちは。またはこんばんは。今日はクリスマス・イブですね。普段はアドベントカレンダーの参加は他のユーザーに譲るのですが、今年は特別です。今年で日本語を勉強し始めてから十年になります。この一年ではなく、この十年を振り返ってみようと思います。

自分にとって、日本は特別な場所です。そして、日本語も特別なものです。でも、具体的な理由を述べようとすると、すぐには言葉が出てきません。どう特別なのか説明しようとしたら、このアドカレが倍の長さになってしまうので、それは別の日の話のために取っておきましょう。その代わりに、今日お話ししたいことはその特別さからどういう影響を受けたことについてです。

日本語を勉強し始めたのは2014年の春で、高校の最後の一年でした。新しい言語を勉強しようと思ったけど、取れる外国語のクラスは日本語しかなかったんです（本当に、自分の高校にはスペイン語と日本語の授業しかなかったんです）。正直言うと、学び場としては、その授業の質が少々低かったです。田中先生が楽しい先生でしたし、田中先生には感謝していますが、その授業からはあまり何も学びませんでした。クラスメートの8割が一年生ということも大きかったのですが、高校の外国語の授業には限界もあります。でも日本語の味見としては立派な役割を果たしてくれました。

大学一年生の時は、日本語の授業を受けずに欧米の言語に戻り、スペイン語とフランス語の両方を取ることにしました。そして二年生になると、友達に「日本語を一緒に取らない？」と誘われ、日本語の勉強を再開することを決心しました。二年間勉強してから東京の国際基督教大学（ICU）で短期夏季留学を一度してから、物理学専門で大学を卒業しました。その時点では、まだ物理学がメインで、日本語の勉強はただの趣味のままでした。

既に大学院に進学する決意をしていたのですが、ある日、日本語の先生のお誘いを受け、JETプログラムという仕事の説明会へ参加して、興味を持ちました。そのJETプログラムへ申し込んでみたら受かりました。そして、東京の西の方にある科学技術高校のALTの教師（外国語指導助手）になれました。

考えとしては、大学院に進学する前に、日本で一年間ギャップイヤーとして過ごすことは悪くないだろうと思ったし、推薦状を書いてくれる物理学の先生方も、そう仰ってくださいました。こうして、日本に引っ越しました。そしてどうやら、自分を快く迎え入れてくれた日本に心を惹かれてしまったようです。思いがけないところに居場所が一つ増えました。本当に日本のお陰で出会った方々、得られた経験、見ることが出来た景色などが、自分の人生を永遠に変えてくれました。

日本で二年間住んでいた都市が自分にとっての第二のホームタウンになりました。あそこにはいつ行っても、歓迎してくれる人が待っています。そして日本からアメリカに戻っていっても、大学院の授業で知り合った同級生より、立ち上がりに協力した日本語・英語交流サークルで出来た仲間の方に親近感を覚えました。そのうち、そのサークルの会長（正確に言うと名称として部長の方が相応しいと聞きますが、みんなは会長と言います）へまで上がり、いずれその会長の席を後輩に譲りました。

日本語を勉強している現地の正規性にせよ、日本から英語を勉強しに来た日本人の留学生のせよ、そのサークルで永遠の友達がたくさんできました。今付き合っている彼女もそのサークルで出会った人です。本当に素敵な人で、彼女は多分今年の一番大きなハイライトでした。

彼女のお話だけでアドカレの残り枠を全部使えちゃいそうです。全部自慢話になってしまいます。パンやお菓子作りが好きだったり、研究室で研究したり、日本語の読書が好きだったりして、とても面白くて好きな人です。本題に戻すと、この人生のパートナーという存在も、好きになったのは、やはり日本に対する想いが似てる点が大きかったです。

つまり、言いたいのは、日本のような国に長く住むと、価値観が良くも悪くも変わってしまいます。その価値観がわからない人と合わなかったりするようになることもあるのでしょう。日本人になりたいなとか、日本人として生まれたかったなとか、そういうことは言い出しませんけど、少しはこの10年間で日本色に染められたかな。それはもちろんいいことだと思っています。今の人生が幸せで、他の人生と何も交換したくないと思います。この十年間、とてもお世話になりました。これからも宜しくお願いします。`],
    },
  },
  {
    day: 25,
    jp: {
      userID: '684483298663464960',
      data: [`# 2024年12月25日

**パン屋さん(抜粋)**

大学を卒業したばかりの私はどうにか自活しなければならなかったので、食品化学の学士号だけで就職しようとして、パン屋で働くことになった。大学の専門とはめっきり異なったのがわかったので、面接の間に必修の調理実習で習得した経験でわざと訴えようとしたが、仕事に就くことにはそんな素朴な一言が利くだろうとは思いもしなかった。少なくとも、乗り気だと見なされたら良かったな、と。
同期の辛島（からじま）みきが、祖父の和菓子屋で生まれ育ったので、米粉や餡子の何種類でも知り尽くす上に、手先も器用に違いない。本物の「几帳面」と「真面目」とされる性格だった。彼女には一生涯敵わないと何遍も思っていた。

人手不足によりこんな風に大学を卒業したばかりで未熟な二人きりに店の運営を任せるのは、誰にとってもおかしく見えるだろう。責任が重すぎるのではないか。と言っても、仕事で努力し続けたのは、仕事がどれほど辛くても我慢するしかないと自分に言い聞かせてまで、働きながら経験をさらに積むことができるからだ。上司が言った通り、このパン屋で働くことにより、様々な役割を味わうことができて将来にどんな役職を狙いたいのかはっきりわかるようになると思い込んでしまったので、上司の期待に応えるようになんでもやってみようと覚悟を決めた。とにかく、当座のところ先任者が転職するまで、五ヶ月間重なった雇用期間を精一杯生かすしかなかった。様々なレシピや手続きを努めて書き留める上に、先任者ほど手際よくできるように実習にも励んだが、先任者の二年半間蓄えた経験に、自分が五ヶ月以内に追いつくなんて無理だろう。

私が担任する番になると、まるで上司自身が耳元で囁いているかのように、「様々な役割を味わえる」という一言の不気味な余韻に浸っていて足がすくんだ。その言葉遣いの図太さを改めて思い知った。「様々」より「万事」、「味わう」より「担当する」という現実を突きつけられた。パン屋の運営ができるようになるため、実際に経験するということより効果的方法なんてないだろう。さぞかし様々な責任を負わせられてからどの役職が自分に合ったのかはっきりわからないはずがないのだ。

行き掛かり上、パン作りだけではなく、接客や在庫管理や商品開発や衛生検査の準備まで、たまに特別注文や配送や指導も、仕事を二人で分担しても、諸々の物事を順次より同時にこなさないと済まない日々は切りがないと思っていた。
そのため、このまま二人きりでいる限り、食品化学とお菓子屋さんの経歴を組み合わせて、お互いにもたれ合うしかなかった。共同で店を営む時間を過ごせば過ごすほど、お互いの考え方や境遇を徐々に理解できるようになってきた。少なくとも、全部順調に進んでいけるように努めるという共同の目的で、職業上の関係にしては懇意になれてきた。

仕事を家に持ち帰ることも多かったとは言うまでもない。今何もしていなくても、いつも次のやるべき事を考えている悪循環なんだ。寝不足で早く起きるのが辛い朝にしても、かろうじて出社できた。寝ぼけたままさっそく朝の準備をしようと思ったところに、前夜遅くまで残業していた辛島さんが帰宅した前に、私が使うつもりだった材料をすでに調理台に置いてくれたのに気づいた。今朝店に入ってから、私は会釈して「昨日ありがとうね」と声をかけた。
「ううん、自分の準備をしたついでだからさ」とみきは何気なく答えた。

そのため、新しい人をもうすぐ雇うところだと上司に予め断られた上に、その新入店員の内の一人がパン製造技能士の二級、二人は特級合格者だという情報は、たちまち将来を照らす光になってくれた。喜んで新入店員たちに案内したり、うちの店に特有な手続きをつくづく誘導したり、どんな悩みに対しても心を込んで相談に乗ったりしてあげた。

他の人と協力することはもちろん一人でも仕事できると期待されている職場にすんなりと溶け込むはずだ。周りの人にあまりにも頼りすぎるより、ただ色んな資料も参考にして自分で進めるように努力してから結果を振り返って自分でやり直すにすぎない。私たち二人もこんな風に育てられたから、みんなと全員力を合わせたら、鬼に金棒ではないか。全体的に生産性を上げることができて、救われる。`,
`私は生地をこねながら、半時間寝かせる前に他のと取り違えないようにラベルを貼っておこうと思ったが、ペンなどが手元にどこでも見当たらなかった。しばらく探そうとして調理台から調理台へ移動したあげく、見つけられずじまいだった。「私がどうかしてるのか」と思いながら、知らないうちにレジまで着いて、マジックの山を発見した。

みきは私が目を擦ってから二度目したのを目にしたら、「りえ、どうしたの？」と尋ねた。
「ペンとか探していたんだけど…」と私は言い切ったところで、マジックの山に眼を落とした。
みきもたちまち慌てて、エプロンのポケットに手を突っ込んで探り回ってみた。「おかしいね…普通に使っているペンも一体何処？一番好きな青いヤツは？」
「みきが昨日残業していたとき、他に誰がいたの？」
余程毎日重役出勤と共に早退する習慣のある鈴木（すずき）先輩と、上司に媚びるために無遅刻無欠席で理想の会社員を装って毎日定時的に退勤する黎（れい）先輩を消すと、富沢（とみざわ）先輩しか残らなかった。
自分で全く最後まで使い切ったバニラエッセンスの瓶を手にしながら、何食わぬ顔をして「ねぇ、今暇でしょ？じゃあ、追加で注文してくれる？至急お願〜い。今すぐ要るんだから」と何気なく頼んだ天然な富沢先輩か。「これから何かの材料を使おうと思ったら、まず残っている量を注意しておこう」という忠告でさえ、彼女にとって長すぎるだろうし、脳にぴったりと収められず、右の耳に入ってからすぐ左の耳からはみ出す。
みきと私は「マジかよ…」と「さすがだね」といった目つきを一瞬で交換した。
私たち以外誰も気づかないだろうが、マジックの山を一本ずつ数えて、調理台ごとに同数のペンを配って、どの調理台に所属するかを示すために相当する色のマスキングテープをそれぞれのペンに貼ることにした。すると、道を迷ったか見捨てられたペンに目を留めるなり、元の場所にすぐ戻すことができる。その日からも、ぺんたちがレジの傍に置いたマグカップを別荘にしてオーブンなどからその辺りで避暑に来るのをしょっちゅう見かけた。みきと私は、毎回みんなを導いて帰宅させる季節の移ろいだった。あたかも夏と秋しかない異世界に引き込まれて、その狭間で延々揺れていたようだった。なぜか夏の方がいつも長く感じたのだが。

「まるでこのパン屋なんて小鬼に取り憑かれているようだね」といったみきからのセリフは、ずっと記憶に残っている。確かに、小鬼も一緒に暮らしているだけにこんなおかしい事ばかり起こっているんだろう。他にもいたら、必ずさらに困ってしまう。三匹まで増えたら、どれくらい耐えられるだろうか。

正解は、三年間このパン屋さんで働いていた挙句、四月に二人で同時にやめることにした。もうおそらくずっと前から気づいただろうと思うのだが、ご推察の通り、修羅場はパン屋ではなく、研究室だった。契約が終わり次第、単純に仕事をやめさせてもらうということではなかった。上司の依頼が、四月というより、いかにも死月と呼べるほど山のようにあった上に、相談や手助けを求める連絡の形で、十二月にこの短編を書いている私と、みきにも時折届けているほど溢れ出してしまった。その水に爪先を少しでも浸し次第、一生消えなく染められてしまい、一生逃げられない。`],
    },
  },
  {
    day: 26,
    en: {
      userID: '297635569041801217',
      data: [`It was a snowy day when I woke up from the blaring phone alarm and reached to snooze it. After snoozing, the home screen tells me that it's 12/25 7:00. Christmas has come. A day that should be brimming with cheer. I've still got plenty of time until work, so I opened Twitter to check out the festive mood—until I saw the No. 1 trending news. My favourite VTuber, had announced her sudden graduation. The news struck me so hard I could've isekai'd at that point. *She*, my oshi, illuminated the gloomiest of my days. Her songs greeted me every morning as I headed to work, and her streams comforted me to sleep every night.

Unable to process such an astonishing announcement, I dashed outside into the snow. The picturesque Christmas scene that everyone would adore seemed desolate and foreboding. The harsh cold reminded me of the frigid depths of Cocytus. I ran aimlessly, as if literally running away from the truth. 

All I had in mind was disbelief and betrayal, but as I rounded a corner, I bumped into someone. The impact was so strong that we both tumbled into the snow. Groaning, I came to my senses and realized I had knocked over a girl, quite a petite one at that. Quickly, I scrambled onto my feet and extended a hand to her.

"I'm so sorry! Are you alright?" I asked, my voice trembling from the cold and concern.
The girl looked up at me, her eyes wide with surprise. She took my hand, and as she did, she slowly spoke, "Thanks."

My heart skipped a beat; her voice... it was incredibly familiar. 

"I didn't mean to knock you over. I was just... lost in thought." 

The girl smiled, brushing snow off her coat. "I'm alright."

Another truck was about to hit me when I heard her voice again. It couldn't be... It can't be. The voice I had heard every day was now right in front of me.

"But... it's impossible... what are the odds..." I stammered, ignoring the said person in front of me.

She laughed softly, her eyes twinkling with a mixture of amusement as if she had noticed my inner turmoil.

"You don't have to overthink it. Anyways, it's my fault for not paying attention either. I came here to clear my mind, so in that sense, we're pretty similar, aren't we?"

I gawked at her as if she said something that'd bring me to enlightenment. The VTuber I had idolized might be standing right in front of me. A sense of wonder and awe replaced the disbelief and betrayal that haunted me seconds ago.

"Again, thanks for helping. Maybe we were both looking for something today." She said, her voice gentle and real but with a hint of anticipation.

As the snow continued to fall around us. That was when I knew that this year's Christmas would be unlike any other. In the most unexpected ways, fate had brought me a new encounter, a new hope, and perhaps, a new chapter was beginning for the both of us.

||And then, everything faded to black. I woke up in my bed, the morning light streaming through the window. It wasn't snowing. It had all been a dream. I reached for my phone and checked the trending tweets just in case while my heart was racing. Nothing; there was no news about some VTuber graduating. It was just a dream—a dream that felt so real, yet left me with a sense of hope and a new perspective on the magic of Christmas.

Thanks for reading guys!
I've always thought that I should write the cringiest thing when participating in these events, and I hope y'all enjoyed it. 🙂
I also planned to draw a little something for y'all, but alas, I was a bit too busy with work, so you guys just get this fabulous entry from me. 😦

Anyhoo, I wish everyone a Merry Christmas and an early Happy New Year!||`],
    },
    jp: {
      userID: '623596512487669760',
      data: [`**December 26th 2024**
Thanks for letting me be part of this advent calendar event!

I'm an IT consultant by profession and an avid cyclist who loves watching tons of anime during indoor training sessions. While there’s so much I’d like to share, I’ve narrowed it down to my top 3 anime picks for you to enjoy this holiday season:

1. That Time I Got Reincarnated as a Slime
Imagine waking up in another world… as a slime! It’s not your typical “転生もの” where the protagonist reincarnates as some overpowered hero. This slime starts as a nobody but gets special skills that let them grow into the coolest leader in the world. It’s got action, laughs, and even moments that’ll warm your heart.

2. Eye Shield 21
Unlike the first one, this is a story that could happen somewhere in the real world. It’s about Sena, a shy guy who was bullied so much that it actually trained him to run insanely fast. By chance, he gets dragged into a team of quirky underdogs. You don’t need to know a thing about American football to love this one! Every team member has their own unique character and story, and I guarantee you’ll find a favourite by the end.

3. Sword Art Online
We’ve all wondered at least once what it would be like to dive into a video game—and this series brings that dream to life. Players get trapped in a VR game where dying means it’s game over for real. It’s packed with high-stakes action, epic battles, and just the right amount of romance. Once you start, you won’t want to log out!

Not the exhaustive list, but here are some other anime I like:

* JoJo's Bizarre Adventure
* Hunter x Hunter
* Fullmetal Alchemist
* Assassination Classroom

There’s so much great anime out there, and if you’re an anime fan like me, let’s chat about it on the Discord channel!`],
    },
  },
  {
    day: 27,
    en: {
      userID: '700992656284844053',
      data: [`Hello, everyone. 
I appreciate the organisers in the server who arranged Advent Calendar. 
I hope you all reading this have a wonderful day today.
I wrote two things; an essay which is similar to a poem and a bite-sized story. I hope the English writings make sense and hopefully you all enjoy these. Thank you!`,
`=============
**My Thoughts: The Work of Sadness**

When you feel sad, the feeling shapes the sadness in your mind,
like a dim silver stone.

When the sadness is heavy, it sinks into the deeper level of your mind,
like a dive into the deep sea. 

The heavy sadness settles in at the depth, 
absorbing others it perceives there, influencing each other.

There may be some relations between the causes of each sadness,
and they may grow together,
creating lumps of sadness.

When a new sadness comes down,
the old shapes might react to the new one,
like a chemical reaction.

Sometimes the chemical reaction makes a sound,
a notification from the depth of your mind,
reminding you of the existence of the cluster.

You may catch the notification,
and may take a step to heal the clump,
or simply recognising the clump may soothe it.

This is likely a natural circle of humans' minds,
(That is possibly the system of the brains)
There is nothing wrong with acknowledging our sadness. 

=============`,
`**= The Exquisite Blue Sky =**

I'm an airplane pilot. I’m currently on a flight over the ocean, and have been managing to deal with a problem in the left engine for a few hours. 
Furthermore, another problem just arose: the fuel does not seem to be sufficient to reach the closest airport. 
It seems to be inevitable to land on the surface of the ocean even if I resolve engine trouble.

This situation is a sort of dilemma.
If I try and fail the landing, the airplane will suffer severe damage, and then might end up with a fatal accident.
However, if I don’t land, it would eventually mean a crash.
Now I must accomplish landing the airplane there!  
My priority is to land the airplane safely with all passengers.

…

My last memory was seeing the massive splash as we hit the water.
…

Now I find myself looking up at the exquisite blue sky, lying on the nose of the airplane.

The End`],
    },
    jp: {
      userID: '307678885942657046',
      data: [`# 2024年12月27日

来週から、私の人生が全く変わる。

…と言っても、違うなぁ。ある意味で変わるかもしれないけれど、確かに今の私と同じで笑ったり、失敗したり、足掻いたりするだろう。

来週から、日本へ6ヶ月の留学をすることになる。ただの６ヶ月だから大したことないと思われるかもしれないけれど、アメリカの外へ踏み出したことのない私には人生を変えられる経験なのだ。

実は、大学にいるうちに留学するつもりなんてなかった。普通に授業を受けて普通に卒業して普通に就職すると思っていた。でも一年間前、気付いたらもう日本への留学申請を書いている。なぜなのかな。私は日本語を専攻にしていないから日本へ行くなら自分の卒業を遅らせてしまう可能性がある。それなのに、どうしても行きたかった。考えてみれば、こんなチャンスが二度と来ないから今こそ捕まえなきゃならないからだろう。

上手くいくかどうか知らない。今の大学生活より辛くないと思えたいけれど、それは確かなことではない。でも知らなくてもいいかもしれない。同じような辛さがあるかもしれないなら同じようなしあわせもあるかもしれない。確かめに行くしかないだろう。

私は何も後悔したくないから不安ばかりだ。変わるのは怖いから見知らぬ場所へ行き、見知らぬ辛さに触れると嫌だ。でも、不安になると、留学を決めた時お父さんの言葉を思い出す:

「大学ん時、俺絶対に留学できなかった。勇気なんてなかったんだ」

あ、私、もうちゃんと勇気を持っているんだと思い出すのだ。自分を信じなければ何も始まらない。

たかがの6ヶ月。たかがの6ヶ月だれけど、何があっても、こんな臆病な自分を少しずつでも変えて、日本を楽しめたい。`],
    },
  },
  {
    day: 28,
    en: {
      userID: '739702692393517076',
      data: [`Hello

This is my first advent calendar.
At this week i bought light novel. I didn't read it, so after this, i am going to read book.

Have you ever eat Oshiruko? It is my favorite food, and it is very sweety. I put mochi at there, and eat with it. When i eat that, it makes me warm. So i always eat that when the outside is cold. If you come to japan, i recommend to eat Oshiruko.

Next year's goal is writing japanese text more better that this year. I am not good at writing, so i need to level up my writing skill.
Most people think my japanese is good. But i don't think so that. This is because when i wrote report, most people said you must rewrite that, because the grammar is not good and it is very hard to understanding. so I need to train more than more.`],
    },
    jp: {
      userID: '681475127208312854',
      data: [`# 2024年12月28日
こんにちは〜 ペリーだよ〜

みんな元気にやってる？もうすぐ2025年だね！今年大学であったことについてちょっと愚痴と、そこから学んだことをまとめてみた。よかったらぜひ読んでみて！あと、早いけど、明けましておめでとう！

背景：これは私の専攻になる電気電子工学に関する最後のプロジェクトのグループフォーメーションの話。このプロジェクトは、卒業までに自分のプロジェクトに特許を申請するか、あるいは科学論文を書く必要がある。

7月あたり、教授から「プロジェクトグループ組み合わせがこれから始まります」って通知が来たとき、一人でやろうと思って教授に許可をもらいに行ったんだけど、最初は大丈夫って言われたけど、後で「ダメ」って言われちゃった。その時点で、残りのクラスメイトはすでにグループできてて、私以外に3人だけがグループ無しで残っていた。その3人はそれぞれ、ジョン（プロジェクトを一人で進めようとして教授に断られた）、カイル（全然学校に来ない）、そしてベン（成績があまり良くなく、協力が難しそう）だった。

最初「一人じゃダメ」って教授に言われたとき、その代わりにジョンと組むように言われて、それに同意した。なぜかというとジョンはできる人だって分かってたし、彼ならきっと協力してくれるって信頼があった。数日後、あるプロジェクトレビューミーティングでまた例の教授から「ジョンとはダメ」って言われた。えっ？急に何があったの？せっかくジョンに通知してこれからのタスクとか話し合っておいてたのに。呆然としてると、教授は指示を続けた、「ベンとカイルの中からどちらか選びなさい」。するかよ、絶対ない！その場で直接「さっきまでジョンと組ませるつもりだったんでしょう？ベンとかいるなんて誰なのかすら知らないよ、見たこともないし」って言い返したけど、教授はすぐ「言い返すつもりなら主任教授に話せ」って言い放って電話を切り、学部長に転送した。
そして学部長は「プロジェクトを一人でやることは、うちの学部のポリシーとして認められてない。ベンかカイルのどちらかと組みなさい。ジョンと組むのは避けてほしい、彼には特別なプランがある。カイルと組んでみたらどう？」と言う。私すぐ「カイルは大学に全然来ないので、会う機会も少ないし、彼と協力できるかどうかはとても自信がないんですけど。。」と返すと、「あっそ、悪いが、うちの学部にはそんな性格の生徒だけがいるから仕方ないね」と学部長は失礼に言い返す。
えっ？一体何？？すごい頭にきたわ。「でも担任教授は最初私をジョンと組ませていたんですけど？それで私たちも話し合ってこれからのプロジェクトの計画も立てていたのに、いきなりどうしてですか」と答えると、学部長は「私にできることはこれだけだ、一時間中にチョイスを私に伝えなさい」と言って、電話を切った。一時間後、学部長が勝手に私をカイルと組ませたことを知った。どうすればいいのか全然分からんくて、部長を敵に回すほどの問題かというと全然そうは思わなかったし、とりあえず無言でいることにした。`,
`それで、プロジェクトで何をするか考えて、「スーパーコンデンサとリチウムイオン電池のハイブリッド蓄電システム」というテーマに決まった。間もなくプロジェクトのファーストレビューの通知が来て、パワーポイントプレゼンを作るのがタスクの一つだった。このチームでは、結局努力するのが自分だけになるって承知した上でベンと組んだんだけど、さすがに自分が全部やる一方で彼が何の心配もなく協力もせずにただの観客のようにいるのは本当に腹立たしかった。だから、彼にもタスクの半分を任せたんだけど、適当に何とか作っただけのごちゃごちゃなプレゼンを返してきて、さらに腹が立った。そのとき、プロジェクトの予算も計画する必要があって、それについて彼に話しかけたら、「俺が半分出す」って言われた。最初はまいっかと思ったけど、友達みんなに「お前が全部やるからには少なくとも費用の60%あいつに負担させなよ」って言われて、私も確かにその通りだと思った。でも、それを自分で考えなかった自分にちょっと情けなく感じた。また彼に話しかけると「半分以上は一銭も出さない、問題があるなら好きにしろ」って言われてすごく呆れた。なんて奴だ、こいつ..。🧍‍♀️こんな態度じゃ彼とはプロジェクトなんか絶対にできないと思って、学部長にお願いして、グループを変えてもらえるか聞いてみた。本当に変えてくれるかどうかはわからなかったけど、とりあえず聞いてみたかった。最初は無理だと言われた。「今更言われても困るわ。もう全部決まってるし、今それを動かすとややこしくなる。それに、彼は一人では何もできないし、そのまま放っておいたら絶対に落ちるから、あなたみたいな学生が必要なんだ。彼を合格させるためにはね。彼は成績も悪いし、再試験もたくさん残ってるし、可哀想だから、彼もあなたたちと一緒に卒業できるように協力してくれない？」って言われた。一体何が起こってるんだ、この大学で 😭。呆然としたまま戻ると、彼の笑い顔を見てカンカンになった。ああああもう <:reeee:585700976707502090>  。

数日後また学部長に話に行って、状況の説明をした。「両親は反対しています。プロジェクトの費用は払わないと言っています。このままでは学部長に直接話に行くと言っています。」というと、すぐグループを変えさせてくれた。この国ではね、親とか他の大人が関わらないと、学生の意見なんて全然尊重されないの。またグループ無しになった私は恥を捨てて最初にジョンに聞くと「それはちょっと。。もう一人いるから。。」とか言われて、また他のグループに聞いてみるとようやく一つのグループが組ませてくれた。

というわけで、学びがいっぱいだった一年だったなぁ。自分の価値をちゃんと理解して、少しは自己主張しないとダメだなって感じた。これからも頑張るぞ 💪 長くなっちゃったけど、最後まで読んでくれてありがとう！2025年もよろしくね！`],
    },
  },
  {
    day: 29,
    en: {
      userID: '741428429018103928',
      data: [`December 29th 2024

Hello my friends.  
I am very honered to be able to paticipate in this event again this year.  This time, I would like to write about my health condition and my thought on meal.  

「 Enjoy eating 」

I am diabetic patient.  I have been battling illness for over 20  years.  I don't think there will be a complate cure for this disease.  Even though I know it's not curable, I wish it could be.  However, the possibility of various complications is also very high.  But I must skillfully interact with the disease.  Dietary restrictions are also required.  But I love eating.  Food is a simple pleasure.  
I try to eat my food slowly and chew it well.    
Eating is my favorite thing. 
I hope you enjoy eating.  

Thanks for reading my short   
miscellaneous essays.  

I wish you a happy new year. 
<:bow2:398262327843225613>`],
    },
    jp: {
      userID: '191837210209812480',
      attachments: [{
        type: 'image',
        file: 'china2024.png',
      }],
      data: [`僕は、お金持ちになりたいです。

いやまぁ、そりゃ誰だってなりたいんですけどね。

お金はいいですね、みんな。僕が初めて正社員になった今年までは働いたことがないので、当然お金を手に入れたこともなかった（両親からの小遣いやお年玉を除いて）。衣食住がちゃんとあったし、別に不自由は感じられなかったが、うちも裕福とは言い難いので欲しいものは基本的に我慢してきました。だからこそ、正社員になって初めての給料を貰ったとき、「これすごい量なんじゃ？？」と思ってしまう。

ちゃんとした大人はこのお金を大切に扱って、使って、あるいは貯金するべきなのでしょう……

いや、でも本当にびっくりしましたよ。欲しいものを自分の手で買うのがこんなに気持ちいいなんて。学生の身じゃ手が届かなかった高い洋服、スマホ、タブレット、バイク、等々……買う前にちゃんと品物を調べて、そして買うときはお店を訪れて、店長や店員に相談して、そして気に入れたものを買って、家に帰ってそれを始めて使う。その全てがずっと思ってたより好きです。

自分がまだ学生の頃、いつも「お金なんか要らないです～自分はもう幸せだから」って思っていたけど、今はどうなんでしょう？もっと幸せになれるのために、お金が要るのかな。切りがあるんでしょうか。この先の自分がどうなるか、ちょっと怖いですけど、まぁこれも人生、ですかね。

とにかく今の僕はもっとお金が欲しいです。<:china2:1240868666237649038> 

（今年のイラストは倉本千奈です。この子超可愛いです。お金持ちでもあります！）`],
    },
  },
  {
    day: 30,
    en: {
      userID: '741412862739611661',
      data: [`## How I enjoyed Stamp Rally   
December 30th, 2024

I have been using Discord for several years, but this is my first time participating in an Advent Calendar. First of all, I would like to thank everyone who contributes to this server and has allowed me to participate.

Now, I would like to write about the most memorable event for me this year—"the stamp rally."　

You might think, "It's just a stamp rally, not much of a big deal as a topic for an Advent Calendar." However, for an introverted person like me, who usually stays indoors, participating in stamp rallies has been quite a challenge.　

 By the way, do you know what a "stamp rally" is? For those who don’t, let me explain.

It’s kind of like a scavenger hunt, but instead of finding items, you visit specific locations to collect stamps. This year, I participated in one from July through September, visiting nine different branches of my favorite store across Japan, including regions like Kanto, Kansai, Tohoku, and Hokkaido.

When I started the stamp rally back in July, I pushed myself—despite my tendency to stay indoors—to get out, take trains, ride the Shinkansen, and eventually even board a plane as the trips progressed. By the time I traveled to Hokkaido, it had become more about sightseeing around the area, using the stamp rally as an excuse, rather than just collecting stamps.

The fact that I did all of this on my own means a lot to me. In the past, I had traveled many times, but always with my husband, who acted as a wonderful tour guide. All I had to do was follow along with him.　

In a way, the stamp rally became an excellent opportunity for me to realize how dependent I had become. It also reminded me of the past, when I had traveled alone to the Philippines and the US as a student.

With this new realization as my guide for the New Year, I want to encourage myself to live a more active and mentally self-sufficient life.  

Thank you for reading!!`],
    },
  },
  {
    day: 31,
    en: {
      userID: '473013785884622848',
      data: [`**Advent Calendar**
Happy New Year’s Eve! Only a little bit left of this year! 
I wrote my essay using my doggo power!

**Review of 2024**
Do you remember your New Year’s resolution from last year?
My goal last year was to set aside one hour every day for studying English. I believe I achieved that resolution. I used Discord during my commute on weekdays and had two English lessons on weekends. From July to late November, however, there were some changes in my real life, and as a result of prioritizing my real life over studying English, I really felt my English speaking skills getting rusty. It was frustrating when I couldn’t express what I wanted to say. Since December, I took part in my company’s English training lessons, interacted with people from the international business department, and attended two small parties at work . I also had the opportunity to explain my team’s work to people from the overseas branch in English. These experience were stimulating. Recently, I’ve been feeling motivated to learn English. 

**My New Year’s Resolution**
First, I plan to decide on my future vision using the backcasting method before setting my goal.
For example, if you want to achieve a specific goal by December 2025, you would start by imagining what your life will look like in December 2025 if that goal is achieved, and then plan the necessary steps to make that future a reality.
My big goal is to change jobs and enjoy my life more.
Some of the small goals I’ve set for myself by December 2025 are to earn an English qualification, take on more projects from the international business department, read recipes in English and cook more international dishes, and take lots of photos! How greedy I am. Just focus on my small goals! Finally, I will write this proverb.
*“It is never too late to be what you might have been.” – George Eliot*
 

Thank you for reading my essay woof! 
Have a great rest of the year. 
May your holiday season be filled with happiness and fond memories ✨`],
    },
    jp: {
      userID: '128369934857273344',
      attachments: [{
        type: 'image',
        file: '44.png',
      }],
      data: [`### アドカレ - Dec 31

やほー、最後の参加者、えすぱーです <a:KyoukoWave:661074526716559381> 
大学の勉強に集中したかったし日本語の練習からやすんでもう三年もアドカレ参加してないけど、いまはただのニンゲンに戻って暇ある。<:Ichika:1286419932174745671>

きょうはすこしフルートの話をしたい。みなさんフルートと聞いて最初に思いうかぶ印象は？たしかに金属でできてて構造が複雑で見ればキラキラワクワク☆<:Emu:1091933215654150234>って感じかもしれんあい、普段クラシックとかジャズでよくつかわれる楽器でしょ。ほかの楽器と比べ、フルートの特性は女みたいな高音の悲鳴でどんな隣人でも良く迷惑かけられること <:YoumuTeehee:601143617075019778> (実は音ピッチが高いほど壁抜けにくくなって <:RyoNerd:1057550503355105324> 低音のがっきより平和をもたらす可能性高い <a:UtsuhoNod:1180292415416967249> )

わたしはね、フルート始めたのは一年前１０月からのことでつい最近一周年記念「ふろーとばーさりー」祝った、ひとりで <:tstareokayfine:790923489417756682> 。はじめての楽器じゃないからやっぱり私にはいちばん難しいところは音色をよくすることとチューニングの調整だとおもう。フルートなら口の形 <a:YoshikaBlow:1146079420289908866>が正しくしてからでないときれいで周りの人に愉快させる音ができないっていうポイントあると分かってるけど、その「ただしい形」は近道はない、身につけるのは何年もかかることでしがたないね <:potatoshrug:530552695459938314>。

「はじめての楽器じゃない」っていえばそれ前には自分でティンホイッスルとリコーダー習ったこともあった。二、三年前まだ大学のルームメイトいたし、ときどき車のなかでテナーリコーダーの練習をしたって今でもはっきり覚えてる 。そのとき、特に東方のアレンジと合わせて演奏の練習が好きで、そのなかにケルト風のアレンジ（[このような笛を中心にしたアレンジ](<https://www.youtube.com/watch?v=AsPzl2uuXV8>) <a:nitorinomnom:1221938257416294491>）が見つけてきにいった。同じくそのあとゆるキャップに紹介されて私ホイッスルよく使うサウンドトラックすきになって習得したくてホイッスルもはじめた（最初練習した曲は[本栖湖のテーマのソロ](<https://youtu.be/uxqUGrkJrBg?si=nOJLxQzB-JRQsl1S&t=237>) <:stargrin:1213068447274242129> ）。

ケルトの音楽はフォークソングっていうジャンルの一種でクラシク音楽の笛の吹き方はなんかすごい違うよね。音少しかすれてもokし豊富な「タップ <a:bcaLazyPokeJiggle:733746912561332354>」 と「カット <:KanadeKnife:1091900574275993640>」 という装飾音とピッチベンドをよく使うスタイル。その装飾音は旋律を飾る役目だけじゃなくて、タンギングほとんどつかれないから音を区切るやくめもある。　その上たいてい長音階だけ使われてるし、普段楽譜使わないジャンルだ。

ケルトだけじゃなく、それぞれの文化は自分の笛があって、ほぼ同じ装飾音使う（たしかに名付け同じくない）けど使う方法がやっぱり違いがある。たとえば、尺八みたいな音すべて装飾音使い放題っていう演奏スタイル、私もだいぶ好き<:lunaowo:1219077623821504623> （[原神からの例](<https://www.youtube.com/watch?v=hgHCJesJkc0>)）。

はい、それ以上です。読んでくれてありがとー
そしてあけおめ <:potatotada:530552696755978250>、よいおとしを <a:bcaLazySnacks:734189995224465468> 。`],
    },
  },
]

export default entries
