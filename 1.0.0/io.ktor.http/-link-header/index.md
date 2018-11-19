---
title: LinkHeader - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">LinkHeader</a></div>

# LinkHeader

<div class="signature"><code><span class="keyword">class </span><span class="identifier">LinkHeader</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents a <code>Link</code> header value as per RFC 5988

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-parameters/index.html">Parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Parameters</span></code></div>

Known Link header parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="-rel/index.html">Rel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Rel</span></code></div>

Known rel parameter values


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
<div class="signature"><code><span class="identifier">LinkHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.String)/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.String)/rel">rel</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">LinkHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">LinkHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.collections.List((kotlin.String)), io.ktor.http.ContentType)/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.collections.List((kotlin.String)), io.ktor.http.ContentType)/rel">rel</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.collections.List((kotlin.String)), io.ktor.http.ContentType)/type">type</span><span class="symbol">:</span>&nbsp;<a href="../-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">LinkHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.LinkHeader$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/params">params</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Represents a <code>Link</code> header value as per RFC 5988


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="uri.html">uri</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">uri</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Link URI part


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-header-value-with-parameters/content.html">content</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">content</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

header's content without parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-header-value-with-parameters/parameters.html">parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-header-value-with-parameters/parameter.html">parameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parameter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HeaderValueWithParameters$parameter(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

The first value for the parameter with <a href="../-header-value-with-parameters/parameter.html#io.ktor.http.HeaderValueWithParameters$parameter(kotlin.String)/name">name</a> comparing case-insensitively or <code>null</code> if no such parameters found


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-header-value-with-parameters/to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../charset.html">charset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Extracts a <a href="#">Charset</a> value from the given <code>Content-Type</code>, <code>Content-Disposition</code> or similar header value.


</td>
</tr>
</tbody>
</table>
