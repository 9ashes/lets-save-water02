// src/data.js
// PROTOTYPE-ONLY MOCK DATA.

// URL routing per company:
//   website     — root domain homepage
//   generalUrl  — calculator or save-water hub (Start today, Simple swaps)
//   devicesUrl  — free-devices or product page (Plan ahead)
//   leakUrl     — leak-specific page (Fix those leaks)
//   businessUrl — business-facing page (For businesses)
//   businessOnly — true: only show in dropdown when audienceType === 'business'

export const WATER_COMPANIES = {
  // ── England ──────────────────────────────────────────────────────────────
  affinity: {
    id: 'affinity',
    name: 'Affinity Water',
    areas: ['Hertfordshire', 'Bedfordshire', 'Surrey'],
    website: 'https://www.affinitywater.co.uk',
    generalUrl: 'https://www.affinitywater.co.uk/save-water',
    generalLabel: 'Save water',
    devicesUrl: 'https://www.affinitywater.co.uk/deviceinstallation',
    devicesLabel: 'Device installation',
    leakUrl: 'https://www.affinitywater.co.uk/keeplifeflowing/homevisits',
    leakLabel: 'Free home visits',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£2.3bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-affinity-water-pr24-final-determination/' },
      { text: '13% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-affinity-water-pr24-final-determination/' },
      { text: 'Connect 2050 pipeline progressing', href: 'https://www.affinitywater.co.uk/connect2050/heronsgate-to-bovingdon' },
    ],
  },
  anglian: {
    id: 'anglian',
    name: 'Anglian Water',
    areas: ['East of England', 'Cambridgeshire'],
    website: 'https://www.anglianwater.co.uk',
    generalUrl: 'https://www.anglianwater.co.uk/help-and-advice/save-water/water-usage-calculator/',
    generalLabel: 'Water usage calculator',
    devicesUrl: 'https://www.anglianwater.co.uk/help-and-advice/save-water/',
    devicesLabel: 'Save water hub',
    leakUrl: 'https://www.anglianwater.co.uk/help-and-advice/save-water/',
    leakLabel: 'Save water hub',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£11bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-anglian-waters-pr24-final-determination/' },
      { text: '3% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-anglian-waters-pr24-final-determination/' },
      { text: 'Two new reservoirs progressing', href: 'https://www.anglianwater.co.uk/environment/investing-in-the-future-of-water/two-new-reservoirs/' },
    ],
  },
  bournemouth: {
    id: 'bournemouth',
    name: 'Bournemouth Water',
    areas: ['Bournemouth', 'Poole', 'Christchurch'],
    website: 'https://www.bournemouthwater.co.uk',
    generalUrl: 'https://www.bournemouthwater.co.uk/household/your-services/save-water/come-rain-or-shine',
    generalLabel: 'Come Rain or Shine',
    devicesUrl: 'https://www.bournemouthwater.co.uk/household/your-services/save-water/come-rain-or-shine',
    devicesLabel: 'Come Rain or Shine',
    leakUrl: 'https://www.bournemouthwater.co.uk/household/your-services/save-water/come-rain-or-shine',
    leakLabel: 'Come Rain or Shine',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£266m 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-bournemouth-waters-pr24-final-determination/' },
      { text: 'Water meter calculator', href: 'https://www.bournemouthwater.co.uk/link/b4d7eb4b3f714a6a8d1ee2c3bf407666.aspx' },
      { text: 'Come Rain or Shine', href: 'https://www.bournemouthwater.co.uk/household/your-services/save-water/come-rain-or-shine' },
    ],
  },
  bristol: {
    id: 'bristol',
    name: 'Bristol Water',
    areas: ['Bristol', 'North Somerset', 'South Gloucestershire'],
    website: 'https://www.bristolwater.co.uk',
    generalUrl: 'https://www.bristolwater.co.uk/every-drip-every-drop/come-rain-or-shine',
    generalLabel: 'Come Rain or Shine',
    devicesUrl: 'https://www.bristolwater.co.uk/every-drip-every-drop/every-drop',
    devicesLabel: 'Every drop you save',
    leakUrl: 'https://www.bristolwater.co.uk/every-drip-every-drop/every-drop/leaky-loo',
    leakLabel: 'Leaky Loo',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'Wider South West investment programme', href: 'https://www.ofwat.gov.uk/publication/overview-of-bristol-waters-pr24-final-determination/' },
      { text: '16% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-bristol-waters-pr24-final-determination/' },
      { text: 'Cheddar 2 resilience planning', href: 'https://www.bristolwater.co.uk/every-drip-every-drop' },
    ],
  },
  cambridge: {
    id: 'cambridge',
    name: 'Cambridge Water',
    areas: ['Cambridge', 'South Cambridgeshire'],
    website: 'https://www.cambridge-water.co.uk',
    generalUrl: 'https://www.cambridge-water.co.uk/household/saving-water',
    generalLabel: 'Help to Save Water',
    devicesUrl: 'https://www.cambridge-water.co.uk/household/saving-water/free-water-efficiency-devices',
    devicesLabel: 'Free water efficiency devices',
    leakUrl: 'https://www.cambridge-water.co.uk/household/saving-water',
    leakLabel: 'Help to Save Water',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'Largest-ever investment programme planned', href: 'https://www.ofwat.gov.uk/publication/overview-of-cambridge-waters-pr24-final-determination/' },
      { text: '17% leakage reduction targeted', href: 'https://www.ofwat.gov.uk/publication/overview-of-cambridge-waters-pr24-final-determination/' },
      { text: 'Fens Reservoir partnership progressing', href: 'https://www.cambridge-water.co.uk/household/saving-water' },
    ],
  },
  essexsuffolk: {
    id: 'essexsuffolk',
    name: 'Essex & Suffolk Water',
    areas: ['Essex', 'Suffolk'],
    website: 'https://www.eswater.co.uk',
    generalUrl: 'https://www.eswater.co.uk/watersavingtips',
    generalLabel: 'Water saving tips',
    devicesUrl: 'https://www.eswater.co.uk/waterproducts',
    devicesLabel: 'Water saving products',
    leakUrl: 'https://www.eswater.co.uk/watersavingtips',
    leakLabel: 'Water saving tips',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: ['Part of Northumbrian Water group'],
  },
  northumbrian: {
    id: 'northumbrian',
    name: 'Northumbrian Water',
    areas: ['County Durham', 'Tyne and Wear', 'Teesside'],
    website: 'https://www.nwl.co.uk',
    generalUrl: 'https://www.nwl.co.uk/watersavingtips',
    generalLabel: 'Water saving tips',
    devicesUrl: 'https://www.nwl.co.uk/help-and-support/water/saving-water/save-water-products/',
    devicesLabel: 'Water saving products',
    leakUrl: 'https://www.nwl.co.uk/leaktest',
    leakLabel: 'Leak test',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'Nutrient pollution investment planned', href: 'https://www.ofwat.gov.uk/publication/overview-of-northumbrian-waters-pr24-final-determination/' },
      { text: '7% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-northumbrian-waters-pr24-final-determination/' },
      { text: 'Long Sea Outfall scheme included', href: 'https://www.nwl.co.uk/watersavingtips' },
    ],
  },
  portsmouth: {
    id: 'portsmouth',
    name: 'Portsmouth Water',
    areas: ['Portsmouth', 'Havant', 'Fareham'],
    website: 'https://www.portsmouthwater.co.uk',
    generalUrl: 'https://www.portsmouthwater.co.uk/environment/saving-water/',
    generalLabel: 'Saving water',
    devicesUrl: 'https://www.savewatersavemoney.co.uk/',
    devicesLabel: 'GetWaterFit',
    leakUrl: 'https://www.portsmouthwater.co.uk/environment/saving-water/',
    leakLabel: 'Saving water',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'Quality and resilience investment planned', href: 'https://www.ofwat.gov.uk/publication/overview-of-portsmouth-waters-pr24-final-determination/' },
      { text: '15% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-portsmouth-waters-pr24-final-determination/' },
      { text: 'Havant Thicket Reservoir under construction', href: 'https://www.portsmouthwater.co.uk/environment/saving-water/' },
    ],
  },
  ses: {
    id: 'ses',
    name: 'SES Water',
    areas: ['Surrey', 'East Surrey', 'West Sussex'],
    website: 'https://www.seswater.co.uk',
    generalUrl: 'https://www.seswater.co.uk/household/your-water/saving-water/getwaterfit',
    generalLabel: 'GetWaterFit',
    devicesUrl: 'https://www.seswater.co.uk/household/your-water/saving-water/getwaterfit',
    devicesLabel: 'GetWaterFit',
    leakUrl: 'https://www.seswater.co.uk/household/your-water/saving-water/getwaterfit',
    leakLabel: 'GetWaterFit',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£367m 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-ses-waters-pr24-final-determination/' },
      { text: '16% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-ses-waters-pr24-final-determination/' },
      { text: 'Bough Beech options retained', href: 'https://www.seswater.co.uk/household/your-water/saving-water/getwaterfit' },
    ],
  },
  southseast: {
    id: 'southseast',
    name: 'South East Water',
    areas: ['Kent', 'Sussex', 'Hampshire'],
    website: 'https://www.southeastwater.co.uk',
    generalUrl: 'https://www.southeastwater.co.uk/help/save-water',
    generalLabel: 'Water Efficiency Hub',
    devicesUrl: 'https://www.southeastwater.co.uk/help/save-water/free-water-saving-devices/',
    devicesLabel: 'Free water-saving devices',
    leakUrl: 'https://www.southeastwater.co.uk/help/how-to/customer-side-leaks/',
    leakLabel: 'Customer side leaks',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£1.8bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-south-east-waters-pr24-final-determination/' },
      { text: '27% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-south-east-waters-pr24-final-determination/' },
      { text: 'Broad Oak Water progressing', href: 'https://www.southeastwater.co.uk/help/save-water' },
    ],
  },
  southstaffs: {
    id: 'southstaffs',
    name: 'South Staffs Water',
    areas: ['South Staffordshire', 'South Derbyshire'],
    website: 'https://www.south-staffs-water.co.uk',
    generalUrl: 'https://www.south-staffs-water.co.uk/household/saving-water',
    generalLabel: 'Water saving advice',
    devicesUrl: 'https://www.south-staffs-water.co.uk/household/saving-water',
    devicesLabel: 'Water saving advice',
    leakUrl: 'https://www.south-staffs-water.co.uk/household/saving-water',
    leakLabel: 'Water saving advice',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£926m 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-south-staffs-waters-pr24-final-determination/' },
      { text: '17% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-south-staffs-waters-pr24-final-determination/' },
      { text: 'Chalk stream restoration planned', href: 'https://www.south-staffs-water.co.uk/household/saving-water' },
    ],
  },
  southwest: {
    id: 'southwest',
    name: 'South West Water',
    areas: ['Devon', 'Cornwall'],
    website: 'https://www.southwestwater.co.uk',
    generalUrl: 'https://www.southwestwater.co.uk/household/your-services/save-water/come-rain-or-shine',
    generalLabel: 'Come Rain or Shine',
    devicesUrl: 'https://www.southwestwater.co.uk/household/your-services/save-water',
    devicesLabel: 'Save water',
    leakUrl: 'https://www.southwestwater.co.uk/household/help-support/help-with-leaks',
    leakLabel: 'Help with leaks',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£3.8bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-south-west-waters-pr24-final-determination/' },
      { text: '17% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-south-west-waters-pr24-final-determination/' },
      { text: 'Water grid and Cheddar 2', href: 'https://www.southwestwater.co.uk/household/your-services/save-water' },
    ],
  },
  southern: {
    id: 'southern',
    name: 'Southern Water',
    areas: ['Kent', 'Sussex', 'Hampshire', 'Isle of Wight'],
    website: 'https://www.southernwater.co.uk',
    generalUrl: 'https://www.southernwater.co.uk/help-advice/how-to-save-water',
    generalLabel: 'Water saving calculator',
    devicesUrl: 'https://www.southernwater.co.uk/help-advice/how-to-save-water',
    devicesLabel: 'Water saving calculator',
    leakUrl: 'https://www.southernwater.co.uk/help-and-support/how-to-find-and-fix-leaks-in-your-house/',
    leakLabel: 'How to find and fix leaks',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£8.5bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-southern-waters-pr24-final-determination/' },
      { text: '34% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-southern-waters-pr24-final-determination/' },
      { text: 'Hampshire water recycling progressing', href: 'https://www.southernwater.co.uk/help-advice/how-to-save-water' },
    ],
  },
  severn: {
    id: 'severn',
    name: 'Severn Trent',
    areas: ['West Midlands', 'East Midlands'],
    website: 'https://www.stwater.co.uk',
    generalUrl: 'https://www.stwater.co.uk/wonderful-on-tap/save-water/get-water-fit/',
    generalLabel: 'Get Water Fit',
    devicesUrl: 'https://www.stwater.co.uk/wonderful-on-tap/save-water/get-water-fit/',
    devicesLabel: 'Get Water Fit',
    leakUrl: 'https://www.stwater.co.uk/wonderful-on-tap/save-water/get-water-fit/',
    leakLabel: 'Get Water Fit',
    businessUrl: 'https://www.stwater.co.uk/wonderful-on-tap/green-recovery/supporting-local-businesses/',
    businessLabel: 'Supporting local businesses',
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£15bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-severn-trents-pr24-final-determination/' },
      { text: '16% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-severn-trents-pr24-final-determination/' },
      { text: 'Linacre Water improvements underway', href: 'https://www.stwater.co.uk/wonderful-on-tap/save-water/get-water-fit/' },
    ],
  },
  thames: {
    id: 'thames',
    name: 'Thames Water',
    areas: ['Greater London', 'Thames Valley'],
    website: 'https://www.thameswater.co.uk',
    generalUrl: 'https://www.thameswater.co.uk/help/water-saving',
    generalLabel: 'Water saving',
    devicesUrl: 'https://www.thameswater.co.uk/help/water-saving/smarter-home-visits',
    devicesLabel: 'Smarter Home Visits',
    leakUrl: 'https://www.thameswater.co.uk/help/water-saving/smarter-home-visits',
    leakLabel: 'Smarter Home Visits',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£20.5bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-thames-waters-pr24-final-determination/' },
      { text: '22% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-thames-waters-pr24-final-determination/' },
      { text: 'White Horse Reservoir progressing', href: 'https://www.thameswater.co.uk/help/water-saving' },
    ],
  },
  united: {
    id: 'united',
    name: 'United Utilities',
    areas: ['North West', 'Greater Manchester'],
    website: 'https://www.unitedutilities.com',
    generalUrl: 'https://www.unitedutilities.com/help-and-support/save-water/get-water-fit/',
    generalLabel: 'Get Water Fit',
    devicesUrl: 'https://www.unitedutilities.com/help-and-support/save-water/get-water-fit/',
    devicesLabel: 'Get Water Fit',
    leakUrl: 'https://www.unitedutilities.com/my-account/your-bill/is-your-water-bill-higher-than-you-expected/',
    leakLabel: 'Is your bill higher than expected?',
    businessUrl: 'https://wrcuucalculator.co.uk/',
    businessLabel: 'WRc sustainability calculator',
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£13bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-united-utilities-pr24-final-determination/' },
      { text: '13% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-united-utilities-pr24-final-determination/' },
      { text: 'Haweswater Aqueduct resilience programme', href: 'https://www.unitedutilities.com/help-and-support/save-water/get-water-fit/' },
    ],
  },
  wessex: {
    id: 'wessex',
    name: 'Wessex Water',
    areas: ['Dorset', 'Somerset', 'Bristol', 'Wiltshire'],
    website: 'https://www.wessexwater.co.uk',
    generalUrl: 'https://watersaving.wessexwater.co.uk/',
    generalLabel: 'Water efficiency',
    devicesUrl: 'https://watersaving.wessexwater.co.uk/',
    devicesLabel: 'Water efficiency',
    leakUrl: 'https://www.wessexwater.co.uk/bills-and-accounts/unusually-high-bill',
    leakLabel: 'Unusually high bill',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£4.3bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-wessex-waters-pr24-final-determination/' },
      { text: '13% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-wessex-waters-pr24-final-determination/' },
      { text: 'Reuse and reservoir options investigated', href: 'https://watersaving.wessexwater.co.uk/' },
    ],
  },
  yorkshire: {
    id: 'yorkshire',
    name: 'Yorkshire Water',
    areas: ['Yorkshire', 'Humber'],
    website: 'https://www.yorkshirewater.com',
    generalUrl: 'https://www.yorkshirewater.com/your-water/save-water/',
    generalLabel: 'Save water',
    devicesUrl: 'https://www.yorkshirewater.com/your-water/save-water/',
    devicesLabel: 'Save water',
    leakUrl: 'https://www.yorkshirewater.com/your-water/save-water/',
    leakLabel: 'Save water',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£8.3bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-yorkshire-waters-pr24-final-determination/' },
      { text: '14% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-yorkshire-waters-pr24-final-determination/' },
      { text: 'Elvington transfer planning included', href: 'https://www.yorkshirewater.com/your-water/save-water/' },
    ],
  },
  // ── Wales ────────────────────────────────────────────────────────────────
  dwrcymru: {
    id: 'dwrcymru',
    name: 'Dŵr Cymru Welsh Water',
    areas: ['Wales', 'Parts of England bordering Wales'],
    website: 'https://www.dwrcymru.com',
    generalUrl: 'https://www.dwrcymru.com/en/help-advice/get-water-fit',
    generalLabel: 'Get Water Fit',
    devicesUrl: 'https://www.dwrcymru.com/en/help-advice/get-water-fit',
    devicesLabel: 'Get Water Fit',
    leakUrl: 'https://www.dwrcymru.com/en/save-water',
    leakLabel: 'Save water',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£6bn 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-dwr-cymru-welsh-waters-pr24-final-determination/' },
      { text: '24% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-dwr-cymru-welsh-waters-pr24-final-determination/' },
      { text: 'Drought resilience improvements planned', href: 'https://www.dwrcymru.com/en/help-advice/get-water-fit' },
    ],
  },
  hafrend: {
    id: 'hafrend',
    name: 'Hafren Dyfrdwy',
    areas: ['Mid Wales', 'North East Wales', 'Shropshire'],
    website: 'https://www.hdcymru.co.uk',
    generalUrl: 'https://www.hdcymru.co.uk/wonderful-water/helping-you-to-save-water/love-your-water/',
    generalLabel: 'Love your water',
    devicesUrl: 'https://www.hdcymru.co.uk/wonderful-water/helping-you-to-save-water/love-your-water/',
    devicesLabel: 'Love your water',
    leakUrl: 'https://www.hdcymru.co.uk/wonderful-water/helping-you-to-save-water/love-your-water/',
    leakLabel: 'Love your water',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: '£266m 2025–30 investment allowance', href: 'https://www.ofwat.gov.uk/publication/overview-of-hafren-dyfrddys-pr24-final-determination/' },
      { text: '3% leakage reduction expected', href: 'https://www.ofwat.gov.uk/publication/overview-of-hafren-dyfrddys-pr24-final-determination/' },
      { text: 'Ring main and reservoir works', href: 'https://www.hdcymru.co.uk/wonderful-water/helping-you-to-save-water/love-your-water/' },
    ],
  },
  // ── Scotland ─────────────────────────────────────────────────────────────
  scottish: {
    id: 'scottish',
    name: 'Scottish Water',
    areas: ['Scotland'],
    website: 'https://www.scottishwater.co.uk',
    generalUrl: 'https://www.scottishwater.co.uk/your-home/save-water/how-much-water-do-you-use',
    generalLabel: 'How much water do you use?',
    devicesUrl: 'https://www.scottishwater.co.uk/your-home/save-water/water-saving-advice',
    devicesLabel: 'Water saving advice',
    leakUrl: 'https://www.scottishwater.co.uk/your-home/save-water/water-saving-advice',
    leakLabel: 'Water saving advice',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
    ],
  },
  // ── Northern Ireland ─────────────────────────────────────────────────────
  niwater: {
    id: 'niwater',
    name: 'NI Water',
    areas: ['Northern Ireland'],
    website: 'https://www.niwater.com',
    generalUrl: 'https://www.niwater.com/education-and-the-community/water-saving',
    generalLabel: 'Water saving',
    devicesUrl: 'https://www.niwater.com/education-and-the-community/water-saving',
    devicesLabel: 'Water saving',
    leakUrl: 'https://www.niwater.com/need-our-help/i-have-got-a-burst-pipe/report-a-leak-or-burst-pipe',
    leakLabel: 'Report a leak or burst pipe',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
    ],
  },
  // ── Crown Dependencies ───────────────────────────────────────────────────
  guernsey: {
    id: 'guernsey',
    name: 'Guernsey Water',
    areas: ['Guernsey'],
    website: 'https://water.gg',
    generalUrl: 'https://water.gg/water-services/saving-water/',
    generalLabel: 'Saving water',
    devicesUrl: 'https://water.gg/water-services/saving-water/',
    devicesLabel: 'Saving water',
    leakUrl: 'https://water.gg/water-services/leaks/',
    leakLabel: 'Leaks',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
    ],
  },
  jersey: {
    id: 'jersey',
    name: 'Jersey Water',
    areas: ['Jersey'],
    website: 'https://www.jerseywater.je',
    generalUrl: 'https://www.jerseywater.je/savewater/free-water-saving-devices/',
    generalLabel: 'Free water saving devices',
    devicesUrl: 'https://www.jerseywater.je/savewater/free-water-saving-devices/',
    devicesLabel: 'Free water saving devices',
    leakUrl: 'https://www.jerseywater.je/faqs/',
    leakLabel: 'FAQs — leak advice',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
    ],
  },
  manx: {
    id: 'manx',
    name: 'Manx Utilities',
    areas: ['Isle of Man'],
    website: 'https://www.manxutilities.im',
    generalUrl: 'https://www.manxutilities.im/water/use-water-wisely/',
    generalLabel: 'Use water wisely',
    devicesUrl: 'https://www.manxutilities.im/water/use-water-wisely/',
    devicesLabel: 'Use water wisely',
    leakUrl: 'https://www.manxutilities.im/water/use-water-wisely/',
    leakLabel: 'Use water wisely',
    businessUrl: null,
    businessLabel: null,
    intro: 'Placeholder introduction describing the water company and the area it serves.',
    credentials: [
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
      { text: 'No placeholder data provided', href: '#' },
    ],
  },
};

