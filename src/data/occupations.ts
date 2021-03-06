import {
  Characteristic,
  OccupationName,
  SkillName,
  // ArchetypeName,
} from './types'

export type Occupation = {
  name: OccupationName
  skillFormula: Array<OccupationSkillFormula>
  idealCharacteristics: Array<Characteristic>
  creditRatingMin: number
  creditRatingMax: number
  contacts: Array<string>
  skills: Array<SkillName>
}

export enum OccupationSkillFormula {
  edu = 'edu',
  eduStr = 'eduStr',
  eduDex = 'eduDex',
  eduPow = 'eduPow',
  eduCon = 'eduCon',
  eduApp = 'eduApp',
  eduSiz = 'eduSiz',
  eduInt = 'eduInt',
}

/**
 * The associated characteristics determining total pts of occupational skills,
 * either EDU X 4 or 2 characteristics X 2 each
 */
export const occSkillChars: {
  [key in OccupationSkillFormula]: Array<Characteristic>
} = {
  edu: [Characteristic.EDU],
  eduStr: [Characteristic.EDU, Characteristic.STR],
  eduDex: [Characteristic.EDU, Characteristic.DEX],
  eduPow: [Characteristic.EDU, Characteristic.POW],
  eduCon: [Characteristic.EDU, Characteristic.CON],
  eduApp: [Characteristic.EDU, Characteristic.APP],
  eduSiz: [Characteristic.EDU, Characteristic.SIZ],
  eduInt: [Characteristic.EDU, Characteristic.INT],
}

/**
 * Takes the array of occupation skill formulas and returns the array of ideal characteristics
 *
 * @param formulas the array of occupation skill formulas
 */
export const getIdealCharacteristics = (
  formulas: Array<OccupationSkillFormula>
): Array<Characteristic> => {
  let occupationCharacteristics: Array<Characteristic> = []

  formulas.map((formula) => {
    occSkillChars[formula].map((char: Characteristic) => {
      occupationCharacteristics.push(char)
      return true
    })
    return true
  })

  occupationCharacteristics = occupationCharacteristics.filter((char) => {
    return occupationCharacteristics.length === 1 || char !== Characteristic.EDU
  })

  return occupationCharacteristics
}

const makeOccupation = (
  name: OccupationName,
  skillFormula: Array<OccupationSkillFormula>,
  creditRatingMin: number,
  creditRatingMax: number,
  contacts: Array<string>,
  skills: Array<SkillName>
): Occupation => {
  const idealCharacteristics = getIdealCharacteristics(skillFormula)
  return {
    name,
    skillFormula,
    idealCharacteristics,
    creditRatingMin,
    creditRatingMax,
    contacts,
    skills,
  }
}

