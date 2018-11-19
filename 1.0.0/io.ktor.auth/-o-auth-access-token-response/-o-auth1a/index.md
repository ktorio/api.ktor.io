---
title: OAuthAccessTokenResponse.OAuth1a - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">OAuthAccessTokenResponse</a> / <a href="./index.html">OAuth1a</a></div>

# OAuth1a

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">OAuth1a</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OAuthAccessTokenResponse</span></a></code></div>

OAuth1a access token acquired from the server

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">OAuth1a</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthAccessTokenResponse.OAuth1a$<init>(kotlin.String, kotlin.String, io.ktor.http.Parameters)/token">token</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthAccessTokenResponse.OAuth1a$<init>(kotlin.String, kotlin.String, io.ktor.http.Parameters)/tokenSecret">tokenSecret</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthAccessTokenResponse.OAuth1a$<init>(kotlin.String, kotlin.String, io.ktor.http.Parameters)/extraParameters">extraParameters</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Parameters.Empty<span class="symbol">)</span></code></div>

OAuth1a access token acquired from the server


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
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

<a href="token.html">token</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">token</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

itself


</td>
</tr>
<tr>
<td markdown="1">

<a href="token-secret.html">tokenSecret</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">tokenSecret</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

token secret to be used with <a href="token.html">token</a>


</td>
</tr>
</tbody>
</table>