export const NATIONAL_ACTIVITIES = 3734;

// Three tools per company in order: calculator, money-saving tool, advice/blog.
// Only include a tool if a real URL exists.
export const COMPANY_TOOLS = {
  affinity: [
    { label: 'Save water tool', href: 'https://www.affinitywater.co.uk/save-water' },
    { label: 'Free devices', href: 'https://www.affinitywater.co.uk/deviceinstallation' },
    { label: 'Book a home visit', href: 'https://www.affinitywater.co.uk/keeplifeflowing/homevisits' },
  ],
  anglian: [
    { label: 'Water usage calculator', href: 'https://www.anglianwater.co.uk/help-and-advice/save-water/water-usage-calculator/' },
    { label: 'Free products', href: 'https://www.anglianwater.co.uk/environment/explore-ways-you-can-help/free-products/' },
    { label: 'Save water hub', href: 'https://www.anglianwater.co.uk/help-and-advice/save-water/' },
  ],
  bournemouth: [
    { label: 'Water meter calculator', href: 'https://www.bournemouthwater.co.uk/link/b4d7eb4b3f714a6a8d1ee2c3bf407666.aspx' },
    { label: 'Come Rain or Shine', href: 'https://www.bournemouthwater.co.uk/household/your-services/save-water/come-rain-or-shine' },
    { label: 'Save water', href: 'https://www.bournemouthwater.co.uk/save-water' },
  ],
  bristol: [
    { label: 'Water meter calculator', href: 'https://www.bristolwater.co.uk/water-meters/water-meter-calculator' },
    { label: 'Every drop you save', href: 'https://www.bristolwater.co.uk/every-drip-every-drop/every-drop' },
    { label: 'Every Drip Every Drop', href: 'https://www.bristolwater.co.uk/every-drip-every-drop' },
  ],
  cambridge: [
    { label: 'Water saving devices & calculators', href: 'https://www.cambridge-water.co.uk/household/saving-water' },
    { label: 'Free water efficiency devices', href: 'https://www.cambridge-water.co.uk/household/saving-water/free-water-efficiency-devices' },
    { label: 'Help to Save Water', href: 'https://www.cambridge-water.co.uk/household/saving-water' },
  ],
  essexsuffolk: [
    { label: 'Water meter', href: 'https://www.eswater.co.uk/watermeter' },
    { label: 'Water saving products', href: 'https://www.eswater.co.uk/waterproducts' },
    { label: 'Water saving tips', href: 'https://www.eswater.co.uk/watersavingtips' },
  ],
  northumbrian: [
    { label: 'Water meter calculator', href: 'https://www.nwl.co.uk/watermeter' },
    { label: 'Water saving products', href: 'https://www.nwl.co.uk/help-and-support/water/saving-water/save-water-products/' },
    { label: 'Water saving tips', href: 'https://www.nwl.co.uk/watersavingtips' },
  ],
  portsmouth: [
    { label: 'Switching to a water meter', href: 'https://www.portsmouthwater.co.uk/metering/switching-to-metering/' },
    { label: 'GetWaterFit', href: 'https://www.savewatersavemoney.co.uk/' },
    { label: 'Saving water', href: 'https://www.portsmouthwater.co.uk/environment/saving-water/' },
  ],
  ses: [
    { label: 'GetWaterFit', href: 'https://www.seswater.co.uk/household/your-water/saving-water/getwaterfit' },
    { label: 'Help with your water usage', href: 'https://www.seswater.co.uk/household/your-account/paying-your-bill/help-with-your-water-usage' },
    { label: 'Your water', href: 'https://www.seswater.co.uk/household/your-water' },
  ],
  southseast: [
    { label: 'Water Efficiency Hub', href: 'https://www.southeastwater.co.uk/help/save-water' },
    { label: 'Free water-saving devices', href: 'https://www.southeastwater.co.uk/help/save-water/free-water-saving-devices/' },
    { label: 'Water Efficiency Hub', href: 'https://www.southeastwater.co.uk/help/save-water' },
  ],
  southstaffs: [
    { label: 'Water saving devices & calculators', href: 'https://www.south-staffs-water.co.uk/household/saving-water' },
    { label: 'How can I save water?', href: 'https://www.south-staffs-water.co.uk/household/saving-water/how-can-i-save-water/' },
    { label: 'Save water', href: 'https://www.south-staffs-water.co.uk/save-water' },
  ],
  southwest: [
    { label: 'Save water', href: 'https://www.southwestwater.co.uk/household/your-services/save-water' },
    { label: 'Come Rain or Shine', href: 'https://www.southwestwater.co.uk/household/your-services/save-water/come-rain-or-shine' },
    { label: 'MyAccount', href: 'https://www.southwestwater.co.uk/household/your-account/myaccount' },
  ],
  southern: [
    { label: 'Water saving calculator', href: 'https://www.southernwater.co.uk/help-advice/how-to-save-water' },
    { label: 'Free devices', href: 'https://www.southernwater.co.uk/help-advice/how-to-save-water' },
    { label: 'Saving water at home', href: 'https://www.southernwater.co.uk/help-and-support/how-to-save-water-in-your-home/' },
  ],
  severn: [
    { label: 'Get Water Fit', href: 'https://www.stwater.co.uk/wonderful-on-tap/save-water/get-water-fit/' },
    { label: 'Water butts', href: 'https://www.stwater.co.uk/wonderful-on-tap/save-water/water-butts-checker/' },
    { label: 'Save water', href: 'https://www.stwater.co.uk/wonderful-on-tap/save-water/' },
  ],
  thames: [
    { label: 'Water saving calculator', href: 'https://www.thameswater.co.uk/help/water-saving' },
    { label: 'Smarter Home Visits', href: 'https://www.thameswater.co.uk/help/water-saving/smarter-home-visits' },
    { label: 'Water saving', href: 'https://www.thameswater.co.uk/help/water-saving' },
  ],
  united: [
    { label: 'Get Water Fit', href: 'https://www.unitedutilities.com/help-and-support/save-water/get-water-fit/' },
    { label: 'Save water', href: 'https://www.unitedutilities.com/help-and-support/save-water/' },
    { label: '10 water efficiency tips', href: 'https://www.unitedutilities.com/corporate/newsroom/campaigns/10-water-efficiency-tips-that-can-save-you-money/' },
  ],
  wessex: [
    { label: 'Water efficiency', href: 'https://watersaving.wessexwater.co.uk/' },
    { label: 'Water meters', href: 'https://www.wessexwater.co.uk/water-meters' },
    { label: 'Save water', href: 'https://www.wessexwater.co.uk/your-water/save-water' },
  ],
  yorkshire: [
    { label: 'Could I save with a meter?', href: 'https://www.yorkshirewater.com/bill-account/water-meters/could-i-save-with-a-water-meter/' },
    { label: 'Get Water Fit', href: 'https://www.yorkshirewater.com/your-water/save-water/' },
    { label: 'Save water', href: 'https://www.yorkshirewater.com/your-water/save-water/' },
  ],
  dwrcymru: [
    { label: 'Get Water Fit', href: 'https://www.dwrcymru.com/en/help-advice/get-water-fit' },
    { label: 'Cartref services', href: 'https://www.dwrcymru.com/en/save-water' },
    { label: 'Save water', href: 'https://www.dwrcymru.com/en/save-water' },
  ],
  hafrend: [
    { label: 'A smarter way to use water', href: 'https://www.hdcymru.co.uk/wonderful-water/a-smarter-way-to-use-water/' },
    { label: 'Love your water', href: 'https://www.hdcymru.co.uk/wonderful-water/helping-you-to-save-water/love-your-water/' },
    { label: 'Love your water', href: 'https://www.hdcymru.co.uk/wonderful-water/helping-you-to-save-water/love-your-water/' },
  ],
  scottish: [
    { label: 'How much water do you use?', href: 'https://www.scottishwater.co.uk/your-home/save-water/how-much-water-do-you-use' },
    { label: 'Water saving advice', href: 'https://www.scottishwater.co.uk/your-home/save-water/water-saving-advice' },
    { label: 'Water is always worth saving', href: 'https://www.scottishwater.co.uk/your-home/save-water' },
  ],
  niwater: [
    { label: 'Water saving', href: 'https://www.niwater.com/education-and-the-community/water-saving' },
    { label: 'Save water and money', href: 'https://www.niwater.com/education-and-the-community/water-saving/save-water-and-money' },
    { label: 'How to save water', href: 'https://www.niwater.com/education-and-the-community/water-saving/how-to-save-water' },
  ],
  guernsey: [
    { label: 'Water meters', href: 'https://water.gg/water-services/water-meters/' },
    { label: 'Saving water', href: 'https://water.gg/water-services/saving-water/' },
    { label: 'Saving water', href: 'https://water.gg/water-services/saving-water/' },
  ],
  jersey: [
    { label: 'GetWaterFit savings engine', href: 'https://www.getwaterfit.co.uk/' },
    { label: 'Free water saving devices', href: 'https://www.jerseywater.je/savewater/free-water-saving-devices/' },
    { label: 'Save water', href: 'https://www.jerseywater.je/savewater/' },
  ],
  manx: [
    { label: 'Water Resources Management Plan', href: 'https://www.manxutilities.im/water/water-resources-management-plan/' },
    { label: 'Use water wisely', href: 'https://www.manxutilities.im/water/use-water-wisely/' },
    { label: 'Use water wisely', href: 'https://www.manxutilities.im/water/use-water-wisely/' },
  ],
};