const actorFilm = makeOccupation(
  OccupationName.ActorFilm,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const actorStageRadio = makeOccupation(
  OccupationName.ActorStageRadio,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const agencyDetective = makeOccupation(
  OccupationName.AgencyDetective,
  [OccupationSkillFormula.eduStr, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const archaeologist = makeOccupation(
  OccupationName.Archaeologist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const artist = makeOccupation(
  OccupationName.Artist,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduPow],
  0,
  100,
  [],
  []
)

const athlete = makeOccupation(
  OccupationName.Athlete,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const author = makeOccupation(
  OccupationName.Author,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const aviator = makeOccupation(
  OccupationName.Aviator,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const bankRobber = makeOccupation(
  OccupationName.BankRobber,
  [OccupationSkillFormula.eduStr, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const bartenderWaitress = makeOccupation(
  OccupationName.BartenderWaitress,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const beatCop = makeOccupation(
  OccupationName.BeatCop,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const bigGameHunter = makeOccupation(
  OccupationName.BigGameHunter,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const bountyHunter = makeOccupation(
  OccupationName.BountyHunter,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const boxerWrestler = makeOccupation(
  OccupationName.BoxerWrestler,
  [OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const butler = makeOccupation(
  OccupationName.Butler,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const catBurglar = makeOccupation(
  OccupationName.CatBurglar,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const chauffeur = makeOccupation(
  OccupationName.Chauffeur,
  [OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const confidenceTrickster = makeOccupation(
  OccupationName.ConfidenceTrickster,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const criminal = makeOccupation(
  OccupationName.Criminal,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const cultLeader = makeOccupation(
  OccupationName.CultLeader,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const dilettante = makeOccupation(
  OccupationName.Dilettante,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const doctorOfMedicine = makeOccupation(
  OccupationName.DoctorOfMedicine,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const drifter = makeOccupation(
  OccupationName.Drifter,
  [
    OccupationSkillFormula.eduApp,
    OccupationSkillFormula.eduDex,
    OccupationSkillFormula.eduStr,
  ],
  0,
  100,
  [],
  []
)

const electedOfficial = makeOccupation(
  OccupationName.ElectedOfficial,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const engineer = makeOccupation(
  OccupationName.Engineer,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const entertainer = makeOccupation(
  OccupationName.Entertainer,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const exorcist = makeOccupation(
  OccupationName.Exorcist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const explorer = makeOccupation(
  OccupationName.Explorer,
  [
    OccupationSkillFormula.eduApp,
    OccupationSkillFormula.eduDex,
    OccupationSkillFormula.eduStr,
  ],
  0,
  100,
  [],
  []
)

const federalAgent = makeOccupation(
  OccupationName.FederalAgent,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const gambler = makeOccupation(
  OccupationName.Gambler,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const gangsterBoss = makeOccupation(
  OccupationName.GangsterBoss,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const gangsterUnderling = makeOccupation(
  OccupationName.GangsterUnderling,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const getAwayDriver = makeOccupation(
  OccupationName.GetAwayDriver,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const gunMoll = makeOccupation(
  OccupationName.GunMoll,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const gentlemanOrLady = makeOccupation(
  OccupationName.GentlemanOrLady,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const hiredMuscle = makeOccupation(
  OccupationName.HiredMuscle,
  [OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const hitMan = makeOccupation(
  OccupationName.HitMan,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const hobo = makeOccupation(
  OccupationName.Hobo,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const hooker = makeOccupation(
  OccupationName.Hooker,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const itinerantWorker = makeOccupation(
  OccupationName.ItinerantWorker,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const investigativeJournalist = makeOccupation(
  OccupationName.InvestigativeJournalist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const laborer = makeOccupation(
  OccupationName.Laborer,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const librarian = makeOccupation(
  OccupationName.Librarian,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const mechanic = makeOccupation(
  OccupationName.Mechanic,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const militaryOfficer = makeOccupation(
  OccupationName.MilitaryOfficer,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const missionary = makeOccupation(
  OccupationName.Missionary,
  [OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const musician = makeOccupation(
  OccupationName.Musician,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const nurse = makeOccupation(
  OccupationName.Nurse,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const occultist = makeOccupation(
  OccupationName.Occultist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const parapsychologist = makeOccupation(
  OccupationName.Parapsychologist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const photographer = makeOccupation(
  OccupationName.Photographer,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const policeDetective = makeOccupation(
  OccupationName.PoliceDetective,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const priest = makeOccupation(
  OccupationName.Priest,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const privateInvestigator = makeOccupation(
  OccupationName.PrivateInvestigator,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const professor = makeOccupation(
  OccupationName.Professor,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const ranger = makeOccupation(
  OccupationName.Ranger,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const reporter = makeOccupation(
  OccupationName.Reporter,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const sailor = makeOccupation(
  OccupationName.Sailor,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const scientist = makeOccupation(
  OccupationName.Scientist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const secretary = makeOccupation(
  OccupationName.Secretary,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduApp],
  0,
  100,
  [],
  []
)

const soldier = makeOccupation(
  OccupationName.Soldier,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const spy = makeOccupation(
  OccupationName.Spy,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduDex],
  0,
  100,
  [],
  []
)

const streetPunk = makeOccupation(
  OccupationName.StreetPunk,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const studentIntern = makeOccupation(
  OccupationName.StudentIntern,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const tribeMember = makeOccupation(
  OccupationName.TribeMember,
  [OccupationSkillFormula.eduDex, OccupationSkillFormula.eduStr],
  0,
  100,
  [],
  []
)

const unionActivist = makeOccupation(
  OccupationName.UnionActivist,
  [OccupationSkillFormula.edu],
  0,
  100,
  [],
  []
)

const yogi = makeOccupation(
  OccupationName.Yogi,
  [OccupationSkillFormula.edu],
  6,
  60,
  [],
  []
)

const zealot = makeOccupation(
  OccupationName.Zealot,
  [OccupationSkillFormula.eduApp, OccupationSkillFormula.eduPow],
  0,
  30,
  [],
  []
)

export const occupations: {
  [key in keyof typeof OccupationName]: Occupation
} = {
  ActorFilm: actorFilm,
  ActorStageRadio: actorStageRadio,
  AgencyDetective: agencyDetective,
  Archaeologist: archaeologist,
  Artist: artist,
  Athlete: athlete,
  Author: author,
  Aviator: aviator,
  BankRobber: bankRobber,
  BartenderWaitress: bartenderWaitress,
  BeatCop: beatCop,
  BigGameHunter: bigGameHunter,
  BountyHunter: bountyHunter,
  BoxerWrestler: boxerWrestler,
  Butler: butler,
  CatBurglar: catBurglar,
  Chauffeur: chauffeur,
  ConfidenceTrickster: confidenceTrickster,
  Criminal: criminal,
  CultLeader: cultLeader,
  Dilettante: dilettante,
  DoctorOfMedicine: doctorOfMedicine,
  Drifter: drifter,
  ElectedOfficial: electedOfficial,
  Engineer: engineer,
  Entertainer: entertainer,
  Exorcist: exorcist,
  Explorer: explorer,
  FederalAgent: federalAgent,
  Gambler: gambler,
  GangsterBoss: gangsterBoss,
  GangsterUnderling: gangsterUnderling,
  GetAwayDriver: getAwayDriver,
  GunMoll: gunMoll,
  GentlemanOrLady: gentlemanOrLady,
  HiredMuscle: hiredMuscle,
  HitMan: hitMan,
  Hobo: hobo,
  Hooker: hooker,
  ItinerantWorker: itinerantWorker,
  InvestigativeJournalist: investigativeJournalist,
  Laborer: laborer,
  Librarian: librarian,
  Mechanic: mechanic,
  MilitaryOfficer: militaryOfficer,
  Missionary: missionary,
  Musician: musician,
  Nurse: nurse,
  Occultist: occultist,
  Parapsychologist: parapsychologist,
  Photographer: photographer,
  PoliceDetective: policeDetective,
  Priest: priest,
  PrivateInvestigator: privateInvestigator,
  Professor: professor,
  Ranger: ranger,
  Reporter: reporter,
  Sailor: sailor,
  Scientist: scientist,
  Secretary: secretary,
  Soldier: soldier,
  Spy: spy,
  StreetPunk: streetPunk,
  StudentIntern: studentIntern,
  TribeMember: tribeMember,
  UnionActivist: unionActivist,
  Yogi: yogi,
  Zealot: zealot,
}

export const occupationList = Object.values(occupations).map((val) => {
  return val as Occupation
})
