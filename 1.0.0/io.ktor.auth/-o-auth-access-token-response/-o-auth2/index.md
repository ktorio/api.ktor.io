---
title: OAuthAccessTokenResponse.OAuth2 - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">OAuthAccessTokenResponse</a> / <a href="./index.html">OAuth2</a></div>

# OAuth2

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">OAuth2</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OAuthAccessTokenResponse</span></a></code></div>

OAuth2 access token acquired from the server

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">OAuth2</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthAccessTokenResponse.OAuth2$<init>(kotlin.String, kotlin.String, kotlin.Long, kotlin.String, io.ktor.http.Parameters)/accessToken">accessToken</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthAccessTokenResponse.OAuth2$<init>(kotlin.String, kotlin.String, kotlin.Long, kotlin.String, io.ktor.http.Parameters)/tokenType">tokenType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthAccessTokenResponse.OAuth2$<init>(kotlin.String, kotlin.String, kotlin.Long, kotlin.String, io.ktor.http.Parameters)/expiresIn">expiresIn</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthAccessTokenResponse.OAuth2$<init>(kotlin.String, kotlin.String, kotlin.Long, kotlin.String, io.ktor.http.Parameters)/refreshToken">refreshToken</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthAccessTokenResponse.OAuth2$<init>(kotlin.String, kotlin.String, kotlin.Long, kotlin.String, io.ktor.http.Parameters)/extraParameters">extraParameters</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Parameters.Empty<span class="symbol">)</span></code></div>

OAuth2 access token acquired from the server


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="access-token.html">accessToken</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">accessToken</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

access token from server


</td>
</tr>
<tr>
<td markdown="1">

<a href="expires-in.html">expiresIn</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">expiresIn</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

token expiration timestamp


</td>
</tr>
<tr>
<td markdown="1">

<a href="extra-parameters.html">extraParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">extraParameters</span><span class="symbol">: </span><a href="../../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

contains additional parameters provided by the server


</td>
</tr>
<tr>
<td markdown="1">

<a href="refresh-token.html">refreshToken</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">refreshToken</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

to be used to refresh access token after expiration


</td>
</tr>
<tr>
<td markdown="1">

<a href="token-type.html">tokenType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">tokenType</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

OAuth2 token type (usually Bearer)


</td>
</tr>
</tbody>
</table>
