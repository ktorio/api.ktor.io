---
title: CloseReason - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="./index.html">CloseReason</a></div>

# CloseReason

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">CloseReason</span></code></div>

Websocket close reason

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-codes/index.html">Codes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">Codes</span></code></div>

Standard close reason codes


</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">CloseReason</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.CloseReason$<init>(io.ktor.http.cio.websocket.CloseReason.Codes, kotlin.String)/code">code</span><span class="symbol">:</span>&nbsp;<a href="-codes/index.html"><span class="identifier">Codes</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.CloseReason$<init>(io.ktor.http.cio.websocket.CloseReason.Codes, kotlin.String)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">CloseReason</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.CloseReason$<init>(kotlin.Short, kotlin.String)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.CloseReason$<init>(kotlin.Short, kotlin.String)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Websocket close reason


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="code.html">code</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a></code></div>
* close reason code as per RFC 6455, recommended to be one of <a href="-codes/index.html">CloseReason.Codes</a>

</td>
</tr>
<tr>
<td markdown="1">

<a href="known-reason.html">knownReason</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">knownReason</span><span class="symbol">: </span><a href="-codes/index.html"><span class="identifier">Codes</span></a><span class="symbol">?</span></code></div>

A enum value for this <a href="code.html">code</a> or <code>null</code> if the <a href="code.html">code</a> is not listed in <a href="-codes/index.html">Codes</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="message.html">message</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">message</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>
* a close reason message, could be empty

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
