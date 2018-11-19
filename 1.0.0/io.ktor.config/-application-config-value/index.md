---
title: ApplicationConfigValue - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.config</a> / <a href="./index.html">ApplicationConfigValue</a></div>

# ApplicationConfigValue

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationConfigValue</span></code></div>

Represents an application config value

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="get-list.html">getList</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">getList</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Get property list value


</td>
</tr>
<tr>
<td markdown="1">

<a href="get-string.html">getString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">getString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Get property string value


</td>
</tr>
</tbody>
</table>
