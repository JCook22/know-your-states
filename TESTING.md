# Know Your States - Testing

## Validator Testing

The W3C validator was used to check all the HTML and CSS for the site. JSHint was used to check the Javascript.

### HTML

Aside from sections not having headings - which can be ignored - the HTML passed validation.
![html-validator](assets/images/html-validator.jpg)

### CSS

No issues were found in the CSS.
![css-validator](assets/images/css-validator.jpg)

### JS

JS Hint found no issues with the code.
![js-validator](assets/images/js-validator.jpg)

## Lighthouse Testing 

### Mobile

![mobile-lighthouse-test](assets/images/mobile-lighthousev2.jpg)

### Desktop

![desktop-lighthouse-test](assets/images/desktop-lighthouse.jpg)

## Manual Testing

### User Stories

#### First Time Visitor Goals

1. To test their current knowledge on the state capital cities of the USA.
    - The quiz area provides all the interactivity required, all 50 state capitals are included.

2. To find the quiz easy and intuitive to use.
    - The quiz layout is very simple and is designed so that first time users should be able to understand how it works at a glance.

    ![quiz-area](assets/images/quiz-area-user-stories.jpg)

3. To keep track of their score so they know how well they are doing.
    - The score counters provided allow a user to see how well they are doing before they finish the quiz.

4. To be able to reset the quiz if they want to try again.
    - The reset button is easy to find at the bottom of the quiz, so the user can reset whenever they like.

5. To skip questions they don't know the answer to.
    - The skip button is allows the user to skip questions up until the final question. It provides the user with the answer but adds to their incorrect score.

6. To have the correct answers shown on an incorrect answer, to help learn for next time.
    - Should the user supply an incorrect answer or skip a question they will be alerted of what the answer should have been.

    ![incorrect-alert](assets/images/feature-alert-box.jpg) 

#### Returning Visitor Goals

1. To try and beat their previous score.
    - Thanks to the score counter the user can attempt to beat their previous score. Unfortunately at this time there is no way to save your results to compare with.
    
    ![score-counter](assets/images/feature-score-counter.jpg)


2. To refresh their knowledge.
    - The quiz can be taken as many times as the user likes so it is helpful if they wish to improve or refresh their knowledge.

3. To answer the questions in a random order so it's better to revisit.
    - The quiz is always shuffled before it begins or when it is reset. This ensures that repeat users will still find it interesting and a challenge.

    ![randomised-order](assets/images/feature-randomised-order.jpg)

### Feature Testing

| Test Label                                 | Test Action                                  | Expected Outcome                                                                                | Test Outcome |
| ------------------------------------------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------ |
| Question blank before start                | Load the page                                | Question should be incomplete                                                                   | PASS         |
| Question should show after start           | Click play button                            | Question should be shown in full                                                                | PASS         |
| Question should match answer               | Submit correct answer                        | Question should match answer and increase score                                                 | PASS         |
| Randomised order                           | Start and reset quiz multiple times          | First question should almost always be different                                                | PASS         |
| Score counter correct increase             | Submit correct answer                        | Correct score should increase by 1                                                              | PASS         |
| Score counter incorrect increase           | Submit incorrect answer                      | Incorrect score should increase by 1                                                            | PASS         |
| Score counter skip incorrect increase      | Skip question                                | Incorrect score should increase by 1                                                            | PASS         |
| Play button question and buttons to appear | Click play button                            | Question; skip, reset and submit buttons should appear                                          | PASS         |
| Play button disappear after use            | Click play button                            | Play button should disappear                                                                    | PASS         |
| Submit button appear after start           | Click play button                            | Submit button should appear                                                                     | PASS         |
| Submit button correct answer               | Submit correct answer                        | Alert "Correct!" and increase correct score by 1                                                | PASS         |
| Submit button incorrect answer             | Submit incorrect answer                      | Alert "Unfortunately that was incorrect." show correct answer and increase incorrect score by 1 | PASS         |
| Submit button final answer correct         | Submit correct answer to final question      | Alert "Correct!" Your final score is (x)."                                                      | PASS         |
| Submit button final answer incorrect       | Submit incorrect answer to final question    | Alert "Unfortunately that was incorrect." show correct answer and final score                   | PASS         |
| Submit button input blank                  | Click submit with an empty input field       | Alert "Please enter you answer before you submit."                                              | PASS         |
| Skip button appear after start             | Click play button                            | Skip button should appear                                                                       | PASS         |
| Skip button disappear on final question    | Reach question 50 playing quiz               | Skip button should disappear                                                                    | PASS         |
| Skip button alert                          | Click skip button                            | Alert "You have clicked skip! The correct answer is (x)." and proceed to next question          | PASS         |
| Skip button incorrect score increase       | Click skip button                            | Incorrect score should increase by 1                                                            | PASS         |
| Reset button score counter                 | Click reset button after answering questions | Score counters should both reset to 0                                                           | PASS         |
| Reset button reshuffle                     | Click reset button                           | Question should change                                                                          | PASS         |
| Reset button appear after start            | Click play button                            | Reset button should appear                                                                      | PASS         |



