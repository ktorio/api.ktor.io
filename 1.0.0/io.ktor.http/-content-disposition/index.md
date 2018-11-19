---
title: ContentDisposition - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">ContentDisposition</a></div>

# ContentDisposition

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ContentDisposition</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents <code>Content-Disposition</code> header value

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-parameters/index.html">Parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Parameters</span></code></div>

Frequently used content disposition parameter names


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
<div class="signature"><code><span class="identifier">ContentDisposition</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ContentDisposition$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/disposition">disposition</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ContentDisposition$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">)</span></code></div>

Represents <code>Content-Disposition</code> header value


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="disposition.html">disposition</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">disposition</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Content disposition value without parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Content disposition name (from parameter named <code>name</code>)


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

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="equals.html">equals</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">equals</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentDisposition$equals(kotlin.Any)/other">other</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

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

<a href="with-parameter.html">withParameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">withParameter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ContentDisposition$withParameter(kotlin.String, kotlin.String)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ContentDisposition$withParameter(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentDisposition</span></a></code></div>

Creates new with parameter appended


</td>
</tr>
<tr>
<td markdown="1">

<a href="with-parameters.html">withParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">withParameters</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ContentDisposition$withParameters(kotlin.collections.List((io.ktor.http.HeaderValueParam)))/newParameters">newParameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentDisposition</span></a></code></div>

Creates new with parameters appended


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

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-attachment.html">Attachment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Attachment</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentDisposition</span></a></code></div>

<code>Content-Disposition: attachment</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-file.html">File</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">File</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentDisposition</span></a></code></div>

<code>Content-Disposition: file</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-inline.html">Inline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Inline</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentDisposition</span></a></code></div>

<code>Content-Disposition: inline</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-mixed.html">Mixed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Mixed</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentDisposition</span></a></code></div>

<code>Content-Disposition: mixed</code>


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parse</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentDisposition.Companion$parse(kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ContentDisposition</span></a></code></div>

Parse <code>Content-Disposition</code> header <a href="parse.html#io.ktor.http.ContentDisposition.Companion$parse(kotlin.String)/value">value</a>


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
