let quoteArray = [
    'Person, woman, man, camera, tv. ', 
    'I think if this country gets any kinder or gentler, it\'s literally going to cease to exist.', 
    'The U.S. cannot allow EBOLA-infected people back. People that go to far away places to help out are great - but must suffer the consequences!',
    'It\'s really cold outside, they are calling it a major freeze, weeks ahead of normal. Man, we could use a big fat dose of global warming!',
    'The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.',
    'If Hillary Clinton can\'t satisfy her husband what makes her think she can satisfy America?',
    'I never attacked [Rand Paul] on his looks, and believe me, there\'s plenty of subject matter right there.',
    'I\'m the most successful person ever to run for the presidency, by far. ... Ross Perot isn\'t successful like me. Romney - I have a Gucci store that\'s worth more than Romney.',
    '[John McCain is]... not a war hero. He\'s a war hero - he\'s a war hero \'cause he was captured. I Like people that weren\'t captured, OK, I hate to tell you.',
    'Arianna Huffington is unattractive both inside and out. I fully understand why her former husband left her for a man - he made a good decision.',
    'My favourite part [of Pulp Fiction] is when Sam has his gun out in the diner and he tells the guy to tell his girlfriend to shut up. "Tell that bitch to be cool. Say: Bitch be cool." I love those lines.',
    'While Bette Midler is an extremely unattractive woman, I refuse to say that because I always insist on being politically correct.',
    'Donald J. Trump is calling for a total and complete shutdown of Muslims entering the United States until our country\'s representatives can figure out what the hell is going on.',
    'Just tried watching Modern Family - written by a moron, really boring. Writer has the mind of a very dumb and backward child. Sorry Danny!',
    'I look very much forward to showing my financials, because they are huge.',
    'The concept of shaking hands is absolutely terrible, and statistically I\'ve been proven right.',
    'Sorry losers and haters, but my IQ is one of the highest - and you all know it! Please don\'t feel so stupid or insecure, it\'s not your fault.',
    'I\'ve just never needed [Viagra]. Frankly, I wouldn\'t mind if there were an anti-Viagra, something with the opposite effect. I\'m not bragging. I\'m just lucky. I don\'t need it.',
    'All of the women on The Apprentice flirted with me - consciously or unconsciously. That\'s to be expected.',
    'Certain guys tell me they want women of substance, not beautiful models. It just means they can\'t get beautiful models.',
    'She does have a very nice figure... If [Ivanka] weren\'t my daughter, perhaps I\'d be dating her.',
    'I would never buy Ivana any decent jewels or pictures. Why give her negotiable assets?',
    'I have never seen a thin person drinking Diet Coke.',
    'Show me someone with no ego and I\'ll show you a big loser.',
    'I\'m intelligent. Some people would say I\'m very, very, very intelligent.',
    'My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.',
    'I was down there, and I watched our police and our firemen, down on 7-Eleven, down at the World Trade Center, right after it came down',
    'I could stand in the middle of 5th Avenue and shoot somebody and I wouldn\'t lose voters.',
    'You could see there was bloody coming out of her eyes. Blood coming out of her wherever.',
    'Why are we having all these people from shithole countries coming here?',
    'I loved my previous life. I had so many things going. This is more work than in my previous life. I thought it would be easier.',
    'Look at my African-American!',
    'I won’t do anything to take care of them. I’ll supply funds and she’ll take care of the kids. It’s not like I’m gonna be walking the kids down Central Park.',
    '[Breastfeeding mothers] are disgusting.',
    'In life you have to rely on the past, and that’s called history.',
    'Why would Kim Jong-un insult me by calling me ‘old,’ when I would NEVER call him ‘short and fat?’ ... I try so hard to be his friend.',
    'Russia will have much greater respect for our country when I am leading it than when other people have led it.',
    'I would bet if you took a poll in the FBI I would win that poll by more than anybody’s won a poll.',
    '[Kim Jong-Un] speaks and his people sit up at attention. I want my people to do the same.',
    'Nobody has better respect for intelligence than Donald Trump.',
    'We’re … increasing our budget by many billions of dollars, because of North Korea and other reasons, having to do with the anti-missile.',
    'Nobody knew health care could be so complicated.',
    'We condemn in the strongest possible terms this egregious display of hatred, bigotry and violence on many sides. On many sides.',
    'You know, I go to Washington ... and I see the swamp. And it’s not a good place. In fact today I said we ought to change it from the word swamp to ... cesspool or, perhaps, ... sewer.',
    'If you look at President Obama and other presidents, most of them didn’t make calls. A lot of them didn’t make calls. I like to call when it’s appropriate.',
    'North Korean Leader Kim Jong Un just stated that the “Nuclear Button is on his desk at all times.” Will someone from his depleted and food starved regime please inform him that I too have a Nuclear Button, but it is a much bigger & more powerful one than his, and my Button works!',
    'I’m the least racist person you have ever interviewed.',
    'Despite the constant negative press covfefe',
    'What you’re seeing and what you’re reading is not what’s happening,',
    'Supposing you brought the light inside the body, which you can do either through the skin or in some other way. Is there a way we can do something like that by injection inside or almost a cleaning? It sounds interesting to me, so we\'ll see.',
    'In another sense, I tested positively toward negative, right? So no. I tested perfectly this morning, meaning I tested negative. But that\'s a way of saying it. Positively toward the negative.',
    'Within a couple of days [infections are] going to be down to close to zero. One day, it’s like a miracle. It will disappear.',
    'I\'ve always known this is a real [sic], this is a pandemic. I\'ve felt it was a pandemic long before it was called a pandemic.',
    'China has been working very hard to contain the Coronavirus. ... It will all work out well. In particular, on behalf of the American People, I want to thank President Xi!',
    'I could be the most popular person in Europe. I could be -- I could run for any office if I wanted to, but I don\'t want to.',
    'We\'re talking about sand and death (aka Syria). That\'s what we\'re talking about.',
    'I had a meeting at the Pentagon with lots of generals -- they were like from a movie, better looking than Tom Cruise and stronger -- and I had more generals than I\'ve ever seen.',
    'I said, this is the greatest room I\'ve ever seen. I -- I saw more computer boards than, I think, that they make today.',
    'I\'m a professional at technology.',
    'When during the campaign I would say, "Mexico\'s going to pay for it," obviously I never said this and I never meant they\'re going to write out a check.',
    'The buck stops with everybody.',
    'I was obviously a good candidate. I won every debate. I won everything I did, and I won, and I won easily.',
    'I ran a great campaign. I ran a campaign that now they say was better than that gentleman\'s [Andrew Jackson\'s] campaign in the 1800s and we did a great job.',
    'The world is not doing well and we\'re going great.',
    'It looks like Elizabeth Warren has not caught on like they thought she would. She fell into a trap. It\'s called the Pocahontas trap.',
    'My intelligence people, if they said in fact that Iran is a wonderful kindergarten, I disagree with them a hundred percent.',
    'I love this state, and I love the people of this state. We\'ve had a great romance together. You know that. Been a great romance.',
    'So, someday, with all of us -- this is all of us -- and those hats are beautiful, by the way. Someday.',
    'Where do these people come from? Where do they come from? They go back home to Mommy. They get punished when they get home.',
    'Is there any place that\'s more fun to be than a Trump rally? Is there any place?',
    'But I really don\'t like their policy of taking away your car, of taking away your airplane flights, of, "Let\'s hop a train to California," of ... "You\'re not allowed to own cows anymore."',
    'Some of the most dishonest people in media are the so-called "fact-checkers."',
    'Pretty soon we\'re going to be saying keep America great. Keep America great.',
    'How about the word "caravan?" Caravan? I think that was one of mine.',
    'Yeah, Obama had a dog. You\'re right. Both parties should come together to finally create a safe and lawful system of immigration.',
    'I was a little new to the job, a little new to the profession, and we had a little disappointment for the first year and a half. People that should have stepped up did not step up. They didn\'t step up, and they should have.',
    'But, you know, I never did politics before. Now I do politics.',
    'But I found some very old laws from when our country was rich -- really rich. The old tariff laws -- we had to dust them off; you could hardly see, they were so dusty.',
    'You know I\'m totally off-script right now. And this is how I got elected, by being off-script. True.',
    'When the wind stops blowing, that\'s the end of your electric. Let\'s hurry up. "Darling -- Darling, is the wind blowing today? I\'d like to watch television, darling."',
    'Russia, please, if you can, get us Hillary Clinton\'s emails. Please, Russia, please.',
    'I have one of the great inventions in history. It\'s called TiVo. I think it\'s actually better than television, because television is practically useless without TiVo, right?',
    'Number one, I\'m in love, and you\'re in love. We\'re all in love together.',
    'Nobody has been tougher, nobody, on Russia than me. And everybody -- my enemies say that, when they are reasonable enemies, when they are fair.',
    'I think Pocahontas, she\'s finished, she\'s out. She\'s gone. No, when it was found that I had more Indian blood in me than she did.',
    'Can you believe I\'m a politician? I can\'t even.',
    'In Michigan, they gave me an award six years, seven years ago, I had no idea. It was the Man of the Year in Michigan.',
    'You got hit with a little hurricane called Michael. That was not a nice hurricane, I can tell you that, but it\'s going well and I\'m thrilled to be here with really truly incredible men and women of the Florida panhandle.',
    'I think that the people of Puerto Rico are very grateful to Donald Trump for what we\'ve done for them.',
    'They want to knock down all buildings in Manhattan and rebuild them without windows.',
    'I had such an easy life. People say, I had such an easy life. Who the hell knew it was going to be this difficult, but I love it.',
    'In London you have stabbings all over. I read an article where everybody\'s being stabbed. They said your hospital is a sea of blood all over the floors.',
    'This is one of the true, in terms of war, in terms of, probably you can also say, in terms of peace, because this led to something very special.',
    'There are those that say they have never seen the Queen have a better time, a more animated time.',
    'Now, people haven\'t used tariffs, but tariffs are a beautiful thing when you\'re the piggy bank, when you have all the money.',
    'We are not fools anymore. We are not the foolish country that does so badly.',
    'We are -- if you look at China, China, as great as they are and they are great, they are near the capability of our geniuses in Silicon Valley that walk around in undershirts and they were not $2 billion a piece.',
    'I think [Biden is] the weakest, mentally. And I like running against people that are weak, mentally.',
    'The farmers are my best friend.',
    'But I just received a beautiful letter from Kim Jong Un. I can\'t show you the letter, obviously, but it was a very personal, very warm, very nice letter.',
    'It was Jackie O., and that\'s good, but we have our own Jackie O. today. It\'s called Melania. We\'ll call it Melania T.',
    'I just had a meeting with somebody that\'s a pollster, and I\'m winning everywhere.',
    'There\'s nothing wrong with listening. If somebody called from a country, Norway, "We have information on your opponent," oh, I think I\'d want to hear it.',
    'Nobody\'s ever been treated badly like me.',
    'Why don\'t we nuke them? They start forming off the coast of Africa, as they\'re moving across the Atlantic, we drop a bomb inside the eye of the hurricane and it disrupts it. Why can\'t we do that?',
    'I am happy to inform all of the people living their Suburban Lifestyle Dream that you will no longer be bothered or financially hurt by having low income housing built in your neighborhood',
    'With Universal Main-In Voting (not Absentee Voting, which is good), 2020 will be the most INACCURATE & FRAUDULENT Election in history.',
    '[The election] will be a great embarrassment to the USA. Delay the Election until people can properly, securly and safely vote???',
    'Support Patio Pizza and its wonderful owner, Guy Caligiuri, in St. James, Long Island (N.Y.). Great Pizza!!!',
    `Right now, [COVID-19] is under control. They are dying; that's true. It is what it is... It's under control as much as you can control it.`,
    `I had no problem. I had no problem whatsoever. And importantly, I didn't test positive.`,
    `"Hydroxy has tremendous support, but politically it's toxic because I supported it. If I would have said, 'Do not use hydroxychloroquine under any circumstannces,' they would have come out and they would have said, 'It's a great it's a great thing.'"`,
    `"we're on pace to have a vaccine available this year, maybe far in advance of the end of the year."`,
    `"Absentee [voting] is great. It works. Like in Florida, they'll do absentee. It really works. But universal mail-in ballots is going to be a great embarrassment to our country."`,
    `"In an illegal late night coup, Nevada's clubhouse Governor made it impossible for Republicans to win the state. Post Office could never handle the Traffic of Mail-In Votes without preparation. Using Covid to steal the state. See you in Court!"`,
    `"Cases up because of BIG Testing! Much of our Country is doing very well. Open the Schools!"`,
    `"I don't take any responsibility at all."`,
    `"[Russian bounties] was nevver brought to my attention. I think it's another Russia hoax. They've been giving me the Russia hoax, Shifty-Schiff and all these characters from the day I got here."`,
    `"We beat Obama 4 years ago, he worked harder than Crooked Hillary, and we'll do it again!"`,
    `"As far as TikTok is concerned we're banning them from the United States."`,
    `"Other countries have it worse than we do." (deaths re: COVID-19)`,
    `"Glad I was able to get the very dishonnest LameStream Media to finally start talking about the RISKS to our Democracy from dangerous Universal Mail-In-Voting (not Absentee Voting, which I totally support!)."`,
    `"Drug prices will soonn be lowered massively. Big Pharma (Drug Companies) are advertising against me like crazy because lower prices mean less profit. When you watch a Fake Ad, just think lower drug prices!!!"` 
];