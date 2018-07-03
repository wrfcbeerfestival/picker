export default {
  ciderStart: {
    type: 'QUESTION',
    title: 'Do you have anything important to do tomorrow?',
    answers: [{
      title: 'Yes',
      nextId: 'royalQuestion'
    }, {
      title: 'No',
      nextId: 'beeStingAnswer'
    }]
  },
  beeStingAnswer: {
    type: 'ANSWER',
    title: 'Bee Sting (7.5%)',
    description: 'A medium to sweet perry (pears) oozing with subtle flavours. Has cult status and will go fast even though we bought three.'
  },
  princeHarryAnswer: {
    type: 'ANSWER',
    title: 'Prince Harry\'s (4.0%)',
    description: 'A new cider from Harry\'s. Big shoes to fill, replacing the classic ginger and chilli'
  },
  thunderingMollyAnswer: {
    type: 'ANSWER',
    title: 'Thundering Molly (5.2%)',
    description: 'Well rounded medium cider. Fresh and fruity with a lovely apple aroma. Gorgeous golden colour and a balanced finish.'
  },
  lilyThePinkAnswer: {
    type: 'ANSWER',
    title: 'Lilly The Pink (4.5%)',
    description: 'A medium fruity cider – gorgeous pink hue – made from 100% cider apples on our Herefordshire farm – intense fruity aroma'
  },
  rhubarbAnswer: {
    type: 'ANSWER',
    title: 'Rhubarb (4.0%)',
    description: 'Yorkshire triangle Timperley Rhubarb juice with a slight tart edge to it. Get in there quick.',
  },
  strawberryAnswer: {
    type: 'ANSWER',
    title: 'Strawberry (6.5%)',
    description: 'Medium to sweet cider made by blendings our Original Scrumpy with a dash of sweet strawberry juice creating an easy drinking fruit cider with a hint of strawberry on the finish.'
  },
  somerGoldAnswer: {
    type: 'ANSWER',
    title: 'Somer Gold (5.0%)',
    description: 'Medium sweet Apple Cider. Bright, smooth and overflowing with a true taste of Somerset. No more questions, just Somer Gold answers, sip after sip.'
  },
  appleAndPearsAnswer: {
    type: 'ANSWER',
    title: 'Apples & Pears (5.0%)',
    description: 'Medium to sweet cider made with apples and pears. Smooth and easy on the palate.'
  },
  riojaAnswer: {
    type: 'ANSWER',
    title: 'Rioja Medium (6.7%)',
    description: 'Aged in Rioja casks this cider is our driest offering, full of fruit ﬂavour, with a warm glow of red wine and hints of wood tannin.'
  },
  orangeAndCinnamon: {
    type: 'ANSWER',
    title: 'Nell Gwynne (4.0%)',
    description: 'A unique cider from Celtic Marshes. Bringing Orange and Cinnamon together for what looks to be a popular drink. Try it before it goes!'
  },
  pomegranateAndRose: {
    type: 'ANSWER',
    title: 'Loopy Lou (4.0%)',
    description: 'Don\'t let the name fool you. This cider brings together Pomegranate and Rose, in what is less loopy and more genius'
  },
  mangoAndLime: {
    type: 'ANSWER',
    title: 'Flash Harry\'s (4.0%)',
    description: 'Mango and Lime is perfect on a hot summers day. This cider will move as fast as flash himself.'
  },
  cherryAndPineapple: {
    type: 'ANSWER',
    title: 'Cherry & Pineapple (4.0%)',
    description: 'Hereford cider liberally imparted with Cherry & Pineapple exotic flavours - a unique tropical twist'
  },
  royalQuestion: {
    type: 'QUESTION',
    title: 'How royal are you feeling',
    answers: [{
      title: 'I\'m basically the Queen',
      nextId: 'princeHarryAnswer'
    }, {
      title: 'And we will never be royal (cracking song)',
      nextId: 'awesomeCiderName'
    }]
  },
  awesomeCiderName: {
    type: 'QUESTION',
    title: 'Do you pick drinks based on their name',
    answers: [{
      title: 'Yes, it\'s like the first thing I do',
      nextId: 'thunderingMollyAnswer'
    }, {
      title: 'No, but it helps',
      nextId: 'lilyThePinkAnswer'
    }, {
      title: 'Flavour is the most important thing',
      nextId: 'standardOrDifferent'
    }]
  },
  standardOrDifferent: {
    type: 'QUESTION',
    title: 'If you go to a resturant. What do you pick?',
    answers: [{
      title: 'My classic dish. Nice and safe',
      nextId: 'somethingFruityClassic'
    }, {
      title: 'I like to push the boat out a bit',
      nextId: 'rhubarbAnswer'
    }, {
      title: 'I don\'t even look at the menu, I just have the special',
      nextId: 'somethingFruitySpecial'
    }]
  },
  somethingFruityClassic: {
    type: 'QUESTION',
    title: 'What classic fruit would you like?',
    answers: [{
      title: 'Strawberry',
      nextId: 'strawberryAnswer'
    }, {
      title: 'Apple',
      nextId: 'somerGoldAnswer'
    }, {
      title: 'Apple and Pears',
      nextId: 'appleAndPearsAnswer'
    }, {
      title: 'Anything with a bit of wine in it?',
      nextId: 'riojaAnswer'
    }]
  },
  somethingFruitySpecial: {
    type: 'QUESTION',
    title: 'Which one of our new ciders takes your fancy?',
    answers: [{
      title: 'Pomegranate & Rose',
      nextId: 'pomegranateAndRose'
    }, {
      title: 'Orange & Cinnamon',
      nextId: 'orangeAndCinnamon'
    }, {
      title: 'Cherry & Pineapple',
      nextId: 'cherryAndPineapple'
    }, {
      title: 'Mango & Lime',
      nextId: 'mangoAndLime'
    }]
  }
}