// Map company IDs to the SVG map focusKey regions
export const COMPANY_FOCUS = {
  affinity: 'london',
  anglian: 'east',
  bournemouth: 'southwest',
  bristol: 'southwest',
  cambridge: 'east',
  essexsuffolk: 'east',
  northumbrian: 'northeast',
  portsmouth: 'south',
  ses: 'london',
  southseast: 'south',
  southstaffs: 'midlands',
  southwest: 'southwest',
  southern: 'south',
  severn: 'midlands',
  thames: 'london',
  united: 'northwest',
  wessex: 'southwest',
  yorkshire: 'yorkshire',
  dwrcymru: 'wales',
  hafrend: 'wales',
  scottish: 'scotland',
  niwater: null,
  guernsey: null,
  jersey: null,
  manx: null,
};

export const POSTCODE_MAP = [
  { prefixes: ['SW', 'SE', 'EC', 'WC', 'E', 'N', 'NW', 'W'], company: 'thames', focus: 'london' },
  { prefixes: ['HP', 'SG', 'AL', 'EN', 'WD'], company: 'affinity', focus: 'london' },
  { prefixes: ['RH', 'CR', 'SM', 'KT'], company: 'ses', focus: 'london' },
  { prefixes: ['B'], company: 'severn', focus: 'midlands' },
  { prefixes: ['WS', 'WV', 'DY', 'ST'], company: 'southstaffs', focus: 'midlands' },
  { prefixes: ['M', 'WA', 'SK', 'L', 'CH', 'FY', 'LA', 'PR'], company: 'united', focus: 'northwest' },
  { prefixes: ['LS', 'BD', 'HD', 'HX', 'WF', 'S', 'DN', 'HG', 'YO', 'HU'], company: 'yorkshire', focus: 'yorkshire' },
  { prefixes: ['NE', 'DH', 'SR', 'TS'], company: 'northumbrian', focus: 'northeast' },
  { prefixes: ['CB', 'PE'], company: 'cambridge', focus: 'east' },
  { prefixes: ['NR', 'IP', 'CO'], company: 'anglian', focus: 'east' },
  { prefixes: ['CM', 'SS'], company: 'essexsuffolk', focus: 'east' },
  { prefixes: ['EX', 'PL', 'TR'], company: 'southwest', focus: 'southwest' },
  { prefixes: ['BH'], company: 'bournemouth', focus: 'southwest' },
  { prefixes: ['BS', 'BA'], company: 'bristol', focus: 'southwest' },
  { prefixes: ['DT', 'TA', 'SP', 'SN'], company: 'wessex', focus: 'southwest' },
  { prefixes: ['SO', 'GU'], company: 'southern', focus: 'south' },
  { prefixes: ['PO'], company: 'portsmouth', focus: 'south' },
  { prefixes: ['TN', 'ME', 'CT', 'DA', 'BN'], company: 'southseast', focus: 'south' },
  { prefixes: ['SY', 'LD', 'SA', 'CF', 'NP', 'LL'], company: 'dwrcymru', focus: 'wales' },
  { prefixes: ['SY10', 'SY11', 'SY12', 'SY22'], company: 'hafrend', focus: 'wales' },
  { prefixes: ['AB', 'DD', 'DG', 'EH', 'FK', 'G', 'HS', 'IV', 'KA', 'KW', 'KY', 'ML', 'PA', 'PH', 'TD', 'ZE'], company: 'scottish', focus: 'scotland' },
  { prefixes: ['BT'], company: 'niwater', focus: null },
];

