const choices = [
  'Software Engineer',
  'Freelance Developer',
  'Code Writer',
  'Git Commiter',
  'Email Sender',
  'Story Pointer',
  'Bug Squasher',
  'Full Stack Developer',
  'Meeting Participator',
  'Daily Stand-Up Presenter',
  '3<sup>rd</sup> Party API Integrator',
  'Bread Maker',
  'Croissant Roller',
  'Dough Kneader',
  'Batter Mixer',
  'Cookie Dough Baller',
  'Plant Waterer',
  'Garden Cultivator',
  'Cacti Toucher',
  '<i>Crassula</i> Lover',
  'Spotify Listener',
  'Video Game Player',
  'Barrel Rider',
  'Sourdough Devourer',
  'Seed Buryer',
  'Meringue Whipper',
  'Tea Drinker',
  'Coffee Brewer',
  'Hibiscus Eater',
  'Star Gazer',
  'People Watcher',
  'Cookbook Reader',
  'Blueberry Lover',
  'Butter Basher',
  'He/Him Pronoun User',
  'LGBT+ Supporter',
  'BLM Believer',
  'Bike Rider',
  'Cat Petter',
  'Dog Exciter',
  '<p><span class="latex">L<sup>a</sup>T<sub>e</sub>X</span> Writer</p>',
  'Open Source Utilizer',
  'Wood Worker',
  'Webpage Stylizer',
  'Application Creator',
  'Documentation Reader',
  'Application Maintainer',
  'Coctail Mixer',
  'Mountain Adventurer',
  'Wildflower Smeller',
  'Subscription Purchaser',
  'Pumpkin Harvester',
  'Pastry Snacker',
  'Agile Developer'
];

let currentChoices = [...choices];

let currentIndex = 0;

function rollChoice(idxOverride, timeout) {
  let idx = idxOverride;
  if (idx === undefined) {
    idx = Math.floor(Math.random() * currentChoices.length);
  }

  let animLen = timeout;
  if(animLen === undefined) {
    animLen = 200;
  }
  
  epithetText = document.getElementById('epithet-text');
  epithetText.style.opacity = 0;
  setTimeout(() => {
    epithetText.innerHTML = currentChoices[idx];
    epithetText.style.opacity = 1;

    currentChoices = currentChoices.filter((_, cidx) => cidx !== idx);
    if(currentChoices.length === 0){
      currentChoices = [...choices];
    }
  }, animLen);
}

document.addEventListener("DOMContentLoaded", function() {
  rollChoice(0, 0);
});
