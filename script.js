let result = {
  "tag": "",
  "free": true,
  "role": false,
  "user": "rickypateldvbdhv",
  "email": "rickypateldvbdhv@gmail.com",
  "score": 0.48,
  "state": "undeliverable",
  "domain": "gmail.com",
  "reason": "invalid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": false,
  "did_you_mean": "",
  "format_valid": true
}
document.querySelector('.btn').addEventListener('click', async (e) => {
  e.preventDefault();
  // console.log("Button clicked");
  document.querySelector('.resultNew').innerHTML = `<img  width="123" src="img.svg" alt="img"></img>"`;
  let key = "ema_live_QjBV6gY6PAJ1GIwzzXnkPSeBRGPzngUnVNKKFZLR";
  let email = document.querySelector('#username').value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();

  let str = ``;
  for (let item of Object.keys(result)) {
      if (result[item] !== "" && result[item]) {
        str += `<div>${item}: ${result[item]}</div>`;
      }
    }
    document.querySelector('.resultNew').innerHTML = str;
});
