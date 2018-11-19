---
title: OAuth2Exception.MissingAccessToken - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">OAuth2Exception</a> / <a href="./index.html">MissingAccessToken</a></div>

# MissingAccessToken

<div class="signature"><code><span class="keyword">class </span><span class="identifier">MissingAccessToken</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OAuth2Exception</span></a></code></div>

Thrown when an OAuth2 server replied with successful HTTP status and expected content type that was successfully
decoded but the response doesn't contain error code nor access token

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">MissingAccessToken</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Thrown when an OAuth2 server replied with successful HTTP status and expected content type that was successfully
decoded but the response doesn't contain error code nor access token


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../error-code.html">errorCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">errorCode</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

OAuth2 server replied with


</td>
</tr>
</tbody>
</table>
