---
title: Authentication.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">Authentication</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Authentication configuration

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication.Configuration$<init>(kotlin.collections.List((io.ktor.auth.AuthenticationProvider)))/providers">providers</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">)</span></code></div>

Authentication configuration


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="provider.html">provider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">provider</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication.Configuration$provider(kotlin.String, kotlin.Function1((io.ktor.auth.AuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.Authentication.Configuration$provider(kotlin.String, kotlin.Function1((io.ktor.auth.AuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register a provider with the specified <a href="provider.html#io.ktor.auth.Authentication.Configuration$provider(kotlin.String, kotlin.Function1((io.ktor.auth.AuthenticationProvider, kotlin.Unit)))/name">name</a> and <a href="provider.html#io.ktor.auth.Authentication.Configuration$provider(kotlin.String, kotlin.Function1((io.ktor.auth.AuthenticationProvider, kotlin.Unit)))/configure">configure</a> it


</td>
</tr>
<tr>
<td markdown="1">

<a href="register.html">register</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">register</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.Authentication.Configuration$register(io.ktor.auth.AuthenticationProvider)/provider">provider</span><span class="symbol">:</span>&nbsp;<a href="../../-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register the specified <a href="register.html#io.ktor.auth.Authentication.Configuration$register(io.ktor.auth.AuthenticationProvider)/provider">provider</a>


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../basic.html">basic</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">basic</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basic(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.BasicAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basic(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.BasicAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-basic-authentication-provider/index.html"><span class="identifier">BasicAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs Basic Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../basic-authentication.html">basicAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">basicAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basicAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basicAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="../../-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../digest.html">digest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">digest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digest(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.DigestAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digest(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.DigestAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-digest-authentication-provider/index.html"><span class="identifier">DigestAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs Digest Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../digest-authentication.html">digestAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">digestAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digestAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, kotlin.Function1((kotlin.String, java.security.MessageDigest)), kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"ktor"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digestAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, kotlin.Function1((kotlin.String, java.security.MessageDigest)), kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/digestAlgorithm">digestAlgorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"MD5"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digestAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, kotlin.Function1((kotlin.String, java.security.MessageDigest)), kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/digesterProvider">digesterProvider</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/MessageDigest.html"><span class="identifier">MessageDigest</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ MessageDigest.getInstance(it) }<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digestAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, kotlin.Function1((kotlin.String, java.security.MessageDigest)), kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/userNameRealmPasswordDigestProvider">userNameRealmPasswordDigestProvider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../form.html">form</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">form</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$form(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.FormAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$form(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.FormAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-form-authentication-provider/index.html"><span class="identifier">FormAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs Form Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../form-authentication.html">formAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">formAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$formAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, io.ktor.auth.FormAuthChallenge, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/userParamName">userParamName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"user"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$formAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, io.ktor.auth.FormAuthChallenge, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/passwordParamName">passwordParamName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"password"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$formAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, io.ktor.auth.FormAuthChallenge, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/challenge">challenge</span><span class="symbol">:</span>&nbsp;<a href="../../-form-auth-challenge/index.html"><span class="identifier">FormAuthChallenge</span></a>&nbsp;<span class="symbol">=</span>&nbsp;FormAuthChallenge.Unauthorized<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$formAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, io.ktor.auth.FormAuthChallenge, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="../../-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.auth.jwt/jwt.html">jwt</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">jwt</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwt(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.jwt.JWTAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwt(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.jwt.JWTAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.auth.jwt/-j-w-t-authentication-provider/index.html"><span class="identifier">JWTAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs JWT Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.auth.jwt/jwt-authentication.html">jwtAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">jwtAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwt.JWTVerifier, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/jwtVerifier">jwtVerifier</span><span class="symbol">:</span>&nbsp;<span class="identifier">JWTVerifier</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwt.JWTVerifier, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwt.JWTVerifier, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="../../../io.ktor.auth.jwt/-j-w-t-credential/index.html"><span class="identifier">JWTCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">jwtAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwk.JwkProvider, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/jwkProvider">jwkProvider</span><span class="symbol">:</span>&nbsp;<span class="identifier">JwkProvider</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwk.JwkProvider, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/issuer">issuer</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwk.JwkProvider, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt$jwtAuthentication(io.ktor.auth.Authentication.Configuration, com.auth0.jwk.JwkProvider, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="../../../io.ktor.auth.jwt/-j-w-t-credential/index.html"><span class="identifier">JWTCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../oauth.html">oauth</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">oauth</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/client">client</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/dispatcher">dispatcher</span><span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/providerLookup">providerLookup</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../-o-auth-server-settings/index.html"><span class="identifier">OAuthServerSettings</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/urlProvider">urlProvider</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../../-o-auth-server-settings/index.html"><span class="identifier">OAuthServerSettings</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">oauth</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.OAuthAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.OAuthAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-o-auth-authentication-provider/index.html"><span class="identifier">OAuthAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs OAuth Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../session.html">session</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">session</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$session(io.ktor.auth.Authentication.Configuration, kotlin.String, io.ktor.auth.SessionAuthChallenge((io.ktor.auth.session.T)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$session(io.ktor.auth.Authentication.Configuration, kotlin.String, io.ktor.auth.SessionAuthChallenge((io.ktor.auth.session.T)))/challenge">challenge</span><span class="symbol">:</span>&nbsp;<a href="../../-session-auth-challenge/index.html"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="../../session.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;SessionAuthChallenge.Default<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Provides ability to authenticate users via sessions. It only works if <a href="../../session.html#T">T</a> session type denotes <a href="../../-principal.html">Principal</a> as well
otherwise use full <a href="../../session.html">session</a> with lambda function with <a href="../../-session-authentication-provider/-configuration/validate.html">SessionAuthenticationProvider.Configuration.validate</a> configuration

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">session</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$session(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.SessionAuthenticationProvider.Configuration((io.ktor.auth.session.T)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$session(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.SessionAuthenticationProvider.Configuration((io.ktor.auth.session.T)), kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-session-authentication-provider/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&lt;</span><a href="../../session.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Provides ability to authenticate users via sessions. It is important to have
specified <a href="../../-session-authentication-provider/-configuration/validate.html">SessionAuthenticationProvider.Configuration.validate</a> and
<a href="../../-session-authentication-provider/-configuration/challenge.html">SessionAuthenticationProvider.Configuration.challenge</a> in the lambda
to get it work property


</td>
</tr>
</tbody>
</table>
