---
title: CacheControl.Visibility - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http</a> / <a href="../index.html">CacheControl</a> / <a href="./index.html">Visibility</a></div>

# Visibility

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">Visibility</span></code></div>

Controls caching by proxies

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-public.html">Public</a>


</td>
<td markdown="1">

Specifies that the response is cacheable by clients and shared (proxy) caches.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-private.html">Private</a>


</td>
<td markdown="1">

Specifies that the response is cacheable only on the client and not by shared (proxy server) caches.


</td>
</tr>
</tbody>
</table>
