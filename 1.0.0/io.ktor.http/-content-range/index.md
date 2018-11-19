---
title: ContentRange - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">ContentRange</a></div>

# ContentRange

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">ContentRange</span></code></div>

Represents a <code>Range</code> header's particular range

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-bounded/index.html">Bounded</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Bounded</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ContentRange</span></a></code></div>

Represents a <code>Content-Range</code> bounded from both sides


</td>
</tr>
<tr>
<td markdown="1">

<a href="-suffix/index.html">Suffix</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Suffix</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ContentRange</span></a></code></div>

Represents a <code>Content-Range</code> bounded by tail size


</td>
</tr>
<tr>
<td markdown="1">

<a href="-tail-from/index.html">TailFrom</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">TailFrom</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ContentRange</span></a></code></div>

Represents a <code>Content-Range</code> bounded at the beginning (skip first bytes, show tail)


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-bounded/index.html">Bounded</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Bounded</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ContentRange</span></a></code></div>

Represents a <code>Content-Range</code> bounded from both sides


</td>
</tr>
<tr>
<td markdown="1">

<a href="-suffix/index.html">Suffix</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Suffix</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ContentRange</span></a></code></div>

Represents a <code>Content-Range</code> bounded by tail size


</td>
</tr>
<tr>
<td markdown="1">

<a href="-tail-from/index.html">TailFrom</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">TailFrom</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ContentRange</span></a></code></div>

Represents a <code>Content-Range</code> bounded at the beginning (skip first bytes, show tail)


</td>
</tr>
</tbody>
</table>
