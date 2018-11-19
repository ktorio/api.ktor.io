---
title: Location - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.locations</a> / <a href="./index.html">Location</a></div>

# Location

<div class="signature"><code><span class="identifier">@Target</span><span class="symbol">(</span>[AnnotationTarget.CLASS, AnnotationTarget.TYPEALIAS]<span class="symbol">)</span> <span class="keyword">annotation</span> <span class="keyword">class </span><span class="identifier">Location</span></code></div>

Annotation for classes that will act as typed routes.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Location</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.locations.Location$<init>(kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Annotation for classes that will act as typed routes.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="path.html">path</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">path</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

the route path, including class property names wrapped with curly braces.


</td>
</tr>
</tbody>
</table>
