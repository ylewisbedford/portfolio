const copyEmailBtn = document.querySelector('#copy-email-btn');

copyEmailBtn.addEventListener('click', (event) => {
  const email = 'yobedford@gmail.com';
  navigator.clipboard.writeText(email);
  console.log('Email copied to clipboard');
  event.target.innerHTML = "Email copied";
});