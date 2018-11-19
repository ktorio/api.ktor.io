---
title: SessionTransportCookie - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">SessionTransportCookie</a></div>

# SessionTransportCookie

<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportCookie</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-session-transport/index.html"><span class="identifier">SessionTransport</span></a></code></div>

SessionTransport that adds a Set-Cookie header and reads Cookie header
for the specified cookie <a href="name.html">name</a>, and a specific cookie <a href="configuration.html">configuration</a> after
applying/un-applying the specified transforms defined by <a href="transformers.html">transformers</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">SessionTransportCookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/configuration">configuration</span><span class="symbol">:</span>&nbsp;<a href="../-cookie-configuration/index.html"><span class="identifier">CookieConfiguration</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/transformers">transformers</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

SessionTransport that adds a Set-Cookie header and reads Cookie header
for the specified cookie <a href="-init-.html#io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/name">name</a>, and a specific cookie <a href="-init-.html#io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/configuration">configuration</a> after
applying/un-applying the specified transforms defined by <a href="-init-.html#io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/transformers">transformers</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="configuration.html">configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">configuration</span><span class="symbol">: </span><a href="../-cookie-configuration/index.html"><span class="identifier">CookieConfiguration</span></a></code></div>

is a cookie configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

is a cookie name


</td>
</tr>
<tr>
<td markdown="1">

<a href="transformers.html">transformers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">transformers</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a><span class="symbol">&gt;</span></code></div>

is a list of session transformers


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="clear.html">clear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">clear</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$clear(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Clears session information from a specific <a href="clear.html#io.ktor.sessions.SessionTransportCookie$clear(io.ktor.application.ApplicationCall)/call">call</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive.html">receive</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">receive</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$receive(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Gets session information from a <a href="receive.html#io.ktor.sessions.SessionTransportCookie$receive(io.ktor.application.ApplicationCall)/call">call</a> and returns a String if success or null if failed.


</td>
</tr>
<tr>
<td markdown="1">

<a href="send.html">send</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$send(io.ktor.application.ApplicationCall, kotlin.String)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$send(io.ktor.application.ApplicationCall, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets session information represented by <a href="send.html#io.ktor.sessions.SessionTransportCookie$send(io.ktor.application.ApplicationCall, kotlin.String)/value">value</a> to a <a href="send.html#io.ktor.sessions.SessionTransportCookie$send(io.ktor.application.ApplicationCall, kotlin.String)/call">call</a>.


</td>
</tr>
</tbody>
</table>
