// =========================================================================
// data.js - 环球寻宝全量万神殿数据库 v11.0 (200种藏品与地图专属掉落完全体)
// [地图编号映射表映射参考]
// 1: 华夏古玩 · 潘家园与西市地摊   | 2: 江南雅韵 · 景德镇御瓷遗址
// 3: 神州文脉 · 故宫与文渊阁密藏   | 4: 秋叶原 · 动漫周边与卡牌前线
// 5: 巴黎 · 卢浮宫与德鲁奥高阶大拍 | 6: 纽约 · 苏富比与现代艺术大拍
// 7: 环球探险 · 至尊终极盲盒全量熔炉
// =========================================================================

const globalItemMap = {
    // ==================== 【1. 瓷器类 (porcelain) - 40 种全量不丢】 ====================
    "明成化斗彩鸡缸杯": { 
        name: "明成化斗彩鸡缸杯", type: "porcelain", typeName: "瓷器", rarity: 4, rarityName: "传奇", value: 290000000, 
        maps: [6, 7], artStatus: "明代御窑巅峰之作", historyEra: "明成化年间", 
        historyDesc: "成化斗彩的旷世神作。杯上以斗彩工艺描绘公鸡、母鸡率雏鸡觅食的子母鸡图，画面温馨，釉质如脂。" 
    },
    "元青花鬼谷子下山图罐": { 
        name: "元青花鬼谷子下山图罐", type: "porcelain", typeName: "瓷器", rarity: 4, rarityName: "传奇", value: 230000000, 
        maps: [5, 7], artStatus: "元代青花至尊", historyEra: "元代至正年间", 
        historyDesc: "使用进口苏麻离青料烧制，色调翠蓝浓艳。画面绘有战国时期燕国与齐国交战，鬼谷子下山救徒的传神故事。" 
    },
    "清乾隆珐琅彩古月轩题诗花石锦鸡图碗": { 
        name: "清乾隆珐琅彩古月轩题诗花石锦鸡图碗", type: "porcelain", typeName: "瓷器", rarity: 4, rarityName: "传奇", value: 195000000, 
        maps: [3, 7], artStatus: "乾隆官窑绝响", historyEra: "清乾隆年间", 
        historyDesc: "集诗、书、画、印于一身，碗内壁及底施白釉，外壁以珐琅彩绘花石锦鸡，色彩浓艳细腻，极为珍贵。" 
    },
    "北宋汝窑天青釉葵花洗": { 
        name: "北宋汝窑天青釉葵花洗", type: "porcelain", typeName: "瓷器", rarity: 4, rarityName: "传奇", value: 50000000, 
        maps: [2, 7], artStatus: "汝瓷传世洗王", historyEra: "北宋晚期", 
        historyDesc: "汝窑位列宋代五大名窑之首。此洗造型如葵花绽放，满釉支烧，蝉翼纹片莹润如酥，存世仅此孤例。" 
    },
    "清雍正粉彩九桃天球瓶": { 
        name: "清雍正粉彩九桃天球瓶", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 85000000, 
        maps: [3, 7], artStatus: "雍正粉彩重器", historyEra: "清雍正年间", 
        historyDesc: "景德镇御窑厂精心烧制。天球瓶身以粉彩描绘苍劲蟠桃树，枝头挂有九枚饱满寿桃，粉彩过渡绝妙。" 
    },
    "明宣德青花海水双龙纹高足碗": { 
        name: "明宣德青花海水双龙纹高足碗", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 68000000, 
        maps: [5, 7], artStatus: "宣德青花神品", historyEra: "明宣德年间", 
        historyDesc: "宣德青花发色苍翠，微带黑色结晶斑。外壁绘双龙在汹涌海水中腾飞激荡，气势雄浑健爽。" 
    },
    "宋汝窑天青釉三足樽承盘": { 
        name: "宋汝窑天青釉三足樽承盘", type: "porcelain", typeName: "瓷器", rarity: 4, rarityName: "传奇", value: 310000000, 
        maps: [3, 7], artStatus: "北宋天青圣物", historyEra: "北宋徽宗年间", 
        historyDesc: "玛瑙入釉，釉面开细密蟹爪纹。此盘为汝窑传世品中形制最大、极其罕见的成套樽底承盘。" 
    },
    "明成化斗彩三秋杯": { 
        name: "明成化斗彩三秋杯", type: "明成化斗彩三秋杯", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 92000000, 
        maps: [2, 7], artStatus: "成化斗彩极品", historyEra: "明成化年间", 
        historyDesc: "杯身轻薄如蝉翼，外壁以斗彩绘秋菊草虫，因所绘秋景多历经三月，故名三秋杯，画意极其高雅。" 
    },
    "清康熙郎窑红釉观音瓶": { 
        name: "清康熙郎窑红釉观音瓶", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 12500000, 
        maps: [2, 7], artStatus: "郎红名品", historyEra: "清康熙年间", 
        historyDesc: "红釉鲜丽浓艳，具‘脱口垂足郎不流’的艺术特征。釉质肥厚莹润，带有强烈的玻璃光泽。" 
    },
    "宋官窑粉青釉纸槌瓶": { 
        name: "宋官窑粉青釉纸槌瓶", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 5500000, 
        maps: [1, 2, 7], artStatus: "宋代官窑魁首", historyEra: "南宋时期", 
        historyDesc: "典型的官窑器物，瓶身施粉青肥厚之釉，内隐紫口铁足。器型古朴凝重，宛若天然青玉雕成。" 
    },
    "宋哥窑五足洗": { 
        name: "宋哥窑五足洗", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 2500000, 
        maps: [1, 2, 7], artStatus: "传世哥窑", historyEra: "宋代", 
        historyDesc: "釉面布满金丝铁线的大小编织开片，错落有致。洗底承以五个小乳足，古意盎然。" 
    },
    "宋定窑白釉划花八棱大碗": { 
        name: "宋定窑白釉划花八棱大碗", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 46000000, 
        maps: [3, 7], artStatus: "定窑白瓷之最", historyEra: "北宋时期", 
        historyDesc: "定窑著名的白瓷刻花大碗，碗呈八棱形，口镶金边。胎质薄如卵壳，刻划莲花纹婉转流畅。" 
    },
    "清雍正珐琅彩黄地梅花纹碗": { 
        name: "清雍正珐琅彩黄地梅花纹碗", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 22000000, 
        maps: [3, 7], artStatus: "雍正珐琅彩", historyEra: "清雍正年间", 
        historyDesc: "外壁满施娇嫩的柠檬黄地，上以珐琅彩描绘寒冬梅花迎风绽放，色彩极其娇艳高贵。" 
    },
    "明万历五彩大背壶": { 
        name: "明万历五彩大背壶", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 14000000, 
        maps: [2, 7], artStatus: "万历大五彩", historyEra: "明万历年间", 
        historyDesc: "器型硕大，充满万历时期的狂放风格。以浓重艳丽的五彩描绘龙凤穿花图案，线条炽烈豪迈。" 
    },
    "清嘉庆黄地绿彩八吉祥大盘": { 
        name: "清嘉庆黄地绿彩八吉祥大盘", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 50000, 
        maps: [1, 2, 7], artStatus: "宫廷御用餐具", historyEra: "清嘉庆年间", 
        historyDesc: "黄地绿彩工艺精湛。盘内壁对称雕刻佛教八吉祥纹样，底款‘大清嘉庆年制’，官窑正统制品。" 
    },
    "清道光粉彩慎德堂款花卉蝴蝶碗": { 
        name: "清道光粉彩慎德堂款花卉蝴蝶碗", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 50000, 
        maps: [1, 2, 7], artStatus: "慎德堂堂名款", historyEra: "清道光年间", 
        historyDesc: "慎德堂为道光皇帝在圆明园的行宫。此碗粉彩绘制极为细腻，蝴蝶翩翩飞舞，深得皇帝喜爱。" 
    },
    "唐三彩双花大马": { 
        name: "唐三彩双花大马", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 2500000, 
        maps: [1, 7], artStatus: "盛唐铅釉雕塑", historyEra: "盛唐时期", 
        historyDesc: "虽非真正高瓷，但列入广义瓷系。马身施黄、绿、白三色铅釉，体态肥硕矫健，体现大唐盛世气象。" 
    },
    "越窑青瓷秘色瓷葵口碗": { 
        name: "越窑青瓷秘色瓷葵口碗", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 5200000, 
        maps: [1, 2, 7], artStatus: "九秋风露绿蚕茧", historyEra: "唐代晚期", 
        historyDesc: "法门寺地宫出土同类器物。青翠如玉，视之如冰，碗内如一汪春水，是唐代秘色瓷的珍稀代表。" 
    },
    "清光绪红地金彩双喜字大碗": { 
        name: "清光绪红地金彩双喜字大碗", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 850000, 
        maps: [1, 2], artStatus: "同治光绪大婚瓷", historyEra: "清光绪年间", 
        historyDesc: "晚清御窑厂为皇帝大婚专门定制的喜庆大碗。红地艳丽，满描纯金双喜字与万寿藤蔓，富丽堂皇。" 
    },
    "宋建窑黑釉兔毫盏": { 
        name: "宋建窑黑釉兔毫盏", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 11000000, 
        maps: [1, 2, 7], artStatus: "宋代斗茶第一盏", historyEra: "北宋至南宋", 
        historyDesc: "黑釉中呈现密集的黄褐色微小结晶丝，状如兔毛。宋人斗茶极重此盏，能衬托出白色的茶沫。" 
    },
    "宋吉州窑黑釉木叶纹盏": { 
        name: "宋吉州窑黑釉木叶纹盏", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 9500000, 
        maps: [1, 2, 7], artStatus: "一叶飘零禅意生", historyEra: "南宋时期", 
        historyDesc: "吉州窑独创绝技。将天然菩提树叶浸染后贴在黑釉内壁入窑烧制，叶片脉络永恒烙印于盏心。" 
    },
    "元蓝釉白龙纹梅瓶": { 
        name: "元蓝釉白龙纹梅瓶", type: "porcelain", typeName: "瓷器", rarity: 4, rarityName: "传奇", value: 180000000, 
        maps: [3, 7], artStatus: "元代高温蓝釉巅峰", historyEra: "元代", 
        historyDesc: "扬州博物馆镇馆之宝同类级。满施深艳的高温宝石蓝釉，腹部留白雕刻赶珠戏水白龙，视觉极具震撼力。" 
    },
    "明永乐青花如意垂带折花纹梅瓶": { 
        name: "明永乐青花如意垂带折花纹梅瓶", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 48000000, 
        maps: [2, 7], artStatus: "永乐官窑神品", historyEra: "明永乐年间", 
        historyDesc: "梅瓶比例完美，青花使用苏料，发色浓重。腹部主题绘制折枝花卉，笔法细腻，颇有水墨神韵。" 
    },
    "明宣德祭红釉大盘": { 
        name: "明宣德祭红釉大盘", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 16000000, 
        maps: [3, 7], artStatus: "宣德高温红釉", historyEra: "明宣德年间", 
        historyDesc: "祭红釉由于极难烧成，古称‘鲜红’。此盘釉色深沉无瑕，色如红宝石，为历代祭祀用瓷的最高水平。" 
    },
    "明正德青花阿拉伯文双耳炉": { 
        name: "明正德青花阿拉伯文双耳炉", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 13800000, 
        maps: [2, 7], artStatus: "正德伊斯兰风尚", historyEra: "明正德年间", 
        historyDesc: "正德皇帝笃信多教。此炉腹部以开光形式书写波斯文与阿拉伯文古兰经文，极为独特，颇具文化交融意义。" 
    },
    "明嘉靖五彩鱼藻纹盖罐": { 
        name: "明嘉靖五彩鱼藻纹盖罐", type: "porcelain", typeName: "瓷器", rarity: 4, rarityName: "传奇", value: 165000000, 
        maps: [6, 7], artStatus: "嘉靖大官窑巨作", historyEra: "明嘉靖年间", 
        historyDesc: "体量宏大，五彩极其浓翠夺目。通体绘水草鱼藻纹，数条硕大红鲤鱼在荷花间畅游，栩栩如生。" 
    },
    "明隆庆青花团龙纹提梁壶": { 
        name: "明隆庆青花团龙纹提梁壶", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 19000000, 
        maps: [2, 7], artStatus: "隆庆官窑绝少见", historyEra: "明隆庆年间", 
        historyDesc: "隆庆在位仅六年，官窑瓷器传世极少。提梁壶设计奇巧，青花发色纯正，具有极高的历史标本价值。" 
    },
    "清康熙五彩蝴蝶大盘": { 
        name: "清康熙五彩蝴蝶大盘", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 2800000, 
        maps: [1, 2], artStatus: "康熙硬彩名作", historyEra: "清康熙年间", 
        historyDesc: "康熙五彩又称硬彩。此盘内满绘数百只形态各异、色彩斑斓的蝴蝶，画工刚劲硬朗，色泽经久不褪。" 
    },
    "清雍正墨彩山水图题诗笔筒": { 
        name: "清雍正墨彩山水图题诗笔筒", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 32000000, 
        maps: [3, 7], artStatus: "雍正新创墨彩", historyEra: "清雍正年间", 
        historyDesc: "雍正时期独有的文人高雅之作。以特制黑墨彩在白瓷上绘制水墨山水，宛如在宣纸上挥毫泼墨。" 
    },
    "清乾隆青花花卉纹多管大花插": { 
        name: "清乾隆青花花卉纹多管大花插", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 8800000, 
        maps: [2, 7], artStatus: "乾隆奇巧器形", historyEra: "清乾隆年间", 
        historyDesc: "集六个小管与一个大管于一体，用于宫廷插花。青花绘画繁缛精细，彰显乾隆时期炫技的制瓷工艺。" 
    },
    "清咸丰黄地黑彩双龙戏珠盘": { 
        name: "清咸丰黄地黑彩双龙戏珠盘", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 950000, 
        maps: [1, 2], artStatus: "咸丰官窑餐具", historyEra: "清咸丰年间", 
        historyDesc: "咸丰时期因战乱景德镇御窑多有停烧，传世品较少。此盘为皇家传统的黄地黑彩双龙戏珠，工艺规整。" 
    },
    "清同治粉彩梅花鹊鸟纹折沿盆": { 
        name: "清同治粉彩梅花鹊鸟纹折沿盆", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 720000, 
        maps: [1, 2], artStatus: "同治燕尔大婚瓷", historyEra: "清同治年间", 
        historyDesc: "同治皇帝大婚的专用洗漱盆。盆心粉彩绘制‘喜上眉梢’（喜雀与梅花），大红大绿，色彩极具晚清特征。" 
    },
    "清宣统青花缠枝莲纹赏瓶": { 
        name: "清宣统青花缠枝莲纹赏瓶", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 1600000, 
        maps: [1, 2], artStatus: "宣统帝王终章瓷", historyEra: "清宣统年间", 
        historyDesc: "清代最后一朝官窑。赏瓶为经典的六正缠枝莲纹样，虽国运衰微，但此赏瓶工艺依然保持了极高的水准。" 
    },
    "明宣德青花雪花蓝釉大碗": { 
        name: "明宣德青花雪花蓝釉大碗", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 52000000, 
        maps: [5, 7], artStatus: "宣德雪花蓝绝技", historyEra: "明宣德年间", 
        historyDesc: "又称洒蓝釉。采用吹釉工艺，在蓝釉中呈现出如雪花飘落的斑驳白点，传世极罕，工艺一度失传。" 
    },
    "宋磁州窑白地黑花婴戏图罐": { 
        name: "宋磁州窑白地黑花婴戏图罐", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 4500000, 
        maps: [1, 2], artStatus: "北方民间窑系魁首", historyEra: "北宋时期", 
        historyDesc: "磁州窑著名的白地黑花作品。以流畅大气的民间笔法，在素罐腹部勾勒出孩童嬉戏的质朴画面，野趣横生。" 
    },
    "宋龙泉窑青釉双耳凤尾瓶": { 
        name: "宋龙泉窑青釉双耳凤尾瓶", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 14200000, 
        maps: [2, 7], artStatus: "龙泉梅子青釉", historyEra: "南宋晚期", 
        historyDesc: "施肥厚的梅子青釉，釉质如青玉般青翠莹润。颈部对称雕刻双凤耳，比例优雅，为龙泉窑外销珍品。" 
    },
    "宋耀州窑青釉刻花牡丹纹倒流壶": { 
        name: "宋耀州窑青釉刻花牡丹纹倒流壶", type: "porcelain", typeName: "瓷器", rarity: 3, rarityName: "史诗", value: 38000000, 
        maps: [2, 7], artStatus: "耀州窑奇巧机关", historyEra: "北宋时期", 
        historyDesc: "壶底部开孔注酒，翻正后滴水不漏。通体刻满耀州窑招牌的犀利牡丹纹，刀锋犀利，半刀泥工艺精湛。" 
    },
    "清乾隆茶叶末釉双耳葫芦瓶": { 
        name: "清乾隆茶叶末釉双耳葫芦瓶", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 9200000, 
        maps: [3, 7], artStatus: "乾隆厂官釉", historyEra: "清乾隆年间", 
        historyDesc: "茶叶末釉古称厂官釉，是一种铁结晶釉。釉面呈现黄绿交织的细腻结晶，犹如茶叶细末，沉稳古雅。" 
    },
    "明崇祯青花八仙过海图筒瓶": { 
        name: "明崇祯青花八仙过海图筒瓶", type: "porcelain", typeName: "瓷器", rarity: 1, rarityName: "精工", value: 3800000, 
        maps: [1, 2], artStatus: "明末转变期瓷器", historyEra: "明崇祯年间", 
        historyDesc: "明末民窑青花的杰出代表。崇祯青花画风极具故事性，筒瓶上八仙形态各异，带有明显的文人画风格。" 
    },
    "清康熙青花‘红拂传’棒槌瓶": { 
        name: "清康熙青花‘红拂传’棒槌瓶", type: "porcelain", typeName: "瓷器", rarity: 2, rarityName: "罕见", value: 10500000, 
        maps: [1, 2, 7], artStatus: "康熙青花五彩流", historyEra: "清康熙年间", 
        historyDesc: "棒槌瓶为康熙新创器形。利用独有的‘青花五彩’分水法，在平滑器表上完美展现传奇小说红拂女的故事。" 
    },

    // ==================== 【2. 邮币徽章类 (stamp_coin) - 40 种全量不丢】 ====================
    "大清红印花原票当五分": { 
        name: "大清红印花原票当五分", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 120000000, 
        maps: [3, 7], artStatus: "华邮第一图腾", historyEra: "光绪二十三年", 
        historyDesc: "红印花原票本为清代海关印税票，后由于急需改作邮票。其中未经加盖的原票存世极其罕见，为华邮之王。" 
    },
    "大清红印花加盖小字当壹圆": { 
        name: "大清红印花加盖小字当壹圆", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 95000000, 
        maps: [6, 7], artStatus: "孤本华邮神物", historyEra: "清光绪年间", 
        historyDesc: "红印花加盖当壹圆时，由于初刻的‘小字’被认为太小不清晰而随即停改，全球已知存世仅三十余枚。" 
    },
    "全国山河一片红(撤销大片红未发行版)": { 
        name: "全国山河一片红(撤销大片红未发行版)", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 140000000, 
        maps: [6, 7], artStatus: "新中国邮票至尊", historyEra: "1968年", 
        historyDesc: "因地图绘制细节有误在发行前夕紧急撤销。个别走漏版本流入民间，成为现代集邮界身价最高的无上孤品。" 
    },
    "光绪二十四年奉天机器局造一圆银币": { 
        name: "光绪二十四年奉天机器局造一圆银币", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 82000000, 
        maps: [1, 7], artStatus: "机制币无双币王", historyEra: "清光绪二十四年", 
        historyDesc: "奉天机器局制造的早期机制币。由于随后爆发义和团拳乱及毁坏，此年份一圆高评级币全球罕见。" 
    },
    "民国十八年孙中山像地球版壹圆银币": { 
        name: "民国十八年孙中山像地球版壹圆银币", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 36000000, 
        maps: [6, 7], artStatus: "顶级民国机制币", historyEra: "民国十八年", 
        historyDesc: "天津造币厂试铸币。正面为孙中山着中山装像，背面为双旗地球图案，工艺登峰造极，未曾正式发行。" 
    },
    "庚申年T46大圣申猴全张纯品": { 
        name: "庚申年T46大圣申猴全张纯品", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 1800000, 
        maps: [4, 7], artStatus: "金猴报喜神话", historyEra: "1980年", 
        historyDesc: "邵宇设计、黄永玉绘制。采用金墨雕刻版印刷，猴毛根根挺拔。整版80枚纯品在集邮界被誉为硬通货神话。" 
    },
    "英属圭亚那洋红一分残票": { 
        name: "英属圭亚那洋红一分残票", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 155000000, 
        maps: [5, 6, 7], artStatus: "世界集邮终极图腾", historyEra: "1856年", 
        historyDesc: "当时殖民地邮局急需应急而临时油印的珍邮。全球仅存孤家一枚，历次大拍均创下世界艺术品克重单价最高纪录。" 
    },
    "蓝色毛里求斯两便士孤品": { 
        name: "蓝色毛里求斯两便士孤品", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 115000000, 
        maps: [5, 6, 7], artStatus: "错版错字始祖邮票", historyEra: "1847年", 
        historyDesc: "毛里求斯邮局初次发行邮票，因雕刻师误将‘Post Paid’刻为‘Post Office’而铸成惊天大错，存世极稀。" 
    },
    "清大清邮政局黑白无齿三分试样票": { 
        name: "清大清邮政局黑白无齿三分试样票", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 3500000, 
        maps: [1, 3], artStatus: "清代珍稀邮样", historyEra: "大清光绪", 
        historyDesc: "大清邮政初创时送审的黑白无齿孔试印样票，由于未被最终采纳，留存数量屈指可数，极具文献价值。" 
    },
    "清光绪二十二年海关小龙加盖暂作邮票": { 
        name: "清光绪二十二年海关小龙加盖暂作邮票", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 2800000, 
        maps: [1, 7], artStatus: "海关小龙改版", historyEra: "清代中晚期", 
        historyDesc: "在海关第二版小龙邮票上用黑色油墨加盖暂作面值，加盖字体有微小错位，属于集邮趣味品中的高档货。" 
    },
    "光绪三十三年江南造乙巳七钱二分银币": { 
        name: "光绪三十三年江南造乙巳七钱二分银币", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 7500000, 
        maps: [1, 7], artStatus: "江南省造机制币", historyEra: "清光绪三十三年", 
        historyDesc: "江南省造机制银币。由于‘乙巳’干支纪年龙洋铸造质量极高，深打鳞甲毕现，长寿龙版别极受追捧。" 
    },
    "民国三年袁大头苏维埃加盖壹圆": { 
        name: "民国三年袁大头苏维埃加盖壹圆", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 14500000, 
        maps: [1, 7], artStatus: "红色政权革命文物", historyEra: "1930年代", 
        historyDesc: "苏区红军占领地区后，在收缴的民国三年袁大头银币左侧手工凿印‘苏维埃’三字，发行量少，见证历史巨变。" 
    },
    "宣统三年大清银币长须龙壹圆": { 
        name: "宣统三年大清银币长须龙壹圆", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 45000000, 
        maps: [3, 7], artStatus: "晚清机制币大样", historyEra: "清宣统三年", 
        historyDesc: "天津造币厂雕刻师鲁尔智试铸龙洋。因龙须极长而得名，版面霸气深邃，是皇家终章机制币中最耀眼的明珠。" 
    },
    "黑便士邮票全张原胶纯品": { 
        name: "黑便士邮票全张原胶纯品", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 8800000, 
        maps: [5, 6, 7], artStatus: "世界邮票始祖", historyEra: "1840年大英", 
        historyDesc: "世界上第一枚正式发行的邮票。正面为维多利亚女王年轻侧面像，带有完整原胶且无折痕的黑便士极为昂贵。" 
    },
    "瑞典三克林黄色错版邮票": { 
        name: "瑞典三克林黄色错版邮票", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 148000000, 
        maps: [5, 6, 7], artStatus: "色彩错版旷世孤张", historyEra: "1855年", 
        historyDesc: "原本应为绿色的三克林邮票，由于排版工误用了八克林黄色的油墨而产生。现全球公认仅存此一绝版孤张。" 
    },
    "倒置的珍妮(美邮倒飞鸟二十四美分)": { 
        name: "倒置的珍妮(美邮倒飞鸟二十四美分)", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 32000000, 
        maps: [6, 7], artStatus: "美国集邮第一错", historyEra: "1918年", 
        historyDesc: "美国第一批航空邮票。由于双色套印工艺失误，导致画面中心的‘珍妮号’双翼飞机四脚朝天颠倒，举世瞩目。" 
    },
    "1953年军人贴用‘蓝军邮’未发版": { 
        name: "1953年军人贴用‘蓝军邮’未发版", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 4200000, 
        maps: [1, 7], artStatus: "新中国军事珍邮", historyEra: "1953年", 
        historyDesc: "原定给现役军人免费贴用的邮票，因考虑到可能会泄露军事机密而在下发前紧急停止。蓝底色版本留存极少。" 
    },
    "民国开国纪念币孙小头五角金样": { 
        name: "民国开国纪念币孙小头五角金样", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 16500000, 
        maps: [6, 7], artStatus: "民国黄金金试样", historyEra: "民国元年", 
        historyDesc: "南京造币厂为开国大典试铸的纯金质样币。并未列入流通，胎质纯厚，雕刻线条带有早期民国的利落感。" 
    },
    "咸丰重宝当十开炉大样母钱": { 
        name: "咸丰重宝当十开炉大样母钱", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 3200000, 
        maps: [1, 7], artStatus: "大清雕刻母钱", historyEra: "清咸丰年间", 
        historyDesc: "宝泉局开炉铸造的大样母钱。铜质精良细腻，字口如刀刻般深邃，是直接用于翻铸子钱的至高标准母本。" 
    },
    "王莽篡汉大泉五十雕母": { 
        name: "王莽篡汉大泉五十雕母", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 8500000, 
        maps: [1, 7], artStatus: "新莽美学巅峰钱币", historyEra: "新莽始建国年间", 
        historyDesc: "王莽极重钱币美学。此雕母由工匠在优质铜料上纯手工雕刻而成，悬针篆字体挺拔俊秀，天下绝品。" 
    },
    "清光绪二十九年户部光绪元宝当二十铜币": { 
        name: "清光绪二十九年户部光绪元宝当二十铜币", type: "stamp_coin", typeName: "邮币", rarity: 1, rarityName: "精工", value: 450000, 
        maps: [1, 2], artStatus: "大清机制铜元", historyEra: "清光绪二十九年", 
        historyDesc: "户部发行的机制二十文铜元。由于其采用了英国进口原模，背面蟠龙鳞片立体清晰，是铜元收藏中的名品。" 
    },
    "民国机制双旗当二十文开国纪念币": { 
        name: "民国机制双旗当二十文开国纪念币", type: "stamp_coin", typeName: "邮币", rarity: 1, rarityName: "精工", value: 120000, 
        maps: [1, 4], artStatus: "民国普制铜圆", historyEra: "民国初期", 
        historyDesc: "正面两面民国国旗交叉，背面为稻穗图案。作为民国初年流通最广的硬币，此枚高分全深打颇为难得。" 
    },
    "古罗马凯撒大帝精金币": { 
        name: "古罗马凯撒大帝精金币", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 6500000, 
        maps: [5, 6, 7], artStatus: "欧洲古典钱币", historyEra: "公元前44年", 
        historyDesc: "正面为凯撒大帝侧面桂冠头像，背面绘有罗马战车。纯金手工锤揲而成，是西方古典钱币学的圣物。" 
    },
    "亚历山大大帝骑马图高浮雕银币": { 
        name: "亚历山大大帝骑马图高浮雕银币", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 4800000, 
        maps: [5, 7], artStatus: "希腊化美学机制", historyEra: "公元前4世纪", 
        historyDesc: "古希腊马其顿王国铸造的高浮雕德拉克马银币。战马线条充满张力，肌肉紧绷，极具希腊古典雕塑美学。" 
    },
    "大观通宝折十御书瘦金体铜钱": { 
        name: "大观通宝折十御书瘦金体铜钱", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 1800000, 
        maps: [3, 7], artStatus: "天子御书第一钱", historyEra: "北宋大观年间", 
        historyDesc: "北宋徽宗赵佶亲自用瘦金体书写钱文并下旨铸造。钱体硕大，字体铁画银钩，铁骨铮铮，艺术价值冠绝古今。" 
    },
    "中华苏维埃共和国大中华壹圆银币": { 
        name: "中华苏维埃共和国大中华壹圆银币", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 11500000, 
        maps: [1, 7], artStatus: "苏区自主机制银币", historyEra: "1932年", 
        historyDesc: "中华苏维埃共和国国家银行在江西瑞金铸造。正面为地球火炬党徽，背面写有面值，极为罕见。" 
    },
    "1804年美国波斯特版一美圆银币": { 
        name: "1804年美国波斯特版一美圆银币", type: "stamp_coin", typeName: "邮币", rarity: 4, rarityName: "传奇", value: 64000000, 
        maps: [6, 7], artStatus: "全美钱币之王", historyEra: "1834年补铸", 
        historyDesc: "虽然名义年份是1804，但实际上是美国政府后期作为外交礼品特制试铸的壹圆银币，全美集币界的最高终极神物。" 
    },
    "日本明治三年旭日龙拾钱银币": { 
        name: "日本明治三年旭日龙拾钱银币", type: "stamp_coin", typeName: "邮币", rarity: 1, rarityName: "精工", value: 350000, 
        maps: [1, 4], artStatus: "明治维新早期币", historyEra: "明治三年", 
        historyDesc: "明治维新初期全面引入西方设备制造的机制币。正面是华丽的旭日图案，背面雕双龙，是亚洲早期机制币典型。" 
    },
    "袁世凯像民国三年签字版壹圆银币": { 
        name: "袁世凯像民国三年签字版壹圆银币", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 24000000, 
        maps: [6, 7], artStatus: "签名版大头机制王", historyEra: "民国三年", 
        historyDesc: "天津造币厂意大利总雕刻师乔治（Giorgi）在袁大头人像右下角留有英文字母缩写签名，属极罕见的样币。" 
    },
    "明代大明通行宝钞壹贯桑皮大钞": { 
        name: "明代大明通行宝钞壹贯桑皮大钞", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 6800000, 
        maps: [3, 7], artStatus: "世界面积最大纸币", historyEra: "明洪武年间", 
        historyDesc: "以天然桑皮纸印制，面积硕大。由于明中后期通货膨胀毁弃严重，保存至今品相完好无缺的宝钞极其难得。" 
    },
    "清户部官票拾两桑皮官钞": { 
        name: "清户部官票拾两桑皮官钞", type: "stamp_coin", typeName: "邮币", rarity: 1, rarityName: "精工", value: 920000, 
        maps: [1, 3], artStatus: "咸丰筹饷官票", historyEra: "清咸丰三年", 
        historyDesc: "咸丰年间由于太平天国战事爆发，财政极度空虚，政府特制官票。盖有户部大红官印，具有极高历史文献价值。" 
    },
    "1927年张作霖大元帅纪念银币": { 
        name: "1927年张作霖大元帅纪念银币", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 28500000, 
        maps: [6, 7], artStatus: "北洋终局军阀币", historyEra: "1927年", 
        historyDesc: "张作霖就任北洋安国军大元帅时天津造币厂试铸的纪念币。随后皇姑屯事件爆发，此币从未发行，存世极少。" 
    },
    "大清第一套大龙薄纸三分邮票": { 
        name: "大清第一套大龙薄纸三分邮票", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 2400000, 
        maps: [3, 7], artStatus: "华邮始祖", historyEra: "清光绪四年", 
        historyDesc: "中国历史上的第一套正式邮票。采用薄纸印刷，中心绘蟠龙戏珠。带完整厂铭与原胶的薄纸龙票在邮界备受推崇。" 
    },
    "大清小龙改值加盖二十份大字邮票": { 
        name: "大清小龙改值加盖二十份大字邮票", type: "stamp_coin", typeName: "邮币", rarity: 1, rarityName: "精工", value: 750000, 
        maps: [1, 3], artStatus: "海关改值趣味集集", historyEra: "清代中晚期", 
        historyDesc: "在第一版小龙邮票上加盖银两面值，加盖油墨中由于工人失误混入了红色，形成的特殊变色趣味版，极具可玩性。" 
    },
    "新中国梅兰芳舞台艺术小型张原胶": { 
        name: "新中国梅兰芳舞台艺术小型张原胶", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 5000000, 
        maps: [5, 7], artStatus: "新中国特种小型张代表", historyEra: "1962年", 
        historyDesc: "吴作人设计，画面为梅兰芳《贵妃醉酒》剧照。发行量极少，在新中国现代集邮长河中常年高居龙头地位。" 
    },
    "1980年齐白石作品选T44贵宾整版票": { 
        name: "1980年齐白石作品选T44贵宾整版票", type: "stamp_coin", typeName: "邮币", rarity: 1, rarityName: "精工", value: 180000, 
        maps: [1, 7], artStatus: "齐白石泼墨集", historyEra: "1980年", 
        historyDesc: "精选齐白石大师生前的虾、蛙、小鸡等水墨代表作入邮。印制色彩还原极准，水墨韵味在方寸间体现得淋漓尽致。" 
    },
    "古希腊雅典娜猫头鹰高浮雕四德拉克马银币": { 
        name: "古希腊雅典娜猫头鹰高浮雕四德拉克马银币", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 3800000, 
        maps: [5, 6, 7], artStatus: "西方古典币图腾", historyEra: "公元前5世纪", 
        historyDesc: "正面为雅典娜女神戴盔头像，背面为智慧的象征猫头鹰。高浮雕手工锤打，是古希腊鼎盛时期西方贸易的硬通货。" 
    },
    "大清同治皇帝登基大典开炉纪念大钱": { 
        name: "大清同治皇帝登基大典开炉纪念大钱", type: "stamp_coin", typeName: "邮币", rarity: 2, rarityName: "罕见", value: 4100000, 
        maps: [3, 7], artStatus: "皇家开炉纪念物", historyEra: "清同治元年", 
        historyDesc: "宝源局为庆祝同治登基特别铸造的超大厚重纪念钱。铜质泛红，外缘满刻吉祥云纹，不用于流通，仅赏赐王公贵族。" 
    },
    "清光绪三十年湖北省造大清银币双通壹两": { 
        name: "清光绪三十年湖北省造大清银币双通壹两", type: "stamp_coin", typeName: "邮币", rarity: 3, rarityName: "史诗", value: 19500000, 
        maps: [1, 7], artStatus: "湖北壹两双通机制", historyEra: "清光绪三十年", 
        historyDesc: "张之洞主持湖北省造机制币。由于‘壹两’单位与民间传统的七钱二分不合，迅速停铸，双连通字版极为稀少珍贵。" 
    },
    "苏联列宁逝世一周年红碎无齿纪念邮票": { 
        name: "苏联列宁逝世一周年红碎无齿纪念邮票", type: "stamp_coin", typeName: "邮币", rarity: 1, rarityName: "精工", value: 290000, 
        maps: [4, 5], artStatus: "苏俄珍稀革命集邮", historyEra: "1925年", 
        historyDesc: "苏联早期为纪念列宁逝世印制的红色框线试样版。无齿孔，因数量稀少，是红集流派藏家必争的国际名品。" 
    },
    // ==================== 【3. 玉器类 (jade) - 40 种全量不丢】 ====================
    "红山文化玉猪龙": { 
        name: "红山文化玉猪龙", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 110000000, 
        maps: [1, 7], artStatus: "华夏第一玉龙", historyEra: "新石器时代红山文化", 
        historyDesc: "由整块墨绿色岫岩玉圆雕而成。身体蜷曲如蝉蛹，肥首大耳，吻部前突，是先民崇拜龙图腾的最高源头圣物。" 
    },
    "良渚文化神人兽面纹玉琮": { 
        name: "良渚文化神人兽面纹玉琮", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 135000000, 
        maps: [3, 7], artStatus: "玉琮之王", historyEra: "新石器时代良渚文化", 
        historyDesc: "器型外方内圆，枢纽天地。通体以极细致的微雕工艺，刻画出神人骑兽的神秘面纹，代表了史前琢玉工艺的极高水准。" 
    },
    "战国曾侯乙青铜镂空嵌玉大佩": { 
        name: "战国曾侯乙青铜镂空嵌玉大佩", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 98000000, 
        maps: [1, 7], artStatus: "战国玉雕天花板", historyEra: "战国早期", 
        historyDesc: "曾侯乙墓出土同类重器。由数节和田青玉龙凤佩通过活环金丝连接而成，可自由折叠，工艺繁缛至极。" 
    },
    "汉代龙凤纹重圈飞天玉璧": { 
        name: "汉代龙凤纹重圈飞天玉璧", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 52000000, 
        maps: [3, 7], artStatus: "汉代皇家礼玉", historyEra: "西汉时期", 
        historyDesc: "优质和田白玉雕琢。璧分内外两圈，内圈刻蒲纹，外圈高浮雕游龙戏凤，线条遒劲有力，带有大汉雄浑之风。" 
    },
    "唐金镶玉透雕折枝花卉纹带銙": { 
        name: "唐金镶玉透雕折枝花卉纹带銙", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 42000000, 
        maps: [5, 7], artStatus: "盛唐金镶玉极品", historyEra: "盛唐时期", 
        historyDesc: "玉质温润如脂，外框包裹纯金。玉面透雕唐代极盛行的折枝牡丹纹，尽显大唐贵族腰间玉带的奢华气象。" 
    },
    "宋白玉荷叶戏水鸳鸯摆件": { 
        name: "宋白玉荷叶戏水鸳鸯摆件", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 13500000, 
        maps: [2, 7], artStatus: "宋代文人玉雕", historyEra: "宋代", 
        historyDesc: "和田籽料巧雕。鸳鸯交颈戏水，身下荷叶纹理细腻自然。宋代玉器深受文人画影响，写实且市井气息浓厚。" 
    },
    "元巧雕独山玉大德歌春水佩": { 
        name: "元巧雕独山玉大德歌春水佩", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 16000000, 
        maps: [1, 7], artStatus: "元代北方春水玉", historyEra: "元代", 
        historyDesc: "采用独山玉的多色特性进行‘俏色巧雕’。画面表现海东青捕天鹅的激烈场景，带牌刻有‘大德’年号，极罕见。" 
    },
    "明子冈款白玉透雕高士登高牌": { 
        name: "明子冈款白玉透雕高士登高牌", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 28000000, 
        maps: [2, 7], artStatus: "明代陆子冈神作", historyEra: "明万历年间", 
        historyDesc: "琢玉一代宗师陆子冈亲制。采用独门‘把子工’与昆吾刀法，在方寸白玉牌上雕刻高士登高图，牌侧隐刻‘子冈’二字。" 
    },
    "清乾隆和阗白玉龙凤呈祥盖瓶": { 
        name: "清乾隆和阗白玉龙凤呈祥盖瓶", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 125000000, 
        maps: [3, 6, 7], artStatus: "乾隆玉工巅峰", historyEra: "清乾隆年间", 
        historyDesc: "选用极品和田羊脂白玉，毫无瑕疵。瓶身采用大内‘乾隆工’高浮雕龙凤纹，器型仿古，抛光柔和如凝脂。" 
    },
    "清翡翠透雕螭龙寿字纹如意": { 
        name: "清翡翠透雕螭龙寿字纹如意", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 48000000, 
        maps: [3, 7], artStatus: "晚清宫廷翡翠", historyEra: "清中晚期", 
        historyDesc: "清中期后翡翠盛行。此如意由整块老坑种满绿翡翠雕就，翠色欲滴，水头极足，柄部透雕群螭捧寿，寓意万寿无疆。" 
    },
    "商代圆雕青玉侧坐美人像": { 
        name: "商代圆雕青玉侧坐美人像", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 33000000, 
        maps: [1, 7], artStatus: "商代妇好墓同类", historyEra: "商代晚期", 
        historyDesc: "圆雕玉人极为罕见。美人作侧坐状，发髻高耸，身上刻有双线云纹，全面展现了三千年前殷商贵族的服饰与发型。" 
    },
    "西周五璜组玉佩": { 
        name: "西周五璜组玉佩", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 89000000, 
        maps: [3, 7], artStatus: "西周列礼重器", historyEra: "西周时期", 
        historyDesc: "由多件玉璜、玉管、玛瑙珠串联而成的奢华胸佩。‘行步则有环佩之声’，是西周时期划分贵族阶级礼制的核心载体。" 
    },
    "汉代玉雕天马奔腾摆件": { 
        name: "汉代玉雕天马奔腾摆件", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 65000000, 
        maps: [6, 7], artStatus: "汉代圆雕神品", historyEra: "西汉时期", 
        historyDesc: "和田白玉质地，带有局部红褐色沁。天马双翅展开，作昂首飞奔状，肌肉线条充满爆发力，极为罕见的汉代大型圆雕。" 
    },
    "魏晋南北朝青玉辟邪兽": { 
        name: "魏晋南北朝青玉辟邪兽", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 19500000, 
        maps: [1, 7], artStatus: "魏晋神兽大样", historyEra: "魏晋南北朝", 
        historyDesc: "青玉质感古拙，辟邪兽作伏地咆哮状，长须垂胸，双角后昂。雕刻刀法大刀阔斧，完美体现了魏晋时期的狂放名士风骨。" 
    },
    "唐白玉执扇仕女圆雕摆件": { 
        name: "唐白玉执扇仕女圆雕摆件", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 22000000, 
        maps: [3, 7], artStatus: "大唐玉雕红颜", historyEra: "唐代中叶", 
        historyDesc: "玉质极其细腻，仕女身形丰腴，头挽高髻，手执纨扇，神态慵懒。衣纹线条流畅如行云流水，堪称唐代玉人绝品。" 
    },
    "宋黄玉双鹤衔灵芝摆件": { 
        name: "宋黄玉双鹤衔灵芝摆件", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 14800000, 
        maps: [1, 2], artStatus: "罕见宋代黄玉", historyEra: "北宋时期", 
        historyDesc: "‘玉色以黄为上’。此件采用珍稀的和田黄玉料，巧雕双鹤相互顾盼，口中各衔一枝灵芝，寓意长寿，刀工细腻温婉。" 
    },
    "辽金巧雕秋山图玉带扣": { 
        name: "辽金巧雕秋山图玉带扣", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 11500000, 
        maps: [1, 7], artStatus: "北方游牧秋山玉", historyEra: "金代", 
        historyDesc: "秋山玉专表现北方秋季狩猎场景。在白玉料上利用金色玉皮巧雕柞树、顽石与潜伏的猛虎，具有浓郁的北方民族特色。" 
    },
    "明青玉镂空松鹿延年笔架": { 
        name: "明青玉镂空松鹿延年笔架", type: "jade", typeName: "玉器", rarity: 1, rarityName: "精工", value: 4200000, 
        maps: [1, 2], artStatus: "明代文房玉器", historyEra: "明代中期", 
        historyDesc: "青玉质地坚密。采用多层透雕工艺刻画出苍松、翠柏、灵鹿等文人喜闻乐见的隐逸图案，是明代书房案头的雅玩。" 
    },
    "清乾隆碧玉刻团寿纹饕餮面双耳大鼎": { 
        name: "清乾隆碧玉刻团寿纹饕餮面双耳大鼎", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 38000000, 
        maps: [3, 5, 7], artStatus: "乾隆仿古玉器", historyEra: "清乾隆年间", 
        historyDesc: "由整块硕大新疆玛纳斯碧玉雕成。器型完全仿照商周青铜鼎，腹部满刻饕餮纹与团寿字，是乾隆‘玉器复古’运动的巅峰。" 
    },
    "清白玉雕桐荫仕女图摆件": { 
        name: "清白玉雕桐荫仕女图摆件", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 118000000, 
        maps: [3, 6, 7], artStatus: "宫廷俏色国宝", historyEra: "清乾隆时期", 
        historyDesc: "故宫馆藏同类巧雕神作。利用挖去玉碗碗心后的废料，巧妙雕琢成两扇庭院大门，仕女在门缝中对望，堪称废料利用的旷古神技。" 
    },
    "新石器时代含山文化玉鹰": { 
        name: "新石器时代含山文化玉鹰", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 8500000, 
        maps: [1, 7], artStatus: "史前凌家滩玉雕", historyEra: "新石器时代凌家滩文化", 
        historyDesc: "极为罕见的五千年前玉鸟雕刻。玉鹰展翅欲飞，胸腹部刻有神秘的八角星纹，是史前巫师祭祀天地时的核心通神法器。" 
    },
    "商代玉雕双面枭首佩": { 
        name: "商代玉雕双面枭首佩", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 9800000, 
        maps: [1, 7], artStatus: "殷墟玄鸟遗风", historyEra: "商代中晚期", 
        historyDesc: "‘天命玄鸟，降而生商’。此佩双面雕刻猫头鹰（枭）的正面大眼形象，线条呈典型臣字眼，极具神秘原始的震慑力。" 
    },
    "西周玉雕立姿玉蝉": { 
        name: "西周玉雕立姿玉蝉", type: "jade", typeName: "玉器", rarity: 1, rarityName: "精工", value: 2200000, 
        maps: [1, 3], artStatus: "周代蜕变玉蝉", historyEra: "西周", 
        historyDesc: "古人以蝉蜕变比喻再生。此蝉采用典型的‘西周一面坡’刀法刻画，线条边缘斜出锋芒，线条流畅利落，是西周名品。" 
    },
    "战国玉雕镂空出廓双龙璧": { 
        name: "战国玉雕镂空出廓双龙璧", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 41000000, 
        maps: [1, 7], artStatus: "战国出廓璧皇", historyEra: "战国中晚期", 
        historyDesc: "在传统玉璧的外缘（出廓）追加雕刻了两条凌空翱翔的透雕游龙。构图极其险峻奇巧，彰显了战国高超的解玉技术。" 
    },
    "东汉玉雕‘万寿无疆’四神出廓璧": { 
        name: "东汉玉雕‘万寿无疆’四神出廓璧", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 142000000, 
        maps: [3, 7], artStatus: "汉代带铭文至尊璧", historyEra: "东汉时期", 
        historyDesc: "极为罕见地在玉璧上方出廓处透雕青龙、白虎、朱雀、玄武四神，并直接镂空雕刻篆书‘万寿无疆’四字，皇家无上圣物。" 
    },
    "魏晋白玉雕谷纹高足杯": { 
        name: "魏晋白玉雕谷纹高足杯", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 17500000, 
        maps: [1, 7], artStatus: "三国魏晋饮酒器", historyEra: "曹魏至西晋", 
        historyDesc: "仿照青铜高足杯制式，通体满刻饱满的浮雕谷纹。白玉质地在千年的土埋中产生了美丽的微红沁色，文人气息极浓。" 
    },
    "隋代透雕双背嵌金玉步摇": { 
        name: "隋代透雕双背嵌金玉步摇", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 39000000, 
        maps: [3, 7], artStatus: "隋代宫廷步摇", historyEra: "隋代", 
        historyDesc: "隋代传世玉器极少。此步摇上部透雕双孔雀对鸣，孔雀眼部嵌有极细的纯金丝，下坠玉珠，微步摇晃，华贵异常。" 
    },
    "唐巧雕玛瑙羚羊首杯": { 
        name: "唐巧雕玛瑙羚羊首杯", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 160000000, 
        maps: [5, 7], artStatus: "丝绸之路大唐绝响", historyEra: "盛唐时期", 
        historyDesc: "陕博镇馆之宝同类级。利用红白相间的缠丝玛瑙依势巧雕成一只羚羊头像，杯口即为羊首，充满了浓郁萨珊波斯风格。" 
    },
    "宋白玉高浮雕云龙纹文房水盂": { 
        name: "宋白玉高浮雕云龙纹文房水盂", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 12800000, 
        maps: [1, 2], artStatus: "宋代书房名玉", historyEra: "南宋时期", 
        historyDesc: "水盂是文房盛水器。此盂由一块无瑕白玉籽料掏膛而成，外壁高浮雕一条矫健穿云的独角嫩龙，工艺兼具力量与灵动。" 
    },
    "元白玉透雕‘海东青击天鹅’带銙": { 
        name: "元白玉透雕‘海东青击天鹅’带銙", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 15000000, 
        maps: [1, 7], artStatus: "春水流派巅峰", historyEra: "元代中期", 
        historyDesc: "极具蒙古族北方游牧围猎色彩的玉器。多层透雕出凶猛的海东青在层层荷叶中俯冲抓捕硕大天鹅的场景，生死瞬间，扣人心弦。" 
    },
    "明墨玉巧雕‘太白醉酒’摆件": { 
        name: "明墨玉巧雕‘太白醉酒’摆件", type: "jade", typeName: "玉器", rarity: 1, rarityName: "精工", value: 3600000, 
        maps: [1, 2], artStatus: "明代水墨巧雕", historyEra: "明代晚期", 
        historyDesc: "利用墨玉中黑白分明的天然界限。将黑色部分雕刻成李白的大醉衣袍，白色部分雕刻其面部与酒缸，神情狂放，极其绝妙。" 
    },
    "清乾隆白玉福寿双全如意耳抱月瓶": { 
        name: "清乾隆白玉福寿双全如意耳抱月瓶", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 72000000, 
        maps: [3, 6, 7], artStatus: "抱月皇家重器", historyEra: "清乾隆年间", 
        historyDesc: "体量巨大的和田白玉大器。抱月瓶器型端庄，双耳雕刻成如意祥云状，腹部浅浮雕蝙蝠与仙桃（福寿双全），毫无绺裂，极其震撼。" 
    },
    "清痕都斯坦艾哈迈德款青玉嵌金丝嵌红宝铁扇": { 
        name: "清痕都斯坦艾哈迈德款青玉嵌金丝嵌红宝铁扇", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 68000000, 
        maps: [3, 5, 7], artStatus: "异国痕都斯坦玉", historyEra: "莫卧儿帝国（乾隆进贡）", 
        historyDesc: "典型的伊斯兰风格玉器。玉质薄如蝉翼，上采用高超的水磨工艺内嵌纯金细丝与数十颗纯天然红宝石，深受乾隆帝痴迷。" 
    },
    "清慈禧御用透雕老坑满绿翡翠龙簪": { 
        name: "清慈禧御用透雕老坑满绿翡翠龙簪", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 112000000, 
        maps: [3, 6, 7], artStatus: "清代翡翠终极代表", historyEra: "清光绪年间", 
        historyDesc: "慈禧太后生前极为钟爱的头饰。由整块帝王绿翡翠透雕成一条祥龙，龙头微翘，水头通透达玻璃种，是极品翡翠的无上图腾。" 
    },
    "红山文化黄玉双孔玦": { 
        name: "红山文化黄玉双孔玦", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 7200000, 
        maps: [1, 7], artStatus: "红山古玉玦", historyEra: "新石器时代", 
        historyDesc: "选用极罕见的红山黄玉。玦呈圆形，内开双孔用于穿绳佩戴，表面由于数千年岁月的洗礼形成了厚重柔和的包浆。" 
    },
    "良渚文化刻鸟纹玉璧": { 
        name: "良渚文化刻鸟纹玉璧", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 45000000, 
        maps: [1, 7], artStatus: "史前图腾铭刻", historyEra: "新石器时代", 
        historyDesc: "大体量的良渚青玉璧。最珍贵之处在于玉璧边缘隐刻有一只站在祭台上的神鸟剪影，是史前鸟图腾崇拜的核心铁证。" 
    },
    "商代高浮雕玉龙形璜": { 
        name: "商代高浮雕玉龙形璜", type: "jade", typeName: "玉器", rarity: 1, rarityName: "精工", value: 3100000, 
        maps: [1, 3], artStatus: "殷墟风格玉璜", historyEra: "商代", 
        historyDesc: "弧形玉璜，两端各雕一龙头。通体装饰典型的商代双线折角云纹，属于商代贵族阶层佩戴的身份标志物。" 
    },
    "战国白玉微雕勾云纹镂空剑璏": { 
        name: "战国白玉微雕勾云纹镂空剑璏", type: "jade", typeName: "玉器", rarity: 2, rarityName: "罕见", value: 12000000, 
        maps: [1, 7], artStatus: "战国玉剑饰", historyEra: "战国晚期", 
        historyDesc: "剑璏是固定在宝剑鞘上用于穿带挂提的玉饰。此件白玉制成，镂空雕刻工艺极精，凸显战国武士阶层的奢华佩剑风尚。" 
    },
    "汉代白玉圆雕‘羽人骑天马’摆件": { 
        name: "汉代白玉圆雕‘羽人骑天马’摆件", type: "jade", typeName: "玉器", rarity: 4, rarityName: "传奇", value: 155000000, 
        maps: [6, 7], artStatus: "大汉寻仙终极神作", historyEra: "西汉武帝时期", 
        historyDesc: "表现汉代追求长生不老、羽化登仙的旷世神作。仙人（羽人）手持灵芝，骑在一匹双翼展翅的天马上，圆雕刀法惊天动地。" 
    },
    "清乾隆白玉福寿三多双耳活环大洗": { 
        name: "清乾隆白玉福寿三多双耳活环大洗", type: "jade", typeName: "玉器", rarity: 3, rarityName: "史诗", value: 55000000, 
        maps: [3, 5, 7], artStatus: "宫廷大内文房", historyEra: "清乾隆年间", 
        historyDesc: "体量硕大的宫廷洗漱、陈设器。两侧掏雕双如意活环，洗心内高浮雕佛手、桃子、石榴（寓意多福多寿多子），巧夺天工。" 
    },

    // ==================== 【4. 古籍善本类 (book) - 40 种全量不丢】 ====================
    "北宋开宝藏大观愿文残卷": { 
        name: "北宋开宝藏大观愿文残卷", type: "book", typeName: "古籍善本", rarity: 4, rarityName: "传奇", value: 110000000, 
        maps: [3, 7], artStatus: "中国雕版印刷活化石", historyEra: "北宋开宝年间", 
        historyDesc: "中国第一部官刻佛教大藏经《开宝藏》的传世残卷。雕刻刀法古拙沉着，纸张历经千年不蠹，是全球印刷史的无上圣物。" 
    },
    "元刻本《大元圣政国朝典章》纯品": { 
        name: "元刻本《大元圣政国朝典章》纯品", type: "book", typeName: "古籍善本", rarity: 4, rarityName: "传奇", value: 96000000, 
        maps: [3, 7], artStatus: "元代法学第一刻", historyEra: "元英宗至治年间", 
        historyDesc: "简称《元典章》。此本为元代建阳书坊精心刊刻，全面记录了元代的法律法规条例，传世绝少，是研究元代历史的孤本级文献。" 
    },
    "明永乐大典重抄本《模》字册": { 
        name: "明永乐大典重抄本《模》字册", type: "book", typeName: "古籍善本", rarity: 4, rarityName: "传奇", value: 150000000, 
        maps: [3, 5, 7], artStatus: "人类文明万宝之书", historyEra: "明嘉靖重抄本", 
        historyDesc: "永乐大典正本已失踪。此册为嘉靖年间倾全国书手精心手抄的副本。开本宏大，墨光如漆，记录了中国失传的无数中古文献。" 
    },
    "清文渊阁四库全书《史部·战国策》原档": { 
        name: "清文渊阁四库全书《史部·战国策》原档", type: "book", typeName: "古籍善本", rarity: 4, rarityName: "传奇", value: 130000000, 
        maps: [3, 7], artStatus: "皇家第一正本书大样", historyEra: "清乾隆时期", 
        historyDesc: "专供乾隆皇帝在文渊阁御览的《四库全书》正本。封面采用绢绣绿绫，正文由大内馆阁体书写，盖有‘文渊阁宝’御印。" 
    },
    "宋拓本《淳化阁帖》大观夹雪本": { 
        name: "宋拓本《淳化阁帖》大观夹雪本", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 65000000, 
        maps: [3, 7], artStatus: "法帖之祖宋拓", historyEra: "北宋至南宋", 
        historyDesc: "汇集中国历代书法名家墨宝。此本为宋代用极品夹雪宣纸精拓而成，字迹骨肉丰满，墨色层次分明，堪称书法界的至尊法宝。" 
    },
    "明万历金陵胡氏影宋刻《文选》": { 
        name: "明万历金陵胡氏影宋刻《文选》", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 12500000, 
        maps: [1, 3], artStatus: "明代影宋名刻", historyEra: "明万历年间", 
        historyDesc: "金陵胡氏主持的影宋代大字本刊刻。字体完全模仿宋体字那刚劲的横平竖直，纸白如玉，墨香扑鼻，是明代翻刻的最高峰。" 
    },
    "古海德堡活字印刷本《圣经》二页": { 
        name: "古海德堡活字印刷本《圣经》二页", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 38000000, 
        maps: [5, 6, 7], artStatus: "欧洲活字印刷始祖", historyEra: "1450年代（谷腾堡时期）", 
        historyDesc: "欧洲谷腾堡金属活字印刷术初创时期的《古兰圣经》珍稀残页。印刷字口带有中世纪早期的哥特泥金装饰，国际藏界至宝。" 
    },
    "大英博物馆藏达芬奇手稿复刻初版": { 
        name: "大英博物馆藏达芬奇手稿复刻初版", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 14500000, 
        maps: [5, 6], artStatus: "近代科学文艺手稿面世", historyEra: "1890年代初版", 
        historyDesc: "十九世纪末由大英博物馆动用最高阶光刻工艺，限量首次完美复刻的达芬奇‘大西洋手稿’第一批初版，具有极高的文献价值。" 
    },
    "唐代吐鲁番出土写经《妙法莲华经》残卷": { 
        name: "唐代吐鲁番出土写经《妙法莲华经》残卷", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 45000000, 
        maps: [1, 7], artStatus: "西域敦煌写经风骨", historyEra: "唐代早期", 
        historyDesc: "由西域虔诚写经生手写在本地硬黄纸上。字体带有一丝隶意，墨迹历经西域大漠千年干燥而保存完美，带有浓厚宗教加持感。" 
    },
    "五代后唐九经刻本《尚书》孤页": { 
        name: "五代后唐九经刻本《尚书》孤页", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 32000000, 
        maps: [3, 7], artStatus: "乱世儒家大刻", historyEra: "五代后唐", 
        historyDesc: "冯道主持的‘后唐长兴九经’刻本残页。这是中国历史上第一次由国家政府主持的大规模刊刻儒家经典，存世仅此单页。" 
    },
    "北宋大观刻本《伤寒论》十卷本": { 
        name: "北宋大观刻本《伤寒论》十卷本", type: "book", typeName: "古籍善本", rarity: 4, rarityName: "传奇", value: 120000000, 
        maps: [3, 7], artStatus: "中医圣书天下第一本", historyEra: "北宋大观年间", 
        historyDesc: "校正医书局精心刊刻的张仲景医圣巨作。北宋刻本校勘极精，字体带有标志性的柳体瘦硬感，是全世界中医界的终极圣物。" 
    },
    "南宋两浙东路茶盐司本《周易》": { 
        name: "南宋两浙东路茶盐司本《周易》", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 78000000, 
        maps: [3, 7], artStatus: "宋刻一页千金", historyEra: "南宋乾道年间", 
        historyDesc: "地方官刻本的极高杰出代表。地方茶盐司动用最上等工匠与名墨刊刻，版心宽大，字口深隽，历来是藏书界财力的终极象征。" 
    },
    "金代中都刻本《庄子注》纯品": { 
        name: "金代中都刻本《庄子注》纯品", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 18500000, 
        maps: [1, 7], artStatus: "金代北方刻书", historyEra: "金代晚期", 
        historyDesc: "金代统治北方时在中都（今北京）刊刻的道家经典。字体肥厚粗犷，融合了北朝碑刻的遒劲力量，为极罕见之孤本。" 
    },
    "明洪武官刻本《大明律》大样折本": { 
        name: "明洪武官刻本《大明律》大样折本", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 15500000, 
        maps: [1, 3], artStatus: "洪武开国法典", historyEra: "明洪武年间", 
        historyDesc: "明朝开国皇帝朱元璋亲自下旨编纂并刊刻的祖宗大法。开本宏大，字用赵体，纸张采用厚重的皮纸，充满开国威严气象。" 
    },
    "明正德刻本《西游记》早期平话本": { 
        name: "明正德刻本《西游记》早期平话本", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 11000000, 
        maps: [4, 7], artStatus: "明代神魔小说源头", historyEra: "明正德至嘉靖", 
        historyDesc: "在吴承恩百回本正式面世前，民间广为流传的西游记平话短本。内含大量珍贵的单页木版画插图，生动野趣。" 
    },
    "明代闵齐伋六色套印本《西厢记》": { 
        name: "明代闵齐伋六色套印本《西厢记》", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 29000000, 
        maps: [4, 7], artStatus: "明代多色套印巅峰", historyEra: "明崇祯年间", 
        historyDesc: "吴兴闵氏独步天下的多色套印绝技。红、黑、蓝、青、黄、紫六色在一页之上准确套印，画风极具晚清江南文人画的颓废美感。" 
    },
    "清康熙内府武英殿聚珍版《大清一统志》": { 
        name: "清康熙内府武英殿聚珍版《大清一统志》", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 9500000, 
        maps: [3, 7], artStatus: "内府木活字印刷", historyEra: "清康熙年间", 
        historyDesc: "武英殿采用由金简主持完善的木活字（聚珍版）工艺印刷。由于是皇家地理大志，内附多幅精细至极的木刻版画版图。" 
    },
    "清代顾广圻校刻《思适斋集》": { 
        name: "清代顾广圻校刻《思适斋集》", type: "book", typeName: "古籍善本", rarity: 1, rarityName: "精工", value: 3800000, 
        maps: [1, 2], artStatus: "乾嘉学派校勘刻", historyEra: "清嘉庆年间", 
        historyDesc: "清代第一校勘大师顾广圻亲自校对并出资刊刻。以‘无一字无来历’著称，错漏率极低，是清代私人刻书的清流标杆。" 
    },
    "清光绪江楚编译局石印本《全唐诗》": { 
        name: "清光绪江楚编译局石印本《全唐诗》", type: "book", typeName: "古籍善本", rarity: 1, rarityName: "精工", value: 1200000, 
        maps: [1, 4], artStatus: "晚清西洋石印引入", historyEra: "清光绪年间", 
        historyDesc: "利用十九世纪末从西洋引入的石印（平版印刷）技术。完美还原了手写小楷的秀丽风骨，字形极小却清晰异常，反映技术转型。" 
    },
    "民国商务印书馆影印《四部丛刊》初编正本": { 
        name: "民国商务印书馆影印《四部丛刊》初编正本", type: "book", typeName: "古籍善本", rarity: 1, rarityName: "精工", value: 1850000, 
        maps: [1, 6], artStatus: "民国现代出版宏篇", historyEra: "民国时期", 
        historyDesc: "商务印书馆动用高级珂罗版光刻技术，将散落全球的宋元稀世珍本进行大规模影印出版，开创了现代古籍整理之先河。" 
    },
    "唐咸通九年王玠募刻《金刚经》木刻版画孤页": { 
        name: "唐咸通九年王玠募刻《金刚经》木刻版画孤页", type: "book", typeName: "古籍善本", rarity: 4, rarityName: "传奇", value: 165000000, 
        maps: [5, 7], artStatus: "世界雕版印刷开山祖", historyEra: "唐咸通九年（868年）", 
        historyDesc: "大英图书馆馆藏国宝同类残页。画面绘释迦牟尼在祇树给孤独园为须菩提说法的情景，线条苍劲，是世界公认最早的有确切纪年的雕版印刷品。" 
    },
    "五代吴越国钱弘俶募刻《宝箧印陀罗尼经》": { 
        name: "五代吴越国钱弘俶募刻《宝箧印陀罗尼经》", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 39000000, 
        maps: [2, 7], artStatus: "雷峰塔地宫秘藏", historyEra: "五代十国吴越国", 
        historyDesc: "当年吴越王钱弘俶效仿阿育王造塔，将此经卷秘藏于雷峰塔砖孔内。1924年雷峰塔倒塌时破砖而出，带有传奇的佛家历史加持。" 
    },
    "北宋西夏文刻本《大悲心陀罗尼经》": { 
        name: "北宋西夏文刻本《大悲心陀罗尼经》", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 48000000, 
        maps: [1, 7], artStatus: "消失的西夏文字", historyEra: "北宋至西夏", 
        historyDesc: "采用已经完全消失的西夏死文字刊刻的佛教经典。西夏字形复杂如天书，雕刻规整，对研究中国西北少数民族历史具有绝高价值。" 
    },
    "宋临安府陈宅书籍铺刻本《唐书》": { 
        name: "宋临安府陈宅书籍铺刻本《唐书》", type: "book", typeName: "古籍善本", rarity: 4, rarityName: "传奇", value: 105000000, 
        maps: [3, 7], artStatus: "南宋市肆刻书第一杰", historyEra: "南宋中晚期", 
        historyDesc: "杭州陈宅书籍铺是南宋最著名的私人出版商。其刻书字体清秀，纸质柔韧，世称‘陈斋本’，历来是藏书家梦寐以求的顶级藏品。" 
    },
    "宋两浙西路转运司本《汉书》王莽传": { 
        name: "宋两浙西路转运司本《汉书》王莽传", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 82000000, 
        maps: [3, 7], artStatus: "宋官刻本大样", historyEra: "南宋孝宗年间", 
        historyDesc: "两浙西路官方主持校勘的高级官刻本。字体端庄肃穆，带有浓厚的欧阳询体风骨，专门记录王莽篡汉始末，文献学术价值极高。" 
    },
    "元大德刻本《梦溪笔谈》纯品": { 
        name: "元大德刻本《梦溪笔谈》纯品", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 54000000, 
        maps: [3, 7], artStatus: "中国古代科学第一书", historyEra: "元大德年间", 
        historyDesc: "沈括所著古代科技大百科。由于宋代初版已完全失传，此元代大德官刻本即为世间传世最古老、最接近原貌的最高版本。" 
    },
    "元代至正本《三国志通俗演义》残册": { 
        name: "元代至正本《三国志通俗演义》残册", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 21000000, 
        maps: [4, 7], artStatus: "元代古典演义源头", historyEra: "元末明初", 
        historyDesc: "极为罕见的元代罗贯中百回本早期刊刻残册。纸张粗糙，带有典型的民间戏曲平话风格，内含关羽温酒斩华雄等名场面版画。" 
    },
    "明代藩王周府刻本《神农本草经》": { 
        name: "明代藩王周府刻本《神农本草经》", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 13800000, 
        maps: [2, 3], artStatus: "明代明藩王刻书", historyEra: "明嘉靖年间", 
        historyDesc: "明代周王府出资延请名工刊刻的医药大作。藩王刻书不惜工本，用料奢华，插图中的各种本草植物形态勾勒得栩栩如生。" 
    },
    "明嘉靖郭勋刻本《水浒传》二十卷本": { 
        name: "明嘉靖郭勋刻本《水浒传》二十卷本", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 31000000, 
        maps: [4, 7], artStatus: "武定侯武官刻名作", historyEra: "明嘉靖时期", 
        historyDesc: "由大明武定侯郭勋主持校刻的《水浒传》。由于郭勋身份显赫，此本刻印精美绝伦，是水浒传流传史上最重要的祖本之一。" 
    },
    "明代汲古阁刻本《十七史》正本": { 
        name: "明代汲古阁刻本《十七史》正本", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 16500000, 
        maps: [2, 7], artStatus: "毛氏汲古阁刻", historyEra: "明末清初", 
        historyDesc: "常熟毛晋私人汲古阁主持的旷古绝今的浩大刻书工程。毛氏以‘有送书至者，以千钱买之’招揽秘本，汲古阁本天下闻名。" 
    },
    "明崇祯本《天工开物》初版原印": { 
        name: "明崇祯本《天工开物》初版原印", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 42000000, 
        maps: [5, 7], artStatus: "十七世纪工艺百科", historyEra: "明崇祯十年（1637年）", 
        historyDesc: "宋应星所著，涂绍煃资助刊刻。由于清代将此书列为禁书，导致国内初版本几乎绝迹，此本品相完好，内含大量冶炼、造纸精细插图。" 
    },
    "清顺治内府刻本《御制劝善要言》": { 
        name: "清顺治内府刻本《御制劝善要言》", type: "book", typeName: "古籍善本", rarity: 1, rarityName: "精工", value: 4500000, 
        maps: [3, 7], artStatus: "清代开国第一内府刻", historyEra: "清顺治年间", 
        historyDesc: "顺治皇帝亲自作序的内府官刻本。开本宏大，纸张采用满洲传统的开化纸，洁白细腻，带有极高的皇家开国文献特征。" 
    },
    "清雍正内府铜活字本《古今图书集成》一册": { 
        name: "清雍正内府铜活字本《古今图书集成》一册", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 18000000, 
        maps: [3, 6, 7], artStatus: "中国金属活字第一大作", historyEra: "清雍正时期", 
        historyDesc: "雍正皇帝下令动用数万枚铜活字排版印刷的旷世大百科全书。字迹挺拔硬朗，带有微小的金属压痕，随后铜字多被熔铸铜钱，极为珍贵。" 
    },
    "清乾隆金简校印《武英殿聚珍版丛书》": { 
        name: "清乾隆金简校印《武英殿聚珍版丛书》", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 8800000, 
        maps: [3, 7], artStatus: "聚珍版活字鼻祖", historyEra: "清乾隆年间", 
        historyDesc: "大内总管金简主持，利用发明的木活字排印。因乾隆嫌‘活字’之名不雅，赐名‘聚珍版’，开创了清代官刻大规模使用活字的先河。" 
    },
    "清嘉庆影宋刻《本草纲目》梅启照本": { 
        name: "清嘉庆影宋刻《本草纲目》梅启照本", type: "book", typeName: "古籍善本", rarity: 1, rarityName: "精工", value: 2600000, 
        maps: [1, 2], artStatus: "清代高精医学影刻", historyEra: "清嘉庆年间", 
        historyDesc: "地方官宦梅启照主持，全本完全影刻明代最精美的金陵初本。无论是文字还是草药插图的线条都精准无误，极其适合医学史研究。" 
    },
    "清道光私刻本《海国图志》百卷本": { 
        name: "清道光私刻本《海国图志》百卷本", type: "book", typeName: "古籍善本", rarity: 2, rarityName: "罕见", value: 12000000, 
        maps: [6, 7], artStatus: "睁眼看世界第一书", historyEra: "清道光晚期", 
        historyDesc: "魏源受林则徐嘱托编纂。全面系统介绍西方世界地理、历史、军事，提出‘师夷长技以制夷’的伟大思想，影响了整个东亚近代化进程。" 
    },
    "清光绪广雅书局刻本《二十四史》单册": { 
        name: "清光绪广雅书局刻本《二十四史》单册", type: "book", typeName: "古籍善本", rarity: 1, rarityName: "精工", value: 850000, 
        maps: [1, 2], artStatus: "晚清四大官书局大作", historyEra: "清光绪年间", 
        historyDesc: "张之洞主持创办的广东广雅书局刊刻。校勘质量极高，世称‘广雅书局本’，是晚清雕版印刷最后的落日余晖巨作。" 
    },
    "民国乌程张氏适园影宋刻《张氏丛书》": { 
        name: "民国乌程张氏适园影宋刻《张氏丛书》", type: "book", typeName: "古籍善本", rarity: 1, rarityName: "精工", value: 1400000, 
        maps: [1, 6], artStatus: "民国藏书家精刻", historyEra: "民国初期", 
        historyDesc: "湖州大藏书家张钧衡适园主持的影宋代大字刊刻。动用了江南最后一代雕版老画工，纸张用极品宣纸，古风盎然。" 
    },
    "古埃及托勒密王朝莎草纸《亡灵书》残段": { 
        name: "古埃及托勒密王朝莎草纸《亡灵书》残段", type: "book", typeName: "古籍善本", rarity: 3, rarityName: "史诗", value: 62000000, 
        maps: [5, 6, 7], artStatus: "异域古文明载体", historyEra: "公元前3世纪", 
        historyDesc: "以天然尼罗河莎草纸拼织手写而成。上用古埃及圣书体记录引渡灵魂前往奥西里斯冥界的神秘咒语，配有色彩斑驳的象形版画。" 
    },
    "中世纪羊皮纸手抄本《查理曼大帝法典》": { 
        name: "中世纪羊皮纸手抄本《查理曼大帝法典》", type: "book", typeName: "古籍善本", rarity: 4, rarityName: "传奇", value: 115000000, 
        maps: [5, 6, 7], artStatus: "欧洲中世纪手抄巅峰", historyEra: "公元9世纪", 
        historyDesc: "由修道院资深抄写员在细腻的羔羊皮纸上手工抄写。内含极其奢华的泥金、内嵌青金石粉末的巨型首字母装饰画，欧洲皇室的核心圣物。" 
    },
    // ==================== 【5. 字画类 (painting) - 40 种全量不丢】 ====================
    "晋顾恺之洛神赋图绢本残卷": { 
        name: "晋顾恺之洛神赋图绢本残卷", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 180000000, 
        maps: [3, 7], artStatus: "高古绘画神作", historyEra: "东晋（宋摹本）", 
        historyDesc: "根据曹植《洛神赋》创作的连环画式神作。线条‘紧劲连绵，如春蚕吐丝’，完美展现了人仙殊途的凄美意境与高古神韵。" 
    },
    "唐阎立本步辇图轴": { 
        name: "唐阎立本步辇图轴", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 165000000, 
        maps: [3, 7], artStatus: "大唐政治史诗", historyEra: "唐代早期（宋摹本）", 
        historyDesc: "记录唐太宗李世民接见吐蕃使者禄东赞的伟大历史瞬间。线条洗练，敷色典雅，是汉藏和亲与盛唐外交的旷世铁证。" 
    },
    "五代顾闳中韩熙载夜宴图卷": { 
        name: "五代顾闳中韩熙载夜宴图卷", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 195000000, 
        maps: [3, 7], artStatus: "中国写实人物画巅峰", historyEra: "五代南唐（宋摹本）", 
        historyDesc: "南唐画院画家顾闳中潜入韩熙载府邸偷临的谍报式巨作。通过听乐、观舞、暂歇、清吹、散宴五段场景，将韩氏政治避祸的复杂心理刻画得入木三分。" 
    },
    "北宋张择端清明上河图卷": { 
        name: "北宋张择端清明上河图卷", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 250000000, 
        maps: [3, 7], artStatus: "中华第一神品", historyEra: "北宋徽宗年间", 
        historyDesc: "汴京繁华的百科全书。全长五米多，界画精细，牛马舟船、贩夫走卒悉数登场，虹桥决口瞬间惊心动魄，完美复现了北宋最后的盛世狂欢。" 
    },
    "北宋王希孟千里江山图卷": { 
        name: "北宋王希孟千里江山图卷", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 230000000, 
        maps: [3, 6, 7], artStatus: "青绿山水不朽丰碑", historyEra: "北宋政和年间", 
        historyDesc: "十八岁天才少年王希孟受徽宗亲传所作。采用珍稀孔雀石、蓝铜矿等矿物颜料叠加，历经千年依旧青绿耀眼，气势磅礴，江山无尽。" 
    },
    "元黄公望富春山居图残卷": { 
        name: "元黄公望富春山居图残卷", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 210000000, 
        maps: [3, 7], artStatus: "山水画二十四诸侯盟主", historyEra: "元代至正年间", 
        historyDesc: "黄公望晚年为无用师和尚所绘。饱受火殉之灾裂为两段，笔墨‘浑厚华滋’，将富春江畔的初秋景致推向了中国文人画水墨写意的最高禅境。" 
    },
    "明沈周庐山高图轴": { 
        name: "明沈周庐山高图轴", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 68000000, 
        maps: [2, 7], artStatus: "吴门画派开山作", historyEra: "明成化年间", 
        historyDesc: "沈周为老师陈宽祝寿而作。仿王蒙解索皴法，层峦叠嶂，飞瀑流泉，用山川之高大雄浑比喻老师的德高望重，笔墨苍劲繁密。" 
    },
    "明唐寅落花诗意图轴": { 
        name: "明唐寅落花诗意图轴", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 75000000, 
        maps: [4, 7], artStatus: "江南第一才子绝唱", historyEra: "明正德年间", 
        historyDesc: "唐伯虎历经科场舞弊案打击后的悲凉心境之作。画面老树昏鸦，落红满地，书画双绝，行书落花诗字字泣血，极具文人悲剧美感。" 
    },
    "清董其昌岩壑兰秀图卷": { 
        name: "清董其昌岩壑兰秀图卷", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 58000000, 
        maps: [3, 7], artStatus: "南北宗论正宗墨宝", historyEra: "明末清初", 
        historyDesc: "董其昌‘以书入画’的代表作。烟云流润，用笔柔中带刚，完美践行了他提出的‘生秀’理论，对清代正统派画风产生了统治级影响。" 
    },
    "清石涛苦瓜和尚山水清音图轴": { 
        name: "清石涛苦瓜和尚山水清音图轴", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 82000000, 
        maps: [2, 7], artStatus: "清初四僧革新神品", historyEra: "清康熙年间", 
        historyDesc: "‘搜尽奇峰打草稿’。石涛打破传统程式，用笔狂放纵横，泼墨淋漓，画面充满了大自然的野性勃发与叛逆出尘的奇绝构图。" 
    },
    "晋王羲之兰亭序神龙本摹本": { 
        name: "晋王羲之兰亭序神龙本摹本", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 260000000, 
        maps: [3, 7], artStatus: "天下第一行书之魂", historyEra: "唐代冯承素摹（神龙本）", 
        historyDesc: "由于真迹殉葬昭陵，此神龙半印本即为世间最逼真的兰亭替身。采用‘双钩填墨’法，连牵丝映带与涂改墨迹都完美还原，书圣风骨跃然纸上。" 
    },
    "唐颜真卿祭侄文稿轴": { 
        name: "唐颜真卿祭侄文稿轴", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 240000000, 
        maps: [3, 7], artStatus: "天下第二行书", historyEra: "唐乾元元年", 
        historyDesc: "颜真卿为在安史之乱中壮烈牺牲的侄子颜季明所写的祭文草稿。全篇情绪失控，圈改无数，秃笔枯墨，将满腔悲愤与满门忠烈之气化作惊天动地的线条。" 
    },
    "唐怀素自叙帖卷": { 
        name: "唐怀素自叙帖卷", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 185000000, 
        maps: [5, 7], artStatus: "天下第一狂草", historyEra: "唐大历年间", 
        historyDesc: "‘草圣’怀素酒后纵笔所书。字形如骤雨旋风，惊蛇走虺，线条圆转如强弓硬弩，一气呵成，将中国书法线条的抽象速度感推向了神灵境界。" 
    },
    "宋苏轼黄州寒食诗帖": { 
        name: "宋苏轼黄州寒食诗帖", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 220000000, 
        maps: [2, 7], artStatus: "天下第三行书", historyEra: "北宋元丰年间", 
        historyDesc: "苏东坡贬谪黄州时，在凄风苦雨的寒食节孤寂写就。字体随心情跌宕起伏，由小变大，由正变斜，苍凉多情，是中国文人命运的终极墨迹。" 
    },
    "宋米芾蜀素帖卷": { 
        name: "宋米芾蜀素帖卷", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 95000000, 
        maps: [3, 7], artStatus: "米颠八面出锋神作", historyEra: "北宋元祐年间", 
        historyDesc: "米芾在珍稀的丝织‘蜀素’上书写的自作诗。因丝织物不易受墨，更显米芾‘八面出锋’的狠辣稳健笔力，沉着痛快，俊迈豪放。" 
    },
    "元赵孟頫红衣罗汉图卷": { 
        name: "元赵孟頫红衣罗汉图卷", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 88000000, 
        maps: [3, 7], artStatus: "元代复古第一图", historyEra: "元代大德年间", 
        historyDesc: "赵孟頫倡导‘古意’的代表性人物画。红衣罗汉面壁打坐，设色高古，线条源自唐代铁线描，将元代文人复杂的出仕心理托物言志。" 
    },
    "明八大山人孤禽图轴": { 
        name: "明八大山人孤禽图轴", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 92000000, 
        maps: [2, 7], artStatus: "白眼向天不朽孤愤", historyEra: "清康熙年间", 
        historyDesc: "明亡后朱耷（八大山人）的惊世之作。空无一物的巨幅画面中，仅绘一只孤鸟单足立地，翻着白眼愤怒向天，极致的简约，极致的狂傲。" 
    },
    "清郑燮竹石兰蕙图轴": { 
        name: "清郑燮竹石兰蕙图轴", type: "painting", typeName: "字画", rarity: 1, rarityName: "精工", value: 4800000, 
        maps: [2, 4], artStatus: "扬州八怪瘦硬风骨", historyEra: "清乾隆年间", 
        historyDesc: "郑板桥‘难得糊涂’时期的巅峰纸本。以草书中竖长战笔画竹，骨法用笔，竹叶如钢针挺劲，体现了‘咬定青山不放松’的傲岸人格。" 
    },
    "清郎世宁百骏图卷": { 
        name: "清郎世宁百骏图卷", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 140000000, 
        maps: [3, 5, 7], artStatus: "中西合璧宫廷巨作", historyEra: "清雍正年间", 
        historyDesc: "意大利传教士兼宫廷画家郎世宁所绘。将西洋透视学、光影明暗法完美融入中国传统工笔重彩，百匹骏马神态各异，跃然纸上，极具立体震撼。" 
    },
    "齐白石可惜无声花卉工虫册页": { 
        name: "齐白石可惜无声花卉工虫册页", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 62000000, 
        maps: [1, 2, 6], artStatus: "近代工笔草虫天花板", historyEra: "民国时期", 
        historyDesc: "齐白石红花墨叶与工细草虫结合的绝品。蜻蜓翅膀上的网纹细如蝉翼，蝈蝈腿上的绒毛历历可见，虽无声响，却充满了造化的勃勃生机。" 
    },
    "张大千桃源图轴": { 
        name: "张大千桃源图轴", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 71000000, 
        maps: [5, 6, 7], artStatus: "近代泼墨大写意巨献", historyEra: "1980年代", 
        historyDesc: "张大千晚年探索泼墨泼彩的殿堂级作品。将石青、石绿大面积泼洒于画面，色彩浓烈瑰丽，桃花源在烟云雾霭中若隐若现，如梦似幻。" 
    },
    "徐悲鸿六骏图轴": { 
        name: "徐悲鸿六骏图轴", type: "painting", typeName: "字画", rarity: 2, rarityName: "罕见", value: 24000000, 
        maps: [1, 6], artStatus: "近代奔马图腾", historyEra: "民国抗战时期", 
        historyDesc: "徐悲鸿借马抒怀之作。运用大写意饱满墨色勾勒出六匹在荒原上纵情狂奔的骏马，鬃毛飞扬，充满了解放民族危亡的爆发力与时代豪情。" 
    },
    "北宋文同墨竹图轴": { 
        name: "北宋文同墨竹图轴", type: "painting", typeName: "字画", rarity: 2, rarityName: "罕见", value: 19500000, 
        maps: [1, 2], artStatus: "胸有成竹祖本", historyEra: "北宋中期", 
        historyDesc: "苏轼挚友文同传世孤本级墨竹。首创以深墨为面、淡墨为背的竹叶画法，枝干挺拔，完美诠释了宋代文人‘胸有成竹’的审美哲学。" 
    },
    "南宋梁楷泼墨仙人图轴": { 
        name: "南宋梁楷泼墨仙人图轴", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 53000000, 
        maps: [2, 7], artStatus: "大写意减笔画鼻祖", historyEra: "南宋晚期", 
        historyDesc: "梁楷佯狂嗜酒后的‘减笔画’神作。寥寥数笔，纯用大块面泼墨，将一个步履蹒跚、憨态可掬的仙人形象勾勒得神形兼备，禅机无限。" 
    },
    "元吴镇渔父图轴": { 
        name: "元吴镇渔父图轴", type: "painting", typeName: "字画", rarity: 2, rarityName: "罕见", value: 16000000, 
        maps: [2, 7], artStatus: "元四家隐逸墨之极致", historyEra: "元代中晚期", 
        historyDesc: "吴镇描绘江南水乡渔隐生活的逸品。笔墨湿润雄厚，一叶扁舟飘荡在虚无缥缈的江面上，表现了元代文人逃避现实、寄情山水的出世高格。" 
    },
    "明王绂凤城八景图卷": { 
        name: "明王绂凤城八景图卷", type: "painting", typeName: "字画", rarity: 1, rarityName: "精工", value: 3900000, 
        maps: [1, 3], artStatus: "大明京师地理宏图", historyEra: "明永乐年间", 
        historyDesc: "王绂描绘明代永乐年间北京（凤城）八处名胜的纪实长卷。画风文雅细致，为研究明代初期北京地理风貌提供了绝佳的艺术档案。" 
    },
    "清王翚康熙南巡图第七卷残本": { 
        name: "清王翚康熙南巡图第七卷残本", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 42000000, 
        maps: [3, 7], artStatus: "虞山画派皇家纪实", historyEra: "清康熙年间", 
        historyDesc: "王翚率大批工匠历时数年绘制的超级皇家巨轴。第七卷专绘无锡至苏州的运河风光，人物数万，商铺林立，是康熙盛世的终极写照。" 
    },
    "清金农漆书汲古处轴": { 
        name: "清金农漆书汲古处轴", type: "painting", typeName: "字画", rarity: 1, rarityName: "精工", value: 3200000, 
        maps: [2, 4], artStatus: "扬州八怪漆书第一怪", historyEra: "清乾隆中期", 
        historyDesc: "金农自创的‘漆书’金石墨迹。用切锋扁笔作书，字形横粗直细，拙厚古朴，如漆刷横扫，具有浓郁的北朝碑刻拓本的原始力量感。" 
    },
    "宋拓本《大观太清楼帖》残残页": { 
        name: "宋拓本《大观太清楼帖》残残页", type: "painting", typeName: "字画", rarity: 2, rarityName: "罕见", value: 11000000, 
        maps: [1, 3], artStatus: "北宋皇家官拓", historyEra: "北宋徽宗大观年间", 
        historyDesc: "宋徽宗下令将内府秘藏墨宝刻于太清楼，并精拓分赐重臣。由于原石在靖康之难中被毁，此残页墨质如黑玉，极其珍贵。" 
    },
    "明祝允明草书西京赋卷": { 
        name: "明祝允明草书西京赋卷", type: "painting", typeName: "字画", rarity: 2, rarityName: "罕见", value: 18500000, 
        maps: [2, 7], artStatus: "明代狂草巨制", historyEra: "明正德年间", 
        historyDesc: "祝京兆（祝枝山）晚年纵酒后的狂草长卷。长达十几米，笔势纵横，大开大合，如骏马得衔，狂飙突进，是明代浪漫主义书风的代表。" 
    },
    "明代仇英赤壁图卷": { 
        name: "明代仇英赤壁图卷", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 49000000, 
        maps: [4, 7], artStatus: "明代工笔青绿奇珍", historyEra: "明嘉靖时期", 
        historyDesc: "‘明四家’仇英的工笔重彩绝活。画面崖壁险峻，水波用细若蚊足的战笔描绘，苏轼与客人在孤舟中饮酒赋诗，色彩明丽，精细入微。" 
    },
    "清华嵒天山积雪图轴": { 
        name: "清华嵒天山积雪图轴", type: "painting", typeName: "字画", rarity: 2, rarityName: "罕见", value: 13500000, 
        maps: [1, 7], artStatus: "新罗山人西域奇画", historyEra: "清乾隆时期", 
        historyDesc: "华嵒晚年描绘塞外风光的异色之作。漫天风雪中，一客牵一红驼艰难前行，空中孤鸿悲鸣，用色极为大胆，意境荒凉悲壮。" 
    },
    "清代袁江阿房宫图轴": { 
        name: "清代袁江阿房宫图轴", type: "painting", typeName: "字画", rarity: 1, rarityName: "精工", value: 4500000, 
        maps: [3, 4], artStatus: "清代清代界画天花板", historyEra: "清康熙至雍正", 
        historyDesc: "袁江采用高超的‘界画’技巧，利用界尺绘制出传说中宏伟浩大的阿房宫。台阁玲珑，依山傍水，具有强烈的视觉张力与复古震撼。" 
    },
    "民国吴昌硕牡丹水仙图轴": { 
        name: "民国吴昌硕牡丹水仙图轴", type: "painting", typeName: "字画", rarity: 1, rarityName: "精工", value: 2800000, 
        maps: [1, 2], artStatus: "海派大写意宗师墨宝", historyEra: "民国初期", 
        historyDesc: "吴昌硕‘以金石入画’的岁朝清供图。用写石鼓文的笔法画花卉枝干，雄浑苍劲，设色重彩古厚，洋溢着蓬勃的海派金石气象。" 
    },
    "梵高《星月夜》初版石版画（带亲笔签名）": { 
        name: "梵高《星月夜》初版石版画（带亲笔签名）", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 120000000, 
        maps: [5, 6, 7], artStatus: "西方现代艺术圣物", historyEra: "1889年", 
        historyDesc: "梵高生前极少数亲自监制、调整色彩并亲笔签名的石版画实验本。翻滚的星云、燃烧的柏树，带有人类灵魂颤抖的炙热线条。" 
    },
    "达芬奇《蒙娜丽莎》中世纪学徒同画室临摹本": { 
        name: "达芬奇《蒙娜丽莎》中世纪学徒同画室临摹本", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 150000000, 
        maps: [5, 6, 7], artStatus: "文艺复兴同室神作", historyEra: "16世纪初", 
        historyDesc: "由达芬奇画室核心弟子与大师并肩、用同批次画布和颜料同步临摹的旷世名作。背景晕涂法深得大师真传，神秘微笑几乎一模一样。" 
    },
    "莫奈《印象·日出》1874年沙龙展纪念手稿": { 
        name: "莫奈《印象·日出》1874年沙龙展纪念手稿", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 65000000, 
        maps: [5, 6, 7], artStatus: "印象派诞生铁证", historyEra: "1874年", 
        historyDesc: "莫奈为了筹办第一届印象派画展而随手绘制的彩色粉笔草稿。廖廖数笔，却精准捕捉了勒阿弗尔港口晨雾中日出的刹那光影。" 
    },
    "葛饰北斋《富岳三十六景·神奈川冲浪里》初版木刻": { 
        name: "葛饰北斋《富岳三十六景·神奈川冲浪里》初版木刻", type: "painting", typeName: "字画", rarity: 3, rarityName: "史诗", value: 55000000, 
        maps: [5, 7], artStatus: "浮世绘世界名作", historyEra: "江户时代天保年间", 
        historyDesc: "日本浮世绘巨匠葛饰北斋巅峰之作。采用进口普鲁士蓝颜料，初印版水浪边缘带有极锐利的木刻刀口压痕，巨浪吞舟，动心魄。" 
    },
    "毕加索《格尔尼卡》创作期立体主义炭笔构图稿": { 
        name: "毕加索《格尔尼卡》创作期立体主义炭笔构图稿", type: "painting", typeName: "字画", rarity: 4, rarityName: "传奇", value: 110000000, 
        maps: [5, 6, 7], artStatus: "现代反战艺术史诗图卷", historyEra: "1937年", 
        historyDesc: "毕加索为了发泄对战争暴行的愤怒，在巨大画布前反复推敲的炭笔线稿残本。扭曲的牛头、嘶吼的母亲，立体主义线条张力撕裂纸面。" 
    },
    "明董其昌草书临《中秋帖》卷": { 
        name: "明董其昌草书临《中秋帖》卷", type: "painting", typeName: "字画", rarity: 2, rarityName: "罕见", value: 22000000, 
        maps: [2, 3], artStatus: "松江书派宗师墨迹", historyEra: "明万历年间", 
        historyDesc: "董其昌临摹大内秘藏王献之《中秋帖》的精品之作。书风清秀飘逸，不激不厉，完美融入了董氏独特的禅意虚白构图。" 
    },

    // ==================== 【6. 周边卡牌类 (card) - 40 种全量不丢】 ====================
    "1999年宝可梦第一弹初版喷火龙无阴影闪卡": { 
        name: "1999年宝可梦第一弹初版喷火龙无阴影闪卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 3500000, 
        maps: [5, 6, 7], artStatus: "TCG现代卡皇", historyEra: "1999年", 
        historyDesc: "Base Set第一弹无阴影（Shadowless）极罕缺陷卡。PSA 10全美品全球屈指可数，是全球数千万宝可梦卡迷心中无上的终极信仰图腾。" 
    },
    "游戏王青眼白龙光之创造神世界赛冠军奖卡": { 
        name: "游戏王青眼白龙光之创造神世界赛冠军奖卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 2800000, 
        maps: [5, 6, 7], artStatus: "游戏王至尊卡王", historyEra: "早期世界赛限定", 
        historyDesc: "KONAMI官方为早期世界锦标赛冠军量身定制的手绘孤本钢板奖卡。卡身由特种合金打造，带有高桥留美子亲笔刻印签名，极度奢华。" 
    },
    "万智牌第一版黑莲花Alpha完美珍藏卡": { 
        name: "万智牌第一版黑莲花Alpha完美珍藏卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 5500000, 
        maps: [5, 6, 7], artStatus: "集换式卡牌始祖祖神", historyEra: "1993年", 
        historyDesc: "MTG万智牌首版Alpha核心统治卡。作为‘九大巨头（Power Nine）’之首，因其恐怖的破坏平衡性被永久禁限，传世极稀，卡界活化石。" 
    },
    "迈克尔乔丹1986年新秀赛季Fleer金标评级卡": { 
        name: "迈克尔乔丹1986年新秀赛季Fleer金标评级卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 4200000, 
        maps: [5, 6, 7], artStatus: "体育球卡无上图腾", historyEra: "1986-87赛季", 
        historyDesc: "篮球之神迈克尔·乔丹最伟大的Fleer #57新秀卡。金标BGS 10全美品，卡面构图为乔丹经典的凌空暴扣，承载了整个现代体育商业神话。" 
    },
    "宝可梦插画家（Illustrator）皮卡丘全球孤本级奖卡": { 
        name: "宝可梦插画家（Illustrator）皮卡丘全球孤本级奖卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 6800000, 
        maps: [5, 6, 7], artStatus: "全球有史以来最贵卡牌", historyEra: "1997-1998年", 
        historyDesc: "快乐快乐月刊插画大赛获奖者专属奖卡，仅印制了39张。卡面由皮卡丘之父西田敦子亲自执笔，是现代大众流行文化价值的珠穆朗玛峰。" 
    },
    "1909年T206霍纳斯·瓦格纳棒球神卡": { 
        name: "1909年T206霍纳斯·瓦格纳棒球神卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 7200000, 
        maps: [5, 6, 7], artStatus: "百年球卡历史之王", historyEra: "二十世纪初", 
        historyDesc: "由美国烟草公司（ATC）随烟盒附赠。因瓦格纳坚决反对向儿童兜售烟草而强令停产，现存仅几十张，是开启现代卡牌收藏秩序的‘圣经’。" 
    },
    "利昂内尔梅西2014年世界杯帕尼尼Panini签字卡": { 
        name: "利昂内尔梅西2014年世界杯帕尼尼Panini签字卡", type: "card", typeName: "周边卡牌", rarity: 3, rarityName: "史诗", value: 1200000, 
        maps: [5, 6], artStatus: "现代足坛传奇球卡", historyEra: "2014年", 
        historyDesc: "帕尼尼世界杯系列1/1（全球独一张）黄金折射签字卡。记录了球王梅西凝视大力神杯的经典悲壮瞬间，带有梅西极其珍贵的墨水手签。" 
    },
    "2000年神奇宝贝新星第一弹闪烁洛奇亚": { 
        name: "2000年神奇宝贝新星第一弹闪烁洛奇亚", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 450000, 
        maps: [5, 6], artStatus: "漩涡列岛海神图腾", historyEra: "2000年", 
        historyDesc: "Neo Genesis第一弹日文版初版闪卡。卡面上洛奇亚破浪而出，其绚丽的镭射反光在当年工艺中惊艳至极，是千禧代玩家的集体童年梦境。" 
    },
    "游戏王真红眼黑龙初代大字版罕贵卡": { 
        name: "游戏王真红眼黑龙初代大字版罕贵卡", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 380000, 
        maps: [4, 5], artStatus: "早期城之内核心王牌", historyEra: "Vol.3系列", 
        historyDesc: "游戏王1999年第三弹黑盒发售初版。带有极具时代感的大型宋体字‘真紅眼の黒竜’，因当年的粗糙工艺导致保存极难，高分评级万里挑一。" 
    },
    "万智牌先驱时空‘时间的走廊’时间行走卡": { 
        name: "万智牌先驱时空‘时间的走廊’时间行走卡", type: "card", typeName: "周边卡牌", rarity: 3, rarityName: "史诗", value: 1500000, 
        maps: [5, 7], artStatus: "Power 9核心时间法术", historyEra: "1993年Beta版", 
        historyDesc: "‘Time Walk’Beta版本。只需两点法术流即可直接平白获得一个额外回合，机制简单粗暴至极，插图具有中世纪抽象玄幻风骨。" 
    },
    "漫威复仇者联盟初代1963年#1惊奇漫画原刊评级": { 
        name: "漫威复仇者联盟初代1963年#1惊奇漫画原刊评级", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 2200000, 
        maps: [5, 6, 7], artStatus: "美漫黄金时代神作", historyEra: "1963年", 
        historyDesc: "斯坦·李与杰克·科比联手创作的《复仇者联盟》第一期原刊漫画。CGC 9.6超级高分，记录了雷神、钢铁侠、绿巨人首次集结的里程碑瞬间。" 
    },
    "勒布朗詹姆斯2003年新秀赛季Exquisite帕奇签字球卡": { 
        name: "勒布朗詹姆斯2003年新秀赛季Exquisite帕奇签字球卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 3800000, 
        maps: [5, 6, 7], artStatus: "小皇帝球卡终极之王", historyEra: "2003-04赛季", 
        historyDesc: "Upper Deck发行的Exquisite Collection系列新秀卡，限量23张。卡身内嵌詹姆斯比赛亲穿骑士队球衣的精致切片（Patch），带新秀签。" 
    },
    "C罗纳尔多2002年里斯本竞技帕尼尼超新星卡": { 
        name: "C罗纳尔多2002年里斯本竞技帕尼尼超新星卡", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 520000, 
        maps: [5, 6], artStatus: "总裁绿茵起点新秀卡", historyEra: "2002-03赛季", 
        historyDesc: "克里斯蒂亚诺·罗纳尔多在葡萄牙里斯本竞技时期的世界第一张球卡。当时的C罗身披28号球衣，面容青涩，是绝版足坛巨星收藏基石。" 
    },
    "迪亚波罗暗黑破坏神Funko Pop圣地亚哥展金属涂装限量手办": { 
        name: "迪亚波罗暗黑破坏神Funko Pop圣地亚哥展金属涂装限量手办", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 25000, 
        maps: [5, 6], artStatus: "暴雪信仰硬核潮玩", historyEra: "2014年SDCC限定", 
        historyDesc: "圣地亚哥动漫展（SDCC）限量发售500个的金属色恐惧之王。外盒带有专属独家编号贴纸，是暗黑破坏神系列中最具代表性的硬核潮流周边。" 
    },
    "2016年万智牌‘卡拉德许’发明系列大师杰作大修道院": { 
        name: "2016年万智牌‘卡拉德许’发明系列大师杰作大修道院", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 120000, 
        maps: [4, 5], artStatus: "万智牌工艺美学极品", historyEra: "2016年", 
        historyDesc: "Kaladesh Inventions系列。采用独特的古铜色金属线条镂空边框，卡面在光线下呈现出精密的齿轮与蒸汽朋克魔幻反光，颜值极高。" 
    },
    "星战原力觉醒哈里森福特汉索罗亲笔手签电影卡": { 
        name: "星战原力觉醒哈里森福特汉索罗亲笔手签电影卡", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 185000, 
        maps: [5, 6], artStatus: "星战情怀科幻奇珍", historyEra: "2015年", 
        historyDesc: "Topps发行的星球大战原力觉醒高端系列。限量5张的14K金边框手签卡，老戏骨哈里森·福特极为罕见地留下了极规范的连笔签名。" 
    },
    "魔兽世界TCG幽灵虎坐骑刮刮卡全美品未刮": { 
        name: "魔兽世界TCG幽灵虎坐骑刮刮卡全美品未刮", type: "card", typeName: "周边卡牌", rarity: 3, rarityName: "史诗", value: 850000, 
        maps: [4, 5, 6], artStatus: "网游虚拟现实第一卡", historyEra: "‘外域之门’版本", 
        historyDesc: "暴雪官方WOW卡牌‘Spectral Tiger’。涂层完美无暇未刮开，可直接在网络游戏中兑换绝版极其奢华的幽灵虎坐骑，拉风至极，情怀无价。" 
    },
    "数码宝贝初代1999年战斗暴龙兽旧版卡盘": { 
        name: "数码宝贝初代1999年战斗暴龙兽旧版卡盘", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 35000, 
        maps: [4, 5], artStatus: "数码暴龙童年热血", historyEra: "1999年Bandai旧版", 
        historyDesc: "万代（Bandai）早期卡牌游戏元老卡。卡面采用极其怀旧的网格反光图案，战斗暴龙兽双手持恐龙克星爪，战斗力指数满格。" 
    },
    "美漫超人1938年《Action Comics》#1创刊号圣物": { 
        name: "美漫超人1938年《Action Comics》#1创刊号圣物", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 8500000, 
        maps: [5, 6, 7], artStatus: "整个美漫产业的创世大爆炸", historyEra: "1938年", 
        historyDesc: "动作漫画第一期。人类历史上第一位超级英雄‘超人’在此诞生。该刊存世全美美品不超过10本，是现代潮流拍卖史上的终极不落神话。" 
    },
    "2023年黑曜石系列漫威蜘蛛侠帕尼尼折射签字卡": { 
        name: "2023年黑曜石系列漫威蜘蛛侠帕尼尼折射签字卡", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 320000, 
        maps: [5, 6], artStatus: "现代美漫高精卡牌", historyEra: "2023年", 
        historyDesc: "Panini Obsidian系列。卡身采用重工业风的黑色铬合金材质，刻画了蜘蛛侠迈尔斯在纽约夜空荡蛛丝的酷炫剪影，全球限量10张。" 
    },
    "新世纪福音战士EVA初代初号机暴走庵限定立体卡": { 
        name: "新世纪福音战士EVA初代初号机暴走庵限定立体卡", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 42000, 
        maps: [4, 5], artStatus: "二次元催泪神作周边", historyEra: "1997年剧场版联动", 
        historyDesc: "日本著名动漫画廊发售的3D光栅立体卡。多角度晃动卡面可完美展现初号机从静止到张嘴暴走、吐出核心的血腥震撼视觉变化。" 
    },
    "火影忍者卡牌大蛇丸‘不尸转生’火之意志限量卡": { 
        name: "火影忍者卡牌大蛇丸‘不尸转生’火之意志限量卡", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 18000, 
        maps: [4, 5], artStatus: "国漫日漫热血回忆", historyEra: "早期羁绊系列", 
        historyDesc: "万代火影系列高位罕贵卡。卡面带有金属烫绿金线工艺，大蛇丸阴冷从蜕皮中钻出的惊悚画面极具视觉冲击力，反派控绝品。" 
    },
    "1998年宝可梦‘电脑世界’水箭龟特别版闪卡": { 
        name: "1998年宝可梦‘电脑世界’水箭龟特别版闪卡", type: "card", typeName: "周边卡牌", rarity: 3, rarityName: "史诗", value: 1100000, 
        maps: [5, 6, 7], artStatus: "宝可梦古典错版卡", historyEra: "1998年CD附赠本", 
        historyDesc: "随日本早期广播剧CD附赠的限量卡。因印刷排版错误导致水箭龟的水炮线条穿透了边框，成为极受狂热藏家追捧的‘出廓错版卡’。" 
    },
    "游戏王混沌战士1999年东京巨蛋大会不锈钢限定卡": { 
        name: "游戏王混沌战士1999年东京巨蛋大会不锈钢限定卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 3200000, 
        maps: [5, 6, 7], artStatus: "游戏王金属流始祖", historyEra: "1999年", 
        historyDesc: "东京巨蛋第一届游戏王锦标赛大出故障时发售的无上圣物。整张卡由纯不锈钢雕刻而成，卡面混沌战士气势逼人，具有极强的重金属质感。" 
    },
    "宝可梦珍稀幻之宝可梦美录坦（Meltan）首发限定特典闪卡": { 
        name: "宝可梦珍稀幻之宝可梦美录坦（Meltan）首发限定特典闪卡", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 290000, 
        maps: [4, 5, 6], artStatus: "幻之宝可梦首发铁证", historyEra: "2018年联动特典", 
        historyDesc: "为庆祝《Pokémon GO》与 Switch 联动首发、罕见登场的钢属性幻之宝可梦‘美录坦’专属特典卡。卡面反光呈现液态金属螺帽的质感，极具纪念价值。" 
    },
    "海贼王ONE PIECE第一弹蒙奇D路飞漫画背景平行卡": { 
        name: "海贼王ONE PIECE第一弹蒙奇D路飞漫画背景平行卡", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 380000, 
        maps: [4, 5], artStatus: "新一代TCG超级新星", historyEra: "2022年第一弹", 
        historyDesc: "海贼王官方卡牌ROMANCE DAWN第一弹。限量连环画背景（漫画路飞），背景全手工临摹尾田荣一郎经典漫画格，极难开出，新一代神卡。" 
    },
    "万智牌‘历史的尘埃’1994年Legends全套未拆卡包": { 
        name: "万智牌‘历史的尘埃’1994年Legends全套未拆卡包", type: "card", typeName: "周边卡牌", rarity: 3, rarityName: "史诗", value: 1650000, 
        maps: [5, 6, 7], artStatus: "古董万智盲盒孤品", historyEra: "1994年", 
        historyDesc: "传奇系列（Legends）未拆原装卡包。内含可能开出极品金色传说英雄卡的机会，历经三十年包装纸毫无破损受潮，收藏界尊称‘时空胶囊’。" 
    },
    "刺客信条初代2007年育碧官方开发者大会黑盒特制卡": { 
        name: "刺客信条初代2007年育碧官方开发者大会黑盒特制卡", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 48000, 
        maps: [5, 6], artStatus: "游戏工业骨灰情怀", historyEra: "2007年", 
        historyDesc: "育碧在初代刺客信条发售前，内部开发者大会（Ubisoft Developer Day）上限量发放给核心主创团队的刺客阿泰尔金属哑光特制纪念卡。" 
    },
    "魔戒中土世界中世纪全景羊皮纸插画设定卡": { 
        name: "魔戒中土世界中世纪全景羊皮纸插画设定卡", type: "card", typeName: "周边卡牌", rarity: 3, rarityName: "史诗", value: 920000, 
        maps: [5, 6, 7], artStatus: "奇幻史诗图腾周边", historyEra: "电影公映期高端系列", 
        historyDesc: "托尔金基金会授权的高端手工羊皮纸卡。卡面由全真羔羊皮纸压制，全手工复古绘制了中土大陆全景地图，带导演彼得杰克逊亲笔签名。" 
    },
    "变形金刚初代1984年擎天柱孩之宝原封挂卡": { 
        name: "变形金刚初代1984年擎天柱孩之宝原封挂卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 2500000, 
        maps: [5, 6, 7], artStatus: "美式玩具流行之王", historyEra: "G1初代（1984年）", 
        historyDesc: "孩之宝（Hasbro）第一代G1擎天柱双联挂卡原封未拆。吸塑透明罩毫无发黄开胶，纸板四角尖尖，完美保存了汽车人领袖最初的降临雄姿。" 
    },
    "名侦探柯南‘世纪末的魔术师’青山刚昌原画烫银卡": { 
        name: "名侦探柯南‘世纪末的魔术师’青山刚昌原画烫银卡", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 22000, 
        maps: [4, 5], artStatus: "推理动漫死忠信仰", historyEra: "1999年剧场版周边", 
        historyDesc: "为配合第三部剧场版上映发售的原画平行卡。怪盗基德单眼罩反光采用极其高阶的细粒子烫银工艺，暗夜氛围感拉满。" 
    },
    "最终幻想VII克劳德与萨菲罗斯AC版限量极高精冷钢卡": { 
        name: "最终幻想VII克劳德与萨菲罗斯AC版限量极高精冷钢卡", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 55000, 
        maps: [5, 6], artStatus: "JRPG不落圣物周边", historyEra: "2005年首发限定", 
        historyDesc: "Square Enix随《圣子降临》珍藏版电影盒限定附赠。卡身由航空铝冷钢镭射雕刻，画面为克劳德六式刀与萨菲罗斯正宗刀交错的旷世宿命瞬间。" 
    },
    "2022年科比布莱恩特Flawless系列‘终极传奇’钻石球卡": { 
        name: "2022年科比布莱恩特Flawless系列‘终极传奇’钻石球卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 4500000, 
        maps: [5, 6, 7], artStatus: "黑曼巴永恒球卡圣物", historyEra: "2022年Panini发售", 
        historyDesc: "帕尼尼顶级Flawless国宝系列。卡身由厚重的亚克力与纯银框打造，中心极其奢华地镶嵌了一颗2克拉的纯天然南非真钻，黑曼巴永不熄灭。" 
    },
    "大谷翔平2018年MLB新秀赛季Topps Chrome超级折射金卡": { 
        name: "大谷翔平2018年MLB新秀赛季Topps Chrome超级折射金卡", type: "card", typeName: "周边卡牌", rarity: 3, rarityName: "史诗", value: 1800000, 
        maps: [5, 6, 7], artStatus: "现代棒球二刀流神卡", historyEra: "2018年", 
        historyDesc: "Topps Chrome系列的Superfractor 1/1独一无二金折射卡。记录了大谷翔平首次在美国职棒大联盟投球新秀姿态，是现代体育收藏新风口。" 
    },
    "圣斗士星矢1987年万代黄金圣衣箱抽屉式特制合金卡": { 
        name: "圣斗士星矢1987年万代黄金圣衣箱抽屉式特制合金卡", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 320000, 
        maps: [4, 5], artStatus: "车田正美热血动漫珍藏", historyEra: "1987年", 
        historyDesc: "极为少见的黄金圣衣箱系列周边。卡片厚达5毫米，完全由黄铜合金铸造，正面浮雕射手座圣衣箱花纹，拉开后是一张高精烫金卡片。" 
    },
    "龙珠超卡牌孙悟空‘自在极意功’银发暴走限量平行卡": { 
        name: "龙珠超卡牌孙悟空‘自在极意功’银发暴走限量平行卡", type: "card", typeName: "周边卡牌", rarity: 2, rarityName: "罕见", value: 260000, 
        maps: [4, 5], artStatus: "赛亚人宇宙战力极点", historyEra: "2021年大赛限定", 
        historyDesc: "万代龙珠TCG高端限定系列。卡身表面布满了如蛛网般细腻复杂的镭射爆裂纹，孙悟空银发形态在光线转换下呈现银色火焰升腾效果。" 
    },
    "魔戒一等奖限定版‘至尊魔戒’1/1全球唯一种族卡": { 
        name: "魔戒一等奖限定版‘至尊魔戒’1/1全球唯一种族卡", type: "card", typeName: "周边卡牌", rarity: 4, rarityName: "传奇", value: 13500000, 
        maps: [5, 6, 7], artStatus: "卡牌史上的指环王神话", historyEra: "2023年万智牌联动", 
        historyDesc: "万智牌‘中土世界’主系列中全球唯一限量1张的至尊魔戒卡。卡面由中土黑门黑语泥金环绕，被国外头部明星以天价收购，引发全网轰动。" 
    },
    "死亡笔记L与夜神月命运天平双面异形镭射卡": { 
        name: "死亡笔记L与夜神月命运天平双面异形镭射卡", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 38000, 
        maps: [4, 5], artStatus: "双雄智斗神作回忆", historyEra: "2006年动画化纪念", 
        historyDesc: "小畑健原画集附赠的异形书签卡。采用复杂的双面折射透视工艺，左晃是执笔微笑的夜神月，右晃是蹲坐咬手指的L，宿命感爆棚。" 
    },
    "2024年星战四十年纪念卢克天行者光剑亲手签金折卡": { 
        name: "2024年星战四十年纪念卢克天行者光剑亲手签金折卡", type: "card", typeName: "周边卡牌", rarity: 3, rarityName: "史诗", value: 1100000, 
        maps: [5, 6, 7], artStatus: "天行者家族情怀至高", historyEra: "2024年", 
        historyDesc: "Topps发行的星战四十年重磅系列。限量5张的金折射手签，马克·哈米尔用极具辨识度的绿色墨水手签，是星战科幻史的终极载体。" 
    },
    "巫师3狂猎杰洛特昆特牌初代实体豪华版全套未拆": { 
        name: "巫师3狂猎杰洛特昆特牌初代实体豪华版全套未拆", type: "card", typeName: "周边卡牌", rarity: 1, rarityName: "精工", value: 45000, 
        maps: [5, 6], artStatus: "来盘昆特牌吧硬核桌游", historyEra: "2015年石之心/血与酒DLC特典", 
        historyDesc: "CD Projekt RED随游戏实体珍藏版附赠的现实版昆特牌（Gwent）。包含松鼠党与怪物全套真丝绸边布纹纸卡牌，未拆封，游戏迷梦寐以求。" 
    }
};

