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
				text: 'Используя данный сайт, вы даете согласие на использование файлов cookie.',
				btnAccept: {
					classes: ['btn', 'btn-primary'],
					text: 'Принять',
				},
				btnMore: {
					classes: ['btn', 'btn-link'],
					text: 'Подробнее',
					link: '/privacy-policy'
				}
			},
			storage: 'local', // or cookie
			enableLinkMore: false,
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
						${_this.settings.content.text}
					</p>
					<p class="btn-area">
						<button data-lc-confirm>${_this.settings.content.btnAccept.text}</button>
						${_this.setLinkMore()}
					</p>
				</div>
			`);

			if (_this.settings.content.btnAccept.classes.length) {
				let btn = _this.container.querySelector('[data-lc-confirm]');

				for (let cl of _this.settings.content.btnAccept.classes) {
					btn.classList.add(cl);
				}
			}

			if (_this.settings.content.btnMore.classes.length) {
				let btn = _this.container.querySelector('[data-lc-more]');

				for (let cl of _this.settings.content.btnMore.classes) {
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
			isCookie = _this.settings.storage === 'cookie';

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

	setLinkMore() {
		let _this = this,
			str = '';

		if (_this.settings.enableLinkMore) {
			str = `<a href="${_this.settings.content.btnMore.link}" data-lc-more>${_this.settings.content.btnMore.text}</a>`;
		}

		return str;
	}

	static clear(all = true) {
		const _this = new this;

		if (all) {
			Cookies.remove(_this.settings.cookie.name);
			localStorage.clear();
		} else {
			if (_this.settings.storage === 'cookie') {
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
