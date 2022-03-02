////////////////////////////////////////////
////PLAYERS SETUP
///////////////////////////////////////////
class Player {
  constructor(
    name,
    role = ["decidingPlayer", "answerer"],
    points = 0,
    playercards = []
  ) {
    (this.name = name),
      (this.points = points),
      (this.role = role),
      (this.playercards = playercards);
  }
  announcePoints() {
    console.log(this.points);
  }

  winRound() {
    points += 1;
    console.log(
      `${this.name}'s card was selected as the best and wins the round!`
    );
  }
}

const questionCards = [
  "______ is a sure sign of mankind's decline",
  "Why hasn't Singapore found its next prime minister?",
  "______: good dead or alive.",
  "_________: tested on children, mother approved",
  "50% of all Singaporean marriages end in _____",
  "A romantic candlelit dinner would be incomplete without _____",
  "after months of practice, I think I'm finally ready for _____.",
  "Singapore Airlines now prohibit _____ on airplanes",
  "For my New Year's resolution, I vow to give up _____.",
  "But before I kill you, Mr. Putin, I must show you _____.",
  "ChannelNewsAsia presents: the story of _____",
  "Daddy, why is mummy crying?",
  "Hey bro, do not go in that washroom. There's ____ in there.",
  "Due to a PR fiasco, Shopee and Lazada can no longer sell ________.",
  "How am I maintaining my relationship status?",
  "I'm not a doctor, but I'm pretty sure what you're suffering from is called ____",
  "I'm sorry, Professor, but I couldn't complete my homework because of _____",
  "I’m not like the rest of you. I'm too rich and busy for _____.",
  "In her latest film, Zoe Tay and Fann Wong acts with _____ for the first time.",
  "In the seventh depth of Hell, sinners must endure _____ for all eternity.",
  "Instead of coal, Father Christmas now gives the bad children ____.",
  "Maybe she's born with it. Maybe it's ____.",
  "Rumor has it that Lee Hsien Loong is ______.",
  "The school field trip was completely ruined by ____.",
  "This is your pilot speaking. Please prepare for ____.",
  "What did I bring back from my trip to Bangkok?",
  "What don't you want to find in your Chicken Rice?",
  "What ended my last relationship?",
  "What's a Singapore SPG girl's best friend?",
  "When I am a billionare, I shall _____.",
  "When I am Prime Minister, I will create the Ministry of ____.",
  "Why can't I sleep at night?",
  "Bow before me, for I am the Queen of _______!",
  "Come with me, and I will show you a world of _____.",
  "Siao la! Did you think you could escape from _____?",
  "Ladies and gentlemen, I have discovered something amazing. I have discovered ____.",
];
const answers = [
  "10,000 Ukrainian refugees.",
  "100% Pure New Zealand.",
  "400 years of colonial atrocities.",
  "500 mg of Panadol daily.",
  "A bag of magic beans.",
  "A balanced breakfast.",
  "A big hoopla about nothing.",
  "A bit of slap and tickle.",
  "A bleached arsehole.",
  "A bleached asshole.",
  "A brain tumour.",
  "A bucket of fish heads.",
  "A caress of the inner thigh.",
  "A cartoon camel enjoying the smooth, refreshing taste of a cigarette.",
  "A cat with... hands.",
  "A Chinese tourist who wants something very badly but cannot communicate it.",
  "A cute, fuzzy koala, but it has AIDS.",
  "A decent proper 5G internet connection.",
  "A defective condom.",
  "A disappointing birthday party.",
  "A drive-by shooting.",
  "A fart so powerful that it wakes the giants from their thousand-year slumber.",
  "A foul mouth.",
  "A ton of almonds.",
  "A good sniff.",
  "A good, strong gorilla.",
  "A grande sugar-free iced soy caramel macchiato.",
  "A Gypsy curse.",
  "A hairless little shitstain named Meimei.",
  "A Halal Snack Pack.",
  "A homoerotic wrestling video.",
  "A hot mess.",
  "A lifetime of sadness.",
  "A literal tornado of fire.",
  "A little boy who won't shut the fuck up about dinosaurs.",
  "A live studio audience.",
  "A look-see.",
  "A low standard of living.",
  "A mad cow.",
  "A mating display.",
  "A Mexican.",
  "A middle-aged man on roller skates.",
  "A moment of silence.",
  "A much younger woman.",
  "A murder most foul.",
  "A neglected Tamagotchi™.",
  "A nice cup of tea.",
  "A pangender octopus who roams the cosmos in search of love.",
  "A pineapple with COVID.",
  "A prayer bouquet.",
  "A really cool hat.",
  "A sassy black woman.",
  "A sea of troubles.",
  "A shark!",
  "A sickly child-king.",
  "A six-point plan to stop the boats.",
  "a slightly used tampon",
  "A snapping turtle biting the tip of your nose.",
  "A spastic nerd.",
  "A stingray barb through the chest.",
  "A stray pube.",
  "A subscription to Men's Fitness.",
  "A Super Soaker™ full of cat pee.",
  "A surprisingly low amount of prison rape.",
  "A swift hoog to the face.",
  "A thermonuclear detonation.",
  "A thousand Scottish warriors lifting their kilts in unison.",
  "A three-way with my wife and the Canadian Prime Minister",
  "A time travel paradox.",
  "A tiny horse.",
  "A tiny, gay guitar called a ukulele.",
  "A tribe of warrior women.",
  "A vastly superior healthcare system.",
  "A web of lies.",
  "A wheelchair death race.",
  "A whole thing of butter.",
  "A wisecracking terrorist.",
  "Abstinence.",
  "Academy Award winner Meryl Streep.",
  "Accepting the way things are.",
  "Accidentally slipping yourself.",
  "Active listening.",
  "Actually giving a shit",
  "Actually taking candy from a baby.",
  "Adult Facebook.",
  "Advice from a wise, old black man.",
  "African children.",
  "Agriculture.",
  "Alcohol poisoning.",
  "Alcoholism.",
  "all pants are half off today",
  "All-you-can-eat korean BBQ for $9.99.",
  "Altar boys.",
  "America.",
  "Amputees.",
  "An endless stream of diarrhoea.",
  "An entrenched class system.",
  "An Evening with Britney Spears.",
  "An evil man in evil clothes.",
  "An honest cop with nothing left to lose.",
  "An icepick lobotomy.",
  "An M. Night Shyamalan plot twist.",
  "An M16 assault rifle.",
  "An octopus giving seven handjobs and smoking a cigarette.",
  "An old guy who's almost dead.",
  "An oversized lollipop.",
  "An ugly face.",
  "An unsurprising rash.",
  "An unwanted pregnancy.",
  "An uppercut.",
  "Another goddamn vampire movie.",
  "Anything that comes out of Ho Ching's facebook account.",
  "Apologizing.",
  "Asians who aren't good at math.",
  "Assless chaps.",
  "Attitude.",
  "Australia.",
  "Authentic Mexican cuisine.",
  "Bananas in Pajamas.",
  "Barack Obama.",
  "Barely making $25,000 a year.",
  "Becoming a blueberry.",
  "Bees?",
  "Being a busy adult with many important things to do.",
  "Being a dick to children.",
  "Being a dinosaur.",
  "Being a hideous beast that no one could love.",
  "Being a sorcerer.",
  "Being a woman.",
  "Being able to talk to elephants.",
  "Being black.",
  "Being fabulous.",
  "Being fat and stupid.",
  "Being marginalized.",
  "Being on fire.",
  "Being rich.",
  "Being white.",
  "Bestiality.",
  "Bisexuality.",
  "Black people.",
  "Bling.",
  "Blood, toil, tears, and sweat.",
  "Boogers.",
  "Brexit.",
  "Britney Spears at 55.",
  "Brown people.",
  "Bullshitting my ass off.",
  "Burning down the White House.",
  "Casually suggesting a threesome.",
  "Catapults.",
  "Charisma.",
  "Cheating in the Paralympics.",
  "Cheating in the Special Olympics.",
  "Chemical weapons.",
  "Child beauty pageants.",
  "Children on leashes.",
  "Chivalry.",
  "Civilian casualties.",
  "Classist undertones.",
  "Clubbing baby seals.",
  "Coat hanger abortions.",
  "College.",
  "Committing suicide.",
  "Completely unwarranted confidence.",
  "Concealing a boner.",
  "Consensual sex.",
  "Consultants.",
  "Contagious face cancer.",
  "Converting to Islam.",
  "Copping a feel.",
  "Cottaging.",
  "Covering myself with Parmesan cheese and chili flakes because I am pizza.",
  "Crippling debt.",
  "Crumbs all over the bloody carpet.",
  "Cuddling.",
  "Customer service representatives.",
  "Daddy issues.",
  "Daddy's credit card.",
  "Dead babies.",
  "Dead parents.",
  "Destroying the evidence.",
  "Diversity.",
  "Doing the right thing.",
  "Donald J. Trump.",
  "Donald Trump's deleted tweets.",
  "Douchebags on their iPhones.",
  "Dr. Martin Luther King, Jr.",
  "Drinking alone.",
  "Drinking out of the toilet and eating rubbish.",
  "Dying.",
  "Eastern European Turbo-Folk music.",
  "Ecstasy.",
  "Edible underwear.",
  "Elderly Japanese men.",
  "Electricity.",
  "Emerging from the sea and rampaging through East Coast Park.",
  "Emotions.",
  "Erectile dysfunction.",
  "Establishing dominance.",
  "Eternal awesomeness.",
  "Ethnic cleansing.",
  "Exactly what you'd expect.",
  "Exchanging pleasantries.",
  "Executing a hostage every hour.",
  "Exorcism.",
  "Expecting a burp and vomiting on the floor.",
  "Explaining how blockchain work.",
  "Explosions.",
  "Extremely tight jeans.",
  "Facebook.",
  "Fading away into nothingness.",
  "Faith healing.",
  "Famine.",
  "Farting and walking away.",
  "Fear itself.",
  "Fiery poops.",
  "Finger painting.",
  "Fitting all your blongings into a seabag.",
  "Flash flooding.",
  "Flavored condoms.",
  "Flesh-eating bacteria.",
  "Flightless birds.",
  "Flying saucers",
  "Forced sterilization.",
  "Foreskin.",
  "Former President Yusof Ishak.",
  "Fragile masculinity.",
  "Free samples.",
  "Friction.",
  "Friendly fire.",
  "Friends who eat all the snacks.",
  "Friends with benefits.",
  "Funky fresh rhymes.",
  "Gandalf.",
  "Gandhi.",
  "Geese.",
  "Genetically engineered super-soldiers.",
  "Genghis Khan.",
  "Genital piercings.",
  "Genuine human connection.",
  "German dungeon porn.",
  "Getting crushed by a vending machine.",
  "Getting drunk on mouthwash.",
  "Getting into a pretty bad car accident.",
  "Getting married, having a few kids, buying some stuff, retiring to Malaysia, and dying.",
  "Getting pregnant again.",
  "Ghosts.",
  "Girls who shouldn't go wild.",
  "Girls.",
  "Giving 110%.",
  "Global warming.",
  "Goblins.",
  "God.",
  "Going an entire day without checking your phone.",
  "Going around sniffing people's armpits.",
  "Grandma.",
  "Grandpa's bald spot.",
  "Grassroots support",
  "Grave robbing.",
  "Guys who don't call back after the first date.",
  "Having a piss.",
  "Having big dreams but no realistic way to achieve them.",
  "Her Majesty, Queen Elizabeth II.",
  "Heroin.",
  "Heteronormativity.",
  "Hillary Clinton's favorite untruths",
  "Hip hop jewels.",
  "Hipsters.",
  "Historically atas neighbourhoods.",
  "Holding down a child and farting all over him.",
  "Homeless people.",
  "Hooning.",
  "Hormone injections.",
  "Horrifying laser hair removal accidents.",
  "Horse sashimi.",
  "Hospice care.",
  "Hot cheese.",
  "Hot people.",
  "Huge biceps.",
  "Hulk Hogan.",
  "Hurting those closest to me.",
  "I'm friends with your dad on Facebook.",
  "Ice.",
  "Illegal immigrants.",
  "Impotence.",
  "Improvised explosive devices.",
  "Inappropriate use of Singlish.",
  "Incest.",
  "intolerably vivid dreams",
  "Invading Ukraine.",
  "Irritable Bowel Syndrome.",
  "Italians.",
  "Itchy pussy.",
  "Jehovah's Witnesses.",
  "Jesus.",
  "Jews, gypsies, and homosexuals.",
  "Jobs.",
  "Joe Biden.",
  "Just touching David Beckham's hair.",
  "Justin Bieber's favorite emo song.",
  "Kamikaze pilots.",
  "Keanu Reeves.",
  "Keeping Christ in Christmas.",
  "Kim Jong-un.",
  "Kissing grandma on the forehead and turning off her life support.",
  "Lady Gaga.",
  "Land mines.",
  "Laying an egg.",
  "Leaked footage of Xiaxue's bitchfight with Sylvia Lim.",
  "Leaving an awkward voicemail.",
  "Leprosy.",
  "Letting yourself go.",
  "Leveling up.",
  "Licking things to claim them as your own.",
  "Listening to her problems without trying to solve them.",
  "Literally eating shit.",
  "Living in a trash can.",
  "Living in Yishun.",
  "Lockjaw.",
  'Looking in the mirror, applying lipstick, and whispering "tonight, you will find a man."',
  "Loose lips.",
  "Mad cow disease.",
  "Magnets.",
  "Making a list of people to stalk.",
  "Making a pouty face.",
  "Making up for centuries of oppression with one day of apologising.",
  "Mansplaining.",
  "Me time.",
  "Men discussing their feelings in an emotionally healthy way.",
  "Men.",
  "Menstrual rage.",
  "Michelle Obama's arms.",
  "Mild racism and extreme homophobia",
  "Mickey Mouse.",
  "Mistaking a retarded person for someone who's merely deaf.",
  "Mom.",
  "Moral ambiguity.",
  "Mouth herpes.",
  "multiple personality disorder",
  "Multiple stab wounds.",
  "Murdering our parents.",
  "Mutually assured destruction.",
  "My abusive boyfriend who really isn't so bad once you get to know him.",
  "My ex-wife.",
  "My fat daughter.",
  "My first kiss.",
  "Mee Siam Mai Hum.",
  "My inner demons.",
  "My relationship status.",
  "My sex life.",
  "My soul.",
  "My Grab driver, Wee Cheng.",
  "My ugly face and bad personality.",
  "Naked News.",
  "Natural male enhancement.",
  "Natural selection.",
  "New Age music.",
  "Newfies.",
  "Newly incorporated kamikaze tactics.",
  "Nickelback.",
  "Nocturnal emissions.",
  "Not covering your mouth when you sneeze",
  "Not giving a shit about vaccination.",
  "Not having silly talk.",
  "Not reciprocating a compliment.",
  "Not vaccinating my children because I am stupid.",
  "Not wearing pants.",
  "Nothing but sand.",
  "Nothing. Absolutely nothing.",
  "Obesity.",
  "Old-people smell.",
  "Ominous background music.",
  "One rude motherfather",
  "One trillion dollars.",
  "Only dating Asian women.",
  "Otters defending their territory.",
  "Our first chimpanzee President.",
  "Overcompensation.",
  "Oversized lollipops.",
  "Pabst Blue Ribbon.",
  "Party poopers.",
  "Passable transvestites.",
  "Passive-aggression.",
  "Passive-aggressive Post-it notes.",
  "Peeing a little bit.",
  "People who smell their own socks.",
  "Picking up girls at the abortion clinic.",
  "Police brutality.",
  "Poor life choices.",
  "Poor personal hygiene",
  "Poorly-timed racist jokes.",
  "Porn stars on OnlyFans.",
  "Poverty.",
  "Powerful allergies",
  "Prancing.",
  "Prescription viagra.",
  "Pretending to care.",
  "PTSD.",
  "Puberty.",
  "Public ridicule.",
  "Pumpkin spice flavored condoms.",
  "Punching a kid in the face.",
  "Puppies!",
  "Putting things where they go.",
  "Queuing.",
  "Racist Christmas Present",
  "Radical Islamic terrorism.",
  "Rap music.",
  "Raptor attacks.",
  "Re-gifting.",
  "Rectangles.",
  "Rehab.",
  "Repression.",
  "Rich people.",
  "Riding off into the sunset.",
  "Ring Pops.",
  "Rising sea levels consistent with scientific predictions.",
  "Robbing a sperm bank.",
  "RoboCop.",
  "Santa Claus.",
  "Saxophone solos.",
  "Saying I Love You.",
  "Scalping.",
  "Science.",
  "Scientology.",
  "Scousers.",
  "Scrubbing under the table.",
  "Sean Connery.",
  "Seduction.",
  "Seeing Grandma naked.",
  "Seeing my father cry.",
  "Seeing what happens when you lock people in a room with angry otters.",
  "Seething with quiet resentment.",
  "Self-loathing.",
  "Selling meritocracy to children.",
  "Seven dead and three in critical condition.",
  "Sexting.",
  "Sexy pillow fights.",
  "Shaking a baby until it stops crying.",
  "Shipping convicts to Australia.",
  "Showing up to an orgy for the food.",
  "Silence.",
  "Sipping artificial popcorn butter.",
  "Sniffing glue.",
  "Sobbing into a used tissue.",
  "Soiling oneself.",
  "Solving problems with violence.",
  "Some bloody peace and quiet.",
  "Some foundation, mascara, and a touch of blush.",
  "Some guy I met on Tinder.",
  "Sorry, this content cannot be viewed in your region.",
  "Soup that is too hot.",
  "Spaghetti? Again?",
  "Spectacular abs.",
  "Spending my parent's hard-earned money.",
  "Singapore Girl.",
  'Staring at a painting and going "hmmmmmmm..."',
  "Still being a virgin.",
  "Stormtroopers.",
  "Strong female characters.",
  "Stunt doubles.",
  "Substitute teachers.",
  "Suicidal thoughts.",
  "Sunshine and rainbows.",
  "Swag.",
  "Sweet, sweet vengeance.",
  "Taking a minute to really unpack what Shakespeare is getting at in this scene.",
  "Taking off your shirt.",
  "Teaching a robot to love.",
  "Team building exercises.",
  "Teenage pregnancy.",
  "Telling a shitty story that goes nowhere.",
  "Terrorists.",
  "Testicular torsion.",
  "That thing that electrocutes your abs.",
  "The Singaporean Dream.",
  "The Chinese gymnastics team.",
  "The cool, refreshing taste of Coca-Cola®.",
  "The Donald Trump Seal of Approval.™",
  "The forbidden fruit.",
  "The Great Depression.",
  "The land of chocolate.",
  "The light of a billion suns.",
  "The Make-A-Wish Foundation.",
  "The Make-A-Wish® Foundation.",
  "The miracle of childbirth.",
  "The morbidly obese.",
  "The only gay person in a hundred kilometers.",
  "The past.",
  "The Russians.",
  "The Scouts.",
  "The screams...the terrible screams.",
  "The true meaning of Christmas.",
  "The unstoppable tide of Islam.",
  "The violation of our most basic human rights.",
  "The wifi password.",
  "The wonders of the Orient.",
  "The World of Warcraft.",
  "The wrath of Vladimir Putin.",
  "Throwing grapes at a man until he loses touch with reality.",
  "Tickling, even after he tells you to stop.",
  "Tiger Woods.",
  "Tiny terrorists",
  "Tom Cruise.",
  "Too much hair gel.",
  "Total control of the media.",
  "Tweeting.",
  "Viagra®.",
  "Vigilante justice.",
  "Vikings.",
  "Vladimir Putin.",
  "Vomiting into your girlfriend's handbag.",
  "Waiting till marriage.",
  "Waking up in big momma's arms.",
  "Wearing underwear inside-out to avoid doing laundry.",
  "Wet dreams.",
  "When you fart and a little bit comes out.",
  "Whining until you get your way.",
  "Wifely duties.",
  "Women of colour.",
  "Women voting.",
  "Words.",
  "World peace.",
  "Xenophobia.",
  "Yelling THERES A BOMB at boots in an airport terminal.",
  "Your mum.",
  "Your weird brother.",
  "14 cheeseburgers, 6 large fries, and a medium Sprite.",
  "Ariana Grande.",
  "Bad parenting.",
  "Becoming taller and stronger than Father.",
  "Becoming the president.",
  "Beer.",
  "Being adopted.",
  "Being dead.",
  "Being famous on YouTube.",
  "Being super serious right now.",
  "Big butt cheeks filled with poop.",
  "Big, juicy pimples.",
  "Big, slappy hands.",
  "Biting a rich person.",
  "Blasting my math teacher into the sun.",
  "Bleeding.",
  "Blossoming into a beautiful young man.",
  "Boobies.",
  "Burning books.",
  "Bursting into flames.",
  "Butt hair.",
  "Butts of all shapes and sizes.",
  "Cat pee.",
  "Cavities.",
  "Chunks.",
  "Cigarettes.",
  "Climate change.",
  "Coffee.",
  "Coming back from the dead.",
  "Completely drunk organizers.",
  "Covering myself with ketchup and mustard because I am a hot dog.",
  "Crab-walking from the toilet to get more toilet paper.",
  "Crying in the bathroom.",
  "Dad's famous poops.",
  "Dad's meatloaf.",
  "Debating cartoon logic",
  "Diarrhea.",
  "Doing karate.",
  "Dreaming about boys.",
  "Drinkig a whole bottle of Japanese whiskey.",
  "Drinking gasoline to see what it tastes like.",
  "Zoe Tay's acting career.",
  "Dying of old age.",
  "Eating a baby.",
  "Eating toenail clippings.",
  "Elegant party hats.",
  "Evil.",
  "Failure.",
  "Fake news.",
  "Farting a lot today.",
  "Fat stacks of cash.",
  "Feminist men.",
  "Getting a girlfriend.",
  "Getting a skull tattoo.",
  "Getting drunk.",
  "Getting kicked in the nuts.",
  "Getting married.",
  "Getting run over by a train.",
  "Getting struck in the toilet.",
  "Girly drinks",
  "Grandma panties.",
  "Grandpa.",
  "Ham.",
  "Happy Endings.",
  "Harry Potter.",
  "Having a baby.",
  "Having no friends.",
  "Having to pee so bad.",
  "Hogs.",
  "Horrible allergies.",
  "Hurting people's feelings.",
  "Idiots.",
  "Illegal drugs.",
  "Kisisng mom on the lips.",
  "Licking a used bandaid.",
  "Lighting stuff on fire.",
  "Literally ruining my life.",
  "My annoying sister.",
  "Never showering.",
];

