const URL_PARAMS = new URLSearchParams(window.location.search);
const CODE = URL_PARAMS.get('code');

// Show an element
const show = (selector) => {
  document.querySelector(selector).style.display = 'block';
};

// Hide an element
const hide = (selector) => {
  document.querySelector(selector).style.display = 'none';
};

if (CODE) {
  hide('.content.unauthorized');
  show('.content.authorized');
}
