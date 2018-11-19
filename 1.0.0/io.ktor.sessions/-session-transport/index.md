---
title: SessionTransport - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">SessionTransport</a></div>

# SessionTransport

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionTransport</span></code></div>

SessionTransport <a href="receive.html">receive</a>, <a href="send.html">send</a> or <a href="clear.html">clear</a> a session from/to an <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a>.

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="clear.html">clear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">clear</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransport$clear(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Clears session information from a specific <a href="clear.html#io.ktor.sessions.SessionTransport$clear(io.ktor.application.ApplicationCall)/call">call</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive.html">receive</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">receive</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransport$receive(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Gets session information from a <a href="receive.html#io.ktor.sessions.SessionTransport$receive(io.ktor.application.ApplicationCall)/call">call</a> and returns a String if success or null if failed.


</td>
</tr>
<tr>
<td markdown="1">

<a href="send.html">send</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransport$send(io.ktor.application.ApplicationCall, kotlin.String)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.sessions.SessionTransport$send(io.ktor.application.ApplicationCall, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets session information represented by <a href="send.html#io.ktor.sessions.SessionTransport$send(io.ktor.application.ApplicationCall, kotlin.String)/value">value</a> to a <a href="send.html#io.ktor.sessions.SessionTransport$send(io.ktor.application.ApplicationCall, kotlin.String)/call">call</a>.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-session-transport-cookie/index.html">SessionTransportCookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportCookie</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionTransport</span></a></code></div>

SessionTransport that adds a Set-Cookie header and reads Cookie header
for the specified cookie <a href="../-session-transport-cookie/name.html">name</a>, and a specific cookie <a href="../-session-transport-cookie/configuration.html">configuration</a> after
applying/un-applying the specified transforms defined by <a href="../-session-transport-cookie/transformers.html">transformers</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-session-transport-header/index.html">SessionTransportHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportHeader</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">SessionTransport</span></a></code></div>

SessionTransport that sets or gets the specific header <a href="../-session-transport-header/name.html">name</a>,
applying/un-applying the specified transforms defined by <a href="../-session-transport-header/transformers.html">transformers</a>.


</td>
</tr>
</tbody>
</table>
