const test = 'hi';

const pallets = [
  {
    'Giant Goldfish': {
      background: '69D2E7',
      barsHeaders: 'A7DBD8',
      text: 'E0E4CC',
      footer: 'F38630',
      welcome: 'FA6900'
    }
  },
  {
    '(???)': {
      background: 'FE4365',
      barsHeaders: 'FC9D9A',
      text: 'F9CDAD',
      footer: 'C8C8A9',
      welcome: '83AF9B'
    }
  },
  {
    'Thought Provoking': {
      background: 'ECD078',
      barsHeaders: 'D95B43',
      text: 'C02942',
      footer: '542437',
      welcome: '53777A'
    }
  },
  {
    'cheer up emo kid': {
      background: '556270',
      barsHeaders: '4ECDC4',
      text: 'C7F464',
      footer: 'FF6B6B',
      welcome: 'C44D58'
    }
  },
  {
    'let them eat cake': {
      background: '774F38',
      barsHeaders: 'E08E79',
      text: 'F1D4AF',
      footer: 'ECE5CE',
      welcome: 'C5E0DC'
    }
  },
  {
    'Terra?': {
      background: 'E8DDCB',
      barsHeaders: 'CDB380',
      text: '036564',
      footer: '033649',
      welcome: '031634'
    }
  },
  {
    '(? ” ?)': {
      background: '490A3D',
      barsHeaders: 'BD1550',
      text: 'E97F02',
      footer: 'F8CA00',
      welcome: '8A9B0F'
    }
  },
  {
    'i demand a pancake': {
      background: '594F4F',
      barsHeaders: '547980',
      text: '45ADA8',
      footer: '9DE0AD',
      welcome: 'E5FCC2'
    }
  },
  {
    'Ocean Five': {
      background: '00A0B0',
      barsHeaders: '6A4A3C',
      text: 'CC333F',
      footer: 'EB6841',
      welcome: 'EDC951'
    }
  },
  {
    LoversInJapan: {
      background: 'E94E77',
      barsHeaders: 'D68189',
      text: 'C6A49A',
      footer: 'C6E5D9',
      welcome: 'F4EAD5'
    }
  },
  {
    Compatible: {
      background: '3FB8AF',
      barsHeaders: '7FC7AF',
      text: 'DAD8A7',
      footer: 'FF9E9D',
      welcome: 'FF3D7F'
    }
  },
  {
    'Good Friends': {
      background: 'D9CEB2',
      barsHeaders: '948C75',
      text: 'D5DED9',
      footer: '7A6A53',
      welcome: '99B2B7'
    }
  },
  {
    'w o r d l e s s .': {
      background: 'FFFFFF',
      barsHeaders: 'CBE86B',
      text: 'F2E9E1',
      footer: '1C140D',
      welcome: 'CBE86B'
    }
  },
  {
    'Curiosity Killed': {
      background: 'EFFFCD',
      barsHeaders: 'DCE9BE',
      text: '555152',
      footer: '2E2633',
      welcome: '99173C'
    }
  },
  {
    'dream magnet': {
      background: '343838',
      barsHeaders: '005F6B',
      text: '008C9E',
      footer: '00B4CC',
      welcome: '00DFFC'
    }
  },
  {
    clairedelune: {
      background: '413E4A',
      barsHeaders: '73626E',
      text: 'B38184',
      footer: 'F0B49E',
      welcome: 'F7E4BE'
    }
  },
  {
    'Dance To Forget': {
      background: 'FF4E50',
      barsHeaders: 'FC913A',
      text: 'F9D423',
      footer: 'EDE574',
      welcome: 'E1F5C4'
    }
  },
  {
    'coup de grâce': {
      background: '99B898',
      barsHeaders: 'FECEA8',
      text: 'FF847C',
      footer: 'E84A5F',
      welcome: '2A363B'
    }
  },
  {
    Headache: {
      background: '655643',
      barsHeaders: '80BCA3',
      text: 'F6F7BD',
      footer: 'E6AC27',
      welcome: 'BF4D28'
    }
  },
  {
    'fresh cut day': {
      background: '00A8C6',
      barsHeaders: '40C0CB',
      text: 'F9F2E7',
      footer: 'AEE239',
      welcome: '8FBE00'
    }
  },
  {
    'you are beautiful': {
      background: '351330',
      barsHeaders: '424254',
      text: '64908A',
      footer: 'E8CAA4',
      welcome: 'CC2A41'
    }
  },
  {
    'mystery machine': {
      background: '554236',
      barsHeaders: 'F77825',
      text: 'D3CE3D',
      footer: 'F1EFA5',
      welcome: '60B99A'
    }
  },
  {
    Gamebookers: {
      background: 'FF9900',
      barsHeaders: '424242',
      text: 'E9E9E9',
      footer: 'BCBCBC',
      welcome: '3299BB'
    }
  },
  {
    'forever lost': {
      background: '5D4157',
      barsHeaders: '838689',
      text: 'A8CABA',
      footer: 'CAD7B2',
      welcome: 'EBE3AA'
    }
  },
  {
    'Vintage Modern': {
      background: '8C2318',
      barsHeaders: '5E8C6A',
      text: '88A65E',
      footer: 'BFB35A',
      welcome: 'F2C45A'
    }
  },
  {
    'Maddening Caravan': {
      background: 'FAD089',
      barsHeaders: 'FF9C5B',
      text: 'F5634A',
      footer: 'ED303C',
      welcome: '3B8183'
    }
  },
  {
    'Wasabi Suicide': {
      background: 'FF4242',
      barsHeaders: 'F4FAD2',
      text: 'D4EE5E',
      footer: 'E1EDB9',
      welcome: 'F0F2EB'
    }
  },
  {
    'tech light': {
      background: 'D1E751',
      barsHeaders: 'FFFFFF',
      text: '000000',
      footer: '4DBCE9',
      welcome: '26ADE4'
    }
  },
  {
    '1001 Stories': {
      background: 'F8B195',
      barsHeaders: 'F67280',
      text: 'C06C84',
      footer: '6C5B7B',
      welcome: '355C7D'
    }
  },
  {
    'Storming Psychedelia': {
      background: 'BCBDAC',
      barsHeaders: 'CFBE27',
      text: 'F27435',
      footer: 'F02475',
      welcome: '3B2D38'
    }
  },
  {
    'A Dream in Color': {
      background: '1B676B',
      barsHeaders: '519548',
      text: '88C425',
      footer: 'BEF202',
      welcome: 'EAFDE6'
    }
  },
  {
    'Papua New Guinea': {
      background: '5E412F',
      barsHeaders: 'FCEBB6',
      text: '78C0A8',
      footer: 'F07818',
      welcome: 'F0A830'
    }
  },
  {
    't r a n c e': {
      background: '452632',
      barsHeaders: '91204D',
      text: 'E4844A',
      footer: 'E8BF56',
      welcome: 'E2F7CE'
    }
  },
  {
    'Newly Risen Moon': {
      background: 'EEE6AB',
      barsHeaders: 'C5BC8E',
      text: '696758',
      footer: '45484B',
      welcome: '36393B'
    }
  },
  {
    'Koi Carp': {
      background: 'F0D8A8',
      barsHeaders: '3D1C00',
      text: '86B8B1',
      footer: 'F2D694',
      welcome: 'FA2A00'
    }
  },
  {
    "Lena's Love Letter": {
      background: 'F04155',
      barsHeaders: 'FF823A',
      text: 'F2F26F',
      footer: 'FFF7BD',
      welcome: '95CFB7'
    }
  },
  {
    'Hymn For My Soul': {
      background: '2A044A',
      barsHeaders: '0B2E59',
      text: '0D6759',
      footer: '7AB317',
      welcome: 'A0C55F'
    }
  },
  {
    Very: {
      background: 'BBBB88',
      barsHeaders: 'CCC68D',
      text: 'EEDD99',
      footer: 'EEC290',
      welcome: 'EEAA88'
    }
  },
  {
    'Entrapped InAPalette': {
      background: 'B9D7D9',
      barsHeaders: '668284',
      text: '2A2829',
      footer: '493736',
      welcome: '7B3B3B'
    }
  },
  {
    'I like your Smile': {
      background: 'B3CC57',
      barsHeaders: 'ECF081',
      text: 'FFBE40',
      footer: 'EF746F',
      welcome: 'AB3E5B'
    }
  },
  {
    "it's raining love": {
      background: 'A3A948',
      barsHeaders: 'EDB92E',
      text: 'F85931',
      footer: 'CE1836',
      welcome: '009989'
    }
  },
  {
    'lucky bubble gum': {
      background: '67917A',
      barsHeaders: '170409',
      text: 'B8AF03',
      footer: 'CCBF82',
      welcome: 'E33258'
    }
  },
  {
    'Funny Like the Moon': {
      background: 'E8D5B7',
      barsHeaders: '0E2430',
      text: 'FC3A51',
      footer: 'F5B349',
      welcome: 'E8D5B9'
    }
  },
  {
    '[p] Wintry Magic': {
      background: 'AAB3AB',
      barsHeaders: 'C4CBB7',
      text: 'EBEFC9',
      footer: 'EEE0B7',
      welcome: 'E8CAAF'
    }
  },
  {
    'Machu Picchu': {
      background: '607848',
      barsHeaders: '789048',
      text: 'C0D860',
      footer: 'F0F0D8',
      welcome: '604848'
    }
  },
  {
    Thumbelina: {
      background: 'AB526B',
      barsHeaders: 'BCA297',
      text: 'C5CEAE',
      footer: 'F0E2A4',
      welcome: 'F4EBC3'
    }
  },
  {
    Influenza: {
      background: '300030',
      barsHeaders: '480048',
      text: '601848',
      footer: 'C04848',
      welcome: 'F07241'
    }
  },
  {
    '400 unique artists ?': {
      background: 'A8E6CE',
      barsHeaders: 'DCEDC2',
      text: 'FFD3B5',
      footer: 'FFAAA6',
      welcome: 'FF8C94'
    }
  },
  {
    'She Is French, Yes?': {
      background: '3E4147',
      barsHeaders: 'FFFEDF',
      text: 'DFBA69',
      footer: '5A2E2E',
      welcome: '2A2C31'
    }
  },
  {
    metro: {
      background: '515151',
      barsHeaders: 'FFFFFF',
      text: '00B4FF',
      footer: 'EEEEEE',
      welcome: undefined
    }
  },
  {
    'An Old Friend': {
      background: 'B6D8C0',
      barsHeaders: 'C8D9BF',
      text: 'DADABD',
      footer: 'ECDBBC',
      welcome: 'FEDCBA'
    }
  },
  {
    Miaka: {
      background: 'FC354C',
      barsHeaders: '29221F',
      text: '13747D',
      footer: '0ABFBC',
      welcome: 'FCF7C5'
    }
  },
  {
    'The Way You Love Me': {
      background: '1C2130',
      barsHeaders: '028F76',
      text: 'B3E099',
      footer: 'FFEAAD',
      welcome: 'D14334'
    }
  },
  {
    "don't you go down": {
      background: 'EDEBE6',
      barsHeaders: 'D6E1C7',
      text: '94C7B6',
      footer: '403B33',
      welcome: 'D3643B'
    }
  },
  {
    vivacious: {
      background: 'CC0C39',
      barsHeaders: 'E6781E',
      text: 'C8CF02',
      footer: 'F8FCC1',
      welcome: '1693A7'
    }
  },
  {
    undecided: {
      background: 'DAD6CA',
      barsHeaders: '1BB0CE',
      text: '4F8699',
      footer: '6A5E72',
      welcome: '563444'
    }
  },
  {
    '500 honies?': {
      background: 'FDF1CC',
      barsHeaders: 'C6D6B8',
      text: '987F69',
      footer: 'E3AD40',
      welcome: 'FCD036'
    }
  },
  {
    'All Eyes On You': {
      background: '5C323E',
      barsHeaders: 'A82743',
      text: 'E15E32',
      footer: 'C0D23E',
      welcome: 'E5F04C'
    }
  },
  {
    'colorful banaani': {
      background: 'A7C5BD',
      barsHeaders: 'E5DDCB',
      text: 'EB7B59',
      footer: 'CF4647',
      welcome: '524656'
    }
  },
  {
    War: {
      background: '230F2B',
      barsHeaders: 'F21D41',
      text: 'EBEBBC',
      footer: 'BCE3C5',
      welcome: '82B3AE'
    }
  },
  {
    'A Kiss To Awake': {
      background: 'B9D3B0',
      barsHeaders: '81BDA4',
      text: 'B28774',
      footer: 'F88F79',
      welcome: 'F6AA93'
    }
  },
  {
    'still be friends?': {
      background: '3A111C',
      barsHeaders: '574951',
      text: '83988E',
      footer: 'BCDEA5',
      welcome: 'E6F9BC'
    }
  },
  {
    'My November.': {
      background: '5E3929',
      barsHeaders: 'CD8C52',
      text: 'B7D1A3',
      footer: 'DEE8BE',
      welcome: 'FCF7D3'
    }
  },
  {
    "s e x ' n . r o l l ": {
      background: '1C0113',
      barsHeaders: '6B0103',
      text: 'A30006',
      footer: 'C21A01',
      welcome: 'F03C02'
    }
  },
  {
    "victoria's secret": {
      background: '382F32',
      barsHeaders: 'FFEAF2',
      text: 'FCD9E5',
      footer: 'FBC5D8',
      welcome: 'F1396D'
    }
  },
  {
    japan9: {
      background: 'E3DFBA',
      barsHeaders: 'C8D6BF',
      text: '93CCC6',
      footer: '6CBDB5',
      welcome: '1A1F1E'
    }
  },
  {
    'american idiot': {
      background: '000000',
      barsHeaders: '9F111B',
      text: 'B11623',
      footer: '292C37',
      welcome: 'CCCCCC'
    }
  },
  {
    'The Key': {
      background: '8DCCAD',
      barsHeaders: '988864',
      text: 'FEA6A2',
      footer: 'F9D6AC',
      welcome: 'FFE9AF'
    }
  },
  {
    'sands of time': {
      background: 'C1B398',
      barsHeaders: '605951',
      text: 'FBEEC2',
      footer: '61A6AB',
      welcome: 'ACCEC0'
    }
  },
  {
    'One Sixty-Eight ?': {
      background: '5E9FA3',
      barsHeaders: 'DCD1B4',
      text: 'FAB87F',
      footer: 'F87E7B',
      welcome: 'B05574'
    }
  },
  {
    leatherbound: {
      background: '951F2B',
      barsHeaders: 'F5F4D7',
      text: 'E0DFB1',
      footer: 'A5A36C',
      welcome: '535233'
    }
  },
  {
    'Walking Away': {
      background: 'F6F6F6',
      barsHeaders: 'E8E8E8',
      text: '333333',
      footer: '990100',
      welcome: 'B90504'
    }
  },
  {
    threadless: {
      background: '1B325F',
      barsHeaders: '9CC4E4',
      text: 'E9F2F9',
      footer: '3A89C9',
      welcome: 'F26C4F'
    }
  },
  {
    antidesign: {
      background: '413D3D',
      barsHeaders: '040004',
      text: 'C8FF00',
      footer: 'FA023C',
      welcome: '4B000F'
    }
  },
  {
    'Nobody ? Sugar': {
      background: '2D2D29',
      barsHeaders: '215A6D',
      text: '3CA2A2',
      footer: '92C7A3',
      welcome: 'DFECE6'
    }
  },
  {
    Christina: {
      background: '4E395D',
      barsHeaders: '827085',
      text: '8EBE94',
      footer: 'CCFC8E',
      welcome: 'DC5B3E'
    }
  },
  {
    'Salt With Battery': {
      background: 'CFFFDD',
      barsHeaders: 'B4DEC1',
      text: '5C5863',
      footer: 'A85163',
      welcome: 'FF1F4C'
    }
  },
  {
    'Outer Rings': {
      background: 'EFF3CD',
      barsHeaders: 'B2D5BA',
      text: '61ADA0',
      footer: '248F8D',
      welcome: '605063'
    }
  },
  {
    'Carrot Cafe': {
      background: '9DC9AC',
      barsHeaders: 'FFFEC7',
      text: 'F56218',
      footer: 'FF9D2E',
      welcome: '919167'
    }
  },
  {
    'Good Friends': {
      background: 'A8A7A7',
      barsHeaders: 'CC527A',
      text: 'E8175D',
      footer: '474747',
      welcome: '363636'
    }
  },
  {
    '[slow motion]': {
      background: 'FFEDBF',
      barsHeaders: 'F7803C',
      text: 'F54828',
      footer: '2E0D23',
      welcome: 'F8E4C1'
    }
  },
  {
    'Happy Day !': {
      background: 'A1DBB2',
      barsHeaders: 'FEE5AD',
      text: 'FACA66',
      footer: 'F7A541',
      welcome: 'F45D4C'
    }
  },
  {
    'She Sells Seashells.': {
      background: 'FFEFD3',
      barsHeaders: 'FFFEE4',
      text: 'D0ECEA',
      footer: '9FD6D2',
      welcome: '8B7A5E'
    }
  },
  {
    '[CHIC] Dreamer': {
      background: 'F38A8A',
      barsHeaders: '55443D',
      text: 'A0CAB5',
      footer: 'CDE9CA',
      welcome: 'F1EDD0'
    }
  },
  {
    'Making Coffee': {
      background: '0CA5B0',
      barsHeaders: '4E3F30',
      text: 'FEFEEB',
      footer: 'F8F4E4',
      welcome: 'A5B3AA'
    }
  },
  {
    'french kiss': {
      background: 'EDF6EE',
      barsHeaders: 'D1C089',
      text: 'B3204D',
      footer: '412E28',
      welcome: '151101'
    }
  },
  {
    'after the heist': {
      background: 'F8EDD1',
      barsHeaders: 'D88A8A',
      text: '474843',
      footer: '9D9D93',
      welcome: 'C5CFC6'
    }
  },
  {
    'Omega Nebula': {
      background: '9D7E79',
      barsHeaders: 'CCAC95',
      text: '9A947C',
      footer: '748B83',
      welcome: '5B756C'
    }
  },
  {
    'Hands On': {
      background: '4E4D4A',
      barsHeaders: '353432',
      text: '94BA65',
      footer: '2790B0',
      welcome: '2B4E72'
    }
  },
  {
    '400 Lovers': {
      background: '046D8B',
      barsHeaders: '309292',
      text: '2FB8AC',
      footer: '93A42A',
      welcome: 'ECBE13'
    }
  },
  {
    mai: {
      background: 'A70267',
      barsHeaders: 'F10C49',
      text: 'FB6B41',
      footer: 'F6D86B',
      welcome: '339194'
    }
  },
  {
    'a lost memory.': {
      background: '4D3B3B',
      barsHeaders: 'DE6262',
      text: 'FFB88C',
      footer: 'FFD0B3',
      welcome: 'F5E0D3'
    }
  },
  {
    'G2K Followers': {
      background: 'FFFBB7',
      barsHeaders: 'A6F6AF',
      text: '66B6AB',
      footer: '5B7C8D',
      welcome: '4F2958'
    }
  },
  {
    'Sweet Lolly': {
      background: 'FF003C',
      barsHeaders: 'FF8A00',
      text: 'FABE28',
      footer: '88C100',
      welcome: '00C176'
    }
  },
  {
    'i n v i s i b l e': {
      background: 'FCFEF5',
      barsHeaders: 'E9FFE1',
      text: 'CDCFB7',
      footer: 'D6E6C3',
      welcome: 'FAFBE3'
    }
  },
  {
    'Japanese Bath': {
      background: '9CDDC8',
      barsHeaders: 'BFD8AD',
      text: 'DDD9AB',
      footer: 'F7AF63',
      welcome: '633D2E'
    }
  },
  {
    'This is for YOU!': {
      background: 'D1313D',
      barsHeaders: 'E5625C',
      text: 'F9BF76',
      footer: '8EB2C5',
      welcome: '615375'
    }
  },
  {
    'blue chocolate': {
      background: '30261C',
      barsHeaders: '403831',
      text: '36544F',
      footer: '1F5F61',
      welcome: '0B8185'
    }
  },
  {
    'Liars and Monsters': {
      background: 'C2412D',
      barsHeaders: 'D1AA34',
      text: 'A7A844',
      footer: 'A46583',
      welcome: '5A1E4A'
    }
  },
  {
    'Pop Is Everything': {
      background: 'AAFF00',
      barsHeaders: 'FFAA00',
      text: 'FF00AA',
      footer: 'AA00FF',
      welcome: '00AAFF'
    }
  }
];

module.exports = {
  test
};
