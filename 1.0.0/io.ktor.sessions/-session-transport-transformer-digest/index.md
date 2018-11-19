---
title: SessionTransportTransformerDigest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">SessionTransportTransformerDigest</a></div>

# SessionTransportTransformerDigest

<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportTransformerDigest</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a></code></div>

Session transformer that appends an <a href="algorithm.html">algorithm</a> hash of the input.
Where the input is either a session contents or a previous transformation.
It prepends a <a href="salt.html">salt</a> when computing the hash.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">SessionTransportTransformerDigest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerDigest$<init>(kotlin.String, kotlin.String)/salt">salt</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"ktor"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerDigest$<init>(kotlin.String, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"SHA-256"<span class="symbol">)</span></code></div>

Session transformer that appends an <a href="-init-.html#io.ktor.sessions.SessionTransportTransformerDigest$<init>(kotlin.String, kotlin.String)/algorithm">algorithm</a> hash of the input.
Where the input is either a session contents or a previous transformation.
It prepends a <a href="-init-.html#io.ktor.sessions.SessionTransportTransformerDigest$<init>(kotlin.String, kotlin.String)/salt">salt</a> when computing the hash.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="algorithm.html">algorithm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">algorithm</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

is a message digest algorithm


</td>
</tr>
<tr>
<td markdown="1">

<a href="salt.html">salt</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">salt</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

that is used for message digest algorithm


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="transform-read.html">transformRead</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">transformRead</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerDigest$transformRead(kotlin.String)/transportValue">transportValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Un-apply a transformation for <a href="transform-read.html#io.ktor.sessions.SessionTransportTransformerDigest$transformRead(kotlin.String)/transportValue">transportValue</a> representing a transformed session.
Returns null if it fails.


</td>
</tr>
<tr>
<td markdown="1">

<a href="transform-write.html">transformWrite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">transformWrite</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerDigest$transformWrite(kotlin.String)/transportValue">transportValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Apply a transformation for <a href="transform-write.html#io.ktor.sessions.SessionTransportTransformerDigest$transformWrite(kotlin.String)/transportValue">transportValue</a> representing a session.


</td>
</tr>
</tbody>
</table>
