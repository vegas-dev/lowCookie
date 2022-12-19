/**
 * --------------------------------------------------------------------------
 * Module: VGLawCookie
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */

import Cookies from "./cookie/js.cookie.mjs";

class VGLawCookie {
	constructor (arg) {
		this.container = document.getElementById('vg-lawCookie');

		if (!this.container) {
			console.error("Товарищ! Не найдена разметка под куки!");
			return false;
		}

		this.settings = Object.assign({}, arg);

		this.init();
	}

	init() {
		let _this = this,
			getCookie = Cookies.get('lawCookie');

		if (!getCookie) {
			setTimeout(() => {
				_this.container.classList.add('show');
			}, 500);

			let btnConfirm = _this.container.querySelector('[data-ls-confirm]');
			btnConfirm.onclick = function () {
				_this.container.classList.remove('show');
				Cookies.set('lawCookie', 'yes');

				return false;
			};
		}
	}
}

function onReady() {
	new VGLawCookie();
}

document.addEventListener("DOMContentLoaded", onReady);

export default VGLawCookie;