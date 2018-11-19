---
title: HttpAuthHeader.Parameterized - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">HttpAuthHeader</a> / <a href="./index.html">Parameterized</a></div>

# Parameterized

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Parameterized</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">HttpAuthHeader</span></a></code></div>

Describes a parameterized authentication header that is represented by a set of <a href="parameters.html">parameters</a> encoded with <a href="encoding.html">encoding</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Parameterized</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$<init>(kotlin.String, kotlin.collections.Map((kotlin.String, )), io.ktor.auth.HeaderValueEncoding)/authScheme">authScheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$<init>(kotlin.String, kotlin.collections.Map((kotlin.String, )), io.ktor.auth.HeaderValueEncoding)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$<init>(kotlin.String, kotlin.collections.Map((kotlin.String, )), io.ktor.auth.HeaderValueEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../../-header-value-encoding/index.html"><span class="identifier">HeaderValueEncoding</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HeaderValueEncoding.QUOTED_WHEN_REQUIRED<span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">Parameterized</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.auth.HeaderValueEncoding)/authScheme">authScheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.auth.HeaderValueEncoding)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.http/-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.auth.HeaderValueEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../../-header-value-encoding/index.html"><span class="identifier">HeaderValueEncoding</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HeaderValueEncoding.QUOTED_WHEN_REQUIRED<span class="symbol">)</span></code></div>

Describes a parameterized authentication header that is represented by a set of <a href="-init-.html#io.ktor.auth.HttpAuthHeader.Parameterized$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.auth.HeaderValueEncoding)/parameters">parameters</a> encoded with <a href="-init-.html#io.ktor.auth.HttpAuthHeader.Parameterized$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.auth.HeaderValueEncoding)/encoding">encoding</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="encoding.html">encoding</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">encoding</span><span class="symbol">: </span><a href="../../-header-value-encoding/index.html"><span class="identifier">HeaderValueEncoding</span></a></code></div>

parameters encoding method, one of <a href="../../-header-value-encoding/index.html">HeaderValueEncoding</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="parameters.html">parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.http/-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span></code></div>

a list of auth parameters


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../auth-scheme.html">authScheme</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">authScheme</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

auth scheme, usually one of <a href="../../-auth-scheme/index.html">AuthScheme</a>


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="equals.html">equals</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">equals</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$equals(kotlin.Any)/other">other</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="hash-code.html">hashCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hashCode</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="parameter.html">parameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parameter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$parameter(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Tries to extract the first value of a parameter <a href="parameter.html#io.ktor.auth.HttpAuthHeader.Parameterized$parameter(kotlin.String)/name">name</a>. Returns null when not found.


</td>
</tr>
<tr>
<td markdown="1">

<a href="render.html">render</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">render</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$render(io.ktor.auth.HeaderValueEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../../-header-value-encoding/index.html"><span class="identifier">HeaderValueEncoding</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with a specified <a href="render.html#io.ktor.auth.HttpAuthHeader.Parameterized$render(io.ktor.auth.HeaderValueEncoding)/encoding">encoding</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">render</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with the default <a href="../../-header-value-encoding/index.html">HeaderValueEncoding</a> for this header.


</td>
</tr>
<tr>
<td markdown="1">

<a href="with-parameter.html">withParameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">withParameter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$withParameter(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Parameterized$withParameter(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Parameterized</span></a></code></div>

Copies this <a href="./index.md">Parameterized</a> appending a new parameter <a href="with-parameter.html#io.ktor.auth.HttpAuthHeader.Parameterized$withParameter(kotlin.String, kotlin.String)/value">name</a>.


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with the default <a href="../../-header-value-encoding/index.html">HeaderValueEncoding</a> for this header.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../sign.html">sign</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Parameterized</span></a><span class="symbol">.</span><span class="identifier">sign</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$sign(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.Pair((kotlin.String, )))))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$sign(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.Pair((kotlin.String, )))))/baseUrl">baseUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$sign(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.Pair((kotlin.String, )))))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$sign(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.Pair((kotlin.String, )))))/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Parameterized</span></a></code></div>

Sign an HTTP auth header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../to-digest-credential.html">toDigestCredential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Parameterized</span></a><span class="symbol">.</span><span class="identifier">toDigestCredential</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../-digest-credential/index.html"><span class="identifier">DigestCredential</span></a></code></div>

Converts <a href="../index.html">HttpAuthHeader</a> to <a href="../../-digest-credential/index.html">DigestCredential</a>


</td>
</tr>
</tbody>
</table>
