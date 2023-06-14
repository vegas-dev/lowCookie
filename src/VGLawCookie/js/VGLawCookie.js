/**
 * --------------------------------------------------------------------------
 * Module: VGLawCookie
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */

import Cookies from "./cookie/js.cookie.mjs";

class VGLawCookie {
	constructor(arg) {
		this.container = document.getElementById('vg-lawCookie');

		this.settings = Object.assign({
			attributes: {},
			content: {
				text: {
					default: 'Используя данный сайт, вы даете согласие на использование файлов cookie.',
					btn1: 'Хорошо',
					btn2: 'Подробнее'
				},
				btn: {
					classes: ['btn', 'btn-primary']
				},
			},
			privacyLink: '',
		}, arg);

		this.init();
	}

	privacyLink() {
		if (this.settings.privacyLink) {
			return `<a href="${this.settings.privacyLink}" data-lc-more>${this.settings.content.text.btn2}</a>`
		}
		return ''
	}

	init() {
		let _this = this,
			getCookie = Cookies.get('lawCookie');

		if (!_this.container) {
			_this.container = document.createElement('div');

			_this.container.setAttribute('id', 'vg-lawCookie');
			_this.container.classList.add('vg-lawCookie');

			_this.container.insertAdjacentHTML('beforeend', `
				<div class="vg-lawCookie--content">
					<p class="text-content">
						${_this.settings.content.text.default}
					</p>
					<p class="btn-area">
						<a href="#" data-lc-confirm>${_this.settings.content.text.btn1}</a>
						${_this.privacyLink()}
					</p>
				</div>
			`);

			if (_this.settings.content.btn.classes.length) {
				let btn = _this.container.querySelector('[data-lc-confirm]');

				for (let cl of _this.settings.content.btn.classes) {
					btn.classList.add(cl);
				}
			}

			document.body.appendChild(_this.container);
		}

		if (!getCookie) {
			setTimeout(() => {
				_this.container.classList.add('show');
			}, 500);

			let btnConfirm = _this.container.querySelector('[data-lc-confirm]');
			btnConfirm.onclick = function () {
				_this.container.classList.remove('show');
				Cookies.set('lawCookie', 'yes', _this.settings.attributes);

				return false;
			};
		}
	}
}

export default VGLawCookie;