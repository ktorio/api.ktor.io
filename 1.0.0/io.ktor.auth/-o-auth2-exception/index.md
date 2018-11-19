---
title: OAuth2Exception - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">OAuth2Exception</a></div>

# OAuth2Exception

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuth2Exception</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/Exception.html"><span class="identifier">Exception</span></a></code></div>

Represents a error during communicating to OAuth2 server

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-invalid-grant/index.html">InvalidGrant</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">InvalidGrant</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth2Exception</span></a></code></div>

OAuth2 server responded error="invalid_grant"


</td>
</tr>
<tr>
<td markdown="1">

<a href="-missing-access-token/index.html">MissingAccessToken</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MissingAccessToken</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth2Exception</span></a></code></div>

Thrown when an OAuth2 server replied with successful HTTP status and expected content type that was successfully
decoded but the response doesn't contain error code nor access token


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unknown-exception/index.html">UnknownException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnknownException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth2Exception</span></a></code></div>

OAuth2 server responded with an error code <a href="error-code.html">errorCode</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unsupported-grant-type/index.html">UnsupportedGrantType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnsupportedGrantType</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth2Exception</span></a></code></div>

Throw when an OAuth2 server replied with error "unsupported_grant_type"


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="error-code.html">errorCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">errorCode</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

OAuth2 server replied with


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-invalid-grant/index.html">InvalidGrant</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">InvalidGrant</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth2Exception</span></a></code></div>

OAuth2 server responded error="invalid_grant"


</td>
</tr>
<tr>
<td markdown="1">

<a href="-missing-access-token/index.html">MissingAccessToken</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MissingAccessToken</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth2Exception</span></a></code></div>

Thrown when an OAuth2 server replied with successful HTTP status and expected content type that was successfully
decoded but the response doesn't contain error code nor access token


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unknown-exception/index.html">UnknownException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnknownException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth2Exception</span></a></code></div>

OAuth2 server responded with an error code <a href="error-code.html">errorCode</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unsupported-grant-type/index.html">UnsupportedGrantType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnsupportedGrantType</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OAuth2Exception</span></a></code></div>

Throw when an OAuth2 server replied with error "unsupported_grant_type"


</td>
</tr>
</tbody>
</table>
