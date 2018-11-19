---
title: SessionTransportTransformerMessageAuthentication - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">SessionTransportTransformerMessageAuthentication</a></div>

# SessionTransportTransformerMessageAuthentication

<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportTransformerMessageAuthentication</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a></code></div>

Session transformer that appends an <a href="algorithm.html">algorithm</a> MAC (Message Authentication Code) hash of the input.
Where the input is either a session contents or a previous transformation.
It uses a specified <a href="key-spec.html">keySpec</a> when generating the Mac hash.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">SessionTransportTransformerMessageAuthentication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(kotlin.ByteArray, kotlin.String)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(kotlin.ByteArray, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"HmacSHA1"<span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">SessionTransportTransformerMessageAuthentication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(javax.crypto.spec.SecretKeySpec, kotlin.String)/keySpec">keySpec</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/javax/crypto/spec/SecretKeySpec.html"><span class="identifier">SecretKeySpec</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(javax.crypto.spec.SecretKeySpec, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"HmacSHA1"<span class="symbol">)</span></code></div>

Session transformer that appends an <a href="-init-.html#io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(javax.crypto.spec.SecretKeySpec, kotlin.String)/algorithm">algorithm</a> MAC (Message Authentication Code) hash of the input.
Where the input is either a session contents or a previous transformation.
It uses a specified <a href="-init-.html#io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(javax.crypto.spec.SecretKeySpec, kotlin.String)/keySpec">keySpec</a> when generating the Mac hash.


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

is a message authentication algorithm name


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-spec.html">keySpec</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">keySpec</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/javax/crypto/spec/SecretKeySpec.html"><span class="identifier">SecretKeySpec</span></a></code></div>

is a secret key spec for message authentication


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">transformRead</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$transformRead(kotlin.String)/transportValue">transportValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Un-apply a transformation for <a href="transform-read.html#io.ktor.sessions.SessionTransportTransformerMessageAuthentication$transformRead(kotlin.String)/transportValue">transportValue</a> representing a transformed session.
Returns null if it fails.


</td>
</tr>
<tr>
<td markdown="1">

<a href="transform-write.html">transformWrite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">transformWrite</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$transformWrite(kotlin.String)/transportValue">transportValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Apply a transformation for <a href="transform-write.html#io.ktor.sessions.SessionTransportTransformerMessageAuthentication$transformWrite(kotlin.String)/transportValue">transportValue</a> representing a session.


</td>
</tr>
</tbody>
</table>
