---
title: SessionTransportTransformer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">SessionTransportTransformer</a></div>

# SessionTransportTransformer

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionTransportTransformer</span></code></div>

Represents a session cookie transformation. Useful for such things like signing and encryption

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="transform-read.html">transformRead</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">transformRead</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportTransformer$transformRead(kotlin.String)/transportValue">transportValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Un-apply a transformation for <a href="transform-read.html#io.ktor.sessions.SessionTransportTransformer$transformRead(kotlin.String)/transportValue">transportValue</a> representing a transformed session.
Returns null if it fails.


</td>
</tr>
<tr>
<td markdown="1">

<a href="transform-write.html">transformWrite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">transformWrite</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionTransportTransformer$transformWrite(kotlin.String)/transportValue">transportValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Apply a transformation for <a href="transform-write.html#io.ktor.sessions.SessionTransportTransformer$transformWrite(kotlin.String)/transportValue">transportValue</a> representing a session.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-session-transport-transformer-digest/index.html">SessionTransportTransformerDigest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportTransformerDigest</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">SessionTransportTransformer</span></a></code></div>

Session transformer that appends an <a href="../-session-transport-transformer-digest/algorithm.html">algorithm</a> hash of the input.
Where the input is either a session contents or a previous transformation.
It prepends a <a href="../-session-transport-transformer-digest/salt.html">salt</a> when computing the hash.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-session-transport-transformer-encrypt/index.html">SessionTransportTransformerEncrypt</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportTransformerEncrypt</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">SessionTransportTransformer</span></a></code></div>

Session transformer that encrypts/decrypts the input.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-session-transport-transformer-message-authentication/index.html">SessionTransportTransformerMessageAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionTransportTransformerMessageAuthentication</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">SessionTransportTransformer</span></a></code></div>

Session transformer that appends an <a href="../-session-transport-transformer-message-authentication/algorithm.html">algorithm</a> MAC (Message Authentication Code) hash of the input.
Where the input is either a session contents or a previous transformation.
It uses a specified <a href="../-session-transport-transformer-message-authentication/key-spec.html">keySpec</a> when generating the Mac hash.


</td>
</tr>
</tbody>
</table>
