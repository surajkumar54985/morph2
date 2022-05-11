// function fetchData () {
// 	fetch("http://reqres.in/api/users")
// 	.then(response => {
// 		if(!response.ok) {
// 			throw Error("ERROR");
// 		}
// 		return response.json();
// 	})
// 	.then(data => {
// 		console.log(data.data);
// 		const html = data.data
// 		.map(user => {
// 			return `
// 				<div>
// 					<p><img src="${user.avatar}" alt="${user.first_name}"></p>
// 					<p>Name: ${user.first_name}</p>
// 					<p>Email: ${user.email}</p>
// 				</div>
// 			`;
// 		})
// 		.join("");
// 		console.log(html);
// 		document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});
// }

// fetchData();

// function fetchData () {
// 	fetch("https://www.bonhams.com/api/v1/lots/27708/?category=list&length=96&minimal=false&page=1")
// 	.then(response => {
// 		if(!response.ok) {
// 			throw Error("ERROR");
// 		}
// 		return response.json();
// 	})
// 	.then(data => {
// 		console.log(data.lots);
// 		var i=1;
// 		const html = data.lots
// 		.map(lot => {
// 			return `
// 			<div class="row">
// 				<div class="col-sm-4">
// 					<div class="panel panel-default">
// 						<div class="panel-body" style="height: 450px;">
// 							<div class="row">
// 								<div class="col-md-12 text-center"><img src="${lot.image.url}" class="img-responsive" width="300px" alt="${lot.image.alt}"></div>
// 								<div class="col-md-12 text-center"><h3>${i++}</h3><h6>${lot.styled_title}</h6></div>
// 								<div class="col-md-12 text-center">Price : ${lot.high_low_estimates.prices[1].currency} ${lot.high_low_estimates.prices[1].high}</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			`;
// 		})
// 		.join("");
// 		console.log(html);
// 		document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});
// }

// fetchData();

function fetchData () {
	fetch("https://www.bonhams.com/api/v1/lots/27708/?category=list&length=429&minimal=false&page=1")
	.then(response => {
		if(!response.ok) {
			throw Error("ERROR");
		}
		return response.json();
	})
	.then(data => {
		console.log(data.lots);
		var i=1;
		let data1="";
		const html = data.lots
		.map(lot => {
			data1+= `
					<div class="card">
					<div class="row">
					<a href="${lot.url}"><div class="col-lg-12 text-center"><img src="${lot.image.url}" class="img-responsive" width="300px" alt="${lot.image.alt}"></div></a>
							<div class="col-lg-12 text-center"><h3>${i++}</h3><h6>${lot.styled_title}</h6></div>
							<div class="col-lg-12 text-center">Price : ${lot.high_low_estimates.prices[1].currency} ${lot.high_low_estimates.prices[1].high}</div>
						</div>
					</div>
			`;
		})
		
		document.getElementById("cards").innerHTML=data1;
		// .join("");
		// console.log(html);
		// document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
	})
	.catch(error => {
		console.log(error);
	});
}

fetchData();