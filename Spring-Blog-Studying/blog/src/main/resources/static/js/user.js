let index = {
		init: function() {
			$("#btn-save").on("click", ()=>{ // 화살표 함수를 쓰는 이유 : this를 바인딩 하기 위함
				this.save();
			});
			$("#btn-update").on("click", ()=>{
				this.update();
			});
		},

		save: function() {
			// alert("user의 save함수 호출됨.");
			let data = {
					username: $("#username").val(),
					password: $("#password").val(),
					email: $("#email").val()
			};
			
			// console.log(data);
			
			// ajax 호출시 default가 비동기 호출
			// ajax 통신을 이용해서 3개의 데이터를 JSON으로 변경하여 insert 요청
			// 회원가입 수행 요청 // 성공시 done 실행 // 실패시 fail 실행
			// ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 Java 오브젝트로 변환해준다.
			$.ajax({
				type: "POST",
				url: "/auth/joinProc",
				data: JSON.stringify(data), // HTTP body 데이터
				contentType: "application/json; charset=utf-8", // body 데이터가 어떤 타입인지
				dataType: "json" // 요청을 통해 서버에서 응답이 왔을 때 json이라면 -> javascript 오브젝트로 변경
			}).done(function(resp) {
				alert("회원가입이 완료되었습니다.");
				// alert(resp)
				location.href = "/";
			}).fail(function(error) {
				alert(JSON.stringify(error));
			}); 
		},
	
		update: function() {
		
			let data = {
					id: $("#id").val(),
					username: $("#username").val(),
					password: $("#password").val(),
					email: $("#email").val()
			};
			
			$.ajax({
				type: "PUT",
				url: "/user",
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8", 
				dataType: "json" 
			}).done(function(resp) {
				alert("회원수정이 완료되었습니다.");
				location.href = "/";
			}).fail(function(error) {
				alert(JSON.stringify(error));
			}); 
		}
}

index.init();