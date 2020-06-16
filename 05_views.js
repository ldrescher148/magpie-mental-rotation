// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

* trials: int - the number of trials this view will appear
* name: string

*Optional properties
* buttonText: string - the text on the button (default: 'next')
* text: string - the text to be displayed in this view
* title: string - the title of this view

* More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views
  
  */
  
  // Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Mental Rotation',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome!
  <br />
    <br />
    Thank you for participating in this study. The experiment is called "Mental Rotation". Please take about 10 minutes to give the experiment your full attention. 
    <br />
    <br />
    Enjoy!`,
  buttonText: 'tap to read the instructions'
});

// For most tasks, you need instructions views
/*const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This is a sample instructions view.
  <br />
    <br />
    Tell your participants what they are to do here.`,
  buttonText: 'go to trials'
});*/

const instructions_practice = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_practice',
    title: 'How does it work?',
    text:  `The first 12 trials are practice trials where you will get to know the procedure. In each trial you will see two either identical or slightly differnt 3-dimensional objects. The representations in each trial are rotated along the horizontal axis either 50° or 150°. Your task is to judge whether the two objects are the same or different by pressing "F" for "same" or "J" for "different". 
           <br />
           During the practice you will see whether you were right or wrong. You will not see that in the main trail.
           <br />
            <br />
            "F" = Same,      "J" = Different`,
    picture: "images/practice/13_150_same.jpg",
    buttonText: 'start practice'
});

const instructions_main = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_main',
    title: 'Get ready for the main experiment',
    text:  `Great! Now you are familiar with the procedure. Please remember that you will not see whether you chose the correct answer or not. The main task begins by pressing the button below!
            <br />
            <br />
           Please strive to optimize speed and accuracy! `,
    buttonText: 'Tap to begin'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.',
  age_question: 'How old are you?',
  gener_question: 'Gender',
  gender_male: 'male',
  gender_female: 'female',
  gender_other: 'other',
  languager_question: 'what are your native languages?'
  
  // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
   //age_question: 'Alter',
   //gender_question: 'Geschlecht',
   //gender_male: 'männlich',
   //gender_female: 'weiblich',
   //gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
  });

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


//const key_press = custom_views.keypress_rotation_practice({
  //trials: 5,
  //name: 'main',
  //trial_type: 'main',
  //question: "same or different?",
  //key1: 'f',
  //key2: 'j',
  //f: 'same',
  //j: 'different',
//});

// Here, we initialize a keyPress task
const practice = custom_views.keypress_rotation_practice({
    trials: 12,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    data: _.shuffle(practice_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});


const main = custom_views.keypress_rotation_main({
    trials: 48,
    name: 'main',
    trial_type: 'main',
    pause: 250,
    data: _.shuffle(main_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
