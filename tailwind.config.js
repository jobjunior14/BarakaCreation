/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myBlue': 'rgb(22, 22, 52)',
        'letsDoIt': 'rgb(123, 104, 224)',
        'bgApropos' : 'rgb(91, 93, 126)',
        'bgFormation' : 'rgb(245, 246, 254)',
        'bgCertifier' : 'rgb(77, 90, 138)',
        'bgPlay' : 'rgb(118, 128, 166)',
        'nosVal': 'rgb(148, 149, 181)',
        'nos': 'rgb(204, 207, 221)',
        'remporter': 'rgb(110, 102, 150)',
        'bgPhoneRemporter': 'rgba(22, 21, 35)',
        'bgRemporter1': 'rgba(22, 22, 23)',
        'bgRemporter3': 'rgba(60, 57, 66)',
        'bgIdVisuel': 'rgba(226, 235, 255)',
        'bgAnnimation': 'rgba(41, 40, 72)', 
        'bgCharteGraphique': 'rgba(118, 136, 182)' ,
        'bgEvent' : 'rgba(54, 58, 70)',
        'bgMiseEnpage' : 'rgba(232, 240, 251)',
        'bgCampagnCom' : 'rgba(107, 107, 131)',
        'bgConception': 'rgba(69, 73, 111)',
        'bgConceptionGrid': 'rgba(83, 86, 129)',
        "bgcqnoufaisons": 'rgba(134, 139, 169)',
        "bgIllustration": 'rgba(244, 243, 251)'
      },

      fontFamily: {
        interBold: ["interBold", "bold"],
        interRegular: ["interRegular", "normal"],
        interSemibold: ["interSemibold", "semibold"],
      },

      keyframes:{
        sliderInfinite: {
          '0%' : {transform: 'translateX(0)'},
          '100%' : { transform: 'translateX(-100%)'}
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}