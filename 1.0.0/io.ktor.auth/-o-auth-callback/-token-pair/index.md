---
title: OAuthCallback.TokenPair - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">OAuthCallback</a> / <a href="./index.html">TokenPair</a></div>

# TokenPair

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">TokenPair</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OAuthCallback</span></a></code></div>

An OAuth1a token pair callback parameters

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">TokenPair</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.OAuthCallback.TokenPair$<init>(kotlin.String, kotlin.String)/token">token</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.OAuthCallback.TokenPair$<init>(kotlin.String, kotlin.String)/tokenSecret">tokenSecret</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

An OAuth1a token pair callback parameters


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="token.html">token</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">token</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

OAuth1a token


</td>
</tr>
<tr>
<td markdown="1">

<a href="token-secret.html">tokenSecret</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">tokenSecret</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

OAuth1a token secret


</td>
</tr>
</tbody>
</table>
