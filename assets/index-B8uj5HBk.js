(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const F=[{id:"bell-tower",order:1,map:{x:25,y:32},name:{zh:"钟楼",en:"Bell Tower"},summary:{zh:"古镇的标志性建筑；传说中七宝之一的“氽来钟”就藏在这里。撞一声沉郁洪钟，悠远钟声回荡在蒲汇塘两岸。",en:"A historic landmark of the ancient town; legend says the Floating Bell, one of the seven ancient relics, rests inside. Strike the bronze bell and let its deep chime echo across both banks of Puhuitang River."},tags:{zh:["氽来钟","标志性建筑","晨钟悠扬"],en:["Floating Bell","Landmark","Morning Chime"]},media:{image:"assets/img/spots/bell-tower.webp",fallbackImage:"assets/img/spots/bell-tower.jpg",video:null,audio:"assets/audio/bell-tower.mp3"},quote:{zh:"氽来钟，飞来佛，金字莲花经，神树金鸡玉筷斧。",en:"Floating Bell, Flying Buddha, Golden Lotus Sutra, Sacred Tree, Golden Rooster, Jade Chopsticks and Axe.",author:{zh:"七宝民间传统口诀",en:"Traditional Folk Rhyme of Qibao"}},special:"bell",verified:!0},{id:"puhuitang-bridge",order:2,map:{x:50,y:50},name:{zh:"蒲汇塘桥",en:"Puhuitang Bridge"},summary:{zh:"建于明正德十三年（1518年），已逾五百年历史。三孔石拱跨越蒲汇塘，南北大街以此为轴，形成了老街“非”字形的水乡格局。",en:"Built in 1518 during the Ming dynasty, this five-century-old three-arch stone bridge spans the Puhuitang River, forming the central axis that divides North and South Streets into a classic water-town layout."},tags:{zh:["明代石拱桥","五百年老桥","老街中轴"],en:["Ming Dynasty Bridge","500 Years Old","Town Axis"]},media:{image:"assets/img/spots/puhuitang-bridge.webp",fallbackImage:"assets/img/spots/puhuitang-bridge.jpg",video:null,audio:"assets/audio/puhuitang-bridge.mp3"},quote:{zh:"杨柳披烟看帆影如画，鸬鹚映雨听橹声似歌。",en:"Willows veiled in mist frame sails like a painting; cormorants in the rain echo with oars like a song.",author:{zh:"蒲汇塘桥石刻楹联",en:"Stone Couplet on Puhuitang Bridge"}},special:"bridge",verified:!0},{id:"sliced-mutton",order:3,map:{x:25,y:65},name:{zh:"白切羊肉",en:"Sliced Mutton"},summary:{zh:"八仙桌、长条凳，一盆肉质细嫩的白切羊肉，配一杯老酒或热茶，是老街居民延续至今的生活方式；街巷里还有干蒸圆子等传统吃食。",en:"Around wooden Eight-Immortals tables and long benches, a plate of tender sliced mutton paired with local wine or hot tea remains a cherished daily ritual, alongside steamed glutinous dumplings and savory street fare."},tags:{zh:["白切羊肉","干蒸圆子","早酒热茶"],en:["Sliced Mutton","Steamed Dumplings","Morning Tea"]},media:{image:"assets/img/spots/sliced-mutton.webp",fallbackImage:"assets/img/spots/sliced-mutton.jpg",video:null,audio:"assets/audio/sliced-mutton.mp3"},quote:{zh:"一碟白切羊肉配一盏热茶，在老街临河的木桌旁坐定，便是水乡清晨最踏实的日常。",en:"A plate of sliced mutton with a cup of hot tea by the riverside window is the most grounded morning ritual of the water town.",author:{zh:"七宝老街早茶食俗",en:"Qibao Morning Tea Custom"}},special:"steam",verified:!0},{id:"sweet-snacks",order:4,map:{x:50,y:79},name:{zh:"老味道点心",en:"Old-Time Sweets"},summary:{zh:"铜模具烘出的海棠糕焦香温热，大锅沸水里翻滚的七宝汤圆与七宝方糕软糯甜润，串联起老街南大街代代相传的甜蜜记忆。",en:"Freshly baked Begonia cakes with caramelized crusts, alongside steaming Qibao glutinous rice balls and traditional square rice cakes, carry the enduring sweet memories of South Street through generations of visitors."},tags:{zh:["七宝方糕","七宝汤圆","海棠糕"],en:["Square Rice Cake","Tangyuan","Begonia Cake"]},media:{image:"assets/img/spots/sweet-snacks.webp",fallbackImage:"assets/img/spots/sweet-snacks.jpg",video:null,audio:"assets/audio/sweet-snacks.mp3"},quote:{zh:"蒸笼掀开时白雾升腾，现包现煮的汤团与方糕，裹着江南人岁时节令里的甜润期盼。",en:"When the bamboo steamer lifts in a cloud of white mist, freshly made rice cakes and tangyuan carry the sweet wishes of Jiangnan seasons.",author:{zh:"南大街传统茶点风物志",en:"South Street Pastry Lore"}},special:"steam",verified:!0},{id:"handicraft",order:5,map:{x:75,y:65},name:{zh:"手艺摊",en:"Handicraft Stalls"},summary:{zh:"小铜勺作笔、温热糖浆作墨，转瞬间在石板上绘出游龙锦鲤；街巷间还汇聚了面塑、剪纸、龙凤字等非遗手艺与团扇手作体验。",en:"With a bronze ladle as a brush and molten sugar as ink, golden dragons and koi fish take shape on stone slabs, alongside dough modeling, paper cutting, calligraphy, and fan-painting crafts."},tags:{zh:["非遗糖画","面塑剪纸","团扇体验"],en:["Sugar Painting","Dough & Paper Art","DIY Fan"]},media:{image:"assets/img/spots/handicraft.webp",fallbackImage:"assets/img/spots/handicraft.jpg",video:null,audio:"assets/audio/handicraft.mp3"},quote:{zh:"以勺为笔、以糖为墨，手腕轻转间必须一气呵成，赶在糖丝冷却前定格龙凤麟羽。",en:"With a ladle as brush and molten sugar as ink, every stroke must flow in a single breath before the amber threads cool.",author:{zh:"传统糖画技艺要诀",en:"Traditional Sugar-Painting Craft Lore"}},special:"sugar",verified:!0},{id:"shadow-puppet",order:6,map:{x:24,y:16},name:{zh:"皮影馆",en:"Shadow Puppet Theatre"},summary:{zh:"老街上的七宝皮影艺术馆内，白绢幕后琴锣齐鸣，刻绘精巧的皮影人物在暖黄光影中腾挪起伏，演绎着水乡流传已久的民间故事。",en:"Inside the Qibao Shadow Puppet Museum on the old street, behind translucent silk screens and traditional gongs, finely carved leather figures dance in warm light to enact classic folk tales."},tags:{zh:["江南皮影戏","戏台光影","非遗传承"],en:["Shadow Theatre","Light & Shadow","Folk Heritage"]},media:{image:"assets/img/spots/shadow-puppet.webp",fallbackImage:"assets/img/spots/shadow-puppet.jpg",video:null,audio:"assets/audio/shadow-puppet.mp3"},quote:{zh:"一口道尽千古事，双手对舞百万兵。",en:"A single voice narrates a thousand years of tales; two hands command a million soldiers across the lit screen.",author:{zh:"传统皮影戏台楹联",en:"Classic Shadow Theatre Couplet"}},special:"puppet",verified:!0},{id:"new-qibao",order:7,map:{x:75,y:17},name:{zh:"新七宝",en:"New Qibao"},summary:{zh:"老街旁是七宝万科广场、宝龙城与宝龙美术馆，传统水乡文脉与现代艺术展、潮流市集在此并置，展现出新潮好玩的闵行活力。",en:"Right beside the ancient town stand Qibao Vanke Plaza, Powerlong City, and Powerlong Art Museum, where contemporary exhibitions and vibrant markets meet historic waterways, showcasing the creative energy of Minhang."},tags:{zh:["万科宝龙商圈","宝龙美术馆","新旧并置"],en:["Modern Plazas","Powerlong Art","Old Meets New"]},media:{image:"assets/img/spots/new-qibao.webp",fallbackImage:"assets/img/spots/new-qibao.jpg",video:null,audio:"assets/audio/new-qibao.mp3"},quote:{zh:"青瓦飞檐与当代美术馆隔街相望，千年古镇的慢时光与闵行新城区的活力在此自然相接。",en:"Grey-tiled eaves face contemporary art galleries across the street, where the unhurried pace of an ancient town meets the energy of modern Minhang.",author:{zh:"七宝古今交融漫步记",en:"Qibao Old-Meets-New Walk Note"}},special:"modern",verified:!0}],K="qibao-h5:",N={get(e,n){try{const o=localStorage.getItem(K+e);return o?JSON.parse(o):n}catch(o){return console.warn("localStorage read failed, using memory fallback:",o),n}},set(e,n){try{localStorage.setItem(K+e,JSON.stringify(n))}catch(o){console.warn("localStorage write failed:",o)}},remove(e){try{localStorage.removeItem(K+e)}catch(n){console.warn("localStorage remove failed:",n)}}};function Me(){const n=new URLSearchParams(window.location.search).get("lang");return n==="zh"||n==="en"?n:N.get("lang","zh")==="en"?"en":"zh"}const ce=N.get("collected",[]),Le=new Set(F.map(e=>e.id)),l={lang:Me(),muted:N.get("muted",!0)!==!1,screen:"loading",currentSpotId:null,collected:Array.isArray(ce)?[...new Set(ce.filter(e=>Le.has(e)))]:[]},ie=new Set;function De(e){return ie.add(e),()=>ie.delete(e)}function X(e,n){ie.forEach(o=>{try{o(l,e,n)}catch(t){console.error("Error in state subscriber:",t)}})}function D(e){if(l.screen===e)return;const n=l.screen;l.screen=e,X("screen",{from:n,to:e})}function qe(e){e!=="zh"&&e!=="en"||(l.lang=e,N.set("lang",e),X("lang",e))}function $e(){const e=l.lang==="zh"?"en":"zh";qe(e)}function fe(e){l.muted=!!e,N.set("muted",l.muted),X("muted",l.muted)}function Pe(){fe(!l.muted)}function Q(e){l.currentSpotId=e,X("spot",e)}function ze(e){return l.collected.includes(e)?!1:(l.collected.push(e),N.set("collected",l.collected),X("collected",{spotId:e,total:l.collected.length}),!0)}function pe(){l.collected=[],N.remove("collected"),X("reset",null)}const Re={appTitle:"集七宝",appSubtitle:"千年古镇，一日烟火",loading:"正在煮水沏茶，开启老街画卷...",loadingReady:"老街画卷已就绪，请入画寻宝",enter:"进入老街",start:"开始寻宝",legendTitle:"七宝传说",legendPrev:"上一页",legendNext:"下一页",legendSkip:"跳过传说",legendEnterMap:"前往老街集宝",legendCard1Title:"寺名与镇名",legendCard1Body:"传说，七宝之名来自一座寺。五代时吴越王钱镠曾驻跸于此，把“陆宝”听成了“六宝”，赐下金字莲花经，说这也是一宝。于是庵改名七宝寺，镇以寺名。",legendCard1Note:"以上为民间流传的说法，七宝的建置沿革可参阅地方志。",legendCard2Title:"古传七件宝",legendCard2Hint:"轻触上方宝物图标，查看民间传说来历",legendCard2Note:"七件宝物之说源自民间口耳相传。",treasure1Name:"金字莲花经",treasure1Desc:"传为吴越王钱镠所赐金字写经，奉为镇寺之宝。",treasure2Name:"神树",treasure2Desc:"相传古寺旁有千年古梓，枝叶繁茂，庇佑一方水土。",treasure3Name:"氽来钟",treasure3Desc:"传自水路漂流而至的古铜巨钟，钟声洪亮，声闻数里。",treasure4Name:"飞来佛",treasure4Desc:"相传自远方飞临七宝寺的铁铸佛像，宝相庄严。",treasure5Name:"金鸡",treasure5Desc:"民间传说中破晓报明的灵禽，护佑镇民安居乐业。",treasure6Name:"玉筷",treasure6Desc:"传说中温润生辉的白玉箸，试毒辨味、不染微尘。",treasure7Name:"玉斧",treasure7Desc:"相传为修造古寺殿宇时显迹的神工玉斧。",legendCard3Title:"重集新七宝",legendCard3Body:"传说里的七宝早已散落成谜。今天，我们在老街上重新集七宝——穿行在蒲汇塘两岸的炉灶炊烟与石桥深巷，收集属于当下的市井温度。",progressText:"已集 {n}/7 宝",generatePoster:"生成集章卡",allCollectedNotice:"七件烟火之宝已全部集齐，快生成你的专属集章卡吧！",mapHint:"轻触老街上的印章，探访水乡烟火",mapSchematic:"示意图 · 不按比例",mapGuideText:"首次漫步提示：轻触地图上的「宝」字印章探访老街点位，集满 3 处即可生成集章海报。",mapGuideGotIt:"知道了",mapRiverName:"蒲 汇 塘",mapTownArch:"七宝古镇",mapNorthSt:"北大街",mapSouthSt:"南大街",mapModernHub:"万科 · 宝龙城",mapCompassNorth:"北",spotOrderBadge:"七宝第 0{n} 宝",unverifiedTag:"待核实",collect:"收入囊中",collected:"已收集 ✓",prevSpot:"上一个",nextSpot:"下一个",close:"关闭",soundPlay:"试听场景氛围音",soundPlaying:"正在播放氛围音（点击停止）...",soundNone:"暂无现场录音（点击试听合成氛围音）",quoteLabel:"风物题记",posterTitle:"七宝集章卡",posterBadge:"烟火闵行 · 七宝古镇",posterQuote:"七宝有七宝，最珍贵的，是这一口烟火。",posterIncompleteQuote:"穿梭在蒲汇塘畔，收拢江南深处的生活余温。",posterQuoteEn:"Qibao has seven treasures — and the warmest one is everyday life.",posterIncompleteQuoteEn:"Wandering along Puhuitang River, taking in the warmth of Jiangnan.",posterCollectedMark:"✓ 已入囊中",posterUncollectedMark:"待漫步探访…",posterLocation:"上海闵行 · 七宝古镇",posterAuthor:"《集七宝》项目组",posterSeal:"心动闵行",posterSaveHint:"可点击下载海报；手机也可长按图片保存",posterDownload:"下载海报",posterError:"海报生成失败，请返回老街后重试",posterBack:"返回老街",infoTitle:"关于老街与本作品",infoTransitTitle:"交通指引",infoTransitBody:"乘坐上海轨道交通 9 号线至七宝站，出站步行约 8–10 分钟即可抵达七宝老街牌坊。",infoTicketsTitle:"开放时间与票价",infoTicketsBody:"七宝古镇街区全天免费开放；内部展馆通常于 9:00 至 17:00 开放，部分展馆收费，以景区现场公示为准。",infoTipsTitle:"游览小贴士",infoTipsBody:"老街南北大街巷道较窄，节假日游客较多，建议错峰出行；南大街餐饮茶点集中，临河石板路行走请注意防滑。",infoSightsTitle:"老街其他文化看点",sight1:"张充仁纪念馆",sight2:"棉织坊",sight3:"七宝老行当",sight4:"七宝老酒坊",sight5:"老当铺",sight6:"蟋蟀草堂",sight7:"周氏微雕馆",infoCreditsTitle:"关于《集七宝》",infoCreditsBody:"穿行于七宝古镇千年历史脉络，记录蒲汇塘两岸真实的市井烟火与水乡生活温度。",infoDeclarationTitle:"参赛与版权声明",infoDeclarationBody:"本作品为闵行区“心动闵行·记录美好”网络作品征集活动（主题一：烟火闵行）参赛作品。手绘风矢量示意地图、印章视觉与交互代码由项目组原创制作；字体调用设备原生系统字族；互动音效与江南氛围音基于 Web Audio API 实时程序化合成，无第三方版权纠纷。",infoResetProgress:"重置集章进度",infoResetConfirm:"确定要清空已收集的印章记录吗？",infoResetDone:"已清空集章记录",muteOn:"开启声音",muteOff:"静音",langToggle:"EN",soundError:"音频播放受阻，请轻触屏幕重试",microBellHint:"轻触古钟 · 倾听回响",microBridgeHint:"轻触桥下水面 · 漾起水乡涟漪与轻舟",microSugarHint:"指尖在石板上滑动作画，或切换上方模板描红",microSugarDone:"糖画凝固啦！琥珀流光，好看又甜香！",microSugarReset:"清空重画",sugarModeFree:"自由作画",sugarModeDragon:"描红·游龙",sugarModeFish:"描红·锦鲤",microSteamHint:"轻触碗笼 · 热气升腾",microPuppetHint:"按住皮影人物左右拖动戏耍",microModernHint:"轻触画卷 · 点亮老街旁的新潮流光"},Ne={appTitle:"Treasures of Qibao",appSubtitle:"A Day of Everyday Magic in a Thousand-Year-Old Town",loading:"Steeping tea and unrolling the ancient riverside...",loadingReady:"The ancient town scroll is ready. Step inside!",enter:"Enter Town",start:"Begin Journey",legendTitle:"The Seven Legends",legendPrev:"Prev",legendNext:"Next",legendSkip:"Skip",legendEnterMap:"Explore Old Street",legendCard1Title:"The Temple & The Name",legendCard1Body:"Legend says the town took its name from a temple. A king of the Wuyue kingdom once stayed here, granted a golden lotus sutra, and called it one more treasure — and the temple became the 'Temple of Seven Treasures'.",legendCard1Note:"This is a local legend; the town's documented history can be found in local chronicles.",legendCard2Title:"The Seven Ancient Relics",legendCard2Hint:"Tap each relic icon above to read its folk legend",legendCard2Note:"The story of the seven relics has been passed down through local folklore.",treasure1Name:"Golden Lotus Sutra",treasure1Desc:"A royal scripture written in gold ink, gifted by King Qian Liu of Wuyue.",treasure2Name:"Sacred Tree",treasure2Desc:"A millennial catalpa tree by the ancient temple, sheltering the town.",treasure3Name:"Floating Bell",treasure3Desc:"A bronze bell said to have drifted here by water, its chime echoing for miles.",treasure4Name:"Flying Buddha",treasure4Desc:"An iron Buddha statue said to have arrived from afar according to local lore.",treasure5Name:"Golden Rooster",treasure5Desc:"A mythical auspicious rooster heralding dawn and peace for townsfolk.",treasure6Name:"Jade Chopsticks",treasure6Desc:"Pure white jade chopsticks of legend, untouched by dust.",treasure7Name:"Jade Axe",treasure7Desc:"A legendary jade axe associated with master craftsmanship of the temple.",legendCard3Title:"Treasures of Today",legendCard3Body:"The old treasures have become legend. Today, let's collect a new seven on the old street — wandering along Puhuitang River to gather the living warmth of everyday town life.",progressText:"Collected {n}/7",generatePoster:"Generate Stamp Card",allCollectedNotice:"All seven treasures collected! Generate your stamp card now!",mapHint:"Tap stamps on the map to discover local stories",mapSchematic:"Schematic · Not to scale",mapGuideText:"Tip: Tap the 'Treasure' seals on the map to explore spots. Collect 3 or more to generate your stamp card.",mapGuideGotIt:"Got it",mapRiverName:"Puhuitang River",mapTownArch:"Qibao Arch",mapNorthSt:"North St",mapSouthSt:"South St",mapModernHub:"Vanke · Powerlong",mapCompassNorth:"N",spotOrderBadge:"Treasure 0{n}",unverifiedTag:"To Verify",collect:"Collect",collected:"Collected ✓",prevSpot:"Prev",nextSpot:"Next",close:"Close",soundPlay:"Play Scene Ambience",soundPlaying:"Playing scene ambience (tap to stop)...",soundNone:"No field audio (tap for synthesized sound)",quoteLabel:"Local Lore & Inscriptions",posterTitle:"Qibao Stamp Card",posterBadge:"Vibrant Minhang · Qibao Town",posterQuote:"Qibao has seven treasures — and the warmest one is everyday life.",posterIncompleteQuote:"Wandering along Puhuitang River, taking in the warmth of Jiangnan.",posterQuoteEn:"Qibao has seven treasures — and the warmest one is everyday life.",posterIncompleteQuoteEn:"Wandering along Puhuitang River, taking in the warmth of Jiangnan.",posterCollectedMark:"✓ Collected",posterUncollectedMark:"Awaiting visit…",posterLocation:"Qibao Ancient Town · Minhang, Shanghai",posterAuthor:"By Treasures of Qibao Team",posterSeal:"Minhang",posterSaveHint:"Download your poster, or touch and hold the image to save it",posterDownload:"Download poster",posterError:"Could not create the poster. Return to the map and try again.",posterBack:"Back to Map",infoTitle:"About Qibao & This Work",infoTransitTitle:"Getting Here",infoTransitBody:"Take Shanghai Metro Line 9 to Qibao Station and walk about 8–10 minutes to the Qibao Old Street archway.",infoTicketsTitle:"Hours & Admission",infoTicketsBody:"The historic street area is open all day with free admission; indoor exhibition halls typically open 9:00–17:00, and some charge a fee as posted on site.",infoTipsTitle:"Visitor Tips",infoTipsBody:"The historic alleys are narrow and can be crowded on holidays; off-peak visits are recommended. Watch your step on riverside cobblestones.",infoSightsTitle:"Other Cultural Sights",sight1:"Zhang Chongren Memorial",sight2:"Cotton Weaving Workshop",sight3:"Old Trades House",sight4:"Qibao Distillery",sight5:"Old Pawnshop",sight6:"Cricket House",sight7:"Micro-Carving Hall",infoCreditsTitle:"About Treasures of Qibao",infoCreditsBody:"Strolling through the thousand-year heritage of Qibao, celebrating the enduring warmth of daily life along Puhuitang River.",infoDeclarationTitle:"Entry & Copyright Notice",infoDeclarationBody:"Created for the Minhang District 'Heartfelt Minhang · Recording Beauty' Online Content Call (Theme 1: Bustling Minhang). Vector map, seals, and interactive code are original works by the project team; system font stacks and Web Audio API procedural synthesis are used for full copyright compliance.",infoResetProgress:"Reset Progress",infoResetConfirm:"Clear all collected stamps and start over?",infoResetDone:"Collection progress cleared",muteOn:"Unmute",muteOff:"Mute",langToggle:"中文",soundError:"Audio playback blocked, tap screen to retry",microBellHint:"Tap the bell to hear its resonance",microBridgeHint:"Tap the river to ripple the water and glide the boat",microSugarHint:"Slide finger on slate to draw, or pick a template above",microSugarDone:"Sweet sugar art complete!",microSugarReset:"Clear",sugarModeFree:"Freehand",sugarModeDragon:"Trace: Dragon",sugarModeFish:"Trace: Koi",microSteamHint:"Tap the dish to release warm steam",microPuppetHint:"Drag the shadow puppet left and right",microModernHint:"Tap to illuminate where historic eaves meet modern art"},z={zh:Re,en:Ne};function s(e,n={}){const o=l.lang||"zh";let i=(z[o]||z.zh)[e];return i===void 0&&(i=z.zh[e],i===void 0)?(console.warn(`[i18n] Missing translation key: "${e}"`),e):(n&&typeof n=="object"&&Object.keys(n).forEach(r=>{i=i.replace(new RegExp(`\\{${r}\\}`,"g"),n[r])}),i)}function ee(){document.querySelectorAll("[data-i18n]").forEach(e=>{const n=e.getAttribute("data-i18n");e.textContent=s(n)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const n=e.getAttribute("data-i18n-placeholder");e.setAttribute("placeholder",s(n))}),document.querySelectorAll("[data-i18n-title]").forEach(e=>{const n=e.getAttribute("data-i18n-title");e.setAttribute("title",s(n))}),document.querySelectorAll(".lang-toggle-btn").forEach(e=>{e.textContent=l.lang==="zh"?"EN":"中文"}),document.querySelectorAll(".mute-toggle-btn").forEach(e=>{e.setAttribute("aria-label",l.muted?s("muteOn"):s("muteOff"))})}let c=null,E=null,L=null,P=null,O=null,me=!1;const ye=new Set(Object.keys(Object.assign({})).map(e=>e.split("/").pop()));let Y=0;function q(){if(!c)try{const e=window.AudioContext||window.webkitAudioContext;e&&(c=new e,E=c.createGain(),E.gain.value=l.muted?0:1,E.connect(c.destination))}catch(e){console.warn("[Audio] AudioContext init failed:",e)}c&&c.state==="suspended"&&c.resume().catch(()=>{}),me=!0}function le(){if(!(l.muted||!me)&&!(P||O)){if(!ye.has("bgm.mp3")){J();return}try{const e=new Audio("assets/audio/bgm.mp3");e.loop=!0,e.volume=.28,e.onerror=()=>{P=null,J()};const n=e.play();n&&n.then(()=>{P=e}).catch(()=>{P=null,J()})}catch{J()}}}function J(){if(l.muted||!c||O)return;const e=[261.63,293.66,329.63,392,440,523.25];let n=0;const o=()=>{if(!(l.muted||!c))try{const t=c.createOscillator(),i=c.createGain(),r=c.currentTime,a=e[n%e.length];n=(n+2)%e.length,t.type="sine",t.frequency.setValueAtTime(a,r),i.gain.setValueAtTime(.001,r),i.gain.linearRampToValueAtTime(.035,r+.4),i.gain.exponentialRampToValueAtTime(8e-4,r+2.8),t.connect(i),i.connect(E),t.start(r),t.stop(r+2.9)}catch{}};o(),O=setInterval(o,3400)}function Ie(){if(P){try{P.pause(),P.currentTime=0}catch{}P=null}O&&(clearInterval(O),O=null)}function we(){if(q(),!(l.muted||!c))try{const e=c.currentTime;[220,440,659.25].forEach((n,o)=>{const t=c.createOscillator(),i=c.createGain();t.type=o===0?"sine":"triangle",t.frequency.setValueAtTime(n,e),t.frequency.exponentialRampToValueAtTime(n*.98,e+2.2);const r=o===0?.5:.15/o;i.gain.setValueAtTime(r,e),i.gain.exponentialRampToValueAtTime(.001,e+2.3-o*.4),t.connect(i),i.connect(E),t.start(e),t.stop(e+2.3)})}catch(e){console.warn("Bell chime error:",e)}}function He(){if(q(),!(l.muted||!c))try{const e=c.createOscillator(),n=c.createGain(),o=c.currentTime;e.type="triangle",e.frequency.setValueAtTime(130,o),e.frequency.exponentialRampToValueAtTime(42,o+.32),n.gain.setValueAtTime(.7,o),n.gain.exponentialRampToValueAtTime(.01,o+.36),e.connect(n),n.connect(E),e.start(o),e.stop(o+.36)}catch(e){console.warn("Stamp thud error:",e)}}function ve(){if(q(),!(l.muted||!c))try{const n=Math.floor(c.sampleRate*.7),o=c.createBuffer(1,n,c.sampleRate),t=o.getChannelData(0);for(let d=0;d<n;d++)t[d]=(Math.random()*2-1)*.16;const i=c.createBufferSource();i.buffer=o;const r=c.createBiquadFilter();r.type="bandpass",r.frequency.value=1350;const a=c.createGain(),u=c.currentTime;a.gain.setValueAtTime(.02,u),a.gain.linearRampToValueAtTime(.28,u+.12),a.gain.exponentialRampToValueAtTime(.008,u+.7),i.connect(r),r.connect(a),a.connect(E),i.start(u)}catch(e){console.warn("Steam hiss error:",e)}}function _(){if(q(),!(l.muted||!c))try{const e=c.createOscillator(),n=c.createGain(),o=c.currentTime,t=[523.25,587.33,659.25,783.99,880],i=t[Math.floor(Math.random()*t.length)];e.type="sine",e.frequency.setValueAtTime(i,o),n.gain.setValueAtTime(.18,o),n.gain.exponentialRampToValueAtTime(.008,o+.22),e.connect(n),n.connect(E),e.start(o),e.stop(o+.22)}catch(e){console.warn("Sugar pluck error:",e)}}function re(){if(q(),!(l.muted||!c))try{const n=Math.floor(c.sampleRate*1.8),o=c.createBuffer(1,n,c.sampleRate),t=o.getChannelData(0);let i=0,r=0,a=0;for(let h=0;h<n;h++){const v=Math.random()*2-1;i=.99*i+v*.05,r=.96*r+v*.08,a=.85*a+v*.12,t[h]=(i+r+a)*.25}const u=c.createBufferSource();u.buffer=o;const d=c.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(650,c.currentTime),d.frequency.linearRampToValueAtTime(950,c.currentTime+.9),d.frequency.linearRampToValueAtTime(580,c.currentTime+1.8);const f=c.createGain(),y=c.currentTime;f.gain.setValueAtTime(.01,y),f.gain.linearRampToValueAtTime(.32,y+.4),f.gain.exponentialRampToValueAtTime(.01,y+1.8),u.connect(d),d.connect(f),f.connect(E),u.start(y)}catch(e){console.warn("Water stream error:",e)}}function We(){if(q(),!(l.muted||!c))try{const e=c.currentTime;[370,554.37,740].forEach((n,o)=>{const t=c.createOscillator(),i=c.createGain();t.type=o===1?"sawtooth":"triangle",t.frequency.setValueAtTime(n,e),t.frequency.linearRampToValueAtTime(n*1.04,e+.18),t.frequency.exponentialRampToValueAtTime(n*.99,e+1.2),i.gain.setValueAtTime(.22/(o+1),e),i.gain.exponentialRampToValueAtTime(.002,e+1.3),t.connect(i),i.connect(E),t.start(e),t.stop(e+1.35)})}catch(e){console.warn("Puppet gong error:",e)}}function be(){if(q(),!(l.muted||!c))try{const e=c.currentTime;[329.63,415.3,493.88,622.25].forEach((o,t)=>{const i=c.createOscillator(),r=c.createGain(),a=e+t*.12;i.type="sine",i.frequency.setValueAtTime(o,a),r.gain.setValueAtTime(.001,a),r.gain.linearRampToValueAtTime(.18,a+.04),r.gain.exponentialRampToValueAtTime(.002,a+1.4),i.connect(r),r.connect(E),i.start(a),i.stop(a+1.45)})}catch(e){console.warn("Modern chord error:",e)}}function Ge(e){switch(e){case"bell-tower":we();break;case"puhuitang-bridge":re();break;case"sliced-mutton":case"sweet-snacks":ve();break;case"handicraft":_(),setTimeout(_,180),setTimeout(_,360);break;case"shadow-puppet":We();break;case"new-qibao":be();break;default:re()}}function Qe(e,n,o){if(q(),l.muted)return!1;R();const t=Y;let i=!1;const r=()=>{t===Y&&o&&o(!0)},a=()=>{i||t!==Y||(i=!0,L=null,Ge(n),setTimeout(r,2400))};if(!e||!ye.has(e.split("/").pop()))return a(),!0;try{L=new Audio(e),L.onended=()=>{t===Y&&(i=!0,L=null,r())},L.onerror=()=>{a()};const u=L.play();return u&&u.catch(()=>{a()}),!0}catch{return a(),!0}}function R(){if(Y++,L){try{L.pause(),L.currentTime=0}catch{}L=null}}function Oe(){E&&E.gain.setValueAtTime(l.muted?0:1,c.currentTime),l.muted?(R(),Ie()):le()}let Se=!1;function Ve(){const e=document.querySelector("#btn-enter-app"),n=document.querySelector("#loading-progress-bar"),o=document.querySelector("#loading-progress-num"),t=document.querySelector("#loading-text-desc");let i=0;const r=new Image;r.src="assets/img/cover.webp";const a=setInterval(()=>{i=Math.min(100,i+20),n&&(n.style.width=`${i}%`),o&&(o.textContent=`${i}%`),i>=100&&(clearInterval(a),Se=!0,t&&(t.setAttribute("data-i18n","loadingReady"),t.textContent=s("loadingReady")),e&&(e.style.display="inline-flex"))},140);e&&e.addEventListener("click",()=>{q(),l.muted||le(),D("cover")})}function Xe(){const e=document.querySelector("#loading-text-desc");if(e){const n=Se?"loadingReady":"loading";e.setAttribute("data-i18n",n),e.textContent=s(n)}}function Ye(){const e=document.querySelector("#btn-start-journey");e&&e.addEventListener("click",()=>{D("legend")})}let C=0,te=0;const Ze=['<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="7" width="22" height="26" rx="2"/><line x1="14" y1="13" x2="26" y2="13"/><line x1="14" y1="19" x2="26" y2="19"/><path d="M16 26 Q20 22 24 26"/></svg>','<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 34 V21"/><path d="M12 22 C8 16 14 8 20 10 C26 8 32 16 28 22 Z"/><line x1="15" y1="34" x2="25" y2="34"/></svg>','<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 9 C13 9 11 20 9 29 H31 C29 20 27 9 20 9 Z"/><circle cx="20" cy="32" r="2.5"/><path d="M8 35 Q20 32 32 35"/></svg>','<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="14" r="4"/><path d="M13 29 C13 21 27 21 27 29 Z"/><path d="M10 32 Q20 35 30 32"/></svg>','<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 26 C15 18 22 14 26 17 C29 19 28 26 22 28 Z"/><path d="M24 14 L26 11 L28 15"/><path d="M15 24 Q10 20 11 27"/><line x1="20" y1="28" x2="20" y2="34"/></svg>','<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="14" y1="8" x2="18" y2="33"/><line x1="25" y1="8" x2="22" y2="33"/></svg>','<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><line x1="14" y1="9" x2="14" y2="33"/><path d="M14 12 H25 C29 16 29 22 25 26 H14 Z"/></svg>'];function je(){document.querySelector("#screen-legend")&&(xe(),Ue(),_e())}function Je(){xe(),Z(C)}function xe(){const e=document.querySelector("#legend-cards-wrapper");if(!e)return;const n=Ze.map((i,r)=>{const a=r+1;return`
      <button type="button" class="treasure-icon-btn ${r===te?"active":""}" data-treasure-idx="${r}" aria-label="${s(`treasure${a}Name`)}">
        <span class="treasure-svg-wrap">${i}</span>
        <span class="treasure-name">${s(`treasure${a}Name`)}</span>
      </button>
    `}).join(""),o=te+1;e.innerHTML=`
    <!-- Card 1 -->
    <div class="legend-card ${C===0?"active":""}" data-index="0">
      <div class="legend-card-header">
        <span class="legend-badge">01</span>
        <h3 class="legend-card-title">${s("legendCard1Title")}</h3>
      </div>
      <p class="legend-card-body">${s("legendCard1Body")}</p>
      <p class="legend-card-note">${s("legendCard1Note")}</p>
    </div>

    <!-- Card 2 -->
    <div class="legend-card ${C===1?"active":""}" data-index="1">
      <div class="legend-card-header">
        <span class="legend-badge">02</span>
        <h3 class="legend-card-title">${s("legendCard2Title")}</h3>
      </div>
      <p class="legend-tap-hint">${s("legendCard2Hint")}</p>
      <div class="treasures-icon-row" id="treasures-icon-row">
        ${n}
      </div>
      <div class="treasure-detail-popup" id="treasure-detail-popup">
        <strong class="treasure-popup-title" id="treasure-popup-title">${s(`treasure${o}Name`)}</strong>
        <p class="treasure-popup-desc" id="treasure-popup-desc">${s(`treasure${o}Desc`)}</p>
      </div>
      <p class="legend-card-note" style="margin-top: 8px;">${s("legendCard2Note")}</p>
    </div>

    <!-- Card 3 -->
    <div class="legend-card ${C===2?"active":""}" data-index="2">
      <div class="legend-card-header">
        <span class="legend-badge">03</span>
        <h3 class="legend-card-title">${s("legendCard3Title")}</h3>
      </div>
      <p class="legend-card-body">${s("legendCard3Body")}</p>
      <div style="margin-top: 20px;">
        <button id="btn-enter-map-direct" class="btn-primary-big">
          ${s("legendEnterMap")}
        </button>
      </div>
    </div>
  `,e.querySelectorAll(".treasure-icon-btn").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.getAttribute("data-treasure-idx"),10);te=r,e.querySelectorAll(".treasure-icon-btn").forEach((f,y)=>{f.classList.toggle("active",y===r)});const a=r+1,u=e.querySelector("#treasure-popup-title"),d=e.querySelector("#treasure-popup-desc");u&&(u.textContent=s(`treasure${a}Name`)),d&&(d.textContent=s(`treasure${a}Desc`))})});const t=document.querySelector("#btn-enter-map-direct");t&&t.addEventListener("click",()=>{D("hub")})}function Ue(){const e=document.querySelector("#legend-prev-btn"),n=document.querySelector("#legend-next-btn"),o=document.querySelector("#legend-skip-btn");e&&e.addEventListener("click",()=>{C>0&&Z(C-1)}),n&&n.addEventListener("click",()=>{C<2?Z(C+1):D("hub")}),o&&o.addEventListener("click",()=>{D("hub")})}function _e(){const e=document.querySelector("#legend-cards-wrapper");if(!e)return;let n=0,o=0,t=!1;e.addEventListener("touchstart",i=>{!i.touches||!i.touches.length||(t=!i.target.closest(".treasures-icon-row"),n=i.touches[0].clientX,o=i.touches[0].clientY)},{passive:!0}),e.addEventListener("touchend",i=>{if(!t||(t=!1,!i.changedTouches||!i.changedTouches.length))return;const r=i.changedTouches[0].clientX-n,a=i.changedTouches[0].clientY-o;Math.abs(r)>45&&Math.abs(r)>Math.abs(a)*1.2&&(r<0&&C<2?Z(C+1):r>0&&C>0&&Z(C-1))},{passive:!0})}function Z(e){C=e,document.querySelectorAll(".legend-card").forEach((t,i)=>{t.classList.toggle("active",i===e)}),document.querySelectorAll(".legend-dots .dot").forEach((t,i)=>{t.classList.toggle("active",i===e)});const n=document.querySelector("#legend-prev-btn"),o=document.querySelector("#legend-next-btn");n&&(n.style.visibility=e===0?"hidden":"visible"),o&&(o.style.display=e===2?"none":"inline-flex",o.textContent=s("legendNext"))}const U=440,ne=760;function Ke(e=[],n=[],o="zh"){const t=o==="en",i=e.map(a=>{const u=a.map&&typeof a.map.x=="number"?a.map.x:50,d=a.map&&typeof a.map.y=="number"?a.map.y:50,f=Math.round(u/100*U),y=Math.round(d/100*ne),h=n.includes(a.id),v=a.name[o]||a.name.zh,S=t?11.5:13,m=t?Math.max(96,Math.round(v.length*6.6+22)):Math.max(88,Math.round(v.length*14.5+24)),w=Math.round(m/2),b=Math.max(w+8,Math.min(U-w-8,f))-f;return`
      <g class="svg-map-hotspot ${h?"collected":"uncollected"}" 
         data-spot-id="${a.id}"
         role="button"
         tabindex="0"
         aria-label="${v}"
         transform="translate(${f}, ${y})"
         style="cursor: pointer;">
        
        <!-- 48x48 Invisible Hit Area for >= 44px Touch Accessibility -->
        <rect x="-32" y="-32" width="64" height="64" fill="transparent"/>

        <!-- Ripple Pulse Circle -->
        <circle class="hotspot-ping-wave" cx="0" cy="0" r="28" fill="${h?"#B5352B":"#E0A030"}" fill-opacity="${h?"0.15":"0.4"}"/>
        
        <!-- Main Circular Badge -->
        <circle cx="0" cy="0" r="22" fill="${h?"#B5352B":"#FFF9EE"}" stroke="${h?"#821E17":"#D18E1E"}" stroke-width="3" filter="url(#hotspotShadow)"/>
        
        <!-- Icon Symbol inside Badge -->
        <text x="0" y="7" text-anchor="middle" font-family="'Songti SC', 'Noto Serif SC', serif" font-size="18" font-weight="900" fill="${h?"#FFFFFF":"#8A5808"}">
          ${h?"✓":"宝"}
        </text>

        <!-- Order Number Bubble -->
        <g transform="translate(15, -15)">
          <circle cx="0" cy="0" r="9" fill="#2F3E46"/>
          <text x="0" y="3.5" text-anchor="middle" font-family="'PingFang SC', sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">
            ${a.order}
          </text>
        </g>

        <!-- Dynamic-Width Label Banner Below Hotspot -->
        <g transform="translate(${b}, 35)">
          <rect x="${-w}" y="-13" width="${m}" height="26" rx="13" fill="#FCF8F2" fill-opacity="0.96" stroke="#2F3E46" stroke-width="1.5" filter="url(#hotspotShadow)"/>
          <text x="0" y="4" text-anchor="middle" font-family="'PingFang SC', sans-serif" font-size="${S}" font-weight="bold" fill="#2F3E46">
            ${v}
          </text>
        </g>
      </g>
    `}).join(""),r=t?`
      <rect x="192" y="192" width="56" height="24" rx="4" fill="#FFFFFF" fill-opacity="0.92" stroke="#2F3E46" stroke-width="1"/>
      <text x="220" y="208" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2F3E46" text-anchor="middle">${s("mapNorthSt")}</text>

      <rect x="192" y="455" width="56" height="24" rx="4" fill="#FFFFFF" fill-opacity="0.92" stroke="#2F3E46" stroke-width="1"/>
      <text x="220" y="471" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#B5352B" text-anchor="middle">${s("mapSouthSt")}</text>
    `:`
      <rect x="206" y="180" width="28" height="60" rx="4" fill="#FFFFFF" fill-opacity="0.9" stroke="#2F3E46" stroke-width="1"/>
      <text x="220" y="198" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#2F3E46" text-anchor="middle">北</text>
      <text x="220" y="215" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#2F3E46" text-anchor="middle">大</text>
      <text x="220" y="232" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#2F3E46" text-anchor="middle">街</text>

      <rect x="206" y="440" width="28" height="60" rx="4" fill="#FFFFFF" fill-opacity="0.9" stroke="#2F3E46" stroke-width="1"/>
      <text x="220" y="458" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#B5352B" text-anchor="middle">南</text>
      <text x="220" y="475" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#B5352B" text-anchor="middle">大</text>
      <text x="220" y="492" font-family="'Songti SC', serif" font-size="12" font-weight="bold" fill="#B5352B" text-anchor="middle">街</text>
    `;return`
  <svg viewBox="0 0 ${U} ${ne}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="map-svg" preserveAspectRatio="xMidYMid meet" role="group" aria-label="${s("mapTownArch")}">
    <defs>
      <!-- Rice Paper Parchment Base -->
      <linearGradient id="mapParchment" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FAF5EC"/>
        <stop offset="50%" stop-color="#F4ECE1"/>
        <stop offset="100%" stop-color="#ECE3D3"/>
      </linearGradient>

      <!-- Water Flow Gradient -->
      <linearGradient id="waterFlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#558376" stop-opacity="0.6"/>
        <stop offset="50%" stop-color="#6E9A8E" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#4B7468" stop-opacity="0.6"/>
      </linearGradient>

      <!-- Cobblestone Street Gradient -->
      <linearGradient id="streetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#DDD3C3"/>
        <stop offset="100%" stop-color="#CEC2AE"/>
      </linearGradient>

      <filter id="hotspotShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
      </filter>
    </defs>

    <!-- Map Background -->
    <rect width="${U}" height="${ne}" fill="url(#mapParchment)"/>

    <!-- Courtyard & Architecture Blocks (Background Context) -->
    <g fill="#43555D" fill-opacity="0.08" stroke="#2F3E46" stroke-opacity="0.18" stroke-width="1.5">
      <!-- North-West Block -->
      <rect x="25" y="100" width="150" height="70" rx="4"/>
      <rect x="25" y="190" width="150" height="90" rx="4"/>
      <!-- North-East Block (Modern Vanke & Powerlong Hub) -->
      <rect x="265" y="90" width="150" height="85" rx="8" fill="#5E8B7E" fill-opacity="0.14" stroke="#5E8B7E" stroke-opacity="0.35"/>
      <rect x="265" y="195" width="150" height="90" rx="4"/>

      <!-- South-West Block -->
      <rect x="25" y="460" width="150" height="95" rx="4"/>
      <rect x="25" y="565" width="150" height="95" rx="4"/>
      <!-- South-East Block -->
      <rect x="265" y="460" width="150" height="95" rx="4"/>
      <rect x="265" y="565" width="150" height="95" rx="4"/>
    </g>

    <!-- Chinese Roof Eaves Accents (Ma-tou Walls) -->
    <g stroke="#2F3E46" stroke-width="2" stroke-opacity="0.35" fill="none">
      <path d="M25 100 L45 92 L65 100"/>
      <path d="M110 100 L130 92 L150 100"/>
      <path d="M25 460 L45 452 L65 460"/>
      <path d="M265 460 L285 452 L305 460"/>
    </g>

    <!-- Main Axis: North Street (北大街) -->
    <rect x="195" y="70" width="50" height="280" fill="url(#streetGrad)" rx="4"/>
    <!-- Main Axis: South Street (南大街) -->
    <rect x="195" y="410" width="50" height="285" fill="url(#streetGrad)" rx="4"/>

    <!-- "非"-Shaped Lateral Alleys (横向支巷) -->
    <g fill="url(#streetGrad)">
      <!-- North Alleys -->
      <rect x="35" y="125" width="165" height="26" rx="3"/>
      <rect x="240" y="130" width="165" height="26" rx="3"/>
      <rect x="35" y="245" width="165" height="26" rx="3"/>
      <rect x="240" y="245" width="165" height="26" rx="3"/>

      <!-- South Alleys -->
      <rect x="35" y="515" width="165" height="26" rx="3"/>
      <rect x="240" y="515" width="165" height="26" rx="3"/>
      <rect x="35" y="625" width="165" height="26" rx="3"/>
      <rect x="240" y="625" width="165" height="26" rx="3"/>
    </g>

    <!-- Puhuitang River (蒲汇塘水系横贯全屏) -->
    <g id="river-layer">
      <!-- Water Bed -->
      <path d="M-10,345 C90,335 150,355 220,355 C290,355 350,335 450,345 L450,415 C350,405 290,425 220,425 C150,425 90,405 -10,415 Z" fill="url(#waterFlow)"/>

      <!-- River Wave Waterlines -->
      <path d="M0,365 Q110,350 220,365 T440,360" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="2" fill="none"/>
      <path d="M0,385 Q130,370 260,385 T440,380" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="2" fill="none"/>
      <path d="M0,405 Q110,390 220,405 T440,400" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="2" fill="none"/>

      <!-- River Text Watermark -->
      <text x="${t?28:52}" y="386" font-family="'Songti SC', serif" font-size="${t?14:18}" font-weight="bold" fill="#2F3E46" fill-opacity="0.55" letter-spacing="${t?1:5}">${s("mapRiverName")}</text>
    </g>

    <!-- Centerpiece: Puhuitang Stone Bridge (蒲汇塘桥) -->
    <g id="puhuitang-bridge-visual">
      <!-- Bridge Body -->
      <path d="M190,345 C200,340 240,340 250,345 L250,415 C240,420 200,420 190,415 Z" fill="#E8E0D2" stroke="#5E4E3E" stroke-width="2.5"/>

      <!-- Three Arch Openings on Water -->
      <path d="M205,378 Q210,370 215,378 Z" fill="#2E4A43"/>
      <path d="M217,385 Q222,374 227,385 Z" fill="#2E4A43"/>
      <path d="M229,392 Q234,384 239,392 Z" fill="#2E4A43"/>

      <!-- Bridge Balustrades -->
      <line x1="192" y1="345" x2="192" y2="415" stroke="#7A6855" stroke-width="2.5"/>
      <line x1="248" y1="345" x2="248" y2="415" stroke="#7A6855" stroke-width="2.5"/>
    </g>

    <!-- Riverside Green Willows (杨柳依依) -->
    <g fill="#628F6E" fill-opacity="0.8">
      <circle cx="160" cy="342" r="14"/>
      <circle cx="174" cy="338" r="10"/>
      <circle cx="280" cy="422" r="15"/>
      <circle cx="295" cy="426" r="11"/>
    </g>

    <!-- North Paifang Archway (北大街牌坊) -->
    <g transform="translate(175, 56)">
      <rect x="0" y="0" width="90" height="20" rx="3" fill="#B5352B"/>
      <text x="45" y="14" font-family="'Songti SC', serif" font-size="${t?10:11}" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="${t?.5:1.5}">${s("mapTownArch")}</text>
      <rect x="10" y="20" width="6" height="14" fill="#6E533F"/>
      <rect x="74" y="20" width="6" height="14" fill="#6E533F"/>
    </g>

    <!-- Street Badges -->
    ${r}

    <!-- Modern District Tag (Top Right) -->
    <text x="340" y="103" font-family="'PingFang SC', sans-serif" font-size="11.5" font-weight="bold" fill="#426C60" text-anchor="middle">${s("mapModernHub")}</text>

    <!-- Compass Rose (Top Right Safe Zone) -->
    <g transform="translate(376, 76)">
      <circle cx="0" cy="0" r="14" fill="none" stroke="#2F3E46" stroke-opacity="0.3" stroke-width="1.5"/>
      <polygon points="0,-12 3,0 0,-2 -3,0" fill="#B5352B"/>
      <polygon points="0,12 3,0 0,2 -3,0" fill="#2F3E46" fill-opacity="0.4"/>
      <text x="0" y="-16" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#B5352B" text-anchor="middle">${s("mapCompassNorth")}</text>
    </g>

    <!-- Interactive Hotspots Layer -->
    <g id="svg-hotspots-group">
      ${i}
    </g>
  </svg>
  `}let ae=!1;function et(){ke(),nt(),ot()}function V(){tt(),ke()}function ke(){const e=document.querySelector("#map-svg-container");e&&(e.innerHTML=Ke(F,l.collected,l.lang),e.querySelectorAll(".svg-map-hotspot").forEach(n=>{const o=t=>{t.stopPropagation(),Te();const i=n.getAttribute("data-spot-id");i&&Q(i)};n.addEventListener("click",o),n.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),o(t))})}))}function tt(){const e=document.querySelector("#hub-progress-badge"),n=document.querySelector("#btn-hub-generate-poster"),o=l.collected.length;e&&(e.textContent=s("progressText",{n:o})),n&&(o>=3?(n.style.display="inline-flex",n.textContent=s("generatePoster")):n.style.display="none")}function nt(){const e=document.querySelector("#btn-hub-generate-poster");e&&e.addEventListener("click",()=>{D("poster")})}function ot(){const e=document.querySelector("#hub-first-guide"),n=document.querySelector("#btn-close-hub-guide");if(e){try{ae=sessionStorage.getItem("qibao-h5:guide-seen")==="1"}catch{}!ae&&l.collected.length===0&&(e.style.display="flex"),n&&n.addEventListener("click",Te)}}function Te(){ae=!0;const e=document.querySelector("#hub-first-guide");e&&(e.style.display="none");try{sessionStorage.setItem("qibao-h5:guide-seen","1")}catch{}}function it(e,n,o){const t=[["#F4EDE1","#DFD3C3"],["#EAE6DF","#CFD8D3"],["#F6EFE9","#EAD5C3"],["#FDF6ED","#F0DFCA"],["#FBF5E6","#EADBB6"],["#EDE7DD","#D3C7B6"],["#E4EBEC","#CBD7D8"]],i=t[(o-1)%t.length]||["#F4EDE1","#DFD3C3"],r=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${i[0]}"/>
        <stop offset="100%" stop-color="${i[1]}"/>
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.15"/>
      </filter>
    </defs>
    <rect width="600" height="400" fill="url(#grad)"/>
    
    <!-- Decorative Water Patterns -->
    <path d="M0,280 C150,260 300,310 450,280 C520,265 570,275 600,285 L600,400 L0,400 Z" fill="#5E8B7E" fill-opacity="0.15"/>
    <path d="M0,320 C180,300 320,350 480,320 C540,310 580,320 600,330 L600,400 L0,400 Z" fill="#5E8B7E" fill-opacity="0.2"/>

    <!-- Decorative Border -->
    <rect x="24" y="24" width="552" height="352" fill="none" stroke="#2F3E46" stroke-width="1.5" stroke-opacity="0.25" rx="10"/>

    <!-- Traditional Seal Motif -->
    <g transform="translate(480, 50)" filter="url(#shadow)">
      <rect width="64" height="64" rx="8" fill="#B5352B"/>
      <text x="32" y="44" font-family="serif" font-size="28" font-weight="bold" fill="#FFFFFF" text-anchor="middle">宝</text>
    </g>

    <!-- Spot Index Badge -->
    <text x="50" y="70" font-family="sans-serif" font-size="14" font-weight="bold" fill="#5E8B7E" letter-spacing="2">0${o} · 七宝风物</text>

    <!-- Spot Title (Chinese) -->
    <text x="50" y="160" font-family="'Songti SC', 'Noto Serif SC', serif" font-size="44" font-weight="bold" fill="#2F3E46" letter-spacing="3">${e}</text>

    <!-- Spot Title (English) -->
    <text x="50" y="200" font-family="sans-serif" font-size="20" fill="#596D76" font-weight="500">${n}</text>
  </svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(r)}`}function rt(e){e.innerHTML=`
    <div class="micro-bell-box">
      <div class="bell-visual-wrap" id="bell-interactive-target">
        <svg class="bell-icon-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Bell Hanger -->
          <rect x="44" y="8" width="12" height="14" rx="3" fill="#6E533F"/>
          <!-- Bell Body -->
          <path d="M50 20 C32 20 25 50 20 75 C20 78 23 82 28 82 L72 82 C77 82 80 78 80 75 C75 50 68 20 50 20 Z" fill="#C59B27" stroke="#8C6611" stroke-width="2"/>
          <!-- Bell Rim -->
          <ellipse cx="50" cy="82" rx="26" ry="6" fill="#A87E18"/>
          <!-- Bell Clapper -->
          <circle cx="50" cy="87" r="6" fill="#5E430B"/>
          <!-- Ancient Dragon Inscription Motif -->
          <path d="M35 52 Q50 44 65 52" stroke="#8C6611" stroke-width="2" fill="none"/>
        </svg>
      </div>
      <p style="font-size: 13px; color: var(--ink-light); margin-top: 8px;">
        ${s("microBellHint")}
      </p>
    </div>
  `;const n=e.querySelector("#bell-interactive-target"),o=e.querySelector(".bell-icon-svg");n.addEventListener("click",t=>{we(),o.classList.remove("ringing"),o.offsetWidth,o.classList.add("ringing");const i=document.createElement("div");i.className="bell-ripple",n.appendChild(i),setTimeout(()=>{i.remove()},1e3)})}function at(e){e.innerHTML=`
    <div class="micro-bridge-box" id="bridge-water-stage" role="button" tabindex="0" aria-label="${s("microBridgeHint")}">
      <svg viewBox="0 0 320 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; pointer-events: none;">
        <defs>
          <linearGradient id="bridgeRiverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#DCE7E3"/>
            <stop offset="55%" stop-color="#6B968B"/>
            <stop offset="100%" stop-color="#487066"/>
          </linearGradient>
        </defs>
        <!-- Sky & Mist Background -->
        <rect width="320" height="72" fill="#F4EDE1"/>
        <!-- River Water -->
        <rect y="64" width="320" height="66" fill="url(#bridgeRiverGrad)"/>
        <!-- Water Wave Lines -->
        <path d="M10 86 Q80 80 160 86 T310 84" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" fill="none"/>
        <path d="M25 106 Q105 100 185 106 T305 104" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none"/>

        <!-- Gliding Wooden Boat -->
        <g id="bridge-boat-el" style="transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);">
          <path d="M128 84 L192 84 L182 94 L138 94 Z" fill="#5A3E28"/>
          <path d="M144 84 C148 73 172 73 176 84 Z" fill="#3B2818"/>
          <line x1="184" y1="88" x2="198" y2="96" stroke="#7A563B" stroke-width="2" stroke-linecap="round"/>
        </g>

        <!-- Three-Arch Stone Bridge Silhouette -->
        <path d="M0 68 Q160 22 320 68 L320 76 L262 76 A24 22 0 0 0 214 76 L202 76 A42 36 0 0 0 118 76 L106 76 A24 22 0 0 0 58 76 L0 76 Z" fill="#D5C7B2" stroke="#5E4E3E" stroke-width="2"/>
        <!-- Bridge Balustrade Posts -->
        <line x1="80" y1="45" x2="80" y2="53" stroke="#5E4E3E" stroke-width="2"/>
        <line x1="120" y1="36" x2="120" y2="45" stroke="#5E4E3E" stroke-width="2"/>
        <line x1="160" y1="32" x2="160" y2="42" stroke="#5E4E3E" stroke-width="2"/>
        <line x1="200" y1="36" x2="200" y2="45" stroke="#5E4E3E" stroke-width="2"/>
        <line x1="240" y1="45" x2="240" y2="53" stroke="#5E4E3E" stroke-width="2"/>
      </svg>
      <div class="bridge-ripple-layer" id="bridge-ripple-layer"></div>
      <div class="micro-overlay-hint">
        <span>${s("microBridgeHint")}</span>
      </div>
    </div>
  `;const n=e.querySelector("#bridge-water-stage"),o=e.querySelector("#bridge-boat-el"),t=e.querySelector("#bridge-ripple-layer");let i=0;const r=[-52,0,52,-26,26];let a=0;function u(d){if(re(),a=(a+1)%r.length,i=r[a],o&&(o.style.transform=`translateX(${i}px)`),t&&n){const f=n.getBoundingClientRect(),y=d&&(d.touches?d.touches[0].clientX:d.clientX),h=d&&(d.touches?d.touches[0].clientY:d.clientY),v=y?Math.max(30,Math.min(f.width-30,y-f.left)):f.width/2,S=h?Math.max(70,Math.min(f.height-16,h-f.top)):f.height*.72,m=document.createElement("span");m.className="bridge-water-ripple",m.style.left=`${v}px`,m.style.top=`${S}px`,t.appendChild(m),setTimeout(()=>m.remove(),1100)}}n&&(n.addEventListener("click",u),n.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),u(null))}))}const st={free:[],dragon:[[[75,48],[95,32],[122,36],[132,54],[112,68],[88,66],[105,88],[138,102],[172,82],[198,56],[228,62],[248,92],[226,122],[192,128],[160,118]],[[96,32],[86,16],[108,22]],[[132,54],[158,48],[174,58]]],fish:[[[68,82],[105,46],[162,44],[208,68],[254,42],[242,82],[256,122],[208,94],[162,118],[105,116],[68,82]],[[128,45],[148,24],[178,44]],[[124,92],[146,112],[162,96]]]};function lt(e){let n="dragon";e.innerHTML=`
    <div class="micro-sugar-box">
      <div class="sugar-template-bar" role="group" aria-label="糖画模板选择">
        <button type="button" class="sugar-tpl-btn ${n==="dragon"?"active":""}" data-tpl="dragon">${s("sugarModeDragon")}</button>
        <button type="button" class="sugar-tpl-btn ${n==="fish"?"active":""}" data-tpl="fish">${s("sugarModeFish")}</button>
        <button type="button" class="sugar-tpl-btn ${n==="free"?"active":""}" data-tpl="free">${s("sugarModeFree")}</button>
      </div>
      <div class="sugar-canvas-wrap">
        <canvas class="sugar-canvas" width="320" height="160"></canvas>
      </div>
      <div class="sugar-footer-bar">
        <span class="sugar-hint-text">
          ${s("microSugarHint")}
        </span>
        <button type="button" class="sugar-reset-btn">
          ${s("microSugarReset")}
        </button>
      </div>
    </div>
  `;const o=e.querySelector(".sugar-canvas"),t=o.getContext("2d"),i=e.querySelector(".sugar-hint-text"),r=e.querySelector(".sugar-reset-btn"),a=e.querySelectorAll(".sugar-tpl-btn");let u=!1,d=0,f=0,y=0;function h(){t.shadowBlur=0,t.fillStyle="#2D3A40",t.fillRect(0,0,o.width,o.height),t.strokeStyle="rgba(255, 255, 255, 0.05)",t.lineWidth=1,t.setLineDash([]);for(let g=0;g<5;g++)t.beginPath(),t.moveTo(0,g*35+10),t.lineTo(o.width,g*35+25),t.stroke();const p=st[n]||[];if(p.length>0){t.save(),t.strokeStyle="rgba(244, 196, 108, 0.38)",t.lineWidth=3,t.lineCap="round",t.lineJoin="round",t.setLineDash([6,6]),p.forEach(x=>{if(x.length){t.beginPath(),t.moveTo(x[0][0],x[0][1]);for(let k=1;k<x.length;k++)t.lineTo(x[k][0],x[k][1]);t.stroke()}});const g=p[0][0];t.setLineDash([]),t.fillStyle="rgba(224, 160, 48, 0.75)",t.beginPath(),t.arc(g[0],g[1],5,0,Math.PI*2),t.fill(),t.restore()}}h();function v(p,g){u=!0,f=p,y=g,_()}function S(p,g){if(!u)return;t.save(),t.setLineDash([]),t.strokeStyle="#E2971B",t.shadowColor="#FAD06C",t.shadowBlur=6,t.lineWidth=5,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(f,y),t.lineTo(p,g),t.stroke(),t.shadowBlur=0,t.strokeStyle="#FFF3C4",t.lineWidth=1.5,t.beginPath(),t.moveTo(f,y),t.lineTo(p,g),t.stroke(),t.restore();const x=Math.hypot(p-f,g-y);d+=x,f=p,y=g,d>280&&(i.textContent=s("microSugarDone"),i.style.color="var(--vermilion)",i.style.fontWeight="bold")}function m(){u=!1}function w(p){const g=o.getBoundingClientRect(),x=p.touches?p.touches[0].clientX:p.clientX,k=p.touches?p.touches[0].clientY:p.clientY;return{x:(x-g.left)*(o.width/g.width),y:(k-g.top)*(o.height/g.height)}}const b=p=>{if(!u)return;const g=w(p);S(g.x,g.y)},M=()=>{m()};o.addEventListener("mousedown",p=>{const g=w(p);v(g.x,g.y)}),window.addEventListener("mousemove",b),window.addEventListener("mouseup",M),o.addEventListener("touchstart",p=>{p.preventDefault();const g=w(p);v(g.x,g.y)},{passive:!1}),o.addEventListener("touchmove",p=>{p.preventDefault();const g=w(p);S(g.x,g.y)},{passive:!1}),o.addEventListener("touchend",m);function B(){d=0,h(),i.textContent=s("microSugarHint"),i.style.color="var(--ink-light)",i.style.fontWeight="normal"}return r.addEventListener("click",B),a.forEach(p=>{p.addEventListener("click",()=>{n=p.getAttribute("data-tpl")||"free",a.forEach(g=>g.classList.toggle("active",g===p)),B()})}),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",M)}}function ct(e,n=!0){const o=n?`
    <svg viewBox="0 0 120 70" width="90" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="60" cy="62" rx="45" ry="7" fill="#2F3E46" fill-opacity="0.15"/>
      <!-- Porcelain Bowl Body -->
      <path d="M15 25 C15 55 105 55 105 25 Z" fill="#FAF6F0" stroke="#3E545E" stroke-width="2.5"/>
      <!-- Bowl Rim -->
      <ellipse cx="60" cy="25" rx="45" ry="10" fill="#FAF6F0" stroke="#3E545E" stroke-width="2.5"/>
      <!-- Steaming Sliced Mutton inside -->
      <ellipse cx="60" cy="24" rx="38" ry="7" fill="#8F6253"/>
      <ellipse cx="52" cy="22" rx="16" ry="4" fill="#E6C8C0"/>
      <ellipse cx="68" cy="23" rx="14" ry="4" fill="#D6B0A6"/>
      <!-- Scallion sprinkles -->
      <circle cx="58" cy="22" r="2.5" fill="#5F9349"/>
      <circle cx="48" cy="24" r="2" fill="#5F9349"/>
      <circle cx="72" cy="21" r="2.5" fill="#5F9349"/>
    </svg>
  `:`
    <svg viewBox="0 0 120 70" width="90" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="60" cy="62" rx="45" ry="7" fill="#2F3E46" fill-opacity="0.15"/>
      <!-- Bamboo Steamer Body -->
      <rect x="20" y="24" width="80" height="32" rx="4" fill="#CDB69B" stroke="#7D6246" stroke-width="2.5"/>
      <ellipse cx="60" cy="24" rx="40" ry="8" fill="#E3D1BC" stroke="#7D6246" stroke-width="2.5"/>
      <!-- Tangyuan / Begonia cake inside -->
      <circle cx="45" cy="22" r="9" fill="#FFFFFF" stroke="#D3C7B6" stroke-width="1.5"/>
      <circle cx="62" cy="20" r="9" fill="#FFFFFF" stroke="#D3C7B6" stroke-width="1.5"/>
      <circle cx="78" cy="22" r="9" fill="#E08B3E" stroke="#8E460E" stroke-width="1.5"/>
    </svg>
  `;e.innerHTML=`
    <div class="micro-steam-box" id="steam-interactive-dish" title="${s("microSteamHint")}">
      <canvas class="steam-canvas" width="300" height="140"></canvas>
      <div class="steam-dish-wrap">
        ${o}
      </div>
      <p style="font-size: 12px; color: var(--ink-light); margin-top: 4px; z-index: 3;">
        ${s("microSteamHint")}
      </p>
    </div>
  `;const t=e.querySelector("#steam-interactive-dish"),i=e.querySelector(".steam-canvas"),r=i.getContext("2d");let a=[],u=null;const d=new Set;let f=!1;class y{constructor(w,b){this.x=w+(Math.random()-.5)*36,this.y=b,this.vx=(Math.random()-.5)*1.2,this.vy=-(1.2+Math.random()*1.8),this.radius=7+Math.random()*8,this.alpha=.55}update(){this.x+=this.vx,this.y+=this.vy,this.radius+=.35,this.alpha-=.012}draw(w){w.save(),w.beginPath(),w.arc(this.x,this.y,this.radius,0,Math.PI*2),w.fillStyle=`rgba(255, 255, 255, ${Math.max(0,this.alpha)})`,w.fill(),w.restore()}}function h(m=!0){if(f)return;m&&ve();const w=i.width/2,b=i.height-35;for(let M=0;M<18;M++){const B=setTimeout(()=>{d.delete(B),!f&&(a.push(new y(w,b)),u||v())},M*30);d.add(B)}}function v(){r.clearRect(0,0,i.width,i.height);for(let m=a.length-1;m>=0;m--)a[m].update(),a[m].draw(r),a[m].alpha<=0&&a.splice(m,1);a.length>0?u=requestAnimationFrame(v):u=null}t.addEventListener("click",h);const S=setTimeout(()=>{d.delete(S),h(!1)},200);return d.add(S),()=>{f=!0,d.forEach(clearTimeout),u&&cancelAnimationFrame(u)}}function dt(e){e.innerHTML=`
    <div class="micro-puppet-box">
      <div class="puppet-actor" id="puppet-target">
        <svg viewBox="0 0 100 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <!-- Operating Bamboo Rods -->
          <line x1="15" y1="160" x2="48" y2="70" stroke="#3A2518" stroke-width="2.5"/>
          <line x1="85" y1="160" x2="52" y2="70" stroke="#3A2518" stroke-width="2.5"/>

          <!-- Shadow Figure Silhouette (Traditional Scholar/General) -->
          <!-- Hat -->
          <path d="M35 22 C35 12 65 12 65 22 L72 26 L28 26 Z" fill="#7A1D16"/>
          <circle cx="50" cy="12" r="5" fill="#C59B27"/>
          <!-- Head profile -->
          <circle cx="50" cy="34" r="12" fill="#1D2A30"/>
          <!-- Beard / Ribbon -->
          <path d="M42 42 Q38 58 44 62" stroke="#1D2A30" stroke-width="2" fill="none"/>
          <!-- Body & Robe -->
          <path d="M36 46 L64 46 L74 110 L26 110 Z" fill="#91271F" stroke="#1D2A30" stroke-width="2"/>
          <!-- Belt -->
          <rect x="34" y="68" width="32" height="8" rx="2" fill="#C59B27"/>
          <!-- Robe Hem Patterns -->
          <path d="M30 96 Q50 90 70 96" stroke="#C59B27" stroke-width="2" fill="none"/>
          <!-- Boots -->
          <rect x="36" y="110" width="10" height="24" rx="3" fill="#1D2A30"/>
          <rect x="54" y="110" width="10" height="24" rx="3" fill="#1D2A30"/>
        </svg>
      </div>
      <div style="position: absolute; bottom: 6px; left: 0; right: 0; text-align: center; pointer-events: none;">
        <span style="font-size: 11px; color: #594D3B; background: rgba(255, 255, 255, 0.7); padding: 2px 8px; border-radius: 10px;">
          ${s("microPuppetHint")}
        </span>
      </div>
    </div>
  `;const n=e.querySelector("#puppet-target"),o=e.querySelector(".micro-puppet-box");let t=!1,i=0,r=0;function a(h){t=!0,i=h-r}function u(h){if(!t)return;const S=o.offsetWidth/2-45;let m=h-i;m=Math.max(-S,Math.min(S,m));const w=m-r;r=m;const b=Math.max(-15,Math.min(15,w*3));n.style.transform=`translateX(calc(-50% + ${r}px)) rotate(${b}deg)`}function d(){t=!1,n.style.transform=`translateX(calc(-50% + ${r}px)) rotate(0deg)`}const f=h=>u(h.clientX),y=h=>{h.touches&&h.touches.length&&u(h.touches[0].clientX)};return n.addEventListener("mousedown",h=>a(h.clientX)),window.addEventListener("mousemove",f),window.addEventListener("mouseup",d),n.addEventListener("touchstart",h=>{a(h.touches[0].clientX)},{passive:!0}),window.addEventListener("touchmove",y,{passive:!0}),window.addEventListener("touchend",d),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",d),window.removeEventListener("touchmove",y),window.removeEventListener("touchend",d)}}function ut(e){e.innerHTML=`
    <div class="micro-modern-box" id="modern-skyline-stage" role="button" tabindex="0" aria-label="${s("microModernHint")}">
      <svg viewBox="0 0 320 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; pointer-events: none;">
        <!-- Split Twilight & Warm Gallery Sky -->
        <rect width="320" height="130" class="modern-sky-bg" fill="#EAE2D3"/>

        <!-- Glow Orbs (Illuminated on click) -->
        <circle cx="228" cy="48" r="38" class="modern-glow-orb" fill="#FAD06C" fill-opacity="0"/>
        <circle cx="96" cy="56" r="28" class="modern-glow-orb" fill="#E05A47" fill-opacity="0"/>

        <!-- Left Side: Traditional Water-Town Roof Eaves -->
        <g transform="translate(18, 42)">
          <path d="M4 58 L4 26 L92 26 L92 58 Z" fill="#F7F2E9" stroke="#2F3E46" stroke-width="2"/>
          <path d="M-4 28 Q48 8 100 28 L94 18 Q48 2 2 18 Z" fill="#2F3E46"/>
          <!-- Warm Lantern on Eave -->
          <circle cx="88" cy="34" r="6" class="modern-window-light" fill="#B5352B"/>
          <rect x="24" y="36" width="18" height="22" class="modern-window-light" fill="#596D76"/>
          <rect x="54" y="36" width="18" height="22" class="modern-window-light" fill="#596D76"/>
        </g>

        <!-- Center Connecting Footbridge -->
        <path d="M114 96 Q148 82 182 96" stroke="#5E8B7E" stroke-width="3" fill="none"/>

        <!-- Right Side: Modern Art Museum & Plaza Ribbon Architecture -->
        <g transform="translate(172, 26)">
          <rect x="0" y="16" width="124" height="58" rx="6" fill="#FFFDF9" stroke="#2F3E46" stroke-width="2"/>
          <!-- Curved Contemporary Facade Bands -->
          <path d="M0 32 L124 24" stroke="#5E8B7E" stroke-width="3"/>
          <path d="M0 48 L124 40" stroke="#B5352B" stroke-width="2.5"/>
          <!-- Gallery Glass Windows -->
          <rect x="14" y="54" width="26" height="14" rx="2" class="modern-window-light" fill="#8598A0"/>
          <rect x="48" y="54" width="26" height="14" rx="2" class="modern-window-light" fill="#8598A0"/>
          <rect x="82" y="54" width="26" height="14" rx="2" class="modern-window-light" fill="#8598A0"/>
        </g>

        <!-- Ground Baseline -->
        <line x1="12" y1="100" x2="308" y2="100" stroke="#2F3E46" stroke-width="2"/>
      </svg>
      <div class="micro-overlay-hint">
        <span>${s("microModernHint")}</span>
      </div>
    </div>
  `;const n=e.querySelector("#modern-skyline-stage");let o=!1;function t(){be(),o=!o,n&&n.classList.toggle("illuminated",o)}n&&(n.addEventListener("click",t),n.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),t())}))}let G=!1,$=null;function Ce(){if(typeof $=="function"){try{$()}catch{}$=null}}function ht(){const e=document.querySelector("#bottom-sheet-backdrop"),n=document.querySelector("#spot-bottom-sheet");e&&e.addEventListener("click",()=>{Q(null)}),n&&gt(n)}function gt(e){let n=0,o=0,t=!1;e.addEventListener("touchstart",i=>{if(!i.touches||!i.touches.length)return;if(i.target.closest(".micro-interaction-wrapper")){t=!1;return}const r=e.querySelector("#spot-sheet-dynamic-content"),a=!r||r.scrollTop<=2,u=!!i.target.closest("#sheet-drag-handle");a||u?(t=!0,n=i.touches[0].clientY,o=0):t=!1},{passive:!0}),e.addEventListener("touchmove",i=>{if(!t||!i.touches||!i.touches.length)return;const r=i.touches[0].clientY-n;r>0&&(o=r,e.style.transform=`translateY(${Math.min(r*.65,220)}px)`)},{passive:!0}),e.addEventListener("touchend",()=>{t&&(e.style.transform="",o>75&&Q(null),t=!1,o=0)},{passive:!0})}function de(e){const n=F.find(i=>i.id===e);if(!n)return;const o=document.querySelector("#bottom-sheet-backdrop"),t=document.querySelector("#spot-bottom-sheet");!o||!t||(ft(n),o.classList.add("active"),t.classList.add("active"))}function Ee(){Ce(),R(),G=!1;const e=document.querySelector("#bottom-sheet-backdrop"),n=document.querySelector("#spot-bottom-sheet");e&&e.classList.remove("active"),n&&(n.style.transform="",n.classList.remove("active"))}function ft(e){var H,W;Ce(),R(),G=!1;const n=document.querySelector("#spot-sheet-dynamic-content");if(!n)return;n.scrollTop=0;const o=l.collected.includes(e.id),t=e.name[l.lang]||e.name.zh,i=l.lang==="zh"?e.name.en:e.name.zh,r=e.summary[l.lang]||e.summary.zh,a=e.tags[l.lang]||e.tags.zh,u=it(e.name.zh,e.name.en,e.order),d=e.media.image||u,f=e.media.fallbackImage||u,y=F.findIndex(T=>T.id===e.id),h=F[(y-1+F.length)%F.length],v=F[(y+1)%F.length],S=s("spotOrderBadge",{n:e.order}),m=e.quote&&(e.quote[l.lang]||e.quote.zh),w=e.quote&&(((H=e.quote.author)==null?void 0:H[l.lang])||((W=e.quote.author)==null?void 0:W.zh)||""),b=m?`
      <blockquote class="sheet-quote-box">
        <span class="sheet-quote-label">${s("quoteLabel")}</span>
        <p class="sheet-quote-text">“${m}”</p>
        ${w?`<cite class="sheet-quote-author">—— ${w}</cite>`:""}
      </blockquote>
    `:"",M=e.verified===!1?`<span class="sheet-unverified-tag">${s("unverifiedTag")}</span>`:"";n.innerHTML=`
    <!-- Top Bar with >= 44x44 Close Button -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <span style="font-size: 14px; font-weight: 700; color: var(--vermilion); letter-spacing: 1.5px;">
        ${S}
      </span>
      <button class="icon-btn" id="btn-header-close-spot" aria-label="${s("close")}" title="${s("close")}">
        ✕
      </button>
    </div>

    <!-- Spot Photo Media Box -->
    <div class="sheet-media-box">
      <picture>
        <source srcset="${d}" type="image/webp" />
        <img src="${f}" alt="${t}" id="spot-main-img" />
      </picture>
      ${M}
    </div>

    <!-- Title and Bilingual Subtitle -->
    <div class="sheet-title-row">
      <h2 class="sheet-title">${t}</h2>
      <span class="sheet-title-en">${i}</span>
    </div>

    <!-- Tag Pills -->
    <div class="sheet-tags-row">
      ${a.map(T=>`<span class="sheet-tag">${T}</span>`).join("")}
    </div>

    <!-- Summary Paragraph -->
    <p class="sheet-summary">${r}</p>

    <!-- Optional Local Person Quote (Hidden when null) -->
    ${b}

    <!-- Ambient Audio Player Button -->
    <button id="btn-spot-ambient-sound" class="btn-listen-sound">
      <span id="spot-sound-icon">🔊</span>
      <span id="spot-sound-btn-text">${s("soundPlay")}</span>
    </button>

    <!-- Micro-Interaction Box (P1) -->
    ${e.special?'<div class="micro-interaction-wrapper" id="micro-interaction-slot"></div>':""}

    <!-- Sticky Bottom Action Bar -->
    <div class="sheet-bottom-actions">
      <button class="pill-btn" id="btn-spot-prev" style="min-width: 68px; min-height: 44px;">${s("prevSpot")}</button>
      <button class="btn-collect-spot ${o?"collected":""}" id="btn-do-collect">
        ${s(o?"collected":"collect")}
      </button>
      <button class="pill-btn" id="btn-spot-next" style="min-width: 68px; min-height: 44px;">${s("nextSpot")}</button>
    </div>
  `;const B=n.querySelector("#spot-main-img");B&&B.addEventListener("error",()=>{B.src!==u&&(B.src=u)});const p=n.querySelector("#btn-header-close-spot");if(p&&p.addEventListener("click",()=>{Q(null)}),e.special){const T=n.querySelector("#micro-interaction-slot");T&&(e.special==="bell"?$=rt(T)||null:e.special==="bridge"?$=at(T)||null:e.special==="sugar"?$=lt(T)||null:e.special==="steam"?$=ct(T,e.id==="sliced-mutton")||null:e.special==="puppet"?$=dt(T)||null:e.special==="modern"&&($=ut(T)||null))}const g=n.querySelector("#btn-spot-ambient-sound"),x=n.querySelector("#spot-sound-btn-text");g&&g.addEventListener("click",()=>{G?(R(),G=!1,x.textContent=s("soundPlay")):(l.muted&&fe(!1),G=!0,x.textContent=s("soundPlaying"),Qe(e.media.audio,e.id,()=>{G=!1,x&&(x.textContent=s("soundPlay"))}))});const k=n.querySelector("#btn-do-collect");k&&k.addEventListener("click",()=>{l.collected.includes(e.id)||(pt(t),ze(e.id),k.classList.add("collected"),k.textContent=s("collected"),l.collected.length===F.length&&Be(s("allCollectedNotice")))});const I=n.querySelector("#btn-spot-prev"),j=n.querySelector("#btn-spot-next");I&&I.addEventListener("click",()=>{R(),Q(h.id)}),j&&j.addEventListener("click",()=>{R(),Q(v.id)})}function pt(e){He();const n=document.querySelector("#stamp-animation-overlay"),o=document.querySelector("#stamp-badge-spot-title");n&&(o&&(o.textContent=e),n.classList.add("active"),setTimeout(()=>{n.classList.remove("active")},900))}function Be(e){const n=document.querySelector("#toast-notice");n&&(n.textContent=e,n.classList.add("show"),setTimeout(()=>{n.classList.remove("show")},3200))}async function mt(){const o=document.createElement("canvas");o.width=1080,o.height=1920;const t=o.getContext("2d"),i=l.lang==="en",r=t.createLinearGradient(0,0,0,1920);r.addColorStop(0,"#FAF6EF"),r.addColorStop(.5,"#F4EDE1"),r.addColorStop(1,"#ECE3D5"),t.fillStyle=r,t.fillRect(0,0,1080,1920),t.strokeStyle="rgba(47, 62, 70, 0.15)",t.lineWidth=4,t.strokeRect(40,40,1e3,1840),t.strokeStyle="#B5352B",t.lineWidth=2,t.strokeRect(50,50,980,1820),vt(t,50,50,980,1820),t.textAlign="center",t.textBaseline="top";const a=s("posterBadge");t.font='bold 24px "PingFang SC", "Noto Sans SC", sans-serif';const u=Math.max(380,Math.round(t.measureText(a).width+64));t.fillStyle="#B5352B",A(t,1080/2-u/2,96,u,52,26,!0,!1),t.fillStyle="#FFFFFF",t.fillText(a,1080/2,110),t.fillStyle="#2F3E46",t.font=i?'bold 64px "Songti SC", "Noto Serif SC", serif':'bold 80px "Songti SC", "Noto Serif SC", serif',t.fillText(s("appTitle"),1080/2,i?178:172),t.fillStyle="#596D76",t.font=i?'25px "PingFang SC", "Noto Sans SC", sans-serif':'32px "PingFang SC", "Noto Sans SC", sans-serif',t.fillText(s("appSubtitle"),1080/2,272),t.strokeStyle="rgba(47, 62, 70, 0.2)",t.lineWidth=2,t.beginPath(),t.moveTo(140,336),t.lineTo(940,336),t.stroke(),t.fillStyle="#B5352B",t.beginPath(),t.arc(1080/2,336,6,0,Math.PI*2),t.fill();const d=l.collected.length,f=d===F.length,y=380,h=440,v=36,S=190,m=(1080-(h*2+v))/2,w=m+h+v;F.forEach((k,I)=>{const j=l.collected.includes(k.id);let H,W;if(I<6){const T=I%2,Ae=Math.floor(I/2);H=T===0?m:w,W=y+Ae*(S+22)}else H=1080/2-h/2,W=y+3*(S+22);yt(t,k,j,H,W,h,S)});const b=1445,M=s("progressText",{n:d});t.fillStyle=f?"#B5352B":"#5E8B7E",A(t,1080/2-170,b,340,58,29,!0,!1),t.fillStyle="#FFFFFF",t.font='bold 28px "PingFang SC", sans-serif',t.textAlign="center",t.fillText(M,1080/2,b+15);const B=f?z.zh.posterQuote:z.zh.posterIncompleteQuote;t.fillStyle="#2F3E46",t.font='bold 34px "Songti SC", "Noto Serif SC", serif',t.fillText(B,1080/2,b+86);const p=f?z.en.posterQuoteEn:z.en.posterIncompleteQuoteEn;t.fillStyle="#596D76",t.font='italic 22px "PingFang SC", sans-serif',t.fillText(p,1080/2,b+138);const g=new Date,x=`${g.getFullYear()}.${String(g.getMonth()+1).padStart(2,"0")}.${String(g.getDate()).padStart(2,"0")}`;return t.fillStyle="#8598A0",t.font='22px "PingFang SC", sans-serif',t.fillText(`${x} · ${s("posterLocation")}`,1080/2,b+195),t.fillStyle="#596D76",t.font='20px "PingFang SC", sans-serif',t.fillText(s("posterAuthor"),1080/2,b+232),wt(t,875,1695,s("posterSeal"),i),o.toDataURL("image/png")}function yt(e,n,o,t,i,r,a){if(e.save(),o){e.fillStyle="#FFFDF9",A(e,t,i,r,a,14,!0,!1),e.strokeStyle="#B5352B",e.lineWidth=3,A(e,t,i,r,a,14,!1,!0),e.fillStyle="#B5352B",A(e,t+16,i+32,88,88,12,!0,!1),e.strokeStyle="rgba(255, 255, 255, 0.7)",e.lineWidth=1.5,A(e,t+21,i+37,78,78,9,!1,!0),e.fillStyle="#FFFFFF",e.font='bold 42px "Songti SC", serif',e.textAlign="center",e.fillText("宝",t+60,i+52),e.textAlign="left",e.fillStyle="#2F3E46",e.font='bold 28px "Songti SC", serif',e.fillText(`0${n.order} ${n.name.zh}`,t+120,i+22),e.fillStyle="#596D76",e.font='600 18px "PingFang SC", sans-serif',e.fillText(n.name.en,t+120,i+58);const d=(n.tags[l.lang]||n.tags.zh).slice(0,2).join(" · ");e.fillStyle="#5E8B7E",e.font='18px "PingFang SC", sans-serif',e.fillText(d,t+120,i+92),e.fillStyle="#B5352B",e.font='bold 19px "PingFang SC", sans-serif',e.fillText(s("posterCollectedMark"),t+120,i+128)}else e.fillStyle="rgba(236, 228, 214, 0.45)",A(e,t,i,r,a,14,!0,!1),e.strokeStyle="rgba(47, 62, 70, 0.22)",e.lineWidth=2,e.setLineDash([8,6]),A(e,t,i,r,a,14,!1,!0),e.setLineDash([]),e.strokeStyle="rgba(47, 62, 70, 0.25)",e.lineWidth=2,A(e,t+16,i+32,88,88,12,!1,!0),e.fillStyle="rgba(47, 62, 70, 0.32)",e.font='bold 38px "Songti SC", serif',e.textAlign="center",e.fillText("?",t+60,i+54),e.textAlign="left",e.fillStyle="rgba(47, 62, 70, 0.52)",e.font='bold 27px "Songti SC", serif',e.fillText(`0${n.order} ${n.name.zh}`,t+120,i+28),e.fillStyle="rgba(47, 62, 70, 0.42)",e.font='500 18px "PingFang SC", sans-serif',e.fillText(n.name.en,t+120,i+66),e.font='18px "PingFang SC", sans-serif',e.fillText(s("posterUncollectedMark"),t+120,i+112);e.restore()}function wt(e,n,o,t,i=!1){e.save(),e.fillStyle="#B5352B",A(e,n,o,116,116,12,!0,!1),e.strokeStyle="#FFFFFF",e.lineWidth=3,A(e,n+6,o+6,104,104,8,!1,!0),e.fillStyle="#FFFFFF",e.textAlign="center",i?(e.font='bold 20px "Songti SC", serif',e.fillText("QIBAO",n+58,o+32),e.font='bold 17px "PingFang SC", sans-serif',e.fillText(t,n+58,o+64)):(e.font='bold 28px "Songti SC", serif',e.fillText(t.slice(0,2),n+58,o+24),e.fillText(t.slice(2,4),n+58,o+62)),e.restore()}function vt(e,n,o,t,i){e.strokeStyle="#B5352B",e.lineWidth=4,e.beginPath(),e.moveTo(n+10,o+10+30),e.lineTo(n+10,o+10),e.lineTo(n+10+30,o+10),e.stroke(),e.beginPath(),e.moveTo(n+t-10-30,o+10),e.lineTo(n+t-10,o+10),e.lineTo(n+t-10,o+10+30),e.stroke(),e.beginPath(),e.moveTo(n+10,o+i-10-30),e.lineTo(n+10,o+i-10),e.lineTo(n+10+30,o+i-10),e.stroke(),e.beginPath(),e.moveTo(n+t-10-30,o+i-10),e.lineTo(n+t-10,o+i-10),e.lineTo(n+t-10,o+i-10-30),e.stroke()}function A(e,n,o,t,i,r,a,u){e.beginPath(),e.moveTo(n+r,o),e.lineTo(n+t-r,o),e.quadraticCurveTo(n+t,o,n+t,o+r),e.lineTo(n+t,o+i-r),e.quadraticCurveTo(n+t,o+i,n+t-r,o+i),e.lineTo(n+r,o+i),e.quadraticCurveTo(n,o+i,n,o+i-r),e.lineTo(n,o+r),e.quadraticCurveTo(n,o,n+r,o),e.closePath(),a&&e.fill(),u&&e.stroke()}let oe=0;async function se(){const e=document.querySelector("#poster-image-target");if(!e)return;const n=++oe,o=document.querySelector("#btn-poster-download");o==null||o.removeAttribute("href"),e.innerHTML=`<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--ink-light); font-size: 14px;">${s("loading")}</div>`;try{const t=await mt();if(n!==oe)return;e.innerHTML=`<img src="${t}" alt="七宝集章卡海报" style="width: 100%; height: 100%; object-fit: contain;"/>`,o&&(o.href=t)}catch(t){if(console.error("Failed to generate poster canvas:",t),n!==oe)return;e.innerHTML=`<div style="padding: 20px; color: var(--vermilion);">${s("posterError")}</div>`}}function bt(){const e=document.querySelector("#btn-poster-back"),n=document.querySelector("#btn-poster-reset");e&&e.addEventListener("click",()=>{D("hub")}),n&&n.addEventListener("click",()=>{confirm(s("infoResetConfirm"))&&(pe(),D("hub"))})}let Fe="hub";function St(e){Fe=e}function xt(){const e=document.querySelector("#btn-close-info"),n=document.querySelector("#btn-info-reset-progress");e&&e.addEventListener("click",()=>{D(Fe||"hub")}),n&&n.addEventListener("click",()=>{confirm(s("infoResetConfirm"))&&(pe(),Be(s("infoResetDone")))})}function ue(){console.log("[Qibao H5] Initializing application..."),Ve(),Ye(),je(),et(),ht(),bt(),xt(),kt(),Tt(),ee(),document.documentElement.lang=l.lang==="zh"?"zh-CN":"en",V(),ge(),he(l.screen,null),De((e,n,o)=>{if(n==="screen")he(o.to,o.from);else if(n==="lang"){if(document.documentElement.lang=l.lang==="zh"?"zh-CN":"en",ee(),Xe(),Je(),V(),l.currentSpotId){const t=document.querySelector("#spot-bottom-sheet");t&&t.classList.contains("active")&&de(l.currentSpotId)}l.screen==="poster"&&se()}else n==="muted"?(ge(),ee(),Oe()):n==="collected"||n==="reset"?(V(),l.screen==="poster"&&se()):n==="spot"&&(o?de(o):Ee())}),console.log("[Qibao H5] Application ready in",l.lang,"mode.")}function he(e,n){n==="hub"&&e!=="hub"&&Ee(),document.querySelectorAll(".screen").forEach(a=>{a.classList.remove("active"),a.inert=!0});const o=document.querySelector(`#screen-${e}`);o&&(o.classList.add("active"),o.inert=!1);const t=document.querySelector("#global-top-nav"),i=document.querySelector("#hub-progress-badge"),r=document.querySelector("#btn-open-info");t&&(t.style.display="flex",i&&(i.style.visibility=e==="hub"||e==="poster"?"visible":"hidden"),r&&(r.style.display=e==="loading"||e==="info"?"none":"inline-flex")),e==="hub"?V():e==="poster"&&se()}function kt(){const e=document.querySelector("#btn-toggle-lang"),n=document.querySelector("#btn-toggle-mute"),o=document.querySelector("#btn-open-info");e&&e.addEventListener("click",()=>{$e()}),n&&n.addEventListener("click",()=>{q(),Pe(),l.muted||le()}),o&&o.addEventListener("click",()=>{St(l.screen),D("info")})}function Tt(){const e=document.querySelector("#btn-view-mobile"),n=document.querySelector("#btn-view-desktop"),o=document.querySelector("#desktop-phone-frame");e&&n&&o&&(e.addEventListener("click",()=>{o.classList.remove("mode-desktop"),e.classList.add("active"),n.classList.remove("active"),setTimeout(V,200)}),n.addEventListener("click",()=>{o.classList.add("mode-desktop"),n.classList.add("active"),e.classList.remove("active"),setTimeout(V,200)}))}function ge(){const e=document.querySelector("#mute-icon-symbol");e&&(e.textContent=l.muted?"🔇":"🔊")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ue):ue();