const player1 = new Player("player1");
console.log(player1);
const player2 = new Player("player2");
console.log(player2);
const player3 = new Player("player3");
console.log(player3);
const player4 = new Player("player4");
console.log(player4);
const player5 = new Player("player5");
console.log(player5);

///////////////////////////////////////////////////
//PLAYER SELECTION
///////////////////////////////////////////////////

// const decidingPlayerText = document.querySelector("#decidingPlayerText");
// const newDecidingPlayerText = document.createElement("newText");
// newText.innerText = "`${playerName} decides the winning card";

const players = [player1, player2, player3, player4, player5];
// let answerers = [];
for (let i = 1; i <= 5; i++) {
  const decidingPlayer = players[i - 1];
  let answerers = [...players]; //[player2, player3, player4, player5]
  answerers.splice(i - 1, 1); //this prevents any change to original array
  console.log(`Deciding player is ${decidingPlayer.name}`);

  const startQuestion = document.querySelector(".dealquestion");
  startQuestion.addEventListener("click", getQuestionCard);

  const answerCard = document.querySelector(".answer-card");
  const answerQuestion = document.querySelector("#dealanswers"); //clicking the "DEAL ANSWER CARD BUTTON"
  answerQuestion.addEventListener("click", dealAnswerCards);

  function dealAnswerCards() {
    console.log("Answer cards button is working");
    document.querySelector(".beforedeal").className = "flex-container"; //changing the classname from "before deal" to "flex container" / answer card

    document.querySelectorAll(".answer-card");
    answerers.forEach((player) => insertAnswers(player));
    //insert innerHTML here
  }

  for (const player of answerers) {
    console.log(`One of the answerers is ${player.name}`); //player2
    insertAnswers(player); //generate answers after dealing
    // create button for submit (rmb e.preventDefault())
    // add event listener to button
    // push answerer's answer
  }
}

