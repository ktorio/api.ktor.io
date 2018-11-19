---
title: TLSAlertLevel - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls</a> / <a href="./index.html">TLSAlertLevel</a></div>

# TLSAlertLevel

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSAlertLevel</span></code></div>

TLS alert level

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-w-a-r-n-i-n-g.html">WARNING</a>


</td>
<td markdown="1">

alert warning level


</td>
</tr>
<tr>
<td markdown="1">

<a href="-f-a-t-a-l.html">FATAL</a>


</td>
<td markdown="1">

alert level fatal so the session most likely will be discarded


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="code.html">code</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

alert numeric code


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="by-code.html">byCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.TLSAlertLevel.Companion$byCode(kotlin.Int)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">TLSAlertLevel</span></a></code></div>

Find alert level by it's numeric <a href="by-code.html#io.ktor.network.tls.TLSAlertLevel.Companion$byCode(kotlin.Int)/code">code</a> or fail


</td>
</tr>
</tbody>
</table>
