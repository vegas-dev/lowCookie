/**
 * --------------------------------------------------------------------------
 * Module: VGLawCookie
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */

import Cookies from "./cookie/js.cookie.mjs";

class VGLawCookie {
	constructor(arg = {}) {
		this.container = document.getElementById('vg-lawCookie');

		let params = {
			content: {
				text: {
					default: 'Используя данный сайт, вы даете согласие на использование файлов cookie.',
					btnSuccess: 'Хорошо',
					btnMore: 'Подробнее'
				},
				btn: {
					classes: ['btn', 'btn-primary']
				},
			},
			privacyLink: '',
			enableCookie: false,
			cookie: {
				name: 'lawCookie',
				value: 'yes',
				attributes: {}
			}
		};

		this.settings = mergeDeep(params, arg);

		this.init();

		/**
		 * @param objects
		 * @returns {*}
		 */
		function mergeDeep(...objects) {
			const isObject = obj => obj && typeof obj === 'object';

			return objects.reduce((prev, obj) => {
				Object.keys(obj).forEach(key => {
					const pVal = prev[key];
					const oVal = obj[key];

					if (Array.isArray(pVal) && Array.isArray(oVal)) {
						prev[key] = pVal.concat(...oVal);
					}
					else if (isObject(pVal) && isObject(oVal)) {
						prev[key] = mergeDeep(pVal, oVal);
					}
					else {
						prev[key] = oVal;
					}
				});

				return prev;
			}, {});
		}
	}

	init() {
		let _this = this,
			getCookie = _this.storage(true);

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
						<a href="#" data-lc-confirm>${_this.settings.content.text.btnSuccess}</a>
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
				_this.storage(false, true);

				return false;
			};
		}
	}

	storage(get = false, set = false) {
		let _this = this,
			cookie_name = _this.settings.cookie.name,
			cookie_value = _this.settings.cookie.value,
			cookie_attr = _this.settings.cookie.attributes,
			storage = null,
			isCookie = _this.settings.enableCookie;

		if (isCookie) {
			storage = Cookies;
		} else {
			storage = localStorage;
		}

		if (get) {
			if (isCookie) {
				return storage.get(cookie_name);
			} else {
				return storage.getItem(cookie_name);
			}
		} else if (set) {
			if (isCookie) {
				return storage.set(cookie_name, cookie_value, cookie_attr);
			} else {
				return storage.setItem(cookie_name, cookie_value);
			}
		}
	}

	privacyLink() {
		let str = '';

		if (this.settings.privacyLink) {
			str `<a href="${this.settings.privacyLink}" data-lc-more>${this.settings.content.text.btnMore}</a>`
		}

		return str;
	}

	clear(all = true) {
		let _this = this;

		if (all) {
			Cookies.remove(_this.settings.cookie.name);
			localStorage.clear();
		} else {
			if (_this.settings.enableCookie) {
				Cookies.remove(_this.settings.cookie.name);
			} else {
				localStorage.clear();
			}
		}

		console.log(Cookies);
		console.log(localStorage);

		return false;
	}
}

export default VGLawCookie;
