---
title: HeaderValueWithParameters - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">HeaderValueWithParameters</a></div>

# HeaderValueWithParameters

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">HeaderValueWithParameters</span></code></div>

Represents a header value that consist of <a href="content.html">content</a> followed by <a href="parameters.html">parameters</a>.
Useful for headers such as <code>Content-Type</code>, <code>Content-Disposition</code> and so on.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HeaderValueWithParameters</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HeaderValueWithParameters$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HeaderValueWithParameters$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">)</span></code></div>

Represents a header value that consist of <a href="-init-.html#io.ktor.http.HeaderValueWithParameters$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/content">content</a> followed by <a href="-init-.html#io.ktor.http.HeaderValueWithParameters$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/parameters">parameters</a>.
Useful for headers such as <code>Content-Type</code>, <code>Content-Disposition</code> and so on.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="content.html">content</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">content</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

header's content without parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="parameters.html">parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="parameter.html">parameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parameter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HeaderValueWithParameters$parameter(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

The first value for the parameter with <a href="parameter.html#io.ktor.http.HeaderValueWithParameters$parameter(kotlin.String)/name">name</a> comparing case-insensitively or <code>null</code> if no such parameters found


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="parse.html">parse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">parse</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HeaderValueWithParameters.Companion$parse(kotlin.String, kotlin.Function2((kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.http.HeaderValueWithParameters.Companion.parse.R)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HeaderValueWithParameters.Companion$parse(kotlin.String, kotlin.Function2((kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.http.HeaderValueWithParameters.Companion.parse.R)))/init">init</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="parse.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="parse.html#R"><span class="identifier">R</span></a></code></div>

Parse header with parameter and pass it to <a href="parse.html#io.ktor.http.HeaderValueWithParameters.Companion$parse(kotlin.String, kotlin.Function2((kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.http.HeaderValueWithParameters.Companion.parse.R)))/init">init</a> function to instantiate particular type


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
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HeaderValueWithParameters</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Extracts a <a href="#">Charset</a> value from the given <code>Content-Type</code>, <code>Content-Disposition</code> or similar header value.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-content-disposition/index.html">ContentDisposition</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ContentDisposition</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents <code>Content-Disposition</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-content-type/index.html">ContentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ContentType</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents a value for a <code>Content-Type</code> header.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-link-header/index.html">LinkHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">LinkHeader</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents a <code>Link</code> header value as per RFC 5988


</td>
</tr>
</tbody>
</table>