/////////////////////////////////////////////////////////////
//// QUESTIONS SETUP
/////////////////////////////////////////////////////////////

// const startQuestion = document.querySelector(".dealquestion");
// startQuestion.addEventListener("click", getQuestionCard);

// Deal new question card from question deck
function getQuestionCard() {
  // document.querySelector(".dealquestion").innerText = "GAME STARTED!";
  console.log("Start Game button is working");
  const selectedQuestionCard =
    questionCards[Math.floor(Math.random() * questionCards.length)];
  const p = document.createElement("p");
  p.innerText = selectedQuestionCard;
  p.className = "selectedQuestion";
  document.querySelector(".questionCard-text").innerText = p.innerText;
}

/////////////////////////////////////////////////////////////
//// ANSWERS SETUP
/////////////////////////////////////////////////////////////

// const answerCard = document.querySelector(".answer-card");
// const answerQuestion = document.querySelector("#dealanswers"); //clicking the "DEAL ANSWER CARD BUTTON"
// answerQuestion.addEventListener("click", dealAnswerCards);

// Deal answer cards to current player in sequence
// function dealAnswerCards() {
//   console.log("Answer cards button is working");
//   document.querySelector(".beforedeal").className = "flex-container"; //changing the classname from "before deal" to "flex container" / answer card

