// Comprehensive module content data for all pathways
// Each pathway has 6 modules with full Scripture-based content

export interface ModuleData {
  pathway: string;
  number: number;
  title: string;
  description: string;
  scripture: string;
  content: {
    introduction: string;
    teaching: string[];
    reflection: string[];
    practicum: string[];
    portfolio: string;
  };
  videos: {
    title: string;
    url: string;
    duration: string;
    description: string;
  }[];
  audio: {
    title: string;
    url: string;
    duration: string;
    description: string;
  }[];
}

export const allModules: ModuleData[] = [
  // MEN'S MINISTRY PATHWAY
  {
    pathway: "mens",
    number: 1,
    title: "Biblical Manhood & Identity in Christ",
    description: "Understanding who you are as a man created and redeemed by God",
    scripture: "Genesis 1:27, Ephesians 5:25-33, 1 Timothy 3:1-7",
    content: {
      introduction: "This foundational module explores what it means to be a man according to Scripture—not according to culture, tradition, or personal preference. We begin with identity in Christ, examining how the Gospel reshapes masculinity, leadership, and purpose.",
      teaching: [
        "**Created in God's Image** - Genesis 1:27 reveals that both male and female are made in the image of God. Manhood is not about dominance but about reflecting God's character in strength, love, and service.",
        "**The Fall and Broken Masculinity** - Genesis 3 shows how sin distorted God's design. Men became either passive (like Adam) or domineering. The Gospel restores true manhood.",
        "**Christ as the Perfect Man** - Jesus demonstrates true masculinity: strong yet gentle, authoritative yet humble, courageous yet compassionate. He is our model.",
        "**Husbands and Fathers** - Ephesians 5:25-33 calls husbands to love sacrificially, as Christ loved the church. This is not about control but about laying down your life.",
        "**Leadership and Character** - 1 Timothy 3:1-7 outlines the character required for spiritual leadership. These qualities apply to all men, not just elders."
      ],
      reflection: [
        "How has culture shaped your understanding of manhood? Where does it align with Scripture, and where does it conflict?",
        "In what areas of your life are you tempted toward passivity? Toward domination?",
        "How does the Gospel change the way you view your role as a man in your family, church, and community?",
        "What does it mean practically to 'love your wife as Christ loved the church'?",
        "Which character qualities from 1 Timothy 3 do you need to grow in most?"
      ],
      practicum: [
        "Memorize Ephesians 5:25-27 and meditate on it daily for one week",
        "Identify one area where you've been passive and take one concrete action this week",
        "Have a conversation with your wife (if married) or a trusted brother about how you can grow in Christlike leadership",
        "Journal about your identity in Christ: Who does God say you are? How does this shape your daily life?",
        "Serve your family in a practical way this week without being asked"
      ],
      portfolio: "Write a 500-word reflection on 'My Identity as a Man in Christ' based on this module's teaching and your personal journey."
    },
    videos: [
      {
        title: "Biblical Manhood: Equipping Men",
        url: "https://www.youtube.com/watch?v=1qCFf3vsw24",
        duration: "54:47",
        description: "An overview of how Scripture defines manhood and how it differs from cultural expectations"
      },
      {
        title: "What Makes a Man? - Matt Chandler",
        url: "https://www.youtube.com/watch?v=KG0UeKpicTk",
        duration: "42:15",
        description: "Examining Jesus' life as the perfect example of biblical manhood"
      }
    ],
    audio: [
      {
        title: "Sermon: Biblical Manhood - John Piper",
        url: "https://www.desiringgod.org/messages/what-is-biblical-manhood",
        duration: "42:15",
        description: "A sermon on Genesis 1-2 and God's design for manhood"
      }
    ]
  },
  {
    pathway: "mens",
    number: 2,
    title: "Spiritual Leadership in the Home",
    description: "Leading your family with wisdom, humility, and grace",
    scripture: "Joshua 24:15, Deuteronomy 6:4-9, Ephesians 6:4",
    content: {
      introduction: "Spiritual leadership in the home is not about being a tyrant or a CEO. It's about being a shepherd—leading your family closer to Christ through your example, teaching, and prayers. This module equips men to lead their households with wisdom and humility.",
      teaching: [
        "**As for Me and My House** - Joshua 24:15 is a declaration of covenant faithfulness. Spiritual leadership begins with personal commitment to follow the Lord.",
        "**The Shema and Family Discipleship** - Deuteronomy 6:4-9 commands fathers to teach God's Word diligently to their children in every context of life. This is not optional.",
        "**Fathers, Do Not Provoke** - Ephesians 6:4 warns against harsh, discouraging leadership. Instead, fathers are to bring up children in the training and instruction of the Lord.",
        "**Leading Through Prayer** - A spiritual leader intercedes for his family. He prays with them and for them consistently.",
        "**Modeling Repentance** - True leadership includes admitting when you're wrong and seeking forgiveness from your wife and children."
      ],
      reflection: [
        "What does spiritual leadership look like in your home right now? Where are you leading well? Where are you falling short?",
        "How are you teaching your children about God? Is it formal or integrated into daily life?",
        "When was the last time you prayed with your wife? With your children?",
        "Have you provoked your children to anger through harshness or inconsistency? How can you make this right?",
        "What legacy of faith do you want to leave for your children and grandchildren?"
      ],
      practicum: [
        "Begin a daily family devotion time (even if it's just 5 minutes)",
        "Memorize Deuteronomy 6:6-7 with your family",
        "Pray with your wife before bed every night this week",
        "Have a one-on-one conversation with each child about their walk with God",
        "Confess and seek forgiveness for an area where you've failed as a leader"
      ],
      portfolio: "Create a Family Discipleship Plan: What will you do daily, weekly, and monthly to lead your family spiritually?"
    },
    videos: [
      {
        title: "Spiritual Leadership in the Home - Voddie Baucham",
        url: "https://www.youtube.com/watch?v=Of1YXDpfuoc",
        duration: "48:30",
        description: "Unpacking the covenant commitment of spiritual leadership"
      }
    ],
    audio: [
      {
        title: "Sermon: Leading Your Family - Voddie Baucham",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=voddie",
        duration: "48:30",
        description: "How Deuteronomy 6 shapes daily family discipleship"
      }
    ]
  },
  {
    pathway: "mens",
    number: 3,
    title: "Work, Calling, and Stewardship",
    description: "Honoring God in your vocation and stewarding resources faithfully",
    scripture: "Colossians 3:23-24, Proverbs 6:6-11, 1 Timothy 5:8",
    content: {
      introduction: "Work is not a curse—it's part of God's design from creation. This module explores how men are called to work with excellence, provide for their families, and steward resources as faithful managers of what God has entrusted to them.",
      teaching: [
        "**Work as Worship** - Colossians 3:23-24 teaches that all work done for the Lord is an act of worship. Your job is your mission field.",
        "**The Ant and the Sluggard** - Proverbs 6:6-11 warns against laziness and calls men to diligence, planning, and responsibility.",
        "**Provision and Protection** - 1 Timothy 5:8 is clear: a man who does not provide for his family has denied the faith. Provision is a sacred duty.",
        "**Stewardship, Not Ownership** - Everything you have belongs to God. You are a steward, not an owner. How you manage money, time, and resources reflects your faith.",
        "**Contentment and Generosity** - Philippians 4:11-13 and 2 Corinthians 9:6-8 teach contentment in all circumstances and cheerful generosity."
      ],
      reflection: [
        "Do you view your work as an act of worship, or just a means to an end?",
        "Are you providing faithfully for your family? Are there areas where you're falling short?",
        "How are you stewarding your finances? Are you generous, or do you hoard?",
        "What would it look like to work with excellence 'as for the Lord' in your current job?",
        "Are you content with what God has given you, or are you constantly striving for more?"
      ],
      practicum: [
        "Create a monthly budget and review it with your wife",
        "Identify one way you can serve others through your work this week",
        "Give sacrificially to someone in need without expecting anything in return",
        "Evaluate your work ethic: Are you lazy, balanced, or workaholic? Adjust accordingly.",
        "Memorize Colossians 3:23-24 and pray it over your work daily"
      ],
      portfolio: "Write a Stewardship Assessment: How am I managing my time, money, and talents? Where do I need to grow?"
    },
    videos: [
      {
        title: "Marriage and Singleness - Tim Keller",
        url: "https://www.youtube.com/watch?v=2Qy-Jqn7waM",
        duration: "45:20",
        description: "Understanding your vocation as a calling from God"
      }
    ],
    audio: [
      {
        title: "Sermon: Marriage and Singleness - Tim Keller",
        url: "https://gospelinlife.com/downloads/marriage-and-singleness",
        duration: "45:20",
        description: "Biblical principles of stewardship and provision"
      }
    ]
  },
  {
    pathway: "mens",
    number: 4,
    title: "Purity, Integrity, and Accountability",
    description: "Walking in holiness and guarding your heart",
    scripture: "1 Thessalonians 4:3-8, Psalm 101:3, James 5:16",
    content: {
      introduction: "Sexual purity and personal integrity are non-negotiable for men who want to lead faithfully. This module addresses the battle for purity in a pornified culture and the necessity of accountability and confession.",
      teaching: [
        "**God's Will is Your Sanctification** - 1 Thessalonians 4:3-8 makes it clear: sexual immorality is sin, and God calls us to holiness.",
        "**Guard Your Eyes** - Psalm 101:3 and Job 31:1 teach the importance of guarding what you look at. What you behold shapes who you become.",
        "**The Power of Confession** - James 5:16 says to confess your sins to one another. Secrecy breeds shame; confession brings healing.",
        "**Flee, Don't Fight** - 1 Corinthians 6:18 and 2 Timothy 2:22 command us to flee sexual immorality. You can't win by lingering near temptation.",
        "**Renewing the Mind** - Romans 12:2 calls us to be transformed by the renewing of our minds. Purity is a battle for the mind."
      ],
      reflection: [
        "Are there areas of sexual sin or compromise in your life right now?",
        "What are you looking at? What media, images, or content are you consuming?",
        "Do you have a brother in Christ who knows your struggles and holds you accountable?",
        "How are you renewing your mind daily? What are you filling it with?",
        "Have you confessed your sin to God and to a trusted brother? If not, what's holding you back?"
      ],
      practicum: [
        "Install accountability software on all devices (Covenant Eyes, Ever Accountable, etc.)",
        "Confess any sexual sin to a trusted brother and ask for ongoing accountability",
        "Memorize 1 Thessalonians 4:3-5 and pray it when tempted",
        "Identify triggers for temptation and create a plan to avoid them",
        "Fast from social media or entertainment for one week and replace it with Scripture"
      ],
      portfolio: "Write a Personal Purity Plan: What boundaries, accountability, and spiritual disciplines will you put in place?"
    },
    videos: [
      {
        title: "Work as Worship - Tim Keller",
        url: "https://www.youtube.com/watch?v=wPw3jaffIHE",
        duration: "46:35",
        description: "Practical strategies for fighting sexual sin"
      }
    ],
    audio: [
      {
        title: "Sermon: Work as Worship - Tim Keller",
        url: "https://gospelinlife.com/downloads/work-as-worship",
        duration: "46:35",
        description: "Biblical wisdom on purity and integrity"
      }
    ]
  },
  {
    pathway: "mens",
    number: 5,
    title: "Brotherhood, Mentoring, and Discipleship",
    description: "Building godly friendships and raising up the next generation",
    scripture: "Proverbs 27:17, 2 Timothy 2:2, Hebrews 10:24-25",
    content: {
      introduction: "No man is meant to walk alone. This module explores the biblical call to brotherhood, mentoring, and discipleship—sharpening one another and passing on the faith to the next generation.",
      teaching: [
        "**Iron Sharpens Iron** - Proverbs 27:17 teaches that godly friendships sharpen us. We need brothers who challenge, encourage, and hold us accountable.",
        "**The Discipleship Chain** - 2 Timothy 2:2 shows Paul's model: what you've received, pass on to faithful men who will teach others also. This is generational discipleship.",
        "**Stir Up One Another** - Hebrews 10:24-25 commands us to provoke one another to love and good works. This requires intentional relationships.",
        "**Jesus and the Twelve** - Jesus' ministry was built on discipleship. He invested deeply in a few men who would carry on the mission.",
        "**Spiritual Fatherhood** - Paul calls Timothy his 'true son in the faith' (1 Timothy 1:2). Older men are called to mentor younger men."
      ],
      reflection: [
        "Do you have close brothers in Christ who know you deeply and challenge you?",
        "Who is discipling you? Who are you discipling?",
        "Are you isolated, or are you in meaningful Christian community?",
        "What would it look like for you to invest in a younger man the way Paul invested in Timothy?",
        "How can you stir up your brothers to love and good works this week?"
      ],
      practicum: [
        "Identify one younger man you can begin mentoring and invite him to meet regularly",
        "Join or start a men's accountability group that meets weekly",
        "Reach out to three brothers this week and encourage them specifically",
        "Read a book on discipleship (e.g., 'The Master Plan of Evangelism' by Robert Coleman)",
        "Pray daily for the men in your life by name"
      ],
      portfolio: "Create a Discipleship Plan: Who are you investing in? What will you teach them? How will you measure growth?"
    },
    videos: [
      {
        title: "Brotherhood and Accountability - John Piper",
        url: "https://www.youtube.com/watch?v=jE-1Sbw2-iM",
        duration: "43:40",
        description: "The necessity of brotherhood and accountability"
      }
    ],
    audio: [
      {
        title: "Sermon: Brotherhood in Christ - John Piper",
        url: "https://www.desiringgod.org/messages/brothers-in-christ",
        duration: "43:40",
        description: "Understanding 2 Timothy 2:2 and generational faithfulness"
      }
    ]
  },
  {
    pathway: "mens",
    number: 6,
    title: "Ministering with Cultural Wisdom & Humility (Including First Nations Contexts)",
    description: "Equipping ministers to serve across cultures with understanding, humility, and respect",
    scripture: "1 Corinthians 9:19-23, Philippians 2:3-8, James 1:19",
    content: {
      introduction: "This module equips all men—regardless of background—to minister faithfully to and with First Nations people. It addresses historical trauma, cultural humility, and the call to listen, learn, and serve without imposing harm. This is about building bridges, not barriers.",
      teaching: [
        "**Becoming All Things to All People** - 1 Corinthians 9:19-23 shows Paul's cultural flexibility. He adapted his approach to reach different people groups without compromising the Gospel.",
        "**The Humility of Christ** - Philippians 2:3-8 calls us to consider others more significant than ourselves. This is the posture required for cross-cultural ministry.",
        "**Quick to Listen, Slow to Speak** - James 1:19 is essential wisdom. Before you teach, you must listen. Before you lead, you must learn.",
        "**Historical Trauma and the Church's Failure** - The church has often harmed First Nations people through residential schools, forced assimilation, and cultural erasure. We must acknowledge this and repent.",
        "**Cultural Wisdom and Gospel Clarity** - We honor culture without compromising the Gospel. We listen without patronizing. We serve without controlling."
      ],
      reflection: [
        "What do you know about the history of First Nations people in your region? What have you never asked?",
        "Have you ever made assumptions about First Nations people based on stereotypes or ignorance?",
        "How can you listen more and speak less when engaging with people from different cultures?",
        "What does it mean to 'become all things to all people' without losing your integrity?",
        "How can you serve First Nations communities in your area without imposing your own agenda?"
      ],
      practicum: [
        "Read a book on First Nations history and the church's role (e.g., 'The Inconvenient Indian' by Thomas King)",
        "Attend a First Nations cultural event or church service in your area",
        "Have a conversation with a First Nations believer and ask them about their experience with the church",
        "Pray for First Nations communities by name and ask God how you can serve",
        "Identify one stereotype or assumption you hold and repent of it before God"
      ],
      portfolio: "Write a Cultural Humility Reflection: What have I learned? How will I minister differently? What do I still need to learn?"
    },
    videos: [
      {
        title: "Cultural Humility in Ministry",
        url: "https://www.youtube.com/watch?v=yANtaIirtEA",
        duration: "44:20",
        description: "Practical wisdom for ministering across cultures"
      }
    ],
    audio: [
      {
        title: "Sermon: Cultural Humility - Voddie Baucham",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=cultural-wisdom",
        duration: "44:20",
        description: "Understanding historical trauma and the path forward"
      }
    ]
  },

  // WOMEN'S MINISTRY PATHWAY
  {
    pathway: "womens",
    number: 1,
    title: "Biblical Womanhood & Identity in Christ",
    description: "Understanding who you are as a woman created and redeemed by God",
    scripture: "Genesis 1:27, Proverbs 31:10-31, 1 Peter 3:3-4",
    content: {
      introduction: "This foundational module explores what it means to be a woman according to Scripture. We begin with identity in Christ, examining how the Gospel reshapes femininity, purpose, and calling.",
      teaching: [
        "**Created in God's Image** - Genesis 1:27 reveals that both male and female are made in the image of God. Womanhood reflects God's character in unique and beautiful ways.",
        "**The Proverbs 31 Woman** - This passage is not a checklist but a portrait of wisdom, strength, and godly character. She fears the Lord and serves with excellence.",
        "**Inner Beauty** - 1 Peter 3:3-4 calls women to cultivate a gentle and quiet spirit, which is precious in God's sight. This is not weakness but strength under control.",
        "**Women in Jesus' Ministry** - Jesus honored, taught, and empowered women in a culture that marginalized them. He is our model.",
        "**The Gospel and Womanhood** - The Gospel frees women from cultural expectations and calls them to live fully for God's glory."
      ],
      reflection: [
        "How has culture shaped your understanding of womanhood? Where does it align with Scripture, and where does it conflict?",
        "What does it mean to be a woman who fears the Lord?",
        "How are you cultivating inner beauty and godly character?",
        "In what ways has the Gospel freed you from false expectations?",
        "What is God calling you to as a woman in this season of life?"
      ],
      practicum: [
        "Memorize Proverbs 31:30 and meditate on it daily",
        "Journal about your identity in Christ as a woman",
        "Identify one area where you can grow in godly character this month",
        "Serve your family or community in a practical way this week",
        "Pray for wisdom and discernment in your calling"
      ],
      portfolio: "Write a 500-word reflection on 'My Identity as a Woman in Christ' based on this module's teaching."
    },
    videos: [
      {
        title: "Biblical Womanhood - Nancy DeMoss Wolgemuth",
        url: "https://www.youtube.com/watch?v=0x5qXqPLBmE",
        duration: "47:25",
        description: "Understanding femininity through a biblical lens"
      }
    ],
    audio: [
      {
        title: "Sermon: Biblical Womanhood - Nancy DeMoss Wolgemuth",
        url: "https://www.reviveourhearts.com/radio/revive-our-hearts/biblical-womanhood",
        duration: "38:50",
        description: "Unpacking the wisdom and strength of Proverbs 31"
      }
    ]
  },
  {
    pathway: "womens",
    number: 2,
    title: "Marriage, Motherhood, and Family Life",
    description: "Honoring God in your roles as wife and mother",
    scripture: "Titus 2:3-5, Proverbs 22:6, Ephesians 5:22-24",
    content: {
      introduction: "Marriage and motherhood are sacred callings. This module equips women to love their husbands, nurture their children, and create homes that honor God.",
      teaching: [
        "**The Titus 2 Woman** - Older women are called to teach younger women to love their husbands and children, to be self-controlled and pure, working at home and kind.",
        "**Training Up Children** - Proverbs 22:6 calls mothers to train children in the way they should go. This is intentional, daily discipleship.",
        "**Submission and Respect** - Ephesians 5:22-24 teaches wives to respect and submit to their husbands as the church submits to Christ. This is not about inferiority but about order and trust.",
        "**The Power of a Godly Mother** - 2 Timothy 1:5 and Proverbs 31:26-28 show the lasting impact of a mother's faith and wisdom.",
        "**Creating a Gospel-Centered Home** - Your home is a mission field. How you love, serve, and teach shapes the next generation."
      ],
      reflection: [
        "How are you loving your husband well? Where can you grow in respect and support?",
        "What are you teaching your children about God? Is it intentional or accidental?",
        "How are you creating a home that reflects the Gospel?",
        "What does biblical submission look like in your marriage?",
        "What legacy of faith do you want to leave for your children?"
      ],
      practicum: [
        "Pray for your husband daily by name",
        "Begin a daily devotion time with your children",
        "Speak words of affirmation and encouragement to your husband this week",
        "Identify one way you can train your children in godliness this month",
        "Create a family rhythm that prioritizes worship and discipleship"
      ],
      portfolio: "Create a Family Discipleship Plan: How will you teach your children about God daily?"
    },
    videos: [
      {
        title: "Marriage God's Way - Elisabeth Elliot",
        url: "https://www.youtube.com/watch?v=wPw3jaffIHE",
        duration: "49:30",
        description: "Understanding the call to mentor younger women"
      }
    ],
    audio: [
      {
        title: "Sermon: Marriage God's Way - Elisabeth Elliot",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=elliot-marriage",
        duration: "49:30",
        description: "The sacred calling of raising children in the Lord"
      }
    ]
  },
  {
    pathway: "womens",
    number: 3,
    title: "Hospitality, Service, and Community",
    description: "Using your gifts to serve the Body of Christ",
    scripture: "Romans 12:13, 1 Peter 4:9-10, Acts 16:14-15",
    content: {
      introduction: "Hospitality is not about perfection—it's about opening your heart and home to serve others. This module explores how women can use their gifts to build community and serve the church.",
      teaching: [
        "**Practice Hospitality** - Romans 12:13 commands believers to practice hospitality. This is not optional; it's a mark of Christian love.",
        "**Hospitality Without Grumbling** - 1 Peter 4:9-10 calls us to show hospitality without complaint, using our gifts to serve one another.",
        "**Lydia's Example** - Acts 16:14-15 shows Lydia opening her home to Paul and the early church. Her hospitality advanced the Gospel.",
        "**Service and Humility** - Luke 10:38-42 contrasts Martha and Mary. Both service and worship are needed, but worship must come first.",
        "**Building Community** - Hebrews 10:24-25 calls us to stir up one another. Women are often the glue that holds communities together."
      ],
      reflection: [
        "How are you practicing hospitality? Is your home open to others?",
        "Do you serve with joy or with grumbling?",
        "What gifts has God given you to serve the Body of Christ?",
        "Are you more like Martha or Mary? How can you balance service and worship?",
        "How can you build community among the women in your church?"
      ],
      practicum: [
        "Invite someone into your home for a meal this week",
        "Serve in your church in a practical way (childcare, hospitality team, etc.)",
        "Identify your spiritual gifts and find a place to use them",
        "Organize a women's gathering focused on prayer and encouragement",
        "Practice hospitality without worrying about perfection"
      ],
      portfolio: "Write a Hospitality Plan: How will you use your home and gifts to serve others?"
    },
    videos: [
      {
        title: "Motherhood and Discipleship - Gloria Furman",
        url: "https://www.youtube.com/watch?v=jE-1Sbw2-iM",
        duration: "45:15",
        description: "Practical ways to open your home and heart"
      }
    ],
    audio: [
      {
        title: "Sermon: Motherhood and Discipleship - Gloria Furman",
        url: "https://www.thegospelcoalition.org/podcasts/tgc-podcast/motherhood-discipleship",
        duration: "45:15",
        description: "How one woman's hospitality advanced the Gospel"
      }
    ]
  },
  {
    pathway: "womens",
    number: 4,
    title: "Teaching, Discipleship, and Mentoring",
    description: "Passing on the faith to the next generation of women",
    scripture: "Titus 2:3-5, 2 Timothy 1:5, Proverbs 31:26",
    content: {
      introduction: "Women are called to teach and disciple other women. This module equips you to mentor younger women, pass on wisdom, and build up the Body of Christ through faithful teaching.",
      teaching: [
        "**The Titus 2 Mandate** - Older women are commanded to teach younger women. This is not optional; it's a biblical imperative.",
        "**Generational Faithfulness** - 2 Timothy 1:5 shows the faith passed from Lois to Eunice to Timothy. Your faith shapes the next generation.",
        "**She Opens Her Mouth with Wisdom** - Proverbs 31:26 says the godly woman speaks with wisdom and kindness. Teaching flows from a life well-lived.",
        "**Women Teaching Women** - 1 Timothy 2:12 and Titus 2:3-5 show that women are called to teach other women and children, not to usurp authority over men.",
        "**Discipleship is Relationship** - Discipleship is not a program; it's life-on-life investment. It's messy, slow, and beautiful."
      ],
      reflection: [
        "Who has discipled you? What did you learn from them?",
        "Who are you discipling? If no one, why not?",
        "What wisdom do you have to pass on to younger women?",
        "How are you teaching your children and grandchildren about God?",
        "What does it mean to open your mouth with wisdom and kindness?"
      ],
      practicum: [
        "Identify one younger woman you can begin mentoring",
        "Start a women's Bible study in your home or church",
        "Read a book on discipleship (e.g., 'Spiritual Mothering' by Susan Hunt)",
        "Pray for the younger women in your life by name",
        "Share your testimony with a younger woman this week"
      ],
      portfolio: "Create a Discipleship Plan: Who will you invest in? What will you teach them?"
    },
    videos: [
      {
        title: "Women in Ministry - Jen Wilkin",
        url: "https://www.youtube.com/watch?v=yANtaIirtEA",
        duration: "43:50",
        description: "The biblical model of women discipling women"
      }
    ],
    audio: [
      {
        title: "Sermon: Women in Ministry - Jen Wilkin",
        url: "https://www.thegospelcoalition.org/podcasts/tgc-podcast/women-ministry",
        duration: "43:50",
        description: "Passing on the faith from generation to generation"
      }
    ]
  },
  {
    pathway: "womens",
    number: 5,
    title: "Prayer, Worship, and Spiritual Disciplines",
    description: "Deepening your walk with God through prayer and worship",
    scripture: "Luke 10:38-42, Philippians 4:6-7, 1 Thessalonians 5:16-18",
    content: {
      introduction: "Prayer and worship are the heartbeat of the Christian life. This module equips women to cultivate a deep, consistent prayer life and to worship God in all circumstances.",
      teaching: [
        "**Mary's Choice** - Luke 10:38-42 shows Mary choosing the better part: sitting at Jesus' feet. Worship must come before service.",
        "**Pray Without Ceasing** - 1 Thessalonians 5:16-18 calls us to pray continually, give thanks in all circumstances, and rejoice always.",
        "**The Peace of God** - Philippians 4:6-7 promises that when we pray with thanksgiving, God's peace will guard our hearts and minds.",
        "**Women of Prayer in Scripture** - Anna (Luke 2:36-38), Hannah (1 Samuel 1), and the women at Jesus' tomb all demonstrate the power of faithful prayer.",
        "**Spiritual Disciplines** - Prayer, fasting, Scripture memory, and solitude are not legalistic—they're means of grace that draw us closer to God."
      ],
      reflection: [
        "How is your prayer life? Is it consistent or sporadic?",
        "Do you prioritize worship and time with God, or is it always the last thing?",
        "What spiritual disciplines are you practicing? Which ones do you need to add?",
        "How can you pray without ceasing in the midst of a busy life?",
        "What does it mean to give thanks in all circumstances?"
      ],
      practicum: [
        "Set aside 15 minutes each morning for prayer and Scripture reading",
        "Start a prayer journal and record your prayers and God's answers",
        "Memorize Philippians 4:6-7 and pray it when anxious",
        "Fast from something (food, social media, TV) for one day and spend that time in prayer",
        "Worship God through music, journaling, or nature this week"
      ],
      portfolio: "Write a Spiritual Disciplines Plan: What practices will you commit to daily, weekly, and monthly?"
    },
    videos: [
      {
        title: "Sisterhood and Community - Melissa Kruger",
        url: "https://www.youtube.com/watch?v=0x5qXqPLBmE",
        duration: "41:20",
        description: "Cultivating a consistent prayer life"
      }
    ],
    audio: [
      {
        title: "Sermon: Titus 2 Women - Melissa Kruger",
        url: "https://www.thegospelcoalition.org/podcasts/tgc-podcast/titus-2-women",
        duration: "41:20",
        description: "Choosing the better part in a busy world"
      }
    ]
  },
  {
    pathway: "womens",
    number: 6,
    title: "Ministering with Cultural Wisdom & Humility (Including First Nations Contexts)",
    description: "Equipping ministers to serve across cultures with understanding, humility, and respect",
    scripture: "1 Corinthians 9:19-23, Philippians 2:3-8, James 1:19",
    content: {
      introduction: "This module equips all women—regardless of background—to minister faithfully to and with First Nations people. It addresses historical trauma, cultural humility, and the call to listen, learn, and serve without imposing harm.",
      teaching: [
        "**Becoming All Things to All People** - 1 Corinthians 9:19-23 shows Paul's cultural flexibility without compromising the Gospel.",
        "**The Humility of Christ** - Philippians 2:3-8 calls us to consider others more significant than ourselves.",
        "**Quick to Listen, Slow to Speak** - James 1:19 is essential. Listen before you teach. Learn before you lead.",
        "**Historical Trauma and the Church's Failure** - The church has harmed First Nations people. We must acknowledge this and repent.",
        "**Cultural Wisdom and Gospel Clarity** - Honor culture without compromising the Gospel. Listen without patronizing."
      ],
      reflection: [
        "What do you know about First Nations history? What have you never asked?",
        "Have you made assumptions based on stereotypes?",
        "How can you listen more and speak less?",
        "What does cultural humility look like in practice?",
        "How can you serve First Nations communities without imposing your agenda?"
      ],
      practicum: [
        "Read a book on First Nations history and the church's role",
        "Attend a First Nations cultural event or church service",
        "Have a conversation with a First Nations believer about their experience",
        "Pray for First Nations communities by name",
        "Identify and repent of one stereotype or assumption you hold"
      ],
      portfolio: "Write a Cultural Humility Reflection: What have I learned? How will I minister differently?"
    },
    videos: [
      {
        title: "Cultural Wisdom in Women's Ministry",
        url: "https://www.youtube.com/watch?v=wPw3jaffIHE",
        duration: "46:35",
        description: "Ministering across cultures with wisdom and grace"
      }
    ],
    audio: [
      {
        title: "Sermon: Cross-Cultural Ministry for Women",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=women-cultural-wisdom",
        duration: "46:35",
        description: "Understanding trauma and the path forward"
      }
    ]
  },

  // YOUTH MINISTRY PATHWAY
  {
    pathway: "youth",
    number: 1,
    title: "Understanding Youth Culture and Identity",
    description: "Connecting with the next generation in a rapidly changing world",
    scripture: "1 Timothy 4:12, Psalm 119:9-11, Ecclesiastes 12:1",
    content: {
      introduction: "Youth ministry is not about entertainment—it's about discipleship. This module equips you to understand youth culture, connect authentically, and point young people to Christ.",
      teaching: [
        "**Don't Let Anyone Look Down on Your Youth** - 1 Timothy 4:12 calls young believers to be examples in speech, conduct, love, faith, and purity.",
        "**Keeping Your Way Pure** - Psalm 119:9-11 teaches that young people guard their hearts by treasuring God's Word.",
        "**Remember Your Creator** - Ecclesiastes 12:1 calls youth to remember God in the days of their youth, before the difficult days come.",
        "**Youth Culture Today** - Social media, mental health struggles, identity confusion, and moral relativism shape today's youth. We must understand these realities.",
        "**Authentic Relationships** - Young people don't need more programs; they need adults who genuinely care and invest in them."
      ],
      reflection: [
        "How well do you understand the culture and pressures facing today's youth?",
        "Are you connecting authentically with young people, or just running programs?",
        "What does it mean to disciple youth in a digital age?",
        "How can you help young people treasure God's Word?",
        "What would it look like to invest deeply in one or two young people?"
      ],
      practicum: [
        "Spend time with a young person this week—ask about their life, struggles, and dreams",
        "Research one aspect of youth culture you don't understand (TikTok, gaming, etc.)",
        "Pray for the youth in your church by name",
        "Read a book on youth ministry (e.g., 'Sustainable Youth Ministry' by Mark DeVries)",
        "Identify one way you can serve youth in your church or community"
      ],
      portfolio: "Write a Youth Culture Assessment: What are the key challenges facing youth today? How can I minister effectively?"
    },
    videos: [
      {
        title: "Youth Identity in Christ - Francis Chan",
        url: "https://www.youtube.com/watch?v=jE-1Sbw2-iM",
        duration: "38:25",
        description: "Key trends and challenges in youth ministry today"
      }
    ],
    audio: [
      {
        title: "Sermon: Youth Identity in Christ - Francis Chan",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=chan-youth-identity",
        duration: "38:25",
        description: "Unpacking Ecclesiastes 12:1 for young people"
      }
    ]
  },
  {
    pathway: "youth",
    number: 2,
    title: "Teaching the Gospel to Youth",
    description: "Communicating the good news clearly and compellingly",
    scripture: "Romans 1:16, 1 Corinthians 15:1-4, 2 Timothy 2:15",
    content: {
      introduction: "The Gospel is the power of God for salvation. This module equips you to teach the Gospel clearly, answer tough questions, and help young people own their faith.",
      teaching: [
        "**Not Ashamed of the Gospel** - Romans 1:16 declares that the Gospel is the power of God for salvation. Don't water it down.",
        "**The Gospel in Four Verses** - 1 Corinthians 15:1-4 gives the core: Christ died for our sins, was buried, was raised, and appeared to many.",
        "**Rightly Handling the Word** - 2 Timothy 2:15 calls us to be workers who correctly handle the word of truth. Youth deserve sound doctrine.",
        "**Answering Tough Questions** - Youth ask hard questions about suffering, sexuality, science, and other religions. We must be prepared to answer with grace and truth.",
        "**From Belief to Discipleship** - Salvation is not the end; it's the beginning. Help youth move from decision to discipleship."
      ],
      reflection: [
        "Can you clearly articulate the Gospel in two minutes or less?",
        "How are you equipping youth to defend their faith?",
        "What tough questions are youth asking? Are you prepared to answer?",
        "How can you help youth move from belief to obedience?",
        "Are you teaching sound doctrine, or just feel-good messages?"
      ],
      practicum: [
        "Write out the Gospel in your own words and practice sharing it",
        "Teach a lesson on the Gospel to a group of youth",
        "Answer one tough question a young person has asked you",
        "Read a book on apologetics (e.g., 'The Reason for God' by Tim Keller)",
        "Memorize 1 Corinthians 15:1-4 with a young person"
      ],
      portfolio: "Create a Gospel Presentation: How will you explain the good news to youth?"
    },
    videos: [
      {
        title: "Navigating Teen Relationships - Paul Tripp",
        url: "https://www.youtube.com/watch?v=yANtaIirtEA",
        duration: "44:30",
        description: "Communicating the Gospel in a postmodern culture"
      }
    ],
    audio: [
      {
        title: "Sermon: Teen Relationships - Paul Tripp",
        url: "https://www.paultripp.com/sermons/teen-relationships",
        duration: "44:30",
        description: "Romans 1:16 and the unchanging message"
      }
    ]
  },
  {
    pathway: "youth",
    number: 3,
    title: "Discipleship and Spiritual Formation",
    description: "Helping youth grow in their walk with Christ",
    scripture: "Matthew 28:19-20, 2 Timothy 2:2, Colossians 1:28-29",
    content: {
      introduction: "Discipleship is the core of youth ministry. This module equips you to invest deeply in young people, helping them grow in maturity and Christlikeness.",
      teaching: [
        "**Make Disciples** - Matthew 28:19-20 is the Great Commission. Youth ministry is not about crowds; it's about disciples.",
        "**The Discipleship Chain** - 2 Timothy 2:2 shows the model: invest in faithful youth who will teach others also.",
        "**Present Everyone Mature in Christ** - Colossians 1:28-29 is Paul's goal: maturity in Christ. This is our goal for youth.",
        "**Spiritual Disciplines for Youth** - Prayer, Scripture memory, fasting, and service are not just for adults. Teach youth to practice these disciplines.",
        "**Life-on-Life Ministry** - Discipleship happens in relationships, not programs. Invest in a few, not just the many."
      ],
      reflection: [
        "Are you making disciples, or just running programs?",
        "Who are you investing in deeply? Who are you pouring your life into?",
        "How are you teaching youth to practice spiritual disciplines?",
        "What does maturity in Christ look like for a teenager?",
        "How can you move from event-based ministry to relational discipleship?"
      ],
      practicum: [
        "Identify 2-3 youth you will invest in deeply this year",
        "Start a weekly discipleship group with a few youth",
        "Teach a lesson on spiritual disciplines (prayer, Scripture reading, etc.)",
        "Memorize Matthew 28:19-20 with a group of youth",
        "Create a discipleship plan for one young person"
      ],
      portfolio: "Write a Discipleship Strategy: How will you invest in youth? What will you teach them?"
    },
    videos: [
      {
        title: "Youth and Social Media - Brett McCracken",
        url: "https://www.youtube.com/watch?v=0x5qXqPLBmE",
        duration: "39:20",
        description: "Moving from programs to life-on-life investment"
      }
    ],
    audio: [
      {
        title: "Sermon: Social Media and Faith - Brett McCracken",
        url: "https://www.thegospelcoalition.org/podcasts/tgc-podcast/social-media-faith",
        duration: "39:20",
        description: "Making disciples of the next generation"
      }
    ]
  },
  {
    pathway: "youth",
    number: 4,
    title: "Addressing Mental Health and Emotional Struggles",
    description: "Walking with youth through anxiety, depression, and trauma",
    scripture: "Psalm 34:18, 2 Corinthians 1:3-4, Philippians 4:6-7",
    content: {
      introduction: "Mental health struggles are epidemic among youth. This module equips you to walk with young people through anxiety, depression, and trauma with compassion, wisdom, and hope.",
      teaching: [
        "**The Lord is Near to the Brokenhearted** - Psalm 34:18 promises that God is close to those who are crushed in spirit. This is hope for struggling youth.",
        "**The God of All Comfort** - 2 Corinthians 1:3-4 teaches that God comforts us so we can comfort others. Your pain can become ministry.",
        "**Anxiety and Prayer** - Philippians 4:6-7 offers a path through anxiety: prayer, thanksgiving, and the peace of God.",
        "**Mental Health is Not Sin** - Struggling with mental health is not a lack of faith. It's a reality of living in a broken world.",
        "**When to Refer** - You are not a counselor. Know when to refer youth to professional help while continuing to walk with them spiritually."
      ],
      reflection: [
        "How are you creating a safe space for youth to share their struggles?",
        "Do you view mental health struggles as sin, weakness, or part of the human condition?",
        "How can you walk with youth through anxiety and depression without dismissing their pain?",
        "When should you refer a young person to professional help?",
        "How can you point youth to God's comfort without offering trite answers?"
      ],
      practicum: [
        "Have a conversation with a youth worker or counselor about mental health in youth",
        "Read a book on youth mental health (e.g., 'Anxious Generation' by Jonathan Haidt)",
        "Create a list of local counseling resources for youth",
        "Pray for youth struggling with mental health by name",
        "Reach out to one young person who is struggling and simply listen"
      ],
      portfolio: "Write a Mental Health Ministry Plan: How will you support youth struggling with anxiety, depression, or trauma?"
    },
    videos: [
      {
        title: "Youth Evangelism Training",
        url: "https://www.youtube.com/watch?v=wPw3jaffIHE",
        duration: "41:15",
        description: "Walking with youth through emotional struggles"
      }
    ],
    audio: [
      {
        title: "Sermon: Youth Evangelism",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=youth-evangelism",
        duration: "41:15",
        description: "2 Corinthians 1:3-4 and ministering to the hurting"
      }
    ]
  },
  {
    pathway: "youth",
    number: 5,
    title: "Sexuality, Identity, and Biblical Truth",
    description: "Navigating gender, sexuality, and identity with grace and truth",
    scripture: "Genesis 1:27, Matthew 19:4-6, 1 Corinthians 6:18-20",
    content: {
      introduction: "Youth are bombarded with messages about gender, sexuality, and identity. This module equips you to teach biblical truth with clarity, compassion, and courage.",
      teaching: [
        "**Male and Female He Created Them** - Genesis 1:27 and Matthew 19:4-6 affirm God's design: two sexes, male and female, created for marriage.",
        "**Flee Sexual Immorality** - 1 Corinthians 6:18-20 teaches that our bodies are temples of the Holy Spirit. Sexual sin is serious.",
        "**Identity in Christ, Not Feelings** - Ephesians 1:3-14 and Colossians 3:1-4 teach that our identity is found in Christ, not in our feelings or desires.",
        "**Compassion and Truth** - John 8:1-11 shows Jesus' approach: He does not condemn, but He also does not affirm sin. He calls to repentance.",
        "**Walking with LGBTQ+ Youth** - Many youth struggle with same-sex attraction or gender dysphoria. We must love them, listen to them, and point them to Christ."
      ],
      reflection: [
        "How are you teaching biblical sexuality to youth?",
        "Do you lead with truth, compassion, or both?",
        "How can you create a safe space for youth struggling with identity questions?",
        "What does it mean to love LGBTQ+ youth without affirming sin?",
        "Are you prepared to answer tough questions about gender and sexuality?"
      ],
      practicum: [
        "Teach a lesson on biblical sexuality and identity",
        "Read a book on this topic (e.g., 'God and the Transgender Debate' by Andrew T. Walker)",
        "Have a conversation with a youth pastor about how to navigate these issues",
        "Pray for youth struggling with identity questions",
        "Create a resource list for parents and youth on this topic"
      ],
      portfolio: "Write a Biblical Sexuality Teaching Plan: How will you teach truth with grace?"
    },
    videos: [
      {
        title: "Youth Group Leadership - Doug Fields",
        url: "https://www.youtube.com/watch?v=jE-1Sbw2-iM",
        duration: "42:50",
        description: "Navigating identity questions with compassion and clarity"
      }
    ],
    audio: [
      {
        title: "Sermon: Mentoring Young People - Doug Fields",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=fields-mentoring",
        duration: "42:50",
        description: "Genesis 1:27 and God's design for humanity"
      }
    ]
  },
  {
    pathway: "youth",
    number: 6,
    title: "Ministering with Cultural Wisdom & Humility (Including First Nations Contexts)",
    description: "Equipping ministers to serve across cultures with understanding, humility, and respect",
    scripture: "1 Corinthians 9:19-23, Philippians 2:3-8, James 1:19",
    content: {
      introduction: "This module equips all youth workers—regardless of background—to minister faithfully to and with First Nations youth. It addresses historical trauma, cultural humility, and the call to listen, learn, and serve without imposing harm.",
      teaching: [
        "**Becoming All Things to All People** - 1 Corinthians 9:19-23 shows Paul's cultural flexibility without compromising the Gospel.",
        "**The Humility of Christ** - Philippians 2:3-8 calls us to consider others more significant than ourselves.",
        "**Quick to Listen, Slow to Speak** - James 1:19 is essential. Listen before you teach. Learn before you lead.",
        "**Historical Trauma and Youth** - First Nations youth carry the weight of generational trauma from residential schools and cultural erasure.",
        "**Cultural Wisdom and Gospel Clarity** - Honor culture without compromising the Gospel. Listen without patronizing."
      ],
      reflection: [
        "What do you know about First Nations history and its impact on youth today?",
        "Have you made assumptions about First Nations youth?",
        "How can you listen more and speak less?",
        "What does cultural humility look like in youth ministry?",
        "How can you serve First Nations youth without imposing your agenda?"
      ],
      practicum: [
        "Read a book on First Nations history and youth",
        "Attend a First Nations youth event or gathering",
        "Have a conversation with a First Nations youth worker",
        "Pray for First Nations youth by name",
        "Identify and repent of one stereotype you hold"
      ],
      portfolio: "Write a Cultural Humility Reflection: What have I learned? How will I minister differently?"
    },
    videos: [
      {
        title: "Cultural Awareness for Youth Workers",
        url: "https://www.youtube.com/watch?v=yANtaIirtEA",
        duration: "40:45",
        description: "Ministering to First Nations youth with wisdom and grace"
      }
    ],
    audio: [
      {
        title: "Sermon: Youth and Cultural Awareness",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=youth-cultural-awareness",
        duration: "40:45",
        description: "Understanding trauma and the path forward"
      }
    ]
  },

  // TEACHING MINISTRY PATHWAY
  {
    pathway: "teaching",
    number: 1,
    title: "The Call and Character of a Teacher",
    description: "Understanding the sacred responsibility of teaching God's Word",
    scripture: "James 3:1, 2 Timothy 2:15, Ezra 7:10",
    content: {
      introduction: "Teaching God's Word is a sacred calling with great responsibility. This module explores the character, preparation, and accountability required of those who teach.",
      teaching: [
        "**Not Many Should Become Teachers** - James 3:1 warns that teachers will be judged more strictly. This is not a role to take lightly.",
        "**Rightly Handling the Word** - 2 Timothy 2:15 calls teachers to be workers who correctly handle the word of truth. Accuracy matters.",
        "**Ezra's Example** - Ezra 7:10 shows the pattern: study the Word, obey it, then teach it. You cannot teach what you do not live.",
        "**The Teacher's Character** - 1 Timothy 3:1-7 and Titus 1:5-9 outline the character required for teaching: above reproach, self-controlled, hospitable, able to teach.",
        "**The Weight of Influence** - Teachers shape minds, hearts, and theology. Your words carry weight."
      ],
      reflection: [
        "Why do you want to teach? Is it for God's glory or your own?",
        "Are you living what you teach? Where is there hypocrisy?",
        "How are you preparing to handle God's Word accurately?",
        "Do you meet the character qualifications for teaching?",
        "Are you willing to be held to a stricter standard?"
      ],
      practicum: [
        "Memorize James 3:1 and 2 Timothy 2:15",
        "Evaluate your character against 1 Timothy 3:1-7. Where do you need to grow?",
        "Study one passage deeply using commentaries and original languages",
        "Teach a short lesson to a small group and ask for feedback",
        "Pray for humility and accuracy in your teaching"
      ],
      portfolio: "Write a Teaching Philosophy: Why do I teach? What are my goals? How will I prepare?"
    },
    videos: [
      {
        title: "Biblical Teaching Foundations - R.C. Sproul",
        url: "https://www.youtube.com/watch?v=0x5qXqPLBmE",
        duration: "48:15",
        description: "Understanding James 3:1 and the teacher's responsibility"
      }
    ],
    audio: [
      {
        title: "Sermon: The Call to Teach - R.C. Sproul",
        url: "https://www.ligonier.org/learn/sermons/call-to-teach",
        duration: "48:15",
        description: "The pattern of study, obedience, and teaching"
      }
    ]
  },
  {
    pathway: "teaching",
    number: 2,
    title: "Biblical Interpretation and Hermeneutics",
    description: "Learning to rightly divide the Word of truth",
    scripture: "2 Timothy 2:15, Nehemiah 8:8, Acts 17:11",
    content: {
      introduction: "Accurate interpretation is essential for faithful teaching. This module equips you with hermeneutical principles to understand and teach Scripture correctly.",
      teaching: [
        "**Rightly Dividing the Word** - 2 Timothy 2:15 calls us to be workers who correctly handle the word of truth. This requires skill and discipline.",
        "**Reading with Understanding** - Nehemiah 8:8 shows Ezra and the Levites reading the Law clearly and giving the sense, so the people understood.",
        "**The Berean Example** - Acts 17:11 commends the Bereans for examining the Scriptures daily to see if Paul's teaching was true. Test everything.",
        "**Hermeneutical Principles** - Context, genre, grammar, historical background, and the analogy of faith guide interpretation.",
        "**From Text to Application** - Good teaching moves from what the text meant (exegesis) to what it means (application)."
      ],
      reflection: [
        "How are you studying Scripture? Are you reading it carefully or carelessly?",
        "Do you consider context, genre, and historical background when interpreting?",
        "Are you teaching what the text says, or what you want it to say?",
        "How can you grow in your ability to rightly divide the Word?",
        "Are you teachable? Do you test your interpretations against Scripture?"
      ],
      practicum: [
        "Study one passage using the historical-grammatical method",
        "Read a book on hermeneutics (e.g., 'Grasping God's Word' by Duvall and Hays)",
        "Compare your interpretation of a passage with trusted commentaries",
        "Teach a lesson focusing on accurate interpretation",
        "Memorize 2 Timothy 2:15 and pray for accuracy"
      ],
      portfolio: "Create an Exegetical Outline: Choose a passage, study it deeply, and outline your interpretation."
    },
    videos: [
      {
        title: "Expository Preaching - John MacArthur",
        url: "https://www.youtube.com/watch?v=wPw3jaffIHE",
        duration: "52:20",
        description: "Principles for rightly interpreting Scripture"
      }
    ],
    audio: [
      {
        title: "Sermon: Expository Preaching - John MacArthur",
        url: "https://www.gty.org/library/sermons-library/expository-preaching",
        duration: "52:20",
        description: "Acts 17:11 and the discipline of testing everything"
      }
    ]
  },
  {
    pathway: "teaching",
    number: 3,
    title: "Preparing and Delivering Effective Lessons",
    description: "Crafting clear, engaging, and faithful teaching",
    scripture: "Nehemiah 8:8, 1 Corinthians 14:19, Colossians 4:6",
    content: {
      introduction: "Faithful teaching requires both accuracy and clarity. This module equips you to prepare lessons that are biblically sound, engaging, and applicable.",
      teaching: [
        "**Clarity and Understanding** - Nehemiah 8:8 shows the importance of reading clearly and giving the sense. Good teaching is clear teaching.",
        "**Five Words with Understanding** - 1 Corinthians 14:19 says Paul would rather speak five words with understanding than ten thousand in a tongue. Clarity over complexity.",
        "**Gracious Speech** - Colossians 4:6 calls for speech that is gracious and seasoned with salt. Teaching should be both truthful and winsome.",
        "**Lesson Structure** - A good lesson has an introduction, clear points, illustrations, application, and a conclusion.",
        "**Engaging Your Audience** - Use stories, questions, and interaction to keep people engaged."
      ],
      reflection: [
        "Are your lessons clear, or do you confuse people with jargon?",
        "Do you prepare thoroughly, or do you wing it?",
        "How are you making your teaching engaging and applicable?",
        "Do you use illustrations effectively?",
        "Are you speaking with grace, or are you harsh and condescending?"
      ],
      practicum: [
        "Prepare a 20-minute lesson using a clear structure",
        "Practice your lesson out loud before teaching it",
        "Use at least one illustration or story in your next lesson",
        "Ask for feedback after teaching: Was it clear? Engaging? Applicable?",
        "Watch a skilled teacher and note what makes their teaching effective"
      ],
      portfolio: "Create a Teaching Outline: Prepare a full lesson with introduction, points, illustrations, and application."
    },
    videos: [
      {
        title: "Lesson Planning for Bible Teachers - Bryan Chapell",
        url: "https://www.youtube.com/watch?v=jE-1Sbw2-iM",
        duration: "44:25",
        description: "Practical steps for lesson preparation"
      }
    ],
    audio: [
      {
        title: "Sermon: Lesson Planning - Bryan Chapell",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=chapell-lesson-planning",
        duration: "44:25",
        description: "The power of clear, faithful teaching"
      }
    ]
  },
  {
    pathway: "teaching",
    number: 4,
    title: "Teaching Doctrine and Theology",
    description: "Grounding believers in sound doctrine",
    scripture: "Titus 2:1, 1 Timothy 4:16, 2 Timothy 4:2-4",
    content: {
      introduction: "Sound doctrine is the foundation of the Christian life. This module equips you to teach theology clearly and help believers grow in doctrinal understanding.",
      teaching: [
        "**Teach What Accords with Sound Doctrine** - Titus 2:1 commands teachers to teach what is consistent with sound doctrine. Theology matters.",
        "**Watch Your Life and Doctrine** - 1 Timothy 4:16 warns Timothy to keep a close watch on his life and doctrine. Both are essential.",
        "**Preach the Word** - 2 Timothy 4:2-4 calls for faithful preaching, even when people want to hear what tickles their ears.",
        "**Core Doctrines** - The Trinity, the deity of Christ, justification by faith, the authority of Scripture, and the return of Christ are non-negotiable.",
        "**Teaching Theology Practically** - Doctrine is not abstract; it shapes how we live, worship, and serve."
      ],
      reflection: [
        "Are you teaching sound doctrine, or popular opinions?",
        "How well do you understand core Christian doctrines?",
        "Are you watching your life and doctrine closely?",
        "How can you make theology practical and applicable?",
        "Are you willing to teach unpopular truths?"
      ],
      practicum: [
        "Study one core doctrine (e.g., justification, Trinity) using a systematic theology book",
        "Teach a lesson on a key doctrine",
        "Memorize Titus 2:1 and 1 Timothy 4:16",
        "Read a book on theology (e.g., 'Systematic Theology' by Wayne Grudem)",
        "Evaluate your teaching: Is it doctrinally sound?"
      ],
      portfolio: "Write a Doctrinal Statement: What do you believe about God, Scripture, salvation, and the church?"
    },
    videos: [
      {
        title: "Teaching Different Age Groups - Alistair Begg",
        url: "https://www.youtube.com/watch?v=yANtaIirtEA",
        duration: "46:30",
        description: "The importance of sound doctrine in teaching"
      }
    ],
    audio: [
      {
        title: "Sermon: Teaching Different Ages - Alistair Begg",
        url: "https://www.truthforlife.org/resources/sermon/teaching-different-ages",
        duration: "46:30",
        description: "Acts 2:42 and the foundation of the early church"
      }
    ]
  },
  {
    pathway: "teaching",
    number: 5,
    title: "Teaching Different Age Groups and Contexts",
    description: "Adapting your teaching for children, youth, and adults",
    scripture: "1 Corinthians 9:19-23, Ephesians 4:11-16, Deuteronomy 6:6-7",
    content: {
      introduction: "Effective teaching requires adapting your approach to different audiences. This module equips you to teach children, youth, and adults with wisdom and flexibility.",
      teaching: [
        "**Becoming All Things to All People** - 1 Corinthians 9:19-23 shows Paul's flexibility in ministry. Adapt your approach without compromising the message.",
        "**Equipping for Maturity** - Ephesians 4:11-16 shows that teaching aims at maturity. Tailor your teaching to where people are.",
        "**Teaching Children** - Deuteronomy 6:6-7 calls for teaching children in every context. Make it simple, engaging, and memorable.",
        "**Teaching Youth** - Youth need truth, not entertainment. Teach them to think critically and own their faith.",
        "**Teaching Adults** - Adults need depth, application, and challenge. Don't dumb it down."
      ],
      reflection: [
        "How do you adapt your teaching for different age groups?",
        "Are you teaching children in a way that engages them?",
        "Are you challenging youth to think deeply, or just entertaining them?",
        "Are you giving adults the depth they need?",
        "How can you grow in your ability to teach different audiences?"
      ],
      practicum: [
        "Teach the same lesson to children, youth, and adults, adapting your approach each time",
        "Observe a skilled children's teacher and note what makes their teaching effective",
        "Read a book on teaching children (e.g., 'Teaching to Change Lives' by Howard Hendricks)",
        "Create a lesson plan specifically for youth or children",
        "Ask for feedback from different age groups after teaching"
      ],
      portfolio: "Create Age-Specific Lesson Plans: Prepare lessons for children, youth, and adults on the same topic."
    },
    videos: [
      {
        title: "Handling Difficult Questions - Tim Keller",
        url: "https://www.youtube.com/watch?v=0x5qXqPLBmE",
        duration: "49:20",
        description: "Adapting your teaching for different age groups"
      }
    ],
    audio: [
      {
        title: "Sermon: Apologetics for Teachers - Tim Keller",
        url: "https://gospelinlife.com/downloads/apologetics-for-teachers",
        duration: "49:20",
        description: "Teaching children in every context of life"
      }
    ]
  },
  {
    pathway: "teaching",
    number: 6,
    title: "Ministering with Cultural Wisdom & Humility (Including First Nations Contexts)",
    description: "Equipping ministers to serve across cultures with understanding, humility, and respect",
    scripture: "1 Corinthians 9:19-23, Philippians 2:3-8, James 1:19",
    content: {
      introduction: "This module equips all teachers—regardless of background—to minister faithfully to and with First Nations people. It addresses historical trauma, cultural humility, and the call to listen, learn, and teach without imposing harm.",
      teaching: [
        "**Becoming All Things to All People** - 1 Corinthians 9:19-23 shows Paul's cultural flexibility without compromising the Gospel.",
        "**The Humility of Christ** - Philippians 2:3-8 calls us to consider others more significant than ourselves.",
        "**Quick to Listen, Slow to Speak** - James 1:19 is essential. Listen before you teach. Learn before you lead.",
        "**Historical Trauma and Teaching** - The church has harmed First Nations people through forced assimilation and cultural erasure. We must acknowledge this.",
        "**Cultural Wisdom and Gospel Clarity** - Honor culture without compromising the Gospel. Listen without patronizing."
      ],
      reflection: [
        "What do you know about First Nations history and the church's role?",
        "Have you made assumptions about First Nations people?",
        "How can you listen more and speak less when teaching cross-culturally?",
        "What does cultural humility look like in teaching?",
        "How can you teach without imposing your cultural assumptions?"
      ],
      practicum: [
        "Read a book on First Nations history and the church",
        "Attend a First Nations church service or cultural event",
        "Have a conversation with a First Nations believer about their experience",
        "Pray for First Nations communities by name",
        "Identify and repent of one cultural assumption you hold"
      ],
      portfolio: "Write a Cultural Humility Reflection: What have I learned? How will I teach differently?"
    },
    videos: [
      {
        title: "Teaching with Cultural Sensitivity",
        url: "https://www.youtube.com/watch?v=wPw3jaffIHE",
        duration: "45:40",
        description: "Teaching across cultures with wisdom and grace"
      }
    ],
    audio: [
      {
        title: "Sermon: Contextual Teaching",
        url: "https://www.sermonaudio.com/sermoninfo.asp?SID=contextual-teaching",
        duration: "45:40",
        description: "Understanding trauma and the path forward"
      }
    ]
  }
];

// Helper function to get modules by pathway
export function getModulesByPathway(pathway: string): ModuleData[] {
  return allModules.filter(m => m.pathway === pathway);
}

// Helper function to get a specific module
export function getModule(pathway: string, number: number): ModuleData | undefined {
  return allModules.find(m => m.pathway === pathway && m.number === number);
}
