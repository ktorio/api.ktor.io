---
title: HttpMethod - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">HttpMethod</a></div>

# HttpMethod

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpMethod</span></code></div>

Represents an HTTP method (verb)

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpMethod</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HttpMethod$<init>(kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Represents an HTTP method (verb)


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="value.html">value</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">value</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

contains method name


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-default-methods.html">DefaultMethods</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">DefaultMethods</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">HttpMethod</span></a><span class="symbol">&gt;</span></code></div>

A list of default HTTP methods


</td>
</tr>
<tr>
<td markdown="1">

<a href="-delete.html">Delete</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Delete</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpMethod</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-get.html">Get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Get</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpMethod</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-head.html">Head</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Head</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpMethod</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-options.html">Options</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Options</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpMethod</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-patch.html">Patch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Patch</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpMethod</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-post.html">Post</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Post</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpMethod</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-put.html">Put</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Put</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpMethod</span></a></code></div>

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parse</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HttpMethod.Companion$parse(kotlin.String)/method">method</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpMethod</span></a></code></div>

Parse HTTP method by <a href="parse.html#io.ktor.http.HttpMethod.Companion$parse(kotlin.String)/method">method</a> string


</td>
</tr>
</tbody>
</table>