//   document.querySelectorAll(".answer-card");
//   insertAnswers();
//   //insert innerHTML here
// }

// Insert answers from answer deck to 5 answer cards

// function insertAnswers() {
// const selectedAnswerText =
//   answerCards.splice[Math.floor(Math.random() * answerCards.length)]; //mind the (0, 2....)
// const answerText1 = document.createElement("answercard1");
// answerText.innerText = selectedAnswerText;
// answerText.className = "selectedAnswer";
// document.querySelector(".answercard1-text").innerText = selectedAnswerText;
// }

//for one player
function insertAnswers(player) {
  player.playercards = []; //reset player cards for each round
  //got random text from answers
  const randomText = answers.splice(
    [Math.floor(Math.random() * answers.length)],
    5
  ); //getting random text
  //splice
  for (let i = 1; i <= 5; i++) {
    // GENERATING A CARD AUTOMATICALLY VIA JS
    // answerCard = create div
    // answerCard.id = player.name + "-" + i
    // add class
    // add innerText
    // append to DOM querySelector("#" + player.name)
    // addEventListener
    const answerCard = document.querySelector(`.answercard${i}`);
    console.log();
    answerCard.innerText = randomText[i - 1];
    player.playercards.push(randomText[i - 1]); //for array to find winner
    answerCard.addEventListener("click", saveChoice);
  }
  // answerCard.className = `answerCard${i + 1}`;
}

// let actualAnswers = []
// function submitAnswer(){
//   //save out player's choice
//   actualAnswers.push(temporaryChoice)
//   continue
// }

let temporaryChoice = "";
function saveChoice(e) {
  e.preventDefault();
  temporaryChoice = e.target.innerText;
}
