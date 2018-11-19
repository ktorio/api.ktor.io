---
title: HttpResponseConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.response</a> / <a href="./index.html">HttpResponseConfig</a></div>

# HttpResponseConfig

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">HttpResponseConfig</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpResponseConfig</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="default-charset.html">defaultCharset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">defaultCharset</span><span class="symbol">: </span><span class="identifier">Charset</span></code></div>

Default <a href="#">Charset</a> for response content if not specified, the initial value is ISO_8859_1.
If ISO_8859_1 is not available, UTF-8 is used as a fallback.


</td>
</tr>
</tbody>
</table>