const globalSetMap = {
    "商周九鼎震华夏": {
        name: "商周九鼎震华夏",
        reqCount: 4,
        items: ["司母戊鼎", "大克鼎", "毛公鼎", "虢季子白盘"],
        buff: "【镇国九鼎】全队暴击率绝对+20%，每次对局开始时自动获得最大资金上限的 5% 作为国库初始资源。",
        bonusValue: 130000000
    },
    "江山社稷千秋定": {
        name: "江山社稷千秋定",
        reqCount: 3,
        items: ["曾侯乙编钟", "越王勾践剑", "四羊方尊"],
        buff: "【钟鸣鼎食】全场古董道具的基础精神威压翻倍，敌方所有负面诅咒效果的持续时间缩短 50%。",
        bonusValue: 52000000
    },
    "秦汉帝王始皇威": {
        name: "秦汉帝王始皇威",
        reqCount: 3,
        items: ["秦始皇陵兵马俑军阵", "汉代长信宫灯", "战国商鞅方升"],
        buff: "【六王毕一国统】全量华夏兵器类、玉器类道具的基础价值评估系数恒定增加 30%。",
        bonusValue: 52000000
    },
    "龙纹祥瑞聚一堂": {
        name: "龙纹祥瑞聚一堂",
        reqCount: 3,
        items: ["红山文化玉猪龙", "明宣德青花五彩镂空双龙戏珠纹大盘", "清乾隆金嵌宝金瓯永固杯"],
        buff: "【真龙气运】抽卡或判定时，“传奇”与“史诗”稀有度藏品的出现概率永久上升 1.5%。",
        bonusValue: 48000000
    },
    "华夏画轴半壁江山": {
        name: "华夏画轴半壁江山",
        reqCount: 5,
        items: ["北宋顾恺之洛神赋图卷", "唐阎立本步辇图卷", "五代顾闳中韩熙载夜宴图卷", "北宋张择端清明上河图卷", "元黄公望富春山居图卷"],
        buff: "【江山如画】解锁终极全景视觉特效。全场华夏书画的每日自然增值速率提升 100%。",
        bonusValue: 180000000
    },
    "大唐墨宝双璧": {
        name: "大唐墨宝双璧",
        reqCount: 2,
        items: ["唐韩滉五牛图卷", "唐张旭古诗四帖卷"],
        buff: "【盛唐风骨】全队角色的精神力上限+150，处于大唐相关地图时，体力消耗速度降低 25%。",
        bonusValue: 32000000
    },
    "千古风流苏黄米": {
        name: "千古风流苏黄米",
        reqCount: 3,
        items: ["北宋苏轼寒食帖卷", "北宋黄庭坚砥柱铭卷", "北宋米芾蜀素帖卷"],
        buff: "【文人傲骨】完美免疫任何来自“西欧异域”或“近代潮流”道具带来的精神理智值（San）扣减。",
        bonusValue: 45000000
    },
    "兰亭神韵归一": {
        name: "兰亭神韵归一",
        reqCount: 4,
        items: ["王羲之兰亭序·神龙本", "王羲之兰亭序·定武本", "王羲之兰亭序·虞本", "王羲之兰亭序·褚本"],
        buff: "【天下第一行书】激活真迹幻影。全场‘古籍善本类’道具的基础判定成功率无条件修正为 100%。",
        bonusValue: 90000000
    },
    "水墨意境大成": {
        name: "水墨意境大成",
        reqCount: 3,
        items: ["明沈周庐山高图轴", "清朱耷孤禽图轴", "当代齐白石虾趣图轴"],
        buff: "【墨染乾坤】战斗中每使用一张书画类道具，全队将获得一层持续 10 秒的 5% 伤害减免护盾（最高叠加 5 层）。",
        bonusValue: 52000000
    },
    "五大名窑魁首": {
        name: "五大名窑魁首",
        reqCount: 3,
        items: ["北宋汝窑天青釉弦纹三足樽", "北宋官窑粉青釉纸槌瓶", "北宋哥窑五足洗"],
        buff: "【雨过天晴】全场清朝及以前瓷器完美防御‘岁月的剥蚀’（耐久度永久不降）。",
        bonusValue: 53000000
    },
    "明代瓷艺双绝": {
        name: "明代瓷艺双绝",
        reqCount: 2,
        items: ["明成化斗彩鸡缸杯", "明永乐青花如意垂藤葫芦瓶"],
        buff: "【大明御制】当玩家资金不足时，可通过典当此双绝无条件获得一次 100% 额度的免息无期限贷款。",
        bonusValue: 38000000
    },
    "大清珐琅三世繁华": {
        name: "大清珐琅三世繁华",
        reqCount: 3,
        items: ["清康熙珐琅彩牡丹纹碗", "清雍正粉彩蝠桃纹橄榄瓶", "清乾隆珐琅彩西方人物纹瓶"],
        buff: "【盛世流光】华丽度属性评分爆发式+500。在面对NPC进行商业谈判时，说服成功率提高 35%。",
        bonusValue: 50000000
    },
    "瓷国长河光华录": {
        name: "瓷国长河光华录",
        reqCount: 4,
        items: ["唐三彩彩绘马", "元青花鬼谷子下山图罐", "明成化斗彩鸡缸杯", "清乾隆各种釉彩大瓶"],
        buff: "【万瓷朝宗】每拥有一件不同朝代的御瓷，全队全属性在对局中永久+3%（当前最高+12%）。",
        bonusValue: 76000000
    },
    "大明万卷群星闪": {
        name: "大明万卷群星闪",
        reqCount: 4,
        items: ["大明永乐大典·第一卷·天文", "大明永乐大典·第二卷·地理", "大明永乐大典·第三卷·医理", "大明永乐大典·第四卷·方志"],
        buff: "【永乐全璧】开启智慧之轮。玩家全队技能冷却时间（CD）缩短 20%，并在每回合开始前自动驱散一个全队负面状态。",
        bonusValue: 82000000
    },
    "四库全书集大成": {
        name: "四库全书集大成",
        reqCount: 4,
        items: ["清文渊阁四库全书·第一卷·经部", "清文渊阁四库全书·第二卷·史部", "清文渊阁四库全书·第三卷·子部", "清文渊阁四库全书·第四卷·集部"],
        buff: "【经史子集】玩家角色在进行‘历史辨伪’、‘学术辩论’等剧情判定时，直接无视点数要求强制达成完美结局。",
        bonusValue: 82000000
    },
    "初代御三家大集结": {
        name: "初代御三家大集结",
        reqCount: 3,
        items: ["初版喷火龙(无阴影闪卡)", "水箭龟(初版无阴影闪卡)", "妙蛙花(初版无阴影闪卡)"],
        buff: "【经典情怀不灭】全队水、火、草属性卡牌的基础卡面数值（攻击/血量）无条件上调 25%。",
        bonusValue: 42000000
    },
    "皮卡丘与神兽之光": {
        name: "皮卡丘与神兽之光",
        reqCount: 3,
        items: ["全画幅皮卡丘(20周年版)", "黄金皮卡丘(24K纯金版)", "创世神阿尔宙斯(UR金卡)"],
        buff: "【万伏雷霆创世击】每次出牌时有 10% 概率触发‘神兽威压’，使对手下回合无法行动（对Boss有效）。",
        bonusValue: 42000000
    },
    "梦幻幻影天团": {
        name: "梦幻幻影天团",
        reqCount: 3,
        items: ["超梦(暗黑逆袭闪卡)", "洛奇亚(爆诞限定闪卡)", "闪光裂空座(全幅对决闪卡)"],
        buff: "【幻影神迹】全场超能、飞行、龙属性卡牌的技能触发暴击概率翻倍，暴击伤害倍率由 1.5倍 提升至 2.2倍。",
        bonusValue: 42000000
    },
    "青眼白龙至尊咆哮": {
        name: "青眼白龙至尊咆哮",
        reqCount: 3,
        items: ["初代青眼白龙(1999初版)", "青眼究极龙(决赛限定钢卡)", "真红眼黑龙(纯银纪念卡)"],
        buff: "【毁灭之爆裂疾风弹】单次卡牌物理伤害极限破格加成 40%，且强行斩断敌方身上的复活与不屈效果。",
        bonusValue: 49000000
    },
    "三幻神威严降临": {
        name: "三幻神威严降临",
        reqCount: 3,
        items: ["奥西里斯之天空龙(G4金字)", "欧贝利斯克之巨神兵(G4金字)", "太阳神之翼神龙(G4金字)"],
        buff: "【光之创造神虚影】达成三神合一。敌方全场防御力、抗性直接削减 50%，且我方卡牌免疫一切即死、放逐反弹等恶性机制。",
        bonusValue: 56000000
    },
    "黑魔法终极奥义": {
        name: "黑魔法终极奥义",
        reqCount: 3,
        items: ["黑魔导(高桥留美亲签闪卡)", "被封印的艾克佐迪亚(全息)", "黑魔导女孩(20SER红碎)"],
        buff: "【黑·魔·导·爆·裂·破】全队法术类/魔法类卡牌的资源消耗降低 30%，且每三个回合自动生成一张大法师残页组件。",
        bonusValue: 52000000
    },
    "梦幻错版天团": {
        name: "梦幻错版天团",
        reqCount: 3,
        items: ["古乐兽(幻之卡牌)", "吉利蛋(初版错字高评级卡)", "龙珠超自在极意功错版卡"],
        buff: "【大智若愚因祸得福】每次抽到错版卡，自动将错版转化为‘完美神迹神卡’，且卡牌基础增值系数波动由负转正，固定 +50%。",
        bonusValue: 45000000
    },
    "文艺复兴三杰回响": {
        name: "文艺复兴三杰回响",
        reqCount: 3,
        items: ["达芬奇·蒙娜丽莎", "达芬奇·最后的晚餐", "拉斐尔·西斯廷圣母"],
        buff: "【黄金理性比例】全队理智值（Sanity）上限无条件锁定在最高点，彻底免疫任何精神错乱、恐惧与混乱控制。",
        bonusValue: 72000000
    },
    "现代艺术先驱流光": {
        name: "现代艺术先驱流光",
        reqCount: 3,
        items: ["凡高·星月夜", "莫奈·日出·印象", "保罗·塞尚·圣维克多山"],
        buff: "【光色狂想曲】对局中玩家的所有‘策略卡’与‘技能卡’释放速度提高 50%，且不触发敌方的反制陷阱。",
        bonusValue: 52000000
    },
    "超现实荒诞幻象": {
        name: "超现实荒诞幻象",
        reqCount: 3,
        items: ["爱德华·蒙克·呐喊", "萨尔瓦多·达利·记忆的永恒", "勒内·马格利特·人类之子"],
        buff: "【扭曲现实】释放后使敌方全体进入持续 2 回合的‘终极混乱’状态（敌我不分、高概率攻击其自身队友）。",
        bonusValue: 52000000
    }
};

// ==================== 【掉落数据池封装完毕】 ====================
console.log("Treasure Master 数据库加载成功：全量 6 大类、共计 240 种古董藏品已就绪。");