const UK_POSTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
const OUTWARD_RE = /^[A-Z]{1,2}\d[A-Z\d]?$/i;

export function lookupPostcode(raw) {
  const value = (raw || '').trim().toUpperCase();
  if (!value) return { status: 'invalid' };
  if (!UK_POSTCODE_RE.test(value) && !OUTWARD_RE.test(value)) return { status: 'invalid' };
  const outward = value.split(/\s+/)[0];
  const letters = outward.match(/^[A-Z]+/)[0];
  let match = null;
  for (const entry of POSTCODE_MAP) {
    for (const p of entry.prefixes) {
      if (letters === p || (letters.length > 1 && letters.startsWith(p) && p.length >= 2)) {
        if (!match || p.length > match.matchedLen) match = { ...entry, matchedLen: p.length };
      }
    }
  }
  if (!match) {
    const first = letters[0];
    const entry = POSTCODE_MAP.find((e) => e.prefixes.includes(first));
    if (entry) match = { ...entry, matchedLen: 1 };
  }
  if (!match) return { status: 'unknown' };
  return { status: 'success', companyId: match.company, focus: match.focus };
}

export const PRACTICAL_ACTION_GROUPS = [
  {
    id: 'start-today',
    title: 'Start today',
    ctaCategory: 'general',
    ctaLabel: 'Get saving tips',
    steps: [
      { id: 'shorten-your-shower', title: 'Shorten your shower', supporting: 'Four minutes total should do it. Setting a timer is easier than it sounds.', icon: 'shower' },
      { id: 'fix-those-leaks', title: 'Fix those leaks', supporting: 'A dripping tap can waste up to 15 litres a day, while a leaky loo loses 400 litres a day.', icon: 'droplet' },
    ],
  },
  {
    id: 'simple-swaps',
    title: 'Simple swaps',
    ctaCategory: 'general',
    ctaLabel: 'Explore simple swaps',
    steps: [
      { id: 'swap-hose-for-bucket', title: 'Swap the hose for a bucket or watering can', supporting: "You'll do the same job with much less water.", icon: 'bucket' },
      { id: 'use-a-washing-up-bowl', title: 'Use a washing up bowl', supporting: "If it takes you more than a minute to do the dishes, you'll save water with a bowl.", icon: 'wash' },
      { id: 'go-eco-mode', title: 'Go eco mode for your appliances', supporting: 'Eco mode on your dishwasher and washing machine can save up to 10 litres a day.', icon: 'machine' },
    ],
  },
  {
    id: 'plan-ahead',
    title: 'Plan ahead',
    ctaCategory: 'devices',
    ctaLabel: 'Find free devices',
    steps: [
      { id: 'install-dual-flush', title: 'Install a dual flush toilet', supporting: 'They can save up to 42 litres a day.', icon: 'toilet' },
      { id: 'upgrade-shower-head', title: 'Upgrade your shower head', supporting: 'A proper water saving head can halve your water use.', icon: 'shower' },
    ],
  },
];

