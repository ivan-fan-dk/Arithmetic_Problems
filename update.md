# Version update (v.MAJOR.MINOR.PATCH)
Note: From v.1.4.0, application will follow **[semantic versioning 2.0.0](https://semver.org/)**.
## v.1.5.1 (2024-01-24)
- **NEW FEATURE**: **Vectors** questions are added to the website.
- UX: Whitespaces from both ends of user's input are ignored automatically.
- UX: `theme-color` is added to `meta` tag, so that the color of the address bar in mobile devices will be visible.
- For developer: `imgResponse` function is added. `stylezh.css` is simplified.
## v.1.5.0 (2023-12-20)
- **NEW FEATURE**: **Unit conversion** questions are added to the website. Unit types includes **length, area, volume, mass, time, speed**.
- Scientific notation is supported.
- Minor design changes.
- **print beautifully** function is not removed, but the hint on the webpage is removed.
- For developer: Helper functions `randomInRange`, `randomInClosedRange`, `randomIntInRange`, `randomIntInClosedRange`, `randomChoice` are added.
- Lesson learned: Math calculation in JavaScript is not accurate. For example, `71.6*360*10` is not equal to `257760`. 
## v.1.4.12 (2023-12-19)
- Name change: **Regnestykker** is changed to **Færdighedsregning**.
- UX: Automatically focus on the first question after clicking *Start* button.
- UX: Automatically focus on **time stop** and afterwards **Assess answer** after finishing all questions in **Time Trial Mode**.
- Design: while focusing on a textfield, the textfield will be highlighted with black outline.
- Design: All scroll behavior is set to `smooth`.
## v.1.4.11 (2023-11-19)
- Design: New logo (rounded corners) and favicon.
## v.1.4.10 (2023-09-16)
- Design: Breathing light for title's box-shadow.
## v.1.5.0-alpha (2023-09-10)
> [!NOTE]
> This version is available and can be visited at [https://arithmetic.neocities.org/preview/](https://arithmetic.neocities.org/preview/).
- Change syntax without changing the meaning of the code.
- Add **Vectors** calculation.
- Known bugs:
    - Answers like `2,-3` are still not accepted in **Vectors** calculation.
    - No link created to get access to preview website from stable version currently.
    - Need to update **[difficulty.md](difficulty.md)**.
    - Ugly view when equations get longer.
## v.1.4.9 (2023-08-22)
- Issue fixed: iPhone users' numeric keypad does not have a minus sign, so '00' is used when users want to get a minus sign. (Thanks to the feedback from Vincent's family)
- Add missing meta infomation (`og:image`, `title`) on webpages.
## v.1.4.8 (2023-08-16)
- Design: Better style on mobile devices.
## v.1.4.7 (2023-08-14)
- Design: Tailored content is shown based on browser's language settings.
- Design: Create `./da/` to comply with **Language Code** standards, but the subsite will be redirected to `./dk/`.
## v.1.4.6 (2023-08-13)
- Design: Add animations.
- Issue fixed: Cookies between different language website do not conflict.
## v.1.4.5 (2023-08-11)
- Issue fixed: **[Markup Validation Service](https://validator.w3.org/)** is used to check possible errors.
- Issue fixed: Fix the problem where favicon is not shown in _dk_ and _zh_ version.
## v.1.4.4 (2023-08-11)
- Performance: Create minified files for every html and javascript by using vscode extension **[MinifyAll](https://marketplace.visualstudio.com/items?itemName=josee9988.minifyall)**.
## v.1.4.3 (2023-08-10)
- Issue fixed: Can handle not-common-written fraction input like "1/-2", "-1/-2". Can detect error like "-/2", "-2/-", "../.." etc.
## v.1.4.2 (2023-08-09)
- Issue fixed: Display negative fraction correctly.
- Design: Narrow margin for #github and #currentTime.
## v.1.4.1 (2023-08-09)
- v.1.3.0 is added in Navigation Bar. Some minor updates or patches are deleted from Navigation Bar.
- Add variable **currentVersion**.
- Delete the unnecessary.
## v.1.4.0 (2023-08-08)
- Functionaility: Press and hold ArrowUp key (&#11014;) or ArrowDown key (&#11015;) to display your answer beautifully (LaTeX supported).&#128516;
- v.1.3.0 is temporarily not added in Navigation Bar.
## v.1.3.0 (2023-08-07)
- Add **Quadratic equation**. Rearrange static folders and css files.
## v.1.2.0 (2023-08-03)
- Add **linear equation**
- Add **[difficulty.md](difficulty.md)**.
## v.1.1.4 (first on 2023-07-28)
- Introduce **danish version**. 
- When "Enter" is pressed on one textfield, it will move to the next textfield.
- When "Shift + Enter" is pressed on one textfield, it will move to the previous textfield.
- Adjust difficulties.
- Rewrite code in "multiplication" such that no questions like "one times some number" or "zero times some number" exist more than once.
- Rewrite code in "addition" such that "zero plus some number" exist higest once.
- In the easiest two difficulty levels in "Fraction(+-)", only fractions with the same denominator are generated.
- Add confetti (Thanks to **catdad**'s project. Link to the project [https://github.com/catdad/canvas-confetti](https://github.com/catdad/canvas-confetti))
## v.1.1.3 (first on 2023-07-22)
- Add sponsorship and Paypal donation links on the webpage.
- Eliminate negative results for subtraction and fraction subtraction when it comes to "Beginner" and "Easy" mode.
- Split fraction calculation into fraction(+-) and fraction(/*).
- Adjust difficulty for fraction calculations.
## v.1.1.2 (first on 2023-07-17)
- Enable functionality to take a peek at the answers by right clicking on a text field. 
- Correct severe errors and improve algorithms.
- Introduce **Chinese-Simplified version**.
## v.1.1.1
- Make a navigation menu of older versions.
- Extend expiration for cookies to 30 days.
## v.1.1.0 (first on 2023-07-12)
- Add **Time Trial Mode** with timer
- Redesign webpage
## v.1.0.3 (2023-07-12)
- Increase accessibility on mobile devices
## v.1.0.2 (2023-07-08)
- Add cookies and score evaluation
## v.1.0.1 (2023-07-06)
- Increase accessibility
## v.1.0.0 (2023-07-06)
- Original
