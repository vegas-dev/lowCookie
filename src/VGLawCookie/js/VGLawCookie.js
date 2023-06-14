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

		this.settings = Object.assign({
			attributes: {},
			content: {
				text: {
					default: 'Наш сайт использует файлы «cookie» для удобства пользования веб-сайтом. «Cookie» представляют собой небольшие файлы, содержащие информацию о предыдущих посещениях веб-сайта. Продолжая использовать наш сайт, вы даете согласие на их обработку.',
					btn1: 'Я согласен(а)',
					btn2: 'Подробнее'
				},
				btn: {
					classes: ['btn', 'btn-primary']
				},
				lineClamp: {
					height: 48,
				}
			}
		}, arg);

		this.init();
	}

	init() {
		let _this = this,
			getCookie = Cookies.get('lawCookie');

		if (!_this.container) {
			_this.container = document.createElement('div');

			_this.container.setAttribute('id', 'vg-lawCookie');
			_this.container.classList.add('vg-lawCookie');

			_this.container.insertAdjacentHTML('beforeend',`
				<div class="vg-lawCookie--content">
					<p class="text-content" style="height: ${_this.settings.content.lineClamp.height}px">
						${_this.settings.content.text.default}
					</p>
					<p class="btn-area">
						<a href="#" data-lc-confirm>${_this.settings.content.text.btn1}</a>
						<a href="#" data-lc-more>${_this.settings.content.text.btn2}</a>
					</p>
				</div>
			`);

			if (_this.settings.content.btn.classes.length) {
				let btn = _this.container.querySelector('[data-lc-confirm]');
				let btn2 = _this.container.querySelector('[data-lc-more]');

				for (let cl of _this.settings.content.btn.classes) {
					btn.classList.add(cl);
				}

				btn2.onclick = (e) => {
					e.preventDefault();
					let text = document.querySelector('.text-content');

					text.style.height = `${text.scrollHeight}px`;
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