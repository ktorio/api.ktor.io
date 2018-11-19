---
title: HeaderValueEncoding - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">HeaderValueEncoding</a></div>

# HeaderValueEncoding

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">HeaderValueEncoding</span></code></div>

Describes how a header should be encoded.

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-q-u-o-t-e-d_-w-h-e-n_-r-e-q-u-i-r-e-d.html">QUOTED_WHEN_REQUIRED</a>


</td>
<td markdown="1">

The header will be quoted only when required.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-q-u-o-t-e-d_-a-l-w-a-y-s.html">QUOTED_ALWAYS</a>


</td>
<td markdown="1">

The header will be quoted always.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-u-r-i_-e-n-c-o-d-e.html">URI_ENCODE</a>


</td>
<td markdown="1">

The header will be URI-encoded as described in the RFC-3986:


</td>
</tr>
</tbody>
</table>
