const notificationBtn = document.querySelector("#notification__btn");
const notificationMenu = document.querySelector("#notification-menu");
const notificMenuCloseBtn = document.querySelector("#notification__close-btn");

notificationBtn.addEventListener('click', e => {
	e.preventDefault();
	notificationMenu.classList.toggle('active');
});

notificMenuCloseBtn.addEventListener('click', e => {
	notificationMenu.classList.remove('active');
});


const notificationLinks = document.querySelectorAll(".notification__link");
const notificationPopup = document.querySelector("#notification-popup");
const notificationPopupLayer = document.querySelector("#notification-popup__layer");
const notificationCloseBtn = document.querySelector("#notification-popup__close-btn");

notificationLinks.forEach(notificationLink => {
	notificationLink.addEventListener('click', e => {
		e.preventDefault();
		notificationPopup.classList.add('notification-popup_active');
		notificationPopupLayer.classList.add('notification-popup__layer_active');
	});
});

notificationPopupLayer.addEventListener('click', e => {
	e.preventDefault();
	notificationPopup.classList.remove('notification-popup_active');
	notificationPopupLayer.classList.remove('notification-popup__layer_active');
});

notificationCloseBtn.addEventListener('click', e => {
	e.preventDefault();
	notificationPopup.classList.remove('notification-popup_active');
	notificationPopupLayer.classList.remove('notification-popup__layer_active');
});