export default {
  beerStart: {
    type: 'QUESTION',
    title: 'Something Exclusive for our event?',
    answers: [{
      title: 'Yes',
      nextId: 'responsablyAnswer'
    }, {
      title: 'No',
      nextId: 'animalQuestion'
    }]
  },
  mantaRayAnswer: {
    type: 'ANSWER',
    title: 'Manta Ray (4.6%)',
    description: 'Brewed with pilsner malts this crisp craft lager is tripple hopped with kasbek, chinnook makatu. Glides down the throat far too easily.'
  },
  alligatorAnswer: {
    type: 'ANSWER',
    title: 'Alligator (4.6%)',
    description: 'Brewed with all pale malts and loaded with our brewers’ favourite hop, Azacca.  Hitting you straight off with the tastes of mangos, lychees, citrus and pine, with a clean crisp malt bill lurking in the background.  So full of tropical flavours you’ll think you really are in the tropics'
  },
  newtonAnswer: {
    type: 'ANSWER',
    title: 'Sir Newton (3.8%)',
    description: 'A classic Golden Ale brewed as a hydbrid craft tradtional bitter. A calculated blend of Maris Otter and Crystal malts; balanced by whole leaf Challenger, Target, Celeia and Cascade. An Ale crafted with detail down to the last molecule. Our Golden Ale is adjusted to perfection and inspired by the man who understood the variables of balance best, Sir Newton. A man who himself has confessed, was inspired the great Watling Street to begin with.'
  },
  shellyAnswer: {
    type: 'ANSWER',
    title: 'Miss Shelly (4.2%)',
    description: 'A refreshing Pale Ale brewed straight up with Maris Otter barley. This heavily hopped whole leaf Galena, Cascade and Liberty Hop is an exciting creation. Some say it’s a creation so bold and unapologetic that it acts as an ode to Mary Shelley. That it’s a companion complex enough that she could finally find a form of solace.'
  },
  mrRipperAnswer: {
    type: 'ANSWER',
    title: 'Mr Ripper (4.5%)',
    description: 'A heavily hopped blood Red Ale, with colours pulling through from Crystal Rye. An Ale with rich notes of whole leaf First Gold, Admiral, Pilot and Savinski Golding. This Ale had enough heart even for MR Ripper, the shadow of these parts. Watling Street Red Ale, the infamous ale for the infamous character.'
  },
  uncleDamnAnswer: {
    type: 'ANSWER',
    title: 'Uncle Damn (3.7%)',
    description: 'This Session Pale is bursting with tropical grapefuit and citrus flavours.Packed with Liberty, Mosaic and citra hops'
  },
  boudiccaAnswer: {
    type: 'ANSWER',
    title: 'Queen Boudica (4.2%)',
    description: 'A traditional English Ale with a blend of Maris Otter, Crystal, wheat and chocolate malts. An Ale treated with care and finesse so as to ensure the rich undertones of toffee take centre stage. A famous Premium Ale whose confidence to be rebellious is inspired by the famous Celtic Inceni Rebel Queen, Queen Boudicea.'
  },
  watTylerAnswer: {
    type: 'ANSWER',
    title: 'Wat Tyler (4.8%)',
    description: 'Cascade and mosaic hops define this citrus punchy pale. "Wat ch" out though it drinks like juice.'
  },
  infernoAnswer: {
    type: 'ANSWER',
    title: 'Inferno (4.0%)',
    description: 'With Sterling, Amarillo, Centennial,Cascade, Chinook hops. A light golden beer with a big personality, bursting with fruity hop flavours, citrus notes and a refreshing finish.'
  },
  fireflyAnswer: {
    type: 'ANSWER',
    title: 'Firefly (4.0%)',
    description: 'Citrus, melon & papaya jump from the glass, followed by a light bread & biscuit palate on first taste. A blend of Cascade, Ekuanot & Mandarina Bavaria hops then provide a super refreshing citrus & blackcurrant lingering taste.'
  },
  paleFourAnswer: {
    type: 'ANSWER',
    title: 'Pale Four (4.6%)',
    description: 'Hops, hops and more hops, although this is not just another one dimensional ‘lupin fest’. Cara, Munich and Rye Crystal malts provide a robust base for this punchy American West Coast IPA style beer.'
  },
  classicEnglishAleAnswer: {
    type: 'ANSWER',
    title: 'Classic English Ale (4.0%)',
    description: 'A light hoppy aroma and a rich and rounded malty taste balanced by subtle hoppiness, to give a supremely clean, smooth and refreshing ale. '
  },
  nakedLadiesAnswer: {
    type: 'ANSWER',
    title: 'Naked Ladies (4.4%)',
    description: 'Outstanding, glorious, hoppy golden ale using Herkules, Celeia and Chinook hops for full-flavoured satisfaction. Inspired by the statues of water nymphs in York House gardens in Twickenham, known locally as the “Naked Ladies”'
  },
  wolfAnswer: {
    type: 'ANSWER',
    title: 'Wolf (3.8%)',
    description: 'A Straw coloured pale that showcases one of the most exciting and recent Slovenian hops on the market Styrian Wolf. Expect intense flavours of citrus and berries and a smooth bitterness.'
  },
  threeHogsAnswer: {
    type: 'ANSWER',
    title: 'Three Hogs (4.0%)',
    description: 'Refreshingly hoppy This seasonal beer isn\'t even on the website. It comes with a little bitterness crossed with hint sweetness. A session beer in anyones book.'
  },
  blackListedAnswer: {
    type: 'ANSWER',
    title: 'Black Listed (4.5%)',
    description: 'Brewed with three types of malt and a considered combination of homegrown British & imported American hops for a well rounded, punchy flavour.'
  },
  animalQuestion: {
    type: 'QUESTION',
    title: 'The time old question, Manta Ray v Alligator. You decide!',
    answers: [{
      title: 'Manta Ray\'s for the win',
      nextId: 'mantaRayAnswer'
    }, {
      title: 'Alligator\'s all day long',
      nextId: 'alligatorAnswer'
    }, {
      title: 'They both suck!',
      nextId: 'englishQuestion'
    }]
  },
  englishQuestion: {
    type: 'QUESTION',
    title: 'Do you know classic english characters?',
    answers: [{
      title: 'Yes, I have very good knowledge',
      nextId: 'intellectualsQuestion'
    }, {
      title: 'I know the Queen...',
      nextId: 'whatDidYouThinkAboutTheRecentHeatwaveQuestion'
    }]
  },
  intellectualsQuestion: {
    type: 'QUESTION',
    title: 'Fan of Intellectuals?',
    answers: [{
      title: 'Yes',
      nextId: 'appleFromTreeQuestion'
    }, {
      title: 'No',
      nextId: 'agreeWithRebelsQuestion'
    }]
  },
  appleFromTreeQuestion: {
    type: 'QUESTION',
    title: 'Do you ever get hit on the head by an apple and wonder why?',
    answers: [{
      title: 'Yes and it hurt',
      nextId: 'newtonAnswer'
    }, {
      title: 'No',
      nextId: 'shellyAnswer'
    }]
  },
  agreeWithRebelsQuestion: {
    type: 'QUESTION',
    title: 'Do you agree with Rebels',
    answers: [{
      title: 'No, the empire did nothing wrong',
      nextId: 'serialKillerQuestion'
    }, {
      title: 'Yes',
      nextId: 'girlsKnowHowToRebelQuestion'
    }]
  },
  serialKillerQuestion: {
    type: 'QUESTION',
    title: 'Serial killers in victorian London always get a bad press?',
    answers: [{
      title: 'Yes',
      nextId: 'mrRipperAnswer'
    }, {
      title: 'No',
      nextId: 'uncleDamnAnswer'
    }]
  },
  girlsKnowHowToRebelQuestion: {
    type: 'QUESTION',
    title: 'Girls know how to rebel properly right?',
    answers: [{
      title: 'Yes, girls just wanna have fun!',
      nextId: 'boudiccaAnswer'
    }, {
      title: 'No',
      nextId: 'watTylerAnswer'
    }]
  },
  whatDidYouThinkAboutTheRecentHeatwaveQuestion: {
    type: 'QUESTION',
    title: 'What did you think about the recent heatwave',
    answers: [{
      title: 'Loved every minute',
      nextId: 'infernoAnswer'
    }, {
      title: 'It was fun for a while, then I couldn\'t sleep',
      nextId: 'fireflyAnswer'
    }, {
      title: 'I complained about it the whole time',
      nextId: 'stapleOfTheBeerFestivalQuestion'
    }]
  },
  stapleOfTheBeerFestivalQuestion: {
    type: 'QUESTION',
    title: 'Pick one of our regular brewers',
    answers: [{
      title: 'Tring',
      nextId: 'paleFourAnswer'
    }, {
      title: '3 Brewers',
      nextId: 'classicEnglishAleAnswer'
    }, {
      title: 'Twickenham',
      nextId: 'nakedLadiesAnswer'
    }, {
      title: 'Want a new beer to this festival?',
      nextId: 'newBeerForFestivalQuestion'
    }]
  },
  newBeerForFestivalQuestion: {
    type: 'QUESTION',
    title: 'Pick of our new brewers',
    answers: [{
      title: 'Aylesbury Brewhouse Co',
      nextId: 'wolfAnswer'
    }, {
      title: 'Hogs Back',
      nextId: 'threeHogsAnswer'
    }, {
      title: 'Farr',
      nextId: 'blackListedAnswer'
    }]
  }
}