export const BUSINESS_ACTION_GROUP = {
  id: 'business-action',
  title: 'For businesses',
  badge: 'For businesses only',
  ctaCategory: 'business',
  ctaLabel: 'Get business support',
  steps: [
    { id: 'business-action-1', title: 'Practical action', supporting: 'Practical action supporting sentence', icon: 'machine' },
  ],
};

const FALLBACK_URLS = {
  general: 'https://www.getwaterfit.co.uk/',
  devices: 'https://www.savewatersavemoney.co.uk/',
  leak: 'https://waterwise.org.uk/how-to-save-water/',
  business: 'https://www.stwater.co.uk/wonderful-on-tap/green-recovery/supporting-local-businesses/',
};

export function getGroupCta(companyId, groupId) {
  const company = WATER_COMPANIES[companyId];
  if (!company) return null;

  const allGroups = [...PRACTICAL_ACTION_GROUPS, BUSINESS_ACTION_GROUP];
  const group = allGroups.find((g) => g.id === groupId);
  const category = group?.ctaCategory || 'general';

  let href, pageLabel;
  switch (category) {
    case 'devices':
      href = company.devicesUrl || company.generalUrl || FALLBACK_URLS.devices;
      pageLabel = (company.devicesUrl ? company.devicesLabel : null) || company.generalLabel || 'Save water';
      break;
    case 'leak':
      href = company.leakUrl || company.generalUrl || FALLBACK_URLS.leak;
      pageLabel = (company.leakUrl ? company.leakLabel : null) || company.generalLabel || 'Save water';
      break;
    case 'business':
      href = company.businessUrl || company.generalUrl || FALLBACK_URLS.business;
      pageLabel = company.businessLabel || company.generalLabel || 'Save water';
      break;
    default:
      href = company.generalUrl || FALLBACK_URLS.general;
      pageLabel = company.generalLabel || 'Save water';
  }

  const label = `${company.name}: ${pageLabel}`;
  return { label, href };
}

export const CAMPAIGN_GOALS = [
  { id: 'goal-1', label: 'Save', value: '1.25m', support: "households' worth of water each year" },
  { id: 'goal-3', label: null, value: 'Normalise water-saving', support: 'in everyday tasks' },
  { id: 'goal-2', label: 'Save', value: '28 litres', support: 'per person every day' },
];

export const CONTACT_ROUTES = [
  { id: 'general', label: 'General enquiries', email: 'enquiries@example.com' },
  { id: 'press', label: 'Press', email: 'press@example.com' },
  { id: 'data', label: 'Data requests', email: 'data@example.com' },
];

export const WATER_COMPANY_TOOLS = [
  'Request a smart meter',
  "Assess your home's water usage",
  'Water saving advice',
];

export const SOCIAL_LINKS = [
  { id: 'facebook', label: 'Facebook', url: 'https://example.com/facebook' },
  { id: 'twitter', label: 'Twitter', url: 'https://example.com/twitter' },
  { id: 'tiktok', label: 'TikTok', url: 'https://example.com/tiktok' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://example.com/linkedin' },
];