#### Question Area

![question-area](assets/images/feature-question-area.jpg)
- Expected - The state in bold should change each time a new question is started.
- Testing - Will submit an answer to the question and see if the state changes.
- Result - The state changed and the new question appeared.

#### Randomised Order

![randomised-order](assets/images/feature-randomised-order.jpg)
- Expected - When resetting the quiz the order of the questions should change.
- Testing - Will reset the quiz and check that the question changes.
- Result - The quiz reset and started again from a different question.

#### Score Counter

![score-counter](assets/images/feature-score-counter.jpg)
- Expected - When the user answers a question correctly or incorrectly it will add to the score counter.
- Testing - Will answer 2 questions correctly and incorrecty.
- Result - The scores updated to show the new score of 2 correct answers and 2 incorrect answers.

#### Play Button

![play-button](assets/images/feature-play-button.jpg)
- Expected - When the user clicks play, the button will disappear and the quiz will begin. This will make the submit, reset and skip buttons all appear. The question will also appear in full.
- Testing - Will click play and ensure everything changes as expected.
- Result - The question appeared in full and the skip, reset and submit buttons all appeared.

#### Submit Button

![submit-button](assets/images/feature-submit-button.jpg)
- Expected - When the user clicks submit, the answer should be checked to see if it's correct, notify the user and update the score accordingly. 
- Testing - Will provide a correct answer,click submit and ensure the answer is checked, score updated and question changed.
- Result - The question changed, the correct tally increased by 1 and the quiz alerted that it was a correct answer.

#### Skip Button

![skip-button](assets/images/feature-skip-button.jpg)
- Expected - When a user clicks skip the quiz will alert them what the correct answer was, increase their incorrect score by 1 and move on to the next question.
- Testing - Will click skip on the first question and check that the everything changes as expected.
- Result - The quiz alerted with the correct answer, the incorrect score increased by 1 and the next question appeared.

#### Reset Button

![reset-button](assets/images/feature-reset-button.jpg)
- Expected - When the user clicks the reset button, the quiz should shuffle, restart and reset the score counters.
- Testing - Will click reset after answering a question.
- Result - The score counters reset to 0 and a new question appeared to start the quiz.

### Browser Compatibility

The site has been tested for compability with the following browsers:
- Google Chrome Version 124.0.6367.202 (Official Build) (64-bit)
- Mozilla Firefox Version 125.0.3 (64-bit)
- Microsoft Edge Version 124.0.2478.97 (Official build) (64-bit)

### Responsiveness Tests

The site has been tested for responsivity using developer tools for a wide range of sizes. From very small screens (320px) to very large screens (5120 x 2880px).