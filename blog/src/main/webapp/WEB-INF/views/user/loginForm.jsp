<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ include file="../layout/header.jsp"%>

<div class="container" >
	<form action="/auth/loginProc" method="POST">
		<div class="form-group">
			<label for="username">Username</label> 
			<input type="text" name="username" class="form-control" placeholder="Enter username" id="username">
		</div>
		<div class="form-group">
			<label for="pwd">Password</label> 
			<input type="password" name="password" class="form-control" placeholder="Enter password" id="password">
		</div>
			<button id="btn-login" class="btn btn-primary">로그인</button>
	</form>

</div>
<%@ include file="../layout/footer.jsp"%>
