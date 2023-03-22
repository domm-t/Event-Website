export enum EVENT_TYPE {
  TECH,
  NONTECH,
  ONLINE,
}

export enum EVENT_MODE {
  OFFLINE,
  ONLINE,
}

export enum EVENT_COUNT {
  PER_HEAD,
  PER_TEAM,
}

export enum EVENT_ID {
  PAPER_PRESENTATION,
  TECHNICAL_QUIZ,
  CONNEXTION,
  PROJECT_EXPO,
  TECHNO_JAM,
  COMPO_QUIZ,
  CHANNEL_SURFING,
  SOLO_DANCE,
  FIRELESS_COOKING,
  BOX_CRICKET,
  VALORANT,
  FUTSAL,
  TUG_OF_WAR,
  MEME_CONTEST,
  PHOTO_CLASH,
  REELS,
}

export enum UPI_ID {
  ASVIN = "asvinbaskar@okhdfcbank",
  JENNIFER = "jennifersharon07@oksbi",
  DEEPAK = "deepakat274@okhdfcbank",
  NAVEEN = "snaveenkumar343@okhdfcbank",
  SABETHA = "aisabetha05@okaxis",
}

export enum UPI_NO {
  ASVIN = "7358652205",
  JENNIFER = "9840860012",
  DEEPAK = "9500163095",
  NAVEEN = "7904302894",
  SABETHA = "9345225837",
}

export const EVENTS = [
  {
    name: "Paper Presentation",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 60,
    minTeam: 1,
    maxTeam: 2,
    whatsapp: "https://wa.me/+919840860012",
    mobile: UPI_NO.JENNIFER,
  },
  {
    name: "Technical quiz",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.ASVIN,
    fee: 120,
    minTeam: 1,
    maxTeam: 3,
    whatsapp: "https://wa.me/+917358652205",
    mobile: UPI_NO.ASVIN,
  },
  {
    name: "Connextion",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.DEEPAK,
    fee: 90,
    minTeam: 2,
    maxTeam: 3,
    whatsapp: "https://wa.me/+919500163095",
    mobile: UPI_NO.DEEPAK,
  },
  {
    name: "Project Expo",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.NAVEEN,
    fee: 90,
    minTeam: 2,
    maxTeam: 3,
    whatsapp: "https://wa.me/+917904302894",
    mobile: UPI_NO.NAVEEN,
  },
  {
    name: "Techno Jam",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 180,
    minTeam: 1,
    maxTeam: 3,
    whatsapp: "https://wa.me/+919840860012",
    mobile: UPI_NO.JENNIFER,
  },
  {
    name: "Compo Quiz",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.DEEPAK,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/+919500163095",
    mobile: UPI_NO.DEEPAK,
  },
  {
    name: "Channel Surfing",
    type: EVENT_TYPE.TECH,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.NAVEEN,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/+917904302894",
    mobile: UPI_NO.NAVEEN,
  },
  {
    name: "Fireless Cooking",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.ASVIN,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/+917358652205",
    mobile: UPI_NO.ASVIN,
  },
  {
    name: "Solo Dance",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.ASVIN,
    fee: 100,
    minTeam: 3,
    maxTeam: 4,
    whatsapp: "https://wa.me/+917358652205",
    mobile: UPI_NO.ASVIN,
  },
  {
    name: "Tug of War",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.NAVEEN,
    fee: 120,
    minTeam: 3,
    maxTeam: 4,
    whatsapp: "https://wa.me/+917904302894",
    mobile: UPI_NO.NAVEEN,
  },
  {
    name: "Box Cricket",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 200,
    minTeam: 5,
    maxTeam: 5,
    whatsapp: "https://wa.me/+919840860012",
    mobile: UPI_NO.JENNIFER,
  },
  {
    name: "Valorant",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.SABETHA,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/+919345225837",
    mobile: UPI_NO.SABETHA,
  },
  {
    name: "Futsal",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.DEEPAK,
    fee: 300,
    minTeam: 5,
    maxTeam: 6,
    whatsapp: "https://wa.me/+919500163095",
    mobile: UPI_NO.DEEPAK,
  },
  /*{
    name: "Solo Singing",
    type: EVENT_TYPE.NONTECH,
    mode: EVENT_MODE.OFFLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.JENNIFER,
    fee: 50,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/+919840860012",
    mobile: UPI_NO.JENNIFER,
  },*/
  {
    name: "Valorant",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_TEAM,
    pay: UPI_ID.ASVIN,
    fee: 200,
    minTeam: 6,
    maxTeam: 6,
    whatsapp: "https://wa.me/+917358652205",
    mobile: UPI_NO.ASVIN,
  },
  {
    name: "Reels",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.DEEPAK,
    fee: 30,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/+919500163095",
    mobile: UPI_NO.DEEPAK,
  },
  {
    name: "Meme Contest",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.NAVEEN,
    fee: 30,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/+917904302894",
    mobile: UPI_NO.NAVEEN,
  },
  {
    name: "Photo Clash",
    type: EVENT_TYPE.ONLINE,
    mode: EVENT_MODE.ONLINE,
    count: EVENT_COUNT.PER_HEAD,
    pay: UPI_ID.SABETHA,
    fee: 30,
    minTeam: 1,
    maxTeam: 1,
    whatsapp: "https://wa.me/+919345225837",
    mobile: UPI_NO.SABETHA,
  },
];
