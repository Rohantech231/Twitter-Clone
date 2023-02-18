const tweets = [
  {
    username: "john_doe",
    message: "Just had a great day at the beach! ☀️🏖️ #relaxation",
    date: "2023-02-18",
  },
  {
    username: "jane_doe",
    message: "Excited to start my new job tomorrow! 🎉 #career",
    date: "2023-02-17",
  },
];

const tweetList = document.getElementById("tweets");

tweets.forEach((tweet) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <span>${tweet.username}</span>
      <span>${tweet.date}</span>
    </div>
    <p>${tweet.message}</p>
  `;
  tweetList.appendChild(li);
});
