---
title: HttpAuthHeader - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">HttpAuthHeader</a></div>

# HttpAuthHeader

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">HttpAuthHeader</span></code></div>

Describes an authentication header with a mandatory <a href="auth-scheme.html">authScheme</a> that usually is a standard <a href="../-auth-scheme/index.html">AuthScheme</a>.

This can be of type <a href="-single/index.html">HttpAuthHeader.Single</a> or <a href="-parameterized/index.html">HttpAuthHeader.Parameterized</a>.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-parameterized/index.html">Parameterized</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Parameterized</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpAuthHeader</span></a></code></div>

Describes a parameterized authentication header that is represented by a set of <a href="-parameterized/parameters.html">parameters</a> encoded with <a href="-parameterized/encoding.html">encoding</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-parameters/index.html">Parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Parameters</span></code></div>

Standard parameters for <a href="./index.md">Parameterized</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-single/index.html">Single</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Single</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpAuthHeader</span></a></code></div>

Describes an authentication header that is represented by a single <a href="-single/blob.html">blob</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="auth-scheme.html">authScheme</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">authScheme</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

auth scheme, usually one of <a href="../-auth-scheme/index.html">AuthScheme</a>


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="render.html">render</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">render</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader$render(io.ktor.auth.HeaderValueEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../-header-value-encoding/index.html"><span class="identifier">HeaderValueEncoding</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with a specified <a href="render.html#io.ktor.auth.HttpAuthHeader$render(io.ktor.auth.HeaderValueEncoding)/encoding">encoding</a>.

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">render</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with the default <a href="../-header-value-encoding/index.html">HeaderValueEncoding</a> for this header.


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with the default <a href="../-header-value-encoding/index.html">HeaderValueEncoding</a> for this header.


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="basic-auth-challenge.html">basicAuthChallenge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">basicAuthChallenge</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$basicAuthChallenge(kotlin.String, java.nio.charset.Charset)/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$basicAuthChallenge(kotlin.String, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

Generates an <a href="../-auth-scheme/-basic.html">AuthScheme.Basic</a> challenge as a <a href="./index.md">HttpAuthHeader</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="digest-auth-challenge.html">digestAuthChallenge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">digestAuthChallenge</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$digestAuthChallenge(kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.String, kotlin.Boolean, kotlin.String)/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$digestAuthChallenge(kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.String, kotlin.Boolean, kotlin.String)/nonce">nonce</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;generateNonce()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$digestAuthChallenge(kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.String, kotlin.Boolean, kotlin.String)/domain">domain</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$digestAuthChallenge(kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.String, kotlin.Boolean, kotlin.String)/opaque">opaque</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$digestAuthChallenge(kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.String, kotlin.Boolean, kotlin.String)/stale">stale</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$digestAuthChallenge(kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.String, kotlin.Boolean, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"MD5"<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

Generates an <a href="../-auth-scheme/-digest.html">AuthScheme.Digest</a> challenge as a <a href="./index.md">HttpAuthHeader</a>.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-parameterized/index.html">Parameterized</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Parameterized</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpAuthHeader</span></a></code></div>

Describes a parameterized authentication header that is represented by a set of <a href="-parameterized/parameters.html">parameters</a> encoded with <a href="-parameterized/encoding.html">encoding</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-single/index.html">Single</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Single</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpAuthHeader</span></a></code></div>

Describes an authentication header that is represented by a single <a href="-single/blob.html">blob</a>.


</td>
</tr>
</tbody>
</table>
