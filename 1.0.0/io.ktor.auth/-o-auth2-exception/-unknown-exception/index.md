---
title: OAuth2Exception.UnknownException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">OAuth2Exception</a> / <a href="./index.html">UnknownException</a></div>

# UnknownException

<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnknownException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OAuth2Exception</span></a></code></div>

OAuth2 server responded with an error code <a href="../error-code.html">errorCode</a>

### Parameters

<code>errorCode</code> - the OAuth2 server replied with

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">UnknownException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.OAuth2Exception.UnknownException$<init>(kotlin.String, kotlin.String)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.OAuth2Exception.UnknownException$<init>(kotlin.String, kotlin.String)/errorCode">errorCode</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

OAuth2 server responded with an error code <a href="-init-.html#io.ktor.auth.OAuth2Exception.UnknownException$<init>(kotlin.String, kotlin.String)/errorCode">errorCode</a>


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
