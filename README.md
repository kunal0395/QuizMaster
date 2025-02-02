# Quiz App

A dynamic and interactive quiz application built with React that allows users to answer multiple-choice questions within a time limit. The app automatically submits the quiz when time runs out and provides instant feedback.

## 🚀 Features

- ⏳ **Timer**: Counts down from the quiz duration and turns red when less than 60 seconds remain.
- ✅ **Auto-Submit**: Automatically submits the quiz when the timer reaches 0.
- 📖 **Multiple-Choice Questions**: Users can select an answer from the given options.
- 🎯 **Instant Feedback**: Shows correct and incorrect answers after submission.
- 📊 **Pagination**: Allows users to navigate between questions.
- 🔄 **Restart Option**: Users can retake the quiz after submission.
- 🏠 **Home Navigation**: Redirects users back to the homepage.

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000
   ```
5. All the necessary content like assets, videos of application:
   ```
   https://drive.google.com/drive/folders/1hrfZAyC9NGAU8rpij-OimZQQv3N1n_nr
   ```

## 🛠 Technologies Used

- React.js
- Tailwind CSS
- React Router
- React Paginate

## 📌 How to Use

1. Start the quiz by selecting answers for each question.
2. Keep an eye on the **timer** (turns red at 59 seconds).
3. Click **Submit Quiz** or wait for auto-submission when time runs out.
4. View your **score** and correct answers.
5. Choose to **review answers**, **restart**, or go **home**.

## 📜 Folder Structure

```
quiz-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Greetings.jsx
│   │   ├── Navbar.jsx
│   │   ├── QuizCategory.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   ├── App.js
│   ├── index.js
│   ├── main.js
│   |── index.css
├── package.json
├── README.md
```

## 🚀 Deployment

To deploy the app, you can use:

```sh
npm run build
```

Then, host the `build/` directory on **Netlify, Vercel, or GitHub Pages**.

## 📝 License

This project is licensed under the **MIT License**.

## 📬 Contact

For any issues or feature requests, feel free to open an **issue** or reach out via email: `kp3244510@gmail.com`
