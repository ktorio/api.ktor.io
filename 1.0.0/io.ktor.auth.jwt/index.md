---
title: io.ktor.auth.jwt - 
layout: api
---



## Package io.ktor.auth.jwt

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-j-w-t-authentication-provider/index.html">JWTAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JWTAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.auth/-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a></code></div>

JWT authentication provider that will be registered with the specified <a href="../io.ktor.auth/-authentication-provider/name.html">name</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-j-w-t-credential/index.html">JWTCredential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JWTCredential</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.auth/-credential.html"><span class="identifier">Credential</span></a></code></div>

Represents a JWT credential consist of the specified <a href="-j-w-t-credential/payload.html">payload</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-j-w-t-principal/index.html">JWTPrincipal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JWTPrincipal</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.auth/-principal.html"><span class="identifier">Principal</span></a></code></div>

Represents a JWT principal consist of the specified <a href="-j-w-t-principal/payload.html">payload</a>


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="jwt.html">jwt</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.auth/-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">jwt</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwt(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.jwt.JWTAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwt(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.jwt.JWTAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-j-w-t-authentication-provider/index.html"><span class="identifier">JWTAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs JWT Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="jwt-authentication.html">jwtAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.auth/-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">jwtAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwt.JWTVerifier, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/jwtVerifier">jwtVerifier</span><span class="symbol">:</span>&nbsp;<span class="identifier">JWTVerifier</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwt.JWTVerifier, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwt.JWTVerifier, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="-j-w-t-credential/index.html"><span class="identifier">JWTCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../io.ktor.auth/-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.auth/-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">jwtAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwk.JwkProvider, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/jwkProvider">jwkProvider</span><span class="symbol">:</span>&nbsp;<span class="identifier">JwkProvider</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwk.JwkProvider, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/issuer">issuer</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwk.JwkProvider, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwk.JwkProvider, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="-j-w-t-credential/index.html"><span class="identifier">JWTCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../io.ktor.auth/-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
