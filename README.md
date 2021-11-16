
### Reproduction link

https://swiper-lazy-load-images-react-heavy-cpu-usage.vercel.app/

https://github.com/aynzad/swiper-lazy-load-images-react-heavy-cpu-usage

### Bug description

When Swiper with Lazy Images module is used, CPU usage is always high on the page even when there is no activity.

There will be a major issue when a page contains a lot of sliders using Swiper with lazy images that are using a lot of CPU power (in Chrome's Task Manager) and `Style recalcs / sec`, even when there is no activity.

### Expected Behavior

On basic usage like pagination and scrolling, CPU usage and `Style recalcs / sec` should not be noticeable heavy.
On idle (no activity) there should be minimum CPU usage with zero `Style recalcs / sec`

<img width="976" alt="Screen Shot 2021-11-16 at 4 28 01 PM" src="https://user-images.githubusercontent.com/3133497/141990302-66dd2910-7aa6-4c1d-9ed9-d4d0ffc8f9f8.png">



### Actual Behavior

On basic usage like pagination and scrolling, CPU usage and `Style recalcs / sec` are noticeable heavy.
On idle (no activity) there is heavy CPU usage with continuously changing `Style recalcs / sec`


<img width="975" alt="Screen Shot 2021-11-16 at 4 26 30 PM" src="https://user-images.githubusercontent.com/3133497/141989413-dc868578-2f2b-48e1-b3b3-8ae13c693bc5.png">




### Swiper version

7.2.0

### Platform/Target and Browser Versions

macOS 12.0.1, Chrome 92.0.45, Safari 15.1 

--------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
