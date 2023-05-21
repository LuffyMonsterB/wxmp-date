const baseUrl = 'http://10.22.148.111:8080'
const request = ({url = '', method = 'GET', data = {}}) => {
	let header = {}
	try {
		let token = uni.getStorageSync('token');
		if (token) {
			header = {
				"Authorization": 'Bearer ' + token
			}
		}
	} catch (e) {}
	return new Promise((resolve, reject) => {
		uni.request({
			header: header,
			url: baseUrl + url,
			method: method,
			data: data,
			dataType: 'json',
		}).then((response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			let [error, res] = response;
			resolve(res.data);
		}).catch(error => {
			reject(error)
		})
	});
}

export function login(data) {
	return request({
		url: `/user/wxlogin`,
		method: "POST",
		data: {...data}
	})
}

export function searchByWechatOrPhone(input) {
	return request({
		url: `/relation/search/${input}`,
		method: "GET"
	})
}

export function getFollowedList() {
	return request({
		url: `/relation/followedlist`,
		method: "GET"
	})
}

export function getFollowList() {
	return request({
		url: `/relation/followlist`,
		method: "GET"
	})
}

export function getInvitemeList() {
	return request({
		url: `/relation/invitemelist`,
		method: "GET"
	})
}
