---
title: OAuth2Exception.UnsupportedGrantType - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">OAuth2Exception</a> / <a href="./index.html">UnsupportedGrantType</a></div>

# UnsupportedGrantType

<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnsupportedGrantType</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OAuth2Exception</span></a></code></div>

Throw when an OAuth2 server replied with error "unsupported_grant_type"

### Parameters

<code>grantType</code> - that was passed to the server

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">UnsupportedGrantType</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.OAuth2Exception.UnsupportedGrantType$<init>(kotlin.String)/grantType">grantType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

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

<a href="grant-type.html">grantType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">grantType</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

that was passed to the server


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
