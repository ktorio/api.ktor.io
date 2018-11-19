---
title: SelectInterest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="./index.html">SelectInterest</a></div>

# SelectInterest

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">SelectInterest</span></code></div>

Select interest kind

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-r-e-a-d.html">READ</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-w-r-i-t-e.html">WRITE</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-c-c-e-p-t.html">ACCEPT</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-c-o-n-n-e-c-t.html">CONNECT</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="flag.html">flag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">flag</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

to be set in NIO selector


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-all-interests.html">AllInterests</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">AllInterests</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html"><span class="identifier">Array</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">SelectInterest</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="flags.html">flags</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">flags</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int-array/index.html"><span class="identifier">IntArray</span></a></code></div>

interest's flags in enum entry order


</td>
</tr>
<tr>
<td markdown="1">

<a href="size.html">size</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">size</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
</tbody>
</table>
